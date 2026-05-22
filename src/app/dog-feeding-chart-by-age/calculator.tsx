"use client";

import { useState } from "react";

export default function DogFeedingChartByAgeCalculator() {
  const [age, setAge] = useState("puppy");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateFeedingAmount() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let grams = dogWeight * 25;
    let meals = "2 meals per day";

    if (age === "puppy") {
      grams = dogWeight * 32;
      meals = "3–4 meals per day";
    }

    if (age === "adult") {
      grams = dogWeight * 25;
      meals = "1–2 meals per day";
    }

    if (age === "senior") {
      grams = dogWeight * 22;
      meals = "1–2 meals per day";
    }

    setResult(`${Math.round(grams)} grams per day, usually ${meals}`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Dog Feeding Chart By Age
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Dog Age Group
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="puppy">Puppy</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior Dog</option>
        </select>
      </div>

      <div className="mt-6">
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
        onClick={calculateFeedingAmount}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Feeding Guide
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Feeding Guide:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Feeding needs vary by breed,
            activity level, food type, metabolism, and health.
          </p>
        </div>
      )}
    </div>
  );
}