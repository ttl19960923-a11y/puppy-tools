import { Metadata } from "next";
import PuppyAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Puppy Age Calculator | Puppy Tools",
  description:
    "Convert puppy age into estimated human years instantly with our free puppy age calculator.",
};

export default function PuppyAgeCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-bold">
          Puppy Age Calculator
        </h1>

        <p className="mt-6 text-center text-lg text-slate-600">
          Convert your puppy&apos;s age into estimated human years instantly.
        </p>

        <PuppyAgeCalculator />

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            How Puppy Age Conversion Works
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Puppies age much faster than humans during their first two years.
            In general, the first year of a dog&apos;s life is roughly equal to
            10.5 human years. After age two, each additional dog year is
            estimated as about four human years.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            This calculator gives a quick estimate and may vary depending on
            breed size, genetics, nutrition, and overall health.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Puppy Age FAQ
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Is one dog year always equal to seven human years?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Not exactly. Puppies grow much faster during their first year,
                so the simple seven-year rule is only a rough estimate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do small and large dogs age differently?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Yes. Larger breeds often mature and age differently from
                smaller breeds, so this calculator should be used as a general
                guide.
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

            <a
              href="/puppy-water-calculator"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                Puppy Water Calculator
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Estimate daily water intake by weight.
              </p>
            </a>

            <a
              href="/puppy-feeding-chart"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                Puppy Feeding Chart
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                View feeding schedules by age and weight.
              </p>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}