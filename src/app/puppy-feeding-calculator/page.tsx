import { Metadata } from "next";
import PuppyFeedingCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Feeding Calculator | Puppy Tools",
  description:
    "Estimate your puppy's daily food amount with our free puppy feeding calculator.",
};

export default function PuppyFeedingCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Feeding Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate how much food your puppy may need each day.
          </p>

          <PuppyFeedingCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Feeding Guide</h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies grow quickly and often need more calories than adult dogs.
              Feeding amounts can vary depending on age, breed size, activity
              level, metabolism, and food quality.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Always check your puppy food label and consult a veterinarian for
              personalized feeding advice.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Feeding FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many times should puppies eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Young puppies often eat three to four meals per day. Older
                  puppies usually transition to two meals per day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can I feed my puppy adult dog food?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppy-specific food is usually recommended because growing
                  puppies need different nutrients than adult dogs.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}