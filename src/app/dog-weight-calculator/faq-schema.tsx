export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if my dog is overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signs of overweight dogs may include difficulty feeling the ribs, low energy, and excessive body fat.",
        },
      },
      {
        "@type": "Question",
        name: "Does ideal dog weight vary by breed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Healthy weight ranges vary significantly depending on breed size and body structure.",
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