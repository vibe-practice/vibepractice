/**
 * 기능 섹션 컴포넌트
 * 제품/서비스의 주요 기능을 그리드로 표시
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Feature } from "@/types"
import * as Icons from "lucide-react"

interface FeaturesSectionProps {
  /** 섹션 제목 */
  title?: string
  /** 섹션 설명 */
  description?: string
  /** 기능 목록 */
  features: readonly Feature[] | Feature[]
  /** 열의 개수 (기본: 3) */
  columns?: 2 | 3 | 4
}

/**
 * FeatureCard 컴포넌트
 * 개별 기능을 카드로 표시
 */
function FeatureCard({ feature }: { feature: Feature }) {
  // 아이콘 이름으로 lucide 아이콘 동적으로 가져오기
  const IconComponent = (
    Icons as unknown as Record<string, React.ComponentType<any>>
  )[feature.icon] || Icons.Zap

  return (
    <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 dark:bg-blue-950 p-2">
              <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
        <CardTitle className="text-lg">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

/**
 * FeaturesSection 컴포넌트
 * 여러 기능을 그리드 레이아웃으로 표시
 *
 * @example
 * ```tsx
 * <FeaturesSection
 *   title="주요 기능"
 *   features={FEATURES}
 *   columns={3}
 * />
 * ```
 */
export function FeaturesSection({
  title = "주요 기능",
  description = "Flowmatic의 강력한 기능들을 살펴보세요",
  features,
  columns = 3,
}: FeaturesSectionProps) {
  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>

        {/* 기능 그리드 */}
        <div className={`mt-16 grid gap-8 sm:grid-cols-2 ${gridColsClass[columns]}`}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
