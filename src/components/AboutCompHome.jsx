import { Link } from "react-router-dom";

export default function AboutCompHome() {
  return (
    <Link className="h-full w-full flex gap-6 pt-4 flex-col bg-[#171717] px-4 border border-gray-500/50 rounded-2xl">
      <p className="text-sm opacity-70">ABOUT</p>
      <p className="text-2xl">
        Passionate about design and enjoy creating innovative solutions.
      </p>
    </Link>
  );
}
