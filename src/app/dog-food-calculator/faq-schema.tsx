export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much food should I feed my dog?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, activity level, age, food type, metabolism, and the food label recommendations. This calculator gives a general estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Does wet dog food require a different amount than dry food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wet dog food contains more moisture, so the feeding amount by weight is often higher than dry food.",
        },
      },
      {
        "@type": "Question",
        name: "Should I follow this calculator exactly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This calculator is only a general guide. Always check your dog food label and consult a veterinarian for personalized advice.",
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