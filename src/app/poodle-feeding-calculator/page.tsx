import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import PoodleFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Poodle Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Poodle should eat daily based on weight, age, and activity level.",
};

export default function PoodleFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Poodle Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Poodle may need each day.
          </p>

          <PoodleFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Poodle Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Poodles come in different sizes, including Toy, Miniature, and
              Standard, so feeding needs can vary greatly by body weight and
              activity level.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Poodle puppies usually need more calories for growth, while adult
              Poodles may need adjusted portions based on size, exercise, and
              body condition.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Poodle Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Poodle puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Poodle puppies often eat three to four meals per day
                  before gradually transitioning to fewer meals as they grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do Toy and Standard Poodles eat different amounts?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Toy, Miniature, and Standard Poodles can have very
                  different feeding needs because their body sizes are different.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}