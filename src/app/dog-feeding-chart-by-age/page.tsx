import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import DogFeedingChartByAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Dog Feeding Chart By Age | Puppy Tools",
  description:
    "Use our dog feeding chart by age to estimate daily food amounts for puppies, adult dogs, and senior dogs.",
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

          <p className="mt-6 text-center text-lg text-slate-600">
            Estimate feeding amounts for puppies, adult dogs, and senior dogs.
          </p>

          <DogFeedingChartByAgeCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Dog Feeding Guide By Age
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A dog&apos;s feeding needs change with age. Puppies usually need
              more frequent meals for growth, while adult and senior dogs may
              need portions adjusted for activity level, body condition, and
              health.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This chart gives a general starting point, but food labels and
              veterinarian guidance should be used for more personalized feeding
              advice.
            </p>
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
                      May need fewer calories if activity level decreases
                    </td>
                  </tr>
                </tbody>
              </table>
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
            </div>
          </section>
        </section>
      </main>
    </>
  );
}