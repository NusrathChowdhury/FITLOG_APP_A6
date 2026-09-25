import Image from "next/image";
import Link from "next/link";
import { getWorkouts } from "@/lib/apps";
import WorkoutActions from "@/components/workout/WorkoutActions";

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const workouts = await getWorkouts();

  const workout = workouts.find((item) => item.id === Number(id));

  if (!workout) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0D0C] px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Workout Not Found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#CCFF00] px-6 py-3 font-bold text-black"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

      {/* Back Home */}
      <div className="mx-auto mb-6 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-[#CCFF00]"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">

        {/* Left Image */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-[#171A1F] sm:min-h-[550px] lg:min-h-[850px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Details */}
        <div className="flex flex-col space-y-6">

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>

            <p className="text-sm leading-6 text-white/60 sm:text-base">
              {workout.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge rounded-full border-0 bg-[#CCFF00] px-4 py-3 text-xs font-black uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="rounded-2xl border border-white/10 bg-[#222630] p-4 sm:p-5">
            <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-[#CCFF00]">
              KEY SPECS
            </h2>

            <div className="divide-y divide-white/10">

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  EQUIPMENT
                </span>

                <span className="text-right text-sm font-semibold text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  DIFFICULTY
                </span>

                <span className="text-right text-sm font-semibold text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  SETS
                </span>

                <span className="text-sm font-semibold text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  REPS
                </span>

                <span className="text-sm font-semibold text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  DURATION
                </span>

                <span className="text-sm font-semibold text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  CALORIES
                </span>

                <span className="text-sm font-semibold text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-xs text-white/50 sm:text-sm">
                  RATING
                </span>

                <span className="text-sm font-semibold text-[#CCFF00]">
                  ★ {workout.rating}
                </span>
              </div>

            </div>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="mb-4 text-xl font-black uppercase text-white">
              INSTRUCTIONS
            </h2>

            <div className="space-y-3">
              {workout.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-white/10 bg-[#222630] p-4"
                >
                  <span className="badge h-8 w-8 shrink-0 rounded-full border-0 bg-[#CCFF00] font-black text-black">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-white/60">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <WorkoutActions workout={workout} />

        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;
