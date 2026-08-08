import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onelovekidstennis.com"),
  title: "One Love Kids Tennis | Cape May Youth Tennis",
  description: "Summer tennis clinics for kids ages 4–18 at the Historic Cape May Tennis Club in Cape May, New Jersey.",
  keywords: ["kids tennis", "Cape May tennis", "youth tennis", "summer tennis clinic"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "One Love Kids Tennis",
    description: "Grow their game. Love every point.",
    url: "/",
    siteName: "One Love Kids Tennis",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "One Love Kids Tennis — Grow their game. Love every point." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Love Kids Tennis",
    description: "Grow their game. Love every point.",
    images: ["/og.png"],
  },
  icons: { icon: "/legacy-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
