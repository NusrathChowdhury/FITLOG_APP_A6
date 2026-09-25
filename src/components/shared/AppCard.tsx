import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/app.type";

type AppCardProps = {
  workout: Workout;
};

const AppCard = ({ workout }: AppCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#222630] transition duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/40">

        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden bg-[#171A1F]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="space-y-4 p-5">

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-sm text-white/50">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4">

            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00]">◷</span>
              <span className="text-xs font-medium text-white/70">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00]">🔥</span>
              <span className="text-xs font-medium text-white/70">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00]">★</span>
              <span className="text-xs font-medium text-white/70">
                {workout.rating}
              </span>
            </div>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default AppCard;
