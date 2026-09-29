import type { Metadata } from "next";
import Link from "next/link";
import PuppyCalorieCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Calorie Calculator | Daily kcal by Weight & Age",
  description: "Estimate your puppy's daily calorie needs using current weight and age. See the RER formula, growth factors, example calculations, treat guidance, and how to convert kcal into cups or grams.",
  alternates: { canonical: "/puppy-calorie-calculator" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://puppy-tools.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Feeding Tools", item: "https://puppy-tools.vercel.app/#feeding-tools" },
    { "@type": "ListItem", position: 3, name: "Puppy Calorie Calculator", item: "https://puppy-tools.vercel.app/puppy-calorie-calculator" },
  ],
};

const calorieRows = [
  { weight: "5 lb (2.3 kg)", rer: "131", under4: "393", over4: "262" },
  { weight: "10 lb (4.5 kg)", rer: "216", under4: "648", over4: "432" },
  { weight: "20 lb (9.1 kg)", rer: "367", under4: "1,101", over4: "734" },
  { weight: "40 lb (18.1 kg)", rer: "616", under4: "1,848", over4: "1,232" },
];

const faqs = [
  ["How many calories should a puppy eat per day?", "A common veterinary starting method calculates RER from current body weight, then applies a growth factor. Healthy puppies under 4 months are often estimated at about 3 × RER, while puppies 4 months and older are often estimated at about 2 × RER. Individual needs can vary substantially."],
  ["What is RER for a puppy?", "RER means resting energy requirement. The exponential formula used here is RER = 70 × body weight (kg)^0.75. A growth-stage factor is then applied to estimate daily energy needs."],
  ["Do puppies need more calories than adult dogs?", "Generally, yes relative to body size. Puppies need energy for growth as well as normal maintenance and activity, which is why growth-stage factors are higher than typical adult maintenance factors."],
  ["How do I convert puppy calories into cups or grams?", "Use the calorie density on your food label. Divide kcal/day by kcal/cup for cups, or use kcal per 100 g to calculate grams. Our Puppy Feeding Calculator does this conversion for you."],
  ["Should treats count toward my puppy's daily calories?", "Yes. Treats and other calorie-containing extras count toward total intake. A useful guideline is to keep complete and balanced food at about 90% or more of total calories, leaving about 10% or less for treats and extras."],
  ["Should I reduce calories if my puppy looks overweight?", "Do not use an aggressive automatic calorie cut for a growing puppy. Review body condition, growth rate, treats, diet, and portions with your veterinarian so growth remains appropriate."],
  ["Do large-breed puppies need a different calorie formula?", "The same RER and growth-factor framework can be used as a starting point, but large and giant breeds need particular attention to controlled growth, lean body condition, and an appropriate complete and balanced large-breed growth diet."],
  ["How often should I recalculate puppy calories?", "Recalculate as your puppy gains weight and crosses growth stages, and reassess whenever body condition, activity, health, or diet changes. The number should evolve with your puppy."],
];

export default function PuppyCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-[#f8fafc] px-5 py-10 text-slate-900 md:px-6 md:py-14">
        <article className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span><span>Feeding Tools</span><span className="mx-2">/</span><span className="text-slate-700">Puppy Calorie Calculator</span></nav>

          <header className="mt-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Puppy Calorie Calculator</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Estimate your puppy&apos;s daily energy needs in kcal from current weight and age. See the RER calculation, puppy growth factor, practical starting range, and how to turn calories into an actual feeding amount.</p>
          </header>

          <section className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Quick answer</p>
            <h2 className="mt-2 text-2xl font-bold">How many calories does my puppy need?</h2>
            <p className="mt-3 leading-7 text-slate-700">A common veterinary starting method calculates resting energy requirement (RER) as <strong>70 × body weight (kg)<sup>0.75</sup></strong>, then applies a growth factor. Healthy puppies under 4 months are commonly estimated at about <strong>3 × RER</strong>; from 4 months onward, about <strong>2 × RER</strong> is a common starting estimate. The result is not a prescription—individual needs vary and should be adjusted to growth and body condition.</p>
            <a href="#calculator" className="mt-5 inline-block font-semibold text-blue-700 hover:underline">Calculate daily calories ↓</a>
          </section>

          <PuppyCalorieCalculator />

          <section className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Reference chart</p>
            <h2 className="mt-2 text-3xl font-bold">Puppy Calorie Chart by Weight and Age</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">These are central formula estimates, not universal feeding targets. They use RER = 70 × kg<sup>0.75</sup>, then 3 × RER under 4 months or 2 × RER at 4 months and older.</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-100"><tr><th className="p-4">Current weight</th><th className="p-4">RER</th><th className="p-4">Under 4 months<br/><span className="font-normal text-slate-500">3 × RER</span></th><th className="p-4">4+ months<br/><span className="font-normal text-slate-500">2 × RER</span></th></tr></thead><tbody>{calorieRows.map((row) => <tr key={row.weight} className="border-t border-slate-200"><td className="p-4 font-medium">{row.weight}</td><td className="p-4">{row.rer} kcal</td><td className="p-4">{row.under4} kcal/day</td><td className="p-4">{row.over4} kcal/day</td></tr>)}</tbody></table>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">Veterinary references emphasize that calculated energy needs are starting points. Puppies of the same weight can still need different amounts.</p>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Methodology</p><h2 className="mt-2 text-3xl font-bold">How the Puppy Calorie Calculator Works</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 1</p><h3 className="mt-1 text-xl font-bold">Convert weight to kilograms</h3><p className="mt-2 leading-7 text-slate-600">Pounds are converted to kilograms because the RER formula uses body weight in kg.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 2</p><h3 className="mt-1 text-xl font-bold">Calculate RER</h3><p className="mt-2 leading-7 text-slate-600">RER = 70 × body weight (kg)<sup>0.75</sup>. This estimates baseline energy expenditure.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 3</p><h3 className="mt-1 text-xl font-bold">Apply the growth factor</h3><p className="mt-2 leading-7 text-slate-600">The calculator uses 3 × RER under 4 months and 2 × RER from 4 months onward as general healthy-puppy starting factors.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 4</p><h3 className="mt-1 text-xl font-bold">Monitor the puppy, not just the number</h3><p className="mt-2 leading-7 text-slate-600">Weight trend, body condition, diet, treats, health, environment, and individual metabolism determine whether the estimate needs adjustment.</p></div>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Why no breed-size or activity multiplier?</strong> Those factors can matter in real life, but this calculator avoids inventing extra multipliers that imply more precision than the evidence supports. Use the formula as a starting estimate and adjust from observed growth and body condition.</div>
          </section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Example: Calories for a 4-Month-Old, 15 lb Puppy</h2><div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><p className="leading-7 text-slate-600">A 15 lb puppy weighs about 6.8 kg. At 4 months, this calculator uses the 2 × RER growth factor:</p><ol className="mt-5 space-y-3 text-slate-700"><li><strong>1.</strong> RER ≈ 70 × 6.8<sup>0.75</sup> ≈ <strong>294 kcal/day</strong>.</li><li><strong>2.</strong> Growth estimate ≈ 2 × 294 = <strong>588 kcal/day</strong>.</li><li><strong>3.</strong> A practical ±10% starting range is about <strong>529–647 kcal/day</strong>.</li><li><strong>4.</strong> If treats are used, roughly 10% or less of total calories—about <strong>59 kcal</strong> in this example—is a useful ceiling, leaving most calories for complete and balanced puppy food.</li></ol></div></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">What Does RER Mean?</h2><p className="mt-4 leading-8 text-slate-600">RER stands for <strong>resting energy requirement</strong>. It estimates energy needs for a healthy animal at rest in a thermoneutral environment and provides a baseline for life-stage calculations. Puppies then receive a higher life-stage factor because growth requires additional energy. RER is useful because calorie needs are not a simple linear function of body weight.</p></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">How Puppy Calorie Needs Change With Age</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Under 4 months</h3><p className="mt-3 leading-7 text-slate-600">Early growth is energy intensive. The general starting factor used here is 3 × RER.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">4 months onward</h3><p className="mt-3 leading-7 text-slate-600">The general starting factor drops to 2 × RER as the puppy moves beyond the earliest growth stage.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Approaching maturity</h3><p className="mt-3 leading-7 text-slate-600">Small and medium dogs often mature sooner than large and giant breeds. Reassess the life stage rather than using a puppy factor indefinitely.</p></div></div></section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">Calories Are Not Cups or Grams</h2><p className="mt-4 leading-7 text-slate-600">Two puppy foods can contain very different calories per cup or per 100 g. A puppy that needs 600 kcal/day might require 1.5 cups of a 400-kcal/cup food, but 2 cups of a 300-kcal/cup food. That is why calorie need and serving amount are separate questions.</p><Link href="/puppy-feeding-calculator" className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">Convert kcal to cups or grams</Link></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Body Condition Matters More Than False Precision</h2><p className="mt-4 leading-8 text-slate-600">Calculated calories should be compared with what happens to the puppy over time. A lean, steadily growing puppy may be doing well even if actual intake differs from the calculator. If a puppy is becoming too thin or accumulating excess body fat, review total intake, treats, growth rate, diet adequacy, and health rather than automatically applying a large percentage adjustment.</p><div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950"><strong>Large and giant breeds:</strong> controlled growth and lean body condition are particularly important. They should receive a complete and balanced growth diet appropriate for large-size dogs through skeletal development.</div></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Do Treats Count Toward Puppy Calories?</h2><p className="mt-4 leading-8 text-slate-600">Yes. Treats, snacks, chews, toppers, and other calorie-containing extras contribute to daily intake. AAHA guidance recommends that the main complete and balanced diet provide at least about 90% of total calories, with treats and other extras making up about 10% or less. The calculator shows a 10% reference amount so it is easier to keep extras in perspective.</p></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">When Should You Recalculate?</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-5">After meaningful weight gain or a new weigh-in</div><div className="rounded-2xl border border-slate-200 bg-white p-5">When crossing the 4-month growth-factor boundary</div><div className="rounded-2xl border border-slate-200 bg-white p-5">When body condition is trending too thin or too heavy</div><div className="rounded-2xl border border-slate-200 bg-white p-5">After a major diet, activity, environment, or health change</div></div></section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">When to Ask Your Veterinarian</h2><p className="mt-4 leading-7 text-slate-600">Get individualized advice if your puppy is failing to gain weight, gaining excessive body fat, has persistent vomiting or diarrhea, has a medical condition, is recovering from illness, or needs a therapeutic diet. Very young neonatal puppies also have different nutritional requirements and are outside the scope of this calculator.</p></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Puppy Calorie FAQ</h2><div className="mt-8 space-y-4">{faqs.map(([q,a]) => <details key={q} className="rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-slate-600">{a}</p></details>)}</div></section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Sources & methodology</p><h2 className="mt-2 text-3xl font-bold">Where These Calorie Estimates Come From</h2><p className="mt-4 leading-7 text-slate-600">The calculator uses the exponential RER formula and puppy growth-stage factors published in veterinary nutrition references. The displayed range is intentionally presented as a starting range because energy needs vary among individual dogs.</p><ul className="mt-6 space-y-3 text-sm leading-6"><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-of-small-animals" target="_blank" rel="noopener noreferrer">Merck Veterinary Manual — Nutritional Requirements of Small Animals ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/" target="_blank" rel="noopener noreferrer">AAHA — Nutrition and Weight Management energy calculations ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/feeding-plans-for-healthy-appropriate-weight-cats-and-dogs/" target="_blank" rel="noopener noreferrer">AAHA — Feeding Plans for Healthy, Appropriate Weight Cats and Dogs ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://wsava.org/Global-Guidelines/Global-Nutrition-Guidelines/" target="_blank" rel="noopener noreferrer">WSAVA — Global Nutrition Guidelines & Toolkit ↗</a></li></ul><p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500"><strong className="text-slate-700">Last reviewed:</strong> September 2026 · Educational use only; not veterinary diagnosis or an individualized feeding prescription.</p></section>

          
          <section className="mt-16"><p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Learn more</p><h2 className="mt-2 text-3xl font-bold">Related Puppy Nutrition Guides</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/how-many-calories-does-a-puppy-need" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">How Many Calories Does a Puppy Need?</span><p className="mt-1 text-sm text-slate-500">Understand RER, growth factors, and why calorie needs change with age.</p></Link><Link href="/how-much-should-a-puppy-eat" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">How Much Should a Puppy Eat?</span><p className="mt-1 text-sm text-slate-500">Connect calorie needs with the calorie density of the food you feed.</p></Link><Link href="/puppy-body-condition-guide" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Body Condition Guide</span><p className="mt-1 text-sm text-slate-500">Use body condition and growth trends to judge whether an estimate needs adjustment.</p></Link></div></section>

<section className="mt-16"><h2 className="text-3xl font-bold">Related Puppy Tools</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/puppy-feeding-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Feeding Calculator</span><p className="mt-1 text-sm text-slate-500">Convert calorie needs into cups or grams using your food label.</p></Link><Link href="/puppy-calorie-calculator-by-age" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Calories by Age</span><p className="mt-1 text-sm text-slate-500">Explore age-focused puppy calorie estimates.</p></Link><Link href="/puppy-growth-chart" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Growth Chart</span><p className="mt-1 text-sm text-slate-500">Understand growth stage and maturity patterns.</p></Link><Link href="/puppy-weight-predictor" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Weight Predictor</span><p className="mt-1 text-sm text-slate-500">Estimate future adult weight separately from calorie needs.</p></Link></div></section>
        </article>
      </main>
    </>
  );
}
