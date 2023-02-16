import { Hero } from "../components/index/hero/Hero";
import { HeadElement } from "../components/reuseables/Head";

export default function Home() {
  return (
    <>
      <HeadElement />
      <Hero />
    </>
  );
}
