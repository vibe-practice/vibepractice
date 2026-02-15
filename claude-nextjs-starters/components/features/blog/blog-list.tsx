/**
 * 블로그 목록 컴포넌트
 * 여러 블로그 포스트를 그리드로 표시
 */

import { BlogPost } from "@/types"
import { BlogCard } from "./blog-card"

interface BlogListProps {
  /** 블로그 포스트 배열 */
  posts: readonly BlogPost[] | BlogPost[]
  /** 열의 개수 (기본: 3) */
  columns?: 2 | 3
}

/**
 * BlogList 컴포넌트
 * 블로그 포스트를 그리드 레이아웃으로 표시
 *
 * @example
 * ```tsx
 * <BlogList posts={BLOG_POSTS} columns={3} />
 * ```
 */
export function BlogList({ posts, columns = 3 }: BlogListProps) {
  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  }

  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${gridColsClass[columns]}`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
