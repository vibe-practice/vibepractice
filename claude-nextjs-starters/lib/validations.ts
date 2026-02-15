/**
 * Zod를 사용한 폼 검증 스키마
 */

import { z } from "zod"

/**
 * 이메일 검증 스키마
 */
export const emailSchema = z
  .string()
  .email("유효한 이메일을 입력하세요")
  .min(1, "이메일은 필수입니다")

/**
 * 연락처 폼 검증 스키마
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 최소 2자 이상이어야 합니다")
    .max(100, "이름은 100자 이하여야 합니다"),
  email: emailSchema,
  subject: z
    .string()
    .min(5, "제목은 최소 5자 이상이어야 합니다")
    .max(200, "제목은 200자 이하여야 합니다"),
  message: z
    .string()
    .min(10, "메시지는 최소 10자 이상이어야 합니다")
    .max(5000, "메시지는 5000자 이하여야 합니다"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * 뉴스레터 구독 검증 스키마
 */
export const newsletterSchema = z.object({
  email: emailSchema,
})

export type NewsletterData = z.infer<typeof newsletterSchema>

/**
 * 워크플로우 검증 스키마 (예시)
 */
export const workflowSchema = z.object({
  name: z
    .string()
    .min(1, "워크플로우 이름은 필수입니다")
    .max(100, "이름은 100자 이하여야 합니다"),
  description: z
    .string()
    .max(500, "설명은 500자 이하여야 합니다")
    .optional(),
  isPublic: z.boolean().default(false),
})

export type WorkflowData = z.infer<typeof workflowSchema>
