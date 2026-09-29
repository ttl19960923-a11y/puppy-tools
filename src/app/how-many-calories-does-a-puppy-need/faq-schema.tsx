export const faqData = [
  {
    "question": "How do I calculate puppy calories?",
    "answer": "A common starting method calculates RER from body weight in kilograms and then applies a growth factor based on age."
  },
  {
    "question": "Why do puppies need more calories than adult dogs?",
    "answer": "Growth requires energy for new tissue as well as normal metabolism and activity, so young puppies need more energy relative to body size."
  },
  {
    "question": "Is 3 × RER right for every puppy under 4 months?",
    "answer": "No. It is a starting estimate for healthy puppies. Individual energy needs can differ and should be adjusted based on response."
  },
  {
    "question": "Do treats count toward puppy calories?",
    "answer": "Yes. Treats, chews, table foods, and other extras contribute energy and should be included in the daily total."
  },
  {
    "question": "How do I convert calories to cups?",
    "answer": "Divide the estimated daily calories by the food’s kcal-per-cup value, then monitor body condition and growth and adjust as needed."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
