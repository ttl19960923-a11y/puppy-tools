"use client";

import { useState } from "react";

export default function PuppyWeightPredictor() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    adultWeightMin: number;
    adultWeightMax: number;
    growthStage: string;
    predictionNote: string;
  } | null>(null);

  function predictAdultWeight() {
    const weight = Number(currentWeight);
    const age = Number(ageMonths);

    if (!weight || weight <= 0 || !age || age <= 0) {
      alert("Please enter a valid puppy weight and age.");
      return;
    }

    let multiplier = 2.5;

    if (breedSize === "small") multiplier = 2;
    if (breedSize === "large") multiplier = 3;

    const estimatedAdultWeight = (weight / age) * multiplier * 4;

    const adultWeightMin = Math.round(estimatedAdultWeight * 0.9);
    const adultWeightMax = Math.round(estimatedAdultWeight * 1.1);

    let growthStage = "Steady growth stage";
    let predictionNote =
      "Your puppy is continuing normal growth and development.";

    if (age <= 3) {
      growthStage = "Rapid growth stage";
      predictionNote =
        "Young puppies often gain weight quickly during the first several months.";
    }

    if (age >= 6 && age <= 12) {
      growthStage = "Slower growth stage";
      predictionNote =
        "Growth may begin slowing as your puppy approaches adult size.";
    }

    if (age > 12) {
      growthStage = "Near adult size";
      predictionNote =
        "Many puppies are close to adult size, although large breeds may continue developing.";
    }

    setResult({
      adultWeightMin,
      adultWeightMax,
      growthStage,
      predictionNote,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Predict Puppy Adult Weight
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your puppy&apos;s current weight, age, and breed size to estimate
        future adult weight range and growth stage.
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
            placeholder="Enter puppy age in months"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
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
      </div>

      <button
        onClick={predictAdultWeight}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Predict Adult Weight
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Adult Weight:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.adultWeightMin}–{result.adultWeightMax} kg
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Growth stage
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.growthStage}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Prediction guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.predictionNote}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Breed, genetics, nutrition,
            activity level, and health can all affect adult weight.
          </p>
        </div>
      )}
    </div>
  );
}