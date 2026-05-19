import { Metadata } from "next";
import DogBMICalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog BMI Calculator | Puppy Tools",
  description:
    "Estimate your dog's BMI and body weight status with our free dog BMI calculator.",
};

export default function DogBMICalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog BMI Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your dog&apos;s BMI and get a rough body weight status.
          </p>

          <DogBMICalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog BMI Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dog BMI can give a rough idea of body weight status, but it should
              not replace veterinary body condition scoring.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Dogs vary greatly by breed, frame size, muscle mass, and body
              shape, so a simple BMI number should be used only as a general
              guide.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog BMI FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Is dog BMI accurate?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Dog BMI is only a rough estimate. Body condition scoring is
                  usually more useful because different breeds have different
                  shapes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  What should I do if my dog may be overweight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Monitor food portions, activity, treats, and body condition.
                  For a safe weight plan, ask a veterinarian.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}