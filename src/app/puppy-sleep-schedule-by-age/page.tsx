import { Metadata } from "next";
import FAQSchema from "./faq-schema";
import PuppySleepScheduleByAgeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Puppy Sleep Schedule By Age | Puppy Tools",
  description:
    "Find a simple puppy sleep schedule by age, including sleep ranges for young puppies and older puppies.",
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

          <p className="mt-6 text-center text-lg text-slate-600">
            Find a simple puppy sleep schedule based on your puppy&apos;s age.
          </p>

          <PuppySleepScheduleByAgeCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Sleep Guide By Age
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies need plenty of sleep to support growth, learning, immune
              health, and daily recovery. Younger puppies usually sleep more
              than older puppies.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              A consistent sleep routine can help puppies feel secure and may
              make potty training and daily schedules easier.
            </p>
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
                      More regular naps and night routine
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">5–6 months</td>
                    <td className="p-4">14–16 hours</td>
                    <td className="p-4">
                      Fewer naps and longer nighttime sleep
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">6–12 months</td>
                    <td className="p-4">12–14 hours</td>
                    <td className="p-4">
                      Sleep needs depend on breed and activity
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Sleep Schedule FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many hours should a puppy sleep?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Younger puppies may sleep 18 to 20 hours per day, while older
                  puppies may gradually need less sleep.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Why does my puppy sleep so much?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Puppies sleep a lot because they are growing, learning, and
                  recovering from active play and training.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}