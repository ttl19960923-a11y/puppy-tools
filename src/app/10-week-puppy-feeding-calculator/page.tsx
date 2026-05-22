import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import TenWeekPuppyFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "10 Week Puppy Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food a 10 week old puppy should eat daily based on weight and breed size.",
};

export default function TenWeekPuppyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            10 Week Puppy Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food a 10 week old puppy may need each day.
          </p>

          <TenWeekPuppyFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              10 Week Puppy Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              At 10 weeks old, puppies are still growing quickly and often need
              multiple meals throughout the day to support development.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Feeding amounts can vary depending on breed size, metabolism,
              activity level, body condition, and puppy food calorie density.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              10 Week Puppy Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a 10 week old puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many 10 week old puppies eat about three to four meals per
                  day, depending on breed and veterinarian guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can overfeeding be harmful for puppies?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Overfeeding may contribute to unhealthy weight gain or
                  digestive problems, so measured portions are important.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}