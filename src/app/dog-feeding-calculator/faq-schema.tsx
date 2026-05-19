export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much food should an adult dog eat daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Food amount depends on weight, activity level, metabolism, breed, and food quality. This calculator provides a simple estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Should active dogs eat more food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Active dogs often require more calories than less active dogs.",
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