import { Metadata } from "next";
import DogCalorieCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Calorie Calculator | Puppy Tools",
  description:
    "Estimate your dog's daily calorie needs based on weight and activity level with our free dog calorie calculator.",
};

export default function DogCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Calorie Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your dog&apos;s daily calorie needs based on weight and
            activity level.
          </p>

          <DogCalorieCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Calorie Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dogs need calories for energy, growth, movement, and maintaining
              healthy body functions. Daily calorie needs can vary based on
              size, activity level, metabolism, age, and overall health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator provides a general estimate only. Always check
              your dog food label and ask a veterinarian for personalized
              feeding advice.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Calorie FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many calories should my dog eat per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It depends on body weight, activity level, age, breed, and
                  health. Active dogs generally need more calories than less
                  active dogs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can too many calories make my dog overweight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Consistently eating more calories than needed can lead
                  to weight gain and obesity.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}