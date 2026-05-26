"use client";

import { useState } from "react";

export default function PuppyFeedingCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("2-4");
  const [breedSize, setBreedSize] = useState("medium");
  const [activity, setActivity] = useState("normal");
  const [foodType, setFoodType] = useState("dry");
  const [result, setResult] = useState<{
    foodMin: number;
    foodMax: number;
    caloriesMin: number;
    caloriesMax: number;
    meals: string;
  } | null>(null);

  function calculateFood() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let baseCalories = 70 * Math.pow(puppyWeight, 0.75);

    if (age === "2-4") baseCalories *= 3;
    if (age === "4-8") baseCalories *= 2.2;
    if (age === "8-12") baseCalories *= 1.6;

    if (breedSize === "small") baseCalories *= 0.9;
    if (breedSize === "large") baseCalories *= 1.15;

    if (activity === "low") baseCalories *= 0.9;
    if (activity === "high") baseCalories *= 1.15;

    let caloriesPerGram = 3.5;

    if (foodType === "wet") caloriesPerGram = 1.2;
    if (foodType === "mixed") caloriesPerGram = 2.4;

    const caloriesMin = Math.round(baseCalories * 0.9);
    const caloriesMax = Math.round(baseCalories * 1.1);

    const foodMin = Math.round(caloriesMin / caloriesPerGram);
    const foodMax = Math.round(caloriesMax / caloriesPerGram);

    let meals = "2 meals per day";

    if (age === "2-4") meals = "3–4 meals per day";
    if (age === "4-8") meals = "3 meals per day";
    if (age === "8-12") meals = "2 meals per day";

    setResult({
      foodMin,
      foodMax,
      caloriesMin,
      caloriesMax,
      meals,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">Calculate Puppy Feeding Amount</h2>

      <p className="mt-3 text-slate-600">
        Enter your puppy&apos;s weight, age, breed size, activity level, and food
        type to estimate daily food amount.
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
          <label className="mb-2 block text-sm font-medium">Puppy Age</label>

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

        <div>
          <label className="mb-2 block text-sm font-medium">Breed Size</label>

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

        <div>
          <label className="mb-2 block text-sm font-medium">Food Type</label>

          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="dry">Dry puppy food</option>
            <option value="wet">Wet puppy food</option>
            <option value="mixed">Mixed food</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateFood}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Feeding Amount
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">Estimated Daily Feeding:</p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.foodMin}–{result.foodMax} g per day
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">Estimated calories</p>
              <p className="mt-1 text-xl font-bold">
                {result.caloriesMin}–{result.caloriesMax} kcal/day
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">Suggested meals</p>
              <p className="mt-1 text-xl font-bold">{result.meals}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate. Always compare the result with your
            puppy food label and adjust based on body condition and veterinarian
            advice.
          </p>
        </div>
      )}
    </div>
  );
}