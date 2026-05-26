import { Metadata } from "next";
import DogFoodCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Food Calculator | Estimate Daily Dog Food Amount",
  description:
    "Use this dog food calculator to estimate daily dog food portions based on weight, food type, activity level, and calorie needs.",
};

export default function DogFoodCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Food Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog food calculator to estimate how much dog food your dog
            may need each day based on weight, food type, activity level, and
            calorie needs. Feeding amounts may vary by breed size, metabolism,
            age, and body condition.
          </p>

          <DogFoodCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Dog Food Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dog food portions are usually based on daily calorie needs and the
              calorie density of the food. Dry food and wet food often contain
              very different amounts of calories per gram or cup.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Activity level, breed size, age, body condition, metabolism, and
              overall health can all affect how much food a dog may need daily.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Food Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Dry food is more calorie dense
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Dry dog food usually contains less moisture, so portions are
                  often smaller compared to wet food.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Activity changes food needs
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Active dogs and working dogs may require larger food portions
                  than less active dogs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Body condition matters
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Dogs gaining excess weight may need smaller portions, while
                  underweight dogs may need careful calorie increases.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Check food labels carefully
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Different dog foods can vary greatly in calories, ingredients,
                  and feeding recommendations.
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
                href="/dog-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Calorie Calculator
              </a>

              <a
                href="/dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Weight Calculator
              </a>

              <a
                href="/dog-water-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Water Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Food FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How much dog food should I feed per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Feeding amount depends on weight, calorie needs, activity
                  level, metabolism, and the calorie density of the food.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is wet food amount different from dry food?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Wet food contains more moisture and usually requires
                  larger serving sizes than dry food.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should active dogs eat more food?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Active dogs generally burn more calories and may require
                  larger food portions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can overfeeding cause weight gain?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Excess calories over time can contribute to obesity and
                  related health issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I follow the dog food package guide?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Food package guides are useful starting points, but portions
                  may still need adjustment for your individual dog.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}