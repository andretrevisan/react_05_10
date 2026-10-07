import Image from "next/image";
import Header from "./components/Header";
import Menu from "./components/menu";
import Portifolio from "./components/portifolio";

export default function Home() {
  return (
    <>
    <Header />
    <Menu />
    <hr className="border-gray-300"  />
    <Portifolio />
    
    </>
  );
}
