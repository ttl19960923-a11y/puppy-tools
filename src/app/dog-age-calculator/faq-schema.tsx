export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is one dog year equal to seven human years?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not exactly. Dogs age faster during their first two years.",
        },
      },
      {
        "@type": "Question",
        name: "Do dog breeds age differently?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small and large breeds age differently over time.",
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