/**
 * 미디어 쿼리를 사용하여 화면 크기를 감지합니다
 * 반응형 컴포넌트를 만들 때 유용합니다
 */

"use client"

import { useEffect, useState } from "react"

/**
 * 미디어 쿼리 결과를 감지하는 훅
 * @param query - CSS 미디어 쿼리 문자열
 * @returns 미디어 쿼리 매칭 여부
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useMediaQuery("(max-width: 768px)")
 *   return isMobile ? <MobileView /> : <DesktopView />
 * }
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // 미디어 쿼리 리스너 생성
    const mediaQuery = window.matchMedia(query)

    // 초기 상태 설정
    setMatches(mediaQuery.matches)

    // 미디어 쿼리 변경 감지
    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [query])

  return matches
}

/**
 * 편의 훅: 모바일 화면인지 확인
 */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 768px)")
}

/**
 * 편의 훅: 태블릿 화면인지 확인
 */
export function useIsTablet(): boolean {
  return useMediaQuery("(max-width: 1024px)")
}

/**
 * 편의 훅: 데스크톱 화면인지 확인
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1025px)")
}
