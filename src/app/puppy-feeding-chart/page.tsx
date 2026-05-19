"use client";

import { useState } from "react";

export default function PuppyFeedingCalculatorPage() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateFood() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }

    const foodAmount = puppyWeight * 30;

    setResult(`${foodAmount} g per day`);
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          Puppy Feeding Calculator
        </h1>

        <p className="mt-6 text-center text-slate-600 text-lg">
          Estimate how much food your puppy may need each day based on age,
          weight, breed size, and food type.
        </p>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-3xl font-bold">
            Calculate Daily Feeding Amount
          </h2>

          <div className="mt-8">
            <label className="text-sm font-medium">
              Puppy Weight (kg)
            </label>

            <input
              type="number"
              placeholder="Example: 5"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            onClick={calculateFood}
            className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold"
          >
            Calculate Feeding Amount
          </button>

          {result && (
            <div className="mt-8 rounded-2xl bg-slate-100 p-6">
              <p className="text-sm text-slate-500">
                Estimated Daily Food Intake
              </p>

              <p className="mt-2 text-3xl font-bold">
                {result}
              </p>
            </div>
          )}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Puppy Feeding Guide
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Puppies grow rapidly during the first year of life and require more
            calories than adult dogs. Younger puppies usually need smaller
            meals several times a day.
          </p>

          <p className="mt-4 text-slate-600 leading-8">
            Feeding amounts may vary depending on breed, activity level,
            metabolism, and food quality. Always check your puppy food label
            and consult a veterinarian when needed.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Puppy Feeding FAQ
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                How many times should puppies eat?
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Puppies between 2 and 3 months old often eat four meals daily,
                while older puppies gradually transition to two meals per day.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I feed adult dog food?
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Puppy-specific food is recommended because growing puppies
                require different nutrients than adult dogs.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}