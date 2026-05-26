"use client";

import { useState } from "react";

export default function PuppyFeedingChartCalculator() {
  const [age, setAge] = useState("2-3");
  const [size, setSize] = useState("medium");
  const [foodType, setFoodType] = useState("dry");

  const [result, setResult] = useState<{
    amount: string;
    meals: string;
    guidance: string;
    note: string;
  } | null>(null);

  function showFeedingGuide() {
    let amount = "";
    let meals = "";
    let guidance = "";

    if (age === "2-3") {
      meals = "4 meals per day";

      if (size === "small") {
        amount = foodType === "dry"
          ? "80–150 g per day"
          : "220–400 g per day";
      }

      if (size === "medium") {
        amount = foodType === "dry"
          ? "150–250 g per day"
          : "400–700 g per day";
      }

      if (size === "large") {
        amount = foodType === "dry"
          ? "250–400 g per day"
          : "700–1100 g per day";
      }

      guidance =
        "Young puppies often need frequent meals because of rapid growth and smaller stomach size.";
    }

    if (age === "4-6") {
      meals = "3 meals per day";

      if (size === "small") {
        amount = foodType === "dry"
          ? "120–200 g per day"
          : "320–550 g per day";
      }

      if (size === "medium") {
        amount = foodType === "dry"
          ? "250–400 g per day"
          : "700–1100 g per day";
      }

      if (size === "large") {
        amount = foodType === "dry"
          ? "400–650 g per day"
          : "1100–1800 g per day";
      }

      guidance =
        "Many puppies continue rapid growth during this stage and may need steady calorie intake.";
    }

    if (age === "6-12") {
      meals = "2–3 meals per day";

      if (size === "small") {
        amount = foodType === "dry"
          ? "150–250 g per day"
          : "400–700 g per day";
      }

      if (size === "medium") {
        amount = foodType === "dry"
          ? "350–550 g per day"
          : "950–1500 g per day";
      }

      if (size === "large") {
        amount = foodType === "dry"
          ? "550–900 g per day"
          : "1500–2500 g per day";
      }

      guidance =
        "Older puppies may begin transitioning toward adult feeding routines and fewer meals.";
    }

    setResult({
      amount,
      meals,
      guidance,
      note:
        "This puppy feeding chart is only a general guide. Feeding amounts vary by food calories, breed, activity level, metabolism, and growth speed.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Find a Puppy Feeding Range
      </h2>

      <p className="mt-3 text-slate-600">
        Explore estimated puppy food amounts by age, breed size, and food type.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
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

        <div>
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

        <div>
          <label className="mb-2 block text-sm font-medium">
            Food Type
          </label>

          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="dry">Dry Food</option>
            <option value="wet">Wet Food</option>
          </select>
        </div>
      </div>

      <button
        onClick={showFeedingGuide}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Feeding Range
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Suggested Feeding Amount:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.amount}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Meal frequency
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.meals}
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