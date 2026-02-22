"use client";

import { Card, Tag, Row, Col, Flex } from "antd";
import {
  DesktopOutlined,
  ToolOutlined,
  CustomerServiceOutlined,
  UserOutlined,
  TeamOutlined,
  ReadOutlined,
  RightOutlined,
} from "@ant-design/icons";

function BigCard({
  title,
  description,
  bgColor,
  icon,
  tag,
}: {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  tag: string;
}) {
  return (
    <Card
      hoverable
      className={`!overflow-hidden !rounded-2xl !border-0 transition-all hover:!scale-[1.02] hover:!shadow-xl ${bgColor}`}
      styles={{ body: { padding: 32 } }}
    >
      <Tag className="!mb-4 !rounded-full !border-0 !bg-white/20 !text-[10px] !font-semibold !uppercase !tracking-wider !text-white/80">
        {tag}
      </Tag>
      <div className="mb-6 flex h-14 w-14 items-center justify-center">
        {icon}
      </div>
      <h4 className="mb-2 text-lg font-bold text-white">{title}</h4>
      <p className="text-[13px] leading-relaxed text-white/70">{description}</p>
    </Card>
  );
}

function SmallCard({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card
      hoverable
      className="!rounded-2xl !border-ant-border-dark transition-all hover:!border-ant-primary/20 hover:!shadow-md"
      styles={{ body: { padding: 20 } }}
    >
      <Flex align="center" gap={16}>
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-bold text-ant-text-primary">{title}</h4>
          <p className="mt-0.5 text-xs text-ant-text-tertiary">{description}</p>
        </div>
        <RightOutlined className="shrink-0 !text-ant-text-tertiary/40 transition-all group-hover:!text-ant-primary" />
      </Flex>
    </Card>
  );
}

export default function DesignFramework() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-100/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <Tag
            color="purple"
            className="!mb-4 !rounded-full !text-xs !font-semibold"
          >
            Products & Support
          </Tag>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ant-text-primary md:text-4xl">
            製品とサポート
          </h2>
          <p className="text-sm text-ant-text-tertiary">
            OPENCLAW搭載Mac miniで、すぐにAI開発を始められます
          </p>
        </div>

        <Row gutter={[20, 20]} className="mb-5">
          <Col xs={24} md={8}>
            <BigCard
              title="Mac mini ラインナップ"
              description="M4 / M4 Pro / M4 Max から選べる3つの構成"
              bgColor="bg-gradient-to-br from-slate-700 to-slate-900"
              icon={
                <DesktopOutlined
                  style={{ fontSize: 36, color: "rgba(255,255,255,0.7)" }}
                />
              }
              tag="Hardware"
            />
          </Col>
          <Col xs={24} md={8}>
            <BigCard
              title="セットアップ内容"
              description="OPENCLAW・開発環境・各種ツールを最適設定"
              bgColor="bg-gradient-to-br from-indigo-500 to-violet-600"
              icon={
                <ToolOutlined
                  style={{ fontSize: 36, color: "rgba(255,255,255,0.7)" }}
                />
              }
              tag="Setup"
            />
          </Col>
          <Col xs={24} md={8}>
            <BigCard
              title="サポートプラン"
              description="30日間無料サポート / 年間保守プラン / 法人対応"
              bgColor="bg-gradient-to-br from-cyan-500 to-blue-600"
              icon={
                <CustomerServiceOutlined
                  style={{ fontSize: 36, color: "rgba(255,255,255,0.7)" }}
                />
              }
              tag="Support"
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <SmallCard
              title="個人のお客様"
              description="AI開発を始めたい方に最適"
              color="bg-blue-50"
              icon={
                <UserOutlined style={{ fontSize: 20, color: "#1677ff" }} />
              }
            />
          </Col>
          <Col xs={24} md={8}>
            <SmallCard
              title="法人・チーム導入"
              description="複数台のまとめ買い割引あり"
              color="bg-green-50"
              icon={
                <TeamOutlined style={{ fontSize: 20, color: "#52c41a" }} />
              }
            />
          </Col>
          <Col xs={24} md={8}>
            <SmallCard
              title="教育機関向け"
              description="アカデミックプラン対応"
              color="bg-amber-50"
              icon={
                <ReadOutlined style={{ fontSize: 20, color: "#faad14" }} />
              }
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
