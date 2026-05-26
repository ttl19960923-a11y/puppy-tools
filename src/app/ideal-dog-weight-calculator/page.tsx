import { Metadata } from "next";
import IdealDogWeightCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Ideal Dog Weight Calculator | Healthy Dog Weight Range",
  description:
    "Use this ideal dog weight calculator to estimate a healthy dog weight range by breed size, body frame, and body condition.",
};

export default function IdealDogWeightCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Ideal Dog Weight Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this ideal dog weight calculator to estimate a healthy weight
            range for your dog based on breed size, body frame, and body
            condition. Healthy weight can vary between dogs even within the same
            breed category.
          </p>

          <IdealDogWeightCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Ideal Dog Weight Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Healthy dog weight depends on multiple factors including breed
              size, muscle mass, age, body frame, activity level, and overall
              health condition.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator provides a general weight range estimate. It does
              not replace body condition scoring or professional veterinary
              assessment.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Healthy Dog Weight Tips
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Rib feel is important
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  In many healthy dogs, ribs can be felt with light pressure but
                  should not appear sharply visible.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Body frame affects ideal weight
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Dogs with larger frames or more muscle may naturally weigh
                  more while still remaining healthy.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Activity level matters
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Highly active dogs may maintain more muscle and require
                  different calorie intake than low activity dogs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Weight should be monitored regularly
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Tracking body weight and condition over time may help identify
                  unhealthy changes earlier.
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
                href="/dog-bmi-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog BMI Calculator
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
            <h2 className="text-3xl font-bold">
              Ideal Dog Weight FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How do I know my dog&apos;s ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Ideal weight depends on breed, body frame, muscle condition,
                  activity level, and body condition score.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is breed size enough to estimate ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. Breed size gives only a broad estimate. Individual dogs
                  may vary significantly in structure and muscle mass.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can active dogs weigh more?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Dogs with higher muscle mass may naturally weigh more
                  while still maintaining healthy body condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does age affect ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Puppies, adults, and senior dogs may have different body
                  composition and calorie needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I ask a veterinarian about ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. A veterinarian can evaluate body condition, muscle mass,
                  and overall health more accurately than weight alone.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}