import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const pierSans = Plus_Jakarta_Sans({
  variable: "--font-pier-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fertigo = Bodoni_Moda({
  variable: "--font-fertigo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Khingpar Restaurant & Bar | Pan Asian Dining in Electronic City, Bangalore",
  description:
    "Khingpar Restaurant & Bar brings sushi, dim sum, wok-tossed noodles and craft cocktails to Electronic City, Bangalore. Pet-friendly patio, free Wi-Fi, high chairs. Open daily — reserve your table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pierSans.variable} ${fertigo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
