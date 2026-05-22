export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Golden Retriever eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on age, weight, activity level, and food type. Puppies usually require more calories for growth.",
        },
      },
      {
        "@type": "Question",
        name: "Do Golden Retriever puppies eat more than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Growing Golden Retriever puppies often require more food and calories compared to adult dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Can feeding amount vary by dog food brand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Calorie density and ingredients vary between dog food brands, so feeding recommendations may differ.",
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