import { Workout } from "@/types/app.type";

export const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await res.json();

  return data;
};
