import { Metadata } from "next";
import PuppyFeedingChartCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Feeding Chart | Puppy Food Amount By Age & Weight",
  description:
    "Use this puppy feeding chart to estimate food amounts by puppy age, weight, breed size, and feeding stage.",
};

export default function PuppyFeedingChartPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Feeding Chart
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy feeding chart to understand common feeding amounts,
            meal frequency, and daily food guidance by puppy age and weight.
            Feeding needs may vary by breed size, food type, growth rate, and
            activity level.
          </p>

          <PuppyFeedingChartCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Feeding Chart Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually need more calories per kilogram than adult dogs
              because they are growing quickly. Younger puppies often need
              smaller meals more frequently throughout the day.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This chart gives a general starting point. Always compare feeding
              amounts with your puppy food label and adjust based on body
              condition, growth, and veterinarian guidance.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Feeding Chart By Age
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Puppy Age</th>
                    <th className="p-4">Meals Per Day</th>
                    <th className="p-4">Feeding Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">8–12 weeks</td>
                    <td className="p-4">4 meals</td>
                    <td className="p-4">
                      Small frequent meals for early growth
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3–6 months</td>
                    <td className="p-4">3 meals</td>
                    <td className="p-4">
                      Steady feeding routine during rapid growth
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">2–3 meals</td>
                    <td className="p-4">
                      Gradual transition toward adult feeding routine
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">12+ months</td>
                    <td className="p-4">2 meals</td>
                    <td className="p-4">
                      Many dogs begin adult maintenance feeding
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Feeding Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Use weight as a starting point
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Puppy weight helps estimate food amount, but food calories and
                  growth stage matter too.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Check the food label
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dry food and wet food can have very different calorie density,
                  so grams may vary by brand.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Watch body condition
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Adjust feeding if your puppy gains weight too quickly or looks
                  too thin.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size matters
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Small, medium, and large breed puppies can grow at different
                  speeds.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a href="/puppy-feeding-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Puppy Feeding Calculator
              </a>

              <a href="/puppy-feeding-schedule" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Puppy Feeding Schedule
              </a>

              <a href="/puppy-calorie-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Puppy Calorie Calculator
              </a>

              <a href="/puppy-growth-chart" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Puppy Growth Chart
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Feeding Chart FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How much should I feed my puppy by age?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Feeding amount depends on age, weight, breed size, activity,
                  and food calorie density.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  How many meals should a puppy eat daily?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Young puppies often eat three to four meals per day, while
                  older puppies may transition toward two meals daily.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I follow a puppy feeding chart exactly?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. A feeding chart is a starting point. Always check your food
                  label and adjust based on growth and body condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does breed size affect puppy feeding?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Small, medium, and large breed puppies may need different
                  feeding amounts and growth support.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is puppy food different from adult dog food?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Puppy food is usually formulated to support growth and
                  development.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}