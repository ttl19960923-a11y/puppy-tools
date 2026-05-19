export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast do puppies grow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies grow fastest during their first several months. Growth speed depends on breed size, genetics, nutrition, and health.",
        },
      },
      {
        "@type": "Question",
        name: "Can I predict my puppy's adult weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can estimate adult weight based on current age and weight, but the result is only a rough guide.",
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