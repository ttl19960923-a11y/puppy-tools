export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long are dogs pregnant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dog pregnancy usually lasts around 63 days from ovulation or mating.",
        },
      },
      {
        "@type": "Question",
        name: "Can dog due dates vary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Some dogs may give birth a few days earlier or later depending on breed and health.",
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