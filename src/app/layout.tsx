import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dainik Jagran inext Bikeathon 2025 | Pedal Towards Health',
  description: 'Join India\'s premier multi-city bicycle rally, Dainik Jagran inext Bikeathon 2025. Register now for fitness, fun, and community across 12 cities!',
  keywords: ["bikeathon, cycling, bicycle rally, Dainik Jagran, fitness event, India, Kanpur, Lucknow, Prayagraj, Varanasi, Gorakhpur, Bareilly, Agra, Meerut, Patna, Ranchi, Jamshedpur, Dehradun"],
  openGraph: {
    "title": "Dainik Jagran inext Bikeathon 2025",
    "description": "Pedal Towards Health and Happiness with India's largest cycling event.",
    "url": "https://www.bikeathon2025.com",
    "siteName": "Dainik Jagran inext Bikeathon 2025",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/handsome-male-cyclist-riding-bicycle-pavement_23-2147892622.jpg",
        "alt": "Group of cyclists racing"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dainik Jagran inext Bikeathon 2025",
    "description": "Pedal Towards Health and Happiness with India's largest cycling event.",
    "images": [
      "http://img.b2bpic.net/free-photo/handsome-male-cyclist-riding-bicycle-pavement_23-2147892622.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
