export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories does a Golden Retriever puppy need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Golden Retriever puppy's calorie needs depend on weight, age, growth rate, activity level, food type, and health.",
        },
      },
      {
        "@type": "Question",
        name: "Do Golden Retriever puppies need more calories than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Golden Retriever puppies usually need more calories per kilogram because they are growing quickly.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use calories or food grams for feeding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calories are more accurate because puppy foods vary in calorie density. Food grams should be adjusted based on the food label.",
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