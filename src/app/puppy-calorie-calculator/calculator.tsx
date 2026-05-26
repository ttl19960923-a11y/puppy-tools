"use client";

import { useState } from "react";

export default function PuppyCalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("young");
  const [breedSize, setBreedSize] = useState("medium");
  const [activity, setActivity] = useState("normal");

  const [result, setResult] = useState<{
    caloriesMin: number;
    caloriesMax: number;
    meals: string;
    feedingNote: string;
  } | null>(null);

  function calculateCalories() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let calories = 70 * Math.pow(puppyWeight, 0.75);

    if (age === "young") calories *= 3;
    if (age === "middle") calories *= 2.2;
    if (age === "older") calories *= 1.6;

    if (breedSize === "small") calories *= 0.9;
    if (breedSize === "large") calories *= 1.15;

    if (activity === "low") calories *= 0.9;
    if (activity === "high") calories *= 1.2;

    const caloriesMin = Math.round(calories * 0.9);
    const caloriesMax = Math.round(calories * 1.1);

    let meals = "2 meals per day";

    if (age === "young") meals = "3–4 meals per day";
    if (age === "middle") meals = "3 meals per day";
    if (age === "older") meals = "2 meals per day";

    let feedingNote =
      "Monitor body condition and adjust portions gradually as your puppy grows.";

    if (breedSize === "large") {
      feedingNote =
        "Large breed puppies may require careful calorie control to support healthy growth.";
    }

    setResult({
      caloriesMin,
      caloriesMax,
      meals,
      feedingNote,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Puppy Calories
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your puppy&apos;s weight, age stage, breed size, and activity
        level to estimate daily calorie needs.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Puppy Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter puppy weight"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Puppy Age Stage
          </label>

          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="young">2–4 months</option>
            <option value="middle">4–8 months</option>
            <option value="older">8–12 months</option>
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
                Suggested meals
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.meals}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Growth guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.feedingNote}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate. Compare calorie needs with your puppy
            food label and adjust feeding amounts based on growth and body
            condition.
          </p>
        </div>
      )}
    </div>
  );
}