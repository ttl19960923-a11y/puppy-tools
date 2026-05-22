"use client";

import { useState } from "react";

export default function TenWeekPuppyFeedingCalculator() {
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("medium");
  const [result, setResult] = useState("");

  function calculateFood() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let grams = puppyWeight * 33;

    if (size === "small") grams *= 0.9;
    if (size === "large") grams *= 1.15;

    setResult(`${Math.round(grams)} grams per day, divided into 3-4 meals`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        10 Week Puppy Feeding Calculator
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
        onClick={calculateFood}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Feeding Amount
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Food Amount:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Feeding needs can vary depending
            on breed, growth rate, activity level, and puppy food type.
          </p>
        </div>
      )}
    </div>
  );
}