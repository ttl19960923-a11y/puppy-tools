import type { Metadata } from "next";
import Link from "next/link";
import PuppyFeedingCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Feeding Calculator | Food by Weight & Age",
  description: "Estimate your puppy's daily calories and food amount using weight, age, and the calorie density on your puppy food label. Includes formula, example, feeding schedule, and sources.",
  alternates: { canonical: "/puppy-feeding-calculator" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://puppy-tools.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Feeding Tools", item: "https://puppy-tools.vercel.app/#feeding-tools" },
    { "@type": "ListItem", position: 3, name: "Puppy Feeding Calculator", item: "https://puppy-tools.vercel.app/puppy-feeding-calculator" },
  ],
};

const exampleRows = [
  { weight: "5 lb (2.3 kg)", under4: "~87–107 g", over4: "~58–71 g" },
  { weight: "10 lb (4.5 kg)", under4: "~147–179 g", over4: "~98–120 g" },
  { weight: "20 lb (9.1 kg)", under4: "~247–302 g", over4: "~165–201 g" },
  { weight: "40 lb (18.1 kg)", under4: "~415–508 g", over4: "~277–338 g" },
];

export default function PuppyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-[#f8fafc] px-5 py-10 text-slate-900 md:px-6 md:py-14">
        <article className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span><span>Feeding Tools</span><span className="mx-2">/</span><span className="text-slate-700">Puppy Feeding Calculator</span>
          </nav>

          <header className="mt-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Puppy Feeding Calculator</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Estimate how much food your puppy may need each day from current weight, age, and the calorie density of the food you actually feed. Get daily calories, food amount, and a practical meal split.</p>
          </header>

          <section className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Quick answer</p>
            <h2 className="mt-2 text-2xl font-bold">How much should I feed my puppy?</h2>
            <p className="mt-3 leading-7 text-slate-700">Start with your puppy&apos;s energy requirement rather than a one-size-fits-all number of cups. A common veterinary method calculates resting energy requirement (RER) from body weight, applies a growth factor, then converts daily calories into food using the calorie density printed on the package. Because puppies differ, the result is a starting point that should be adjusted to growth and body condition.</p>
            <a href="#calculator" className="mt-5 inline-block font-semibold text-blue-700 hover:underline">Calculate your puppy&apos;s amount ↓</a>
          </section>

          <PuppyFeedingCalculator />

          <section className="mt-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Reference chart</p>
              <h2 className="mt-2 text-3xl font-bold">Puppy Feeding Chart by Weight and Age</h2>
              <p className="mt-4 leading-7 text-slate-600">The table below is an example, not a universal feeding chart. It uses the same RER method as the calculator and assumes a food containing <strong>400 kcal per 100 g</strong>. Use the calculator above with your food label for a more relevant estimate.</p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-slate-100"><tr><th className="p-4 font-semibold">Current weight</th><th className="p-4 font-semibold">Under 4 months<br/><span className="font-normal text-slate-500">3 × RER</span></th><th className="p-4 font-semibold">4+ months<br/><span className="font-normal text-slate-500">2 × RER</span></th></tr></thead>
                <tbody>{exampleRows.map((row) => <tr key={row.weight} className="border-t border-slate-200"><td className="p-4 font-medium">{row.weight}</td><td className="p-4">{row.under4}/day</td><td className="p-4">{row.over4}/day</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">Actual requirements can be higher or lower. Treats, growth rate, body condition, health, environment, and the specific diet all matter.</p>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Methodology</p>
            <h2 className="mt-2 text-3xl font-bold">How the Puppy Feeding Calculator Works</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 1</p><h3 className="mt-1 text-xl font-bold">Convert weight to kilograms</h3><p className="mt-2 leading-7 text-slate-600">If you enter pounds, the calculator converts the weight to kilograms before calculating energy needs.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 2</p><h3 className="mt-1 text-xl font-bold">Calculate RER</h3><p className="mt-2 leading-7 text-slate-600">RER = 70 × body weight (kg)<sup>0.75</sup>. This exponential formula can be used across body weights.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 3</p><h3 className="mt-1 text-xl font-bold">Apply a puppy growth factor</h3><p className="mt-2 leading-7 text-slate-600">For a simple starting estimate, the calculator uses 3 × RER for puppies under 4 months and 2 × RER from 4 months onward.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 4</p><h3 className="mt-1 text-xl font-bold">Convert calories into food</h3><p className="mt-2 leading-7 text-slate-600">Daily food amount = estimated daily calories ÷ the calorie density of your food. That is why the calculator asks for kcal per cup or kcal per 100 g.</p></div>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Important:</strong> Veterinary references describe calorie calculations as starting estimates. Individual puppies can differ substantially, so monitor body weight and body condition rather than treating the calculated number as a fixed prescription.</div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Example: How Much Should a 4-Month-Old, 15 lb Puppy Eat?</h2>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <p className="leading-7 text-slate-600">Suppose a puppy weighs <strong>15 lb (about 6.8 kg)</strong> and has just reached 4 months. Using the simple 2 × RER growth estimate:</p>
              <ol className="mt-5 space-y-3 text-slate-700">
                <li><strong>1.</strong> RER ≈ 70 × 6.8<sup>0.75</sup> ≈ 294 kcal/day.</li>
                <li><strong>2.</strong> Growth estimate ≈ 2 × 294 = <strong>588 kcal/day</strong>.</li>
                <li><strong>3.</strong> If the food contains 400 kcal/cup, 588 ÷ 400 ≈ <strong>1.47 cups/day</strong>.</li>
                <li><strong>4.</strong> Split across three meals, that is roughly <strong>0.49 cup per meal</strong>.</li>
              </ol>
              <p className="mt-5 text-sm leading-6 text-slate-500">The calculator displays a range around the estimate to reinforce that this is a starting point, not an exact prescription.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">How Feeding Changes as Puppies Grow</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Young puppies</h3><p className="mt-3 leading-7 text-slate-600">Growth is rapid and energy needs relative to body size are high. From weaning to 6 months, a general feeding practice is three meals per day.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">6–12 months</h3><p className="mt-3 leading-7 text-slate-600">Growth begins to slow. Merck gives two meals per day as a general recommendation for puppies from 6 to 12 months.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Large & giant breeds</h3><p className="mt-3 leading-7 text-slate-600">They can take longer to reach skeletal maturity and should receive a complete and balanced growth diet appropriate for large-size dogs.</p></div>
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-3xl font-bold">When Should You Adjust the Feeding Amount?</h2>
            <p className="mt-4 leading-7 text-slate-600">Use the calculated amount as a starting point and watch what happens over time. Recheck the plan if your puppy is gaining weight too quickly, becoming too lean, has a major change in activity, receives many treats, changes foods, or is not following an expected growth pattern. A veterinarian can assess body condition and growth and help individualize calories.</p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Feeding FAQ</h2>
            <div className="mt-8 space-y-5">
              {[
                ["How much should I feed my puppy each day?", "Estimate daily calories from current weight and growth stage, then convert those calories using the calorie density on your puppy food label. The calculator above does both steps. Monitor growth and body condition and adjust with your veterinarian."],
                ["How many times a day should a puppy eat?", "Merck Veterinary Manual gives a general recommendation of three meals per day from weaning to 6 months and two meals per day from 6 to 12 months. Some small-breed puppies may need more frequent meals."],
                ["Should I measure puppy food by cups, grams, or calories?", "Calories connect your puppy's estimated energy requirement to a specific food. For portioning, grams can be more repeatable than cups when your food provides calorie information by weight."],
                ["Why does the calculator ask for calories per cup or per 100 grams?", "Food energy density varies. Two foods can provide very different calories in the same cup or weight, so using the number from your actual package is more useful than assuming all dry or wet foods are alike."],
                ["Is this calculator a substitute for a veterinarian?", "No. It is an educational starting estimate for healthy growing puppies. Puppies with medical conditions, poor body condition, unusual growth, or special nutritional needs should have an individualized plan from a veterinarian."],
              ].map(([q, a]) => <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-3 leading-7 text-slate-600">{a}</p></div>)}
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-3xl font-bold">Sources & Methodology</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">The calculator uses the RER equation and puppy growth factors described in veterinary nutrition references. These values are starting points; energy needs vary between individual animals.</p>
            <ul className="mt-6 space-y-3 text-sm leading-6">
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-of-small-animals" target="_blank" rel="noopener noreferrer">Merck Veterinary Manual — Nutritional Requirements of Small Animals ↗</a></li>
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/feeding-practices-in-small-animals" target="_blank" rel="noopener noreferrer">Merck Veterinary Manual — Feeding Practices in Small Animals ↗</a></li>
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/" target="_blank" rel="noopener noreferrer">AAHA — Nutrition and Weight Management energy formulas ↗</a></li>
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://wsava.org/Global-Guidelines/Global-Nutrition-Guidelines/" target="_blank" rel="noopener noreferrer">WSAVA — Global Nutrition Guidelines & Toolkit ↗</a></li>
            </ul>
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500"><strong className="text-slate-700">Last reviewed:</strong> September 2026 · Educational use only; not veterinary diagnosis or individualized medical advice.</p>
          </section>

          
          <section className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Learn more</p>
            <h2 className="mt-2 text-3xl font-bold">Related Puppy Feeding Guides</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link href="/how-much-should-a-puppy-eat" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">How Much Should a Puppy Eat?</span><p className="mt-1 text-sm text-slate-500">Learn how calories, food density, age, and body condition work together.</p></Link>
              <Link href="/puppy-feeding-guide-by-age" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Feeding Guide by Age</span><p className="mt-1 text-sm text-slate-500">See how feeding priorities change from early puppyhood toward maturity.</p></Link>
              <Link href="/how-often-should-a-puppy-eat" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">How Often Should a Puppy Eat?</span><p className="mt-1 text-sm text-slate-500">Plan meal frequency and a practical daily feeding rhythm.</p></Link>
              <Link href="/when-to-switch-from-puppy-to-adult-food" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">When to Switch to Adult Dog Food</span><p className="mt-1 text-sm text-slate-500">Understand why transition timing varies with growth and breed size.</p></Link>
            </div>
          </section>

<section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Calculators</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link href="/puppy-calorie-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Calorie Calculator</span><p className="mt-1 text-sm text-slate-500">Estimate daily puppy calorie needs.</p></Link>
              <Link href="/puppy-weight-predictor" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Weight Predictor</span><p className="mt-1 text-sm text-slate-500">Estimate your puppy’s adult weight.</p></Link>
              <Link href="/puppy-growth-chart" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Growth Chart</span><p className="mt-1 text-sm text-slate-500">Compare growth patterns by age.</p></Link>
              <Link href="/puppy-water-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Water Calculator</span><p className="mt-1 text-sm text-slate-500">Estimate daily water needs.</p></Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
