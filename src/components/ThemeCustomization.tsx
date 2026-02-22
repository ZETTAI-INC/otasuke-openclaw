"use client";

import { useState } from "react";

const configOptions = [
  {
    name: "スタンダード構成",
    desc: "AI開発入門に最適な基本構成",
    icon: "💻",
  },
  {
    name: "デベロッパー構成",
    desc: "本格的な開発環境をフル装備",
    icon: "⚡",
  },
  {
    name: "ハイパフォーマンス構成",
    desc: "大規模モデルの実行に対応",
    icon: "🚀",
  },
  {
    name: "データサイエンス構成",
    desc: "分析・ML向けツールを網羅",
    icon: "📊",
  },
  {
    name: "クリエイター構成",
    desc: "映像・デザイン制作に最適化",
    icon: "🎨",
  },
  {
    name: "エンタープライズ構成",
    desc: "法人向けセキュリティ・管理機能",
    icon: "🏢",
  },
  {
    name: "教育・研究機関向け",
    desc: "アカデミック用途に特化",
    icon: "🎓",
  },
  {
    name: "OPENCLAWでできること",
    desc: "OPENCLAWの全機能をご紹介",
    icon: "🔧",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const specItems = [
  { label: "Mac mini", value: "M4 Pro" },
  { label: "メモリ", value: "48GB" },
  { label: "ストレージ", value: "512GB SSD" },
  { label: "お届け", value: "約3営業日" },
];

const softwareItems = [
  { name: "OPENCLAW", color: "bg-blue-500" },
  { name: "Python 3.12", color: "bg-green-500" },
  { name: "Node.js", color: "bg-emerald-500" },
  { name: "Docker", color: "bg-sky-500" },
  { name: "Git", color: "bg-orange-500" },
  { name: "VS Code", color: "bg-violet-500" },
];

function ConfigPreview({ configName }: { configName: string }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-ant-border-dark bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-ant-text-primary">{configName}</h3>
          <p className="mt-1 text-xs text-ant-text-tertiary">
            Mac miniにOPENCLAW環境を構築済み。最適なパフォーマンスでお届けします。
          </p>
        </div>
        <span className="rounded-full bg-green-500/10 px-3 py-1 text-[11px] font-semibold text-green-600">
          在庫あり
        </span>
      </div>

      {/* Spec grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {specItems.map((item) => (
          <div key={item.label} className="rounded-xl bg-ant-bg-card p-3">
            <p className="text-[10px] font-medium text-ant-text-tertiary">{item.label}</p>
            <p className="mt-0.5 text-sm font-bold text-ant-text-primary">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Software list */}
      <div>
        <p className="mb-3 text-xs font-semibold text-ant-text-secondary">プリインストール済み</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {softwareItems.map((item) => (
            <div key={item.name} className="flex items-center gap-2 rounded-lg bg-ant-bg-card px-3 py-2">
              <div className={`h-2 w-2 rounded-full ${item.color}`} />
              <span className="text-xs font-medium text-ant-text-secondary">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center gap-4 rounded-xl bg-blue-50/80 px-4 py-3">
        <div className="flex items-center gap-1.5 text-green-600">
          <CheckIcon />
          <span className="text-xs font-medium">OS設定済み</span>
        </div>
        <div className="flex items-center gap-1.5 text-blue-600">
          <CheckIcon />
          <span className="text-xs font-medium">OPENCLAW導入済み</span>
        </div>
        <div className="flex items-center gap-1.5 text-green-600">
          <CheckIcon />
          <span className="text-xs font-medium">動作検証済み</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="rounded-xl bg-ant-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-all hover:bg-ant-primary-hover hover:shadow-md hover:shadow-blue-500/25">
          購入する
        </button>
        <button className="rounded-xl border border-ant-border-dark px-5 py-2.5 text-sm font-medium text-ant-text-secondary transition-colors hover:border-ant-primary/30 hover:text-ant-primary">
          仕様を見る
        </button>
      </div>
    </div>
  );
}

export default function ThemeCustomization() {
  const [activeConfig, setActiveConfig] = useState("デベロッパー構成");

  return (
    <section className="section-divider mx-auto max-w-[1200px] px-6 py-20">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5">
          <span className="text-xs font-semibold text-blue-700">8つのプラン</span>
        </div>
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
              <div className="flex-1 min-w-0">
                <p className={`text-[13px] font-semibold truncate ${
                  activeConfig === config.name ? "text-ant-primary" : "text-ant-text-primary"
                }`}>
                  {config.name}
                </p>
                <p className="text-[11px] text-ant-text-tertiary truncate">{config.desc}</p>
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
