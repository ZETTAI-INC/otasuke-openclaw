"use client";

import { useState } from "react";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2 2h12v2H2V2zm0 5h8v2H2V7zm0 5h12v2H2v-2z" />
    </svg>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("製品ラインナップ");

  const navItems = ["特徴", "製品ラインナップ", "セットアップ内容", "お客様の声", "よくある質問"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-ant-border-dark bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 106 120" fill="none">
              <path d="M62.6 0L1.6 35.3v70.5L62.6 120l61-34.2V35.3L62.6 0z" fill="#1677ff" />
              <path d="M62.6 10.8L11.8 39.5v57.1l50.8 28.6 50.8-28.6V39.5L62.6 10.8z" fill="#fff" fillOpacity={0.15} />
            </svg>
            <span className="text-lg font-semibold text-ant-text-primary">OTASUKE OPENCLAW</span>
          </a>

          <button className="flex h-8 items-center gap-2 rounded-md border border-ant-border-dark bg-transparent px-3 text-sm text-ant-text-tertiary transition-colors hover:border-ant-primary">
            <SearchIcon />
            <span className="hidden md:inline">検索</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveNav(item)}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  activeNav === item
                    ? "text-ant-primary"
                    : "text-ant-text-secondary hover:text-ant-text-primary"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-md bg-ant-primary px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-ant-primary-hover sm:inline-block"
          >
            お問い合わせ
          </a>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-ant-text-secondary transition-colors hover:text-ant-text-primary">
            <CartIcon />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-ant-text-secondary transition-colors hover:text-ant-text-primary lg:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
