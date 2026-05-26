export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories does my puppy need per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy calorie needs depend on weight, age, breed size, activity level, growth rate, metabolism, and food type.",
        },
      },
      {
        "@type": "Question",
        name: "Do puppies need more calories than adult dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Puppies usually need more calories per kilogram because they are growing quickly and using energy for development.",
        },
      },
      {
        "@type": "Question",
        name: "Can too many calories make a puppy overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Overfeeding can lead to excessive weight gain, so it is important to monitor body condition and growth.",
        },
      },
      {
        "@type": "Question",
        name: "Should I calculate puppy food by calories or grams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calories are usually more accurate because different puppy foods have different calorie density.",
        },
      },
      {
        "@type": "Question",
        name: "Do large breed puppies need special calorie control?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Large breed puppies may need careful calorie and growth management to avoid gaining weight too quickly.",
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