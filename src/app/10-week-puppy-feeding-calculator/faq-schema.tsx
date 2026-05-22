export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a 10 week old puppy eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on body weight, breed size, food quality, activity level, and individual growth needs.",
        },
      },
      {
        "@type": "Question",
        name: "How many meals should a 10 week old puppy eat daily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many 10 week old puppies eat about three to four small meals per day.",
        },
      },
      {
        "@type": "Question",
        name: "Should 10 week old puppies eat puppy food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Puppy food is usually recommended because it contains nutrients that support healthy growth and development.",
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