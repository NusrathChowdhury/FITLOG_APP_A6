"use client";

import Link from "next/link";
import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("plan");

  const {
    todaysPlan,
    savedWorkouts,
    removeFromTodaysPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const currentWorkouts =
    activeTab === "plan" ? todaysPlan : savedWorkouts;

  const totalMinutes = todaysPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todaysPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          MY PLAN
        </h1>

        <p className="mt-2 text-white/50">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#222630] p-5">
            <p className="text-sm text-white/50">Exercises</p>
            <p className="mt-2 text-3xl font-black text-[#CCFF00]">
              {todaysPlan.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#222630] p-5">
            <p className="text-sm text-white/50">Minutes</p>
            <p className="mt-2 text-3xl font-black text-[#CCFF00]">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#222630] p-5">
            <p className="text-sm text-white/50">Calories</p>
            <p className="mt-2 text-3xl font-black text-[#CCFF00]">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="tabs tabs-boxed mt-8 w-fit bg-[#222630] p-1">

          <button
            onClick={() => setActiveTab("plan")}
            className={`tab rounded-lg px-5 font-bold ${
              activeTab === "plan"
                ? "bg-[#CCFF00] text-black"
                : "text-white/60"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`tab rounded-lg px-5 font-bold ${
              activeTab === "saved"
                ? "bg-[#CCFF00] text-black"
                : "text-white/60"
            }`}
          >
            Saved
          </button>

        </div>

        {/* Empty State */}
        {currentWorkouts.length === 0 ? (

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#222630] px-6 py-20 text-center">

            <h2 className="text-2xl font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-white/50">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="btn mt-6 rounded-full border-0 bg-[#CCFF00] px-7 font-black text-black"
            >
              Go to workouts
            </Link>

          </div>

        ) : (

          /* Workout List */
          <div className="mt-8 space-y-4">

            {currentWorkouts.map((workout) => (

              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#222630]"
              >

                <div className="flex flex-col sm:flex-row">

                  {/* Image */}
                  <div className="h-56 w-full bg-[#171A1F] sm:h-auto sm:w-56">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full min-h-56 w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">

                    <h2 className="text-2xl font-black uppercase text-white">
                      {workout.name}
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 flex flex-wrap gap-5 border-t border-white/10 pt-4">

                      <span className="text-sm text-white/70">
                        ◷ {workout.duration} min
                      </span>

                      <span className="text-sm text-white/70">
                        🔥 {workout.caloriesBurned} kcal
                      </span>

                      <span className="text-sm text-white/70">
                        ★ {workout.rating}
                      </span>

                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="btn flex-1 rounded-full border-0 bg-[#CCFF00] font-black text-black"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          onClick={() => markAsDone(workout.id)}
                          className="btn flex-1 rounded-full border border-white/20 bg-transparent font-bold text-white"
                        >
                          Mark as Done
                        </button>
                      )}

                      <button
                        onClick={() => {
                          if (activeTab === "plan") {
                            removeFromTodaysPlan(workout.id);
                          } else {
                            removeFromSaved(workout.id);
                          }
                        }}
                        className="btn rounded-full border border-white/20 bg-transparent px-5 text-white"
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
