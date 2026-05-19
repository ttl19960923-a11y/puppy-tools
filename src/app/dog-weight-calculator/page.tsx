import { Metadata } from "next";
import DogWeightCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Weight Calculator | Puppy Tools",
  description:
    "Check your dog's weight status based on breed size and body weight with our free dog weight calculator.",
};

export default function DogWeightCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Weight Calculator
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Check whether your dog may be underweight, healthy, or overweight.
          </p>

          <DogWeightCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Weight Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Maintaining a healthy body weight is important for your dog&apos;s
              long-term health, mobility, and energy levels.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Ideal weight ranges vary depending on breed size, age, activity,
              and body structure.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Weight FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How can I tell if my dog is overweight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Overweight dogs may have reduced waist definition, difficulty
                  feeling the ribs, and lower activity levels.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why does dog weight matter?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Maintaining a healthy weight may help reduce the risk of joint
                  problems, diabetes, and heart disease.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}