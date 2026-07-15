import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "P&P Construction | Canton, TX",
  description: "Concrete, fencing, land grading and clearing, concrete demolition, and haul-off services in Canton, Texas and surrounding areas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
