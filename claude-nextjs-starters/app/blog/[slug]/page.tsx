/**
 * 블로그 상세 페이지
 * 개별 블로그 포스트를 표시합니다
 */

import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageContainer, SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BLOG_POSTS, SITE_NAME } from "@/lib/constants"
import { formatDate } from "@/lib/helpers"
import { ArrowLeft } from "lucide-react"

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

// 정적 경로 생성
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

// 메타데이터 생성
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다",
    }
  }

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  // 포스트 찾기
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  // 포스트가 없으면 에러 표시
  if (!post) {
    return (
      <>
        <Header />
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                포스트를 찾을 수 없습니다
              </h1>
              <Button asChild>
                <Link href="/blog">블로그로 돌아가기</Link>
              </Button>
            </div>
          </PageContainer>
        </SectionContainer>
        <Footer />
      </>
    )
  }

  // 다른 포스트들 (추천)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
      <Header />

      <main>
        {/* 블로그 상세 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            {/* 뒤로가기 버튼 */}
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              블로그로 돌아가기
            </Link>

            <article className="mx-auto max-w-3xl">
              {/* 제목 */}
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {post.title}
              </h1>

              {/* 메타 정보 */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 dark:text-gray-400">
                <span>{formatDate(post.date)}</span>
                <Badge variant="secondary">{post.category}</Badge>
              </div>

              <Separator className="mb-8" />

              {/* 내용 */}
              <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  {post.content.split("\n").map((line, idx) => {
                    if (line.startsWith("#")) {
                      const level = line.match(/^#+/)?.[0].length || 1
                      const text = line.replace(/^#+\s/, "")
                      const headingClass = {
                        1: "text-3xl font-bold",
                        2: "text-2xl font-bold",
                        3: "text-xl font-semibold",
                        4: "text-lg font-semibold",
                      }[level] || "text-base font-semibold"

                      return (
                        <div key={idx} className={`${headingClass} mt-6 mb-3`}>
                          {text}
                        </div>
                      )
                    } else if (line.startsWith("-")) {
                      return (
                        <div key={idx} className="ml-4 flex items-start">
                          <span className="mr-3">•</span>
                          <span>{line.replace(/^-\s/, "")}</span>
                        </div>
                      )
                    } else if (line.trim() === "") {
                      return <div key={idx} className="h-2" />
                    } else {
                      return (
                        <p key={idx} className="leading-7">
                          {line}
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            </article>
          </PageContainer>
        </SectionContainer>

        {/* 관련 포스트 */}
        {relatedPosts.length > 0 && (
          <SectionContainer variant="muted" padding="lg">
            <PageContainer>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                관련 포스트
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <span>{formatDate(relatedPost.date)}</span>
                      <span>{relatedPost.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </PageContainer>
          </SectionContainer>
        )}
      </main>

      <Footer />
    </>
  )
}
