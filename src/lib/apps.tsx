import { Workout } from "@/types/app.type";

export const getWorkouts = async (): Promise<Workout[]> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("API unavailable");
    }

    return res.json();
  } catch (error) {
    console.log("API unavailable. Using local data.");

    const res = await fetch(
      "https://fitlog-app-a6.vercel.app/data.json",
      {
        cache: "no-store",
      }
    );

    return res.json();
  }
};