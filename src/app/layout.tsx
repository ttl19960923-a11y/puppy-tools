import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puppy Tools | Free Dog & Puppy Calculators",
  description:
    "Free dog and puppy calculators for feeding, calories, water intake, age conversion, pregnancy due dates, growth charts, weight prediction, and pet care tools.",
  keywords: [
    "puppy feeding calculator",
    "dog feeding calculator",
    "dog food calculator",
    "dog calorie calculator",
    "dog bmi calculator",
    "ideal dog weight calculator",
    "puppy weight predictor",
    "puppy size calculator",
    "puppy feeding schedule",
    "puppy age chart",
    "dog age calculator",
    "dog water calculator",
    "dog pregnancy calculator",
    "dog heat cycle calculator",
    "dog due date calculator",
    "puppy growth chart",
    "puppy tools",
    "dog tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold text-slate-900">
              Puppy Tools
            </a>

            <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
              <a
                href="/puppy-feeding-calculator"
                className="hover:text-blue-600"
              >
                Puppy Feeding
              </a>

              <a
                href="/dog-food-calculator"
                className="hover:text-blue-600"
              >
                Dog Food
              </a>

              <a
                href="/dog-calorie-calculator"
                className="hover:text-blue-600"
              >
                Dog Calories
              </a>

              <a
                href="/dog-bmi-calculator"
                className="hover:text-blue-600"
              >
                Dog BMI
              </a>

              <a
                href="/puppy-weight-predictor"
                className="hover:text-blue-600"
              >
                Puppy Weight
              </a>

              <a
                href="/dog-pregnancy-calculator"
                className="hover:text-blue-600"
              >
                Dog Pregnancy
              </a>

              <a
                href="/dog-heat-cycle-calculator"
                className="hover:text-blue-600"
              >
                Heat Cycle
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-10 md:grid-cols-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Puppy Tools
                </h3>

                <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
                  Free puppy and dog calculators for feeding, calories, water
                  intake, age conversion, pregnancy timing, growth charts,
                  weight prediction, and daily pet care needs.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Puppy Tools
                </h4>

                <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                  <a href="/puppy-feeding-calculator">
                    Puppy Feeding Calculator
                  </a>

                  <a href="/puppy-calorie-calculator">
                    Puppy Calorie Calculator
                  </a>

                  <a href="/puppy-water-calculator">
                    Puppy Water Calculator
                  </a>

                  <a href="/puppy-age-calculator">
                    Puppy Age Calculator
                  </a>

                  <a href="/puppy-age-chart">
                    Puppy Age Chart
                  </a>

                  <a href="/puppy-growth-chart">
                    Puppy Growth Chart
                  </a>

                  <a href="/puppy-size-calculator">
                    Puppy Size Calculator
                  </a>

                  <a href="/puppy-weight-predictor">
                    Puppy Weight Predictor
                  </a>

                  <a href="/puppy-feeding-chart">
                    Puppy Feeding Chart
                  </a>

                  <a href="/puppy-feeding-schedule">
                    Puppy Feeding Schedule
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Dog Health Tools
                </h4>

                <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                  <a href="/dog-feeding-calculator">
                    Dog Feeding Calculator
                  </a>

                  <a href="/dog-food-calculator">
                    Dog Food Calculator
                  </a>

                  <a href="/dog-calorie-calculator">
                    Dog Calorie Calculator
                  </a>

                  <a href="/dog-weight-calculator">
                    Dog Weight Calculator
                  </a>

                  <a href="/dog-bmi-calculator">
                    Dog BMI Calculator
                  </a>

                  <a href="/ideal-dog-weight-calculator">
                    Ideal Dog Weight Calculator
                  </a>

                  <a href="/dog-age-calculator">
                    Dog Age Calculator
                  </a>

                  <a href="/dog-water-calculator">
                    Dog Water Calculator
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Dog Pregnancy Tools
                </h4>

                <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                  <a href="/dog-pregnancy-calculator">
                    Dog Pregnancy Calculator
                  </a>

                  <a href="/dog-due-date-calculator">
                    Dog Due Date Calculator
                  </a>

                  <a href="/dog-heat-cycle-calculator">
                    Dog Heat Cycle Calculator
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
              © 2026 Puppy Tools. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}