export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How many calories should a puppy eat per day?", acceptedAnswer: { "@type": "Answer", text: "A common veterinary starting method calculates resting energy requirement (RER) from current body weight, then applies a growth factor. Healthy puppies under 4 months are often estimated at about 3 times RER, while puppies 4 months and older are often estimated at about 2 times RER. Individual needs can vary, so growth and body condition should be monitored." } },
      { "@type": "Question", name: "What is RER for a puppy?", acceptedAnswer: { "@type": "Answer", text: "RER means resting energy requirement. A commonly used formula is RER = 70 × body weight in kilograms to the 0.75 power. For growing puppies, a life-stage factor is then applied to estimate daily energy needs." } },
      { "@type": "Question", name: "Do puppies need more calories than adult dogs?", acceptedAnswer: { "@type": "Answer", text: "Growing puppies generally have higher energy needs relative to body size than adult dogs because energy is needed for growth as well as normal activity and maintenance." } },
      { "@type": "Question", name: "How do I convert puppy calories into cups or grams?", acceptedAnswer: { "@type": "Answer", text: "Use the calorie density printed on the puppy food label. Divide the puppy's estimated daily calories by kcal per cup, or use kcal per 100 grams to calculate a gram amount. Different foods can provide very different calories per cup or gram." } },
      { "@type": "Question", name: "Should treats count toward my puppy's daily calories?", acceptedAnswer: { "@type": "Answer", text: "Yes. Treats, snacks, chews, and other calorie-containing extras should be included in total daily intake. A common nutrition guideline is for complete and balanced food to provide at least about 90% of total calories, leaving about 10% or less for treats and other extras." } },
      { "@type": "Question", name: "Should I reduce calories if my puppy looks overweight?", acceptedAnswer: { "@type": "Answer", text: "Do not apply an aggressive automatic calorie reduction to a growing puppy. Review body condition, growth rate, diet, treats, and the feeding plan with a veterinarian so growth remains appropriate." } },
      { "@type": "Question", name: "Do large-breed puppies need a different calorie formula?", acceptedAnswer: { "@type": "Answer", text: "The basic RER and growth-factor approach can still be used as a starting estimate. Large- and giant-breed puppies require particular attention to controlled growth, lean body condition, and a complete and balanced growth diet appropriate for large-size dogs." } },
      { "@type": "Question", name: "How often should I recalculate my puppy's calories?", acceptedAnswer: { "@type": "Answer", text: "Recalculate as your puppy gains weight and moves through growth stages, and reassess sooner if body condition, activity, health, or diet changes. A calorie calculation is a starting point rather than a fixed prescription." } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
