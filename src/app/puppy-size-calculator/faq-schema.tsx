export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How big will my puppy get?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adult puppy size depends on current weight, age, breed size, genetics, nutrition, and growth patterns. This calculator provides a general estimate only.",
        },
      },
      {
        "@type": "Question",
        name: "How can I estimate my puppy's adult size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can estimate future adult size using your puppy's current age and weight. Breed type and family history may also help improve predictions.",
        },
      },
      {
        "@type": "Question",
        name: "What affects puppy adult size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breed, genetics, nutrition, health condition, and growth rate can all influence a puppy's final adult size and weight.",
        },
      },
      {
        "@type": "Question",
        name: "When do puppies stop growing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small breeds often stop growing around 8–12 months, while large and giant breeds may continue growing for 18–24 months.",
        },
      },
      {
        "@type": "Question",
        name: "Is a puppy size calculator exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A puppy size calculator gives only a rough prediction and should not replace breed-specific information or veterinary guidance.",
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