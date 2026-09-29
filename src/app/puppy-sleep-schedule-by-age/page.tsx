import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "./faq-schema";
import PuppySleepScheduleByAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Puppy Sleep Schedule by Age | Nap & Daily Routine Planner",
  description: "Build an age-based puppy sleep schedule with example naps, awake periods, potty breaks, bedtime guidance, and a puppy sleep chart by age.",
  alternates: { canonical: "/puppy-sleep-schedule-by-age" },
};

const faqs = [
  ["How much do puppies sleep?", "Young puppies commonly sleep about 18–20 hours in a 24-hour day. That total includes nighttime sleep and daytime naps. Individual puppies vary, so behavior and normal energy while awake matter more than hitting an exact number."],
  ["How much should an 8-week-old puppy sleep?", "At 8 weeks, it is normal for a puppy to spend much of the day asleep. Build the day around short periods of eating, potty trips, gentle play, socialization, and frequent opportunities to nap."],
  ["How much should a 3-month-old puppy sleep?", "A 3-month-old puppy still needs substantial sleep and regular daytime naps. Rather than forcing an exact hourly target, alternate manageable activity with quiet rest and keep the morning and bedtime routine predictable."],
  ["How much do puppies sleep at 6 months?", "By 6 months, many puppies have a more mature daily rhythm but daytime naps are still normal. Sleep varies by individual, breed, activity, and environment, so there is no single evidence-based hour target for every 6-month-old puppy."],
  ["How many naps should a puppy take?", "There is no universal nap count. Young puppies often nap repeatedly throughout the day, especially after play, walks, training, meals, or stimulating experiences. Offer quiet rest opportunities and let the puppy's sleep cues guide the routine."],
  ["How long should puppy naps be?", "The American Kennel Club notes that a puppy may nap every hour or so and may sleep for about 30 minutes to as long as two hours. Nap length can vary from one rest period to the next."],
  ["Should puppies sleep through the night?", "Not always. Very young puppies may need a nighttime potty break. As puppies mature, nighttime sleep often becomes more consolidated, but bladder capacity and individual routines vary."],
  ["Can a puppy sleep too much?", "Lots of sleep can be normal in a growing puppy. The more important concern is a meaningful change from the puppy's normal pattern or lethargy while awake, especially with appetite changes, potty changes, loss of interest in play, nighttime restlessness, or breathing concerns."],
];

export default function PuppySleepScheduleByAgePage() {
  return (
    <><FAQSchema />
      <main className="min-h-screen bg-[#f8fafc] px-5 py-10 text-slate-900 md:px-6 md:py-14">
        <article className="mx-auto max-w-5xl">
          <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><span>Puppy Routine Tools</span><span className="mx-2">/</span><span className="text-slate-700">Puppy Sleep Schedule by Age</span></nav>

          <header className="mx-auto mt-7 max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Puppy Sleep Schedule by Age</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Build a practical puppy sleep routine by age, with example nap periods, awake time, potty breaks, and bedtime. Use the schedule as a flexible framework—not a rigid sleep prescription.</p>
          </header>

          <section className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-6 md:p-8">
            <p className="text-sm font-semibold text-blue-700">QUICK ANSWER</p>
            <h2 className="mt-2 text-2xl font-bold">How much sleep does a puppy need?</h2>
            <p className="mt-3 leading-7 text-slate-700">Young puppies commonly sleep around <strong>18–20 hours per day</strong>. They often alternate short bursts of eating, potty trips, play, training, and exploration with frequent naps. Exact sleep varies, so the most useful schedule is one that provides regular chances to rest and adapts to your puppy&apos;s behavior.</p>
            <a href="#sleep-planner" className="mt-5 inline-block font-semibold text-blue-700 hover:underline">Build your puppy&apos;s schedule ↓</a>
          </section>

          <PuppySleepScheduleByAgeCalculator />

          <section className="mt-16">
            <p className="text-sm font-semibold text-blue-700">REFERENCE CHART</p>
            <h2 className="mt-2 text-3xl font-bold">Puppy Sleep Schedule by Age Chart</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">There is no reliable veterinary formula assigning an exact number of sleep hours or naps to every puppy age. This chart therefore focuses on how the routine typically develops instead of inventing precise monthly targets.</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-100"><tr><th className="p-4">Age</th><th className="p-4">Sleep pattern</th><th className="p-4">Daytime rest</th><th className="p-4">Routine focus</th></tr></thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["8 weeks", "Very high sleep needs", "Frequent naps", "Sleep, potty, meals, gentle socialization"],
                    ["10 weeks", "Frequent sleep between activity", "Frequent naps", "Short activity blocks followed by quiet time"],
                    ["3 months", "More predictable daily rhythm", "Several rest opportunities", "Build consistent morning and bedtime cues"],
                    ["4 months", "Gradually longer active periods", "Regular naps", "Balance training and play with recovery"],
                    ["6 months", "More mature sleep pattern", "Daytime naps still normal", "Keep recovery time after activity"],
                    ["9 months", "Adolescent pattern", "Individual", "Prevent an energetic day from becoming nonstop stimulation"],
                    ["12 months", "Moving toward adult routine", "Individual", "Adapt to breed, activity, and household schedule"],
                  ].map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="p-4 align-top">{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">For young puppies, 18–20 hours per day is a commonly cited general range. Sleep becomes more individual as puppies mature.</p>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <p className="text-sm font-semibold text-blue-700">METHODOLOGY</p>
            <h2 className="mt-2 text-3xl font-bold">How the Puppy Sleep Planner Works</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 1</p><h3 className="mt-1 text-xl font-bold">Start with age</h3><p className="mt-2 leading-7 text-slate-600">Age changes the shape of the day. Very young puppies generally need more frequent opportunities to sleep, potty, eat, and recover from stimulation.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 2</p><h3 className="mt-1 text-xl font-bold">Anchor the day to wake-up time</h3><p className="mt-2 leading-7 text-slate-600">Your wake-up time shifts the example schedule without pretending there is one correct clock time for every household.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 3</p><h3 className="mt-1 text-xl font-bold">Alternate activity and quiet time</h3><p className="mt-2 leading-7 text-slate-600">The planner follows the practical pattern described by puppy-care guidance: activity is followed by a chance to nap or settle.</p></div>
              <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-blue-700">STEP 4</p><h3 className="mt-1 text-xl font-bold">Add natural potty moments</h3><p className="mt-2 leading-7 text-slate-600">Potty opportunities are placed after waking and around routine transitions because young puppies commonly need to eliminate after sleep, meals, drinking, and play.</p></div>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Important:</strong> The clock times are planning examples. They are not evidence-based sleep limits, and you do not need to wake a comfortably sleeping puppy just to follow the table.</div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Example: A 3-Month-Old Puppy Sleep Schedule</h2>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <p className="leading-7 text-slate-600">Suppose a 3-month-old puppy wakes at <strong>7:00 AM</strong>. A practical day might alternate roughly an hour of meals, potty trips, play, socialization, or short training with generous quiet periods. The exact nap length is allowed to vary.</p>
              <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                {["7:00 AM — Wake + potty", "7:15 AM — Breakfast / gentle activity", "8:00 AM — Nap / quiet time", "9:30 AM — Wake + potty + activity", "10:30 AM — Nap / quiet time", "12:00 PM — Wake + potty + meal/activity", "1:00 PM — Nap / quiet time", "2:30 PM — Wake + potty + activity", "3:30 PM — Nap / quiet time", "Evening — Dinner, family time, quiet rest", "Bedtime — Final potty + consistent wind-down"].map((item) => <div key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700">{item}</div>)}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">This is a worked example of the planner&apos;s rhythm, not a requirement that every 3-month-old puppy follow these exact times.</p>
            </div>
          </section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Naps, Awake Time, and Overtired Puppies</h2><div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Let naps vary</h3><p className="mt-3 leading-7 text-slate-600">AKC notes that puppies may nap every hour or so and that individual naps can range from about 30 minutes to two hours. A natural nap does not need to end because a timer says so.</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Use awake windows as cues</h3><p className="mt-3 leading-7 text-slate-600">There is no universal veterinary awake-window formula by month. Use activity level, settling behavior, and signs of tiredness to decide when to offer quiet time.</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">Avoid nonstop stimulation</h3><p className="mt-3 leading-7 text-slate-600">Puppies may keep playing even when tired. Following active periods with a calm, comfortable place to rest can make the daily rhythm easier to manage.</p></div>
          </div></section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">Nighttime Sleep and Potty Breaks</h2><p className="mt-4 leading-7 text-slate-600">Very young puppies may still need to go outside during the night. Merck lists first thing in the morning, last thing at night, after meals, after drinking a lot of water, after waking from a nap, after play, and during the night for very young puppies as common potty times. Keep nighttime potty trips calm and return to the sleep routine afterward.</p></section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-3xl font-bold">When Should a Sleep Change Be Checked by a Vet?</h2><p className="mt-4 leading-7 text-slate-600">A puppy sleeping a lot is not automatically a problem. Pay more attention to a meaningful change from the puppy&apos;s normal pattern or unusual lethargy while awake. Veterinary guidance recommends checking in when sleep changes occur with concerns such as nighttime restlessness, appetite changes, potty changes, loss of interest in play, or excessive snoring. Flat-faced puppies that snore heavily or appear to gasp during sleep also warrant veterinary attention.</p></section>

          <section className="mt-16"><h2 className="text-3xl font-bold">Puppy Sleep FAQ</h2><div className="mt-8 space-y-5">{faqs.map(([q, a]) => <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-3 leading-7 text-slate-600">{a}</p></div>)}</div></section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-3xl font-bold">Sources & Methodology</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">This planner uses published puppy-care guidance to build a flexible routine. It deliberately avoids assigning unsupported exact sleep totals, nap counts, or awake-window limits to each month of age.</p>
            <ul className="mt-6 space-y-3 text-sm leading-6">
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://www.akc.org/expert-advice/health/how-much-do-puppies-sleep/" target="_blank" rel="noopener noreferrer">American Kennel Club — How to Make Sure Your Puppy Gets Enough Sleep ↗</a></li>
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://www.akc.org/expert-advice/training/setting-schedules-and-developing-a-routine-for-your-new-puppy/" target="_blank" rel="noopener noreferrer">American Kennel Club — Puppy Schedule: Daily Routine for New Puppies ↗</a></li>
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://vcahospitals.com/pediatric/puppy/health-wellness/how-much-sleep-do-puppies-need" target="_blank" rel="noopener noreferrer">VCA Animal Hospitals — How Much Sleep Do Puppies Need? ↗</a></li>
              <li><a className="font-semibold text-blue-700 hover:underline" href="https://www.merckvetmanual.com/dog-owners/routine-care-of-dogs/puppy-care" target="_blank" rel="noopener noreferrer">Merck Veterinary Manual — Puppy Care ↗</a></li>
            </ul>
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500"><strong className="text-slate-700">Last reviewed:</strong> September 2026 · Educational use only; not veterinary diagnosis or individualized medical advice.</p>
          </section>

          
          <section className="mt-16"><p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Learn more</p><h2 className="mt-2 text-3xl font-bold">Related Puppy Sleep Guide</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/how-much-sleep-do-puppies-need" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">How Much Sleep Do Puppies Need?</span><p className="mt-1 text-sm text-slate-500">Learn how puppy sleep changes with age, naps, activity, and nighttime routines.</p></Link></div></section>

<section className="mt-16"><h2 className="text-3xl font-bold">Related Puppy Tools</h2><div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href="/puppy-feeding-schedule" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Feeding Schedule</span><p className="mt-1 text-sm text-slate-500">Plan puppy meals through the day.</p></Link>
            <Link href="/puppy-age-chart" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Age Chart</span><p className="mt-1 text-sm text-slate-500">Understand puppy age and development stages.</p></Link>
            <Link href="/puppy-feeding-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Feeding Calculator</span><p className="mt-1 text-sm text-slate-500">Estimate daily food from weight, age, and food calories.</p></Link>
            <Link href="/puppy-growth-chart" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="font-semibold">Puppy Growth Chart</span><p className="mt-1 text-sm text-slate-500">Compare puppy growth patterns by age.</p></Link>
          </div></section>
        </article>
      </main>
    </>
  );
}
