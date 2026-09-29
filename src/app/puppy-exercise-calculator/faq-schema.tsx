const faqs = [
  { q: "How much exercise does a puppy need?", a: "There is no single evidence-based daily minute target for every puppy. Exercise should be tailored to age, breed, development, health, fitness, and behavior, using short age-appropriate activity, self-paced play, mental enrichment, and adequate rest." },
  { q: "What is the 5-minute rule for puppy exercise?", a: "A commonly cited walking guideline is about five minutes of walking per month of age, once or twice daily. It is best treated as a rough walking guideline rather than a medical formula for total daily exercise." },
  { q: "How long should I walk a 3-month-old puppy?", a: "Using the commonly cited five-minute walking guideline, a 3-month-old puppy walk would be around 15 minutes. The puppy's pace, breed, health, weather, surfaces, other daily activity, and signs of fatigue still matter." },
  { q: "Can I run with my puppy?", a: "Sustained running and other strenuous forced exercise should generally wait until the puppy is physically mature. Small dogs often mature earlier, while large and giant breeds can continue skeletal development much longer." },
  { q: "How do I know if my puppy has had too much exercise?", a: "Stop and allow rest if a puppy repeatedly sits or lies down, falls behind, becomes unusually out of breath, seems sore, limps, or shows a meaningful change in movement or behavior. Persistent or concerning signs warrant veterinary advice." },
];

export default function FAQSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }} />;
}
