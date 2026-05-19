"use client";

import { useState } from "react";

export default function PuppyWeightPredictor() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [result, setResult] = useState("");

  function predictAdultWeight() {
    const weight = Number(currentWeight);
    const age = Number(ageMonths);

    if (!weight || weight <= 0 || !age || age <= 0) {
      alert("Please enter a valid puppy weight and age.");
      return;
    }

    const estimatedAdultWeight = (weight / age) * 12;

    setResult(`${Math.round(estimatedAdultWeight)} kg estimated adult weight`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Predict Puppy Adult Weight
      </h2>

      <div className="mt-8">
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

      <div className="mt-6">
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

      <button
        onClick={predictAdultWeight}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Predict Adult Weight
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Adult Weight:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a rough estimate only. Breed size, genetics, nutrition, and
            health can all affect adult weight.
          </p>
        </div>
      )}
    </div>
  );
}