export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a 3 month old puppy eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on weight, breed size, activity level, food quality, and growth rate.",
        },
      },
      {
        "@type": "Question",
        name: "How many meals should a 3 month old puppy eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many 3 month old puppies eat about three meals per day, though some may still need smaller, more frequent meals.",
        },
      },
      {
        "@type": "Question",
        name: "Should a 3 month old puppy still eat puppy food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Puppy food is usually recommended because it supports growth, development, and higher energy needs.",
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