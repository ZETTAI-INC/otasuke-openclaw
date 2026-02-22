export default function HeroSection() {
  return (
    <section className="relative flex min-h-[520px] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[15%] h-[300px] w-[300px] rounded-full bg-purple-100/40 blur-[100px]" />
        <div className="absolute top-[20%] right-[30%] h-[200px] w-[200px] rounded-full bg-cyan-100/30 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-ant-text-primary md:text-6xl lg:text-7xl">
          OTASUKE OPENCLAW
        </h1>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-ant-text-secondary md:text-lg">
          OPENCLAWセットアップ済みのMac miniをお届け。
          届いたらすぐに使える、面倒な設定は全ておまかせ。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-lg bg-ant-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ant-primary-hover"
          >
            製品を見る
          </a>
          <a
            href="#"
            className="rounded-lg border border-ant-border-dark bg-transparent px-6 py-2.5 text-sm font-medium text-ant-text-secondary transition-colors hover:border-ant-primary hover:text-ant-primary"
          >
            サービスの詳細
          </a>
        </div>
      </div>
    </section>
  );
}
