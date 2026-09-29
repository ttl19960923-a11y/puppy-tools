import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "./faq-schema";
import PuppyExerciseCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Puppy Exercise Calculator | Age & Size Activity Planner",
  description: "Build an age- and size-aware puppy exercise plan with walking guidance, free play, mental enrichment, growth-plate cautions, and recovery tips.",
  alternates: { canonical: "/puppy-exercise-calculator" },
};

const faqs = [
  ["How much exercise does a puppy need?", "There is no single evidence-based daily minute target for every puppy. Appropriate exercise depends on age, breed, development, health, fitness, environment, and behavior. A useful routine mixes short age-appropriate activity, self-paced play, mental enrichment, and rest."],
  ["What is the 5-minute rule for puppy exercise?", "A commonly cited walking guideline is about five minutes per month of age, once or twice daily. For example, it suggests about 15 minutes at 3 months and 30 minutes at 6 months. Treat it as a rough structured-walk guideline, not a medical formula for total daily exercise."],
  ["How long should I walk a 3-month-old puppy?", "The commonly cited five-minute walking guideline works out to about 15 minutes for a 3-month-old puppy. That is only a starting reference: pace, breed, health, weather, surfaces, free play, training, and signs of fatigue still matter."],
  ["How much exercise does a 6-month-old puppy need?", "A 6-month-old puppy can often handle more activity than a very young puppy, but needs still vary widely. A commonly cited walking guideline suggests around 30 minutes for a structured walk, while free play, sniffing, training, and rest should be managed separately rather than added into a rigid daily quota."],
  ["Can I run with my puppy?", "Sustained running or jogging should generally wait until physical maturity. Small dogs often mature earlier, while large and giant breeds can continue skeletal development well into adolescence. Ask your veterinarian before starting strenuous endurance exercise."],
  ["Is free play exercise for a puppy?", "Yes. Safe, self-paced play is useful physical and mental activity because the puppy can change speed and stop. It is different from forced endurance exercise such as keeping pace on a long run."],
  ["Do large-breed puppies need different exercise?", "Large and giant breeds often mature later than small breeds, so their growth plates may remain developing longer. That makes it especially important to avoid repetitive high-impact or forced strenuous activity before maturity."],
  ["How do I know if my puppy has had too much exercise?", "Stop and offer rest if your puppy repeatedly sits or lies down, falls behind, becomes unusually out of breath, seems sore, limps, or has a meaningful change in movement or behavior. Persistent or concerning signs should be discussed with a veterinarian."],
];

export default function PuppyExerciseCalculatorPage() {
  return <><FAQSchema />
    <main className="min-h-screen bg-[#f8fafc] px-5 py-10 text-slate-900 md:px-6 md:py-14">
      <article className="mx-auto max-w-5xl">
        <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><span>Puppy Routine Tools</span><span className="mx-2">/</span><span className="text-slate-700">Puppy Exercise Calculator</span></nav>

        <header className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Puppy Exercise Calculator</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Build an age- and size-aware activity plan for walks, free play, training, enrichment, and recovery—without treating one minute formula as a prescription for every growing puppy.</p>
        </header>

        <section className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-6 md:p-8">
          <p className="text-sm font-semibold text-blue-700">QUICK ANSWER</p>
          <h2 className="mt-2 text-2xl font-bold">How much exercise does a puppy need?</h2>
          <p className="mt-3 leading-7 text-slate-700">Puppies need regular physical activity and mental stimulation, but the right amount depends on <strong>age, breed, body size, development, health, and the type of exercise</strong>. Favor short, age-appropriate sessions and self-paced play. Avoid pushing a growing puppy through sustained strenuous or repetitive high-impact exercise.</p>
          <a href="#exercise-planner" className="mt-5 inline-block font-semibold text-blue-700 hover:underline">Build your puppy&apos;s activity plan ↓</a>
        </section>

        <PuppyExerciseCalculator />

        <section className="mt-16">
          <p className="text-sm font-semibold text-blue-700">REFERENCE CHART</p>
          <h2 className="mt-2 text-3xl font-bold">Puppy Exercise Chart by Age</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">The table uses the commonly cited five-minutes-per-month guideline only as a reference for structured puppy walks through the younger months. It is not a target for all movement in the day.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-100"><tr><th className="p-4">Age</th><th className="p-4">Structured walk reference</th><th className="p-4">Other activity</th><th className="p-4">Main focus</th></tr></thead><tbody className="divide-y divide-slate-200">
              {[
                ["2 months", "~10 min", "Short self-paced play", "Exploration, socialization, rest"],
                ["3 months", "~15 min", "Play + sniffing + brief training", "Positive short sessions"],
                ["4 months", "~20 min", "Regular self-paced play", "Gradual activity, avoid impact"],
                ["5 months", "~25 min", "Play + enrichment", "Build consistency, keep recovery"],
                ["6 months", "~30 min", "Play + training + sniffing", "Balance activity and rest"],
                ["9 months", "Less useful as a formula", "Size- and maturity-dependent", "Progress gradually"],
                ["12 months", "Maturity matters more", "Breed- and fitness-dependent", "Check skeletal maturity"],
                ["18 months", "Adult-style progression if mature", "Gradually broaden activity", "Large/giant breeds may still vary"],
              ].map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="p-4 text-slate-700">{cell}</td>)}</tr>)}
            </tbody></table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">A walk guideline does not include every minute of free play, sniffing, training, household movement, or social activity. Stop earlier when your puppy shows fatigue.</p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">How the Puppy Exercise Planner Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 1</p><h3 className="mt-1 text-xl font-bold">Start with age</h3><p className="mt-2 leading-7 text-slate-600">Age changes what kinds of activity are appropriate and how cautiously structured exercise should be introduced.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 2</p><h3 className="mt-1 text-xl font-bold">Account for expected adult size</h3><p className="mt-2 leading-7 text-slate-600">Small dogs often mature earlier. Large and giant breeds can remain skeletally immature much longer, so the planner adds stronger high-impact cautions.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 3</p><h3 className="mt-1 text-xl font-bold">Adjust the activity pattern</h3><p className="mt-2 leading-7 text-slate-600">An energetic puppy may benefit from more frequent short sessions and mental work—not automatically a longer forced workout.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 4</p><h3 className="mt-1 text-xl font-bold">Watch the puppy, not just the clock</h3><p className="mt-2 leading-7 text-slate-600">Fatigue, soreness, reluctance, limping, and changes in movement are more important stop signals than completing a planned number of minutes.</p></div>
          </div>
        </section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Example: How Much Exercise Does a 6-Month-Old Puppy Need?</h2><div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><p className="leading-7 text-slate-600">For a healthy <strong>6-month-old large-breed puppy</strong> with typical energy, the common walking guideline points to roughly <strong>30 minutes for a structured walk</strong>. That does not mean the puppy has a 30-minute total daily exercise allowance—or that every puppy should complete a 30-minute walk.</p><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">A practical mix</h3><p className="mt-2 leading-7 text-slate-600">Comfortable leash walks, self-paced play, sniffing, short training, food puzzles or enrichment, and rest between active periods.</p></div><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">Still avoid</h3><p className="mt-2 leading-7 text-slate-600">Sustained forced running, long strenuous hikes, repetitive high jumps, and exercise that makes the puppy keep pace after it wants to stop.</p></div></div></div></section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">What About the “5-Minute Rule” for Puppies?</h2><p className="mt-4 leading-7 text-slate-600">The American Kennel Club references a guideline of about <strong>five minutes of walking per month of age, once or twice a day</strong>, depending on walking speed and circumstances. It can be a useful starting reference for younger puppies, but it should not be treated as a universal medical formula for total daily exercise. Other activity—free play, sniffing, training, socialization, and normal movement—does not fit neatly into the same calculation.</p><div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Use the rule as a ceiling? Not exactly.</strong> A puppy may need to stop earlier, and an individual activity plan may differ. Behavior, physical maturity, surfaces, weather, breed, health, and veterinary advice all matter.</div></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Walking, Free Play, and Mental Exercise Are Different</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Structured walks</h3><p className="mt-3 leading-7 text-slate-600">Leash walks can provide exercise, training, sniffing, and environmental exposure, but the puppy cannot always stop as freely as during self-directed play.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Self-paced play</h3><p className="mt-3 leading-7 text-slate-600">Safe free play lets a puppy choose speed, direction, and rest. Veterinary guidance favors this over pushing a growing puppy through strenuous forced exercise.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Mental enrichment</h3><p className="mt-3 leading-7 text-slate-600">Sniffing, short training, food puzzles, and exploration provide useful stimulation without relying only on repetitive physical workload.</p></div></div></section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">Exercise, Growth Plates, and Breed Size</h2><p className="mt-4 leading-7 text-slate-600">A puppy&apos;s bones grow through areas of developing cartilage called growth plates. VCA advises waiting until maturity before long jogs, strenuous hikes, repeated hurdles, or competitive agility because these developing structures are more vulnerable to injury. Small dogs may mature much earlier than giant breeds; some giant dogs continue growing toward 18–24 months.</p><p className="mt-4 leading-7 text-slate-600">This does <strong>not</strong> mean a growing puppy should be inactive. Walking, play, training, and exploration are valuable. The goal is age-appropriate movement without forcing repetitive high-impact endurance before the puppy is physically ready.</p></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Signs Your Puppy Has Had Enough</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">During activity</h3><p className="mt-2 leading-7 text-slate-600">Repeatedly sitting or lying down, falling behind, trying to stop, or becoming unusually out of breath are reasons to end the session and offer rest.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">After activity</h3><p className="mt-2 leading-7 text-slate-600">Limping, soreness, difficulty getting comfortable, unusual irritability, or a meaningful change in posture or movement deserves attention. Persistent or concerning signs should be checked by a veterinarian.</p></div></div></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Puppy Exercise FAQ</h2><div className="mt-8 space-y-5">{faqs.map(([q, a]) => <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-3 leading-7 text-slate-600">{a}</p></div>)}</div></section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">Sources & Methodology</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">This planner combines age, expected adult size, and activity style to organize safer activity choices. It does not convert those inputs into a false medical exercise quota. The five-minute guideline is shown only as a commonly cited structured-walk reference for younger puppies.</p><ul className="mt-6 space-y-3 text-sm leading-6"><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.akc.org/expert-advice/health/puppies-mental-physical-exercise/" target="_blank" rel="noopener noreferrer">American Kennel Club — How Much Mental and Physical Exercise Do Puppies Need? ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://vcahospitals.com/pediatric/puppy/health-wellness/puppy-exercise" target="_blank" rel="noopener noreferrer">VCA Animal Hospitals — Growth Plates and Exercise ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://vcahospitals.com/know-your-pet/dog-behavior-and-training---play-and-exercise" target="_blank" rel="noopener noreferrer">VCA Animal Hospitals — Dog Behavior and Training: Play and Exercise ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://vcahospitals.com/pediatric/puppy/health-wellness/exercise-guidelines-for-puppies" target="_blank" rel="noopener noreferrer">VCA Animal Hospitals — Exercise Guidelines for Puppies ↗</a></li></ul><p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500"><strong className="text-slate-700">Last reviewed:</strong> September 2026 · Educational use only; not veterinary diagnosis or an individualized exercise prescription.</p></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Related Puppy Tools</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/puppy-sleep-schedule-by-age" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Sleep Schedule by Age</span><p className="mt-1 text-sm text-slate-500">Balance active periods with naps and recovery.</p></Link><Link href="/puppy-age-chart" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Age Chart</span><p className="mt-1 text-sm text-slate-500">Understand puppy development stages by age.</p></Link><Link href="/puppy-growth-chart" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Growth Chart</span><p className="mt-1 text-sm text-slate-500">Compare growth patterns and projected adult size.</p></Link><Link href="/puppy-feeding-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Feeding Calculator</span><p className="mt-1 text-sm text-slate-500">Estimate daily food from weight, age, and food calories.</p></Link></div></section>
      </article>
    </main>
  </>;
}
