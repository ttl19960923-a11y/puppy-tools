export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does dog feeding change by age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies usually need more frequent meals and more calories for growth, while adult and senior dogs may need adjusted portions based on activity and health.",
        },
      },
      {
        "@type": "Question",
        name: "How often should adult dogs eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many adult dogs eat one to two meals per day, depending on routine, health, and veterinarian guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Do senior dogs need less food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some senior dogs may need fewer calories if they are less active, but needs vary by health, body condition, and metabolism.",
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