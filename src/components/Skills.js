import {  ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills,colors,percent } from "../data";

const className = "shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-";
const perc = "-500";
export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="container px-5 py-10 mx-auto bg-white">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            As a computer engineer, I have been working on multiple areas.
            Mostly front-end frameworks!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill,i) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div class="relative pt-1">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                    <div
                      style={{ width: percent[i] }}
                      className={className + colors[i] + perc}
                    ></div>
                  </div>
                </div>
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
