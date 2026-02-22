"use client";

import { useState } from "react";
import { Button, Input, Space, Badge, Tooltip, Drawer } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";

export default function Header() {
  const [activeNav, setActiveNav] = useState("製品ラインナップ");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    "特徴",
    "製品ラインナップ",
    "セットアップ内容",
    "お客様の声",
    "よくある質問",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-ant-border-dark bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <ThunderboltFilled style={{ color: "white", fontSize: 14 }} />
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

          <Space size={8}>
            <Input
              placeholder="検索..."
              prefix={<SearchOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
              suffix={
                <kbd className="rounded border border-ant-border-dark bg-white px-1 py-0.5 text-[10px] leading-none text-ant-text-tertiary">
                  ⌘K
                </kbd>
              }
              className="hidden w-[160px] md:inline-flex"
              size="small"
              variant="filled"
            />
            <Tooltip title="カート">
              <Badge count={0} showZero={false}>
                <Button
                  type="text"
                  icon={<ShoppingCartOutlined style={{ fontSize: 18 }} />}
                  size="small"
                  className="!flex !h-8 !w-8 items-center justify-center"
                />
              </Badge>
            </Tooltip>
            <Button
              type="primary"
              className="hidden sm:inline-flex"
              size="small"
            >
              お問い合わせ
            </Button>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
              className="lg:!hidden !flex !h-8 !w-8 items-center justify-center"
              size="small"
            />
          </Space>
        </div>
      </header>

      <Drawer
        title="メニュー"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        size="default"
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => {
                setActiveNav(item);
                setDrawerOpen(false);
              }}
              className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                activeNav === item
                  ? "bg-blue-50 font-medium text-ant-primary"
                  : "text-ant-text-secondary hover:bg-ant-bg-card"
              }`}
            >
              {item}
            </a>
          ))}
          <div className="mt-4 border-t border-ant-border-dark pt-4">
            <Button type="primary" block>
              お問い合わせ
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
