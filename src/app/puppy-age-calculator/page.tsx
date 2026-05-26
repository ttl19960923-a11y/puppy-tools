import { Metadata } from "next";
import PuppyAgeCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Age Calculator | Convert Puppy Age to Human Years",
  description:
    "Use this puppy age calculator to convert puppy age into estimated human years and understand puppy development stages by age.",
};

export default function PuppyAgeCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Age Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy age calculator to convert your puppy&apos;s age into
            estimated human years and understand common puppy development
            stages. Puppy aging can vary by breed size, genetics, nutrition,
            and overall health.
          </p>

          <PuppyAgeCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How Puppy Age Conversion Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies age much faster than humans during their first year. A
              young puppy can go through major physical, behavioral, and growth
              changes within only a few months.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The old seven-year rule is only a rough shortcut. Puppy age
              conversion depends on development stage, breed size, adult size,
              and overall health.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Age Development Stages
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Puppy Age</th>
                    <th className="p-4">Stage</th>
                    <th className="p-4">Common Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">8–12 weeks</td>
                    <td className="p-4">Early puppy stage</td>
                    <td className="p-4">
                      Socialization, training, sleep, and feeding routines begin
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3–6 months</td>
                    <td className="p-4">Rapid growth stage</td>
                    <td className="p-4">
                      Fast growth, teething, play, and basic training
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">Adolescent stage</td>
                    <td className="p-4">
                      Growth slows, behavior changes, and adult size becomes clearer
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">12+ months</td>
                    <td className="p-4">Young adult stage</td>
                    <td className="p-4">
                      Many dogs approach adult routines, though large breeds may keep maturing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Age Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Puppies age quickly early on
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The first year includes rapid growth, training, socialization,
                  and major development milestones.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size affects maturity
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Small breed puppies may mature earlier, while large breed
                  puppies may take longer to reach full adult size.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Age affects feeding needs
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Younger puppies often need more frequent meals, while older
                  puppies may transition toward adult feeding schedules.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Use age as a guide
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Puppy age estimates are helpful, but health, breed, size, and
                  behavior should also be considered.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Puppy Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/puppy-age-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Age Chart
              </a>

              <a
                href="/puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Growth Chart
              </a>

              <a
                href="/puppy-weight-predictor"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Weight Predictor
              </a>

              <a
                href="/puppy-feeding-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Feeding Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Puppy Age FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Is one dog year always equal to seven human years?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. Puppies grow much faster during their first year, so the
                  simple seven-year rule is only a rough estimate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do small and large puppies age differently?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Small breeds often mature earlier, while large breeds may
                  take longer to reach adult size and full maturity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  What is the most important puppy age stage?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Early puppy months are important for socialization, training,
                  feeding routines, and healthy development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When does a puppy become an adult dog?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many dogs become young adults around 12 months, but large
                  breeds may continue maturing for 18 months or longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does puppy age affect feeding?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Younger puppies usually need more frequent meals, while
                  older puppies may gradually move toward adult feeding routines.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}