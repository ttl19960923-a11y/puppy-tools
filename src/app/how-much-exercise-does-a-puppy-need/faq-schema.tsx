export const faqData = [
  {
    "question": "How long should I walk my puppy?",
    "answer": "There is no single duration that fits every puppy. Start conservatively and adjust for age, size, terrain, weather, behavior, and recovery."
  },
  {
    "question": "Is the 5-minute rule scientifically proven?",
    "answer": "It is widely repeated as a rule of thumb, but it should not be treated as a validated total daily exercise formula."
  },
  {
    "question": "Can puppies run?",
    "answer": "Brief self-directed running during play is different from sustained forced running. Repetitive high-impact or endurance exercise should be approached cautiously during growth."
  },
  {
    "question": "Does mental exercise count?",
    "answer": "Yes. Training, sniffing, food puzzles, and exploration provide useful stimulation and can help tire a puppy without simply adding more repetitive physical work."
  },
  {
    "question": "How do I know my puppy has had too much exercise?",
    "answer": "Watch for lagging, repeated stopping, reluctance to continue, soreness, limping, prolonged fatigue, or difficulty recovering. Pain or lameness warrants veterinary advice."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
