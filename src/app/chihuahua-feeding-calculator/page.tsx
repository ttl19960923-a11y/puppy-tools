import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import ChihuahuaFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Chihuahua Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Chihuahua should eat daily based on weight, age, and activity level.",
};

export default function ChihuahuaFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Chihuahua Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Chihuahua may need each day.
          </p>

          <ChihuahuaFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Chihuahua Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Chihuahuas are small dogs, so feeding portions need to be measured
              carefully. Small changes in treats or meal size can affect weight.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Chihuahua puppies often need more calories per kilogram for growth,
              while adult Chihuahuas may need controlled portions to maintain a
              healthy body condition.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Chihuahua Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Chihuahua puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Chihuahua puppies may need several small meals per day
                  because of their small body size and growth needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why is portion control important for Chihuahuas?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Chihuahuas are small, so extra treats or oversized portions can
                  quickly increase daily calorie intake.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}