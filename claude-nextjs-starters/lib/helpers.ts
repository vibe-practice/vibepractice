/**
 * 유틸리티 헬퍼 함수들
 */

/**
 * 날짜를 한국식 형식으로 포맷팅
 * @param date - 포맷할 날짜
 * @returns 포맷된 날짜 문자열 (예: "2024년 2월 15일")
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  return `${year}년 ${month}월 ${day}일`
}

/**
 * 날짜를 상대적 시간으로 표현
 * @param date - 비교할 날짜
 * @returns 상대적 시간 문자열 (예: "2일 전")
 */
export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30))

  if (diffMins < 1) return "방금 전"
  if (diffMins < 60) return `${diffMins}분 전`
  if (diffHours < 24) return `${diffHours}시간 전`
  if (diffDays < 30) return `${diffDays}일 전`
  if (diffMonths < 12) return `${diffMonths}개월 전`
  return `1년 이상 전`
}

/**
 * URL 슬러그를 생성합니다
 * @param text - 변환할 텍스트
 * @returns 슬러그 문자열
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

/**
 * 텍스트를 지정된 길이로 잘라냅니다
 * @param text - 자를 텍스트
 * @param length - 최대 길이
 * @returns 잘려진 텍스트
 */
export function truncate(text: string, length: number = 100): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + "..."
}

/**
 * 문자열을 타이틀 케이스로 변환합니다
 * @param str - 변환할 문자열
 * @returns 타이틀 케이스로 변환된 문자열
 */
export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * 배열을 청크(chunk)로 분할합니다
 * @param array - 분할할 배열
 * @param size - 각 청크의 크기
 * @returns 청크로 분할된 배열
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

/**
 * 수를 축약된 형식으로 표시합니다
 * @param num - 표시할 수
 * @returns 축약된 수 문자열 (예: "1.2K", "1.5M")
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}
