/**
 * 홈 페이지
 * Flowmatic의 랜딩 페이지
 */

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CTASection } from "@/components/sections/cta-section"
import { SectionContainer } from "@/components/shared/section-container"
import { FEATURES, STATS } from "@/lib/constants"

export default function Home() {
  return (
    <>
      {/* 네비게이션 헤더 */}
      <Header />

      <main>
        {/* 히어로 섹션 */}
        <HeroSection
          title="팀의 워크플로우를 자동화하세요"
          subtitle="Flowmatic으로 반복적인 작업을 없애고 생산성을 높이세요. 간단하고 강력한 자동화 플랫폼입니다."
          ctaText="무료 시작하기"
          ctaLink="/contact"
          secondaryCtaText="기능 보기"
          secondaryCtaLink="/features"
        />

        {/* 기능 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <FeaturesSection
            title="강력한 기능들"
            description="Flowmatic의 모든 기능을 한 곳에서 만나보세요"
            features={FEATURES}
            columns={3}
          />
        </SectionContainer>

        {/* 통계 섹션 */}
        <StatsSection stats={STATS} variant="dark" />

        {/* CTA 섹션 */}
        <CTASection
          title="지금 시작하세요"
          description="30초 안에 첫 번째 워크플로우를 만들어보세요"
          ctaText="무료 가입하기"
          ctaLink="/contact"
        />
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}
