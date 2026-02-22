"use client";

import { useState } from "react";
import { Card, Tag, Button, Space, Row, Col, Flex } from "antd";
import { CheckCircleFilled, ShoppingCartOutlined, FileSearchOutlined } from "@ant-design/icons";

const configOptions = [
  { name: "スタンダード構成", desc: "AI開発入門に最適な基本構成", icon: "💻" },
  { name: "デベロッパー構成", desc: "本格的な開発環境をフル装備", icon: "⚡" },
  { name: "ハイパフォーマンス構成", desc: "大規模モデルの実行に対応", icon: "🚀" },
  { name: "データサイエンス構成", desc: "分析・ML向けツールを網羅", icon: "📊" },
  { name: "クリエイター構成", desc: "映像・デザイン制作に最適化", icon: "🎨" },
  { name: "エンタープライズ構成", desc: "法人向けセキュリティ・管理機能", icon: "🏢" },
  { name: "教育・研究機関向け", desc: "アカデミック用途に特化", icon: "🎓" },
  { name: "OPENCLAWでできること", desc: "OPENCLAWの全機能をご紹介", icon: "🔧" },
];

const specItems = [
  { label: "Mac mini", value: "M4 Pro" },
  { label: "メモリ", value: "48GB" },
  { label: "ストレージ", value: "512GB SSD" },
  { label: "お届け", value: "約3営業日" },
];

const softwareItems = [
  { name: "OPENCLAW", color: "blue" },
  { name: "Python 3.12", color: "green" },
  { name: "Node.js", color: "cyan" },
  { name: "Docker", color: "geekblue" },
  { name: "Git", color: "orange" },
  { name: "VS Code", color: "purple" },
] as const;

function ConfigPreview({ configName }: { configName: string }) {
  return (
    <Card className="!rounded-2xl !shadow-sm" styles={{ body: { padding: 24 } }}>
      {/* Header */}
      <Flex justify="space-between" align="start" className="mb-5">
        <div>
          <h3 className="text-lg font-bold text-ant-text-primary">
            {configName}
          </h3>
          <p className="mt-1 text-xs text-ant-text-tertiary">
            Mac miniにOPENCLAW環境を構築済み。最適なパフォーマンスでお届けします。
          </p>
        </div>
        <Tag color="success" className="!rounded-full !text-[11px] !font-semibold">
          在庫あり
        </Tag>
      </Flex>

      {/* Spec grid */}
      <Row gutter={[12, 12]} className="mb-5">
        {specItems.map((item) => (
          <Col xs={12} sm={6} key={item.label}>
            <div className="rounded-xl bg-ant-bg-card p-3">
              <p className="text-[10px] font-medium text-ant-text-tertiary">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-bold text-ant-text-primary">
                {item.value}
              </p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Software list */}
      <div className="mb-5">
        <p className="mb-3 text-xs font-semibold text-ant-text-secondary">
          プリインストール済み
        </p>
        <Flex wrap gap={8}>
          {softwareItems.map((item) => (
            <Tag
              key={item.name}
              color={item.color}
              className="!rounded-lg !px-3 !py-1 !text-xs"
            >
              {item.name}
            </Tag>
          ))}
        </Flex>
      </div>

      {/* Status */}
      <div className="mb-5 flex items-center gap-4 rounded-xl bg-blue-50/80 px-4 py-3">
        <Space size={6} className="text-green-600">
          <CheckCircleFilled />
          <span className="text-xs font-medium">OS設定済み</span>
        </Space>
        <Space size={6} className="text-blue-600">
          <CheckCircleFilled />
          <span className="text-xs font-medium">OPENCLAW導入済み</span>
        </Space>
        <Space size={6} className="text-green-600">
          <CheckCircleFilled />
          <span className="text-xs font-medium">動作検証済み</span>
        </Space>
      </div>

      {/* Actions */}
      <Space size={12}>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          className="!rounded-xl !font-semibold !shadow-sm !shadow-blue-500/20"
        >
          購入する
        </Button>
        <Button
          icon={<FileSearchOutlined />}
          className="!rounded-xl !font-medium"
        >
          仕様を見る
        </Button>
      </Space>
    </Card>
  );
}

export default function ThemeCustomization() {
  const [activeConfig, setActiveConfig] = useState("デベロッパー構成");

  return (
    <section className="section-divider mx-auto max-w-[1200px] px-6 py-20">
      <div className="mb-12 text-center">
        <Tag color="blue" className="!mb-4 !rounded-full !text-xs !font-semibold">
          8つのプラン
        </Tag>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ant-text-primary md:text-4xl">
          選べる構成プラン
        </h2>
        <p className="text-sm text-ant-text-tertiary">
          用途に合わせた最適な構成をお選びいただけます。すべてのプランにOPENCLAWセットアップが含まれます。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Left: config list */}
        <div className="flex flex-col gap-1.5 lg:sticky lg:top-20 lg:self-start">
          {configOptions.map((config) => (
            <button
              key={config.name}
              onClick={() => setActiveConfig(config.name)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                activeConfig === config.name
                  ? "border border-ant-primary/30 bg-blue-50 shadow-sm"
                  : "border border-transparent hover:bg-ant-bg-card"
              }`}
            >
              <span className="text-lg">{config.icon}</span>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-[13px] font-semibold ${
                    activeConfig === config.name
                      ? "text-ant-primary"
                      : "text-ant-text-primary"
                  }`}
                >
                  {config.name}
                </p>
                <p className="truncate text-[11px] text-ant-text-tertiary">
                  {config.desc}
                </p>
              </div>
              {activeConfig === config.name && (
                <div className="h-6 w-1 shrink-0 rounded-full bg-ant-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Right: preview */}
        <ConfigPreview configName={activeConfig} />
      </div>
    </section>
  );
}
