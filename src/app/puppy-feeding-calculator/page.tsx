import { Metadata } from "next";
import PuppyFeedingCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Feeding Calculator | Estimate Daily Puppy Food Amount",
  description:
    "Use this puppy feeding calculator to estimate daily puppy food amount by weight, age, and growth needs. Includes feeding tips, FAQs, and related puppy tools.",
};

export default function PuppyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Feeding Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy feeding calculator to estimate how much food your
            puppy may need each day. Puppy food amounts can vary by age, weight,
            breed size, activity level, growth stage, and the calorie density of
            the food.
          </p>

          <PuppyFeedingCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Feeding Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually need more calories per kilogram than adult dogs
              because they are growing quickly. This calculator gives a general
              daily food estimate based on your puppy&apos;s current weight and
              feeding stage.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The result should be used as a starting point. Always compare the
              estimate with your puppy food label, monitor your puppy&apos;s body
              condition, and adjust portions with help from a veterinarian when
              needed.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Feeding Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Feed by age and size
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Small breed puppies, large breed puppies, and medium breed
                  puppies can grow at different speeds, so feeding amounts
                  should not be treated as one-size-fits-all.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Split meals through the day
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Young puppies often do better with three to four smaller meals
                  per day before gradually moving toward fewer meals as they get
                  older.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Watch body condition
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  If your puppy is gaining too much weight or looks too thin,
                  adjust the feeding amount slowly and check with your vet.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Check food calories
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dry food, wet food, and puppy formulas can have very different
                  calorie density, so the same grams may not provide the same
                  calories.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/8-week-puppy-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                8 Week Puppy Feeding Calculator
              </a>

              <a
                href="/10-week-puppy-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                10 Week Puppy Feeding Calculator
              </a>

              <a
                href="/3-month-puppy-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                3 Month Puppy Feeding Calculator
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
            <h2 className="text-3xl font-bold">Puppy Feeding FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How much should I feed my puppy each day?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Daily puppy food amount depends on weight, age, breed size,
                  activity level, growth rate, and food calorie density. Use the
                  calculator as a starting estimate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  How many times should puppies eat?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Young puppies often eat three to four meals per day. Older
                  puppies usually transition toward two meals per day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can I feed my puppy adult dog food?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Puppy-specific food is usually recommended because growing
                  puppies need nutrients that support development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I feed by grams or calories?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Calories are more accurate because different foods have
                  different calorie density. Grams should be adjusted based on
                  the food label.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can overfeeding a puppy be harmful?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Overfeeding can lead to unhealthy weight gain and may be
                  especially risky for large breed puppies during growth.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}