function BigCard({
  title,
  description,
  bgColor,
  icon,
}: {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`group relative flex flex-col items-center overflow-hidden rounded-2xl p-8 text-center transition-transform hover:scale-[1.02] ${bgColor}`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        {icon}
      </div>
      <h4 className="mb-2 text-lg font-semibold text-white">{title}</h4>
      <p className="text-xs text-white/70">{description}</p>
    </div>
  );
}

function SmallCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-ant-border-dark bg-ant-bg-card p-5 transition-all hover:border-ant-primary/20 hover:bg-ant-bg-card-hover">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-ant-text-primary">{title}</h4>
        <p className="text-xs text-ant-text-tertiary">{description}</p>
      </div>
    </div>
  );
}

function MacMiniIcon() {
  return (
    <div className="flex gap-2">
      <div className="h-12 w-12 rounded-full bg-gray-300/80" />
      <div className="h-12 w-12 rounded-full bg-blue-400/80" />
    </div>
  );
}

function SetupIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/20 text-3xl font-bold text-white">
      ⚙
    </div>
  );
}

function SupportIcon() {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <div className="h-6 w-6 rounded bg-white/30" />
      <div className="h-6 w-6 rounded bg-white/20" />
      <div className="h-6 w-6 rounded bg-white/20" />
      <div className="h-6 w-6 rounded bg-white/30" />
    </div>
  );
}

function MiniIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="10" width="28" height="20" rx="4" stroke={color} strokeWidth="2" />
      <circle cx="20" cy="20" r="3" fill={color} fillOpacity="0.3" />
    </svg>
  );
}

export default function DesignFramework() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-blue-500/5 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ant-text-primary md:text-4xl">
            製品とサポート
          </h2>
          <p className="text-sm text-ant-text-tertiary">
            OPENCLAW搭載Mac miniで、すぐにAI開発を始められます
          </p>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-3">
          <BigCard
            title="Mac mini ラインナップ"
            description="M4 / M4 Pro / M4 Max から選べる構成"
            bgColor="bg-gradient-to-br from-gray-500 to-blue-600"
            icon={<MacMiniIcon />}
          />
          <BigCard
            title="セットアップ内容"
            description="OPENCLAW・開発環境・各種ツールを最適設定"
            bgColor="bg-gradient-to-br from-indigo-500 to-purple-600"
            icon={<SetupIcon />}
          />
          <BigCard
            title="サポートプラン"
            description="30日間無料サポート / 年間保守プラン / 法人対応"
            bgColor="bg-gradient-to-br from-cyan-500 to-blue-600"
            icon={<SupportIcon />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <SmallCard
            title="個人のお客様"
            description="AI開発を始めたい方に最適"
            icon={<MiniIcon color="#1677ff" />}
          />
          <SmallCard
            title="法人・チーム導入"
            description="複数台のまとめ買い割引あり"
            icon={<MiniIcon color="#52c41a" />}
          />
          <SmallCard
            title="教育機関向け"
            description="アカデミックプラン対応"
            icon={<MiniIcon color="#faad14" />}
          />
        </div>
      </div>
    </section>
  );
}
