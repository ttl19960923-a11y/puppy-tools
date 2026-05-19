export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I estimate my puppy's adult size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can estimate adult size using current weight and age, but the result is only a rough guide.",
        },
      },
      {
        "@type": "Question",
        name: "What affects puppy adult size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breed, genetics, nutrition, health, and growth rate can all affect a puppy's adult size.",
        },
      },
      {
        "@type": "Question",
        name: "Is a puppy size calculator exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A puppy size calculator gives only a general estimate and should not replace breed-specific guidance or veterinary advice.",
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