import React from "react";
import bannerimg from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#0B0D0C] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-2xl bg-[#222630] px-6 py-8 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-12">

        {/* Left Content */}
        <div className="space-y-6">

          {/* Small Heading */}
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          {/* Main Heading */}
          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h2>

          {/* Description */}
          <p className="max-w-lg text-base leading-7 text-white/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <button className="rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition duration-200 hover:scale-105 hover:bg-[#d8ff4d]">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 flex justify-center lg:mt-0 lg:justify-end">
          <Image
            src={bannerimg}
            alt="Workout"
            className="h-auto w-full max-w-md object-contain lg:max-w-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
