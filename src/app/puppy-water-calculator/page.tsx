"use client";
import { useState } from "react";

export default function PuppyWaterCalculatorPage() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateWater() {
    const puppyWeight = Number(weight);

    if (!puppyWeight || puppyWeight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }

    const waterMl = puppyWeight * 60;

    setResult(`${waterMl} ml per day`);
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] px-6 py-20 text-slate-900">
      <section className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Puppy Water Calculator
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Estimate how much water your puppy may need each day.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Calculate Daily Water Intake
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
            onClick={calculateWater}
            className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold"
          >
            Calculate Water Amount
          </button>

          {result && (
            <div className="mt-8 rounded-2xl bg-slate-100 p-6">
              <p className="text-sm text-slate-500">
                Estimated Daily Water Intake
              </p>

              <p className="mt-2 text-3xl font-bold">
                {result}
              </p>
            </div>
          )}
          <section className="mt-16">
  <h2 className="text-3xl font-bold">
    How Much Water Does a Puppy Need?
  </h2>

  <p className="mt-6 text-slate-600 leading-8">
    Puppies usually need more water than adult dogs because they grow
    quickly and use a lot of energy every day. In general, puppies may
    need around 50–70 ml of water per kilogram of body weight daily.
  </p>

  <p className="mt-4 text-slate-600 leading-8">
    Hot weather, exercise, dry food, and activity levels can all affect
    how much water your puppy needs. Always make sure clean drinking
    water is available throughout the day.
  </p>
</section>

<section className="mt-16">
  <h2 className="text-3xl font-bold">
    Puppy Water FAQ
  </h2>

  <div className="mt-8 space-y-8">
    <div>
      <h3 className="text-xl font-semibold">
        Can puppies drink too much water?
      </h3>

      <p className="mt-2 text-slate-600 leading-7">
        Yes. Excessive water intake may sometimes be harmful. If your
        puppy drinks unusually large amounts of water, consult a
        veterinarian.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold">
        How often should puppies drink water?
      </h3>

      <p className="mt-2 text-slate-600 leading-7">
        Puppies should have access to fresh water throughout the day,
        especially after meals, playtime, and exercise.
      </p>
    </div>
  </div>
</section>
        </div>
      </section>
      <section className="mt-16 max-w-3xl mx-auto">
  <h2 className="text-3xl font-bold">
    Related Puppy Tools
  </h2>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    <a
      href="/puppy-feeding-calculator"
      className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold">
        Puppy Feeding Calculator
      </h3>

      <p className="mt-2 text-slate-600">
        Estimate how much food your puppy needs daily.
      </p>
    </a>

    <a
      href="/puppy-feeding-chart"
      className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold">
        Puppy Feeding Chart
      </h3>

      <p className="mt-2 text-slate-600">
        View feeding schedules by puppy age and weight.
      </p>
    </a>
  </div>
</section>
    </main>
  );
}