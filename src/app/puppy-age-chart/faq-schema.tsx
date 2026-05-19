export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a puppy age chart?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A puppy age chart helps show common growth, feeding, training, and care stages by age.",
        },
      },
      {
        "@type": "Question",
        name: "When is a puppy considered an adult?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many puppies are considered close to adult around 12 months, but large breeds may continue growing for longer.",
        },
      },
      {
        "@type": "Question",
        name: "Do puppies develop at the same speed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Puppy development varies by breed size, genetics, nutrition, health, and environment.",
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