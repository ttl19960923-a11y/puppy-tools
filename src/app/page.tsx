"use client";

import { useMemo, useState } from "react";
import ToolCard from "@/components/tool-card";

const toolSections = [
  {
    title: "Feeding Tools",
    description: "General feeding calculators and food amount tools.",
    tools: [
      {
        href: "/puppy-feeding-calculator",
        title: "Puppy Feeding Calculator",
        description: "Estimate how much food your puppy may need each day.",
        icon: "🍼",
      },
      {
        href: "/dog-feeding-calculator",
        title: "Dog Feeding Calculator",
        description: "Estimate daily food amount by dog weight.",
        icon: "🍖",
      },
      {
        href: "/dog-food-calculator",
        title: "Dog Food Calculator",
        description: "Estimate daily dog food amount by weight and food type.",
        icon: "🥣",
      },
      {
        href: "/8-week-puppy-feeding-calculator",
        title: "8 Week Puppy Feeding Calculator",
        description: "Estimate food amount for an 8 week old puppy.",
        icon: "🍼",
      },
      {
        href: "/10-week-puppy-feeding-calculator",
        title: "10 Week Puppy Feeding Calculator",
        description: "Estimate food amount for a 10 week old puppy.",
        icon: "🍼",
      },
      {
        href: "/3-month-puppy-feeding-calculator",
        title: "3 Month Puppy Feeding Calculator",
        description: "Estimate food amount for a 3 month old puppy.",
        icon: "🍼",
      },
    ],
  },
  {
    title: "Breed Feeding Tools",
    description: "Breed-specific dog feeding calculators.",
    tools: [
      {
        href: "/golden-retriever-feeding-calculator",
        title: "Golden Retriever Feeding Calculator",
        description: "Estimate daily food amount for a Golden Retriever.",
        icon: "🐕",
      },
      {
        href: "/labrador-feeding-calculator",
        title: "Labrador Feeding Calculator",
        description: "Estimate daily food amount for a Labrador.",
        icon: "🐕‍🦺",
      },
      {
        href: "/german-shepherd-feeding-calculator",
        title: "German Shepherd Feeding Calculator",
        description: "Estimate daily food amount for a German Shepherd.",
        icon: "🐕",
      },
      {
        href: "/husky-feeding-calculator",
        title: "Husky Feeding Calculator",
        description: "Estimate daily food amount for a Husky.",
        icon: "🐺",
      },
      {
        href: "/pitbull-feeding-calculator",
        title: "Pitbull Feeding Calculator",
        description: "Estimate daily food amount for a Pitbull.",
        icon: "🐶",
      },
      {
        href: "/french-bulldog-feeding-calculator",
        title: "French Bulldog Feeding Calculator",
        description: "Estimate daily food amount for a French Bulldog.",
        icon: "🐾",
      },
      {
        href: "/chihuahua-feeding-calculator",
        title: "Chihuahua Feeding Calculator",
        description: "Estimate daily food amount for a Chihuahua.",
        icon: "🐶",
      },
      {
        href: "/poodle-feeding-calculator",
        title: "Poodle Feeding Calculator",
        description: "Estimate daily food amount for a Poodle.",
        icon: "🐩",
      },
      {
        href: "/rottweiler-feeding-calculator",
        title: "Rottweiler Feeding Calculator",
        description: "Estimate daily food amount for a Rottweiler.",
        icon: "🐕",
      },
      {
        href: "/border-collie-feeding-calculator",
        title: "Border Collie Feeding Calculator",
        description: "Estimate daily food amount for a Border Collie.",
        icon: "🐕‍🦺",
      },
    ],
  },
  {
    title: "Calorie Tools",
    description: "Estimate puppy and dog calorie needs.",
    tools: [
      {
        href: "/puppy-calorie-calculator",
        title: "Puppy Calorie Calculator",
        description: "Estimate your puppy's daily calorie needs.",
        icon: "🔥",
      },
      {
        href: "/puppy-calorie-calculator-by-age",
        title: "Puppy Calorie Calculator By Age",
        description: "Estimate puppy calories by age, weight, and activity.",
        icon: "🔥",
      },
      {
        href: "/golden-retriever-puppy-calorie-calculator",
        title: "Golden Retriever Puppy Calorie Calculator",
        description: "Estimate calorie needs for a Golden Retriever puppy.",
        icon: "🔥",
      },
      {
        href: "/chihuahua-puppy-calorie-calculator",
        title: "Chihuahua Puppy Calorie Calculator",
        description: "Estimate calorie needs for a Chihuahua puppy.",
        icon: "🔥",
      },
      {
        href: "/dog-calorie-calculator",
        title: "Dog Calorie Calculator",
        description: "Estimate your dog's daily calorie needs by weight and activity.",
        icon: "🔥",
      },
      {
        href: "/dog-calorie-chart-by-breed",
        title: "Dog Calorie Chart By Breed",
        description: "View estimated dog calorie needs by breed.",
        icon: "📊",
      },
    ],
  },
  {
    title: "Water, Age & Growth Tools",
    description: "Water intake, age conversion, puppy growth, and weight tools.",
    tools: [
      {
        href: "/puppy-water-calculator",
        title: "Puppy Water Calculator",
        description: "Estimate your puppy's daily water intake by weight.",
        icon: "💧",
      },
      {
        href: "/dog-water-calculator",
        title: "Dog Water Calculator",
        description: "Estimate daily water intake by dog weight.",
        icon: "💧",
      },
      {
        href: "/puppy-age-calculator",
        title: "Puppy Age Calculator",
        description: "Convert your puppy's age into estimated human years.",
        icon: "📅",
      },
      {
        href: "/dog-age-calculator",
        title: "Dog Age Calculator",
        description: "Convert dog years into estimated human years.",
        icon: "📅",
      },
      {
        href: "/puppy-age-chart",
        title: "Puppy Age Chart",
        description: "Understand puppy growth and development stages by age.",
        icon: "📈",
      },
      {
        href: "/dog-weight-calculator",
        title: "Dog Weight Calculator",
        description: "Check whether your dog may be underweight, healthy, or overweight.",
        icon: "⚖️",
      },
      {
        href: "/dog-bmi-calculator",
        title: "Dog BMI Calculator",
        description: "Estimate your dog's BMI and body condition range.",
        icon: "⚖️",
      },
      {
        href: "/ideal-dog-weight-calculator",
        title: "Ideal Dog Weight Calculator",
        description: "Estimate your dog's ideal healthy weight range.",
        icon: "🎯",
      },
      {
        href: "/puppy-weight-predictor",
        title: "Puppy Weight Predictor",
        description: "Estimate your puppy's future adult weight.",
        icon: "📈",
      },
      {
        href: "/2-month-puppy-weight-calculator",
        title: "2 Month Puppy Weight Calculator",
        description: "Estimate future adult weight from 2 month puppy weight.",
        icon: "⚖️",
      },
      {
        href: "/puppy-size-calculator",
        title: "Puppy Size Calculator",
        description: "Estimate your puppy's future adult size category.",
        icon: "📏",
      },
      {
        href: "/puppy-growth-chart",
        title: "Puppy Growth Chart",
        description: "Estimate adult weight and view puppy growth stages.",
        icon: "📈",
      },
      {
        href: "/labrador-puppy-growth-chart",
        title: "Labrador Puppy Growth Chart",
        description: "View Labrador puppy growth stages and estimates.",
        icon: "📈",
      },
    ],
  },
  {
    title: "Charts & Schedules",
    description: "Feeding charts, schedules, and routine tools.",
    tools: [
      {
        href: "/puppy-feeding-chart",
        title: "Puppy Feeding Chart",
        description: "View a simple puppy feeding chart by age and weight.",
        icon: "📋",
      },
      {
        href: "/dog-feeding-chart-by-age",
        title: "Dog Feeding Chart By Age",
        description: "View feeding guidance for puppies, adults, and senior dogs.",
        icon: "📋",
      },
      {
        href: "/puppy-feeding-schedule",
        title: "Puppy Feeding Schedule",
        description: "Find a simple puppy feeding schedule by age.",
        icon: "⏰",
      },
      {
        href: "/puppy-sleep-schedule-by-age",
        title: "Puppy Sleep Schedule By Age",
        description: "Find a simple puppy sleep schedule by age.",
        icon: "😴",
      },
    ],
  },
  {
    title: "Pregnancy Tools",
    description: "Dog pregnancy, due date, and heat cycle calculators.",
    tools: [
      {
        href: "/dog-pregnancy-calculator",
        title: "Dog Pregnancy Calculator",
        description: "Estimate your dog's pregnancy due date.",
        icon: "🐣",
      },
      {
        href: "/dog-due-date-calculator",
        title: "Dog Due Date Calculator",
        description: "Estimate your dog's expected due date from mating.",
        icon: "📅",
      },
      {
        href: "/dog-heat-cycle-calculator",
        title: "Dog Heat Cycle Calculator",
        description: "Estimate your dog's next heat cycle date.",
        icon: "♨️",
      },
    ],
  },
];

const allTools = toolSections.flatMap((section) => section.tools);

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) {
      return toolSections;
    }

    return toolSections
      .map((section) => {
        const filteredTools = section.tools.filter((tool) => {
          return (
            tool.title.toLowerCase().includes(keyword) ||
            tool.description.toLowerCase().includes(keyword) ||
            tool.href.toLowerCase().includes(keyword) ||
            section.title.toLowerCase().includes(keyword)
          );
        });

        return {
          ...section,
          tools: filteredTools,
        };
      })
      .filter((section) => section.tools.length > 0);
  }, [search]);

  const visibleToolCount = filteredSections.reduce((total, section) => {
    return total + section.tools.length;
  }, 0);

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-12 text-slate-900">
      <section className="mx-auto max-w-[1600px] text-center">
        <p className="text-sm font-semibold text-blue-600">
          Free Puppy & Dog Tools
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Puppy & Dog Tools for Pet Owners
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Free calculators and charts to help estimate dog feeding, calories,
          water intake, puppy growth, pregnancy timing, weight management, and
          daily pet care needs.
        </p>

        <div className="mx-auto mt-8 max-w-2xl">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools, breeds, feeding, calories, puppy age..."
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <p className="mt-3 text-sm text-slate-500">
            Showing {visibleToolCount} of {allTools.length} tools
          </p>
        </div>

        <div className="mt-14 space-y-16 text-left">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <section key={section.title}>
                <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {section.title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {section.description}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-slate-500">
                    {section.tools.length} tools
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                  {section.tools.map((tool) => (
                    <ToolCard
                      key={tool.href}
                      href={tool.href}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-lg font-semibold text-slate-900">
                No tools found
              </p>

              <p className="mt-2 text-slate-500">
                Try searching for feeding, calories, puppy, breed, weight, or
                pregnancy.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}