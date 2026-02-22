"use client";

import { useState } from "react";

const configOptions = [
  "スタンダード構成",
  "デベロッパー構成",
  "ハイパフォーマンス構成",
  "データサイエンス構成",
  "クリエイター構成",
  "エンタープライズ構成",
  "教育・研究機関向け",
  "カスタム構成",
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ConfigPreview() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-ant-border-dark bg-ant-bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-ant-text-primary">OPENCLAW セットアップ内容</span>
        <p className="max-w-[260px] text-xs text-ant-text-tertiary">
          Mac miniにOPENCLAW環境を構築済み。
          各種ツール・ライブラリ・設定をプリインストールし、
          最適なパフォーマンスでお届けします。
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-md border border-ant-border-dark px-3 py-1 text-xs text-ant-text-secondary">
          仕様を見る
        </button>
        <button className="rounded-md bg-ant-primary px-3 py-1 text-xs text-white">
          購入する
        </button>
      </div>

      <div className="rounded-md bg-blue-50 px-3 py-1.5 text-xs text-blue-600">
        セットアップ完了まで約3営業日
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md border border-ant-border-dark px-2 py-1 text-xs text-ant-text-secondary">
          Mac mini
        </span>
        <span className="rounded-full bg-ant-bg-card-hover px-2.5 py-0.5 text-xs text-ant-text-primary">
          M4 Pro
        </span>
        <span className="rounded-full bg-ant-bg-card-hover px-2.5 py-0.5 text-xs text-ant-text-primary">
          48GB RAM
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs text-ant-text-secondary">OS設定済み</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs text-ant-text-secondary">OPENCLAW導入済み</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs text-ant-text-secondary">動作検証済み</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="rounded-md bg-ant-primary px-3 py-1 text-xs text-white">
          スタンダード
        </button>
        <button className="rounded-md bg-red-500 px-3 py-1 text-xs text-white">
          在庫わずか
        </button>
        <button className="rounded-md border border-ant-border-dark px-3 py-1 text-xs text-ant-text-secondary">
          プロ
        </button>
        <button className="rounded-md border border-dashed border-ant-border-dark px-3 py-1 text-xs text-ant-text-secondary">
          カスタム
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-xs text-ant-text-secondary">OPENCLAW</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-xs text-ant-text-secondary">Python</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
          <span className="text-xs text-ant-text-secondary">Node.js</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 text-ant-text-secondary">
          <CheckIcon />
          <span className="text-xs">Docker</span>
        </div>
        <div className="flex items-center gap-1 text-ant-text-secondary">
          <CheckIcon />
          <span className="text-xs">Git</span>
        </div>
        <div className="flex items-center gap-1 text-ant-text-secondary">
          <CheckIcon />
          <span className="text-xs">VS Code</span>
        </div>
      </div>
    </div>
  );
}

export default function ThemeCustomization() {
  const [activeConfig, setActiveConfig] = useState("デベロッパー構成");

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-ant-text-primary md:text-4xl">
          選べる構成プラン
        </h2>
        <p className="text-sm text-ant-text-tertiary">
          用途に合わせた最適な構成をお選びいただけます。すべてのプランにOPENCLAWセットアップが含まれます。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[260px_1fr]">
        <div className="flex flex-col gap-1">
          {configOptions.map((config) => (
            <button
              key={config}
              onClick={() => setActiveConfig(config)}
              className={`rounded-lg px-4 py-2.5 text-left text-sm transition-all ${
                activeConfig === config
                  ? "border border-ant-primary/40 bg-blue-50 text-ant-primary font-medium"
                  : "border border-transparent text-ant-text-secondary hover:bg-ant-bg-card"
              }`}
            >
              {config}
            </button>
          ))}
        </div>
        <ConfigPreview />
      </div>
    </section>
  );
}
