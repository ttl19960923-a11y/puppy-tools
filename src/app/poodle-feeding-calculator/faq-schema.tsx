export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a Poodle eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, age, size type, activity level, food type, body condition, and calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do Poodle puppies need more food than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Poodle puppies usually need more calories for growth and may need more frequent meals than adult Poodles.",
        },
      },
      {
        "@type": "Question",
        name: "Does Poodle size affect feeding amount?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toy, Miniature, and Standard Poodles can have very different body sizes, so feeding amounts should be adjusted by weight and body condition.",
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