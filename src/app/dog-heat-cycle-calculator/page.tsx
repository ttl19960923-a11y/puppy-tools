import { Metadata } from "next";
import DogHeatCycleCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Heat Cycle Calculator | Puppy Tools",
  description:
    "Estimate your dog's next heat cycle date based on the last heat start date with our free dog heat cycle calculator.",
};

export default function DogHeatCycleCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Heat Cycle Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your dog&apos;s next heat cycle date based on the last
            heat start date.
          </p>

          <DogHeatCycleCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Heat Cycle Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Many female dogs go into heat about every six months, but this can
              vary depending on breed, size, age, and individual health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              A heat cycle may include changes in behavior, swelling, discharge,
              and increased interest from male dogs. Timing can vary, so this
              calculator should be used as a general guide only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Heat Cycle FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often do dogs go into heat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many dogs go into heat about every six months, but smaller
                  breeds may cycle more often and larger breeds may cycle less
                  often.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is a dog heat cycle calculator exact?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. It gives a general estimate. Individual cycles can vary,
                  and a veterinarian can provide more accurate guidance.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}