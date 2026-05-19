import { Metadata } from "next";
import DogDueDateCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Due Date Calculator | Puppy Tools",
  description:
    "Estimate your dog's due date based on the mating date with our free dog due date calculator.",
};

export default function DogDueDateCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Due Date Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your dog&apos;s due date based on the mating date.
          </p>

          <DogDueDateCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Due Date Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A common estimate for dog pregnancy is around 63 days from the
              mating date, though the actual due date can vary slightly.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Breed, litter size, health, and individual condition may affect
              pregnancy timing. Always work with a veterinarian during
              pregnancy.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Due Date FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many days is a dog pregnant?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Dog pregnancy usually lasts around 63 days, but timing can
                  vary by several days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When should I call a veterinarian?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Contact a veterinarian if your dog shows signs of distress,
                  illness, abnormal discharge, or labor complications.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}