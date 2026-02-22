"use client";

import { Button, Tag, Space, Typography } from "antd";
import {
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-6 pt-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
        <div className="absolute top-[20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] h-[300px] w-[300px] rounded-full bg-purple-100/30 blur-[100px]" />
        <div className="absolute top-[30%] left-[10%] h-[250px] w-[250px] rounded-full bg-cyan-100/30 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <Tag
          color="blue"
          className="!mb-6 !rounded-full !border-blue-200/60 !bg-blue-50/80 !px-4 !py-1.5 !text-xs !font-medium !backdrop-blur-sm"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          在庫あり・最短3営業日でお届け
        </Tag>

        <Title
          level={1}
          className="!mb-5 !text-[clamp(2.5rem,6vw,4.5rem)] !font-extrabold !leading-[1.1] !tracking-tight"
        >
          <span className="block">OPENCLAW搭載の</span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Mac miniをお届け
          </span>
        </Title>

        <Paragraph className="!mb-10 max-w-lg !text-base !leading-relaxed !text-ant-text-secondary">
          面倒な環境構築は全ておまかせ。届いたその日から
          <br className="hidden sm:block" />
          AI開発を始められるセットアップ済みMac mini。
        </Paragraph>

        <Space size={16} wrap className="justify-center">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            iconPlacement="end"
            className="!rounded-xl !px-7 !py-3 !text-sm !font-semibold !shadow-lg !shadow-blue-500/25 hover:!shadow-xl hover:!shadow-blue-500/30"
          >
            製品を見る
          </Button>
          <Button
            size="large"
            className="!rounded-xl !border-ant-border-dark !bg-white/80 !px-7 !py-3 !text-sm !font-medium !text-ant-text-secondary !shadow-sm !backdrop-blur-sm hover:!border-ant-primary/30 hover:!text-ant-primary"
          >
            サービスの詳細
          </Button>
        </Space>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <Space size={6} className="text-xs text-ant-text-tertiary">
            <SafetyCertificateOutlined />
            30日間無料サポート
          </Space>
          <Space size={6} className="text-xs text-ant-text-tertiary">
            <CheckCircleOutlined />
            動作検証済み
          </Space>
          <Space size={6} className="text-xs text-ant-text-tertiary">
            <LaptopOutlined />
            全国送料無料
          </Space>
        </div>
      </div>
    </section>
  );
}
