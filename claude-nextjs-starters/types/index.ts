/**
 * 애플리케이션 전역 타입 정의
 */

/**
 * 블로그 포스트 타입
 */
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  category: string
  author?: string
  image?: string
}

/**
 * 기능(Feature) 타입
 */
export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

/**
 * 통계(Stats) 타입
 */
export interface Stat {
  number: string
  label: string
}

/**
 * 팀 멤버 타입
 */
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio?: string
}

/**
 * 네비게이션 링크 타입
 */
export interface NavLink {
  href: string
  label: string
}
