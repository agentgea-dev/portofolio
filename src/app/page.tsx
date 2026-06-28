import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGithubProjects } from "@/lib/github";

export default async function Home() {
  const projects = await getGithubProjects();
  return (
    <>
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <Work projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
