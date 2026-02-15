/**
 * 블로그 목록 페이지
 * 모든 블로그 포스트를 표시합니다
 */

import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogList } from "@/components/features/blog/blog-list"
import { PageContainer, SectionContainer } from "@/components/shared/section-container"
import { BLOG_POSTS, SITE_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "블로그 | " + SITE_NAME,
  description: "Flowmatic 블로그에서 최신 팁과 뉴스를 확인하세요",
}

export default function BlogPage() {
  return (
    <>
      <Header />

      <main>
        {/* 히어로 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                블로그
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                Flowmatic의 최신 팁, 가이드, 그리고 뉴스를 확인하세요
              </p>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 블로그 목록 */}
        <SectionContainer variant="muted" padding="lg">
          <PageContainer>
            <BlogList posts={BLOG_POSTS} columns={3} />
          </PageContainer>
        </SectionContainer>
      </main>

      <Footer />
    </>
  )
}
