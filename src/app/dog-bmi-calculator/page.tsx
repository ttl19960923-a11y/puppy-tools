import { Metadata } from "next";
import DogBMICalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog BMI Calculator | Estimate Dog Body Weight Status",
  description:
    "Use this dog BMI calculator to estimate your dog's body weight status based on weight, height, and body condition. Includes BMI tips, FAQs, and related dog weight tools.",
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

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog BMI calculator to estimate your dog&apos;s body weight
            status based on weight and body size. Dog BMI can be a rough guide,
            but body condition, breed shape, muscle mass, and veterinary
            assessment are still important.
          </p>

          <DogBMICalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Dog BMI Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dog BMI uses weight and body measurements to create a rough body
              weight estimate. However, dogs vary widely by breed, frame size,
              chest depth, leg length, and muscle mass.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator should be used as a general screening tool, not a
              medical diagnosis. Body condition scoring and veterinary advice
              are usually more accurate for individual dogs.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog BMI Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  BMI is only a rough guide
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dog BMI does not perfectly account for breed shape, muscle
                  mass, or body frame.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Check body condition too
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Rib feel, waist shape, and abdominal tuck often provide useful
                  clues about healthy body condition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed shape matters
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A Greyhound, Bulldog, Labrador, and Dachshund can have very
                  different healthy body shapes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Monitor trends over time
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Weight changes over several weeks are often more useful than a
                  single BMI estimate.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Dog Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Weight Calculator
              </a>

              <a
                href="/ideal-dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Ideal Dog Weight Calculator
              </a>

              <a
                href="/dog-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Calorie Calculator
              </a>

              <a
                href="/dog-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Feeding Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog BMI FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Is dog BMI accurate?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Dog BMI is only a rough estimate. Body condition scoring is
                  usually more useful because different breeds have different
                  body shapes.
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

              <div>
                <h3 className="text-xl font-semibold">
                  Is BMI the same as body condition score?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. Body condition score considers rib feel, waist shape, fat
                  coverage, and muscle condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can muscular dogs have a higher BMI?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. More muscular dogs may weigh more without necessarily
                  being overweight.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I use dog BMI for puppies?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppy growth changes quickly, so puppy weight and body
                  condition should be evaluated differently from adult dogs.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}