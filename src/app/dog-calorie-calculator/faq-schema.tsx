export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories should my dog eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily dog calories depend on weight, age, activity level, breed size, metabolism, health, and body condition.",
        },
      },
      {
        "@type": "Question",
        name: "Can too many calories make my dog overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Consistently eating more calories than needed can lead to weight gain and obesity.",
        },
      },
      {
        "@type": "Question",
        name: "Do active dogs need more calories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Active dogs, working dogs, and athletic breeds usually need more calories than less active dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Should senior dogs eat fewer calories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some senior dogs need fewer calories if activity level drops, but this depends on health, muscle condition, and weight.",
        },
      },
      {
        "@type": "Question",
        name: "Should I calculate food by calories or grams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calories are usually more accurate because different dog foods have different calorie density.",
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