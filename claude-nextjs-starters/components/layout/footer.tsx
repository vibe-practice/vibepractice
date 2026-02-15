/**
 * 페이지 푸터 컴포넌트
 */

import Link from "next/link"
import { SITE_NAME, NAV_LINKS } from "@/lib/constants"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react"

/**
 * Footer 컴포넌트
 * 모든 페이지 하단에 표시되는 푸터
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {SITE_NAME}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              팀의 워크플로우를 자동화하는 간단하고 강력한 플랫폼
            </p>
          </div>

          {/* 제품 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              제품
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  기능
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  가격
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* 리소스 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              리소스
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  블로그
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  문서
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  지원
                </Link>
              </li>
            </ul>
          </div>

          {/* 사회 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              팔로우
            </h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} {SITE_NAME}. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  )
}
