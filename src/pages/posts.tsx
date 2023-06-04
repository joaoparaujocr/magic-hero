import Layout from "@/components/Layout";
import ListPosts from "@/components/ListPosts";
import Post from "@/interface/Post";
import { SectionPosts } from "@/styles/pages/posts";
import { GetServerSideProps } from "next";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Layout>
      <SectionPosts>
        <h1>Todos os posts</h1>
        <ListPosts posts={posts} />
      </SectionPosts>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const res = await fetch("http://localhost:3000/api/posts/");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
