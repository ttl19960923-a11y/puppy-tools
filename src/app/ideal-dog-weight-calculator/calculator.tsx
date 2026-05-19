"use client";

import { useState } from "react";

export default function IdealDogWeightCalculator() {
  const [breedSize, setBreedSize] = useState("medium");
  const [currentWeight, setCurrentWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateIdealWeight() {
    const weight = Number(currentWeight);

    if (!weight || weight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let idealRange = "";

    if (breedSize === "small") {
      idealRange = "5–10 kg";
    }

    if (breedSize === "medium") {
      idealRange = "10–25 kg";
    }

    if (breedSize === "large") {
      idealRange = "25–45 kg";
    }

    if (breedSize === "giant") {
      idealRange = "45+ kg";
    }

    setResult(`Estimated ideal weight range: ${idealRange}`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Estimate Ideal Dog Weight
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Current Dog Weight (kg)
        </label>

        <input
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          placeholder="Enter current dog weight"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Breed Size
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

      <button
        onClick={calculateIdealWeight}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Estimate Ideal Weight
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Ideal Weight Result:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a broad estimate only. Ideal dog weight varies by breed,
            body frame, muscle mass, age, and overall health.
          </p>
        </div>
      )}
    </div>
  );
}