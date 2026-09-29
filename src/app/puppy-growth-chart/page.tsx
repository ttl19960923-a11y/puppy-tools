import type { Metadata } from "next";
import Link from "next/link";
import PuppyGrowthChartCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Growth Chart | Growth Stages by Age & Size",
  description: "Use this puppy growth chart to understand growth stages by age and expected adult size, track weight trends, and learn when small, medium, large, and giant puppies mature.",
  alternates: { canonical: "/puppy-growth-chart" },
};

const faqs = [
  ["When do puppies stop growing?", "Growth timing depends strongly on expected adult size and breed. Small dogs may reach mature size within the first year, while large and giant dogs can continue skeletal development well into the second year."],
  ["How can I tell if my puppy is growing normally?", "A single weight is less informative than a series of measurements. Track weight and body condition over time and discuss unexpected plateaus, rapid changes, or body-condition concerns with your veterinarian."],
  ["Can puppy weight predict adult weight?", "Current weight can contribute to an adult-weight estimate, but no simple multiplier is exact for every puppy. Breed, genetics, sex, age, nutrition, health, and the puppy's individual growth curve all affect final weight."],
  ["Do small puppies finish growing before large puppies?", "Usually. Small dogs commonly mature earlier, while large and giant breeds generally have longer growth and skeletal-development periods."],
  ["How often should I weigh my puppy?", "Regular measurements are useful because the trend matters more than one number. Young growing puppies can be weighed frequently; your veterinarian can recommend an interval that fits your puppy's age, size, and health."],
  ["Should a puppy grow as fast as possible?", "No. Faster growth is not necessarily healthier growth. Overfeeding can accelerate growth, and controlled steady growth is particularly important for large and giant breed puppies."],
  ["When should I worry about my puppy's growth?", "Contact your veterinarian if growth unexpectedly stalls, weight changes rapidly, body condition becomes too thin or heavy, or your puppy has poor appetite, vomiting, diarrhea, lethargy, pain, limping, or another concerning sign."],
];

export default function PuppyGrowthChartPage() {
  return <><FAQSchema />
    <main className="min-h-screen bg-[#f8fafc] px-5 py-10 text-slate-900 md:px-6 md:py-14">
      <article className="mx-auto max-w-5xl">
        <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><span>Puppy Growth Tools</span><span className="mx-2">/</span><span className="text-slate-700">Puppy Growth Chart</span></nav>

        <header className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Puppy Growth Chart</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Understand your puppy&apos;s growth stage by age and expected adult size, record today&apos;s weight in context, and learn why a growth trend is more useful than a one-number adult-size guess.</p>
        </header>

        <section className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-6 md:p-8">
          <p className="text-sm font-semibold text-blue-700">QUICK ANSWER</p>
          <h2 className="mt-2 text-2xl font-bold">How fast do puppies grow?</h2>
          <p className="mt-3 leading-7 text-slate-700">Puppies grow fastest during their early months, then the rate gradually slows. <strong>Small dogs generally mature earlier than large and giant dogs.</strong> Small and medium dogs may complete major growth around the first year, while large and giant breeds can continue skeletal development well beyond 12 months. The most useful way to judge an individual puppy is to follow repeated weight and body-condition measurements over time.</p>
          <a href="#growth-planner" className="mt-5 inline-block font-semibold text-blue-700 hover:underline">Check your puppy&apos;s growth stage ↓</a>
        </section>

        <PuppyGrowthChartCalculator />

        <section className="mt-16">
          <p className="text-sm font-semibold text-blue-700">REFERENCE CHART</p>
          <h2 className="mt-2 text-3xl font-bold">Puppy Growth Chart by Age and Size</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">This chart describes broad developmental patterns rather than target weights. A healthy Chihuahua and a healthy Great Dane should not follow the same weight curve.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[820px] text-left text-sm"><thead className="bg-slate-100"><tr><th className="p-4">Age</th><th className="p-4">Typical growth pattern</th><th className="p-4">Small / medium dogs</th><th className="p-4">Large / giant dogs</th></tr></thead><tbody className="divide-y divide-slate-200">
              {[
                ["2–3 months", "Rapid early growth", "Growing quickly", "Growing quickly; long growth period ahead"],
                ["4–5 months", "Rapid-to-active growth", "Major growth continues", "Major growth continues"],
                ["6 months", "Growth rate begins slowing", "Some small dogs move toward later growth", "Still substantial development ahead"],
                ["9 months", "Adolescent growth", "Many small dogs near mature size; medium dogs approaching it", "Large/giant dogs commonly still growing"],
                ["12 months", "Maturity becomes size-dependent", "Many small/medium dogs mature or close", "Large/giant dogs may remain skeletally immature"],
                ["15–18 months", "Late growth", "Usually mature", "Many large dogs approach maturity; giant dogs may continue"],
                ["18–24 months", "Final development", "Adult stage", "Some giant dogs complete later development"],
              ].map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="p-4 text-slate-700">{cell}</td>)}</tr>)}
            </tbody></table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">These are broad size-group ranges, not deadlines. Breed, sex, genetics, health, nutrition, and individual development can shift the timing.</p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">How This Puppy Growth Chart Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 1</p><h3 className="mt-1 text-xl font-bold">Start with age</h3><p className="mt-2 leading-7 text-slate-600">Age tells us whether a puppy is in early rapid growth, adolescent growth, or the later approach to maturity.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 2</p><h3 className="mt-1 text-xl font-bold">Use expected adult size</h3><p className="mt-2 leading-7 text-slate-600">Body size changes the timeline. Small dogs generally mature earlier; large and giant dogs can continue skeletal development much longer.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 3</p><h3 className="mt-1 text-xl font-bold">Record today&apos;s weight</h3><p className="mt-2 leading-7 text-slate-600">One measurement becomes useful when it is dated and compared with future measurements. The direction of the curve matters more than a single number.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 4</p><h3 className="mt-1 text-xl font-bold">Interpret the trend with body condition</h3><p className="mt-2 leading-7 text-slate-600">Weight alone cannot distinguish healthy growth from excess body fat. Veterinary growth monitoring combines the trend with body condition, diet, health, and breed context.</p></div>
          </div>
        </section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Example: Tracking a 6-Month-Old Medium Puppy</h2><div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><p className="leading-7 text-slate-600">Suppose a healthy <strong>6-month-old medium-size puppy weighs 25 lb</strong>. The useful conclusion is not “25 lb × a multiplier = exact adult weight.” At six months, growth is commonly beginning to slow, and many medium dogs still have development ahead before approaching mature size around the first year.</p><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">What to record</h3><p className="mt-2 leading-7 text-slate-600">Date, body weight, body condition, food amount, and any health changes. Repeat measurements show whether growth is continuing steadily.</p></div><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">What not to assume</h3><p className="mt-2 leading-7 text-slate-600">A puppy of the same age and weight can mature differently depending on breed, genetics, sex, body condition, and health. One generic multiplier cannot capture those differences.</p></div></div></div></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Puppy Growth Stages</h2><div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="text-xl font-bold">Early rapid growth</h3><p className="mt-2 leading-7 text-slate-600">The first several months bring the fastest changes in body weight and proportions. Merck notes that puppy growth is rapid during roughly the first five months.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="text-xl font-bold">Adolescent growth</h3><p className="mt-2 leading-7 text-slate-600">After about six months, the rate commonly begins to plateau. Small dogs may be nearing mature size while larger dogs still have substantial development ahead.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="text-xl font-bold">Late development</h3><p className="mt-2 leading-7 text-slate-600">Large and giant dogs can continue skeletal development after smaller dogs are mature. Filling out and body composition can also change after rapid height growth slows.</p></div></div></section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">Small vs. Medium vs. Large vs. Giant Puppy Growth</h2><p className="mt-4 leading-7 text-slate-600">Size group changes the expected timeline more than a universal month-by-month formula. Veterinary references generally place small and medium dogs near skeletal maturity earlier, while large and giant dogs can continue developing into the second year.</p><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[["Small","~6–12 months","Often reaches mature body size earliest."],["Medium","~9–12 months","Commonly approaches maturity around the first year."],["Large","~12–18 months","Often continues skeletal growth after the first birthday."],["Giant","~18–24 months","May continue development toward two years."]].map(([name,time,note]) => <div key={name} className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">{name.toUpperCase()}</p><p className="mt-1 text-xl font-bold">{time}</p><p className="mt-2 text-sm leading-6 text-slate-600">{note}</p></div>)}</div></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Weight, Height, and Body Condition Are Different</h2><div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">Weight</h3><p className="mt-2 leading-7 text-slate-600">Useful for plotting a growth trend, but it includes both lean tissue and body fat.</p></div><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">Height and frame</h3><p className="mt-2 leading-7 text-slate-600">Skeletal growth has its own maturity timeline and is especially prolonged in large and giant dogs.</p></div><div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold">Body condition</h3><p className="mt-2 leading-7 text-slate-600">Helps judge whether weight is appropriate for the individual rather than simply comparing pounds or kilograms.</p></div></div></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">When Do Puppies Stop Growing?</h2><p className="mt-4 max-w-4xl leading-7 text-slate-600">There is no single age for every dog. Small dogs can reach mature body size within the first year; medium dogs commonly mature around the first year; large dogs often continue to roughly 12–18 months; and some giant dogs continue toward 18–24 months. “Looks full grown” and “skeletally mature” are not always the same thing, which matters for nutrition and strenuous exercise.</p></section>

        <section className="mt-16 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8"><h2 className="text-2xl font-bold">Healthy growth is not maximum-speed growth</h2><p className="mt-3 leading-7 text-amber-950">Overfeeding can accelerate growth, and faster is not necessarily better—especially for large and giant breed puppies. Feed a complete and balanced diet appropriate for growth, monitor body condition and weight trend, and avoid adding calcium or other supplements unless your veterinarian recommends them.</p></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">When to Ask Your Veterinarian About Growth</h2><p className="mt-4 leading-7 text-slate-600">Growth curves are most useful for spotting a change in pattern. Contact your veterinary team if your puppy&apos;s weight unexpectedly stalls or changes rapidly, body condition becomes too thin or heavy, or growth concerns occur with poor appetite, vomiting, diarrhea, lethargy, pain, limping, or another health change. Your veterinarian can compare the growth trend with breed expectations, body condition, diet, and medical history.</p></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Puppy Growth FAQ</h2><div className="mt-6 space-y-4">{faqs.map(([q,a]) => <details key={q} className="rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-slate-600">{a}</p></details>)}</div></section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><p className="text-sm font-semibold text-blue-700">SOURCES &amp; METHODOLOGY</p><h2 className="mt-2 text-3xl font-bold">How we built this growth guide</h2><p className="mt-4 leading-7 text-slate-600">This page uses veterinary guidance on puppy growth rate, skeletal maturity, nutrition, and longitudinal growth monitoring. The planner intentionally avoids a universal adult-weight multiplier because breed and individual growth curves vary. Its output is developmental context, not a diagnosis or precise adult-size prediction.</p><ul className="mt-5 space-y-3 text-sm leading-6"><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/feeding-practices-in-small-animals" target="_blank" rel="noopener noreferrer">Merck Veterinary Manual — Feeding Practices in Small Animals ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://vcahospitals.com/know-your-pet/feeding-growing-puppies" target="_blank" rel="noopener noreferrer">VCA Animal Hospitals — Feeding Growing Puppies ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/age-specific-and-breed-specific-diets/" target="_blank" rel="noopener noreferrer">AAHA — Age-specific and Breed-specific Diets ↗</a></li><li><a className="font-semibold text-blue-700 hover:underline" href="https://wsava.org/Global-Guidelines/Global-Nutrition-Guidelines/" target="_blank" rel="noopener noreferrer">WSAVA — Global Nutrition Guidelines ↗</a></li></ul><p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500"><strong className="text-slate-700">Last reviewed:</strong> September 2026 · Educational use only; not veterinary diagnosis or an individualized growth assessment.</p></section>

        <section className="mt-16"><h2 className="text-3xl font-bold">Related Puppy Tools</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/puppy-weight-predictor" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Weight Predictor</span><p className="mt-1 text-sm text-slate-500">Estimate adult weight when that is your main question.</p></Link><Link href="/puppy-size-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Size Calculator</span><p className="mt-1 text-sm text-slate-500">Estimate the adult size category your puppy may reach.</p></Link><Link href="/2-month-puppy-weight-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">2 Month Puppy Weight Calculator</span><p className="mt-1 text-sm text-slate-500">Explore the early-growth stage around 8 weeks.</p></Link><Link href="/puppy-feeding-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Feeding Calculator</span><p className="mt-1 text-sm text-slate-500">Estimate a starting daily food amount from age, weight, and food calories.</p></Link></div></section>
      </article>
    </main>
  </>;
}
