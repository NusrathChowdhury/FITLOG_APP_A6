"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";
import logo from "@/assets/logo.png";

const Navber = () => {
  const pathname = usePathname();

  const { todaysPlan, savedWorkouts } = useWorkout();

  return (
    <nav className="border-b border-white/10 bg-[#0B0D0C]">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">

        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />

            <span className="text-xl font-black tracking-wider text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`font-bold transition ${
                pathname === "/"
                  ? "text-[#CCFF00]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`font-bold transition ${
                pathname === "/my-plan"
                  ? "text-[#CCFF00]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>

        {/* Status Badges */}
        <div className="navbar-end flex gap-2">

          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-black text-black transition hover:scale-105"
          >
            <span>Plan</span>

            <span className="rounded-full bg-black px-2 py-0.5 text-xs text-[#CCFF00]">
              {todaysPlan.length}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-black text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
          >
            <span>Saved</span>

            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">
              {savedWorkouts.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navber;