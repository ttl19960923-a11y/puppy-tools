"use client";

import { useState } from "react";

export default function DogBMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  function calculateBMI() {
    const dogWeight = Number(weight);
    const dogHeight = Number(height);

    if (!dogWeight || dogWeight <= 0 || !dogHeight || dogHeight <= 0) {
      alert("Please enter a valid dog weight and height.");
      return;
    }

    const heightMeters = dogHeight / 100;
    const bmi = dogWeight / (heightMeters * heightMeters);

    let status = "";

    if (bmi < 15) {
      status = "Your dog may be underweight.";
    } else if (bmi <= 25) {
      status = "Your dog appears to be in a healthy range.";
    } else {
      status = "Your dog may be overweight.";
    }

    setResult(`${bmi.toFixed(1)}`);
    setMessage(status);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog BMI
      </h2>

      <div className="mt-8">
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

      <div className="mt-6">
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

      <button
        onClick={calculateBMI}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate BMI
      </button>

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Dog BMI:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result}
          </p>

          <p className="mt-4 text-lg font-medium text-slate-700">
            {message}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This is a rough estimate only. Dog body condition varies by breed,
            body shape, and muscle mass.
          </p>
        </div>
      )}
    </div>
  );
}