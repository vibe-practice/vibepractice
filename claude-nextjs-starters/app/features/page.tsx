/**
 * 기능 페이지
 * Flowmatic의 모든 기능을 소개합니다
 */

import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FeaturesSection } from "@/components/sections/features-section"
import { PageContainer, SectionContainer } from "@/components/shared/section-container"
import { CTASection } from "@/components/sections/cta-section"
import { FEATURES, SITE_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "기능 | " + SITE_NAME,
  description: "Flowmatic의 강력한 기능들을 살펴보세요",
}

export default function FeaturesPage() {
  return (
    <>
      <Header />

      <main>
        {/* 히어로 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                강력한 기능들
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                Flowmatic의 모든 기능을 한 곳에서 만나보세요
              </p>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 기능 섹션 */}
        <SectionContainer variant="muted" padding="lg">
          <FeaturesSection
            features={FEATURES}
            columns={2}
          />
        </SectionContainer>

        {/* 상세 기능 설명 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="space-y-12">
              {/* 자동화 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    강력한 자동화 엔진
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Flowmatic의 핵심은 강력한 자동화 엔진입니다. 조건부 로직, 루프, 에러 처리 등 모든 것을 지원합니다.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>✓ 복잡한 워크플로우 구성</li>
                    <li>✓ 높은 성능과 안정성</li>
                    <li>✓ 실시간 모니터링</li>
                  </ul>
                </div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              </div>

              {/* 통합 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="h-64 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 md:order-2" />
                <div className="md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    50+ 서비스 통합
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Gmail, Slack, Google Drive, Notion 등 인기 있는 서비스들과 자동으로 연결됩니다.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>✓ 즉시 사용 가능한 커넥터</li>
                    <li>✓ API를 통한 커스텀 통합</li>
                    <li>✓ 지속적인 통합 추가</li>
                  </ul>
                </div>
              </div>

              {/* 협업 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    팀 협업
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    팀 전체와 워크플로우를 공유하고 권한을 관리하세요. 모두가 함께 더 효율적으로 일할 수 있습니다.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>✓ 워크플로우 공유</li>
                    <li>✓ 역할 기반 접근 제어</li>
                    <li>✓ 활동 로그</li>
                  </ul>
                </div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20" />
              </div>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* CTA 섹션 */}
        <CTASection
          title="지금 시작하세요"
          description="모든 기능을 무료로 사용해보세요"
          ctaText="무료 가입하기"
          ctaLink="/contact"
        />
      </main>

      <Footer />
    </>
  )
}
