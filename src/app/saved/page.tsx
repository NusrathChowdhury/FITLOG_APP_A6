"use client";

import React from "react";
import { useWorkout } from "@/context/WorkoutContext";

const SavedPage = () => {
  const { savedWorkouts, removeFromSaved } = useWorkout();

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-black text-white">
            SAVED FOR LATER
          </h1>

          <p className="mt-2 text-white/50">
            {savedWorkouts.length} saved workout
            {savedWorkouts.length !== 1 ? "s" : ""}.
          </p>
        </div>

        {savedWorkouts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#222630] p-10 text-center">
            <h2 className="text-xl font-bold text-white">
              No saved workouts
            </h2>

            <p className="mt-2 text-white/50">
              Save a workout to find it here later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#222630]"
              >
                <div className="p-5">
                  <h2 className="text-xl font-black uppercase text-white">
                    {workout.name}
                  </h2>

                  <p className="mt-2 text-sm text-white/50">
                    {workout.duration} min • {workout.caloriesBurned} kcal
                  </p>

                  <button
                    onClick={() => removeFromSaved(workout.id)}
                    className="btn mt-5 rounded-full border border-white/20 bg-transparent px-5 text-white hover:border-red-500 hover:bg-transparent hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default SavedPage;
