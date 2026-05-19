"use client";

import { useState } from "react";

export default function PuppyAgeChartCalculator() {
  const [age, setAge] = useState("2");
  const [result, setResult] = useState("");

  function showAgeStage() {
    let stage = "";

    if (age === "2") {
      stage = "Early puppy stage — rapid growth, frequent meals, and early training.";
    }

    if (age === "3") {
      stage = "Young puppy stage — socialization, teething, and high energy.";
    }

    if (age === "6") {
      stage = "Adolescent puppy stage — steady growth and more structured routines.";
    }

    if (age === "12") {
      stage = "Near adult stage — many puppies begin transitioning toward adult care routines.";
    }

    setResult(stage);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Find Puppy Age Stage
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Puppy Age
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="2">2 months</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="12">12 months</option>
        </select>
      </div>

      <button
        onClick={showAgeStage}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Puppy Age Stage
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Puppy Age Stage:
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}