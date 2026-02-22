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
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl p-8 transition-all hover:scale-[1.02] hover:shadow-xl ${bgColor}`}
    >
      <span className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
        {tag}
      </span>
      <div className="mb-auto flex h-14 w-14 items-center justify-center">
        {icon}
      </div>
      <div className="mt-6">
        <h4 className="mb-2 text-lg font-bold text-white">{title}</h4>
        <p className="text-[13px] leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
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
    <div className="group flex items-center gap-4 rounded-2xl border border-ant-border-dark bg-white p-5 transition-all hover:border-ant-primary/20 hover:shadow-md">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-ant-text-primary">{title}</h4>
        <p className="mt-0.5 text-xs text-ant-text-tertiary">{description}</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto shrink-0 text-ant-text-tertiary/40 transition-all group-hover:translate-x-0.5 group-hover:text-ant-primary">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  );
}

function MacMiniIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="12" width="32" height="16" rx="4" fill="white" fillOpacity="0.2" />
      <rect x="6" y="14" width="28" height="12" rx="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="20" cy="20" r="2" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

function SetupIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M8 9h8M8 13h4" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DesignFramework() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white" />
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-100/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-50/80 px-4 py-1.5">
            <span className="text-xs font-semibold text-purple-700">Products & Support</span>
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ant-text-primary md:text-4xl">
            製品とサポート
          </h2>
          <p className="text-sm text-ant-text-tertiary">
            OPENCLAW搭載Mac miniで、すぐにAI開発を始められます
          </p>
        </div>

        <div className="mb-5 grid gap-5 md:grid-cols-3">
          <BigCard
            title="Mac mini ラインナップ"
            description="M4 / M4 Pro / M4 Max から選べる3つの構成"
            bgColor="bg-gradient-to-br from-slate-700 to-slate-900"
            icon={<MacMiniIcon />}
            tag="Hardware"
          />
          <BigCard
            title="セットアップ内容"
            description="OPENCLAW・開発環境・各種ツールを最適設定"
            bgColor="bg-gradient-to-br from-indigo-500 to-violet-600"
            icon={<SetupIcon />}
            tag="Setup"
          />
          <BigCard
            title="サポートプラン"
            description="30日間無料サポート / 年間保守プラン / 法人対応"
            bgColor="bg-gradient-to-br from-cyan-500 to-blue-600"
            icon={<SupportIcon />}
            tag="Support"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <SmallCard
            title="個人のお客様"
            description="AI開発を始めたい方に最適"
            color="bg-blue-50"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677ff" strokeWidth="1.5" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />
          <SmallCard
            title="法人・チーム導入"
            description="複数台のまとめ買い割引あり"
            color="bg-green-50"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52c41a" strokeWidth="1.5" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <SmallCard
            title="教育機関向け"
            description="アカデミックプラン対応"
            color="bg-amber-50"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#faad14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
