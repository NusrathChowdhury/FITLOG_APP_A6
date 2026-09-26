import React from "react";
import { getWorkouts } from "@/lib/apps";
import WorkoutSearch from "./WorkoutSearch";

const Library = async () => {
  const data = await getWorkouts();

  return (
    <div
      id="library"
      className="bg-[#0B0D0C] px-6 pt-[60px] pb-[80px]"
    >
      <div className="mx-auto max-w-7xl">

        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold text-white">
            THE LIBRARY
          </h2>

          <p className="text-white/60">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="mt-10">
          <WorkoutSearch workouts={data} />
        </div>

      </div>
    </div>
  );
};

export default Library;