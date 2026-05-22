export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a German Shepherd eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on age, weight, activity level, food type, metabolism, and body condition.",
        },
      },
      {
        "@type": "Question",
        name: "Do German Shepherd puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. German Shepherd puppies need extra calories for growth and development.",
        },
      },
      {
        "@type": "Question",
        name: "Can German Shepherds become overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Overfeeding and low activity can lead to weight gain, so portion control and exercise are important.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}