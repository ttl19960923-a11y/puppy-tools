"use client";

import { useState } from "react";

export default function DogFeedingChartByAgeCalculator() {
  const [age, setAge] = useState("puppy");
  const [weight, setWeight] = useState("");

  const [result, setResult] = useState<{
    grams:number;
    meals:string;
    stage:string;
    advice:string;
    tip:string;
  } | null>(null);

  function calculateFeedingAmount() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let grams=0;
    let meals="";
    let stage="";
    let advice="";
    let tip="";

    if (age==="puppy") {
      grams=dogWeight*32;

      meals="3–4 meals per day";

      stage="Puppy";

      advice=
        "Puppies usually need more calories to support rapid growth and development.";

      tip=
        "Use puppy-specific food and divide meals evenly through the day.";
    }

    if (age==="adult") {
      grams=dogWeight*25;

      meals="1–2 meals per day";

      stage="Adult Dog";

      advice=
        "Adult dogs often benefit from stable portions and regular routines.";

      tip=
        "Monitor body condition and adjust portions if weight changes.";
    }

    if (age==="senior") {
      grams=dogWeight*22;

      meals="1–2 meals per day";

      stage="Senior Dog";

      advice=
        "Senior dogs may need feeding adjustments based on activity and health.";

      tip=
        "Watch for appetite changes and maintain healthy body weight.";
    }

    setResult({
      grams:Math.round(grams),
      meals,
      stage,
      advice,
      tip,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Dog Feeding Calculator By Age
      </h2>

      <p className="mt-3 text-slate-600">
        Estimate food amount and meal frequency based on age group.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Dog Age Group
          </label>

          <select
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3"
          >
            <option value="puppy">
              Puppy
            </option>

            <option value="adult">
              Adult Dog
            </option>

            <option value="senior">
              Senior Dog
            </option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Dog Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}
            placeholder="Enter dog weight"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3"
          />

        </div>

      </div>

      <button
        onClick={calculateFeedingAmount}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Show Feeding Guide
      </button>

      {result && (

        <div className="mt-8 rounded-2xl bg-slate-100 p-6">

          <p className="text-lg font-semibold">
            Estimated Daily Food
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.grams} g/day
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-4">

              <p className="text-sm text-slate-500">
                Meals Per Day
              </p>

              <p className="mt-1 font-semibold">
                {result.meals}
              </p>

            </div>

            <div className="rounded-2xl bg-white p-4">

              <p className="text-sm text-slate-500">
                Life Stage
              </p>

              <p className="mt-1 font-semibold">
                {result.stage}
              </p>

            </div>

          </div>

          <div className="mt-4 rounded-2xl bg-white p-4">

            <p className="text-sm text-slate-500">
              Feeding Advice
            </p>

            <p className="mt-2 leading-7">
              {result.advice}
            </p>

          </div>

          <div className="mt-4 rounded-2xl bg-white p-4">

            <p className="text-sm text-slate-500">
              Health Tip
            </p>

            <p className="mt-2 leading-7">
              {result.tip}
            </p>

          </div>

          <p className="mt-4 text-sm text-slate-500">
            This estimate may vary depending on breed, activity level,
            calorie density, food type, and overall health.
          </p>

        </div>

      )}

    </div>
  );
}