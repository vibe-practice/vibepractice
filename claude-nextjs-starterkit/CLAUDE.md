# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 설정

- 모든 응답, 주석, 커밋 메시지, 문서를 **한국어**로 작성
- 변수명/함수명은 **영어**

## 개발 명령어

```bash
npm run dev          # 개발 서버 (Turbopack, localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint
npx shadcn add <name>  # shadcn/ui 컴포넌트 추가
```

## 기술 스택

- Next.js 15 (App Router, React 19, Turbopack)
- Tailwind CSS v4 (`@import "tailwindcss"` 방식, PostCSS 플러그인)
- shadcn/ui (new-york 스타일, lucide 아이콘, RSC 지원)
- TypeScript strict 모드

## 아키텍처

- **루트 레이아웃** (`src/app/layout.tsx`): Header + main(flex-1) + Footer 구조, `lang="ko"`, Geist 폰트 적용
- **클라이언트 컴포넌트**: Header, MobileNav는 `"use client"` (usePathname 사용). Footer는 서버 컴포넌트
- **모바일 내비게이션**: Sheet(사이드 드로어) 기반. 네비게이션 링크가 Header와 MobileNav에 각각 별도 정의됨
- **경로 별칭**: `@/*` → `./src/*`
- **테마**: globals.css에 oklch 기반 CSS 변수 (라이트/다크 모드)
- **cn() 유틸리티**: `@/lib/utils`에 위치 (clsx + tailwind-merge)

## shadcn/ui

- 컴포넌트 경로: `@/components/ui` (직접 수정 지양, `npx shadcn add`로 추가)
- 베이스 컬러: neutral, CSS 변수 기반

## 반응형 기준

- 모바일: 기본, 태블릿: `md:` (768px), 데스크톱: `lg:` (1024px)
- 모든 페이지는 모바일-태블릿-데스크톱 반응형 필수
