export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is a puppy weight predictor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is only a rough estimate. Breed, genetics, diet, growth stage, and health can all influence final adult weight.",
        },
      },
      {
        "@type": "Question",
        name: "When do puppies reach adult weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small breeds may reach adult weight around 8 to 12 months, while large breeds may continue growing for 18 months or more.",
        },
      },
      {
        "@type": "Question",
        name: "Do large breed puppies grow longer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Large breed dogs often continue growing longer than small or medium breed dogs.",
        },
      },
      {
        "@type": "Question",
        name: "Can nutrition affect puppy adult weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nutrition quality, calorie intake, and feeding balance can all influence healthy growth.",
        },
      },
      {
        "@type": "Question",
        name: "Should I track puppy weight regularly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regular weight tracking can help monitor growth progress and identify unusual changes early.",
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