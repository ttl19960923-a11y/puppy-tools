export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When is a puppy no longer a puppy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many puppies are near adult stage around 12 months, but large breeds may continue growing and maturing for longer.",
        },
      },
      {
        "@type": "Question",
        name: "Why does puppy age matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy age affects feeding, training, sleep needs, exercise, growth, teething, and daily care routines.",
        },
      },
      {
        "@type": "Question",
        name: "What age do puppies grow the fastest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many puppies grow fastest during the first several months, though growth speed depends on breed size.",
        },
      },
      {
        "@type": "Question",
        name: "Does breed size affect puppy development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small breeds may mature earlier, while large breeds may continue growing and developing for longer.",
        },
      },
      {
        "@type": "Question",
        name: "Can this puppy age chart replace vet advice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This chart is a general guide only. A veterinarian can better evaluate individual growth and health.",
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