import { Metadata } from "next";
import DogFeedingCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Feeding Calculator | Estimate Daily Dog Food Amount",
  description:
    "Use this dog feeding calculator to estimate daily dog food amount by weight, activity level, breed size, and food type. Includes feeding tips, FAQs, and related dog tools.",
};

export default function DogFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Feeding Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog feeding calculator to estimate how much food your dog
            may need each day. Daily feeding amount can vary depending on body
            weight, breed size, activity level, metabolism, age, and food
            calorie density.
          </p>

          <DogFeedingCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Dog Feeding Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Adult dogs need balanced nutrition to maintain healthy weight,
              muscle condition, energy levels, and overall health. This
              calculator estimates a daily feeding range based on your dog&apos;s
              weight and lifestyle.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Feeding needs may vary between small breeds, medium breeds, and
              large breeds. Active dogs often require more calories than less
              active dogs.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Feeding Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Monitor body condition
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Feeding amounts should be adjusted if your dog becomes
                  overweight or underweight over time.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Split meals daily
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Most adult dogs do well with one or two meals daily depending
                  on breed, age, and digestion.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Consider activity level
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Highly active dogs, working dogs, and sporting breeds may
                  require higher calorie intake.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Compare food labels
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Different dog foods contain different calorie density, so
                  feeding grams can vary between brands.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Dog Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/dog-food-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Food Calculator
              </a>

              <a
                href="/dog-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Calorie Calculator
              </a>

              <a
                href="/dog-feeding-chart-by-age"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Feeding Chart By Age
              </a>

              <a
                href="/dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Weight Calculator
              </a>

              <a
                href="/ideal-dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Ideal Dog Weight Calculator
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
            <h2 className="text-3xl font-bold">Dog Feeding FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How much should I feed my dog daily?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Daily dog food amount depends on weight, activity level,
                  metabolism, age, and food calorie density.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  How often should adult dogs eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Most adult dogs eat one or two meals daily depending on health
                  condition and activity level.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can I overfeed my dog?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Overfeeding may lead to obesity, joint stress, and other
                  long-term health issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should feeding amount change by breed?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Small breeds, large breeds, and active working breeds may
                  have different calorie and feeding requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is wet food different from dry food?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Wet food usually contains fewer calories per gram than
                  dry food, so feeding amounts can differ significantly.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}