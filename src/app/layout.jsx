import "@/scss/style.scss";
import Header from "@/components/Header";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "SAO's Page | Saori Ogawa Portfolio",
    template: "%s | SAO's Page",
  },
  description: "小川沙織のフロントエンドエンジニア・Web制作ポートフォリオ",
  keywords: ["小川沙織", "ポートフォリオ", "フロントエンドエンジニア", "Webデザイン", "Next.js", "JavaScript", "SCSS", "WordPress", "Figma"],
  authors: [{ name: "Saori Ogawa" }],
  creator: "Saori Ogawa",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "SAO's Page",
    title: "SAO's Page | Saori Ogawa Portfolio",
    description: "小川沙織のフロントエンドエンジニア・Web制作ポートフォリオ",
    images: [{ url: "/img/top/portfolio-fv.png", width: 1920, height: 567, alt: "SAO's Page" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAO's Page | Saori Ogawa Portfolio",
    description: "小川沙織のフロントエンドエンジニア・Web制作ポートフォリオ",
    images: ["/img/top/portfolio-fv.png"],
  },

  icons: {
    icon: [
      {
        url: "/img/common/icon.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/img/common/apple-icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
