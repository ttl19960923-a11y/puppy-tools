"use client";

import { useState } from "react";

export default function PuppySizeCalculator() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    category: string;
    minWeight: number;
    maxWeight: number;
  } | null>(null);

  function estimateSize() {
    const weight = Number(currentWeight);
    const age = Number(ageMonths);

    if (!weight || weight <= 0 || !age || age <= 0) {
      alert("Please enter a valid puppy weight and age.");
      return;
    }

    let multiplier = 2;

    if (breedSize === "small") {
      multiplier = age <= 4 ? 2 : 1.7;
    }

    if (breedSize === "medium") {
      multiplier = age <= 4 ? 2.5 : 2;
    }

    if (breedSize === "large") {
      multiplier = age <= 6 ? 3 : 2.5;
    }

    if (breedSize === "giant") {
      multiplier = age <= 6 ? 4 : 3;
    }

    const estimatedWeight = weight * multiplier;

    let category = "";

    if (estimatedWeight < 10) {
      category = "Small Adult Dog";
    } else if (estimatedWeight <= 25) {
      category = "Medium Adult Dog";
    } else if (estimatedWeight <= 45) {
      category = "Large Adult Dog";
    } else {
      category = "Giant Adult Dog";
    }

    setResult({
      category,
      minWeight: Math.round(estimatedWeight * 0.9),
      maxWeight: Math.round(estimatedWeight * 1.1),
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Estimate Puppy Adult Size
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your puppy's current weight, age, and breed size to estimate
        future adult size.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Current Puppy Weight (kg)
          </label>

          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder="Enter current puppy weight"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Puppy Age (months)
          </label>

          <input
            type="number"
            value={ageMonths}
            onChange={(e) => setAgeMonths(e.target.value)}
            placeholder="Enter puppy age"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Expected Breed Size
          </label>

          <select
            value={breedSize}
            onChange={(e) => setBreedSize(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="small">Small Breed</option>
            <option value="medium">Medium Breed</option>
            <option value="large">Large Breed</option>
            <option value="giant">Giant Breed</option>
          </select>
        </div>

      </div>

      <button
        onClick={estimateSize}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Estimate Adult Size
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">

          <p className="text-lg font-semibold">
            Estimated Adult Size
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.category}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Estimated adult weight
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.minWeight}–{result.maxWeight} kg
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Adult category
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.category}
              </p>
            </div>

          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This estimate uses puppy age, current weight, and breed size.
            Genetics, nutrition, and growth rate can significantly affect
            adult size.
          </p>

        </div>
      )}

    </div>
  );
}