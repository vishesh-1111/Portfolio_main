import { Card } from "@/components/ui/card";
import PortfolioNavbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/Hero";
import ExperienceSection from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/ContactMe";

export default  function Portfolio() {
  return (
    <div>
      {/* <PortfolioNavbar/> */}
      <div className="pt-15">
      <HeroSection/>
      </div>
      <ExperienceSection/>
      <Projects/>
      <Contact/>
    </div>
  );
}