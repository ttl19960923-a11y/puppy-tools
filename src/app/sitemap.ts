import { MetadataRoute } from "next";

const baseUrl = "https://puppy-tools.vercel.app";

const routes = [
  "",
  "/puppy-feeding-calculator",
  "/dog-feeding-calculator",
  "/dog-food-calculator",
  "/dog-calorie-calculator",
  "/dog-weight-calculator",
  "/dog-bmi-calculator",
  "/ideal-dog-weight-calculator",
  "/dog-age-calculator",
  "/dog-water-calculator",
  "/dog-feeding-chart-by-age",

  "/puppy-calorie-calculator",
  "/puppy-water-calculator",
  "/puppy-age-calculator",
  "/puppy-age-chart",
  "/puppy-growth-chart",
  "/puppy-weight-predictor",
  "/puppy-size-calculator",
  "/puppy-feeding-chart",
  "/puppy-feeding-schedule",
  "/puppy-sleep-schedule-by-age",

  "/dog-pregnancy-calculator",
  "/dog-due-date-calculator",
  "/dog-heat-cycle-calculator",

  "/golden-retriever-feeding-calculator",
  "/labrador-feeding-calculator",
  "/german-shepherd-feeding-calculator",
  "/husky-feeding-calculator",
  "/pitbull-feeding-calculator",
  "/french-bulldog-feeding-calculator",
  "/chihuahua-feeding-calculator",
  "/poodle-feeding-calculator",
  "/rottweiler-feeding-calculator",
  "/border-collie-feeding-calculator",

  "/8-week-puppy-feeding-calculator",
  "/10-week-puppy-feeding-calculator",
  "/3-month-puppy-feeding-calculator",
  "/puppy-calorie-calculator-by-age",
  "/golden-retriever-puppy-calorie-calculator",
  "/chihuahua-puppy-calorie-calculator",
  "/dog-calorie-chart-by-breed",
  "/2-month-puppy-weight-calculator",
  "/labrador-puppy-growth-chart",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}