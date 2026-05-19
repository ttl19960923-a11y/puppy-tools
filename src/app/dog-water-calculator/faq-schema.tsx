export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much water should a dog drink per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dog's daily water needs depend on weight, activity level, diet, weather, and health. This calculator provides a general estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Do dogs need more water when eating dry food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dogs that eat dry kibble may need more drinking water than dogs that eat wet food.",
        },
      },
      {
        "@type": "Question",
        name: "Can a dog drink too much water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Drinking unusually large amounts of water may sometimes indicate health issues and should be discussed with a veterinarian.",
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