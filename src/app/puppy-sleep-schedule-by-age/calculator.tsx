"use client";

import { useState } from "react";

export default function PuppySleepScheduleByAgeCalculator() {
  const [age, setAge] = useState("8-10-weeks");
  const [result, setResult] = useState("");

  function showSleepSchedule() {
    let schedule = "";

    if (age === "8-10-weeks") {
      schedule =
        "18–20 hours of sleep per day, with several naps and frequent potty breaks.";
    }

    if (age === "3-4-months") {
      schedule =
        "16–18 hours of sleep per day, with daytime naps and a more regular night routine.";
    }

    if (age === "5-6-months") {
      schedule =
        "14–16 hours of sleep per day, with fewer naps and longer nighttime sleep.";
    }

    if (age === "6-12-months") {
      schedule =
        "12–14 hours of sleep per day, depending on breed size, activity, and routine.";
    }

    setResult(schedule);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Puppy Sleep Schedule By Age
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
          <option value="8-10-weeks">8–10 weeks</option>
          <option value="3-4-months">3–4 months</option>
          <option value="5-6-months">5–6 months</option>
          <option value="6-12-months">6–12 months</option>
        </select>
      </div>

      <button
        onClick={showSleepSchedule}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Sleep Schedule
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Suggested Sleep Range:
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general guide only. Sleep needs can vary by breed, health,
            activity level, environment, and daily routine.
          </p>
        </div>
      )}
    </div>
  );
}