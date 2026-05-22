export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast do Labrador puppies grow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Labrador puppies usually grow quickly during the first several months, then growth gradually slows as they approach adult size.",
        },
      },
      {
        "@type": "Question",
        name: "When do Labrador puppies stop growing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many Labradors approach adult size around 12 to 18 months, though individual growth can vary.",
        },
      },
      {
        "@type": "Question",
        name: "Is a Labrador puppy growth chart exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Growth charts are general guides only. Genetics, nutrition, sex, health, and activity can all affect growth.",
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