import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import GermanShepherdFeedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "German Shepherd Feeding Calculator | Puppy Tools",
  description:
    "Estimate how much food your German Shepherd should eat daily based on weight and age.",
};

export default function GermanShepherdFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            German Shepherd Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your German Shepherd may need each day.
          </p>

          <GermanShepherdFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              German Shepherd Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              German Shepherds are large, active dogs that often need balanced
              nutrition to support muscle, energy, and healthy body condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              German Shepherd puppies usually need more calories for growth,
              while adult dogs may need controlled portions based on activity
              level and weight.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              German Shepherd Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should a German Shepherd puppy eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young German Shepherd puppies often eat three to four meals
                  per day before transitioning to fewer meals as they grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do German Shepherds need a high-protein diet?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  German Shepherds need balanced nutrition with enough protein,
                  but exact needs depend on age, activity level, and health.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}