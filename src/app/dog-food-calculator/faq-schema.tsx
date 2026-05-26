export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much dog food should I feed per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Feeding amount depends on weight, calorie needs, activity level, metabolism, and the calorie density of the food.",
        },
      },
      {
        "@type": "Question",
        name: "Is wet food amount different from dry food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wet food contains more moisture and usually requires larger serving sizes than dry food.",
        },
      },
      {
        "@type": "Question",
        name: "Should active dogs eat more food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Active dogs generally burn more calories and may require larger food portions.",
        },
      },
      {
        "@type": "Question",
        name: "Can overfeeding cause weight gain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Excess calories over time can contribute to obesity and related health issues.",
        },
      },
      {
        "@type": "Question",
        name: "Should I follow the dog food package guide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Food package guides are useful starting points, but portions may still need adjustment for your individual dog.",
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