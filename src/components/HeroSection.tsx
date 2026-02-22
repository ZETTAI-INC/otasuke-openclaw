export default function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-6 pt-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
        <div className="absolute top-[20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] h-[300px] w-[300px] rounded-full bg-purple-100/30 blur-[100px]" />
        <div className="absolute top-[30%] left-[10%] h-[250px] w-[250px] rounded-full bg-cyan-100/30 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-blue-700">在庫あり・最短3営業日でお届け</span>
        </div>

        <h1 className="mb-5 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-ant-text-primary">
          <span className="block">OPENCLAW搭載の</span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Mac miniをお届け
          </span>
        </h1>

        <p className="mb-10 max-w-lg text-base leading-relaxed text-ant-text-secondary">
          面倒な環境構築は全ておまかせ。届いたその日から
          <br className="hidden sm:block" />
          AI開発を始められるセットアップ済みMac mini。
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#"
            className="group flex items-center gap-2 rounded-xl bg-ant-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-ant-primary-hover hover:shadow-xl hover:shadow-blue-500/30"
          >
            製品を見る
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl border border-ant-border-dark bg-white/80 px-7 py-3 text-sm font-medium text-ant-text-secondary shadow-sm backdrop-blur-sm transition-all hover:border-ant-primary/30 hover:text-ant-primary hover:shadow-md"
          >
            サービスの詳細
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-ant-text-tertiary">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            30日間無料サポート
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            動作検証済み
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" rx="2" />
              <path d="M16 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2" />
            </svg>
            全国送料無料
          </div>
        </div>
      </div>
    </section>
  );
}
