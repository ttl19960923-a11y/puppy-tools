export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much should I feed my puppy each day?",
        acceptedAnswer: { "@type": "Answer", text: "A useful starting point is to estimate your puppy's daily calorie requirement from body weight and growth stage, then convert those calories using the calorie density printed on the puppy food label. Individual needs vary, so monitor growth and body condition and adjust with your veterinarian." },
      },
      {
        "@type": "Question",
        name: "How many times a day should a puppy eat?",
        acceptedAnswer: { "@type": "Answer", text: "Merck Veterinary Manual gives a general recommendation of three meals per day from weaning to 6 months and two meals per day from 6 to 12 months. Some small-breed puppies may need more frequent meals." },
      },
      {
        "@type": "Question",
        name: "Should I measure puppy food by cups, grams, or calories?",
        acceptedAnswer: { "@type": "Answer", text: "Calories are the best bridge between an energy estimate and a specific food because foods vary in calorie density. For portioning, grams can be more repeatable than volume when the package provides kcal per kilogram or per 100 grams." },
      },
      {
        "@type": "Question",
        name: "Why does the calculator ask for calories per cup or per 100 grams?",
        acceptedAnswer: { "@type": "Answer", text: "Two puppy foods can contain very different calories in the same cup or weight. Using the calorie density from your actual food label avoids assuming that every dry or wet food has the same energy density." },
      },
      {
        "@type": "Question",
        name: "Is this puppy feeding calculator a substitute for a veterinarian?",
        acceptedAnswer: { "@type": "Answer", text: "No. The calculator provides an educational starting estimate for healthy growing puppies. A veterinarian should individualize feeding for puppies with medical conditions, unusual growth, poor body condition, or other special needs." },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
