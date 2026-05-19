"use client";

import { useState } from "react";

export default function DogWeightCalculator() {
  const [weight, setWeight] = useState("");
  const [breedSize, setBreedSize] = useState("medium");
  const [result, setResult] = useState("");

  function calculateWeightStatus() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let message = "";

    if (breedSize === "small") {
      if (dogWeight < 5) {
        message = "Your dog may be underweight.";
      } else if (dogWeight <= 10) {
        message = "Your dog appears to have a healthy weight.";
      } else {
        message = "Your dog may be overweight.";
      }
    }

    if (breedSize === "medium") {
      if (dogWeight < 10) {
        message = "Your dog may be underweight.";
      } else if (dogWeight <= 25) {
        message = "Your dog appears to have a healthy weight.";
      } else {
        message = "Your dog may be overweight.";
      }
    }

    if (breedSize === "large") {
      if (dogWeight < 25) {
        message = "Your dog may be underweight.";
      } else if (dogWeight <= 45) {
        message = "Your dog appears to have a healthy weight.";
      } else {
        message = "Your dog may be overweight.";
      }
    }

    setResult(message);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Check Dog Weight Status
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
        </select>
      </div>

      <button
        onClick={calculateWeightStatus}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Check Weight Status
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Weight Result:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}