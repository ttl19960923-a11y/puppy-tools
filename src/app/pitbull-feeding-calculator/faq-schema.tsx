export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Pitbull eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, food type, muscle mass, body condition, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do Pitbull puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pitbull puppies usually need more calories for growth and may need more frequent meals than adult dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Do active Pitbulls need more food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Active Pitbulls may need more food and calories, especially if they exercise often or have high muscle mass.",
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