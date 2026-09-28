"use client";

import { useMemo, useState } from "react";

type Unit = "lb" | "kg";
type FoodUnit = "cup" | "100g";

export default function PuppyFeedingCalculator() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<Unit>("lb");
  const [ageMonths, setAgeMonths] = useState("3");
  const [foodCalories, setFoodCalories] = useState("400");
  const [foodUnit, setFoodUnit] = useState<FoodUnit>("cup");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const enteredWeight = Number(weight);
    const months = Number(ageMonths);
    const kcalDensity = Number(foodCalories);
    if (!submitted || enteredWeight <= 0 || months <= 0 || kcalDensity <= 0) return null;

    const kg = unit === "lb" ? enteredWeight / 2.2046226218 : enteredWeight;
    const rer = 70 * Math.pow(kg, 0.75);
    const growthFactor = months < 4 ? 3 : 2;
    const calories = rer * growthFactor;
    const lowCalories = calories * 0.9;
    const highCalories = calories * 1.1;

    let amountLow: number;
    let amountHigh: number;
    let amountUnit: string;

    if (foodUnit === "cup") {
      amountLow = lowCalories / kcalDensity;
      amountHigh = highCalories / kcalDensity;
      amountUnit = "cups";
    } else {
      amountLow = (lowCalories / kcalDensity) * 100;
      amountHigh = (highCalories / kcalDensity) * 100;
      amountUnit = "g";
    }

    const meals = months < 6 ? 3 : 2;

    return {
      kg,
      rer,
      growthFactor,
      calories,
      lowCalories,
      highCalories,
      amountLow,
      amountHigh,
      amountUnit,
      meals,
      perMealLow: amountLow / meals,
      perMealHigh: amountHigh / meals,
    };
  }, [weight, unit, ageMonths, foodCalories, foodUnit, submitted]);

  function calculateFood() {
    if (Number(weight) <= 0 || Number(ageMonths) <= 0 || Number(foodCalories) <= 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  }

  const amountDigits = foodUnit === "cup" ? 2 : 0;

  return (
    <section id="calculator" className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Calculate Your Puppy&apos;s Daily Food</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-500">Uses a veterinary energy-estimation formula, then converts calories into your food&apos;s actual serving amount.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="puppy-weight" className="mb-2 block text-sm font-semibold">Current puppy weight</label>
          <div className="flex gap-2">
            <input id="puppy-weight" type="number" min="0.1" step="0.1" value={weight} onChange={(e) => { setWeight(e.target.value); setSubmitted(false); }} placeholder={unit === "lb" ? "e.g. 15" : "e.g. 6.8"} className="min-w-0 flex-1 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
            <select aria-label="Weight unit" value={unit} onChange={(e) => { setUnit(e.target.value as Unit); setSubmitted(false); }} className="rounded-2xl border border-slate-300 px-3 py-3 outline-none focus:border-blue-500">
              <option value="lb">lb</option><option value="kg">kg</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="puppy-age" className="mb-2 block text-sm font-semibold">Age in months</label>
          <input id="puppy-age" type="number" min="2" max="24" step="0.5" value={ageMonths} onChange={(e) => { setAgeMonths(e.target.value); setSubmitted(false); }} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
          <p className="mt-2 text-xs text-slate-500">Designed for weaned, growing puppies. Very young or medically complex puppies need veterinary guidance.</p>
        </div>

        <div>
          <label htmlFor="food-calories" className="mb-2 block text-sm font-semibold">Calories in your puppy food</label>
          <input id="food-calories" type="number" min="1" step="1" value={foodCalories} onChange={(e) => { setFoodCalories(e.target.value); setSubmitted(false); }} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
          <p className="mt-2 text-xs text-slate-500">Look for “Calorie Content” or metabolizable energy (ME) on the package.</p>
        </div>

        <div>
          <label htmlFor="food-unit" className="mb-2 block text-sm font-semibold">Food label unit</label>
          <select id="food-unit" value={foodUnit} onChange={(e) => { setFoodUnit(e.target.value as FoodUnit); setSubmitted(false); }} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
            <option value="cup">kcal per cup</option>
            <option value="100g">kcal per 100 g</option>
          </select>
        </div>
      </div>

      <button onClick={calculateFood} className="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 md:w-auto">Calculate Feeding Amount</button>

      {submitted && !result && <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Please enter a valid weight, age, and calorie density.</p>}

      {result && (
        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50/70 p-6 md:p-8" aria-live="polite">
          <p className="text-sm font-semibold text-blue-700">Estimated starting amount</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-4xl font-bold tracking-tight text-slate-950">{result.amountLow.toFixed(amountDigits)}–{result.amountHigh.toFixed(amountDigits)} {result.amountUnit}</p>
            <span className="text-lg font-medium text-slate-500">per day</span>
          </div>
          <p className="mt-3 text-slate-600">About {Math.round(result.lowCalories)}–{Math.round(result.highCalories)} kcal/day, split into approximately {result.meals} meals.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">RER</p><p className="mt-1 text-xl font-bold text-slate-900">{Math.round(result.rer)} kcal</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Growth factor</p><p className="mt-1 text-xl font-bold text-slate-900">{result.growthFactor} × RER</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Per meal</p><p className="mt-1 text-xl font-bold text-slate-900">{result.perMealLow.toFixed(amountDigits)}–{result.perMealHigh.toFixed(amountDigits)} {foodUnit === "cup" ? "cups" : "g"}</p></div>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-600">This is a starting estimate, not a prescription. Energy needs vary between puppies. Monitor weight and body condition, include treats in total calories, and ask your veterinarian to adjust the plan for your individual puppy.</p>
        </div>
      )}
    </section>
  );
}
