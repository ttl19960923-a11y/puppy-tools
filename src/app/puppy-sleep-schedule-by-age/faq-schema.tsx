export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many hours should a puppy sleep each day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young puppies may sleep 18 to 20 hours daily, while older puppies often need around 12 to 16 hours depending on age and activity level.",
        },
      },
      {
        "@type": "Question",
        name: "Do 8 week old puppies sleep a lot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many 8 week old puppies sleep much of the day because they are growing quickly and adapting to new experiences.",
        },
      },
      {
        "@type": "Question",
        name: "Can puppies sleep through the night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some puppies gradually learn to sleep longer at night, but young puppies may still wake for potty breaks.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my puppy take frequent naps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies often alternate between active play and sleep because their bodies and brains are developing rapidly.",
        },
      },
      {
        "@type": "Question",
        name: "Does breed size affect puppy sleep?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breed size and activity level may influence sleep patterns, although individual puppies can vary significantly.",
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