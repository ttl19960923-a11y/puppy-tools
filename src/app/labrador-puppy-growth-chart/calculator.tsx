"use client";

import { useState } from "react";

export default function LabradorPuppyGrowthChartCalculator() {
  const [age, setAge] = useState("2");
  const [currentWeight, setCurrentWeight] = useState("");
  const [result, setResult] = useState("");

  function estimateGrowth() {
    const weight = Number(currentWeight);

    if (!weight || weight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let stage = "";
    let estimatedAdultWeight = weight;

    if (age === "2") {
      stage = "Early growth stage";
      estimatedAdultWeight = weight * 4;
    }

    if (age === "3") {
      stage = "Rapid growth stage";
      estimatedAdultWeight = weight * 3;
    }

    if (age === "6") {
      stage = "Steady growth stage";
      estimatedAdultWeight = weight * 1.6;
    }

    if (age === "9") {
      stage = "Near adult stage";
      estimatedAdultWeight = weight * 1.2;
    }

    setResult(
      `${stage} — estimated adult weight: ${Math.round(
        estimatedAdultWeight
      )} kg`
    );
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Labrador Puppy Growth Estimator
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Labrador Puppy Age
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="2">2 months</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="9">9 months</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Current Weight (kg)
        </label>

        <input
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          placeholder="Enter current weight"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <button
        onClick={estimateGrowth}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Estimate Growth
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Growth Estimate:
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a rough estimate only. Labrador growth can vary by genetics,
            nutrition, sex, activity level, and overall health.
          </p>
        </div>
      )}
    </div>
  );
}