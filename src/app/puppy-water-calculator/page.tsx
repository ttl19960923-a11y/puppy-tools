import { Metadata } from "next";
import PuppyWaterCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Water Calculator | Estimate Daily Puppy Water Intake",
  description:
    "Use this puppy water calculator to estimate daily puppy water intake by weight, activity level, food type, and weather.",
};

export default function PuppyWaterCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Water Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy water calculator to estimate how much water your
            puppy may need each day. Water needs can vary by weight, activity
            level, food type, weather, growth stage, and overall health.
          </p>

          <PuppyWaterCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Water Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies need water for digestion, growth, temperature control,
              energy, and healthy body function. Many puppies need roughly
              50–70 ml of water per kilogram of body weight per day.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Exercise, hot weather, dry food, and activity level can increase
              daily water needs. Clean drinking water should usually be
              available throughout the day.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Water Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Dry food may increase thirst
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Puppies eating dry food may drink more water than puppies
                  eating wet food.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Activity affects water needs
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Play, walks, training, and exercise can increase daily water
                  intake.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Watch unusual drinking
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Sudden increases or decreases in drinking may be worth
                  discussing with a veterinarian.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Keep fresh water available
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Fresh water should usually be available after meals, play,
                  naps, and outdoor time.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Water Intake Guide
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Puppy Weight</th>
                    <th className="p-4">Estimated Daily Water</th>
                    <th className="p-4">Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">2 kg</td>
                    <td className="p-4">100–140 ml</td>
                    <td className="p-4">Small puppy starting range</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">5 kg</td>
                    <td className="p-4">250–350 ml</td>
                    <td className="p-4">May vary by food and activity</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">10 kg</td>
                    <td className="p-4">500–700 ml</td>
                    <td className="p-4">Active puppies may need more</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">20 kg</td>
                    <td className="p-4">1000–1400 ml</td>
                    <td className="p-4">Large puppies need close monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Tools</h2>

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
                href="/puppy-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Calorie Calculator
              </a>

              <a
                href="/puppy-sleep-schedule-by-age"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Sleep Schedule By Age
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Water FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How much water should a puppy drink daily?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Many puppies need roughly 50–70 ml of water per kilogram of
                  body weight daily, but needs vary by food type, activity, and
                  weather.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can puppies drink too much water?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Unusually high water intake can sometimes signal a health
                  issue, so contact a veterinarian if drinking changes suddenly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do puppies need more water with dry food?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Often yes. Dry food contains less moisture than wet food, so
                  puppies may drink more water.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should puppies have water all day?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Fresh water should usually be available throughout the day,
                  especially after meals, play, naps, and exercise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does hot weather increase puppy water needs?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Hot weather and outdoor activity can increase daily water
                  needs.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}