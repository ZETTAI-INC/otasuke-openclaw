"use client";

import { ConfigProvider } from "antd";
import jaJP from "antd/locale/ja_JP";

export default function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      locale={jaJP}
      theme={{
        token: {
          colorPrimary: "#1677ff",
          colorSuccess: "#52c41a",
          colorError: "#ff4d4f",
          colorWarning: "#faad14",
          borderRadius: 8,
          fontFamily:
            '"AlibabaSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        },
        components: {
          Button: {
            borderRadius: 10,
            controlHeight: 40,
            paddingInline: 24,
          },
          Card: {
            borderRadiusLG: 16,
          },
          Tag: {
            borderRadiusSM: 20,
          },
          Input: {
            borderRadius: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
