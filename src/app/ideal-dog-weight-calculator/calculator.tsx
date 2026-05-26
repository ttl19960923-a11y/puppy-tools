"use client";

import { useState } from "react";

export default function IdealDogWeightCalculator() {
  const [breedSize, setBreedSize] = useState("medium");
  const [currentWeight, setCurrentWeight] = useState("");
  const [bodyFrame, setBodyFrame] = useState("average");

  const [result, setResult] = useState<{
    idealRange: string;
    status: string;
    guidance: string;
    note: string;
  } | null>(null);

  function calculateIdealWeight() {
    const weight = Number(currentWeight);

    if (!weight || weight <= 0) {
      alert("Please enter a valid dog weight.");
      return;
    }

    let min = 10;
    let max = 25;

    if (breedSize === "small") {
      min = 5;
      max = 10;
    }

    if (breedSize === "medium") {
      min = 10;
      max = 25;
    }

    if (breedSize === "large") {
      min = 25;
      max = 45;
    }

    if (breedSize === "giant") {
      min = 45;
      max = 70;
    }

    if (bodyFrame === "slim") {
      min *= 0.9;
      max *= 0.9;
    }

    if (bodyFrame === "muscular") {
      min *= 1.1;
      max *= 1.1;
    }

    min = Math.round(min);
    max = Math.round(max);

    let status = "Within estimated healthy range";
    let guidance =
      "Your dog appears to be near the estimated healthy weight range.";

    if (weight < min) {
      status = "Below estimated ideal range";
      guidance =
        "Your dog may be lighter than the estimated healthy range for this breed size and frame.";
    }

    if (weight > max) {
      status = "Above estimated ideal range";
      guidance =
        "Your dog may be heavier than the estimated healthy range for this breed size and frame.";
    }

    setResult({
      idealRange: `${min}–${max} kg`,
      status,
      guidance,
      note:
        "This estimate is only a general guide. Breed, muscle mass, height, age, and health condition can all affect ideal weight.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Estimate Ideal Dog Weight
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your dog&apos;s current weight, breed size, and body frame to
        estimate a healthy weight range.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Current Dog Weight (kg)
          </label>

          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder="Enter current dog weight"
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
            <option value="small">Small breed</option>
            <option value="medium">Medium breed</option>
            <option value="large">Large breed</option>
            <option value="giant">Giant breed</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Body Frame
          </label>

          <select
            value={bodyFrame}
            onChange={(e) => setBodyFrame(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="slim">Slim frame</option>
            <option value="average">Average frame</option>
            <option value="muscular">Muscular frame</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateIdealWeight}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Estimate Ideal Weight
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Ideal Weight Result:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.idealRange}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Weight status
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.status}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                Guidance
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