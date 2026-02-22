function HotBadge() {
  return (
    <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-500">
      人気
    </span>
  );
}

function NewBadge() {
  return (
    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-500">
      NEW
    </span>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: "hot" | "new";
  icon: React.ReactNode;
  number: string;
}

function FeatureCard({ title, description, badge, icon, number }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-ant-border-dark bg-white transition-all hover:border-ant-primary/20 hover:shadow-lg hover:shadow-blue-500/5">
      <div className="flex flex-1 flex-col gap-4 p-7">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-ant-primary transition-colors group-hover:from-blue-100 group-hover:to-blue-50">
            {icon}
          </div>
          <span className="text-[11px] font-bold tracking-wider text-ant-text-tertiary/40">
            {number}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-bold text-ant-text-primary">{title}</h3>
            {badge === "hot" && <HotBadge />}
            {badge === "new" && <NewBadge />}
          </div>
          <p className="text-[13px] leading-relaxed text-ant-text-tertiary">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  const features: FeatureCardProps[] = [
    {
      title: "箱を開けたらすぐ使える",
      description:
        "OPENCLAWの環境構築・初期設定をすべて完了した状態でお届け。届いたその日からAI開発を始められます。",
      badge: "hot",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      number: "01",
    },
    {
      title: "プロによる最適チューニング",
      description:
        "Apple Siliconの性能を最大限に引き出す設定。メモリ管理、GPU活用、ネットワーク設定まで最適化済み。",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      number: "02",
    },
    {
      title: "購入後サポート付き",
      description:
        "30日間の無料サポート付属。使い方の質問やトラブルシューティングをオンラインでサポートします。",
      badge: "new",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      number: "03",
    },
  ];

  return (
    <section className="section-divider mx-auto max-w-[1200px] px-6 pt-16 pb-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-5 w-1 rounded-full bg-ant-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-ant-primary">Features</span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
