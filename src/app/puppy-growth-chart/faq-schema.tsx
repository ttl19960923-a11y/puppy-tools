export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When do puppies stop growing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small breeds may stop growing around 8 to 12 months, while large breeds may continue growing for 18 months or longer.",
        },
      },
      {
        "@type": "Question",
        name: "Is this adult weight estimate exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It is only a rough estimate. Breed, genetics, diet, health, and growth rate can all affect adult weight.",
        },
      },
      {
        "@type": "Question",
        name: "Do small puppies grow faster than large puppies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small breed puppies often reach adult size earlier, while large breed puppies may grow for a longer period.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I weigh my puppy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weighing your puppy every few weeks can help track growth and notice unusual changes early.",
        },
      },
      {
        "@type": "Question",
        name: "What affects puppy growth the most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breed, genetics, nutrition, activity level, health, and parent size can all affect puppy growth.",
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