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
          text: "Not exactly. Dogs age much faster during their first years of life, so the seven-year rule is only a rough estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Do different dog breeds age differently?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Smaller dog breeds often live longer than larger breeds, so aging speed can vary.",
        },
      },
      {
        "@type": "Question",
        name: "When is a dog considered a senior?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Large breeds may enter senior stages earlier, while small breeds may become seniors later in life.",
        },
      },
      {
        "@type": "Question",
        name: "Does dog size affect age conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Breed size and adult body size may affect how quickly dogs age compared to humans.",
        },
      },
      {
        "@type": "Question",
        name: "Is dog age conversion exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Dog age conversion is only an estimate because breed, genetics, health, and lifestyle all influence aging.",
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