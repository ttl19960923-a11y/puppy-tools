export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should I feed my puppy each day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily puppy food amount depends on weight, age, breed size, activity level, growth rate, and food calorie density. Use the calculator as a starting estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How many times should puppies eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young puppies often eat three to four meals per day. Older puppies usually transition toward two meals per day.",
        },
      },
      {
        "@type": "Question",
        name: "Can I feed my puppy adult dog food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy-specific food is usually recommended because growing puppies need nutrients that support development.",
        },
      },
      {
        "@type": "Question",
        name: "Should I feed by grams or calories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calories are more accurate because different foods have different calorie density. Grams should be adjusted based on the food label.",
        },
      },
      {
        "@type": "Question",
        name: "Can overfeeding a puppy be harmful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Overfeeding can lead to unhealthy weight gain and may be especially risky for large breed puppies during growth.",
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