import { Metadata } from "next";
import PuppyAgeChartCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Age Chart | Puppy Tools",
  description:
    "Use our puppy age chart to understand common puppy growth, feeding, training, and care stages by age.",
};

export default function PuppyAgeChartPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Age Chart
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Understand common puppy growth, feeding, training, and care stages
            by age.
          </p>

          <PuppyAgeChartCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Age Chart Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies develop quickly during their first year. Their needs can
              change from month to month as they grow, learn, and become more
              independent.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This puppy age chart gives a simple overview of common stages, but
              every puppy develops at a different pace.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Age Chart
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Age</th>
                    <th className="p-4">Stage</th>
                    <th className="p-4">Common Focus</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">2 months</td>
                    <td className="p-4">Early puppy</td>
                    <td className="p-4">Feeding, sleep, early socialization</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3 months</td>
                    <td className="p-4">Young puppy</td>
                    <td className="p-4">Training, teething, play routines</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6 months</td>
                    <td className="p-4">Adolescent puppy</td>
                    <td className="p-4">Exercise, consistency, behavior</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">12 months</td>
                    <td className="p-4">Near adult</td>
                    <td className="p-4">Adult feeding and care transition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Age Chart FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  When is a puppy no longer a puppy?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many puppies are near adult stage around 12 months, but large
                  breeds may continue growing and maturing for longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why does puppy age matter?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppy age affects feeding, training, sleep needs, exercise,
                  growth, and daily care routines.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}