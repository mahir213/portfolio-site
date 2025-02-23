import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/ui/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          [
            {
              name: "Home",
              link: "#",
              
            },
            {
              name: "About",
              link: "#about",
             
            },
            {
              name: "Projects",
              link: "#projects",
              
            },
            {
              name: "Contact",
              link: "#contact",
             
            },
          ]
        }/>
       <Hero/>
       <Grid/>
       <RecentProjects/>
       <Approach/>
       <Footer/>
       </div>
    </main>
  );
}
