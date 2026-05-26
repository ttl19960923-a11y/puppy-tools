"use client";

import { useState } from "react";

export default function PuppyAgeCalculator() {
  const [dogAge, setDogAge] = useState("");
  const [ageUnit, setAgeUnit] = useState("months");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    humanAge: string;
    stage: string;
    guidance: string;
    note: string;
  } | null>(null);

  function calculateAge() {
    const age = Number(dogAge);

    if (!age || age <= 0) {
      alert("Please enter a valid puppy age.");
      return;
    }

    let ageYears = age;

    if (ageUnit === "months") {
      ageYears = age / 12;
    }

    let humanYears = 0;

    if (ageYears <= 2) {
      humanYears = ageYears * 10.5;
    } else {
      humanYears = 21 + (ageYears - 2) * 4;
    }

    if (breedSize === "large") {
      humanYears *= 1.1;
    }

    if (breedSize === "small") {
      humanYears *= 0.95;
    }

    let stage = "Young puppy stage";
    let guidance =
      "Focus on socialization, feeding routines, sleep, and gentle training.";

    if (ageYears >= 0.5) {
      stage = "Growing puppy stage";
      guidance =
        "Puppies at this stage often experience rapid growth, teething, and increased activity.";
    }

    if (ageYears >= 1) {
      stage = "Adolescent stage";
      guidance =
        "Behavior, activity level, and body size may continue changing during adolescence.";
    }

    if (ageYears >= 2) {
      stage = "Young adult stage";
      guidance =
        "Many dogs begin transitioning toward adult routines and maintenance feeding.";
    }

    setResult({
      humanAge: `${humanYears.toFixed(1)} human years`,
      stage,
      guidance,
      note:
        "Dog age conversion is only an estimate. Breed size, genetics, nutrition, and overall health may affect aging speed.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Puppy Age
      </h2>

      <p className="mt-3 text-slate-600">
        Convert puppy age into estimated human years and understand development
        stages.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Puppy Age
          </label>

          <input
            type="number"
            value={dogAge}
            onChange={(e) => setDogAge(e.target.value)}
            placeholder="Enter puppy age"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Age Unit
          </label>

          <select
            value={ageUnit}
            onChange={(e) => setAgeUnit(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="months">Months</option>
            <option value="years">Years</option>
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
        onClick={calculateAge}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Human Age
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Human Age:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.humanAge}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Development stage
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.stage}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Puppy guidance
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