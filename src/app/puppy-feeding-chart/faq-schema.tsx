export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should I feed my puppy by age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Feeding amount depends on age, weight, breed size, activity, and food calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "How many meals should a puppy eat daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young puppies often eat three to four meals per day, while older puppies may transition toward two meals daily.",
        },
      },
      {
        "@type": "Question",
        name: "Should I follow a puppy feeding chart exactly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A feeding chart is a starting point. Always check your food label and adjust based on growth and body condition.",
        },
      },
      {
        "@type": "Question",
        name: "Does breed size affect puppy feeding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small, medium, and large breed puppies may need different feeding amounts and growth support.",
        },
      },
      {
        "@type": "Question",
        name: "Is puppy food different from adult dog food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Puppy food is usually formulated to support growth and development.",
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