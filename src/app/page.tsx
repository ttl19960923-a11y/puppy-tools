import ToolCard from "@/components/tool-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-6 py-20 text-slate-900">
      <section className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold text-blue-600">
          Free Puppy & Dog Tools
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Puppy & Dog Tools for Pet Owners
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Free calculators and charts to help estimate dog feeding, calories,
          water intake, puppy growth, pregnancy timing, weight management, and
          daily pet care needs.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ToolCard href="/puppy-feeding-calculator" title="Puppy Feeding Calculator" description="Estimate how much food your puppy may need each day." />
          <ToolCard href="/dog-feeding-calculator" title="Dog Feeding Calculator" description="Estimate daily food amount by dog weight." />
          <ToolCard href="/dog-food-calculator" title="Dog Food Calculator" description="Estimate daily dog food amount by weight and food type." />

          <ToolCard href="/golden-retriever-feeding-calculator" title="Golden Retriever Feeding Calculator" description="Estimate daily food amount for a Golden Retriever." />
          <ToolCard href="/labrador-feeding-calculator" title="Labrador Feeding Calculator" description="Estimate daily food amount for a Labrador." />
          <ToolCard href="/german-shepherd-feeding-calculator" title="German Shepherd Feeding Calculator" description="Estimate daily food amount for a German Shepherd." />
          <ToolCard href="/husky-feeding-calculator" title="Husky Feeding Calculator" description="Estimate daily food amount for a Husky." />
          <ToolCard href="/pitbull-feeding-calculator" title="Pitbull Feeding Calculator" description="Estimate daily food amount for a Pitbull." />
          <ToolCard href="/french-bulldog-feeding-calculator" title="French Bulldog Feeding Calculator" description="Estimate daily food amount for a French Bulldog." />
          <ToolCard href="/chihuahua-feeding-calculator" title="Chihuahua Feeding Calculator" description="Estimate daily food amount for a Chihuahua." />
          <ToolCard href="/poodle-feeding-calculator" title="Poodle Feeding Calculator" description="Estimate daily food amount for a Poodle." />
          <ToolCard href="/rottweiler-feeding-calculator" title="Rottweiler Feeding Calculator" description="Estimate daily food amount for a Rottweiler." />
          <ToolCard href="/border-collie-feeding-calculator" title="Border Collie Feeding Calculator" description="Estimate daily food amount for a Border Collie." />

          <ToolCard href="/8-week-puppy-feeding-calculator" title="8 Week Puppy Feeding Calculator" description="Estimate food amount for an 8 week old puppy." />
          <ToolCard href="/10-week-puppy-feeding-calculator" title="10 Week Puppy Feeding Calculator" description="Estimate food amount for a 10 week old puppy." />
          <ToolCard href="/3-month-puppy-feeding-calculator" title="3 Month Puppy Feeding Calculator" description="Estimate food amount for a 3 month old puppy." />

          <ToolCard href="/puppy-calorie-calculator" title="Puppy Calorie Calculator" description="Estimate your puppy's daily calorie needs." />
          <ToolCard href="/puppy-calorie-calculator-by-age" title="Puppy Calorie Calculator By Age" description="Estimate puppy calories by age, weight, and activity." />
          <ToolCard href="/golden-retriever-puppy-calorie-calculator" title="Golden Retriever Puppy Calorie Calculator" description="Estimate calorie needs for a Golden Retriever puppy." />
          <ToolCard href="/chihuahua-puppy-calorie-calculator" title="Chihuahua Puppy Calorie Calculator" description="Estimate calorie needs for a Chihuahua puppy." />

          <ToolCard href="/dog-calorie-calculator" title="Dog Calorie Calculator" description="Estimate your dog's daily calorie needs by weight and activity." />
          <ToolCard href="/dog-calorie-chart-by-breed" title="Dog Calorie Chart By Breed" description="View estimated dog calorie needs by breed." />

          <ToolCard href="/puppy-water-calculator" title="Puppy Water Calculator" description="Estimate your puppy's daily water intake by weight." />
          <ToolCard href="/dog-water-calculator" title="Dog Water Calculator" description="Estimate daily water intake by dog weight." />

          <ToolCard href="/puppy-age-calculator" title="Puppy Age Calculator" description="Convert your puppy's age into estimated human years." />
          <ToolCard href="/dog-age-calculator" title="Dog Age Calculator" description="Convert dog years into estimated human years." />
          <ToolCard href="/puppy-age-chart" title="Puppy Age Chart" description="Understand puppy growth and development stages by age." />

          <ToolCard href="/dog-weight-calculator" title="Dog Weight Calculator" description="Check whether your dog may be underweight, healthy, or overweight." />
          <ToolCard href="/dog-bmi-calculator" title="Dog BMI Calculator" description="Estimate your dog's BMI and body condition range." />
          <ToolCard href="/ideal-dog-weight-calculator" title="Ideal Dog Weight Calculator" description="Estimate your dog's ideal healthy weight range." />
          <ToolCard href="/puppy-weight-predictor" title="Puppy Weight Predictor" description="Estimate your puppy's future adult weight." />
          <ToolCard href="/2-month-puppy-weight-calculator" title="2 Month Puppy Weight Calculator" description="Estimate future adult weight from 2 month puppy weight." />
          <ToolCard href="/puppy-size-calculator" title="Puppy Size Calculator" description="Estimate your puppy's future adult size category." />

          <ToolCard href="/puppy-growth-chart" title="Puppy Growth Chart" description="Estimate adult weight and view puppy growth stages." />
          <ToolCard href="/labrador-puppy-growth-chart" title="Labrador Puppy Growth Chart" description="View Labrador puppy growth stages and estimates." />

          <ToolCard href="/puppy-feeding-chart" title="Puppy Feeding Chart" description="View a simple puppy feeding chart by age and weight." />
          <ToolCard href="/dog-feeding-chart-by-age" title="Dog Feeding Chart By Age" description="View feeding guidance for puppies, adults, and senior dogs." />
          <ToolCard href="/puppy-feeding-schedule" title="Puppy Feeding Schedule" description="Find a simple puppy feeding schedule by age." />
          <ToolCard href="/puppy-sleep-schedule-by-age" title="Puppy Sleep Schedule By Age" description="Find a simple puppy sleep schedule by age." />

          <ToolCard href="/dog-pregnancy-calculator" title="Dog Pregnancy Calculator" description="Estimate your dog's pregnancy due date." />
          <ToolCard href="/dog-due-date-calculator" title="Dog Due Date Calculator" description="Estimate your dog's expected due date from mating." />
          <ToolCard href="/dog-heat-cycle-calculator" title="Dog Heat Cycle Calculator" description="Estimate your dog's next heat cycle date." />
        </div>
      </section>
    </main>
  );
}