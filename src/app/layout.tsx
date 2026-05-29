import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sequence Studio | AI 영상 제작 & 교육",
    template: "%s | Sequence Studio",
  },
  description:
    "브랜드에 맞는 이유 있는 한 컷. AI 아트 디렉션 기반 브랜드 영상 제작 스튜디오.",
  keywords: [
    "AI 영상 제작",
    "브랜드 필름",
    "AI Art Direction",
    "시퀀스스튜디오",
    "Sequence Studio",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://sequencestudio.kr",
    siteName: "Sequence Studio",
    title: "Sequence Studio | AI 영상 제작 & 교육",
    description:
      "브랜드에 맞는 이유 있는 한 컷. AI 아트 디렉션 기반 브랜드 영상 제작 스튜디오.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sequence Studio",
    description:
      "브랜드에 맞는 이유 있는 한 컷. AI 아트 디렉션 기반 브랜드 영상 제작 스튜디오.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
