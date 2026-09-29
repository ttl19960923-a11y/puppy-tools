"use client";

import { useMemo, useState } from "react";

type AgeKey = "8-weeks" | "10-weeks" | "3-months" | "4-months" | "5-months" | "6-months" | "9-months" | "12-months";

type AgeProfile = {
  label: string;
  pattern: string;
  napGuidance: string;
  awakeGuidance: string;
  nightGuidance: string;
  resultSummary: string;
  activeMinutes: number;
  napMinutes: number;
};

const profiles: Record<AgeKey, AgeProfile> = {
  "8-weeks": { label: "8 weeks", pattern: "Very high sleep needs with frequent daytime naps", napGuidance: "Offer frequent quiet nap opportunities throughout the day.", awakeGuidance: "Keep awake periods short and low-pressure; follow your puppy's sleepy cues rather than a stopwatch.", nightGuidance: "Nighttime potty interruptions are normal for very young puppies.", resultSummary: "At this very young stage, build the day around frequent chances to sleep between meals, potty trips, gentle play, and short socialization. Let your puppy’s behavior guide how long each rest period lasts.", activeMinutes: 45, napMinutes: 105 },
  "10-weeks": { label: "10 weeks", pattern: "Frequent naps between short periods of activity", napGuidance: "Several daytime naps are normal, often after play, training, meals, or exploration.", awakeGuidance: "Short activity blocks with plenty of recovery time usually work better than long busy stretches.", nightGuidance: "A consistent bedtime helps, but some puppies still need overnight potty breaks.", resultSummary: "Frequent sleep opportunities still shape much of the day. Alternate short, manageable activity with quiet recovery time instead of trying to keep your puppy awake until a fixed nap time.", activeMinutes: 50, napMinutes: 100 },
  "3-months": { label: "3 months", pattern: "Lots of sleep with a more predictable daily rhythm", napGuidance: "Plan regular quiet periods after activity and let nap length vary naturally.", awakeGuidance: "Alternate play, training, meals, and potty trips with calm rest periods.", nightGuidance: "Bedtime can become more consistent, though overnight potty needs vary.", resultSummary: "A more predictable rhythm can start to emerge, but regular daytime rest is still important. Use meals, potty trips, play, and short training sessions as natural anchors around flexible nap periods.", activeMinutes: 60, napMinutes: 90 },
  "4-months": { label: "4 months", pattern: "Regular naps with gradually longer active periods", napGuidance: "Keep several rest opportunities in the day, especially after stimulating activity.", awakeGuidance: "Your puppy may stay engaged longer, but overtired behavior is still a cue to wind down.", nightGuidance: "Many puppies settle into a steadier night routine, but individual bladder capacity varies.", resultSummary: "Active periods may gradually become longer, while regular naps and recovery remain useful. Watch for tired or overstimulated behavior rather than treating an awake-window number as a rule.", activeMinutes: 75, napMinutes: 90 },
  "5-months": { label: "5 months", pattern: "A developing adolescent rhythm with regular rest", napGuidance: "Daytime rest still matters even when your puppy seems eager to stay busy.", awakeGuidance: "Use behavior and energy level to decide when to switch from activity to quiet time.", nightGuidance: "Keep bedtime and morning routines reasonably consistent.", resultSummary: "Your puppy may handle longer stretches of activity, but downtime still matters. Keep rest available after walks, training, play, and other stimulating parts of the day.", activeMinutes: 90, napMinutes: 75 },
  "6-months": { label: "6 months", pattern: "More mature sleep pattern, with daytime naps still common", napGuidance: "Build in calm recovery periods after walks, training, and play.", awakeGuidance: "Longer active blocks may be comfortable, but age, breed, and activity level matter.", nightGuidance: "Night sleep is often more consolidated by this stage, though routines still vary.", resultSummary: "Sleep needs vary by puppy. At this stage, focus on a consistent nighttime routine, regular daytime rest, and recovery after activity rather than trying to hit an exact hourly sleep target.", activeMinutes: 105, napMinutes: 75 },
  "9-months": { label: "9 months", pattern: "Adolescent sleep pattern with individual variation", napGuidance: "Some puppies nap often; others prefer fewer, longer rest periods.", awakeGuidance: "Balance exercise and enrichment with deliberate downtime so an energetic adolescent can settle.", nightGuidance: "A stable evening routine can help reinforce nighttime rest.", resultSummary: "Adolescent routines can differ substantially between puppies. Balance exercise and enrichment with deliberate downtime, and use your puppy’s normal energy and settling behavior to shape the day.", activeMinutes: 120, napMinutes: 60 },
  "12-months": { label: "12 months", pattern: "Moving toward an adult routine", napGuidance: "Regular daytime naps or quiet rest remain normal.", awakeGuidance: "Adjust the routine to breed, activity, household schedule, and your dog's individual behavior.", nightGuidance: "Most of the routine can now resemble an adult dog's schedule, while still allowing daytime rest.", resultSummary: "The daily rhythm may now look more like an adult dog’s routine. Keep daytime rest available and adjust activity and recovery to breed, lifestyle, household schedule, and individual behavior.", activeMinutes: 150, napMinutes: 60 },
};

function timeToMinutes(value: string) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(total: number) {
  const minutes = ((total % 1440) + 1440) % 1440;
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export default function PuppySleepScheduleByAgeCalculator() {
  const [age, setAge] = useState<AgeKey>("3-months");
  const [wakeTime, setWakeTime] = useState("07:00");
  const [showResult, setShowResult] = useState(true);
  const profile = profiles[age];

  const schedule = useMemo(() => {
    const start = timeToMinutes(wakeTime);
    const rows: { time: string; activity: string }[] = [];
    let cursor = start;
    rows.push({ time: formatTime(cursor), activity: "Wake up + potty" });
    rows.push({ time: formatTime(cursor + 15), activity: "Meal / gentle play / short training" });
    cursor += profile.activeMinutes;

    for (let i = 0; i < 4; i++) {
      rows.push({ time: formatTime(cursor), activity: i === 3 ? "Quiet rest / nap" : "Nap / quiet time" });
      cursor += profile.napMinutes;
      rows.push({ time: formatTime(cursor), activity: "Wake + potty + age-appropriate activity" });
      cursor += profile.activeMinutes;
    }

    const bedtime = Math.max(cursor, start + 14 * 60);
    rows.push({ time: formatTime(bedtime), activity: "Wind down + final potty + bedtime routine" });
    return rows;
  }, [profile, wakeTime]);

  return (
    <section id="sleep-planner" className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h2 className="text-3xl font-bold">Build a Puppy Sleep Schedule</h2>
          <p className="mt-3 leading-7 text-slate-600">Choose your puppy&apos;s age and usual morning wake-up time to create an example rhythm of activity, naps, potty breaks, and bedtime.</p>
        </div>
        <p className="text-sm leading-6 text-slate-500">This planner creates a flexible routine, not a medical sleep prescription. Follow your puppy&apos;s behavior and natural sleep cues.</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold">Puppy age</label>
          <select value={age} onChange={(e) => setAge(e.target.value as AgeKey)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">
            {Object.entries(profiles).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold">Typical wake-up time</label>
          <input type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
        </div>
      </div>

      <button onClick={() => setShowResult(true)} className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">Build My Puppy&apos;s Sleep Schedule</button>

      {showResult && (
        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50/70 p-6 md:p-7">
          <p className="text-sm font-semibold text-blue-700">SUGGESTED ROUTINE FOR {profile.label.toUpperCase()}</p>
          <h3 className="mt-2 text-3xl font-bold">{profile.pattern}</h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">{profile.resultSummary}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">DAYTIME REST</p><p className="mt-2 font-bold">Frequent nap opportunities</p><p className="mt-2 text-sm leading-6 text-slate-600">{profile.napGuidance}</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">AWAKE TIME</p><p className="mt-2 font-bold">Flexible activity blocks</p><p className="mt-2 text-sm leading-6 text-slate-600">{profile.awakeGuidance}</p></div>
            <div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-sm font-semibold text-slate-500">NIGHTTIME</p><p className="mt-2 font-bold">Consistent bedtime routine</p><p className="mt-2 text-sm leading-6 text-slate-600">{profile.nightGuidance}</p></div>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-blue-100 bg-white">
            <div className="border-b border-blue-100 px-5 py-4"><h4 className="text-xl font-bold">Example Daily Schedule</h4><p className="mt-1 text-sm text-slate-500">Starting from your {formatTime(timeToMinutes(wakeTime))} wake-up time. Times are illustrative; let actual naps run naturally.</p></div>
            <div className="divide-y divide-slate-100">
              {schedule.map((row, index) => <div key={`${row.time}-${index}`} className="grid grid-cols-[120px_1fr] gap-3 px-5 py-3 text-sm md:grid-cols-[150px_1fr]"><strong>{row.time}</strong><span className="text-slate-600">{row.activity}</span></div>)}
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600"><strong>Important:</strong> This schedule is an example framework. Puppies do not need to wake from a healthy nap to match the clock. Potty, feeding, training, and sleep timing should be adapted to the individual puppy and household.</p>
        </div>
      )}
    </section>
  );
}
