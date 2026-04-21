import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Tools } from "../components/Tools";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Clients } from "../components/Clients";
import { Metrics } from "../components/Metrics";
import { Process } from "../components/Process";
import { Insights } from "../components/Insights";
import { getFeaturedPosts } from "../data/blogPosts";

export function Home() {
  const featured = getFeaturedPosts();

  return (
    <>
      <Hero />
      <Metrics />
      <Clients />
      <Services />
      <Tools />
      <Process />
      <About />
      <Insights posts={featured} />
      <Contact />
    </>
  );
}
