export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much sleep does a puppy need by age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppy sleep needs depend on age, breed, activity level, health, and routine. Younger puppies usually need more sleep than older puppies.",
        },
      },
      {
        "@type": "Question",
        name: "Do 8 week old puppies sleep a lot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many 8 week old puppies sleep much of the day because they are growing quickly and adjusting to a new routine.",
        },
      },
      {
        "@type": "Question",
        name: "Can puppies sleep through the night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some puppies gradually learn to sleep longer at night, but young puppies may still need potty breaks.",
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