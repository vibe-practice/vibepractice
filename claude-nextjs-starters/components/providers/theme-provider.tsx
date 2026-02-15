/**
 * 다크모드 테마를 제공하는 Provider 컴포넌트
 * next-themes를 사용하여 라이트/다크/시스템 자동 감지 기능 제공
 */

"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

/**
 * 테마 프로바이더 컴포넌트
 * @param children - 자식 컴포넌트
 *
 * @example
 * ```tsx
 * // app/layout.tsx에서 사용
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <Providers>{children}</Providers>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class" // HTML 요소의 class 속성에 "dark" 추가
      defaultTheme="light" // 기본값: 라이트 모드
      disableTransitionOnChange // 테마 변경 시 부드러운 전환
    >
      {children}
    </ThemeProvider>
  )
}
