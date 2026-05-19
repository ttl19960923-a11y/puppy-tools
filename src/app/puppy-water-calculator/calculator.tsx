"use client";

import { useState } from "react";

export default function PuppyWaterCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("2-4");
  const [result, setResult] = useState("");

  function calculateWater() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let waterMl = puppyWeight * 60;

    if (age === "2-4") waterMl *= 1.1;
    if (age === "4-8") waterMl *= 1;
    if (age === "8-12") waterMl *= 0.95;

    setResult(`${Math.round(waterMl)} ml per day`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Puppy Water Intake
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
          Puppy Age
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="2-4">2–4 months</option>
          <option value="4-8">4–8 months</option>
          <option value="8-12">8–12 months</option>
        </select>
      </div>

      <button
        onClick={calculateWater}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Water Intake
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Water Intake:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Hot weather, exercise, dry food,
            and health conditions may change your puppy&apos;s water needs.
          </p>
        </div>
      )}
    </div>
  );
}