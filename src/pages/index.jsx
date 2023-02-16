import { Hero, Skills } from "../components/index";
import { HeadElement } from "../components/reuseables/Head";

export default function Home() {
  return (
    <>
      <HeadElement />
      <Hero />
      <Skills />
    </>
  );
}
