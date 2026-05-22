"use client";

import { useState } from "react";

export default function PuppyCalorieCalculatorByAge() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("2-4");
  const [activity, setActivity] = useState("normal");
  const [result, setResult] = useState("");

  function calculateCalories() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let calories = 70 * Math.pow(puppyWeight, 0.75);

    if (age === "2-4") calories *= 3;
    if (age === "4-8") calories *= 2.2;
    if (age === "8-12") calories *= 1.6;

    if (activity === "low") calories *= 0.9;
    if (activity === "high") calories *= 1.15;

    setResult(`${Math.round(calories)} kcal per day`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Puppy Calorie Calculator By Age
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
          Puppy Age
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="2-4">2–4 months</option>
          <option value="4-8">4–8 months</option>
          <option value="8-12">8–12 months</option>
        </select>
      </div>

      <div className="mt-6">
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

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Puppy calorie needs can vary by
            breed, growth rate, food type, activity level, and health.
          </p>
        </div>
      )}
    </div>
  );
}