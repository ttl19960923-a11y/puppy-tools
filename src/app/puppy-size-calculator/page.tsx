import { Metadata } from "next";
import PuppySizeCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Size Calculator | Puppy Tools",
  description:
    "Estimate your puppy's future adult size based on current weight and age with our free puppy size calculator.",
};

export default function PuppySizeCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Size Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your puppy&apos;s future adult size based on current weight
            and age.
          </p>

          <PuppySizeCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Size Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppy size can vary widely depending on breed, genetics,
              nutrition, growth rate, and overall health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator gives a simple size estimate using current weight
              and age. It should be used as a general guide only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Size FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  When do puppies reach full size?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small breeds may reach full size around 8 to 12 months, while
                  large breeds may continue growing for 18 months or longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can mixed breed puppies be harder to predict?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Mixed breed puppies can be harder to predict because
                  their adult size depends on multiple genetic factors.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}