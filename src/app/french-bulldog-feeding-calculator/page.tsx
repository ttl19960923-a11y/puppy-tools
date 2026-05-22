import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import FrenchBulldogFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "French Bulldog Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your French Bulldog should eat daily based on weight, age, and activity level.",
};

export default function FrenchBulldogFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            French Bulldog Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your French Bulldog may need each day.
          </p>

          <FrenchBulldogFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              French Bulldog Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              French Bulldogs are small, sturdy dogs that often need careful
              portion control to maintain a healthy body condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              French Bulldog puppies need enough calories for growth, while
              adults may need controlled portions because they can gain weight
              easily.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              French Bulldog Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a French Bulldog puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young French Bulldog puppies often eat three to four meals per
                  day before gradually transitioning to fewer meals as they grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why do French Bulldogs need portion control?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  French Bulldogs can gain weight easily, so consistent feeding
                  amounts, limited treats, and regular activity are important.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}