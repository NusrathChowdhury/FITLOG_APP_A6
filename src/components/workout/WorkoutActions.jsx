"use client";

import { useWorkout } from "@/context/WorkoutContext";

const WorkoutActions = ({ workout }) => {
  const { addToTodaysPlan, saveForLater, todaysPlan } = useWorkout();

  const alreadyAdded = todaysPlan.some((item) => item.id === workout.id);
  const planFull = todaysPlan.length >= 5;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      {/* Add to Today's Plan */}
      <button
        onClick={() => addToTodaysPlan(workout)}
        disabled={planFull || alreadyAdded}
        className="btn min-h-12 flex-1 rounded-full border-0 bg-[#CCFF00] font-black uppercase text-black hover:bg-[#CCFF00] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {alreadyAdded ? "Already Added" : "＋ Add to today's plan"}
      </button>

      {/* Save for Later */}
      <button
        onClick={() => saveForLater(workout)}
        className="btn min-h-12 flex-1 rounded-full border border-white/20 bg-transparent font-black uppercase text-white hover:border-[#CCFF00] hover:bg-transparent hover:text-[#CCFF00]"
      >
        ♡ Save for later
      </button>

    </div>
  );
};

export default WorkoutActions;