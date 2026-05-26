import { Metadata } from "next";
import PuppyGrowthChartCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Growth Chart | Puppy Weight & Adult Size Estimator",
  description:
    "Use this puppy growth chart to estimate adult weight, understand puppy growth stages, and compare growth by age, breed size, and current weight.",
};

export default function PuppyGrowthChartPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Growth Chart
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy growth chart to estimate your puppy&apos;s future
            adult weight and understand common growth stages. Puppy growth can
            vary by breed size, age, genetics, nutrition, and overall health.
          </p>

          <PuppyGrowthChartCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Growth Chart Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies grow at different speeds depending on whether they are
              small, medium, or large breed dogs. Small breeds often reach adult
              size earlier, while large breeds may continue growing for much
              longer.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This chart and estimator use your puppy&apos;s current age, weight,
              and breed size to provide a rough adult weight estimate. It should
              be used as a general guide, not an exact prediction.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Growth Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size changes growth speed
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Small breed puppies often mature sooner, while large breed
                  puppies may keep growing for 12 to 18 months or longer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Track weight over time
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A single weight measurement gives only a rough estimate.
                  Tracking growth over several weeks is more useful.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Nutrition affects growth
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Balanced puppy food helps support steady growth. Overfeeding
                  or underfeeding may affect body condition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Genetics still matter most
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Parent size, breed type, and genetics strongly influence a
                  puppy&apos;s final adult weight.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Growth Chart By Age
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Age</th>
                    <th className="p-4">Growth Stage</th>
                    <th className="p-4">Typical Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">2–3 months</td>
                    <td className="p-4">Rapid growth</td>
                    <td className="p-4">
                      Fast weight gain, frequent meals, high energy needs
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">4–6 months</td>
                    <td className="p-4">Steady growth</td>
                    <td className="p-4">
                      Body shape becomes clearer and growth remains active
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">Slower growth</td>
                    <td className="p-4">
                      Many puppies approach adult height or weight range
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">12–18 months</td>
                    <td className="p-4">Final development</td>
                    <td className="p-4">
                      Large breeds may continue filling out and gaining muscle
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/puppy-weight-predictor"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Weight Predictor
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
                href="/labrador-puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Labrador Puppy Growth Chart
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Growth FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  When do puppies stop growing?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small breeds may stop growing around 8 to 12 months, while
                  large breeds may continue growing for 18 months or longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is this adult weight estimate exact?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. It is only a rough estimate. Breed, genetics, diet,
                  health, and growth rate can all affect adult weight.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do small puppies grow faster than large puppies?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Small breed puppies often reach adult size earlier, while
                  large breed puppies may grow for a longer period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  How often should I weigh my puppy?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Weighing your puppy every few weeks can help track growth and
                  notice unusual changes early.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  What affects puppy growth the most?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Breed, genetics, nutrition, activity level, health, and parent
                  size can all affect puppy growth.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}