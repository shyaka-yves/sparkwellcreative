import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ProblemSolution />
      <Services />
      <ClientTypes />
      <WhyChooseUs />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTAFooter />
      <WhatsAppButton />
    </div>
  );
}
