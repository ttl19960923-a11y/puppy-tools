"use client";

import { useState } from "react";

export default function PuppySleepScheduleByAgeCalculator() {
  const [age, setAge] = useState("8-10-weeks");

  const [result, setResult] = useState<{
    sleep: string;
    naps: string;
    night: string;
    guidance: string;
  } | null>(null);

  function showSleepSchedule() {
    if (age === "8-10-weeks") {
      setResult({
        sleep: "18–20 hours daily",
        naps: "6–8 naps",
        night: "6–8 hours overnight with potty breaks",
        guidance:
          "Young puppies usually alternate between short play sessions and frequent sleep periods.",
      });
    }

    if (age === "3-4-months") {
      setResult({
        sleep: "16–18 hours daily",
        naps: "4–6 naps",
        night: "7–8 hours overnight",
        guidance:
          "Sleep routines become more predictable as puppies begin adapting to daily schedules.",
      });
    }

    if (age === "5-6-months") {
      setResult({
        sleep: "14–16 hours daily",
        naps: "2–4 naps",
        night: "8–9 hours overnight",
        guidance:
          "Puppies often become more active and gradually reduce daytime naps.",
      });
    }

    if (age === "6-12-months") {
      setResult({
        sleep: "12–14 hours daily",
        naps: "1–2 naps",
        night: "8–10 hours overnight",
        guidance:
          "Older puppies may begin following more adult-like routines.",
      });
    }
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Puppy Sleep Schedule Finder
      </h2>

      <p className="mt-3 text-slate-600">
        Explore estimated sleep hours and daily sleep patterns by puppy age.
      </p>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Puppy Age
        </label>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="8-10-weeks">
            8–10 weeks
          </option>

          <option value="3-4-months">
            3–4 months
          </option>

          <option value="5-6-months">
            5–6 months
          </option>

          <option value="6-12-months">
            6–12 months
          </option>

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
            Suggested Puppy Sleep Routine
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Daily Sleep
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.sleep}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Daytime Naps
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.naps}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Night Sleep
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.night}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Guidance
              </p>

              <p className="mt-1 leading-6">
                {result.guidance}
              </p>
            </div>

          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            This puppy sleep schedule is only a general guide. Sleep needs can
            vary by breed, health, activity level, environment, and daily
            routine.
          </p>

        </div>
      )}

    </div>
  );
}