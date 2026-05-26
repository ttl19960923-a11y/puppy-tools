export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is dog BMI accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dog BMI is only a rough estimate. Body condition scoring is usually more useful because different breeds have different body shapes.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my dog may be overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monitor food portions, activity, treats, and body condition. For a safe weight plan, ask a veterinarian.",
        },
      },
      {
        "@type": "Question",
        name: "Is BMI the same as body condition score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Body condition score considers rib feel, waist shape, fat coverage, and muscle condition.",
        },
      },
      {
        "@type": "Question",
        name: "Can muscular dogs have a higher BMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. More muscular dogs may weigh more without necessarily being overweight.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use dog BMI for puppies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy growth changes quickly, so puppy weight and body condition should be evaluated differently from adult dogs.",
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