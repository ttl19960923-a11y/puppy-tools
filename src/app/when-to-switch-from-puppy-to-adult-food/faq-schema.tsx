export const faqData = [
  {
    "question": "Can I switch to adult food at 12 months?",
    "answer": "Some dogs are ready around 12 months, but large and giant breeds often mature later. Breed size and skeletal maturity matter more than a single birthday."
  },
  {
    "question": "What happens if I switch puppy food too early?",
    "answer": "An adult maintenance diet may not be formulated for the nutrient demands of ongoing growth, so premature transition can be inappropriate."
  },
  {
    "question": "How long should a food transition take?",
    "answer": "Many diet changes are made gradually over several days, but sensitive dogs or medical situations may need a veterinarian-directed plan."
  },
  {
    "question": "Do I feed the same number of cups after switching?",
    "answer": "Not necessarily. Calorie density can differ between puppy and adult foods, so compare the labels and recalculate the portion."
  },
  {
    "question": "How do I know my dog is skeletally mature?",
    "answer": "Expected timing depends on breed size and individual development. Your veterinarian can help assess maturity, especially for large and giant breeds."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
