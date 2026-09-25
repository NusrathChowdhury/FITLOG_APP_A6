"use client";

import Link from "next/link";
import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const {
    todaysPlan,
    savedWorkouts,
    removeFromTodaysPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const currentWorkouts =
    activeTab === "plan" ? todaysPlan : savedWorkouts;

  // Metrics for Today's Plan
  const totalMinutes = todaysPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todaysPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // Sort current list
  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return a.rating - b.rating;
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-white/50">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Exercises */}
          <div className="rounded-2xl border border-white/10 bg-[#222630] p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-white/50">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-[#CCFF00]">
              {todaysPlan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="rounded-2xl border border-white/10 bg-[#222630] p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-white/50">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black text-[#CCFF00]">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="rounded-2xl border border-white/10 bg-[#222630] p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-white/50">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black text-[#CCFF00]">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="tabs tabs-boxed w-fit bg-[#222630] p-1">

            <button
              onClick={() => setActiveTab("plan")}
              className={`tab rounded-lg px-5 font-bold ${
                activeTab === "plan"
                  ? "bg-[#CCFF00] text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`tab rounded-lg px-5 font-bold ${
                activeTab === "saved"
                  ? "bg-[#CCFF00] text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort By */}
          <div className="flex items-center gap-3">

            <span className="text-sm font-bold text-white/50">
              Sort By
            </span>

            <div className="relative">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-full border border-white/20 bg-[#222630] py-3 pl-5 pr-11 text-sm font-bold text-white outline-none transition focus:border-[#CCFF00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              {/* Chevron */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/60">
                ▼
              </span>

            </div>

          </div>

        </div>

        {/* Empty State */}
        {sortedWorkouts.length === 0 ? (

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#222630] px-6 py-20 text-center">

            <h2 className="text-2xl font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-white/50">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="btn mt-6 rounded-full border-0 bg-[#CCFF00] px-7 font-black text-black hover:bg-[#CCFF00]"
            >
              Go to workouts
            </Link>

          </div>

        ) : (

          /* Workout List */
          <div className="mt-8 space-y-4">

            {sortedWorkouts.map((workout) => (

              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#222630]"
              >

                <div className="flex flex-col sm:flex-row">

                  {/* Image */}
                  <div className="h-56 w-full shrink-0 bg-[#171A1F] sm:h-auto sm:w-56 lg:w-64">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full min-h-56 w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">

                    <div>

                      <h2 className="text-2xl font-black uppercase text-white">
                        {workout.name}
                      </h2>

                      <p className="mt-2 text-sm text-white/50">
                        {workout.equipment}
                      </p>

                      {/* Stats */}
                      <div className="mt-5 flex flex-wrap gap-5 border-t border-white/10 pt-4">

                        <div className="flex items-center gap-2">
                          <span className="text-[#CCFF00]">
                            ◷
                          </span>

                          <span className="text-sm text-white/70">
                            {workout.duration} min
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[#CCFF00]">
                            🔥
                          </span>

                          <span className="text-sm text-white/70">
                            {workout.caloriesBurned} kcal
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[#CCFF00]">
                            ★
                          </span>

                          <span className="text-sm text-white/70">
                            {workout.rating}
                          </span>
                        </div>

                      </div>

                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                      {/* View Details */}
                      <Link
                        href={`/workout/${workout.id}`}
                        className="btn flex-1 rounded-full border-0 bg-[#CCFF00] font-black text-black hover:bg-[#CCFF00]"
                      >
                        View Details
                      </Link>

                      {/* Mark as Done */}
                      {activeTab === "plan" && (
                        <button
                          onClick={() => markAsDone(workout.id)}
                          className="btn flex-1 rounded-full border border-white/20 bg-transparent font-bold text-white hover:border-[#CCFF00] hover:bg-transparent hover:text-[#CCFF00]"
                        >
                          ✓ Mark as Done
                        </button>
                      )}

                      {/* Remove */}
                      <button
                        onClick={() => {
                          if (activeTab === "plan") {
                            removeFromTodaysPlan(workout.id);
                          } else {
                            removeFromSaved(workout.id);
                          }
                        }}
                        className="btn rounded-full border border-white/20 bg-transparent px-5 font-bold text-white hover:border-red-500 hover:bg-transparent hover:text-red-500"
                      >
                        ✕
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
};

export default MyPlanPage;
