import { Metadata } from "next";
import PuppyGrowthChartCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Growth Chart | Puppy Tools",
  description:
    "Use our puppy growth chart and adult weight estimator to understand your puppy's growth and development.",
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

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate your puppy&apos;s adult weight and understand common puppy
            growth stages.
          </p>

          <PuppyGrowthChartCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Growth Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies grow quickly during their first year. Small breeds may
              reach adult size earlier, while large breeds often continue
              growing for longer.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Growth depends on breed size, genetics, nutrition, activity
              level, and overall health. This tool gives a simple estimate only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Growth Chart
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
                    <td className="p-4">Fast weight gain and high energy needs</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">4–6 months</td>
                    <td className="p-4">Steady growth</td>
                    <td className="p-4">Body shape and size become clearer</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">Slower growth</td>
                    <td className="p-4">Many puppies approach adult size</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Growth FAQ
            </h2>

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
                  No. It is only a rough estimate. Breed, genetics, diet, and
                  health can all affect adult weight.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}