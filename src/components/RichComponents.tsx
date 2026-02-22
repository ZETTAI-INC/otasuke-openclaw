"use client";

import { useState } from "react";

interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  details: string[];
}

const features: Feature[] = [
  {
    name: "ローカルAI実行",
    description: "クラウド不要。Mac上でAIモデルをローカル実行。プライバシーを守りながら高速推論。",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
    details: ["Apple Silicon最適化", "GPU完全活用", "オフライン動作"],
  },
  {
    name: "コード生成・補完",
    description: "AIがコードを自動生成・補完。対話形式で要件を伝えるだけで、高品質なコードを出力。",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    details: ["多言語対応", "コンテキスト理解", "リファクタリング"],
  },
  {
    name: "ドキュメント処理",
    description: "PDFやテキストファイルを読み込み、要約・翻訳・情報抽出をAIが自動処理。",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    details: ["PDF/CSV/JSON対応", "自動要約", "多言語翻訳"],
  },
  {
    name: "マルチモデル対応",
    description: "LLaMA、Mistral、Gemmaなど主要なオープンソースモデルを切り替えて利用可能。",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    details: ["LLaMA 3", "Mistral", "Gemma / Phi"],
  },
  {
    name: "ワークフロー自動化",
    description: "繰り返しタスクをAIパイプラインで自動化。コマンド一つで複雑な処理を実行。",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    details: ["パイプライン構築", "スケジュール実行", "Webhook連携"],
  },
  {
    name: "データ分析",
    description: "CSVやデータベースのデータを自然言語で分析。グラフ生成やレポート作成もAIにおまかせ。",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
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
    <button
      onClick={onClick}
      className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
        isActive
          ? "border-ant-primary/25 bg-white shadow-lg shadow-blue-500/8"
          : "border-ant-border-dark bg-white hover:border-ant-primary/15 hover:shadow-md"
      }`}
    >
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.bgColor} ${feature.color} transition-transform group-hover:scale-105`}>
        {feature.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-[14px] font-bold text-ant-text-primary">{feature.name}</h4>
          {isActive && (
            <span className="h-1.5 w-1.5 rounded-full bg-ant-primary" />
          )}
        </div>
        <p className="mt-1 text-[12px] leading-relaxed text-ant-text-tertiary">
          {feature.description}
        </p>
      </div>
    </button>
  );
}

function DetailPanel({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-ant-border-dark bg-white shadow-sm">
      {/* Header */}
      <div className={`${feature.bgColor} p-6`}>
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 ${feature.color}`}>
            {feature.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-ant-text-primary">{feature.name}</h3>
            <p className="text-xs text-ant-text-secondary">{feature.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {feature.details.map((detail) => (
            <span
              key={detail}
              className={`rounded-lg ${feature.bgColor} px-3 py-1.5 text-xs font-semibold ${feature.color}`}
            >
              {detail}
            </span>
          ))}
        </div>

        {/* Demo terminal */}
        <div className="overflow-hidden rounded-xl border border-ant-border-dark bg-slate-900">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="ml-2 text-[10px] text-white/40">Terminal - OPENCLAW</span>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed">
            <div className="text-green-400">$ openclaw run</div>
            <div className="mt-1 text-white/50">
              Loading model... <span className="text-green-400">done</span>
            </div>
            <div className="text-white/50">
              {feature.name} ready <span className="text-cyan-400">[{feature.details[0]}]</span>
            </div>
            <div className="mt-2 flex items-center text-white/70">
              <span className="text-blue-400">&gt;</span>
              <span className="ml-1.5 inline-block h-3.5 w-[2px] animate-pulse bg-white/60" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-ant-bg-card p-3 text-center">
            <p className="text-lg font-extrabold text-ant-text-primary">10x</p>
            <p className="text-[10px] text-ant-text-tertiary">高速化</p>
          </div>
          <div className="rounded-xl bg-ant-bg-card p-3 text-center">
            <p className="text-lg font-extrabold text-ant-text-primary">100%</p>
            <p className="text-[10px] text-ant-text-tertiary">ローカル</p>
          </div>
          <div className="rounded-xl bg-ant-bg-card p-3 text-center">
            <p className="text-lg font-extrabold text-ant-text-primary">0円</p>
            <p className="text-[10px] text-ant-text-tertiary">API費用</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RichComponents() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-divider mx-auto max-w-[1200px] px-6 py-20">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5">
          <span className="text-xs font-semibold text-blue-700">OPENCLAWでできること</span>
        </div>
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
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.name}
              feature={feature}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Right: detail panel */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <DetailPanel feature={features[activeIndex]} />
        </div>
      </div>
    </section>
  );
}
