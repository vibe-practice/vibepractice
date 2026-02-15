/**
 * 컴포넌트가 클라이언트에 마운트되었는지 확인합니다
 * SSR(서버 사이드 렌더링)에서 클라이언트 전용 코드가 실행되는 것을 방지합니다
 */

"use client"

import { useEffect, useState } from "react"

/**
 * 컴포넌트가 클라이언트에 마운트되었는지 확인하는 훅
 * @returns 마운트 여부
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const mounted = useMounted()
 *   if (!mounted) return null // SSR 중에는 아무것도 렌더링하지 않음
 *   return <div>클라이언트에서만 렌더링됨</div>
 * }
 * ```
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
