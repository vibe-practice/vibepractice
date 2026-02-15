/**
 * 사이트 메타데이터 및 상수
 */

export const SITE_NAME = "Flowmatic"
export const SITE_DESCRIPTION = "팀의 워크플로우를 자동화하는 간단하고 강력한 플랫폼"
export const SITE_URL = "https://flowmatic.com"

/**
 * 주요 네비게이션 링크
 */
export const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/features", label: "기능" },
  { href: "/about", label: "소개" },
  { href: "/blog", label: "블로그" },
  { href: "/contact", label: "연락처" },
] as const

/**
 * 기능 목록
 */
export const FEATURES = [
  {
    id: "automation",
    title: "워크플로우 자동화",
    description: "반복적인 작업을 자동화하고 시간을 절약하세요",
    icon: "Zap",
  },
  {
    id: "integration",
    title: "다양한 통합",
    description: "50+ 인기 서비스와 자동으로 연결되세요",
    icon: "Plug",
  },
  {
    id: "realtime",
    title: "실시간 모니터링",
    description: "모든 워크플로우를 실시간으로 모니터링하세요",
    icon: "Activity",
  },
  {
    id: "template",
    title: "미리 만들어진 템플릿",
    description: "바로 사용할 수 있는 100+ 템플릿 제공",
    icon: "Layout",
  },
  {
    id: "team",
    title: "팀 협업",
    description: "팀 전체와 워크플로우를 공유하고 협업하세요",
    icon: "Users",
  },
  {
    id: "secure",
    title: "높은 보안성",
    description: "엔터프라이즈 수준의 보안으로 데이터를 보호하세요",
    icon: "Lock",
  },
] as const

/**
 * 통계 데이터
 */
export const STATS = [
  { number: "10K+", label: "활성 사용자" },
  { number: "50+", label: "통합 서비스" },
  { number: "1M+", label: "자동화된 작업" },
  { number: "99.9%", label: "가용성" },
] as const

/**
 * 블로그 데이터
 */
export const BLOG_POSTS = [
  {
    id: "getting-started",
    title: "Flowmatic 시작하기",
    slug: "getting-started",
    excerpt: "Flowmatic에서 첫 번째 워크플로우를 만드는 방법을 배워보세요",
    date: "2024-02-15",
    category: "튜토리얼",
    content: `# Flowmatic 시작하기

Flowmatic은 워크플로우를 자동화하는 가장 간단한 방법입니다. 이 가이드에서는 첫 번째 워크플로우를 만드는 방법을 배워봅니다.

## 1단계: 로그인

먼저 Flowmatic에 로그인하세요. 아직 계정이 없다면 가입하세요.

## 2단계: 새 워크플로우 만들기

대시보드에서 "새 워크플로우" 버튼을 클릭하세요.

## 3단계: 트리거 설정

워크플로우를 시작할 조건을 설정합니다. 예를 들어:
- 새로운 이메일 수신
- 파일 업로드
- 시간 기반 스케줄

## 4단계: 액션 추가

트리거 후 실행할 작업을 설정합니다:
- 알림 전송
- 파일 처리
- 데이터 저장

## 5단계: 저장 및 활성화

완료 후 워크플로우를 저장하고 활성화하세요.

축하합니다! 첫 번째 워크플로우가 완성되었습니다.`,
  },
  {
    id: "automation-tips",
    title: "워크플로우 자동화 팁과 트릭",
    slug: "automation-tips",
    excerpt: "효율적인 워크플로우를 만드는 10가지 팁을 소개합니다",
    date: "2024-02-10",
    category: "팁",
    content: `# 워크플로우 자동화 팁과 트릭

이 글에서는 Flowmatic을 최대한 활용하는 10가지 팁을 소개합니다.

## 1. 조건부 로직 활용

if-then 조건을 사용하여 더 스마트한 워크플로우를 만드세요.

## 2. 에러 처리

항상 에러 처리를 고려하여 견고한 워크플로우를 만드세요.

## 3. 로깅과 모니터링

모든 실행을 기록하고 모니터링하세요.

더 많은 팁들이 있습니다...`,
  },
  {
    id: "best-practices",
    title: "Flowmatic 모범 사례",
    slug: "best-practices",
    excerpt: "팀의 생산성을 최대화하기 위한 모범 사례들",
    date: "2024-02-05",
    category: "가이드",
    content: `# Flowmatic 모범 사례

효율적인 워크플로우 관리를 위한 모범 사례입니다.

## 1. 명확한 이름 지정

워크플로우의 목적을 명확히 하는 이름을 사용하세요.

## 2. 문서화

각 워크플로우의 목적과 사용 시나리오를 문서화하세요.

## 3. 정기적인 검토

주기적으로 워크플로우를 검토하고 개선하세요.

이러한 관행들이 팀의 효율성을 높입니다.`,
  },
] as const

/**
 * 팀 멤버 정보
 */
export const TEAM_MEMBERS = [
  {
    id: "john",
    name: "John Park",
    role: "CEO & Co-founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "자동화 기술의 열정가",
  },
  {
    id: "sarah",
    name: "Sarah Lee",
    role: "CTO & Co-founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "풀스택 개발자",
  },
  {
    id: "michael",
    name: "Michael Kim",
    role: "Head of Product",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    bio: "사용자 경험에 중점",
  },
  {
    id: "emma",
    name: "Emma Johnson",
    role: "Lead Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    bio: "디자인 시스템 전문가",
  },
] as const
