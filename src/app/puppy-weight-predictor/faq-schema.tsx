export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I predict my puppy's adult weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can estimate adult weight using current age and weight, but the result is only a rough prediction.",
        },
      },
      {
        "@type": "Question",
        name: "What affects puppy adult weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breed size, genetics, nutrition, health, and growth rate can all affect a puppy's adult weight.",
        },
      },
      {
        "@type": "Question",
        name: "Is a puppy weight predictor exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A puppy weight predictor gives only a general estimate and should not be treated as an exact result.",
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