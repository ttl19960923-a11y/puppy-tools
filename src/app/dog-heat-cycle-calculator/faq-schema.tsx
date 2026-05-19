export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often do dogs go into heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many female dogs go into heat about every 6 months, but timing can vary by breed, age, size, and health.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a dog heat cycle last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dog heat cycle often lasts around 2 to 4 weeks, though the exact duration can vary.",
        },
      },
      {
        "@type": "Question",
        name: "Can this calculator predict heat cycles exactly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This calculator provides a general estimate only. A veterinarian can provide more accurate guidance for individual dogs.",
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