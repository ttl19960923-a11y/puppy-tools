import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import PitbullFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Pitbull Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Pitbull should eat daily based on weight, age, and activity level.",
};

export default function PitbullFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Pitbull Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Pitbull may need each day.
          </p>

          <PitbullFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Pitbull Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Pitbull-type dogs are often muscular and active, so feeding needs
              can vary depending on body condition, activity level, and food
              quality.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Pitbull puppies usually need more calories for growth, while adult
              Pitbulls may need adjusted portions based on exercise and muscle
              mass.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Pitbull Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Pitbull puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Pitbull puppies often eat three to four meals per day
                  before gradually transitioning to fewer meals as they grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do Pitbulls need more food when active?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Active Pitbulls may need more calories to support energy,
                  movement, and muscle condition.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}