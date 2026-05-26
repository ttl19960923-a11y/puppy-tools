"use client";

import { useState } from "react";

export default function DogFoodCalculator() {
  const [weight, setWeight] = useState("");
  const [foodType, setFoodType] = useState("dry");
  const [activity, setActivity] = useState("normal");

  const [result, setResult] = useState<{
    amount: string;
    calories: string;
    guidance: string;
    note: string;
  } | null>(null);

  function calculateFood() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let calories = dogWeight * 30;

    if (activity === "low") {
      calories *= 0.9;
    }

    if (activity === "high") {
      calories *= 1.25;
    }

    let foodAmount = calories;

    if (foodType === "dry") {
      foodAmount = calories / 3.6;
    }

    if (foodType === "wet") {
      foodAmount = calories / 1.2;
    }

    let guidance =
      "Monitor your dog's body condition and adjust portions gradually if needed.";

    if (activity === "low") {
      guidance =
        "Low activity dogs may need smaller food portions to avoid excess weight gain.";
    }

    if (activity === "high") {
      guidance =
        "Highly active dogs often require larger food portions and more calories.";
    }

    setResult({
      amount: `${Math.round(foodAmount)} g per day`,
      calories: `${Math.round(calories)} kcal/day`,
      guidance,
      note:
        "Food calorie density varies by brand and recipe. Always compare estimates with the dog food package guide.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog Food Amount
      </h2>

      <p className="mt-3 text-slate-600">
        Estimate daily dog food portions based on weight, food type, and
        activity level.
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
            Food Type
          </label>

          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="dry">Dry food</option>
            <option value="wet">Wet food</option>
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
        onClick={calculateFood}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Food Amount
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Food:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.amount}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Estimated calories
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.calories}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Feeding guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.guidance}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            {result.note}
          </p>
        </div>
      )}
    </div>
  );
}