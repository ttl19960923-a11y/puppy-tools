import { Metadata } from "next";
import DogWaterCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Dog Water Calculator | Puppy Tools",
  description:
    "Estimate your dog's daily water intake based on weight with our free dog water calculator.",
};

export default function DogWaterCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-bold">
          Dog Water Calculator
        </h1>

        <p className="mt-6 text-center text-lg text-slate-600">
          Estimate your dog&apos;s daily water intake instantly.
        </p>

        <DogWaterCalculator />

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            How Much Water Does a Dog Need?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Most healthy dogs need around 50–70 ml of water per kilogram of
            body weight each day. Water intake can vary depending on activity
            level, temperature, diet, and overall health.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Dogs eating dry kibble often need more water compared to dogs fed
            wet food diets.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Dog Water FAQ
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                How do I know if my dog is dehydrated?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Signs of dehydration may include dry gums, low energy,
                excessive panting, and loss of skin elasticity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can dogs drink too much water?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Yes. Excessive water consumption can sometimes indicate health
                issues and should be discussed with a veterinarian.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Related Puppy Tools
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="/dog-age-calculator"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                Dog Age Calculator
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Convert dog years into estimated human years.
              </p>
            </a>

            <a
              href="/puppy-water-calculator"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                Puppy Water Calculator
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Estimate puppy water intake by weight.
              </p>
            </a>

            <a
              href="/puppy-feeding-calculator"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                Puppy Feeding Calculator
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Estimate your puppy&apos;s daily food amount.
              </p>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}