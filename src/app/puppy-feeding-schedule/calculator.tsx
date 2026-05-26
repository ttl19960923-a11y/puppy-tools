"use client";

import { useState } from "react";

export default function PuppyFeedingScheduleCalculator() {
  const [age, setAge] = useState("2-3");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    meals: string;
    schedule: string;
    guidance: string;
    note: string;
  } | null>(null);

  function showSchedule() {
    let meals = "";
    let schedule = "";
    let guidance = "";

    if (age === "2-3") {
      meals = "4 meals per day";
      schedule =
        "Morning, midday, afternoon, and evening feeding schedule.";
      guidance =
        "Young puppies often need frequent meals because of rapid growth and smaller stomach size.";
    }

    if (age === "4-6") {
      meals = "3 meals per day";
      schedule =
        "Breakfast, lunch, and dinner feeding routine.";
      guidance =
        "Many puppies at this stage continue growing quickly and remain highly active.";
    }

    if (age === "6-12") {
      meals = "2–3 meals per day";
      schedule =
        "Morning and evening feeding, with some puppies still needing a midday meal.";
      guidance =
        "Older puppies often begin transitioning toward adult feeding schedules.";
    }

    if (breedSize === "large") {
      guidance +=
        " Large breed puppies may continue puppy feeding routines for longer.";
    }

    if (breedSize === "small") {
      guidance +=
        " Small breed puppies may mature earlier and transition faster.";
    }

    setResult({
      meals,
      schedule,
      guidance,
      note:
        "This is a general feeding schedule only. Feeding needs vary by breed size, calorie intake, food type, activity level, and health.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Find a Puppy Feeding Schedule
      </h2>

      <p className="mt-3 text-slate-600">
        Explore common feeding schedules and meal frequency by puppy age.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
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

        <div>
          <label className="mb-2 block text-sm font-medium">
            Breed Size
          </label>

          <select
            value={breedSize}
            onChange={(e) => setBreedSize(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="small">Small breed</option>
            <option value="medium">Medium breed</option>
            <option value="large">Large breed</option>
          </select>
        </div>
      </div>

      <button
        onClick={showSchedule}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Feeding Schedule
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Recommended Feeding Frequency:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.meals}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Suggested routine
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.schedule}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Feeding guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.guidance}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            {result.note}
          </p>
        </div>
      )}
    </div>
  );
}