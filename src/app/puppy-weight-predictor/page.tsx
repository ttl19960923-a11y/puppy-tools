import { Metadata } from "next";
import PuppyWeightPredictor from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Weight Predictor | Estimate Adult Dog Weight",
  description:
    "Use this puppy weight predictor to estimate future adult dog weight based on current puppy weight, age, and breed size.",
};

export default function PuppyWeightPredictorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Weight Predictor
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy weight predictor to estimate your puppy&apos;s future
            adult weight based on current weight, age, and breed size. Puppy
            growth can vary significantly depending on genetics, nutrition,
            activity level, and breed type.
          </p>

          <PuppyWeightPredictor />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Weight Predictor Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually gain weight quickly during the first several
              months of life. Small breeds often mature sooner, while large
              breeds may continue growing for over a year.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This tool estimates adult weight using current puppy weight, age,
              and breed size. The result should be treated as a general estimate
              rather than an exact prediction.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Weight Prediction Tips
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size matters
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Small breed puppies often stop growing earlier, while large
                  breeds may continue gaining weight much longer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Growth is not always linear
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Puppies may experience rapid growth during some stages and
                  slower growth during others.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Nutrition affects development
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Balanced puppy nutrition supports healthy muscle, bone, and
                  body condition during growth.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Genetics influence adult size
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Parent size and breed background are often strong indicators
                  of adult weight range.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Growth Chart
              </a>

              <a
                href="/2-month-puppy-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                2 Month Puppy Weight Calculator
              </a>

              <a
                href="/puppy-size-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Size Calculator
              </a>

              <a
                href="/puppy-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Calorie Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Weight Predictor FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How accurate is a puppy weight predictor?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  It is only a rough estimate. Breed, genetics, diet, growth
                  stage, and health can all influence final adult weight.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When do puppies reach adult weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small breeds may reach adult weight around 8 to 12 months,
                  while large breeds may continue growing for 18 months or more.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do large breed puppies grow longer?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Large breed dogs often continue growing longer than small
                  or medium breed dogs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can nutrition affect puppy adult weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Nutrition quality, calorie intake, and feeding balance
                  can all influence healthy growth.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I track puppy weight regularly?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Regular weight tracking can help monitor growth progress and
                  identify unusual changes early.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}