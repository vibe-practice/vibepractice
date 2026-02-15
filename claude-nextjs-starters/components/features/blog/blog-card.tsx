/**
 * 블로그 카드 컴포넌트
 * 개별 블로그 포스트를 카드로 표시
 */

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogPost } from "@/types"
import { formatDate, formatRelativeTime } from "@/lib/helpers"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  /** 블로그 포스트 데이터 */
  post: BlogPost
}

/**
 * BlogCard 컴포넌트
 * 블로그 목록에서 각 포스트를 카드로 표시
 *
 * @example
 * ```tsx
 * <BlogCard post={post} />
 * ```
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="mt-2 line-clamp-2">
                {post.excerpt}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* 카테고리 배지 */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          {/* 메타 정보 */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              더 읽기
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
