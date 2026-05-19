export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many calories does my dog need daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dog's daily calorie needs depend on weight, activity level, age, breed, and health status. This calculator provides a general estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Do active dogs need more calories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. More active dogs usually need more calories than dogs with low activity levels.",
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