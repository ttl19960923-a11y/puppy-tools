export const faqData = [
  {
    "question": "What is a healthy puppy body condition score?",
    "answer": "WSAVA materials commonly describe 4–5 out of 9 as an ideal range for most pets, but growing puppies should be assessed in context with growth and veterinary guidance."
  },
  {
    "question": "Should I be able to feel my puppy’s ribs?",
    "answer": "Generally yes. Ribs should be palpable without a heavy fat covering, but they should not necessarily appear sharply prominent."
  },
  {
    "question": "Is body condition the same as body weight?",
    "answer": "No. Weight is a number on the scale; body condition estimates fat stores. Muscle condition is another separate assessment."
  },
  {
    "question": "How often should I check body condition?",
    "answer": "Regular checks during growth are useful because puppy weight and calorie needs change quickly. Veterinary visits are a good time to confirm your assessment."
  },
  {
    "question": "What if my puppy is gaining weight too fast?",
    "answer": "Review treats, total calories, food density, and body condition with your veterinarian. Do not pursue rapid growth, especially in large and giant breeds."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
