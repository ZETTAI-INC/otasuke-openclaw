interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-[13px] font-bold text-ant-text-primary">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] text-ant-text-tertiary transition-colors hover:text-ant-primary"
            >
              {link.label}
            </a>
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
        <div className="mb-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
                </svg>
              </div>
              <span className="text-[15px] font-bold text-ant-text-primary">OTASUKE OPENCLAW</span>
            </div>
            <p className="mb-5 max-w-[200px] text-[13px] leading-relaxed text-ant-text-tertiary">
              OPENCLAW セットアップ済みMac miniをお届け。面倒な設定は全ておまかせ。
            </p>
            <div className="flex gap-2">
              {/* Social icons */}
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ant-text-tertiary transition-colors hover:bg-ant-primary hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ant-text-tertiary transition-colors hover:bg-ant-primary hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-ant-border-dark pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ant-text-tertiary">
            &copy; 2026 OTASUKE OPENCLAW. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-ant-text-tertiary transition-colors hover:text-ant-primary">プライバシー</a>
            <a href="#" className="text-xs text-ant-text-tertiary transition-colors hover:text-ant-primary">利用規約</a>
            <a href="#" className="text-xs text-ant-text-tertiary transition-colors hover:text-ant-primary">特商法</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
