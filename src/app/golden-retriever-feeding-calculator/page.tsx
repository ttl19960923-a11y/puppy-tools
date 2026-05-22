import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import GoldenRetrieverFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Golden Retriever Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your Golden Retriever should eat daily based on weight and age.",
};

export default function GoldenRetrieverFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Golden Retriever Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your Golden Retriever may need each day.
          </p>

          <GoldenRetrieverFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Golden Retriever Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Golden Retrievers are active dogs that often require balanced
              nutrition and proper calorie intake to maintain healthy growth and
              body condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually need more frequent meals and higher calorie intake
              compared to adult Golden Retrievers.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Golden Retriever Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a Golden Retriever puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young Golden Retriever puppies often eat three to four meals
                  per day before gradually transitioning to fewer meals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can Golden Retrievers become overweight easily?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Golden Retrievers can gain weight easily if overfed or
                  under-exercised, so portion control is important.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}