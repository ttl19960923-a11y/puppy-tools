export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I tell if my dog is overweight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Overweight dogs may have reduced waist definition, difficulty feeling the ribs, and lower activity levels.",
        },
      },
      {
        "@type": "Question",
        name: "Why does dog weight matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maintaining a healthy weight may help reduce the risk of joint stress, reduced mobility, diabetes, and heart strain.",
        },
      },
      {
        "@type": "Question",
        name: "Is dog weight the same as body condition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Body condition also considers rib feel, waist shape, muscle mass, and overall body structure.",
        },
      },
      {
        "@type": "Question",
        name: "Can breed size affect healthy weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small, medium, and large breeds can have very different healthy weight ranges.",
        },
      },
      {
        "@type": "Question",
        name: "Should I ask a vet about my dog's weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, especially if your dog gains or loses weight suddenly or has existing health concerns.",
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