interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-ant-text-primary">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-xs text-ant-text-tertiary transition-colors hover:text-ant-text-secondary"
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
        { label: "カスタム構成のご相談", href: "#" },
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
    <footer className="border-t border-ant-border-dark bg-ant-bg-card">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-ant-border-dark pt-8">
          <p className="text-xs text-ant-text-tertiary">OTASUKE OPENCLAW</p>
          <p className="text-xs text-ant-text-tertiary">
            &copy; 2026 OTASUKE OPENCLAW. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
