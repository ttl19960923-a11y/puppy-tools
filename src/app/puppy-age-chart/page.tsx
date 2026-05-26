import { Metadata } from "next";
import PuppyAgeChartCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Age Chart | Puppy Growth & Care Stages By Age",
  description:
    "Use this puppy age chart to understand puppy growth, feeding, sleep, training, teething, and care stages by age.",
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

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy age chart to understand common puppy growth, feeding,
            sleep, training, teething, and care stages. Puppy development can
            vary by breed size, health, nutrition, and personality.
          </p>

          <PuppyAgeChartCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How This Puppy Age Chart Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies develop quickly during their first year. Their feeding
              needs, sleep schedule, training progress, exercise tolerance, and
              behavior can change from month to month.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This chart gives a general overview of common puppy age stages.
              Individual puppies may develop faster or slower depending on breed
              size, genetics, health, and daily routine.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Age Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Age affects feeding
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Younger puppies often need more frequent meals, while older
                  puppies may gradually move toward adult feeding routines.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Sleep changes with age
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Very young puppies sleep a lot, while older puppies may have
                  longer active periods during the day.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Training should match development
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Puppy training is usually easier when expectations match the
                  puppy&apos;s age, attention span, and maturity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size matters
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Small breed puppies often mature earlier, while large breeds
                  may take longer to reach full adult size.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Age Chart By Month
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
                    <td className="p-4">8–10 weeks</td>
                    <td className="p-4">Early puppy</td>
                    <td className="p-4">
                      Feeding, sleep, potty routine, early socialization
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3 months</td>
                    <td className="p-4">Young puppy</td>
                    <td className="p-4">
                      Training, teething, play, and feeding routine
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">4–6 months</td>
                    <td className="p-4">Growing puppy</td>
                    <td className="p-4">
                      Growth, exercise, behavior, and consistency
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">Adolescent puppy</td>
                    <td className="p-4">
                      Training reinforcement, activity, and body changes
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">12+ months</td>
                    <td className="p-4">Young adult</td>
                    <td className="p-4">
                      Adult feeding, care routine, and continued maturity
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
                href="/puppy-age-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Age Calculator
              </a>

              <a
                href="/puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Growth Chart
              </a>

              <a
                href="/puppy-feeding-schedule"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Feeding Schedule
              </a>

              <a
                href="/puppy-sleep-schedule-by-age"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Sleep Schedule By Age
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Age Chart FAQ</h2>

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
                  growth, teething, and daily care routines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  What age do puppies grow the fastest?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many puppies grow fastest during the first several months,
                  though growth speed depends on breed size.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does breed size affect puppy development?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Small breeds may mature earlier, while large breeds may
                  continue growing and developing for longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Can this puppy age chart replace vet advice?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. This chart is a general guide only. A veterinarian can
                  better evaluate individual growth and health.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}