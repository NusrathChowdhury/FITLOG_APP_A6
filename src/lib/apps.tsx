import { Workout } from "@/types/app.type";

export const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  return data;
};
