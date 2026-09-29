"use client";

import { useMemo, useState } from "react";

type AgeKey = "2" | "3" | "4" | "5" | "6" | "9" | "12" | "15" | "18" | "24";
type SizeKey = "small" | "medium" | "large" | "giant";
type UnitKey = "lb" | "kg";

const ages: Record<AgeKey, { label: string; phase: string; note: string }> = {
  "2": { label: "2 months", phase: "Early rapid growth", note: "Growth is fast and frequent weight checks are especially useful." },
  "3": { label: "3 months", phase: "Rapid growth", note: "Puppies are still in a fast-growing period and body proportions can change quickly." },
  "4": { label: "4 months", phase: "Rapid growth", note: "Weight and height are still changing quickly, especially in larger puppies." },
  "5": { label: "5 months", phase: "Active growth", note: "Growth remains active, although the rate will begin slowing as adolescence approaches." },
  "6": { label: "6 months", phase: "Growth beginning to slow", note: "Growth commonly starts to plateau after the first several months, but maturity timing varies greatly by size." },
  "9": { label: "9 months", phase: "Adolescent growth", note: "Many small dogs are near mature size, while medium, large, and giant dogs may still have meaningful growth ahead." },
  "12": { label: "12 months", phase: "Maturity depends on size", note: "Small and many medium dogs may be mature or close to it; larger dogs often continue developing." },
  "15": { label: "15 months", phase: "Late growth for larger dogs", note: "Large and giant dogs may still be completing skeletal growth and filling out." },
  "18": { label: "18 months", phase: "Near mature for many large dogs", note: "Many large dogs are near maturity, while some giant breeds can continue developing longer." },
  "24": { label: "24 months", phase: "Adult-size stage for most dogs", note: "By this age most dogs have completed major skeletal growth, though individual development still varies." },
};

const sizes: Record<SizeKey, { label: string; maturity: string; summary: string }> = {
  small: { label: "Small", maturity: "roughly 6–12 months", summary: "Small dogs usually reach mature body size earlier than larger dogs." },
  medium: { label: "Medium", maturity: "roughly 9–12 months", summary: "Medium dogs commonly approach mature size around the first year." },
  large: { label: "Large", maturity: "roughly 12–18 months", summary: "Large dogs often continue skeletal development beyond their first birthday." },
  giant: { label: "Giant", maturity: "roughly 18–24 months", summary: "Giant dogs can have the longest growth period and may continue developing toward two years." },
};

export default function PuppyGrowthChartCalculator() {
  const [age, setAge] = useState<AgeKey>("6");
  const [weight, setWeight] = useState("25");
  const [unit, setUnit] = useState<UnitKey>("lb");
  const [size, setSize] = useState<SizeKey>("medium");
  const [showResult, setShowResult] = useState(true);

  const result = useMemo(() => {
    const ageData = ages[age];
    const sizeData = sizes[size];
    const ageMonths = Number(age);

    let phase = ageData.phase;
    let note = ageData.note;

    if ((size === "small" && ageMonths >= 12) || (size === "medium" && ageMonths >= 15)) {
      phase = "Adult / mature stage";
      note = `${sizeData.label} dogs are commonly at or beyond their typical maturity window by this age, although body composition and individual development can still change.`;
    } else if (size === "large" && ageMonths >= 15 && ageMonths < 18) {
      phase = "Late growth";
      note = "Large dogs may still be completing skeletal development and filling out at this age.";
    } else if (size === "giant" && ageMonths >= 15 && ageMonths < 24) {
      phase = "Late development / still maturing";
      note = "Giant dogs can continue skeletal development and filling out well into the second year.";
    }

    return { ageData: { ...ageData, phase, note }, sizeData };
  }, [age, size]);
  const validWeight = Number(weight) > 0;

  return (
    <section id="growth-planner" className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h2 className="text-3xl font-bold">Check Your Puppy&apos;s Growth Stage</h2>
          <p className="mt-3 leading-7 text-slate-600">Enter age, current weight, and expected adult size to put today&apos;s measurement in developmental context and see when dogs in that size group commonly approach maturity.</p>
        </div>
        <p className="text-sm leading-6 text-slate-500">This tool does not calculate an exact adult weight from a single measurement. Genetics, breed, sex, nutrition, health, and individual growth curves all affect final size.</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div><label className="mb-2 block text-sm font-semibold">Puppy age</label><select value={age} onChange={(e) => setAge(e.target.value as AgeKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">{Object.entries(ages).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></div>
        <div><label className="mb-2 block text-sm font-semibold">Current weight</label><input type="number" min="0.1" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500" /></div>
        <div><label className="mb-2 block text-sm font-semibold">Weight unit</label><select value={unit} onChange={(e) => setUnit(e.target.value as UnitKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"><option value="lb">lb</option><option value="kg">kg</option></select></div>
        <div><label className="mb-2 block text-sm font-semibold">Expected adult size</label><select value={size} onChange={(e) => setSize(e.target.value as SizeKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">{Object.entries(sizes).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></div>
      </div>

      <button onClick={() => setShowResult(validWeight)} className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">Check My Puppy&apos;s Growth</button>
      {!validWeight && <p className="mt-3 text-sm font-medium text-red-600">Enter a current weight greater than 0.</p>}

      {showResult && validWeight && <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50/70 p-6 md:p-7">
        <p className="text-sm font-semibold text-blue-700">GROWTH SNAPSHOT · {result.ageData.label.toUpperCase()} · {result.sizeData.label.toUpperCase()}</p>
        <h3 className="mt-2 text-3xl font-bold">{result.ageData.phase}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-slate-700">At <strong>{weight} {unit}</strong>, today&apos;s weight is most useful as a point on your puppy&apos;s ongoing growth curve—not as a stand-alone adult-weight prediction. {result.ageData.note}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">CURRENT MEASUREMENT</p><p className="mt-2 text-2xl font-bold">{weight} {unit}</p><p className="mt-2 text-sm leading-6 text-slate-600">Record this with the date so future measurements can show the direction and pace of growth.</p></div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">TYPICAL MATURITY WINDOW</p><p className="mt-2 text-xl font-bold">{result.sizeData.maturity}</p><p className="mt-2 text-sm leading-6 text-slate-600">{result.sizeData.summary} Breed and individual variation can shift this window.</p></div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">BEST NEXT CHECK</p><p className="mt-2 text-xl font-bold">Track the trend</p><p className="mt-2 text-sm leading-6 text-slate-600">Compare repeat weights and body condition over time. A veterinarian can interpret an unusual growth pattern in context.</p></div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Want an adult-weight estimate?</strong> Use the <a href="/puppy-weight-predictor" className="font-semibold underline">Puppy Weight Predictor</a>. This Growth Chart intentionally focuses on developmental stage and growth tracking rather than pretending one measurement can precisely predict final weight.</div>
      </div>}
    </section>
  );
}
