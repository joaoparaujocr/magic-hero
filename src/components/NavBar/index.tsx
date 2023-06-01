import Image from "next/image";
import { Header } from "./styles";
import Layout from "../../../public/logo.png";

export default function NavBar() {
  return (
    <Header>
      <Image alt="logo" src={Layout} width={300} />
    </Header>
  );
}
