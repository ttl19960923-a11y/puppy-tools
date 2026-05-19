"use client";

import { useState } from "react";

export default function PuppyCalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("young");
  const [result, setResult] = useState("");

  function calculateCalories() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let calories = 70 * Math.pow(puppyWeight, 0.75);

    if (age === "young") calories *= 3;
    if (age === "middle") calories *= 2;
    if (age === "older") calories *= 1.6;

    setResult(`${Math.round(calories)} kcal per day`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Puppy Calories
      </h2>

      <div className="mt-8">
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

      <div className="mt-6">
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

      <button
        onClick={calculateCalories}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Calories
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Calories:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}