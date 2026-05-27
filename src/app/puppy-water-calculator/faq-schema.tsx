export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much water should a puppy drink daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many puppies may need around 50–70 ml of water per kilogram of body weight daily, although needs vary by activity, food type, weather, and health.",
        },
      },
      {
        "@type": "Question",
        name: "Do puppies need more water than adult dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies often need frequent access to fresh water because they grow rapidly and can be very active.",
        },
      },
      {
        "@type": "Question",
        name: "Can a puppy drink too much water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Excessive water intake can sometimes indicate health concerns. Contact a veterinarian if drinking habits suddenly change.",
        },
      },
      {
        "@type": "Question",
        name: "Does dry food increase puppy water needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dry food contains less moisture than wet food, so puppies eating dry food may drink more water.",
        },
      },
      {
        "@type": "Question",
        name: "Should puppies have access to water all day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fresh drinking water should usually be available throughout the day, especially after meals, exercise, naps, and playtime.",
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