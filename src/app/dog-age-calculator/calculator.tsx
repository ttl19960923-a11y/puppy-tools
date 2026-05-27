"use client";

import { useState } from "react";

export default function DogAgeCalculator() {
  const [dogAge, setDogAge] = useState("");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    humanAge: number;
    lifeStage: string;
    agingTip: string;
    healthTip: string;
  } | null>(null);

  function calculateAge() {
    const age = Number(dogAge);

    if (!age || age <= 0) {
      alert("Please enter a valid dog age.");
      return;
    }

    let humanYears = 0;

    if (age <= 2) {
      humanYears = age * 10.5;
    } else {
      humanYears = 21 + (age - 2) * 4;
    }

    if (breedSize === "large") {
      humanYears *= 1.1;
    }

    if (breedSize === "small") {
      humanYears *= 0.95;
    }

    let lifeStage = "";
    let agingTip = "";
    let healthTip = "";

    if (age < 1) {
      lifeStage = "Puppy";

      agingTip =
        "Rapid growth and learning happen during puppy stages.";

      healthTip =
        "Focus on nutrition, vaccinations, socialization, and training.";
    }

    else if (age < 7) {
      lifeStage = "Adult Dog";

      agingTip =
        "Adult dogs usually maintain stable physical development.";

      healthTip =
        "Maintain healthy weight, exercise, and routine veterinary care.";
    }

    else {
      lifeStage = "Senior Dog";

      agingTip =
        "Senior dogs may age faster and require more monitoring.";

      healthTip =
        "Watch for mobility changes, dental issues, and age-related conditions.";
    }

    setResult({
      humanAge: Math.round(humanYears),
      lifeStage,
      agingTip,
      healthTip,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Calculate Dog Age
      </h2>

      <p className="mt-3 text-slate-600">
        Convert dog years into estimated human years and identify life stage.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Dog Age (Years)
          </label>

          <input
            type="number"
            value={dogAge}
            onChange={(e) => setDogAge(e.target.value)}
            placeholder="Enter dog age"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
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
            <option value="small">
              Small Breed
            </option>

            <option value="medium">
              Medium Breed
            </option>

            <option value="large">
              Large Breed
            </option>
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
            {result.humanAge} human years
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Life Stage
              </p>

              <p className="mt-1 text-lg font-semibold">
                {result.lifeStage}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Aging Guidance
              </p>

              <p className="mt-1 leading-6">
                {result.agingTip}
              </p>
            </div>

          </div>

          <div className="mt-4 rounded-2xl bg-white p-4">

            <p className="text-sm text-slate-500">
              Health Tip
            </p>

            <p className="mt-1 leading-6">
              {result.healthTip}
            </p>

          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Breed size, genetics,
            nutrition, and lifestyle can affect aging speed.
          </p>

        </div>

      )}

    </div>
  );
}