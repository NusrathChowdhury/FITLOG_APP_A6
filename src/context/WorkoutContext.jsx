"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedList = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setTodaysPlan(JSON.parse(savedPlan));
    }

    if (savedList) {
      setSavedWorkouts(JSON.parse(savedList));
    }

    setIsLoaded(true);
  }, []);

  // Save today's plan
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(todaysPlan));
    }
  }, [todaysPlan, isLoaded]);

  // Save saved workouts
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
    }
  }, [savedWorkouts, isLoaded]);

  const addToTodaysPlan = (workout) => {
    const alreadyAdded = todaysPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.info("You can add maximum 5 workouts to today's plan");
      return;
    }

    setTodaysPlan((prev) => [...prev, workout]);
    toast.success("Added to today's plan");
  };

  const saveForLater = (workout) => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info("Already saved");
      return;
    }

    setSavedWorkouts((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  const removeFromTodaysPlan = (id) => {
    setTodaysPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id) => {
    setSavedWorkouts((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Removed from saved");
  };

  const markAsDone = (id) => {
    setTodaysPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Workout marked as done");
  };

  return (
    <WorkoutContext.Provider
      value={{
        todaysPlan,
        savedWorkouts,
        addToTodaysPlan,
        saveForLater,
        removeFromTodaysPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => useContext(WorkoutContext);