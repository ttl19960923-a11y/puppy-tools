import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import ThreeMonthPuppyFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "3 Month Puppy Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food a 3 month old puppy should eat daily based on weight, breed size, and activity level.",
};

export default function ThreeMonthPuppyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            3 Month Puppy Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food a 3 month old puppy may need each day.
          </p>

          <ThreeMonthPuppyFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              3 Month Puppy Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              At 3 months old, puppies are usually growing quickly and need
              balanced meals that support energy, development, and healthy body
              condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Most puppies at this age eat multiple meals per day, and food
              amounts can vary depending on breed size, body weight, activity,
              and the calorie density of the puppy food.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              3 Month Puppy Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a 3 month old puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many 3 month old puppies eat about three meals per day, though
                  exact routines can vary by breed, size, and veterinarian
                  guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can a 3 month old puppy eat adult dog food?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppy food is usually recommended because growing puppies need
                  nutrients that support healthy development.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}