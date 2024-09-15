import { ThemeToggle } from "../utils/theme/ThemeToggle";

export default function ToggleComp() {
  return (
    <div className="card overflow-hidden h-full flex justify-center flex-col gap-4  border border-gray-500/50 rounded-3xl">
      <ThemeToggle />
    </div>
  );
}
