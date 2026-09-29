export const faqData = [
  {
    "question": "How many hours a day do puppies sleep?",
    "answer": "Young puppies often sleep for much of a 24-hour day, but exact totals vary. Focus on a healthy pattern of alert activity followed by adequate rest."
  },
  {
    "question": "Do puppies need scheduled naps?",
    "answer": "A predictable quiet period can help a busy puppy settle, but naps do not need to follow a rigid clock if the puppy is resting well naturally."
  },
  {
    "question": "Why does my puppy get wild when tired?",
    "answer": "Some puppies become mouthy, frantic, or less able to focus when overstimulated or overtired. A calm environment and rest can help."
  },
  {
    "question": "Should I wake my puppy from a nap?",
    "answer": "Usually there is no need to wake a healthy puppy simply to meet a schedule, though meals, medications, housetraining, or veterinary instructions can change that."
  },
  {
    "question": "When is puppy sleepiness concerning?",
    "answer": "Seek veterinary advice for a major change from normal behavior, difficulty waking, weakness, poor appetite, or sleepiness accompanied by other illness signs."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
