"use client";

import { useState } from "react";

export default function TwoMonthPuppyWeightCalculator() {
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("medium");
  const [result, setResult] = useState("");

  function calculateAdultWeight() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let multiplier = 4;

    if (size === "small") multiplier = 3.5;
    if (size === "medium") multiplier = 4;
    if (size === "large") multiplier = 4.5;

    const adultWeight = puppyWeight * multiplier;

    setResult(`${Math.round(adultWeight)} kg estimated adult weight`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        2 Month Puppy Weight Calculator
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Current Puppy Weight (kg)
        </label>

        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter current puppy weight"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
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
          <option value="small">Small breed</option>
          <option value="medium">Medium breed</option>
          <option value="large">Large breed</option>
        </select>
      </div>

      <button
        onClick={calculateAdultWeight}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Estimate Adult Weight
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
            This is a rough estimate only. Breed, genetics, nutrition, and
            growth rate can all affect adult weight.
          </p>
        </div>
      )}
    </div>
  );
}