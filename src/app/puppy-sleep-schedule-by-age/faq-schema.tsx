const faqs = [
  { q: "How much do puppies sleep?", a: "Young puppies commonly sleep about 18 to 20 hours in a 24-hour day. Individual sleep varies with age, health, activity, environment, and the puppy." },
  { q: "How much should an 8-week-old puppy sleep?", a: "An 8-week-old puppy may spend most of the day asleep. Frequent naps between short periods of eating, potty trips, play, training, and exploration are normal." },
  { q: "How long should puppy naps be?", a: "Puppy naps can vary. The American Kennel Club notes that puppies may nap every hour or so and may sleep from about 30 minutes to as long as two hours at a time." },
  { q: "Should puppies sleep through the night?", a: "Very young puppies may not be ready to sleep through the entire night and may need a nighttime potty break. Nighttime sleep usually becomes more consolidated as puppies mature." },
  { q: "When should I ask a veterinarian about my puppy's sleep?", a: "Talk with a veterinarian if your puppy has a meaningful change in sleep together with signs such as unusual lethargy while awake, nighttime restlessness, appetite or potty changes, loss of interest in play, or concerning snoring or gasping." },
];

export default function FAQSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }} />;
}
