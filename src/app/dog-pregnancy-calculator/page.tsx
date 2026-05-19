import { Metadata } from "next";
import DogPregnancyCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Pregnancy Calculator | Puppy Tools",
  description:
    "Estimate your dog's due date with our free dog pregnancy calculator.",
};

export default function DogPregnancyCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Pregnancy Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your dog&apos;s due date based on the mating date.
          </p>

          <DogPregnancyCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Pregnancy Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dog pregnancy usually lasts around 63 days, though the exact
              timing may vary slightly depending on breed and individual health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              During pregnancy, dogs may experience changes in appetite,
              behavior, body shape, and energy levels.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Pregnancy FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How long is a dog pregnant?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Most dog pregnancies last approximately 63 days from mating.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When should I contact a veterinarian?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  You should contact a veterinarian if your dog shows signs of
                  illness, discomfort, or labor complications.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}