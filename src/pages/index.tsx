import Layout from "@/components/Layout";
import ListPosts from "@/components/ListPosts";
import Post from "@/interface/Post";
import {
  BannerContainer,
  SectionPosts,
  ContainerSections,
} from "@/styles/pages/home";
import { GetServerSideProps } from "next";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <BannerContainer>
        <p>
          Bem-vindo ao Blog do
          <br />
          <span>Thundar, o Protetor do Trovão</span>
        </p>
      </BannerContainer>
      <ContainerSections>
        <SectionPosts>
          <h1>Mais vistos</h1>
          <ListPosts posts={posts} />
        </SectionPosts>

        <SectionPosts>
          <h1>Mais Recentes</h1>
          <ListPosts posts={posts} />
        </SectionPosts>
      </ContainerSections>
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
