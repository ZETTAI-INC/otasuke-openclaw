import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdProvider from "@/components/AntdProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "OTASUKE OPENCLAW - OPENCLAWセットアップ済みMac miniの販売サービス",
  description:
    "OPENCLAWをセットアップ済みのMac miniをお届け。届いたらすぐに使える、面倒な設定は全ておまかせ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AntdRegistry>
          <AntdProvider>{children}</AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
