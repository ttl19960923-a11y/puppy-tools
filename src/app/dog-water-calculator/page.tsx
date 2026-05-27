import { Metadata } from "next";
import DogWaterCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Water Calculator | Estimate Daily Dog Water Intake",
  description:
    "Use this dog water calculator to estimate daily dog water intake based on weight, activity level, food type, and weather.",
};

export default function DogWaterCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">

          <h1 className="text-center text-5xl font-bold">
            Dog Water Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Estimate how much water your dog may need daily based on body
            weight, activity level, food type, weather, and lifestyle.
          </p>

          <DogWaterCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">

            <h2 className="text-3xl font-bold">
              How Much Water Does A Dog Need?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Most healthy dogs need approximately 50–70 ml of water per
              kilogram of body weight daily. Water intake varies depending on
              exercise, food type, environment, and overall health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Dogs eating dry food often drink more water because dry kibble
              contains less moisture than wet food.
            </p>

          </section>

          <section className="mt-16">

            <h2 className="text-3xl font-bold">
              Dog Hydration Tips
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Keep fresh water available
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Dogs should usually have access to clean drinking water all day.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Activity affects water needs
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Dogs may need more water after exercise or play sessions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Weather matters
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Hot temperatures often increase daily water requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Watch for dehydration
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Dry gums, low energy, and heavy panting may sometimes suggest dehydration.
                </p>
              </div>

            </div>

          </section>

          <section className="mt-16">

            <h2 className="text-3xl font-bold">
              Related Dog Tools
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <a
                href="/dog-food-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Food Calculator
              </a>

              <a
                href="/dog-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Feeding Calculator
              </a>

              <a
                href="/dog-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Calorie Calculator
              </a>

              <a
                href="/puppy-water-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Water Calculator
              </a>

            </div>

          </section>

          <section className="mt-16">

            <h2 className="text-3xl font-bold">
              Dog Water FAQ
            </h2>

            <div className="mt-8 space-y-8">

              <div>
                <h3 className="text-xl font-semibold">
                  How much water should my dog drink?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many dogs need around 50–70 ml per kilogram daily, depending
                  on food type and activity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can dogs drink too much water?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Excessive water intake may sometimes indicate health issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does dry food increase water needs?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Dogs eating dry food often drink more water.
                </p>
              </div>

            </div>

          </section>

        </section>
      </main>
    </>
  );
}