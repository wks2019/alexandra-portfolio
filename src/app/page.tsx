import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { WhyHire } from "@/components/sections/why-hire";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <WhyHire />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
