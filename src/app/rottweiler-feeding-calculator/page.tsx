import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import RottweilerFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Rottweiler Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Rottweiler should eat daily based on weight, age, and activity level.",
};

export default function RottweilerFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Rottweiler Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Rottweiler may need each day.
          </p>

          <RottweilerFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Rottweiler Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Rottweilers are large, strong dogs that often need balanced
              nutrition to support muscle, growth, energy, and healthy body
              condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Rottweiler puppies usually need enough calories for growth, while
              adult Rottweilers may need carefully measured portions to avoid
              excess weight gain.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Rottweiler Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Rottweiler puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Rottweiler puppies often eat three to four meals per day
                  before gradually transitioning to fewer meals as they mature.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can Rottweilers become overweight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Rottweilers can gain excess weight if overfed or not
                  exercised enough, so portion control is important.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}