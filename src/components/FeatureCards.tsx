function HotBadge() {
  return (
    <span className="ml-2 rounded bg-red-500/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-500">
      人気
    </span>
  );
}

function NewBadge() {
  return (
    <span className="ml-2 rounded bg-blue-500/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-500">
      NEW
    </span>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: "hot" | "new";
  accent?: string;
}

function FeatureCard({ title, description, badge, accent }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-ant-border-dark bg-ant-bg-card transition-all hover:border-ant-primary/20 hover:bg-ant-bg-card-hover">
      {accent && (
        <div
          className="h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
      )}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center">
          <h3 className="text-sm font-semibold text-ant-text-primary">{title}</h3>
          {badge === "hot" && <HotBadge />}
          {badge === "new" && <NewBadge />}
        </div>
        <p className="text-xs leading-relaxed text-ant-text-tertiary">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  const features: (FeatureCardProps & { accent?: string })[] = [
    {
      title: "箱を開けたらすぐ使える",
      description:
        "OPENCLAWの環境構築・初期設定をすべて完了した状態でお届けします。届いたその日からAI開発を始められます。セットアップの手間ゼロ、トラブルゼロ。",
      badge: "hot",
      accent: "#ff4d4f",
    },
    {
      title: "プロによる最適チューニング",
      description:
        "Apple Silicon Mac miniのパフォーマンスを最大限に引き出す設定を施しています。メモリ管理、GPU活用、ネットワーク設定まで、プロのエンジニアが最適化済み。",
    },
    {
      title: "購入後サポート付き",
      description:
        "購入後30日間の無料サポートが付属。使い方の質問やトラブルシューティングをオンラインでサポート。追加のカスタマイズもご相談ください。",
      badge: "new",
      accent: "#1677ff",
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-4">
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
