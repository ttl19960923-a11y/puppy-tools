export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many meals should a puppy eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young puppies often eat three to four meals per day, while older puppies may gradually transition to two meals daily.",
        },
      },
      {
        "@type": "Question",
        name: "Is a feeding schedule important for puppies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Consistent feeding schedules may support digestion, appetite, potty routines, and stable daily habits.",
        },
      },
      {
        "@type": "Question",
        name: "Should feeding times stay consistent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Feeding at similar times daily can help puppies build regular routines and may improve digestion.",
        },
      },
      {
        "@type": "Question",
        name: "Do large breed puppies need different schedules?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Large breed puppies may have different growth speed and calorie needs compared to smaller breeds.",
        },
      },
      {
        "@type": "Question",
        name: "When should puppies switch to adult feeding routines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many puppies begin transitioning toward adult feeding around 12 months, though large breeds may take longer.",
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