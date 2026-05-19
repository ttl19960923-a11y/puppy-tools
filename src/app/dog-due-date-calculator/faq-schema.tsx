export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate my dog's due date?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A common estimate is to add about 63 days to the mating date, though timing can vary between individual dogs.",
        },
      },
      {
        "@type": "Question",
        name: "How long is dog pregnancy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dog pregnancy usually lasts around 63 days, but some dogs may give birth a few days earlier or later.",
        },
      },
      {
        "@type": "Question",
        name: "Is a dog due date calculator exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This calculator provides a general estimate only. A veterinarian can offer more accurate pregnancy guidance.",
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