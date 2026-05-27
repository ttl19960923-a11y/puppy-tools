import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import PuppySleepScheduleByAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Puppy Sleep Schedule By Age | Puppy Sleep Chart & Sleep Hours",
  description:
    "Use this puppy sleep schedule by age to understand sleep hours, nap routines, and puppy sleep patterns.",
};

export default function PuppySleepScheduleByAgePage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Sleep Schedule By Age
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Use this puppy sleep schedule to understand common puppy sleep
            hours, nap patterns, and sleep routines by age. Sleep needs may
            vary depending on breed size, activity level, health, and growth
            stage.
          </p>

          <PuppySleepScheduleByAgeCalculator />

          <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-bold">
              How Puppy Sleep Changes By Age
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually sleep much more than adult dogs because sleep
              helps support growth, learning, brain development, and physical
              recovery.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Younger puppies often alternate between short periods of activity
              and long naps. Older puppies gradually become more active and may
              develop more stable sleep routines.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Sleep Tips
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Young puppies sleep a lot
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Puppies around 8–10 weeks may sleep up to 18–20 hours each
                  day.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Consistent routines help
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Consistent feeding, play, and bedtime schedules may help
                  puppies sleep better.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Exercise affects sleep
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Puppies often sleep better after appropriate exercise and
                  mental stimulation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Breed size may matter
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Activity levels and growth speed may vary between breeds.
                </p>
              </div>

            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Sleep Schedule Chart
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Age</th>
                    <th className="p-4">Sleep Range</th>
                    <th className="p-4">Common Notes</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-t">
                    <td className="p-4">8–10 weeks</td>
                    <td className="p-4">18–20 hours</td>
                    <td className="p-4">
                      Frequent naps and potty breaks
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">3–4 months</td>
                    <td className="p-4">16–18 hours</td>
                    <td className="p-4">
                      More regular naps and sleep routines
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">5–6 months</td>
                    <td className="p-4">14–16 hours</td>
                    <td className="p-4">
                      Longer night sleep and fewer naps
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">12–14 hours</td>
                    <td className="p-4">
                      Sleep patterns become more stable
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Related Puppy Tools
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <a
                href="/puppy-age-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Age Chart
              </a>

              <a
                href="/puppy-feeding-schedule"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Feeding Schedule
              </a>

              <a
                href="/puppy-calorie-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Calorie Calculator
              </a>

              <a
                href="/puppy-growth-chart"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold hover:border-blue-500"
              >
                Puppy Growth Chart
              </a>

            </div>
          </section>

        </section>
      </main>
    </>
  );
}