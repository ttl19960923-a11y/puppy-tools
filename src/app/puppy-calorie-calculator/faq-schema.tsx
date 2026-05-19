export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories does a puppy need daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A puppy's daily calorie needs depend on weight, age, breed size, activity level, and growth stage. This calculator provides a simple estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Do puppies need more calories than adult dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Puppies usually need more calories per kilogram than adult dogs because they are growing quickly.",
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