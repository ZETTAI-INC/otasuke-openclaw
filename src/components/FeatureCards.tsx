"use client";

import { Card, Tag, Row, Col } from "antd";
import {
  InboxOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: "hot" | "new";
  icon: React.ReactNode;
  number: string;
}

function FeatureCard({
  title,
  description,
  badge,
  icon,
  number,
}: FeatureCardProps) {
  return (
    <Card
      hoverable
      className="!rounded-2xl !border-ant-border-dark transition-all hover:!border-ant-primary/20 hover:!shadow-lg hover:!shadow-blue-500/5"
      styles={{ body: { padding: 28 } }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-xl text-ant-primary">
            {icon}
          </div>
          <span className="text-[11px] font-bold tracking-wider text-ant-text-tertiary/40">
            {number}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-bold text-ant-text-primary">
              {title}
            </h3>
            {badge === "hot" && (
              <Tag color="error" className="!m-0 !rounded-full !text-[10px]">
                人気
              </Tag>
            )}
            {badge === "new" && (
              <Tag
                color="processing"
                className="!m-0 !rounded-full !text-[10px]"
              >
                NEW
              </Tag>
            )}
          </div>
          <p className="text-[13px] leading-relaxed text-ant-text-tertiary">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default function FeatureCards() {
  const features: FeatureCardProps[] = [
    {
      title: "箱を開けたらすぐ使える",
      description:
        "OPENCLAWの環境構築・初期設定をすべて完了した状態でお届け。届いたその日からAI開発を始められます。",
      badge: "hot",
      icon: <InboxOutlined />,
      number: "01",
    },
    {
      title: "プロによる最適チューニング",
      description:
        "Apple Siliconの性能を最大限に引き出す設定。メモリ管理、GPU活用、ネットワーク設定まで最適化済み。",
      icon: <SettingOutlined />,
      number: "02",
    },
    {
      title: "購入後サポート付き",
      description:
        "30日間の無料サポート付属。使い方の質問やトラブルシューティングをオンラインでサポートします。",
      badge: "new",
      icon: <BellOutlined />,
      number: "03",
    },
  ];

  return (
    <section className="section-divider mx-auto max-w-[1200px] px-6 pt-16 pb-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-5 w-1 rounded-full bg-ant-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-ant-primary">
          Features
        </span>
      </div>
      <Row gutter={[20, 20]}>
        {features.map((feature) => (
          <Col xs={24} md={8} key={feature.title}>
            <FeatureCard {...feature} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
