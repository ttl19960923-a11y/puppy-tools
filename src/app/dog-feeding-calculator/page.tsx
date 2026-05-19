import { Metadata } from "next";
import DogFeedingCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Feeding Calculator | Puppy Tools",
  description:
    "Estimate your dog's daily food amount with our free dog feeding calculator.",
};

export default function DogFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your dog may need each day.
          </p>

          <DogFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Feeding Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Adult dogs require balanced nutrition based on body weight,
              activity level, breed size, and metabolism.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Feeding too little may cause weight loss, while overfeeding can
              lead to obesity and other health issues.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Feeding FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How often should adult dogs eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Most adult dogs eat one or two meals per day depending on
                  age, health, and activity level.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can I overfeed my dog?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Overfeeding may lead to obesity and long-term health
                  problems in dogs.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}