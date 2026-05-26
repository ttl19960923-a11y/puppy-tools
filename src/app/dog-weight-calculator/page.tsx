import { Metadata } from "next";
import DogWeightCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Dog Weight Calculator | Check Healthy Dog Weight Range",
  description:
    "Use this dog weight calculator to check whether your dog may be underweight, healthy, or overweight based on breed size, weight, and body condition.",
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

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog weight calculator to check whether your dog may be
            underweight, in a healthy range, or overweight. Dog weight status can
            vary by breed size, body structure, age, activity level, and overall
            health.
          </p>

          <DogWeightCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Dog Weight Calculator Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A healthy dog weight is not based on body weight alone. Breed
              size, height, muscle mass, body condition, and activity level can
              all affect whether a dog is at a healthy weight.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator gives a general weight status estimate. It should
              not replace a veterinarian&apos;s body condition assessment,
              especially for puppies, senior dogs, or dogs with health concerns.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Weight Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Check rib feel
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  In many healthy dogs, ribs can be felt with light pressure but
                  should not be sharply visible.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Look for a waist
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A visible waist from above and a slight abdominal tuck from
                  the side often suggest a healthier body condition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Track weight changes
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Sudden weight gain or weight loss may signal changes in diet,
                  activity, metabolism, or health.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Adjust food carefully
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  If your dog needs weight changes, adjust calories gradually
                  and avoid sudden feeding changes.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Dog Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/ideal-dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Ideal Dog Weight Calculator
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
            <h2 className="text-3xl font-bold">Dog Weight FAQ</h2>

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
                  stress, reduced mobility, diabetes, and heart strain.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is dog weight the same as body condition?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. Body condition also considers rib feel, waist shape,
                  muscle mass, and overall body structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can breed size affect healthy weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Small, medium, and large breeds can have very different
                  healthy weight ranges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I ask a vet about my dog&apos;s weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes, especially if your dog gains or loses weight suddenly or
                  has existing health concerns.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}