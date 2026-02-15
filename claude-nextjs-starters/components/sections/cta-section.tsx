/**
 * CTA (Call-To-Action) 섹션 컴포넌트
 * 사용자 행동을 유도하는 강조된 섹션
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  /** 제목 */
  title?: string
  /** 설명 */
  description?: string
  /** CTA 버튼 텍스트 */
  ctaText?: string
  /** CTA 버튼 링크 */
  ctaLink?: string
  /** 보조 텍스트 */
  highlightText?: string
}

/**
 * CTASection 컴포넌트
 * 사용자가 행동을 취하도록 유도하는 섹션
 *
 * @example
 * ```tsx
 * <CTASection
 *   title="지금 시작하세요"
 *   description="30초 안에 첫 번째 워크플로우를 만드세요"
 *   ctaText="무료 가입"
 *   ctaLink="/contact"
 * />
 * ```
 */
export function CTASection({
  title = "지금 Flowmatic을 시작하세요",
  description = "팀의 생산성을 높이고 시간을 절약하세요",
  ctaText = "무료 가입하기",
  ctaLink = "/contact",
  highlightText = "신용카드 필요 없음",
}: CTASectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 py-16 sm:py-24">
      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 -mb-32 -mr-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* 제목 */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>

          {/* 설명 */}
          {description && (
            <p className="mt-4 text-lg text-blue-100">{description}</p>
          )}

          {/* CTA 버튼 */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* 하단 텍스트 */}
          {highlightText && (
            <p className="mt-6 text-sm text-blue-100">{highlightText}</p>
          )}
        </div>
      </div>
    </section>
  )
}
