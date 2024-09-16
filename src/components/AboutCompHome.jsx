import { Link } from "react-router-dom";

export default function AboutCompHome(props) {
  return (
    <Link
      className="card h-full w-full flex gap-6 pt-4 flex-col bg-[#171717] px-4 border border-gray-500/50 rounded-3xl"
      to="/about"
    >
      <p className="text-sm opacity-70">ABOUT</p>
      <div>
        <p className="text-2xl">{props.phrase}</p>
        <p className="text-sm opacity-80">{props.description}</p>
      </div>
    </Link>
  );
}
