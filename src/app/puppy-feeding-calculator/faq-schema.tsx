export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much food should I feed my puppy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on your puppy's weight, age, breed size, activity level, and food type. This calculator gives a simple estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Should puppies eat adult dog food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies usually need puppy-specific food because they require different nutrients than adult dogs.",
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