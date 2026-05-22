import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import LabradorFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Labrador Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Labrador should eat daily based on weight and age.",
};

export default function LabradorFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Labrador Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Labrador may need each day.
          </p>

          <LabradorFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Labrador Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Labradors are active, food-motivated dogs that need balanced
              nutrition and careful portion control to maintain a healthy body
              condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Labrador puppies usually need more frequent meals and higher
              calorie intake for growth, while adult Labradors often need
              controlled portions to avoid weight gain.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Labrador Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Labrador puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Labrador puppies often eat three to four meals per day
                  before gradually transitioning to fewer meals as they grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why do Labradors gain weight easily?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Labradors are often very food motivated, so overfeeding and
                  too many treats can quickly lead to weight gain.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}