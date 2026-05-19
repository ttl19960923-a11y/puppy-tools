import FAQSchema from "./faq-schema";
import { Metadata } from "next";
import DogAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Dog Age Calculator | Puppy Tools",
  description:
    "Convert dog years into human years instantly with our free dog age calculator.",
};

export default function DogAgeCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Age Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Convert your dog&apos;s age into estimated human years instantly.
          </p>

          <DogAgeCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              How Dog Age Conversion Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dogs age faster than humans, especially during the first two years
              of life. In general, the first year of a dog&apos;s life equals
              about 10.5 human years.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              After age two, each additional dog year is estimated as around four
              human years, though this can vary depending on breed and size.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Age FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Is one dog year equal to seven human years?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Not exactly. The seven-year rule is only a rough estimate.
                  Dogs age much faster during their early years.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do different dog breeds age differently?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Smaller breeds often live longer than large breeds, which
                  means aging can vary between dogs.
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
                href="/puppy-age-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">
                  Puppy Age Calculator
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Convert puppy age into estimated human years.
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
            </div>
          </section>
        </section>
      </main>
    </>
  );
}