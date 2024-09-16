import Intro from "../components/Intro";
import Avatar from "../components/Avatar";
import AboutCompHome from "../components/AboutCompHome";
import ProjectCompHome from "../components/ProjectCompHome";
import TechStack from "../components/TechStack";
import ToggleComp from "../components/ToggleComp";
import Socials from "../components/Socials";
import CopyMail from "../components/CopyMail";
import SeeMoreProjects from "../components/SeeMoreProjects";

export default function Home() {
  return (
    <div className="flex gap-4 h-full">
      <div className="flex flex-col gap-4 w-4/5 h-full">
        <div className="flex gap-4 h-1/3">
          <div className="w-1/2">
            <Intro />
          </div>
          <div className="w-1/4">
            <ProjectCompHome />
          </div>
          <div className="w-1/4">
            <ProjectCompHome />
          </div>
        </div>
        <div className="flex gap-4 h-1/3">
          <div className="w-1/6">
            <Avatar />
          </div>
          <div className="w-1/2">
            <AboutCompHome
              phrase="Fullstack Developer | Graphic Designer"
              description="Designing graphics and developing web applications since 2020."
            />
          </div>
          <div className="w-1/3">
            <ProjectCompHome />
          </div>
        </div>
        <div className="flex gap-4 h-1/3">
          <div className="w-1/2">
            <AboutCompHome phrase="Passionate about design and enjoy creating innovative solutions." />
          </div>
          <div className="w-1/3">
            <TechStack />
          </div>
          <div className="w-1/6">
            <ToggleComp />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full w-1/5">
        <div className="h-1/3">
          <Socials />
        </div>
        <div className="h-1/3">
          <SeeMoreProjects />
        </div>
        <div className="h-1/3">
          <CopyMail />
        </div>
      </div>
    </div>
  );
}
