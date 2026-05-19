import { Metadata } from "next";
import PuppyWeightPredictor from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Weight Predictor | Puppy Tools",
  description:
    "Estimate your puppy's future adult weight based on current weight and age with our free puppy weight predictor.",
};

export default function PuppyWeightPredictorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Weight Predictor
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your puppy&apos;s future adult weight based on current
            weight and age.
          </p>

          <PuppyWeightPredictor />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Weight Prediction Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies grow at different speeds depending on breed size,
              genetics, nutrition, and health. Small breeds often reach adult
              size earlier than large breeds.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This puppy weight predictor gives a simple estimate by comparing
              current weight and age. It should be used as a general guide only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Weight Predictor FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How accurate is a puppy weight predictor?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It is only a rough estimate. Breed, genetics, diet, and growth
                  stage can all change the final adult weight.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When do puppies reach adult weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small breeds may reach adult weight around 8 to 12 months,
                  while large breeds may continue growing for 18 months or more.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}