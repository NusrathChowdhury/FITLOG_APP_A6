"use client";

import { useState } from "react";
import AppCard from "../shared/AppCard";
import { Workout } from "@/types/app.type";

type WorkoutSearchProps = {
  workouts: Workout[];
};

const WorkoutSearch = ({ workouts }: WorkoutSearchProps) => {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchText = search.toLowerCase();

    return (
      workout.name.toLowerCase().includes(searchText) ||
      workout.muscleGroups.some((muscle) =>
        muscle.toLowerCase().includes(searchText)
      ) ||
      workout.equipment.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search workouts by name, muscle or equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-white/10 bg-[#222630] px-5 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#CCFF00]"
        />
      </div>

      {filteredWorkouts.length === 0 ? (
        <p className="py-10 text-center text-white/50">
          No workouts found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <AppCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </>
  );
};

export default WorkoutSearch;