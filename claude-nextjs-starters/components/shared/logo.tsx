/**
 * 사이트 로고 컴포넌트
 * 헤더에서 사용되는 브랜드 로고
 */

import Link from "next/link"
import { SITE_NAME } from "@/lib/constants"
import { Zap } from "lucide-react"

/**
 * Logo 컴포넌트
 * @param className - 추가 CSS 클래스
 *
 * @example
 * ```tsx
 * <Logo />
 * <Logo className="text-xl" />
 * ```
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {/* 로고 아이콘 */}
      <div className="relative inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
        <Zap className="w-5 h-5 text-white" />
      </div>

      {/* 사이트명 */}
      <span className="hidden sm:inline text-xl font-bold text-black dark:text-white">
        {SITE_NAME}
      </span>
    </Link>
  )
}
