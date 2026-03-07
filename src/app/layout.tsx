import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "FABRIC Testbed — Explore Impactful Ideas Beyond the Scope of the Current Internet",
    template: "%s | FABRIC Testbed",
  },
  description:
    "FABRIC is an innovative infrastructure to prototype and validate novel network and computing solutions. Experiment at scale on a realistic global network.",
  keywords: ["FABRIC", "testbed", "networking", "research", "NSF", "infrastructure", "distributed computing"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FABRIC Testbed",
    title: "FABRIC Testbed",
    description: "Explore impactful ideas beyond the scope of the current Internet.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-fabric-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
