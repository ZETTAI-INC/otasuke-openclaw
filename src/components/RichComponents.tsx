"use client";

import { useState } from "react";
import { Card, Tag, Statistic, Row, Col, Flex } from "antd";
import {
  CloudServerOutlined,
  CodeOutlined,
  FileTextOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  tagColor: string;
  details: string[];
}

const features: Feature[] = [
  {
    name: "ローカルAI実行",
    description:
      "クラウド不要。Mac上でAIモデルをローカル実行。プライバシーを守りながら高速推論。",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tagColor: "blue",
    icon: <CloudServerOutlined style={{ fontSize: 22 }} />,
    details: ["Apple Silicon最適化", "GPU完全活用", "オフライン動作"],
  },
  {
    name: "コード生成・補完",
    description:
      "AIがコードを自動生成・補完。対話形式で要件を伝えるだけで、高品質なコードを出力。",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    tagColor: "purple",
    icon: <CodeOutlined style={{ fontSize: 22 }} />,
    details: ["多言語対応", "コンテキスト理解", "リファクタリング"],
  },
  {
    name: "ドキュメント処理",
    description:
      "PDFやテキストファイルを読み込み、要約・翻訳・情報抽出をAIが自動処理。",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    tagColor: "green",
    icon: <FileTextOutlined style={{ fontSize: 22 }} />,
    details: ["PDF/CSV/JSON対応", "自動要約", "多言語翻訳"],
  },
  {
    name: "マルチモデル対応",
    description:
      "LLaMA、Mistral、Gemmaなど主要なオープンソースモデルを切り替えて利用可能。",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    tagColor: "orange",
    icon: <GlobalOutlined style={{ fontSize: 22 }} />,
    details: ["LLaMA 3", "Mistral", "Gemma / Phi"],
  },
  {
    name: "ワークフロー自動化",
    description:
      "繰り返しタスクをAIパイプラインで自動化。コマンド一つで複雑な処理を実行。",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    tagColor: "cyan",
    icon: <ThunderboltOutlined style={{ fontSize: 22 }} />,
    details: ["パイプライン構築", "スケジュール実行", "Webhook連携"],
  },
  {
    name: "データ分析",
    description:
      "CSVやデータベースのデータを自然言語で分析。グラフ生成やレポート作成もAIにおまかせ。",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    tagColor: "magenta",
    icon: <BarChartOutlined style={{ fontSize: 22 }} />,
    details: ["自然言語クエリ", "可視化", "レポート自動生成"],
  },
];

function FeatureCard({
  feature,
  isActive,
  onClick,
}: {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Card
      hoverable
      onClick={onClick}
      className={`!cursor-pointer !rounded-2xl transition-all ${
        isActive
          ? "!border-ant-primary/25 !shadow-lg !shadow-blue-500/8"
          : "!border-ant-border-dark hover:!border-ant-primary/15 hover:!shadow-md"
      }`}
      styles={{ body: { padding: 20 } }}
    >
      <Flex gap={16} align="start">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.bgColor} ${feature.color} transition-transform hover:scale-105`}
        >
          {feature.icon}
        </div>
        <div className="min-w-0 flex-1">
          <Flex align="center" gap={8}>
            <h4 className="text-[14px] font-bold text-ant-text-primary">
              {feature.name}
            </h4>
            {isActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-ant-primary" />
            )}
          </Flex>
          <p className="mt-1 text-[12px] leading-relaxed text-ant-text-tertiary">
            {feature.description}
          </p>
        </div>
      </Flex>
    </Card>
  );
}

function DetailPanel({ feature }: { feature: Feature }) {
  return (
    <Card
      className="!overflow-hidden !rounded-2xl !shadow-sm"
      styles={{ body: { padding: 0 } }}
    >
      {/* Header */}
      <div className={`${feature.bgColor} p-6`}>
        <Flex gap={12} align="center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 ${feature.color}`}
          >
            {feature.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-ant-text-primary">
              {feature.name}
            </h3>
            <p className="text-xs text-ant-text-secondary">
              {feature.description}
            </p>
          </div>
        </Flex>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6">
        {/* Tags */}
        <Flex wrap gap={8}>
          {feature.details.map((detail) => (
            <Tag
              key={detail}
              color={feature.tagColor}
              className="!rounded-lg !px-3 !py-1.5 !text-xs !font-semibold"
            >
              {detail}
            </Tag>
          ))}
        </Flex>

        {/* Demo terminal */}
        <div className="overflow-hidden rounded-xl border border-ant-border-dark bg-slate-900">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="ml-2 text-[10px] text-white/40">
              Terminal - OPENCLAW
            </span>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed">
            <div className="text-green-400">$ openclaw run</div>
            <div className="mt-1 text-white/50">
              Loading model... <span className="text-green-400">done</span>
            </div>
            <div className="text-white/50">
              {feature.name} ready{" "}
              <span className="text-cyan-400">[{feature.details[0]}]</span>
            </div>
            <div className="mt-2 flex items-center text-white/70">
              <span className="text-blue-400">&gt;</span>
              <span className="ml-1.5 inline-block h-3.5 w-[2px] animate-pulse bg-white/60" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <Row gutter={12}>
          <Col span={8}>
            <Card className="!rounded-xl !bg-ant-bg-card" styles={{ body: { padding: 12, textAlign: "center" } }}>
              <Statistic
                title={<span className="!text-[10px] text-ant-text-tertiary">高速化</span>}
                value="10x"
                styles={{ content: { fontSize: 20, fontWeight: 800 } }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card className="!rounded-xl !bg-ant-bg-card" styles={{ body: { padding: 12, textAlign: "center" } }}>
              <Statistic
                title={<span className="!text-[10px] text-ant-text-tertiary">ローカル</span>}
                value="100%"
                styles={{ content: { fontSize: 20, fontWeight: 800 } }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card className="!rounded-xl !bg-ant-bg-card" styles={{ body: { padding: 12, textAlign: "center" } }}>
              <Statistic
                title={<span className="!text-[10px] text-ant-text-tertiary">API費用</span>}
                value="0円"
                styles={{ content: { fontSize: 20, fontWeight: 800 } }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default function RichComponents() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-divider mx-auto max-w-[1200px] px-6 py-20">
      <div className="mb-12 text-center">
        <Tag color="blue" className="!mb-4 !rounded-full !text-xs !font-semibold">
          OPENCLAWでできること
        </Tag>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ant-text-primary md:text-4xl">
          OPENCLAWの主な機能
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-ant-text-tertiary">
          ローカル環境でAIの力を最大限に活用。コード生成からデータ分析まで、
          幅広いタスクをMac mini上で完結できます。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        {/* Left: feature cards grid */}
        <Row gutter={[12, 12]}>
          {features.map((feature, i) => (
            <Col xs={24} sm={12} key={feature.name}>
              <FeatureCard
                feature={feature}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            </Col>
          ))}
        </Row>

        {/* Right: detail panel */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <DetailPanel feature={features[activeIndex]} />
        </div>
      </div>
    </section>
  );
}
