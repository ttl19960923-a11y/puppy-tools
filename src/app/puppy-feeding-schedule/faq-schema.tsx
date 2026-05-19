export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should puppies eat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young puppies often eat three to four meals per day. Older puppies may gradually transition to two meals per day.",
        },
      },
      {
        "@type": "Question",
        name: "When can puppies eat twice a day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many puppies can transition to two meals per day around 6 to 12 months, depending on breed size, growth, and veterinarian guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Should puppies eat at the same time every day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A consistent feeding routine can help with digestion, potty training, and daily structure.",
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