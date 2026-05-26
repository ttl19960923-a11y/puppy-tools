import { Metadata } from "next";
import DogCalorieCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Calorie Calculator | Estimate Daily Dog Calories",
  description:
    "Use this dog calorie calculator to estimate daily dog calories by weight, activity level, breed size, age, and body condition. Includes calorie tips, FAQs, and related dog tools.",
};

export default function DogCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Calorie Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog calorie calculator to estimate your dog&apos;s daily
            calorie needs based on weight, activity level, breed size, age, and
            body condition. Daily calories can vary depending on metabolism,
            lifestyle, food type, and overall health.
          </p>

          <DogCalorieCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Dog Calorie Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dogs need calories to support movement, body functions, muscle
              maintenance, temperature regulation, and daily energy needs.
              Active dogs usually require more calories than less active dogs.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator gives a general calorie range. Actual calorie
              needs may vary by breed size, body condition, age, metabolism,
              neuter status, activity level, and food calorie density.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Calorie Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Activity changes calorie needs
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Working dogs, sporting dogs, and highly active dogs may need
                  more calories than dogs with a low-activity lifestyle.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Body condition matters
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A dog that is overweight may need fewer calories, while an
                  underweight dog may need a carefully adjusted feeding plan.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Food labels are important
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dog foods can vary widely in calories per cup or gram, so
                  always compare the estimate with your dog food label.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Adjust slowly over time
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  If your dog gains or loses weight unexpectedly, adjust food
                  portions gradually and consult a veterinarian when needed.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Dog Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/dog-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Feeding Calculator
              </a>

              <a
                href="/dog-food-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Food Calculator
              </a>

              <a
                href="/dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Weight Calculator
              </a>

              <a
                href="/dog-calorie-chart-by-breed"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Calorie Chart By Breed
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Calorie FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many calories should my dog eat per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Daily dog calories depend on weight, age, activity level,
                  breed size, metabolism, health, and body condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can too many calories make my dog overweight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Consistently eating more calories than needed can lead to
                  weight gain and obesity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do active dogs need more calories?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Active dogs, working dogs, and athletic breeds usually
                  need more calories than less active dogs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should senior dogs eat fewer calories?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Some senior dogs need fewer calories if activity level drops,
                  but this depends on health, muscle condition, and weight.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I calculate food by calories or grams?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Calories are usually more accurate because different dog foods
                  have different calorie density.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}