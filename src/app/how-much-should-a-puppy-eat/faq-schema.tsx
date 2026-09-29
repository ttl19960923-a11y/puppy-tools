export const faqData = [
  { question: "How much should I feed my puppy each day?", answer: "There is no single cups-per-day or grams-per-day amount that fits every puppy. A practical starting point is to estimate daily calories from current weight and growth stage, then convert those calories using the calorie density on the puppy food label. Growth and body condition should be monitored over time." },
  { question: "How many times a day should I feed my puppy?", answer: "Young puppies usually do best with several measured meals each day. Meal frequency can gradually decrease as a puppy matures. Age, size, health, and your veterinarian's advice can affect the schedule." },
  { question: "Should puppy food be measured in cups or grams?", answer: "Either can work if the food label provides matching calorie information, but weighing food in grams is often more repeatable than estimating volume with a cup. The key is to connect the portion to the calorie density of the specific food." },
  { question: "Can I overfeed my puppy?", answer: "Yes. Excess energy can promote overly rapid growth and excess body fat. This is especially important in large and giant breed puppies, where controlled, steady growth and appropriate mineral balance matter." },
  { question: "How much of my puppy's calories can come from treats?", answer: "A common veterinary guideline is to keep treats and other extras to no more than about 10% of total daily calories so they do not displace too much complete and balanced food." },
  { question: "When should I change my puppy's feeding amount?", answer: "Recheck the amount as weight, age, food, activity, growth rate, or body condition changes. Calculated calorie needs are starting estimates and may need adjustment based on the individual puppy's response." },
];

export default function FAQSchema() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
