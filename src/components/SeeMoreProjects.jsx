import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function SeeMoreProjects() {
  return (
    <div className="card overflow-hidden h-full flex flex-col justify-center items-center gap-4  border border-gray-500/50 rounded-3xl">
      <h1 className="text-2xl text-center font-semibold opacity-80">
        Few more projects I've been working on:
      </h1>
      <Link className="flex gap-2 justify-center bg-[var(--card-bg-color)] hover:brightness-150 items-center p-4 rounded-2xl border border-gray-500/50 card transition-all ease-in duration-150">
        <Eye size={24} /> Have a look
      </Link>
    </div>
  );
}
