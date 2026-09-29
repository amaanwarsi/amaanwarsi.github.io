import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZaykaTap Case Study | Amaan Warsi",
  description:
    "Marketplace connecting food vendors with cafes, featuring real-time QR ordering.",
};

export default function ZaykaTapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
