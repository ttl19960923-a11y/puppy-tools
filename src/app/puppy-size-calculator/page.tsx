import { Metadata } from "next";
import PuppySizeCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Size Calculator | How Big Will My Puppy Get?",
  description:
    "Estimate your puppy's future adult size based on current weight, age, breed size, and growth stage with our free puppy size calculator.",
};

export default function PuppySizeCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Size Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Estimate your puppy&apos;s future adult size based on current weight,
            age, breed size, and growth stage.
          </p>

          <PuppySizeCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How Big Will My Puppy Get?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Predicting adult dog size can be difficult because puppies grow at
              different speeds. Breed size, genetics, nutrition, and growth
              patterns all influence final adult size.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Smaller breeds often reach adult size faster than larger breeds.
              Large and giant breeds may continue growing for 18–24 months.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Size Categories
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Adult Size</th>
                    <th className="p-4">Estimated Weight</th>
                    <th className="p-4">Examples</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Small</td>
                    <td className="p-4">Under 10 kg</td>
                    <td className="p-4">Yorkshire Terrier, Chihuahua</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Medium</td>
                    <td className="p-4">10–25 kg</td>
                    <td className="p-4">Beagle, Border Collie</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Large</td>
                    <td className="p-4">25–45 kg</td>
                    <td className="p-4">Labrador Retriever</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Giant</td>
                    <td className="p-4">45+ kg</td>
                    <td className="p-4">Great Dane, Mastiff</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Size Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppy size can vary widely depending on breed, genetics,
              nutrition, growth rate, and overall health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This calculator gives a simple size estimate using current weight
              and age. It should be used as a general guide only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Related Puppy Tools
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href="/puppy-weight-predictor"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Weight Predictor
              </a>

              <a
                href="/puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Growth Chart
              </a>

              <a
                href="/ideal-dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Ideal Dog Weight Calculator
              </a>

              <a
                href="/puppy-age-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Age Chart
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Size FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  When do puppies reach full size?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small breeds may reach full size around 8 to 12 months, while
                  large breeds may continue growing for 18 months or longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can mixed breed puppies be harder to predict?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Mixed breed puppies can be harder to predict because
                  their adult size depends on multiple genetic factors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  How big will my puppy get?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Adult size depends on current weight, age, breed size,
                  genetics, nutrition, and growth rate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do large breed puppies grow longer?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Large and giant breed puppies often continue growing for
                  longer than small breeds.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}