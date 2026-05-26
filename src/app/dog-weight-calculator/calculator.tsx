"use client";

import { useState } from "react";

export default function DogWeightCalculator() {
  const [weight, setWeight] = useState("");
  const [breedSize, setBreedSize] = useState("medium");
  const [bodyShape, setBodyShape] = useState("ideal");

  const [result, setResult] = useState<{
    status: string;
    idealRange: string;
    guidance: string;
    note: string;
  } | null>(null);

  function calculateWeightStatus() {
    const dogWeight = Number(weight);

    if (!dogWeight || dogWeight <= 0) {
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

    let status = "Healthy weight range";
    let guidance =
      "Your dog appears to be within a general healthy weight range for this breed size.";

    if (dogWeight < min) {
      status = "May be underweight";
      guidance =
        "Your dog may be below the general weight range for this breed size. Consider checking body condition and diet quality.";
    }

    if (dogWeight > max) {
      status = "May be overweight";
      guidance =
        "Your dog may be above the general weight range for this breed size. Portion control, activity, and calorie intake may need review.";
    }

    if (bodyShape === "thin") {
      guidance =
        "If your dog looks thin or ribs are very visible, ask a veterinarian about healthy weight gain.";
    }

    if (bodyShape === "heavy") {
      guidance =
        "If your dog has reduced waist definition or ribs are hard to feel, weight management may be helpful.";
    }

    setResult({
      status,
      idealRange: `${min}–${max} kg`,
      guidance,
      note:
        "This is a general estimate only. Breed, height, muscle mass, age, and health can all affect ideal weight.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Check Dog Weight Status
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your dog&apos;s weight, breed size, and body shape to estimate
        whether your dog may be underweight, healthy, or overweight.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Dog Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter dog weight"
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
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Body Shape
          </label>

          <select
            value={bodyShape}
            onChange={(e) => setBodyShape(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="thin">Thin / ribs very visible</option>
            <option value="ideal">Ideal / visible waist</option>
            <option value="heavy">Heavy / ribs hard to feel</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateWeightStatus}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Check Weight Status
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Weight Result:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.status}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                General weight range
              </p>

              <p className="mt-1 text-xl font-bold">
                {result.idealRange}
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