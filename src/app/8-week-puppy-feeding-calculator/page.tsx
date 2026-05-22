import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import EightWeekPuppyFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "8 Week Puppy Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food an 8 week old puppy should eat daily based on weight and breed size.",
};

export default function EightWeekPuppyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            8 Week Puppy Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food an 8 week old puppy may need each day.
          </p>

          <EightWeekPuppyFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              8 Week Puppy Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              At 8 weeks old, puppies are usually growing quickly and may need
              several small meals throughout the day.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Food amounts can vary depending on body weight, breed size, food
              quality, activity level, and individual growth rate.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              8 Week Puppy Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should an 8 week old puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many 8 week old puppies eat about four small meals per day,
                  though exact routines can vary by breed and veterinarian
                  guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I measure puppy food carefully?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Measuring portions helps avoid underfeeding or
                  overfeeding during early growth.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}