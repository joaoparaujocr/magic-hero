import Image from "next/image";
import styled from "styled-components";
import ImageDefault from "../../public/image.png";
import Post from "@/interface/Post";
import Link from "next/link";

interface ListPostsProps {
  posts: Post[];
}

const List = styled.ul`
  width: 100%;
  padding: 30px 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  li {
    width: 100%;
    max-width: 260px;
    padding: 20px;
    border-radius: 10px;
    background-color: #252525;
    color: white;

    a {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  h4 {
    color: ${({
      theme: {
        COLORS: { PURLPLE },
      },
    }) => PURLPLE};
  }
`;

export default function ListPosts({ posts }: ListPostsProps) {
  return (
    <List>
      {posts.map(({ description, id, title }) => (
        <li key={id}>
          <Link key={id} href={`/post/${id}`}>
            <Image
              src={ImageDefault}
              alt=""
              width={220}
              height={130}
              style={{
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <h4>{title}</h4>
            <p>
              {description.length > 60
                ? `${description.slice(0, 60)}...`
                : description}
            </p>
          </Link>
        </li>
      ))}
    </List>
  );
}
