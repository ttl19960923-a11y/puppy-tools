export const faqData = [
  {
    "question": "What is the fastest puppy growth stage?",
    "answer": "Growth is generally most rapid in the early months, then begins to slow as the puppy approaches maturity."
  },
  {
    "question": "When does puppy growth slow down?",
    "answer": "The timing varies, but growth rate commonly begins to plateau after the early rapid-growth period and slows progressively toward maturity."
  },
  {
    "question": "Do large puppies stay in growth stages longer?",
    "answer": "Yes. Large and giant breeds generally take longer to reach skeletal maturity than small and medium breeds."
  },
  {
    "question": "What should I track during puppy growth?",
    "answer": "Track weight over time, body condition, diet, appetite, and mobility. Trends are more useful than a single measurement."
  },
  {
    "question": "Can overfeeding make a puppy grow too fast?",
    "answer": "Yes. Excess energy can accelerate growth and increase body fat; controlled steady growth is preferred, especially in large breeds."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
