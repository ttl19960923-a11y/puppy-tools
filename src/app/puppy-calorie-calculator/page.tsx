import { Metadata } from "next";
import PuppyCalorieCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Calorie Calculator | Estimate Daily Puppy Calories",
  description:
    "Use this puppy calorie calculator to estimate daily puppy calories by weight, age, breed size, and activity level. Includes calorie tips, FAQs, and related puppy tools.",
};

export default function PuppyCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Calorie Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy calorie calculator to estimate your puppy&apos;s
            daily calorie needs based on weight, age, breed size, and activity
            level. Puppy calorie needs change quickly during growth, so this
            tool gives a useful starting point.
          </p>

          <PuppyCalorieCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Calorie Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually need more calories per kilogram than adult dogs
              because they are growing, learning, playing, and developing muscle
              and bone structure.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator gives an estimated calorie range. Actual needs can
              vary by breed, growth rate, activity level, metabolism, food type,
              and health condition.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Calorie Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Younger puppies need more energy
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Puppies in early growth stages often need more calories per
                  kilogram than older puppies.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size matters
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Small, medium, and large breed puppies may grow at different
                  speeds and need different calorie adjustments.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Use food labels
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Puppy foods can have different calories per cup or gram, so
                  always compare calorie estimates with the package label.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Watch growth and body condition
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  If your puppy gains weight too quickly or looks too thin,
                  adjust portions gradually and ask your veterinarian.
                </p>
              </div>
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
                href="/puppy-calorie-calculator-by-age"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Calorie Calculator By Age
              </a>

              <a
                href="/puppy-weight-predictor"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Weight Predictor
              </a>

              <a
                href="/puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Growth Chart
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Calorie FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many calories does my puppy need per day?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Puppy calorie needs depend on weight, age, breed size,
                  activity level, growth rate, metabolism, and food type.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do puppies need more calories than adult dogs?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Puppies usually need more calories per kilogram because
                  they are growing quickly and using energy for development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can too many calories make a puppy overweight?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Overfeeding can lead to excessive weight gain, so it is
                  important to monitor body condition and growth.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I calculate puppy food by calories or grams?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Calories are usually more accurate because different puppy
                  foods have different calorie density.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do large breed puppies need special calorie control?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Large breed puppies may need careful calorie and growth
                  management to avoid gaining weight too quickly.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}