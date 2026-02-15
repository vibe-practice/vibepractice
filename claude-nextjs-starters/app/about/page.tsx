/**
 * 소개 페이지
 * Flowmatic에 대한 정보와 팀 소개
 */

import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageContainer, SectionContainer } from "@/components/shared/section-container"
import { TEAM_MEMBERS, SITE_NAME } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "소개 | " + SITE_NAME,
  description: "Flowmatic의 미션, 비전, 그리고 팀에 대해 알아보세요",
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* 히어로 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Flowmatic에 대해
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                우리는 팀의 생산성을 높이고 시간을 절약하는 도구를 만드는 것에 믿음을 가지고 있습니다.
              </p>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 미션 섹션 */}
        <SectionContainer variant="muted" padding="lg">
          <PageContainer>
            <div className="grid gap-12 md:grid-cols-2">
              {/* 미션 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  우리의 미션
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  모든 팀이 자동화의 힘을 활용할 수 있도록 하는 것입니다.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  복잡한 기술 없이도 누구나 워크플로우를 자동화할 수 있는 플랫폼을 제공합니다.
                </p>
              </div>

              {/* 비전 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  우리의 비전
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  일의 미래는 자동화된 것입니다.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  반복적인 작업을 없애고, 팀이 중요한 일에 집중할 수 있는 세상을 만듭니다.
                </p>
              </div>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 팀 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                우리 팀
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                경험 많은 팀이 당신의 성공을 위해 노력합니다.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_MEMBERS.map((member) => (
                <Card key={member.id} className="border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      {/* 아바타 */}
                      <div className="mb-4 flex justify-center">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={100}
                          height={100}
                          className="h-24 w-24 rounded-full"
                        />
                      </div>

                      {/* 정보 */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.role}
                      </p>
                      {member.bio && (
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 가치 섹션 */}
        <SectionContainer variant="muted" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                우리의 가치
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {/* 간단함 */}
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>간단함</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    기술이 없어도 누구나 사용할 수 있는 직관적인 인터페이스를 제공합니다.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* 신뢰성 */}
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>신뢰성</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    99.9% 가용성으로 항상 당신의 워크플로우를 보호합니다.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* 혁신 */}
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>혁신</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    항상 새로운 기능과 개선 사항을 제공하기 위해 노력합니다.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </PageContainer>
        </SectionContainer>
      </main>

      <Footer />
    </>
  )
}
