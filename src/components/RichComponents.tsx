"use client";

import { useState } from "react";

function IncludedBadge() {
  return (
    <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-green-600">
      標準搭載
    </span>
  );
}

function OptionBadge() {
  return (
    <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600">
      オプション
    </span>
  );
}

function DeliveryDemo() {
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const dates = [
    [26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 1, 2, 3, 4, 5, 6],
  ];

  return (
    <div className="flex flex-col rounded-xl border border-ant-border-dark bg-ant-bg-card">
      <div className="flex gap-1 border-b border-ant-border-dark p-3">
        {["最短お届け", "指定日配送", "店頭受取"].map((f) => (
          <button
            key={f}
            className="rounded px-2 py-1 text-[10px] text-ant-text-tertiary hover:bg-ant-bg-card-hover hover:text-ant-text-secondary"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-ant-text-primary">3月</span>
            <span className="text-xs text-ant-text-tertiary">2026</span>
          </div>
          <div className="flex gap-1.5">
            <button className="flex h-5 w-5 items-center justify-center rounded text-[10px] text-ant-text-tertiary hover:bg-ant-bg-card-hover hover:text-ant-text-primary">
              &lsaquo;
            </button>
            <button className="flex h-5 w-5 items-center justify-center rounded text-[10px] text-ant-text-tertiary hover:bg-ant-bg-card-hover hover:text-ant-text-primary">
              &rsaquo;
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-y-0.5">
          {days.map((day) => (
            <div key={day} className="flex h-7 items-center justify-center text-[10px] font-medium text-ant-text-tertiary">
              {day}
            </div>
          ))}
          {dates.flat().map((date, i) => {
            const isOutside = (i < 5 && date > 20) || (i > 34 && date < 10);
            const isSelected = date === 10 && !isOutside;
            const isToday = date === 5 && !isOutside && i > 4 && i < 12;
            return (
              <div
                key={i}
                className={`flex h-7 w-full items-center justify-center rounded text-[10px] transition-colors ${
                  isSelected
                    ? "bg-ant-primary font-medium text-white"
                    : isToday
                      ? "border border-ant-primary text-ant-primary"
                      : isOutside
                        ? "text-ant-text-tertiary/30"
                        : "text-ant-text-secondary hover:bg-ant-bg-card-hover"
                }`}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SetupGuideDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-ant-border-dark bg-ant-bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#1677ff" strokeWidth="1.5" />
            <path d="M8 12h8M12 8v8" stroke="#1677ff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-ant-text-primary">初期セットアップ</span>
      </div>
      <p className="text-xs leading-relaxed text-ant-text-tertiary">
        お届け後の接続方法をステップバイステップでご案内します。
      </p>
      <div className="flex items-center justify-end gap-2 pt-1">
        <button className="rounded-md border border-ant-border-dark px-3 py-1 text-[11px] text-ant-text-secondary transition-colors hover:border-ant-primary/40">
          戻る
        </button>
        <button className="rounded-md bg-ant-primary px-3 py-1 text-[11px] text-white transition-colors hover:bg-ant-primary-hover">
          次へ
        </button>
      </div>
    </div>
  );
}

function RemoteSupportDemo() {
  return (
    <div className="relative flex min-h-[180px] flex-col rounded-xl border border-ant-border-dark bg-ant-bg-card">
      <div className="flex-1" />
      <div className="absolute right-4 bottom-4 flex flex-col items-center gap-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ant-primary shadow-lg shadow-blue-500/20 transition-transform hover:scale-110">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpecComparisonDemo() {
  return (
    <div className="flex min-h-[180px] overflow-hidden rounded-xl border border-ant-border-dark bg-ant-bg-card">
      <div className="flex flex-1 flex-col items-center justify-center border-r border-ant-border-dark p-4">
        <span className="mb-1 text-xs text-ant-text-tertiary">M4</span>
        <span className="text-sm font-medium text-ant-text-primary">スタンダード</span>
      </div>
      <div className="flex w-2 cursor-col-resize items-center justify-center bg-transparent">
        <div className="h-8 w-0.5 rounded-full bg-ant-border-dark" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <span className="mb-1 text-xs text-ant-text-tertiary">M4 Pro</span>
        <span className="text-sm font-medium text-ant-text-primary">プロ</span>
      </div>
    </div>
  );
}

function AccessoriesDemo() {
  const items = [
    { name: "キーボード", h: 60 },
    { name: "マウス", h: 80 },
    { name: "ディスプレイ", h: 100 },
    { name: "ハブ", h: 50 },
    { name: "ケーブル", h: 70 },
    { name: "スタンド", h: 55 },
    { name: "ケース", h: 90 },
    { name: "メモリ", h: 65 },
    { name: "SSD", h: 75 },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl border border-ant-border-dark bg-ant-bg-card p-4">
      {items.map((item, i) => (
        <div
          key={i}
          style={{ height: item.h }}
          className="flex items-center justify-center rounded-lg bg-blue-50 text-[10px] font-medium text-ant-primary/70"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

const tabs = [
  { name: "お届け日選択", badge: "included" as const },
  { name: "セットアップガイド", badge: "included" as const },
  { name: "リモートサポート", badge: "included" as const },
  { name: "スペック比較", badge: "option" as const },
  { name: "アクセサリ", badge: "option" as const },
];

export default function RichComponents() {
  const [activeTab] = useState("お届け日選択");

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-ant-text-primary md:text-4xl">
          充実のサービス内容
        </h2>
        <p className="text-sm text-ant-text-tertiary">
          購入から運用まで、安心のサポート体制をご用意しています
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-6 border-b border-ant-border-dark pb-4">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex cursor-pointer items-center gap-1.5 pb-1 text-sm font-medium transition-colors ${
              activeTab === tab.name
                ? "border-b-2 border-ant-primary text-ant-text-primary"
                : "text-ant-text-secondary hover:text-ant-text-primary"
            }`}
          >
            {tab.name}
            {tab.badge === "included" ? <IncludedBadge /> : <OptionBadge />}
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DeliveryDemo />
        <SetupGuideDemo />
        <RemoteSupportDemo />
        <SpecComparisonDemo />
      </div>

      <div className="mt-4">
        <AccessoriesDemo />
      </div>
    </section>
  );
}
