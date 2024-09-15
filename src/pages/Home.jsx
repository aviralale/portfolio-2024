import Intro from "../components/Intro";
import Avatar from "../components/Avatar";
import AboutCompHome from "../components/AboutCompHome";
import ProjectCompHome from "../components/ProjectCompHome";
import TechStack from "../components/TechStack";
import ToggleComp from "../components/ToggleComp";
import Socials from "../components/Socials";

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
            <AboutCompHome />
          </div>
          <div className="w-1/3">
            <ProjectCompHome />
          </div>
        </div>
        <div className="flex gap-4 h-1/3">
          <div className="w-1/2">
            <AboutCompHome />
          </div>
          <div className="w-1/3">
            <TechStack />
          </div>
          <div className="w-1/6">
            <ToggleComp />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/5">
        <div className="h-1/3">
          <Socials />
        </div>
        <div className="h-2/3"></div>
      </div>
    </div>
  );
}
