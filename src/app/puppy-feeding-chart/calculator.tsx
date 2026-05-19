"use client";

import { useState } from "react";

export default function PuppyFeedingChartCalculator() {
  const [age, setAge] = useState("2-3");
  const [size, setSize] = useState("medium");
  const [result, setResult] = useState("");

  function showFeedingGuide() {
    let guide = "";

    if (age === "2-3") {
      guide =
        size === "small"
          ? "80–150 g per day, divided into 4 meals"
          : size === "medium"
          ? "150–250 g per day, divided into 4 meals"
          : "250–400 g per day, divided into 4 meals";
    }

    if (age === "4-6") {
      guide =
        size === "small"
          ? "120–200 g per day, divided into 3 meals"
          : size === "medium"
          ? "250–400 g per day, divided into 3 meals"
          : "400–650 g per day, divided into 3 meals";
    }

    if (age === "6-12") {
      guide =
        size === "small"
          ? "150–250 g per day, divided into 2 meals"
          : size === "medium"
          ? "350–550 g per day, divided into 2 meals"
          : "550–900 g per day, divided into 2 meals";
    }

    setResult(guide);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Find a Puppy Feeding Range
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Puppy Age
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="2-3">2–3 months</option>
          <option value="4-6">4–6 months</option>
          <option value="6-12">6–12 months</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Breed Size
        </label>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="small">Small Breed</option>
          <option value="medium">Medium Breed</option>
          <option value="large">Large Breed</option>
        </select>
      </div>

      <button
        onClick={showFeedingGuide}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Feeding Range
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Suggested Feeding Range:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Always check your puppy food label
            and ask a veterinarian for personalized feeding advice.
          </p>
        </div>
      )}
    </div>
  );
}