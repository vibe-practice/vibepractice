# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 규칙

모든 응답, 코드 주석, 커밋 메시지는 한국어로 작성하세요. 변수명과 함수명은 영어를 유지합니다.

## 프로젝트 개요

- **프레임워크**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **스타일링**: Tailwind CSS 4.x + PostCSS
- **UI 라이브러리**: shadcn/ui (New York 스타일)
- **아이콘**: Lucide React
- **기타**: class-variance-authority, clsx, tailwind-merge

## 주요 명령어

### 개발 서버 실행
```bash
npm run dev
```
- localhost:3000에서 핫 리로드를 지원하는 개발 서버 시작
- 파일 변경 시 자동으로 페이지 업데이트

### 프로덕션 빌드
```bash
npm run build
```
- 프로덕션 최적화 빌드 생성

### 프로덕션 서버 실행
```bash
npm start
```
- 빌드된 애플리케이션 프로덕션 모드로 실행

### Linting
```bash
npm run lint
```
- ESLint를 이용한 코드 품질 검사 (Next.js 기본 규칙 적용)
- 설정 파일: `eslint.config.mjs`

## 프로젝트 구조

```
.
├── app/
│   ├── layout.tsx           # 루트 레이아웃 (메타데이터, 폰트 설정)
│   ├── page.tsx             # 홈 페이지 (App Router)
│   ├── globals.css          # 전역 스타일 (Tailwind imports)
│   └── favicon.ico
├── lib/
│   └── utils.ts             # 유틸리티 함수 (cn() 클래스 병합)
├── public/                  # 정적 자산 (images, icons 등)
├── components.json          # shadcn/ui 설정
├── tsconfig.json            # TypeScript 설정 (@/* 경로 설정)
├── next.config.ts           # Next.js 설정
├── eslint.config.mjs        # ESLint 설정 (FlatConfig)
├── postcss.config.mjs       # PostCSS & Tailwind 설정
└── package.json
```

## 아키텍처 및 개발 패턴

### App Router
- Next.js 13+ App Router를 사용하여 모든 라우팅 구현
- `app/` 디렉토리 기반 파일 시스템 라우팅
- 새로운 페이지는 `app/[path]/page.tsx` 형식으로 생성

### 컴포넌트 구조
- **서버 컴포넌트**: 기본값 (데이터 페칭, 보안)
- **클라이언트 컴포넌트**: `'use client'` 지시문으로 표시 (인터랙션, 상태)
- shadcn/ui 컴포넌트는 `components/ui/` 디렉토리에 설치

### 스타일링
- **Tailwind CSS**: 유틸리티 클래스 기반 스타일
- `cn()` 유틸리티: `lib/utils.ts`에서 제공하는 Tailwind 클래스 병합 함수
- 전역 스타일: `app/globals.css`
- CSS 변수 지원 활성화 (`components.json` - cssVariables: true)

### 경로 별칭 (Path Aliases)
- `@/*`: 프로젝트 루트 디렉토리
- `@/components`: components 디렉토리
- `@/lib`: lib 디렉토리
- `@/hooks`: hooks 디렉토리
- 설정: `tsconfig.json`과 `components.json`에서 관리

## shadcn/ui 컴포넌트 설치

새로운 shadcn/ui 컴포넌트가 필요한 경우:

```bash
npm install shadcn-ui
npx shadcn-ui@latest add [component-name]
```

예시:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

설치된 컴포넌트는 `components/ui/` 디렉토리에 생성됩니다.

## 개발 가이드라인

### 반응형 설계
- 모바일 우선 접근법 (Tailwind의 `sm:`, `md:`, `lg:` 등 사용)
- 태블릿, 모바일, 데스크톱 모두 고려하여 설계

### 컴포넌트 분리
- 재사용 가능한 컴포넌트로 분리 (components/ 디렉토리)
- 단일 책임 원칙 준수
- Props 인터페이스 명확히 정의

### 타입 안정성
- TypeScript strict mode 활성화
- 컴포넌트와 함수에 타입 명시
- any 타입 사용 최소화

## 주의사항

### Next.js 16에서의 주요 변화
- App Router가 완전히 안정화됨
- React 19 호환성 확인
- 일부 API는 deprecated될 수 있음 - 공식 문서 참고

### ESLint 설정
- `eslint.config.mjs`는 FlatConfig 형식 사용
- Next.js 기본 규칙과 TypeScript 규칙 적용
- `.next/`, `node_modules/` 등은 자동 제외

### PostCSS 4.0
- `@tailwindcss/postcss` v4 사용으로 단순화된 설정
- 별도의 tailwind.config.js 불필요 (components.json에서 관리)

## 확장 및 커스터마이제이션

### 환경 변수
- `.env.local` 파일에 환경 변수 저장
- `NEXT_PUBLIC_` 접두사로 클라이언트에 노출

### API 라우트
- `app/api/[route]/route.ts` 형식으로 API 엔드포인트 생성
- 서버 액션도 활용 가능

### 테마 커스터마이제이션
- Tailwind CSS 변수는 `app/globals.css`에서 정의
- shadcn/ui 컴포넌트는 CSS 변수 기반으로 스타일 자동 적용

## 참고 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [React 19 변경사항](https://react.dev/blog)
