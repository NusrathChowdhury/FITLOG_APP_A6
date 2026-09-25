"use client";

import { useWorkout } from "@/context/WorkoutContext";
import Link from "next/link";

const MyPlanPage = () => {
  const {
    todaysPlan,
    savedWorkouts,
    removeFromTodaysPlan,
    removeFromSaved,
  } = useWorkout();

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-black text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-white/50">
          Manage your planned and saved workouts.
        </p>

        {/* Today's Plan */}
        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase text-white">
            Today&apos;s Plan
          </h2>

          {todaysPlan.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-[#222630] p-8">
              <p className="text-white/50">
                No workouts added to today&apos;s plan.
              </p>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {todaysPlan.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-2xl border border-white/10 bg-[#222630] p-5"
                >
                  <h3 className="text-xl font-black uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {workout.duration} min • {workout.caloriesBurned} kcal
                  </p>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="btn rounded-full border-0 bg-[#CCFF00] text-black"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => removeFromTodaysPlan(workout.id)}
                      className="btn rounded-full border border-white/20 bg-transparent text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Saved */}
        <section className="mt-14">
          <h2 className="text-2xl font-black uppercase text-white">
            Saved
          </h2>

          {savedWorkouts.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-[#222630] p-8">
              <p className="text-white/50">
                No saved workouts.
              </p>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-2xl border border-white/10 bg-[#222630] p-5"
                >
                  <h3 className="text-xl font-black uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {workout.duration} min • {workout.caloriesBurned} kcal
                  </p>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="btn rounded-full border-0 bg-[#CCFF00] text-black"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => removeFromSaved(workout.id)}
                      className="btn rounded-full border border-white/20 bg-transparent text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
};

export default MyPlanPage;
