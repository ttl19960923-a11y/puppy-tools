export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much food should a puppy eat by age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy feeding amounts depend on age, breed size, weight, activity level, and food type. Younger puppies usually eat more frequent meals.",
        },
      },
      {
        "@type": "Question",
        name: "How many times a day should puppies eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young puppies often eat three to four meals per day. Older puppies may gradually transition to two meals per day.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a puppy feeding chart as an exact rule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A puppy feeding chart should be used as a general guide. Always check the food label and consult a veterinarian for personalized advice.",
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