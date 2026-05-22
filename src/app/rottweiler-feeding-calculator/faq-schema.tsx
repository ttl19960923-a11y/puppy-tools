export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Rottweiler eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, food type, body condition, growth stage, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do Rottweiler puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rottweiler puppies usually need more calories for growth, muscle development, and daily activity.",
        },
      },
      {
        "@type": "Question",
        name: "Do active Rottweilers need more food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Active Rottweilers may need more calories, especially if they exercise heavily or have higher muscle mass.",
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