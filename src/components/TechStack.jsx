import { Link } from "react-router-dom";

export default function TechStack() {
  return (
    <div className="card h-full w-full flex gap-6 pt-4 flex-col bg-[#171717] px-4 border border-gray-500/50 rounded-3xl">
      <p className="text-sm opacity-70">SKILLS</p>
      <img src="https://skillicons.dev/icons?i=js,ts,d3,react,py,sass,django,postgres,ai,ps&perline=5" />
    </div>
  );
}
