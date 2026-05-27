export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much water should a dog drink daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many dogs need approximately 50–70 ml of water per kilogram of body weight daily, although needs vary depending on activity, food type, weather, and health.",
        },
      },
      {
        "@type": "Question",
        name: "Do dogs need more water when eating dry food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dogs eating dry kibble often drink more water because dry food contains less moisture than wet food.",
        },
      },
      {
        "@type": "Question",
        name: "Can a dog drink too much water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Excessive water intake can sometimes indicate health concerns and should be discussed with a veterinarian.",
        },
      },
      {
        "@type": "Question",
        name: "Does hot weather increase water needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dogs often need more water in hot weather because higher temperatures can increase fluid loss.",
        },
      },
      {
        "@type": "Question",
        name: "What are signs of dehydration in dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signs may include dry gums, heavy panting, low energy, sunken eyes, and reduced skin elasticity.",
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