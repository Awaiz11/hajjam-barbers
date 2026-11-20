import type { Metadata, Viewport } from "next";
import "@fontsource/big-shoulders-display/700";
import "@fontsource/big-shoulders-display/900";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hajjam Barbers — DHA Phase 6, Lahore",
  description:
    "Haircuts, skin fades, beard trims and hot towel shaves in DHA Phase 6, Lahore. Pick your barber and time and book on WhatsApp.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Hajjam Barbers — DHA Phase 6, Lahore",
    description: "Sharp cuts, done properly. Pick a time and book on WhatsApp.",
    images: ["https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&w=1200&q=75"],
  },
};

export const viewport: Viewport = {
  themeColor: "#14213d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
