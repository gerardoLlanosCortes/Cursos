import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seo Title",
  description: "Seo Description",
  keywords: ["About page", "Gerardo", "informacion"]
};

export default function AboutPage() {
  return (
    <span className="text-7xl">AboutPage</span>
  );
}

