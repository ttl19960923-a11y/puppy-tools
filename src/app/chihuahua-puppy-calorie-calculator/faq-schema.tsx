export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories does a Chihuahua puppy need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Chihuahua puppy's calorie needs depend on weight, age, growth rate, activity level, food type, and health.",
        },
      },
      {
        "@type": "Question",
        name: "Do Chihuahua puppies need more calories than adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Chihuahua puppies usually need more calories per kilogram because they are growing quickly.",
        },
      },
      {
        "@type": "Question",
        name: "Why should Chihuahua puppy calories be measured carefully?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chihuahuas are very small, so even small changes in food portions or treats can significantly affect calorie intake.",
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