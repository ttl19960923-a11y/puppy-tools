import FAQSchema from "./faq-schema";
import { Metadata } from "next";
import DogAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Dog Age Calculator | Convert Dog Years To Human Years",
  description:
    "Use this dog age calculator to convert dog years into estimated human years by age and breed size.",
};

export default function DogAgeCalculatorPage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Age Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog age calculator to convert your dog&apos;s age into
            estimated human years. Dog age conversion can vary by breed size,
            life stage, adult size, genetics, and overall health.
          </p>

          <DogAgeCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How Dog Age Conversion Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Dogs do not age at a simple one-to-seven ratio. They usually age
              faster during their first two years, then aging speed varies by
              breed size and life stage.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Small dogs often live longer than large dogs, while large breeds
              may reach senior stages earlier. This calculator gives a general
              estimate, not an exact biological age.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Age Tips</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  The seven-year rule is too simple
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dogs age faster in early life, so multiplying by seven is only
                  a rough shortcut.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size matters
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Smaller dogs often mature and age differently from large breed
                  dogs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Senior age varies
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Large dogs may enter senior years earlier than small dogs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Health affects aging
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Nutrition, weight, exercise, dental care, and veterinary
                  checkups can influence healthy aging.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Age Chart</h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Dog Age</th>
                    <th className="p-4">Estimated Human Age</th>
                    <th className="p-4">Common Stage</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">1 year</td>
                    <td className="p-4">About 10–15 years</td>
                    <td className="p-4">Young dog</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">2 years</td>
                    <td className="p-4">About 20–24 years</td>
                    <td className="p-4">Young adult</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">5 years</td>
                    <td className="p-4">About 36–45 years</td>
                    <td className="p-4">Adult dog</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">8 years</td>
                    <td className="p-4">About 50–64 years</td>
                    <td className="p-4">Mature or senior stage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Dog Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a
                href="/puppy-age-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Age Calculator
              </a>

              <a
                href="/dog-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Calorie Calculator
              </a>

              <a
                href="/dog-water-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Water Calculator
              </a>

              <a
                href="/dog-weight-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Dog Weight Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Age FAQ</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Is one dog year equal to seven human years?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Not exactly. The seven-year rule is only a rough estimate
                  because dogs age faster in early life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Do different dog breeds age differently?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Smaller breeds often live longer than large breeds, so
                  age conversion can vary by breed size.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  When is a dog considered senior?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Large dogs may become seniors earlier, while small dogs may
                  not be considered senior until later in life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does dog size affect human age conversion?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Breed size and adult body size can affect aging speed and
                  estimated human age.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is dog age conversion exact?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. It is only an estimate. Health, breed, genetics, and care
                  can all affect aging.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}