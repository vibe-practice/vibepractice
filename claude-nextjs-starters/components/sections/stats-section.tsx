/**
 * 통계 섹션 컴포넌트
 * 주요 통계를 강조하는 섹션
 */

import { Stat } from "@/types"

interface StatsSectionProps {
  /** 통계 목록 */
  stats: readonly Stat[] | Stat[]
  /** 배경 색상 (기본: dark) */
  variant?: "light" | "dark"
}

/**
 * StatCard 컴포넌트
 * 개별 통계를 표시
 */
function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-5xl">
        {stat.number}
      </div>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
        {stat.label}
      </p>
    </div>
  )
}

/**
 * StatsSection 컴포넌트
 * 회사의 주요 통계를 강조합니다
 *
 * @example
 * ```tsx
 * <StatsSection stats={STATS} variant="dark" />
 * ```
 */
export function StatsSection({
  stats,
  variant = "dark",
}: StatsSectionProps) {
  const bgClass =
    variant === "dark"
      ? "bg-gray-900 dark:bg-slate-950"
      : "bg-gray-50 dark:bg-slate-900"

  const textClass =
    variant === "dark"
      ? "text-white dark:text-gray-100"
      : "text-gray-900 dark:text-white"

  return (
    <section className={`${bgClass} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${textClass}`}>
            숫자로 보는 Flowmatic
          </h2>
          <p className="mt-4 text-lg text-gray-300 dark:text-gray-400">
            전 세계 수천 개 팀이 Flowmatic을 사용하고 있습니다
          </p>
        </div>

        {/* 통계 그리드 */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
