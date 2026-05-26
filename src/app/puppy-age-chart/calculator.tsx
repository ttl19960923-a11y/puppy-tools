"use client";

import { useState } from "react";

export default function PuppyAgeChartCalculator() {
  const [age, setAge] = useState("2");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    stage: string;
    focus: string;
    feeding: string;
    training: string;
    note: string;
  } | null>(null);

  function showAgeStage() {
    let stage = "";
    let focus = "";
    let feeding = "";
    let training = "";

    if (age === "2") {
      stage = "Early puppy stage";
      focus =
        "Rapid growth, sleep routines, socialization, and frequent feeding.";
      feeding =
        "Young puppies often need several small meals throughout the day.";
      training =
        "Focus on bonding, potty routine, gentle handling, and early socialization.";
    }

    if (age === "3") {
      stage = "Young puppy stage";
      focus =
        "Teething, play routines, confidence building, and early obedience.";
      feeding =
        "Most puppies still need multiple meals daily to support growth.";
      training =
        "Short training sessions and positive reinforcement work best.";
    }

    if (age === "6") {
      stage = "Adolescent puppy stage";
      focus =
        "Behavior changes, exercise, consistency, and continued growth.";
      feeding =
        "Some puppies begin transitioning toward fewer meals per day.";
      training =
        "Consistency becomes important as adolescent behavior develops.";
    }

    if (age === "12") {
      stage = "Young adult stage";
      focus =
        "Adult routines, stable feeding, and long-term health habits.";
      feeding =
        "Many dogs begin transitioning toward adult food and maintenance feeding.";
      training =
        "Reinforcing routines and long-term habits remains important.";
    }

    if (breedSize === "large") {
      focus +=
        " Large breed puppies may continue growing longer than small breeds.";
    }

    if (breedSize === "small") {
      focus +=
        " Small breed puppies often mature faster and reach adult size earlier.";
    }

    setResult({
      stage,
      focus,
      feeding,
      training,
      note:
        "Puppy development varies by breed size, genetics, nutrition, health, and environment.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Find Puppy Age Stage
      </h2>

      <p className="mt-3 text-slate-600">
        Explore common puppy growth, feeding, sleep, and training stages by age.
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
            <option value="2">2 months</option>
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
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
        onClick={showAgeStage}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Show Puppy Age Stage
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Puppy Development Stage:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.stage}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Growth focus
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.focus}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Feeding guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.feeding}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 md:col-span-2">
              <p className="text-sm text-slate-500">
                Training guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.training}
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