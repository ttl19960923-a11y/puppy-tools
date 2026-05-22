import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import ChihuahuaPuppyCalorieCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Chihuahua Puppy Calorie Calculator | Puppy Tools",
  description:
    "Estimate your Chihuahua puppy's daily calorie needs based on age, weight, and activity level.",
};

export default function ChihuahuaPuppyCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Chihuahua Puppy Calorie Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your Chihuahua puppy&apos;s daily calorie needs.
          </p>

          <ChihuahuaPuppyCalorieCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Chihuahua Puppy Calorie Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Chihuahua puppies are very small, so careful calorie and portion
              control is important. Even small extra treats can make a big
              difference in daily intake.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Younger Chihuahua puppies usually need more calories per kilogram
              for growth, while older puppies may gradually move closer to adult
              calorie needs.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Chihuahua Puppy Calorie FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many calories should a Chihuahua puppy eat per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It depends on weight, age, growth rate, activity level, and
                  food calorie density. This calculator gives a general estimate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why are Chihuahua puppy portions so important?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Chihuahua puppies are small, so oversized portions or too many
                  treats can quickly affect daily calorie intake.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}