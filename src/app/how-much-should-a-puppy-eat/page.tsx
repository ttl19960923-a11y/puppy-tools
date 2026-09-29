import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema, { faqData } from "./faq-schema";

export const metadata: Metadata = {
  title: "How Much Should a Puppy Eat? Feeding Guide by Age & Weight",
  description: "Learn how to estimate how much your puppy should eat using age, weight, calorie needs, food calorie density, growth, and body condition. Includes an example, feeding guidance, and veterinary sources.",
  alternates: { canonical: "/how-much-should-a-puppy-eat" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://puppy-tools.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Puppy Feeding Guides", item: "https://puppy-tools.vercel.app/how-much-should-a-puppy-eat" },
    { "@type": "ListItem", position: 3, name: "How Much Should a Puppy Eat?", item: "https://puppy-tools.vercel.app/how-much-should-a-puppy-eat" },
  ],
};

const factors = [
  ["Age & growth stage", "Young puppies need more energy relative to body size because they are building new tissue and growing rapidly."],
  ["Current weight", "Body weight is used to estimate resting energy requirement (RER), which provides a calorie starting point."],
  ["Food calorie density", "The same calories can equal very different cups or grams depending on the food. Use kcal/cup or kcal/100 g from the label."],
  ["Body condition & growth", "A calculated amount is only a starting estimate. Weight trend, waist, ribs, and growth pattern help show whether the amount needs adjustment."],
  ["Treats & extras", "Treats still count toward daily calories and can dilute a balanced growth diet when they make up too much of the total."],
  ["Breed size", "Large and giant puppies need controlled, steady growth and a diet formulated appropriately for growth of large-size dogs."],
];

export default function Page() {
  return (
    <>
      <FAQSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-[#f8fafc] px-5 py-10 text-slate-900 md:px-6 md:py-14">
        <article className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span><span>Feeding Guides</span><span className="mx-2">/</span><span className="text-slate-700">How Much Should a Puppy Eat?</span></nav>

          <header className="mt-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">How Much Should a Puppy Eat?</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">A puppy&apos;s food amount depends on current weight, age and growth stage, the calorie density of the food, and how the puppy is growing. This guide shows how those pieces fit together without pretending one cups-per-day number works for every puppy.</p>
          </header>

          <section className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Quick answer</p>
            <h2 className="mt-2 text-2xl font-bold">Start with calories, then convert them into food</h2>
            <p className="mt-3 leading-7 text-slate-700">There is no universal grams-per-kilogram or cups-per-day rule for puppies. A more useful starting method is to estimate energy needs from body weight and growth stage, then divide those calories by the calorie density printed on the food label. The result should be adjusted over time using growth and body condition.</p>
            <div className="mt-5 flex flex-wrap gap-4"><Link href="/puppy-feeding-calculator" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">Calculate a feeding amount →</Link><Link href="/puppy-calorie-calculator" className="rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 hover:border-blue-400">Estimate puppy calories →</Link></div>
          </section>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold">Key Takeaways</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {["Food amount is not determined by weight alone.", "Food calorie density is required to turn kcal/day into cups or grams.", "Calorie equations provide a starting estimate, not a prescription.", "Monitor body condition and growth and adjust the portion as your puppy changes."].map((x) => <div key={x} className="rounded-2xl bg-slate-50 p-5 leading-7 text-slate-700">✓ {x}</div>)}
            </div>
          </section>

          <section className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">The big picture</p>
            <h2 className="mt-2 text-3xl font-bold">What Determines How Much a Puppy Should Eat?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">A bag&apos;s feeding chart can be a useful reference, but it cannot know your puppy&apos;s exact energy use or growth response. These six factors explain why two puppies of similar weight may need different portions.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">{factors.map(([title, body]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></div>)}</div>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Method</p>
            <h2 className="mt-2 text-3xl font-bold">From Puppy Weight to Cups or Grams</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 1</p><h3 className="mt-1 text-xl font-bold">Estimate RER</h3><p className="mt-2 leading-7 text-slate-600">A commonly used veterinary equation is RER = 70 × body weight (kg)<sup>0.75</sup>.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 2</p><h3 className="mt-1 text-xl font-bold">Account for growth</h3><p className="mt-2 leading-7 text-slate-600">Merck lists 3 × RER for healthy puppies under 4 months and 2 × RER for healthy puppies over 4 months as starting energy estimates.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 3</p><h3 className="mt-1 text-xl font-bold">Read the food label</h3><p className="mt-2 leading-7 text-slate-600">Find the food&apos;s calorie density, such as kcal per cup, kcal per can, or kcal per kilogram/100 g.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 4</p><h3 className="mt-1 text-xl font-bold">Convert and monitor</h3><p className="mt-2 leading-7 text-slate-600">Daily food = estimated kcal/day ÷ food calorie density. Then monitor weight, growth, and body condition rather than treating the number as permanent.</p></div>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Why there is no universal grams-by-weight chart:</strong> 100 g of one puppy food can contain substantially different calories from 100 g of another. A fixed g/kg rule can therefore overfeed one diet and underfeed another.</div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Worked Example: 15 lb, 3-Month-Old Puppy</h2>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <p className="leading-7 text-slate-600">Suppose a healthy puppy weighs <strong>15 lb (about 6.8 kg)</strong>, is <strong>3 months old</strong>, and eats a food containing <strong>400 kcal per cup</strong>.</p>
              <ol className="mt-6 space-y-4 text-slate-700"><li><strong>1. RER:</strong> 70 × 6.8<sup>0.75</sup> ≈ <strong>295 kcal/day</strong>.</li><li><strong>2. Growth starting point:</strong> under 4 months → 3 × RER ≈ <strong>885 kcal/day</strong>.</li><li><strong>3. Convert calories to food:</strong> 885 ÷ 400 ≈ <strong>2.2 cups/day</strong>.</li><li><strong>4. Divide into meals:</strong> if fed three meals, that is roughly <strong>0.74 cup per meal</strong>.</li></ol>
              <p className="mt-6 text-sm leading-6 text-slate-500">This example demonstrates the method; 885 kcal is not a prescription for every 15 lb puppy. Individual energy needs can differ, and the portion should be reassessed as the puppy grows.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">How Feeding Changes With Age</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-slate-100"><tr><th className="p-4">Growth stage</th><th className="p-4">What changes</th><th className="p-4">What to watch</th></tr></thead><tbody>{[
              ["Early puppyhood", "Rapid growth and high energy needs relative to body size; smaller, measured meals are practical.", "Appetite, stool quality, weight trend, body condition."],
              ["Later puppyhood", "Growth gradually slows and calorie needs relative to size decline.", "Recalculate as weight and age change; do not keep increasing portions automatically."],
              ["Approaching maturity", "Timing varies substantially with breed size.", "Keep an appropriate growth diet until skeletal maturity and transition thoughtfully."],
            ].map((r) => <tr key={r[0]} className="border-t border-slate-200"><td className="p-4 font-semibold">{r[0]}</td><td className="p-4 leading-6">{r[1]}</td><td className="p-4 leading-6">{r[2]}</td></tr>)}</tbody></table></div>
          </section>

          <section className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-2xl font-bold">Dry, Wet, and Mixed Feeding</h2><p className="mt-4 leading-7 text-slate-600">Do not compare dry and wet food by volume alone. Use calories. If you mix foods, count calories from both rather than adding a full dry-food portion and a full wet-food portion together.</p><p className="mt-4 leading-7 text-slate-600">For accuracy, use the calorie statement on each product and measure portions consistently.</p></div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-2xl font-bold">Treats Count Too</h2><p className="mt-4 leading-7 text-slate-600">Veterinary guidance commonly recommends keeping treats and snacks to no more than about <strong>10% of daily calories</strong>. The rest should primarily come from a complete and balanced diet appropriate for growth.</p><p className="mt-4 leading-7 text-slate-600">Training-heavy days are a good reason to reserve part of the puppy&apos;s normal food allowance for rewards.</p></div>
          </section>

          <section className="mt-16 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8"><h2 className="text-3xl font-bold">Large and Giant Breed Puppies Need Extra Care</h2><p className="mt-4 leading-7 text-slate-700">More food is not the goal; controlled, steady growth is. Large and giant puppies are more vulnerable to developmental orthopedic problems when energy intake promotes overly rapid growth. Choose a complete and balanced growth diet appropriate for large-size dogs, avoid unnecessary mineral supplementation, measure portions, and monitor body condition and growth with your veterinary team.</p></section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">How to Tell Whether the Amount Needs Adjusting</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Watch body condition</h3><p className="mt-3 leading-7 text-slate-600">An ideal body condition generally includes ribs that are easy to feel without excess fat and a visible waist.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Track growth</h3><p className="mt-3 leading-7 text-slate-600">Regular weigh-ins help reveal whether growth is steady or the feeding plan needs another look.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Recalculate after changes</h3><p className="mt-3 leading-7 text-slate-600">Age, weight, food, activity, health, and treat intake can all change the appropriate daily portion.</p></div></div>
          </section>

          <section className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8"><h2 className="text-3xl font-bold">Need a Personalized Starting Amount?</h2><p className="mt-4 max-w-3xl leading-7 text-slate-700">Use the Puppy Feeding Calculator with your puppy&apos;s current weight, age, and the calorie density from the food package. It converts the energy estimate into cups or grams and gives you a practical starting range.</p><Link href="/puppy-feeding-calculator" className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Open Puppy Feeding Calculator →</Link></section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-8">{faqData.map((faq) => <div key={faq.question}><h3 className="text-xl font-semibold">{faq.question}</h3><p className="mt-2 leading-7 text-slate-600">{faq.answer}</p></div>)}</div>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-3xl font-bold">Sources & Methodology</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">This guide uses veterinary nutrition references for energy estimation, growth feeding, body condition, treat limits, and large-breed considerations. Calorie equations are presented as starting points rather than individualized prescriptions.</p>
            <ul className="mt-6 space-y-3 text-sm leading-6"><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-of-small-animals" target="_blank" rel="noopener noreferrer">Merck Veterinary Manual — Nutritional Requirements of Small Animals ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/age-specific-and-breed-specific-diets/" target="_blank" rel="noopener noreferrer">AAHA — Age-specific and Breed-specific Diets ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://wsava.org/Global-Guidelines/Global-Nutrition-Guidelines/" target="_blank" rel="noopener noreferrer">WSAVA — Global Nutrition Guidelines & Toolkit ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://vcahospitals.com/know-your-pet/feeding-growing-puppies" target="_blank" rel="noopener noreferrer">VCA Animal Hospitals — Feeding Growing Puppies ↗</a></li></ul>
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500"><strong className="text-slate-700">Last reviewed:</strong> September 2026 · Educational use only; not veterinary diagnosis or individualized medical advice.</p>
          </section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Related Puppy Tools</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{[
            ["/puppy-feeding-calculator", "Puppy Feeding Calculator", "Convert calorie needs into a daily food amount."],
            ["/puppy-calorie-calculator", "Puppy Calorie Calculator", "Estimate daily calories from weight and age."],
            ["/puppy-feeding-schedule", "Puppy Feeding Schedule", "Plan meal timing as your puppy grows."],
            ["/puppy-growth-chart", "Puppy Growth Chart", "Put current weight into growth-stage context."],
            ["/puppy-feeding-chart", "Puppy Feeding Chart", "Review feeding references by puppy age."],
            ["/puppy-weight-predictor", "Puppy Weight Predictor", "Estimate future adult weight."],
          ].map(([href,title,desc]) => <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">{title}</span><p className="mt-1 text-sm text-slate-500">{desc}</p></Link>)}</div></section>
        </article>
      </main>
    </>
  );
}
