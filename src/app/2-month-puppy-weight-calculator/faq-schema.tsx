export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should a 2 month old puppy weigh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 2 month old puppy's weight depends greatly on breed size, genetics, nutrition, and growth rate.",
        },
      },
      {
        "@type": "Question",
        name: "Can I estimate adult weight from a 2 month puppy weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can make a rough estimate using current weight and breed size, but the result is not exact.",
        },
      },
      {
        "@type": "Question",
        name: "Do small and large puppies grow at different speeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small breeds often mature earlier, while large breeds may continue growing for much longer.",
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