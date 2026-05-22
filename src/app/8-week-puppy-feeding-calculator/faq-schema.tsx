export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should an 8 week old puppy eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An 8 week old puppy's food amount depends on weight, breed size, food type, activity level, and growth needs.",
        },
      },
      {
        "@type": "Question",
        name: "How many meals should an 8 week old puppy eat per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many 8 week old puppies eat about four small meals per day because they are still young and growing quickly.",
        },
      },
      {
        "@type": "Question",
        name: "Can an 8 week old puppy eat adult dog food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy-specific food is usually recommended because young puppies need nutrients that support growth and development.",
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