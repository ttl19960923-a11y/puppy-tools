export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can dogs use BMI like humans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dog BMI can provide a rough estimate, but it is not as reliable as veterinary body condition scoring because breeds have very different body shapes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my dog is overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signs may include difficulty feeling the ribs, reduced waist definition, low energy, and excessive body fat.",
        },
      },
      {
        "@type": "Question",
        name: "Should I ask a vet about my dog's weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A veterinarian can evaluate your dog's body condition, breed, age, health, and activity level more accurately.",
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