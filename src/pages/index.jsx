import { About, Hero, Projects, Contacts } from "../components/index";
import { HeadElement } from "../components/reuseables/Head";

export default function Home() {
  return (
    <>
      <HeadElement />
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}
