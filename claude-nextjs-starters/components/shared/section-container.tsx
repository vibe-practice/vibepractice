/**
 * 섹션 컨테이너 컴포넌트
 * 각 섹션의 최대 너비와 여백을 일관되게 유지
 */

import { cn } from "@/lib/utils"

interface SectionContainerProps {
  /** 자식 요소 */
  children: React.ReactNode
  /** CSS 클래스명 */
  className?: string
  /** 배경색 (기본: white/dark:black) */
  variant?: "light" | "dark" | "muted"
  /** 수직 패딩 (기본: py-24) */
  padding?: "sm" | "md" | "lg"
}

/**
 * SectionContainer 컴포넌트
 * 페이지의 각 섹션을 일관되게 스타일링합니다
 *
 * @example
 * ```tsx
 * <SectionContainer variant="muted" padding="lg">
 *   <h2>섹션 제목</h2>
 *   <p>섹션 내용</p>
 * </SectionContainer>
 * ```
 */
export function SectionContainer({
  children,
  className,
  variant = "light",
  padding = "md",
}: SectionContainerProps) {
  // 배경색 클래스 정의
  const bgClasses = {
    light: "bg-white dark:bg-black",
    dark: "bg-gray-900 dark:bg-slate-950 text-white",
    muted: "bg-gray-50 dark:bg-slate-900",
  }

  // 패딩 크기 정의
  const paddingClasses = {
    sm: "py-12",
    md: "py-24",
    lg: "py-32",
  }

  return (
    <section
      className={cn(
        "w-full",
        bgClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      {/* 최대 너비 제약이 있는 컨테이너 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

/**
 * 페이지 컨테이너 컴포넌트
 * 모든 페이지의 최상위 컨테이너
 */
export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}
