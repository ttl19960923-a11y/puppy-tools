export const faqData = [
  {
    "question": "How many times a day should an 8 week old puppy eat?",
    "answer": "Many 8-week-old puppies eat three or more small meals daily. Small breeds and individual puppies may need a different schedule."
  },
  {
    "question": "When can I stop feeding my puppy three times a day?",
    "answer": "Many puppies transition toward two meals around 6 months, but breed size, health, and routine can affect timing."
  },
  {
    "question": "Should meals be at the same time every day?",
    "answer": "A reasonably consistent schedule can help you monitor appetite and coordinate elimination breaks, though exact minute-by-minute timing is unnecessary."
  },
  {
    "question": "Can I free-feed a puppy?",
    "answer": "Measured meals make it easier to track intake and body condition. Free-choice feeding is not appropriate for every puppy and can contribute to excess intake."
  },
  {
    "question": "How much food goes in each meal?",
    "answer": "First estimate the total daily amount, then divide it by the number of meals. Use calorie density and growth response to refine the portion."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
