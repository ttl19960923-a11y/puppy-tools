import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import TwoMonthPuppyWeightCalculator from "./calculator";

export const metadata: Metadata = {
  title: "2 Month Puppy Weight Calculator | Puppy Tools",
  description:
    "Estimate a 2 month old puppy's future adult weight based on current weight and breed size.",
};

export default function TwoMonthPuppyWeightCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            2 Month Puppy Weight Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate a 2 month old puppy&apos;s future adult weight.
          </p>

          <TwoMonthPuppyWeightCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              2 Month Puppy Weight Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              At 2 months old, puppies are still in an early growth stage.
              Their current weight can give a rough clue about future adult
              size, but it is not a perfect prediction.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Breed size, genetics, nutrition, health, and growth rate all
              affect how much a puppy may weigh as an adult.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              2 Month Puppy Weight FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Is a 2 month puppy weight calculator accurate?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It is only a rough estimate. Puppies can grow at different
                  speeds depending on breed, diet, health, and genetics.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why does breed size matter?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small, medium, and large breed puppies grow at different rates
                  and reach adult size at different ages.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}