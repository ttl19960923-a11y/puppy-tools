import { Metadata } from "next";
import IdealDogWeightCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Ideal Dog Weight Calculator | Puppy Tools",
  description:
    "Estimate your dog's ideal weight range based on breed size with our free ideal dog weight calculator.",
};

export default function IdealDogWeightCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Ideal Dog Weight Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your dog&apos;s ideal weight range based on breed size.
          </p>

          <IdealDogWeightCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Ideal Dog Weight Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A healthy dog weight depends on breed, body frame, muscle mass,
              age, activity level, and overall health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Breed size can provide a general starting point, but body
              condition and veterinary assessment are more useful for individual
              dogs.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Ideal Dog Weight FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How do I know my dog&apos;s ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Ideal weight depends on breed, body frame, and body condition.
                  You should be able to feel the ribs without excessive fat
                  covering.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is breed size enough to estimate ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Breed size gives only a broad estimate. Individual dogs can
                  vary significantly in build and healthy weight.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}