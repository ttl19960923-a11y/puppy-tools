export const faqData = [
  {
    "question": "Can I predict adult weight from puppy weight?",
    "answer": "Current weight and age can support an estimate, but accuracy depends on growth stage, breed size, and individual variation."
  },
  {
    "question": "Are a puppy’s paws a good size predictor?",
    "answer": "Large paws can suggest a larger frame, but paw size alone is not reliable enough to predict adult weight."
  },
  {
    "question": "Do mixed-breed puppies grow unpredictably?",
    "answer": "They can be harder to estimate because their inherited size traits may come from multiple breeds, but repeated growth measurements improve context."
  },
  {
    "question": "When does an adult-size prediction become more reliable?",
    "answer": "Generally, more age and more growth measurements provide better context than a single very early weight."
  },
  {
    "question": "Should I feed my puppy to reach the predicted weight?",
    "answer": "No. Feed for healthy, controlled growth and body condition rather than trying to force the puppy toward a forecast number."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
