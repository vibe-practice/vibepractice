/**
 * 상단 헤더 컴포넌트
 * 로고, 네비게이션, 테마 토글을 포함합니다
 */

import { Logo } from "@/components/shared/logo"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { NavMenu } from "./nav-menu"
import { MobileNav } from "./mobile-nav"
import { Separator } from "@/components/ui/separator"

/**
 * Header 컴포넌트
 * 모든 페이지 상단에 표시되는 네비게이션 바
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* 로고 */}
          <Logo />

          {/* 데스크톱 네비게이션 (md 이상에서만 표시) */}
          <nav className="hidden items-center space-x-1 md:flex">
            <NavMenu />
          </nav>

          {/* 오른쪽 유틸리티 버튼 */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {/* 모바일 네비게이션 (md 미만에서만 표시) */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
