"use client";

import { useMemo, useState } from "react";

type AgeKey = "2" | "3" | "4" | "5" | "6" | "9" | "12" | "18";
type SizeKey = "small" | "medium" | "large" | "giant";
type EnergyKey = "low" | "typical" | "high";

const ages: Record<AgeKey, { label: string; walkGuide: string; focus: string }> = {
  "2": { label: "2 months", walkGuide: "about 10 minutes", focus: "Very short outings, gentle exploration, play, and socialization" },
  "3": { label: "3 months", walkGuide: "about 15 minutes", focus: "Short walks, self-paced play, sniffing, and brief training" },
  "4": { label: "4 months", walkGuide: "about 20 minutes", focus: "Short-to-moderate walks with regular rest and free play" },
  "5": { label: "5 months", walkGuide: "about 25 minutes", focus: "Gradually longer walks while keeping activity varied and low-impact" },
  "6": { label: "6 months", walkGuide: "about 30 minutes", focus: "Moderate structured walks plus self-paced play and enrichment" },
  "9": { label: "9 months", walkGuide: "age guideline becomes less useful", focus: "Build duration gradually according to size, maturity, fitness, and behavior" },
  "12": { label: "12 months", walkGuide: "maturity matters more than a month-based rule", focus: "Adjust activity to skeletal maturity, size, breed, and conditioning" },
  "18": { label: "18 months", walkGuide: "use adult-style progression only if physically mature", focus: "Increase more demanding activity gradually after maturity and veterinary clearance when appropriate" },
};

const sizes: Record<SizeKey, { label: string; maturity: string; note: string }> = {
  small: { label: "Small", maturity: "often earlier than larger breeds", note: "Small dogs often mature earlier, but individual structure and health still matter." },
  medium: { label: "Medium", maturity: "often around the first year", note: "Medium dogs may be nearing maturity around the first year, but there is individual variation." },
  large: { label: "Large", maturity: "often later, around 12–18 months", note: "Large-breed puppies can still be developing well into adolescence, so delay sustained high-impact exercise." },
  giant: { label: "Giant", maturity: "can extend toward 18–24 months", note: "Giant-breed puppies may have a long skeletal-development period and need extra caution with forced running, jumping, and repetitive impact." },
};

const energies: Record<EnergyKey, { label: string; note: string }> = {
  low: { label: "Low-key", note: "Favor comfortable, shorter sessions and enrichment without pushing pace or duration." },
  typical: { label: "Typical", note: "Use a balanced mix of walks, self-paced play, sniffing, training, and rest." },
  high: { label: "Very energetic", note: "Channel extra energy into more frequent short sessions and mental enrichment rather than simply making one workout longer or harder." },
};

export default function PuppyExerciseCalculator() {
  const [age, setAge] = useState<AgeKey>("6");
  const [size, setSize] = useState<SizeKey>("large");
  const [energy, setEnergy] = useState<EnergyKey>("typical");
  const [showResult, setShowResult] = useState(true);

  const result = useMemo(() => {
    const ageData = ages[age];
    const sizeData = sizes[size];
    const energyData = energies[energy];
    const young = Number(age) <= 6;
    return { ageData, sizeData, energyData, young };
  }, [age, size, energy]);

  return (
    <section id="exercise-planner" className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h2 className="text-3xl font-bold">Build a Puppy Exercise Plan</h2>
          <p className="mt-3 leading-7 text-slate-600">Choose age, expected adult size, and activity style to get an age-appropriate mix of walks, free play, mental enrichment, and recovery.</p>
        </div>
        <p className="text-sm leading-6 text-slate-500">This planner does not prescribe a medical exercise quota. Growing puppies vary by breed, development, health, fitness, and environment.</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div><label className="mb-2 block text-sm font-semibold">Puppy age</label><select value={age} onChange={(e) => setAge(e.target.value as AgeKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">{Object.entries(ages).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></div>
        <div><label className="mb-2 block text-sm font-semibold">Expected adult size</label><select value={size} onChange={(e) => setSize(e.target.value as SizeKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">{Object.entries(sizes).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></div>
        <div><label className="mb-2 block text-sm font-semibold">Activity style</label><select value={energy} onChange={(e) => setEnergy(e.target.value as EnergyKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">{Object.entries(energies).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></div>
      </div>

      <button onClick={() => setShowResult(true)} className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">Build My Puppy&apos;s Exercise Plan</button>

      {showResult && <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50/70 p-6 md:p-7">
        <p className="text-sm font-semibold text-blue-700">SUGGESTED PLAN FOR {result.ageData.label.toUpperCase()} · {result.sizeData.label.toUpperCase()}</p>
        <h3 className="mt-2 text-3xl font-bold">{result.ageData.focus}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{result.energyData.note} {result.sizeData.note}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">STRUCTURED WALKS</p><p className="mt-2 font-bold">{result.young ? result.ageData.walkGuide : "Build gradually"}</p><p className="mt-2 text-sm leading-6 text-slate-600">{result.young ? "A commonly cited age-based walking guideline—not a total daily exercise prescription." : "At this stage, maturity, fitness, body structure, and breed size are more useful than a simple month-based formula."}</p></div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">FREE PLAY</p><p className="mt-2 font-bold">Self-paced opportunities</p><p className="mt-2 text-sm leading-6 text-slate-600">Let your puppy choose speed and stop when tired in a safe environment. Free play is not the same as forced endurance exercise.</p></div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">MENTAL EXERCISE</p><p className="mt-2 font-bold">Short sessions daily</p><p className="mt-2 text-sm leading-6 text-slate-600">Sniffing, simple training, food puzzles, and age-appropriate exploration can use energy without adding repetitive joint impact.</p></div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">RECOVERY</p><p className="mt-2 font-bold">Rest between sessions</p><p className="mt-2 text-sm leading-6 text-slate-600">Stop and offer rest if your puppy repeatedly sits or lies down, falls behind, seems sore, or shows an unusual change in movement.</p></div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Growth-plate caution:</strong> Avoid sustained forced running, long strenuous hikes, repetitive high jumping, and other high-impact exercise before physical maturity. For {result.sizeData.label.toLowerCase()} dogs, maturity is {result.sizeData.maturity}.</div>
      </div>}
    </section>
  );
}
