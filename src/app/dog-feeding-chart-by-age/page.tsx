import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import DogFeedingChartByAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Dog Feeding Chart By Age | Puppy, Adult & Senior Dog Feeding",
  description:
    "Use this dog feeding chart by age to estimate feeding routines, meal frequency, and food amount guidance for puppies, adult dogs, and senior dogs.",
};

export default function DogFeedingChartByAgePage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Dog Feeding Chart By Age
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this dog feeding chart by age to understand common feeding
            routines for puppies, adult dogs, and senior dogs. Feeding needs can
            change with age, weight, activity level, food type, and body
            condition.
          </p>

          <DogFeedingChartByAgeCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How Dog Feeding Changes By Age
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually need more frequent meals to support growth, while
              adult dogs often need stable portions for maintenance. Senior dogs
              may need feeding adjustments if activity level, metabolism, or
              health changes.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This chart is a general starting point. Food labels, calorie
              density, body condition, and veterinarian guidance should be used
              when adjusting portions.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Dog Feeding Tips By Age</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">Puppies need growth support</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Puppies often need more calories per kilogram and more meals
                  per day than adult dogs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">Adult dogs need balance</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Adult feeding should support healthy weight, steady energy,
                  and body condition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">Senior dogs may need adjustment</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Senior dogs may need fewer or different calories depending on
                  activity, muscle condition, and health.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">Food type matters</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dry food, wet food, and mixed diets can have different calorie
                  density and serving sizes.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Feeding Chart By Age
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Age Group</th>
                    <th className="p-4">Meals Per Day</th>
                    <th className="p-4">General Feeding Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Puppy</td>
                    <td className="p-4">3–4 meals</td>
                    <td className="p-4">
                      Higher calorie needs for growth and development
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Adult Dog</td>
                    <td className="p-4">1–2 meals</td>
                    <td className="p-4">
                      Adjust portions based on weight and activity level
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Senior Dog</td>
                    <td className="p-4">1–2 meals</td>
                    <td className="p-4">
                      May need feeding changes if activity or health changes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">Related Dog Tools</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a href="/dog-feeding-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Dog Feeding Calculator
              </a>

              <a href="/dog-food-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Dog Food Calculator
              </a>

              <a href="/dog-calorie-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Dog Calorie Calculator
              </a>

              <a href="/dog-age-calculator" className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500">
                Dog Age Calculator
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Feeding By Age FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Do puppies need more food than adult dogs?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppies often need more calories per kilogram because they are
                  growing quickly and developing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should senior dogs eat less?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Some senior dogs need fewer calories if they are less active,
                  but health, weight, and body condition should guide feeding
                  decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  How many meals should adult dogs eat?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Many adult dogs eat one to two meals per day depending on
                  routine, digestion, activity, and health.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Does dog food amount change with age?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Food amount may change as dogs move from puppy growth to
                  adult maintenance and senior care.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Should I follow a dog feeding chart exactly?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. A feeding chart is only a starting point. Adjust based on
                  food labels, body condition, and veterinarian guidance.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}