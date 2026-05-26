"use client";

import { useState } from "react";

export default function DogCalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("normal");
  const [breedSize, setBreedSize] = useState("medium");
  const [bodyCondition, setBodyCondition] = useState("ideal");

  const [result, setResult] = useState<{
    caloriesMin: number;
    caloriesMax: number;
    feedingAdvice: string;
    activityNote: string;
  } | null>(null);

  function calculateCalories() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let calories = 70 * Math.pow(dogWeight, 0.75);

    if (activity === "low") calories *= 1.2;
    if (activity === "normal") calories *= 1.6;
    if (activity === "high") calories *= 2.0;

    if (breedSize === "small") calories *= 0.95;
    if (breedSize === "large") calories *= 1.1;

    if (bodyCondition === "overweight") calories *= 0.9;
    if (bodyCondition === "underweight") calories *= 1.15;

    const caloriesMin = Math.round(calories * 0.9);
    const caloriesMax = Math.round(calories * 1.1);

    let feedingAdvice =
      "Monitor body condition and adjust portions gradually if needed.";

    if (bodyCondition === "overweight") {
      feedingAdvice =
        "Avoid overfeeding and monitor treats to help maintain a healthy body condition.";
    }

    if (bodyCondition === "underweight") {
      feedingAdvice =
        "A gradual calorie increase may help support healthy weight gain.";
    }

    let activityNote =
      "Normal activity dogs usually maintain stable calorie needs.";

    if (activity === "low") {
      activityNote =
        "Low activity dogs may require fewer calories to avoid excess weight gain.";
    }

    if (activity === "high") {
      activityNote =
        "Highly active dogs often need additional calories for energy and recovery.";
    }

    setResult({
      caloriesMin,
      caloriesMax,
      feedingAdvice,
      activityNote,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog Calories
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your dog&apos;s weight, activity level, breed size, and body
        condition to estimate daily calorie needs.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Dog Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter dog weight"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Activity Level
          </label>

          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="low">Low activity</option>
            <option value="normal">Normal activity</option>
            <option value="high">High activity</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Breed Size
          </label>

          <select
            value={breedSize}
            onChange={(e) => setBreedSize(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="small">Small breed</option>
            <option value="medium">Medium breed</option>
            <option value="large">Large breed</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Body Condition
          </label>

          <select
            value={bodyCondition}
            onChange={(e) => setBodyCondition(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="ideal">Ideal weight</option>
            <option value="underweight">Underweight</option>
            <option value="overweight">Overweight</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateCalories}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Calories
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Calories:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.caloriesMin}–{result.caloriesMax} kcal/day
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Feeding guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.feedingAdvice}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Activity guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.activityNote}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This estimate is a general guide only. Food calorie density,
            metabolism, age, health, and lifestyle can all affect actual daily
            calorie needs.
          </p>
        </div>
      )}
    </div>
  );
}