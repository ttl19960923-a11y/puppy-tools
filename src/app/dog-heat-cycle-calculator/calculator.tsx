"use client";

import { useState } from "react";

export default function DogHeatCycleCalculator() {
  const [lastHeatDate, setLastHeatDate] = useState("");
  const [cycleLength, setCycleLength] = useState("180");
  const [result, setResult] = useState("");

  function calculateNextHeat() {
    if (!lastHeatDate) {
      alert("Please select your dog's last heat start date.");
      return;
    }

    const startDate = new Date(lastHeatDate);
    const nextHeatDate = new Date(startDate);

    nextHeatDate.setDate(nextHeatDate.getDate() + Number(cycleLength));

    setResult(
      nextHeatDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Next Dog Heat Cycle
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Last Heat Start Date
        </label>

        <input
          type="date"
          value={lastHeatDate}
          onChange={(e) => setLastHeatDate(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Average Cycle Length
        </label>

        <select
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="150">About 5 months</option>
          <option value="180">About 6 months</option>
          <option value="210">About 7 months</option>
          <option value="240">About 8 months</option>
        </select>
      </div>

      <button
        onClick={calculateNextHeat}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Estimate Next Heat Date
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Next Heat Date:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Heat cycles can vary by breed,
            age, health, and individual dog.
          </p>
        </div>
      )}
    </div>
  );
}