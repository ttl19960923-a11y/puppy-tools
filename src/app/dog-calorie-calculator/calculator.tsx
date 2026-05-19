"use client";

import { useState } from "react";

export default function DogCalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("normal");
  const [result, setResult] = useState("");

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

    setResult(`${Math.round(calories)} kcal per day`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">Calculate Dog Calories</h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">Dog Weight (kg)</label>

        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter dog weight"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">Activity Level</label>

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

      <button
        onClick={calculateCalories}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Calories
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">Estimated Daily Calories:</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{result}</p>
        </div>
      )}
    </div>
  );
}