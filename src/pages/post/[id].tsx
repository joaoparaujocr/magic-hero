import Layout from "@/components/Layout";
import Post from "@/interface/Post";
import { Container } from "@/styles/pages/post";
import { GetStaticProps } from "next";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { content, description, title } = post;

  return (
    <Layout>
      <Container>
        <h2>{title}</h2>

        <p>{content}</p>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = params?.id;
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths: [],
    fallback: "blocking",
  };
};
