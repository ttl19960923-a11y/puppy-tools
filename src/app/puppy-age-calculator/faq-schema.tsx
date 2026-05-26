export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is one dog year always equal to seven human years?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Puppies grow much faster during their first year, so the simple seven-year rule is only a rough estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Do small and large puppies age differently?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small breeds often mature earlier, while large breeds may take longer to reach adult size and full maturity.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most important puppy age stage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Early puppy months are important for socialization, training, feeding routines, and healthy development.",
        },
      },
      {
        "@type": "Question",
        name: "When does a puppy become an adult dog?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many dogs become young adults around 12 months, but large breeds may continue maturing for 18 months or longer.",
        },
      },
      {
        "@type": "Question",
        name: "Does puppy age affect feeding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Younger puppies usually need more frequent meals, while older puppies may gradually move toward adult feeding routines.",
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