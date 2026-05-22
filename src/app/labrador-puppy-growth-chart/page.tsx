import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import LabradorPuppyGrowthChartCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Labrador Puppy Growth Chart | Puppy Tools",
  description:
    "Use our Labrador puppy growth chart and estimator to understand common growth stages and estimate adult weight.",
};

export default function LabradorPuppyGrowthChartPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Labrador Puppy Growth Chart
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Understand Labrador puppy growth stages and estimate future adult
            weight.
          </p>

          <LabradorPuppyGrowthChartCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Labrador Puppy Growth Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Labrador puppies usually grow quickly during the first several
              months of life. Growth speed may slow as they approach adult size.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Adult size can vary depending on genetics, sex, nutrition, health,
              and activity level. This chart should be used as a general guide
              only.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Labrador Puppy Growth Chart
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Age</th>
                    <th className="p-4">Growth Stage</th>
                    <th className="p-4">Common Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">2 months</td>
                    <td className="p-4">Early growth</td>
                    <td className="p-4">
                      Rapid growth, frequent meals, early training
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3 months</td>
                    <td className="p-4">Rapid growth</td>
                    <td className="p-4">
                      Steady weight gain and high energy needs
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6 months</td>
                    <td className="p-4">Steady growth</td>
                    <td className="p-4">
                      Growth continues, body shape becomes clearer
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">9 months</td>
                    <td className="p-4">Near adult size</td>
                    <td className="p-4">
                      Many Labradors approach adult height and weight
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Labrador Puppy Growth FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  When do Labrador puppies stop growing?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many Labradors approach adult size around 12 to 18 months,
                  though growth can vary by genetics, sex, nutrition, and
                  health.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is this Labrador growth chart exact?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. It is only a general guide. Individual Labrador puppies
                  can grow at different speeds.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}