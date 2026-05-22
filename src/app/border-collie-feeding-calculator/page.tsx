export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Border Collie eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, training intensity, food type, body condition, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do Border Collie puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Border Collie puppies usually need more calories for growth and may need more frequent meals than adult dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Do active Border Collies need more food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Border Collies are highly active dogs, so working or heavily exercised dogs may need more calories.",
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