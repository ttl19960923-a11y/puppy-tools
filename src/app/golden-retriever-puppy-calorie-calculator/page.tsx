import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import GoldenRetrieverPuppyCalorieCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Golden Retriever Puppy Calorie Calculator | Puppy Tools",
  description:
    "Estimate your Golden Retriever puppy's daily calorie needs based on age, weight, and activity level.",
};

export default function GoldenRetrieverPuppyCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Golden Retriever Puppy Calorie Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your Golden Retriever puppy&apos;s daily calorie needs.
          </p>

          <GoldenRetrieverPuppyCalorieCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Golden Retriever Puppy Calorie Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Golden Retriever puppies grow quickly and need enough calories to
              support healthy development, play, training, and body condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Calorie needs change as puppies grow. Younger puppies usually need
              more calories per kilogram, while older puppies may gradually move
              closer to adult feeding needs.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Golden Retriever Puppy Calorie FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many calories should a Golden Retriever puppy eat per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It depends on weight, age, activity level, growth rate, and
                  food calorie density. This calculator gives a general estimate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why calculate calories instead of food grams?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Different puppy foods have different calorie density, so
                  calorie estimates are more flexible than a fixed gram amount.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}