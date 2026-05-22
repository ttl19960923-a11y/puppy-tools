import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import HuskyFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Husky Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Husky should eat daily based on weight, age, and activity level.",
};

export default function HuskyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Husky Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Husky may need each day.
          </p>

          <HuskyFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Husky Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Huskies are energetic working dogs that may need carefully
              balanced food portions based on activity level, body condition,
              and environment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Husky puppies usually need extra calories for growth, while adult
              Huskies may need adjusted portions depending on exercise and
              metabolism.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Husky Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Husky puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Husky puppies often eat three to four meals per day
                  before gradually transitioning to fewer meals as they grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do Huskies need more food when highly active?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Active Huskies may need more calories, especially if they
                  exercise heavily or spend time in cold climates.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}