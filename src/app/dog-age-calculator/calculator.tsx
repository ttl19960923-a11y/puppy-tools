"use client";

import { useState } from "react";

export default function DogAgeCalculator() {
  const [dogAge, setDogAge] = useState("");
  const [humanAge, setHumanAge] = useState("");

  function calculateAge() {
    const age = Number(dogAge);

    if (!age || age <= 0) {
      alert("Please enter a valid dog age.");
      return;
    }

    let result = 0;

    if (age <= 2) {
      result = age * 10.5;
    } else {
      result = 21 + (age - 2) * 4;
    }

    setHumanAge(`${result.toFixed(1)} human years`);
  }

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Calculate Dog Age
      </h2>

      <div className="mt-8">
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

      <button
        onClick={calculateAge}
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Calculate Human Age
      </button>

      {humanAge && (
        <div className="mt-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-lg font-semibold">
            Estimated Age:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {humanAge}
          </p>
        </div>
      )}
    </div>
  );
}