export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a French Bulldog eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, food type, body condition, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do French Bulldog puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. French Bulldog puppies usually need more calories for growth and may need more frequent meals than adult dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Can French Bulldogs become overweight easily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. French Bulldogs can gain weight easily, so portion control and body condition monitoring are important.",
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