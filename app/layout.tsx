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
  title: "WINE BAR 紡 TSUMUGI｜池袋のワインバー",
  description:
    "池袋西口徒歩5分。赤白泡のグラスワインを常時10種類ご用意。火〜土 18:00〜1:00（日月定休）予約は電話またはInstagram DM。",
  verification: {
    google: "yBMU_qK0Z0Gm_upuZ",
  },
};

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
