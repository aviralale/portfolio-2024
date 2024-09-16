import { X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function BacktoHome() {
  return (
    <Link to="/" className="border border-gray-500/50 card rounded-full p-4">
      <X />
    </Link>
  );
}
