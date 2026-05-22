export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Husky eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, food type, body condition, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do Husky puppies need more food than adult Huskies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Husky puppies usually need more calories for growth and may need more frequent meals than adults.",
        },
      },
      {
        "@type": "Question",
        name: "Do active Huskies need more food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Highly active Huskies may need more food and calories than less active Huskies.",
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