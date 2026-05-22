import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import PuppyCalorieCalculatorByAge from "./calculator";

export const metadata: Metadata = {
  title: "Puppy Calorie Calculator By Age | Puppy Tools",
  description:
    "Estimate your puppy's daily calorie needs by age, weight, and activity level.",
};

export default function PuppyCalorieCalculatorByAgePage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Calorie Calculator By Age
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your puppy&apos;s daily calorie needs based on age, weight,
            and activity level.
          </p>

          <PuppyCalorieCalculatorByAge />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Calorie Needs By Age
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppy calorie needs change quickly during the first year. Younger
              puppies often need more calories per kilogram because they are
              growing fast.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              As puppies get older, growth usually slows down and calorie needs
              may gradually become closer to adult dog requirements.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Calorie Calculator FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many calories does a puppy need per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It depends on weight, age, breed size, activity level, and
                  growth rate. Younger puppies usually need more calories per
                  kilogram than older puppies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why calculate puppy calories by age?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppy growth speed changes by age, so calorie needs at 2
                  months may be different from calorie needs at 8 or 12 months.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}