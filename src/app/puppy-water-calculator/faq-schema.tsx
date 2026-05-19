export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much water should a puppy drink per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A puppy's daily water needs depend on weight, age, food type, activity level, weather, and health. This calculator provides a general estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Do puppies need more water than adult dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies may need frequent access to fresh water because they are growing quickly and are often active.",
        },
      },
      {
        "@type": "Question",
        name: "Can a puppy drink too much water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Excessive water intake may sometimes indicate health problems. If your puppy drinks unusually large amounts of water, contact a veterinarian.",
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