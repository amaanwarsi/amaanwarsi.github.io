import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dar Al Safa Case Study | Amaan Warsi",
  description: "Online learning platform connecting students with universities, institutes, and independent teachers.",
};

export default function DarAlSafaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
