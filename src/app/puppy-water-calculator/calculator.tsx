"use client";

import { useState } from "react";

export default function PuppyWaterCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("2-4");
  const [activity, setActivity] = useState("normal");
  const [foodType, setFoodType] = useState("dry");
  const [weather, setWeather] = useState("normal");

  const [result, setResult] = useState<{
    waterMin: number;
    waterMax: number;
    activityNote: string;
    hydrationNote: string;
  } | null>(null);

  function calculateWater() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid puppy weight.");
      return;
    }

    let baseWater = puppyWeight * 60;

    if (age === "2-4") baseWater *= 1.1;
    if (age === "4-8") baseWater *= 1;
    if (age === "8-12") baseWater *= 0.95;

    if (activity === "low") baseWater *= 0.9;
    if (activity === "high") baseWater *= 1.2;

    if (foodType === "wet") baseWater *= 0.85;
    if (foodType === "dry") baseWater *= 1.1;

    if (weather === "hot") baseWater *= 1.2;
    if (weather === "cold") baseWater *= 0.95;

    const waterMin = Math.round(baseWater * 0.9);
    const waterMax = Math.round(baseWater * 1.1);

    let activityNote =
      "Normal activity puppies usually need steady access to fresh water.";

    if (activity === "low") {
      activityNote =
        "Low activity puppies may drink slightly less, but fresh water should still be available.";
    }

    if (activity === "high") {
      activityNote =
        "Highly active puppies may need more water, especially after play, walks, or training.";
    }

    let hydrationNote =
      "Monitor drinking habits and contact a veterinarian if water intake changes suddenly.";

    if (weather === "hot") {
      hydrationNote =
        "Hot weather can increase water needs. Watch for signs of overheating or dehydration.";
    }

    if (foodType === "dry") {
      hydrationNote =
        "Puppies eating dry food may drink more water because dry food contains less moisture.";
    }

    setResult({
      waterMin,
      waterMax,
      activityNote,
      hydrationNote,
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Puppy Water Intake
      </h2>

      <p className="mt-3 text-slate-600">
        Estimate daily puppy water needs based on weight, age, activity, food
        type, and weather.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Puppy Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter puppy weight"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Puppy Age
          </label>

          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="2-4">2–4 months</option>
            <option value="4-8">4–8 months</option>
            <option value="8-12">8–12 months</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Activity Level
          </label>

          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="low">Low activity</option>
            <option value="normal">Normal activity</option>
            <option value="high">High activity</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Food Type
          </label>

          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="dry">Dry food</option>
            <option value="wet">Wet food</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Weather
          </label>

          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="cold">Cool weather</option>
            <option value="normal">Normal weather</option>
            <option value="hot">Hot weather</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateWater}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Water Intake
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Daily Water Intake:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.waterMin}–{result.waterMax} ml/day
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Activity guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.activityNote}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Hydration guidance
              </p>

              <p className="mt-1 text-base font-medium leading-6">
                {result.hydrationNote}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a general estimate only. Health conditions, medication,
            vomiting, diarrhea, heat, and exercise can all affect puppy water
            needs.
          </p>
        </div>
      )}
    </div>
  );
}