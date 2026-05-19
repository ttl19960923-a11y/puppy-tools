"use client";

import { useState } from "react";

export default function PuppyFeedingScheduleCalculator() {
  const [age, setAge] = useState("2-3");
  const [result, setResult] = useState("");

  function showSchedule() {
    let schedule = "";

    if (age === "2-3") {
      schedule = "4 meals per day: morning, midday, afternoon, and evening.";
    }

    if (age === "4-6") {
      schedule = "3 meals per day: morning, midday, and evening.";
    }

    if (age === "6-12") {
      schedule = "2 meals per day: morning and evening.";
    }

    setResult(schedule);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Find a Puppy Feeding Schedule
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
          <option value="2-3">2–3 months</option>
          <option value="4-6">4–6 months</option>
          <option value="6-12">6–12 months</option>
        </select>
      </div>

      <button
        onClick={showSchedule}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Feeding Schedule
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Suggested Feeding Schedule:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general schedule only. Adjust meal timing based on your
            puppy&apos;s routine, appetite, and veterinarian guidance.
          </p>
        </div>
      )}
    </div>
  );
}