export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should I feed my dog daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily dog food amount depends on body weight, activity level, metabolism, breed size, age, and food calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "How often should adult dogs eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most adult dogs eat one or two meals daily depending on health condition and activity level.",
        },
      },
      {
        "@type": "Question",
        name: "Can I overfeed my dog?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Overfeeding may lead to obesity, joint stress, and other long-term health issues.",
        },
      },
      {
        "@type": "Question",
        name: "Should feeding amount change by breed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small breeds, large breeds, and active working breeds may have different calorie and feeding requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Is wet food different from dry food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wet food usually contains fewer calories per gram than dry food, so feeding amounts can differ significantly.",
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