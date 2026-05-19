import { Metadata } from "next";
import PuppyCalorieCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Calorie Calculator | Puppy Tools",
  description:
    "Estimate your puppy's daily calorie needs based on weight and growth stage with our free puppy calorie calculator.",
};

export default function PuppyCalorieCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Calorie Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your puppy&apos;s daily calorie needs based on weight and
            growth stage.
          </p>

          <PuppyCalorieCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Calorie Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies need calories for growth, play, movement, and healthy
              development. Their calorie needs are often higher than adult dogs
              when compared by body weight.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Calorie needs may vary by breed size, age, metabolism, activity
              level, and food quality. Use this result as a general estimate
              only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Calorie FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Do puppies need more calories than adult dogs?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Puppies usually need more calories per kilogram because
                  they are growing quickly and using energy for development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can too many calories make a puppy overweight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Overfeeding can lead to excessive weight gain, so it is
                  important to monitor body condition and growth.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}