export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories does a puppy need by age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy calorie needs depend on age, weight, breed size, growth rate, activity level, and health.",
        },
      },
      {
        "@type": "Question",
        name: "Do younger puppies need more calories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Younger puppies usually need more calories per kilogram because they are growing quickly.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use calories or food grams for puppy feeding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calories are more accurate because different puppy foods have different calorie density. Food grams should be adjusted based on the food label.",
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