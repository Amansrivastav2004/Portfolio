import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Srivastav | AI & Full Stack Developer",

  description:
    "Portfolio of Aman Srivastav showcasing AI, Machine Learning, Data Science, Cloud Computing and Full Stack Development projects.",

  keywords: [
    "Aman Srivastav",
    "Portfolio",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cloud Computing",
    "Python",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Full Stack Developer",
    "MCA Student",
  ],

  authors: [
    {
      name: "Aman Srivastav",
    },
  ],

  creator: "Aman Srivastav",

  openGraph: {
    title: "Aman Srivastav | AI & Full Stack Developer",
    description:
      "Explore my AI, Data Science, Cloud Computing and Web Development projects.",
    url: "https://your-domain.com",
    siteName: "Aman Portfolio",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body
        className="
          bg-[#020617]
          text-white
          min-h-screen
          overflow-x-hidden
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}