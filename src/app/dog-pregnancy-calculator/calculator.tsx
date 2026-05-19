"use client";

import { useState } from "react";

export default function DogPregnancyCalculator() {
  const [matingDate, setMatingDate] = useState("");
  const [result, setResult] = useState("");

  function calculateDueDate() {
    if (!matingDate) {
      alert("Please select a mating date.");
      return;
    }

    const startDate = new Date(matingDate);

    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + 63);

    setResult(
      dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog Due Date
      </h2>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Mating Date
        </label>

        <input
          type="date"
          value={matingDate}
          onChange={(e) => setMatingDate(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <button
        onClick={calculateDueDate}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Due Date
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Due Date:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}