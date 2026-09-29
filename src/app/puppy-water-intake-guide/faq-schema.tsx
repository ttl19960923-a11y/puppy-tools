export const faqData = [
  {
    "question": "How much water should a puppy drink?",
    "answer": "Water needs vary with size, food moisture, activity, weather, and health. A calculator can provide a starting range, but the individual pattern matters."
  },
  {
    "question": "Should puppies have water available all day?",
    "answer": "Fresh water should generally be available. Do not routinely restrict water to prevent accidents unless your veterinarian gives specific instructions."
  },
  {
    "question": "Does wet food reduce drinking?",
    "answer": "Often yes. Wet food contributes water directly, so bowl intake may be lower even when total water intake is adequate."
  },
  {
    "question": "Why is my puppy drinking more after play?",
    "answer": "Activity and heat can increase fluid needs. A normal temporary increase after exercise differs from persistent excessive thirst."
  },
  {
    "question": "When should increased thirst worry me?",
    "answer": "A sustained or dramatic change in thirst or urination, especially with other illness signs, deserves veterinary evaluation."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
