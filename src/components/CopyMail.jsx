import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

export default function CopyMail() {
  const [copied, setCopied] = useState(false);
  const mail = "69aviral@gmail.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(mail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="card overflow-hidden h-full flex flex-col justify-center items-center gap-4  border border-gray-500/50 rounded-3xl">
      <h1 className="text-2xl text-center font-semibold opacity-80">
        Have a project in mind, job opportunities?
      </h1>
      <button
        onClick={handleCopy}
        className="flex gap-2 justify-center bg-[var(--card-bg-color)] hover:brightness-150 items-center p-4 rounded-2xl border border-gray-500/50 card transition-all ease-in duration-150"
      >
        {copied ? <ClipboardCheck color="green" /> : <Clipboard />}
        <span>{copied ? "Copied to clipboard." : "Copy email address"}</span>
      </button>
    </div>
  );
}
