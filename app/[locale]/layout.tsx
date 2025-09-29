import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Rainforest Bird Species",
  description: "Explore the diverse bird species of the Amazon rainforest and their conservation status",
};

export default function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
