export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do puppy years compare to human years?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies grow much faster than humans during their first years of life. The first year of a puppy's life is often estimated as about 10.5 human years.",
        },
      },
      {
        "@type": "Question",
        name: "Is one dog year equal to seven human years?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not exactly. The seven-year rule is only a rough estimate because dogs age differently depending on breed size and life stage.",
        },
      },
      {
        "@type": "Question",
        name: "Do large dog breeds age faster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Larger dog breeds often age faster and may have shorter lifespans compared to smaller breeds.",
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