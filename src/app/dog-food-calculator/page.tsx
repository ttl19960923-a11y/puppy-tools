import { Metadata } from "next";
import DogFoodCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Food Calculator | Puppy Tools",
  description:
    "Estimate how much dog food to feed your dog each day based on weight and food type.",
};

export default function DogFoodCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Food Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much dog food your dog may need each day based on
            weight and food type.
          </p>

          <DogFoodCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Food Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dog food amounts can vary depending on weight, activity level,
              age, metabolism, health, and food type.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Dry food and wet food often have different calorie density and
              moisture content, so always check the package feeding guide.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Food FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How much dog food should I feed per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  The amount depends on your dog&apos;s weight, activity level,
                  age, metabolism, and the calorie density of the food.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is wet food amount different from dry food?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Wet food usually contains more moisture, so the amount by
                  weight may be higher than dry food.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}