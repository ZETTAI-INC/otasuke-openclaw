"use client";

import { useState } from "react";

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("製品ラインナップ");

  const navItems = ["特徴", "製品ラインナップ", "セットアップ内容", "お客様の声", "よくある質問"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-ant-border-dark bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-ant-text-primary">
              OTASUKE OPENCLAW
            </span>
          </a>

          <nav className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveNav(item)}
                className={`relative px-3 py-1.5 text-[13px] transition-colors ${
                  activeNav === item
                    ? "font-medium text-ant-primary"
                    : "text-ant-text-secondary hover:text-ant-text-primary"
                }`}
              >
                {item}
                {activeNav === item && (
                  <span className="absolute bottom-[-13px] left-3 right-3 h-[2px] rounded-full bg-ant-primary" />
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 items-center gap-1.5 rounded-lg border border-ant-border-dark bg-ant-bg-card px-3 text-ant-text-tertiary transition-all hover:border-ant-primary/30 hover:text-ant-text-secondary">
            <SearchIcon />
            <span className="hidden text-xs md:inline">検索...</span>
            <kbd className="ml-1 hidden rounded border border-ant-border-dark bg-white px-1 py-0.5 text-[10px] leading-none text-ant-text-tertiary md:inline">
              ⌘K
            </kbd>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-ant-text-secondary transition-colors hover:bg-ant-bg-card hover:text-ant-text-primary">
            <CartIcon />
          </button>
          <a
            href="#"
            className="hidden rounded-lg bg-ant-primary px-4 py-1.5 text-[13px] font-medium text-white shadow-sm shadow-blue-500/20 transition-all hover:bg-ant-primary-hover hover:shadow-md hover:shadow-blue-500/25 sm:inline-block"
          >
            お問い合わせ
          </a>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-ant-text-secondary transition-colors hover:bg-ant-bg-card hover:text-ant-text-primary lg:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
