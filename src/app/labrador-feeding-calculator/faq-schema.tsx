export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Labrador eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, food type, body condition, and the calorie density of the food.",
        },
      },
      {
        "@type": "Question",
        name: "Do Labrador puppies need more food than adult Labradors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Labrador puppies usually need more calories for growth and may need more frequent meals than adult dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Can Labradors become overweight easily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Labradors are prone to weight gain, so portion control and regular exercise are important.",
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