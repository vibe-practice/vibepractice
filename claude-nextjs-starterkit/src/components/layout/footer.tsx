import Link from "next/link";
import { Separator } from "@/components/ui/separator";

// 푸터 링크 그룹
const footerLinks = [
  {
    title: "제품",
    links: [
      { href: "/features", label: "기능" },
      { href: "/pricing", label: "가격" },
      { href: "/docs", label: "문서" },
    ],
  },
  {
    title: "회사",
    links: [
      { href: "/about", label: "소개" },
      { href: "/blog", label: "블로그" },
      { href: "/contact", label: "문의" },
    ],
  },
  {
    title: "법적",
    links: [
      { href: "/privacy", label: "개인정보처리방침" },
      { href: "/terms", label: "이용약관" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* 링크 그룹 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* 브랜드 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold">
              StarterKit
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              빠르게 시작하는 웹 개발 스타터 킷
            </p>
          </div>

          {/* 링크 그룹 */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* 카피라이트 */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StarterKit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
