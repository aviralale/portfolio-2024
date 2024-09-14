import Intro from "../components/Intro";
import Avatar from "../components/Avatar";
import AboutCompHome from "../components/AboutCompHome";
import ProjectCompHome from "../components/ProjectCompHome";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-4 w-4/5">
          <div className="flex gap-4 h-1/3">
            <div className="w-2/4">
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
            <div className="w-3/6">
              <AboutCompHome />
            </div>
            <div className="w-2/6">
              <ProjectCompHome />
            </div>
          </div>
          <div className="flex gap-4 h-1/3">
            <Intro />
          </div>
        </div>
        <div className="flex flex-col w-1/5"></div>
      </div>
    </>
  );
}
