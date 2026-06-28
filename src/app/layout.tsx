import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import { profile } from "@/data/content";
import BackgroundFX from "@/components/BackgroundFX";
import "./globals.css";

// Display (headlines, name) — geometric, heavy. Matches the reference's bold caps.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body — clean, neutral
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const fullName = `${profile.firstName} ${profile.lastName}`;

export const metadata: Metadata = {
  title: `${fullName} — ${profile.role}`,
  description: profile.tagline,
  keywords: ["Fullstack Developer", "React", "Next.js", "Node.js", "Portfolio", fullName],
  authors: [{ name: fullName }],
  openGraph: {
    title: `${fullName} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
