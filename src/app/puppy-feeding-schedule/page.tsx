import { Metadata } from "next";
import PuppyFeedingScheduleCalculator from "./calculator";
import FAQSchema from "./faq-schema";

export const metadata: Metadata = {
  title: "Puppy Feeding Schedule | Puppy Tools",
  description:
    "Find a simple puppy feeding schedule by age with our free puppy feeding schedule tool.",
};

export default function PuppyFeedingSchedulePage() {
  return (
    <>
      <FAQSchema />

      <main className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-center text-5xl font-bold">
            Puppy Feeding Schedule
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            Find a simple feeding schedule based on your puppy&apos;s age.
          </p>

          <PuppyFeedingScheduleCalculator />

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Feeding Schedule Guide
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Puppies usually need more frequent meals than adult dogs because
              they are growing quickly and have smaller stomachs.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              A consistent feeding routine can help support digestion, potty
              training, and daily behavior patterns.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Puppy Feeding Schedule FAQ
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  How many meals should a puppy eat per day?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Very young puppies often eat three to four meals per day.
                  Older puppies may gradually transition to two meals per day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Is a feeding schedule important for puppies?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Yes. A regular feeding schedule can help with digestion,
                  appetite, and house training routines.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}