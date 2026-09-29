const faqs = [
  ["When do puppies stop growing?", "Growth timing depends strongly on expected adult size and breed. Small dogs may reach mature size within the first year, while large and giant dogs can continue skeletal development well into the second year."],
  ["How can I tell if my puppy is growing normally?", "A single weight is less informative than a series of measurements. Track weight and body condition over time and discuss unexpected plateaus, rapid changes, or body-condition concerns with your veterinarian."],
  ["Can puppy weight predict adult weight?", "Current weight can contribute to an adult-weight estimate, but no simple multiplier is exact for every puppy. Breed, genetics, sex, age, nutrition, health, and the puppy's individual growth curve all affect final weight."],
  ["Do small puppies finish growing before large puppies?", "Usually. Small dogs commonly mature earlier, while large and giant breeds generally have longer growth and skeletal-development periods."],
  ["How often should I weigh my puppy?", "Regular measurements are useful because the trend matters more than one number. Young growing puppies can be weighed frequently; your veterinarian can recommend an interval that fits your puppy's age, size, and health."],
  ["Should a puppy grow as fast as possible?", "No. Faster growth is not necessarily healthier growth. Overfeeding can accelerate growth, and controlled steady growth is particularly important for large and giant breed puppies."],
  ["When should I worry about my puppy's growth?", "Contact your veterinarian if growth unexpectedly stalls, weight changes rapidly, body condition becomes too thin or heavy, or your puppy has poor appetite, vomiting, diarrhea, lethargy, pain, limping, or another concerning sign."],
];

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
