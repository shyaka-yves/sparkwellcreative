import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Traction } from "@/components/sections/Traction";
import { MarketImpact } from "@/components/sections/MarketImpact";
import { Pricing } from "@/components/sections/Pricing";
import { Portfolio } from "@/components/sections/Portfolio";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
      <Traction />
      <MarketImpact />
      <Portfolio />
      <Team />
      <Pricing />
      <Contact />
    </div>
  );
}
