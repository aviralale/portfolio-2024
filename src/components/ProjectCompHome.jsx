import AvatarImg from "../assets/images/pfp.jpg";
import { Link } from "react-router-dom";
import { CircleArrowUpRight02Icon } from "../assets/icons/Icons";
export default function ProjectCompHome1() {
  return (
    <div className="h-full w-full border border-gray-500/50 aspect-square overflow-hidden relative rounded-2xl group">
      <Link to="/" className="">
        <img src={AvatarImg} className="w-full object-cover" />
        <div
          className="absolute w-full h-16 bottom-0 bg-gradient-to-t from-black to-transparent p-4 flex items-center justify-between opacity-0 
        translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <div>
            <h1 className="text-xl z-10">Project 1</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <CircleArrowUpRight02Icon />
        </div>
      </Link>
    </div>
  );
}
