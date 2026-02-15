/**
 * 히어로 섹션 컴포넌트
 * 페이지의 상단 배너 영역
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  /** 큰 제목 */
  title: string
  /** 부제목/설명 */
  subtitle?: string
  /** CTA 버튼 텍스트 */
  ctaText?: string
  /** CTA 버튼 링크 */
  ctaLink?: string
  /** 보조 CTA 버튼 텍스트 */
  secondaryCtaText?: string
  /** 보조 CTA 버튼 링크 */
  secondaryCtaLink?: string
  /** 배경 그라데이션 여부 */
  hasGradient?: boolean
}

/**
 * HeroSection 컴포넌트
 * 랜딩 페이지의 주요 배너 섹션
 *
 * @example
 * ```tsx
 * <HeroSection
 *   title="워크플로우를 자동화하세요"
 *   subtitle="Flowmatic으로 팀의 생산성을 높이세요"
 *   ctaText="시작하기"
 *   ctaLink="/contact"
 * />
 * ```
 */
export function HeroSection({
  title,
  subtitle,
  ctaText = "시작하기",
  ctaLink = "/contact",
  secondaryCtaText = "더 알아보기",
  secondaryCtaLink = "/features",
  hasGradient = true,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 배경 그라데이션 */}
      {hasGradient && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/10" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/10" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          {/* 제목 */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {/* 부제목 */}
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              {subtitle}
            </p>
          )}

          {/* CTA 버튼 */}
          <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          </div>

          {/* 하단 텍스트 */}
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            신용카드 필요 없음 • 무료로 시작하기
          </p>
        </div>
      </div>
    </section>
  )
}
