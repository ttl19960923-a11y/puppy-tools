export const faqData = [
  {
    "question": "At what age is a puppy fully grown?",
    "answer": "It depends strongly on breed size. Small and medium breeds often mature earlier, while large and giant breeds may continue growing well beyond 12 months."
  },
  {
    "question": "Do puppies stop growing at one year?",
    "answer": "Not all puppies. One year is a useful milestone for some dogs, but large and giant breeds often mature later."
  },
  {
    "question": "Do paws tell you how big a puppy will get?",
    "answer": "Paw size can loosely reflect overall build but is not a reliable standalone predictor of adult size."
  },
  {
    "question": "Can a puppy gain weight after reaching adult height?",
    "answer": "Yes. Body composition, muscle, and mature weight can continue changing after height growth slows."
  },
  {
    "question": "How should I track puppy growth?",
    "answer": "Record weight consistently, use growth charts when available, monitor body condition, and discuss unusual acceleration or slowing with your veterinarian."
  }
];

export default function FAQSchema() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />; }
