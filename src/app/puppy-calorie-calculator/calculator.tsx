"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Unit = "lb" | "kg";
type BodyCondition = "under" | "ideal" | "over";

export default function PuppyCalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<Unit>("lb");
  const [ageMonths, setAgeMonths] = useState("3");
  const [bodyCondition, setBodyCondition] = useState<BodyCondition>("ideal");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const enteredWeight = Number(weight);
    const months = Number(ageMonths);
    if (!submitted || enteredWeight <= 0 || months <= 0) return null;

    const kg = unit === "lb" ? enteredWeight / 2.2046226218 : enteredWeight;
    const rer = 70 * Math.pow(kg, 0.75);
    const growthFactor = months < 4 ? 3 : 2;
    const calories = rer * growthFactor;
    const lowCalories = calories * 0.9;
    const highCalories = calories * 1.1;
    const treatBudget = calories * 0.1;

    const stage = months < 4 ? "Early growth" : months < 12 ? "Growing puppy" : "Late growth / maturity varies";
    const bodyNote = bodyCondition === "under"
      ? "Your puppy appears under ideal condition. Do not simply add a large calorie multiplier—confirm growth, diet adequacy, and health with your veterinarian."
      : bodyCondition === "over"
        ? "Your puppy appears over ideal condition. Avoid aggressive calorie restriction during growth; ask your veterinarian about an appropriate growth and body-condition target."
        : "Keep tracking body weight and body condition. The calculated calories are a starting point and should be adjusted to your puppy's response.";

    return { kg, rer, growthFactor, calories, lowCalories, highCalories, treatBudget, stage, bodyNote };
  }, [weight, unit, ageMonths, bodyCondition, submitted]);

  function calculateCalories() {
    if (Number(weight) <= 0 || Number(ageMonths) <= 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="calculator" className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Calorie calculator</p>
          <h2 className="mt-1 text-3xl font-bold">Estimate Your Puppy&apos;s Daily Calories</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-500">Uses RER plus a veterinary growth-stage factor. Body condition changes the guidance—not the formula by an arbitrary multiplier.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="calorie-weight" className="mb-2 block text-sm font-semibold">Current puppy weight</label>
          <div className="flex gap-2">
            <input id="calorie-weight" type="number" min="0.1" step="0.1" value={weight} onChange={(e) => { setWeight(e.target.value); setSubmitted(false); }} placeholder={unit === "lb" ? "e.g. 15" : "e.g. 6.8"} className="min-w-0 flex-1 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
            <select aria-label="Weight unit" value={unit} onChange={(e) => { setUnit(e.target.value as Unit); setSubmitted(false); }} className="rounded-2xl border border-slate-300 px-3 py-3 outline-none focus:border-blue-500"><option value="lb">lb</option><option value="kg">kg</option></select>
          </div>
        </div>

        <div>
          <label htmlFor="calorie-age" className="mb-2 block text-sm font-semibold">Age in months</label>
          <input id="calorie-age" type="number" min="2" max="24" step="0.5" value={ageMonths} onChange={(e) => { setAgeMonths(e.target.value); setSubmitted(false); }} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
          <p className="mt-2 text-xs text-slate-500">Designed for weaned, growing puppies. Neonatal puppies need different nutritional management.</p>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="body-condition" className="mb-2 block text-sm font-semibold">Body condition</label>
          <select id="body-condition" value={bodyCondition} onChange={(e) => { setBodyCondition(e.target.value as BodyCondition); setSubmitted(false); }} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
            <option value="under">Under ideal / looks too thin</option>
            <option value="ideal">Ideal / lean and growing steadily</option>
            <option value="over">Over ideal / gaining excess body fat</option>
          </select>
          <p className="mt-2 text-xs text-slate-500">Body condition is used for adjustment guidance, not as an automatic calorie-cutting or calorie-boosting factor.</p>
        </div>
      </div>

      <button onClick={calculateCalories} className="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 md:w-auto">Calculate Daily Calories</button>
      {submitted && !result && <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Please enter a valid current weight and age.</p>}

      {result && (
        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50/70 p-6 md:p-8" aria-live="polite">
          <p className="text-sm font-semibold text-blue-700">Estimated starting range</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-4xl font-bold tracking-tight text-slate-950">{Math.round(result.lowCalories)}–{Math.round(result.highCalories)} kcal</p>
            <span className="text-lg font-medium text-slate-500">per day</span>
          </div>
          <p className="mt-3 leading-7 text-slate-600">Central estimate: about <strong>{Math.round(result.calories)} kcal/day</strong>. Use the range as a practical starting point while monitoring growth and body condition.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">RER</p><p className="mt-1 text-xl font-bold">{Math.round(result.rer)} kcal</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Growth factor</p><p className="mt-1 text-xl font-bold">{result.growthFactor} × RER</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Growth stage</p><p className="mt-1 text-base font-bold">{result.stage}</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Treat ceiling</p><p className="mt-1 text-xl font-bold">~{Math.round(result.treatBudget)} kcal</p><p className="mt-1 text-xs text-slate-500">about 10% of total</p></div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Body-condition note:</strong> {result.bodyNote}</div>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold">Need cups or grams instead of calories?</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Food calorie density varies, so kcal/day cannot be converted to cups or grams without the food label.</p>
            <Link href="/puppy-feeding-calculator" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">Convert calories to a feeding amount →</Link>
          </div>
        </div>
      )}
    </section>
  );
}
