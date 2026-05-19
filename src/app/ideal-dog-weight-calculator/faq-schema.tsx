export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the ideal weight for my dog?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ideal dog weight depends on breed, body frame, age, muscle mass, and health. Breed size can provide a rough starting point.",
        },
      },
      {
        "@type": "Question",
        name: "Does ideal dog weight vary by breed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Ideal weight ranges vary greatly between small, medium, large, and giant dog breeds.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use this calculator instead of a veterinarian?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This calculator gives a rough estimate only. A veterinarian can assess your dog's ideal weight more accurately.",
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