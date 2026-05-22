export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Chihuahua eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, activity level, food type, body condition, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do Chihuahua puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Chihuahua puppies usually need more calories per kilogram for growth and may need more frequent meals than adults.",
        },
      },
      {
        "@type": "Question",
        name: "Can Chihuahuas gain weight easily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because Chihuahuas are very small, even small extra portions or treats can affect body weight.",
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