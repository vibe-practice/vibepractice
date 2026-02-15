/**
 * 로딩 스피너 컴포넌트
 * 로딩 중인 상태를 표시합니다
 */

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface LoadingSpinnerProps {
  /** 크기 (기본: md) */
  size?: "sm" | "md" | "lg"
  /** 텍스트 (선택사항) */
  text?: string
  /** CSS 클래스명 */
  className?: string
}

/**
 * LoadingSpinner 컴포넌트
 * 간단한 로딩 상태 표시
 *
 * @example
 * ```tsx
 * <LoadingSpinner />
 * <LoadingSpinner size="lg" text="로딩 중..." />
 * ```
 */
export function LoadingSpinner({
  size = "md",
  text,
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className
      )}
    >
      {/* 애니메이션 스피너 */}
      <div className={cn(sizeClasses[size], "animate-spin")}>
        <svg
          className="h-full w-full text-blue-600 dark:text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>

      {/* 텍스트 (선택사항) */}
      {text && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  )
}

/**
 * CardSkeleton 컴포넌트
 * 카드 로딩 상태를 표시합니다
 */
export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-10 w-32" />
    </div>
  )
}

/**
 * GridSkeleton 컴포넌트
 * 그리드 로딩 상태를 표시합니다
 */
export function GridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}
