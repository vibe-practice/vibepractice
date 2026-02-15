/**
 * 연락처 페이지
 * 사용자가 우리에게 문의할 수 있는 페이지
 */

import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageContainer, SectionContainer } from "@/components/shared/section-container"
import { ContactForm } from "@/components/features/contact/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { SITE_NAME } from "@/lib/constants"
import { Mail, MessageSquare, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "연락처 | " + SITE_NAME,
  description: "Flowmatic에 문의하세요. 우리는 항상 도움을 드릴 준비가 되어있습니다.",
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* 히어로 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                문의하기
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                무엇이든 물어봐주세요. 우리는 항상 도움을 드릴 준비가 되어있습니다.
              </p>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 연락 방법 */}
        <SectionContainer variant="muted" padding="lg">
          <PageContainer>
            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {/* 이메일 */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-950 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      이메일
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      support@flowmatic.com
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      24시간 이내에 응답
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 채팅 */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-block mb-4 p-3 bg-purple-100 dark:bg-purple-950 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      라이브 채팅
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      실시간으로 대화하기
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      업무 시간: 평일 9-18시
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 전화 */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-block mb-4 p-3 bg-green-100 dark:bg-green-950 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      전화
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +82-2-1234-5678
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      업무 시간: 평일 9-18시
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </PageContainer>
        </SectionContainer>

        {/* 폼 섹션 */}
        <SectionContainer variant="light" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  메시지 보내기
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  아래 폼을 작성하시면 빠르게 처리해드리겠습니다.
                </p>
              </div>

              <ContactForm />
            </div>
          </PageContainer>
        </SectionContainer>

        {/* FAQ 섹션 */}
        <SectionContainer variant="muted" padding="lg">
          <PageContainer>
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                자주 묻는 질문
              </h2>

              <div className="space-y-6">
                {/* FAQ 항목 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Q. 무료로 사용할 수 있나요?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    네, Flowmatic은 무료로 시작할 수 있습니다. 신용카드 없이도 모든 기능을 체험해볼 수 있습니다.
                  </p>
                </div>

                {/* FAQ 항목 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Q. 계약 기간이 있나요?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    아니요, 언제든지 구독을 취소할 수 있습니다. 약정 기간이 없습니다.
                  </p>
                </div>

                {/* FAQ 항목 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Q. 데이터는 안전한가요?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    네, 우리는 엔터프라이즈급 보안으로 모든 데이터를 암호화하여 보호합니다.
                  </p>
                </div>

                {/* FAQ 항목 4 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Q. 지원이 필요하면 어떻게 하나요?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    라이브 채팅, 이메일, 전화로 언제든지 우리 팀에 문의할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </PageContainer>
        </SectionContainer>
      </main>

      <Footer />
    </>
  )
}
