import React from "react";
import AboutIntro from "../components/AboutIntro";
import BacktoHome from "../components/BacktoHome";
import DaysSince from "../components/DaysSince";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center mx-72 gap-20">
      <BacktoHome />
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-1/2 gap-6">
          <div className="h-2/3">
            <AboutIntro />
          </div>
          <div className="h-1/3">
            <DaysSince />
          </div>
        </div>
        <div className="flex flex-col w-1/2"></div>
      </div>
    </div>
  );
}
