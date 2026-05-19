"use client";

import { useState } from "react";

export default function DogFeedingCalculator() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateFood() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    const foodAmount = dogWeight * 25;

    setResult(`${Math.round(foodAmount)} g per day`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog Feeding Amount
      </h2>

      <div className="mt-8">
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

      <button
        onClick={calculateFood}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Feeding Amount
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Food:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}