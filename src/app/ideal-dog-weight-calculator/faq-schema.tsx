export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know my dog's ideal weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ideal weight depends on breed, body frame, muscle condition, activity level, and body condition score.",
        },
      },
      {
        "@type": "Question",
        name: "Is breed size enough to estimate ideal weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Breed size gives only a broad estimate. Individual dogs may vary significantly in structure and muscle mass.",
        },
      },
      {
        "@type": "Question",
        name: "Can active dogs weigh more?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dogs with higher muscle mass may naturally weigh more while still maintaining healthy body condition.",
        },
      },
      {
        "@type": "Question",
        name: "Does age affect ideal weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Puppies, adults, and senior dogs may have different body composition and calorie needs.",
        },
      },
      {
        "@type": "Question",
        name: "Should I ask a veterinarian about ideal weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A veterinarian can evaluate body condition, muscle mass, and overall health more accurately than weight alone.",
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