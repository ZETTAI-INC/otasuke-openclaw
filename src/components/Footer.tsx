"use client";

import { Typography, Space, Divider, Row, Col, Flex } from "antd";
import {
  ThunderboltFilled,
  XOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Link, Text } = Typography;

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-[13px] font-bold text-ant-text-primary">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="!text-[13px] !text-ant-text-tertiary hover:!text-ant-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const columns: FooterColumnProps[] = [
    {
      title: "製品",
      links: [
        { label: "Mac mini M4 スタンダード", href: "#" },
        { label: "Mac mini M4 Pro デベロッパー", href: "#" },
        { label: "Mac mini M4 Pro ハイパフォーマンス", href: "#" },
        { label: "Mac mini M4 Max エンタープライズ", href: "#" },
        { label: "アクセサリ・周辺機器", href: "#" },
        { label: "OPENCLAWでできること", href: "#" },
      ],
    },
    {
      title: "サポート",
      links: [
        { label: "セットアップガイド", href: "#" },
        { label: "よくある質問", href: "#" },
        { label: "トラブルシューティング", href: "#" },
        { label: "リモートサポート予約", href: "#" },
        { label: "保証・修理について", href: "#" },
        { label: "お問い合わせ", href: "#" },
      ],
    },
    {
      title: "OPENCLAWについて",
      links: [
        { label: "OPENCLAWとは", href: "#" },
        { label: "ドキュメント", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "コミュニティ", href: "#" },
        { label: "アップデート情報", href: "#" },
        { label: "ライセンス", href: "#" },
      ],
    },
    {
      title: "会社情報",
      links: [
        { label: "運営会社について", href: "#" },
        { label: "特定商取引法に基づく表記", href: "#" },
        { label: "プライバシーポリシー", href: "#" },
        { label: "利用規約", href: "#" },
        { label: "採用情報", href: "#" },
        { label: "ブログ", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-ant-border-dark bg-slate-50">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Top: logo + columns */}
        <Row gutter={[40, 40]} className="mb-12">
          {/* Brand column */}
          <Col xs={24} md={6}>
            <Flex gap={10} align="center" className="mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <ThunderboltFilled
                  style={{ color: "white", fontSize: 14 }}
                />
              </div>
              <span className="text-[15px] font-bold text-ant-text-primary">
                OTASUKE OPENCLAW
              </span>
            </Flex>
            <Text className="!mb-5 block max-w-[200px] !text-[13px] !leading-relaxed !text-ant-text-tertiary">
              OPENCLAW セットアップ済みMac miniをお届け。面倒な設定は全ておまかせ。
            </Text>
            <Space size={8}>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ant-text-tertiary transition-colors hover:bg-ant-primary hover:text-white"
              >
                <XOutlined style={{ fontSize: 14 }} />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ant-text-tertiary transition-colors hover:bg-ant-primary hover:text-white"
              >
                <GithubOutlined style={{ fontSize: 14 }} />
              </a>
            </Space>
          </Col>

          {columns.map((column) => (
            <Col xs={12} md={4} lg={4} key={column.title}>
              <FooterColumn {...column} />
            </Col>
          ))}
        </Row>

        {/* Bottom bar */}
        <Divider className="!my-0 !mb-8" />
        <Flex
          justify="space-between"
          align="center"
          wrap
          gap={12}
        >
          <Text className="!text-xs !text-ant-text-tertiary">
            &copy; 2026 OTASUKE OPENCLAW. All rights reserved.
          </Text>
          <Space size={16}>
            <Link
              href="#"
              className="!text-xs !text-ant-text-tertiary hover:!text-ant-primary"
            >
              プライバシー
            </Link>
            <Link
              href="#"
              className="!text-xs !text-ant-text-tertiary hover:!text-ant-primary"
            >
              利用規約
            </Link>
            <Link
              href="#"
              className="!text-xs !text-ant-text-tertiary hover:!text-ant-primary"
            >
              特商法
            </Link>
          </Space>
        </Flex>
      </div>
    </footer>
  );
}
