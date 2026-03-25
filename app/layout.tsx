import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yenny Daniela Velasquez Paternina | Digital Marketing & Analytics",
  description: "Portfolio of Yenny Daniela, a Digital Marketing & Analytics professional specialized in AI-driven strategies and data-driven insights.",
  keywords: ["Digital Marketing", "Data Analytics", "TBS Barcelona", "AI Marketing", "Marketing Intern", "Barcelona"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
