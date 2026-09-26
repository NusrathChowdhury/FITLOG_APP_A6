import { Workout } from "@/types/app.type";

export const getWorkouts = async (): Promise<Workout[]> => {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("API unavailable");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("API unavailable. Using local data.");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data.json`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  }
};