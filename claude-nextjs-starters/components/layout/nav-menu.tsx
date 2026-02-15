/**
 * 데스크톱 네비게이션 메뉴 컴포넌트
 * md 크기 이상의 화면에서 표시됩니다
 */

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

/**
 * NavMenu 컴포넌트
 * 수평 네비게이션 메뉴 표시
 *
 * @example
 * ```tsx
 * <NavMenu />
 * ```
 */
export function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-1">
      {NAV_LINKS.map((link) => {
        // 현재 경로인지 확인
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              // 기본 스타일
              "relative px-3 py-2 text-sm font-medium transition-colors",
              // 활성 상태
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            )}
          >
            {link.label}

            {/* 활성 상태 아래줄 */}
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 dark:bg-blue-400" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
