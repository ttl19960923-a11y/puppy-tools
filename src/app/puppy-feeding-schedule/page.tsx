import { Metadata } from "next";
import PuppyFeedingScheduleCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Feeding Schedule | Puppy Feeding Times By Age",
  description:
    "Use this puppy feeding schedule to find recommended feeding times, meal frequency, and feeding routines by puppy age.",
};

export default function PuppyFeedingSchedulePage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Feeding Schedule
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy feeding schedule to understand common feeding times,
            meal frequency, and feeding routines by age. Feeding schedules may
            vary depending on breed size, activity level, growth stage, and food
            type.
          </p>

          <PuppyFeedingScheduleCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How Puppy Feeding Schedules Work
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Young puppies usually need several small meals per day because
              they grow quickly and have smaller stomach capacity than adult
              dogs.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              As puppies mature, feeding frequency often decreases while portion
              size gradually increases. Consistent schedules may also help with
              digestion, energy levels, and potty training routines.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Feeding Tips
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Young puppies eat more often
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Puppies around 8–12 weeks often need several meals spread
                  throughout the day.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Consistency helps routines
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Feeding at similar times daily may help support digestion,
                  appetite, and potty routines.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size matters
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Small breed and large breed puppies may have different growth
                  speed and calorie needs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Feeding needs change with age
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Meal size and feeding frequency often change during growth and
                  adolescence.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Feeding Schedule By Age
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Puppy Age</th>
                    <th className="p-4">Meals Per Day</th>
                    <th className="p-4">Common Feeding Routine</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">8–12 weeks</td>
                    <td className="p-4">4 meals</td>
                    <td className="p-4">
                      Morning, midday, afternoon, and evening feeding
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3–6 months</td>
                    <td className="p-4">3 meals</td>
                    <td className="p-4">
                      Breakfast, lunch, and dinner routine
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">2–3 meals</td>
                    <td className="p-4">
                      Transition toward adult feeding schedule
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">12+ months</td>
                    <td className="p-4">2 meals</td>
                    <td className="p-4">
                      Stable adult feeding routine for many dogs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Related Puppy Tools
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/puppy-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Feeding Calculator
              </a>

              <a
                href="/puppy-feeding-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Feeding Chart
              </a>

              <a
                href="/puppy-age-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Age Chart
              </a>

              <a
                href="/puppy-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Calorie Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Feeding Schedule FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many meals should a puppy eat per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young puppies often eat three to four meals per day, while
                  older puppies may gradually transition to two meals daily.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is a feeding schedule important for puppies?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Consistent feeding schedules may support digestion,
                  appetite, potty routines, and stable daily habits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should feeding times stay consistent?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Feeding at similar times daily can help puppies build regular
                  routines and may improve digestion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do large breed puppies need different schedules?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Large breed puppies may have different growth speed and
                  calorie needs compared to smaller breeds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When should puppies switch to adult feeding routines?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many puppies begin transitioning toward adult feeding around
                  12 months, though large breeds may take longer.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}