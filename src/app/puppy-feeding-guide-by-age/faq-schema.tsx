export const faqData = [
  {
    "question": "How often should a young puppy eat?",
    "answer": "Many puppies between weaning and 6 months are fed three measured meals per day, while very small or very young puppies may need more frequent feeding."
  },
  {
    "question": "When can a puppy eat twice a day?",
    "answer": "Many puppies can transition toward two meals per day around 6 months, although size, health, routine, and veterinary advice can change the timing."
  },
  {
    "question": "Does an older puppy always need more food?",
    "answer": "No. Absolute needs can rise as body weight increases, but calorie needs relative to body size generally decline as growth slows."
  },
  {
    "question": "When should I switch to adult food?",
    "answer": "Switch timing should reflect skeletal maturity and breed size. Small and medium dogs often mature earlier than large and giant breeds."
  },
  {
    "question": "How do I know if the amount is right?",
    "answer": "Track weight, body condition, stool quality, appetite, and growth. A calculated or label amount is a starting point, not a permanent prescription."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
