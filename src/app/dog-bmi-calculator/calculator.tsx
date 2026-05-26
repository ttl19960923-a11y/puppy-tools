"use client";

import { useState } from "react";

export default function DogBMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [breedSize, setBreedSize] = useState("medium");

  const [result, setResult] = useState<{
    bmi: string;
    status: string;
    guidance: string;
    note: string;
  } | null>(null);

  function calculateBMI() {
    const dogWeight = Number(weight);
    const dogHeight = Number(height);

    if (!dogWeight || dogWeight <= 0 || !dogHeight || dogHeight <= 0) {
      alert("Please enter a valid dog weight and height.");
      return;
    }

    const heightMeters = dogHeight / 100;
    let bmi = dogWeight / (heightMeters * heightMeters);

    if (breedSize === "small") {
      bmi *= 0.95;
    }

    if (breedSize === "large") {
      bmi *= 1.05;
    }

    let status = "Healthy body range";
    let guidance =
      "Your dog appears to be within a general healthy body weight range.";

    if (bmi < 15) {
      status = "May be underweight";
      guidance =
        "Your dog may be below a typical body weight range. Body condition and feeding may need review.";
    }

    if (bmi > 25) {
      status = "May be overweight";
      guidance =
        "Your dog may be above a typical body weight range. Activity level and calorie intake may need adjustment.";
    }

    setResult({
      bmi: bmi.toFixed(1),
      status,
      guidance,
      note:
        "Dog BMI is only a rough estimate. Breed shape, muscle mass, frame size, and body condition can strongly affect results.",
    });
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog BMI
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your dog&apos;s weight, height, and breed size to estimate body
        weight status.
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
            Dog Height (cm)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter dog height"
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
      </div>

      <button
        onClick={calculateBMI}
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate BMI
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Dog BMI:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.bmi}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">
                BMI status
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