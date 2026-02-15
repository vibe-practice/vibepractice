import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Palette, Blocks, Zap, Shield, Globe } from "lucide-react";

// 기능 카드 데이터
const features = [
  {
    icon: Rocket,
    title: "빠른 시작",
    description: "Next.js 15 App Router로 즉시 개발을 시작할 수 있습니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "CSS-first 설정으로 직관적인 스타일링을 지원합니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui",
    description: "재사용 가능한 고품질 UI 컴포넌트를 바로 사용할 수 있습니다.",
  },
  {
    icon: Zap,
    title: "최적화된 성능",
    description: "서버 컴포넌트와 자동 코드 분할로 빠른 로딩을 제공합니다.",
  },
  {
    icon: Shield,
    title: "TypeScript",
    description: "타입 안전성으로 안정적인 코드 작성을 도와줍니다.",
  },
  {
    icon: Globe,
    title: "반응형 디자인",
    description: "모바일, 태블릿, 데스크톱 모두 완벽하게 지원합니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight leading-[140%] sm:text-5xl lg:text-6xl">
            웹 개발을
            <br />
            <span className="text-primary">빠르게 시작하세요</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Next.js 15, Tailwind CSS v4, shadcn/ui가 포함된 스타터 킷으로
            <br className="hidden sm:inline" />
            프로젝트 설정 시간을 절약하고 개발에 집중하세요.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base">
              시작하기
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              문서 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features 섹션 */}
      <section className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              주요 기능
            </h2>
            <p className="mt-4 text-muted-foreground">
              생산성을 높이기 위한 핵심 기능들이 미리 준비되어 있습니다.
            </p>
          </div>

          {/* 카드 그리드: 모바일 1열, 태블릿 2열, 데스크톱 3열 */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-muted-foreground">
            복잡한 설정 없이 바로 개발을 시작할 수 있습니다.
          </p>
          <Button size="lg" className="mt-8 text-base">
            무료로 시작하기
          </Button>
        </div>
      </section>
    </>
  );
}
