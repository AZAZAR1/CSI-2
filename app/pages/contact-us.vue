<template>
    <section class="mt-[60px] lg:mt-0 mx-auto w-full px-6 md:max-w-7xl max-w-4xl py-16 sm:py-20">
        <h1
            class="text-[3.65rem] md:text-[4.8rem] tracking-[-0.01em] leading-[100%] text-transparent bg-linear-to-br from-white via-white/80 to-white/50 bg-clip-text  mb-2 pb-4 md:pb-8 text-balance mt-2 font-semibold">
            Get in touch
        </h1>

        <div class="flex flex-col gap-12 sm:flex-row sm:gap-8 md:gap-24 lg:gap-72">
            <div class="flex-auto">
                <form class="mt-6 grid sm:grid-cols-2 gap-6 items-start" @submit.prevent="onSubmit"
                    novalidate :aria-busy="isSubmitting">

                    <input type="text" v-model="honeypot" tabindex="-1" autocomplete="off" class="hidden"
                        aria-hidden="true" />

                    <UiFormField v-slot="{ componentField }" name="name">
                        <UiFormItem>
                            <UiFormLabel class="mb-1">Name</UiFormLabel>
                            <UiFormControl>
                                <UiInput class="h-12" type="text" autocomplete="name" placeholder="Your full name"
                                    v-bind="componentField" :data-field="'name'" :disabled="isSubmitting" />
                            </UiFormControl>
                            <UiFormMessage v-if="showErrors" />
                        </UiFormItem>
                    </UiFormField>

                    <UiFormField v-slot="{ componentField }" name="email">
                        <UiFormItem>
                            <UiFormLabel class="mb-1">Email</UiFormLabel>
                            <UiFormControl>
                                <UiInput class="h-12" type="email" autocomplete="email" placeholder="you@company.com"
                                    v-bind="componentField" :data-field="'email'" :disabled="isSubmitting" />
                            </UiFormControl>
                            <UiFormMessage v-if="showErrors" />
                        </UiFormItem>
                    </UiFormField>

                    <UiFormField v-slot="{ componentField }" name="company">
                        <UiFormItem class="col-span-full">
                            <UiFormLabel class="mb-1">Company</UiFormLabel>
                            <UiFormControl>
                                <UiInput class="h-12" type="text" autocomplete="organization" placeholder="Company name"
                                    v-bind="componentField" :data-field="'company'" :disabled="isSubmitting" />
                            </UiFormControl>
                            <UiFormMessage v-if="showErrors" />
                        </UiFormItem>
                    </UiFormField>

                    <UiFormField v-slot="{ componentField }" name="industry">
                        <UiFormItem class="col-span-full">
                            <UiFormLabel class="mb-1">Industry</UiFormLabel>
                            <UiFormControl>
                                <UiSelect v-bind="componentField" :disabled="isSubmitting">
                                    <UiSelectTrigger class="w-full !h-12" :data-field="'industry'">
                                        <UiSelectValue placeholder="Select industry" />
                                    </UiSelectTrigger>
                                    <UiSelectContent>
                                        <UiSelectItem v-for="opt in INDUSTRY_OPTIONS" :key="opt.value"
                                            :value="opt.value">
                                            {{ opt.label }}
                                        </UiSelectItem>
                                    </UiSelectContent>
                                </UiSelect>
                            </UiFormControl>
                            <UiFormMessage v-if="showErrors" />
                        </UiFormItem>
                    </UiFormField>

                    <UiFormField v-slot="{ componentField }" name="message">
                        <UiFormItem class="col-span-full">
                            <UiFormLabel class="mb-1">Message</UiFormLabel>
                            <UiFormControl>
                                <UiTextarea class="min-h-32" rows="4" placeholder="Tell us how we can help..."
                                    v-bind="componentField" :data-field="'message'" :disabled="isSubmitting" />
                            </UiFormControl>
                            <div class="flex items-center justify-between mt-1">
                                <UiFormMessage v-if="showErrors" />
                                <p class="text-xs text-neutral-400">{{ messageLength }}/{{ MESSAGE_MAX }}</p>
                            </div>
                        </UiFormItem>
                    </UiFormField>

                    <UiButton type="submit"
                        class="col-span-full mt-4 rounded-xl text-base h-12 gap-2 px-5 font-semibold"
                        :disabled="isSubmitting">
                        <template v-if="!isSubmitting">Submit</template>
                        <template v-else>
                            Submitting
                            <Loader2 class="w-4 h-4 animate-spin" />
                        </template>
                    </UiButton>
                </form>
            </div>

            <div class="mt-6 flex-auto animate-hero-text-slide-up-fade">
                <div v-for="(item, index) in contactDetails" :key="index" class="mb-8">
                    <p class="text-sm text-neutral-400 font-normal mb-1">{{ item.label }}</p>

                    <component :is="item.type === 'email' || item.type === 'phone' ? 'a' : 'span'"
                        :href="item.type === 'email' ? `mailto:${item.value}` : item.type === 'phone' ? `tel:${item.value}` : undefined"
                        class="text-sm font-semibold leading-6 text-primary-50 underline decoration-dotted underline-offset-3 transition hover:text-primary-500">
                        {{ item.value }}
                    </component>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from 'vue-sonner'
import { Loader2 } from 'lucide-vue-next'

const { public: { staticformsAccessKey: STATICFORMS_KEY } } = useRuntimeConfig()

const INDUSTRY_VALUES = [
  'medtech',
  'fmcg',
  'cpg',
  'defense',
  'manufacturing',
  'other'
] as const
type Industry = typeof INDUSTRY_VALUES[number]

const INDUSTRY_LABELS: Record<Industry, string> = {
  medtech: 'Medical Technology',
  fmcg: 'Fast Moving Consumer Goods',
  cpg: 'Consumer Packaged Goods',
  defense: 'Defense & Aerospace',
  manufacturing: 'Precision Manufacturing',
  other: 'Other'
}
const INDUSTRY_OPTIONS = INDUSTRY_VALUES.map(v => ({
  value: v,
  label: INDUSTRY_LABELS[v]
}))

const MESSAGE_MAX = 2000

const zodSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Enter a valid email').max(254),
  company: z.string().trim().min(2, 'Company is required').max(200),
  industry: z.enum(INDUSTRY_VALUES, { required_error: 'Select an industry' }),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(MESSAGE_MAX)
})
type FormValues = z.infer<typeof zodSchema>
const typedSchema = toTypedSchema(zodSchema)

const initialFormValues: FormValues = {
  name: '',
  email: '',
  company: '',
  industry: undefined as unknown as Industry,
  message: ''
}

const { handleSubmit, resetForm, values, submitCount } = useForm<FormValues>({
  validationSchema: typedSchema,
  validateOnMount: false,
  initialValues: initialFormValues
})

const showErrors = computed(() => submitCount.value > 0)

const honeypot = ref('')
const startAt = ref(Date.now())
const isSubmitting = ref(false)
const messageLength = computed(() => values.message?.length ?? 0)

function focusField(name?: keyof FormValues | string) {
  if (!name) return
  const sel = name === 'industry'
    ? '[data-field="industry"]'
    : `[name="${name}"], [data-field="${name}"]`

  queueMicrotask(() => {
    const el = document.querySelector(sel) as HTMLElement | null
    el?.focus?.()
  })
}

const onSubmit = handleSubmit(
  async (vals) => {
    if (isSubmitting.value) return

    // Anti-bot: honeypot
    if (honeypot.value.trim()) return

    // Anti-bot: too fast (under 8 seconds)
    if (Date.now() - startAt.value < 8000) {
      toast.error('Please take a moment to fill out the form.')
      return
    }

    isSubmitting.value = true

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const formData = new FormData()
      formData.append('apiKey', STATICFORMS_KEY)
      formData.append('subject', 'Contact Form Submission')
      formData.append('replyTo', vals.email)
      formData.append('honeypot', '')
      formData.append('name', vals.name)
      formData.append('email', vals.email)
      formData.append('company', vals.company)
      formData.append('message', vals.message)
      formData.append('Industry', INDUSTRY_LABELS[vals.industry])

      const res = await fetch('https://api.staticforms.dev/submit', {
        method: 'POST',
        signal: controller.signal,
        body: formData
      })

      const json = await res.json().catch(() => ({}))

      if (res.ok && json?.success) {
        toast.success('Your message has been sent successfully.')
        resetForm({ values: initialFormValues })
        honeypot.value = ''
        startAt.value = Date.now()
      } else {
        toast.error(json?.message || 'Something went wrong. Please try again shortly.')
      }
    } catch (e: any) {
      toast.error(
        e?.name === 'AbortError'
          ? 'The request timed out. Please try again.'
          : 'Unable to send your message. Check your connection and try again.'
      )
    } finally {
      clearTimeout(timeoutId)
      isSubmitting.value = false
    }
  },

  (errors) => {
    const first = Object.keys(errors)[0]
    focusField(first)
    toast.error('Please review the highlighted fields and try again.')
  }
)

const contactDetails = [
  { label: 'General Inquiries', value: 'info@createdelivercapture.com', type: 'email' },
  { label: 'Careers', value: 'info@createdelivercapture.com', type: 'email' },
  { label: 'Dubai', value: '+971 (56) 106-6745', type: 'phone' },
  { label: 'Geneva', value: '+41 (76) 230-5791', type: 'phone' },
  { label: 'Atlanta', value: '+1 (833) 433-6463', type: 'phone' }
] as const

useSeoMeta({
  title: 'Contact Us | CDC',
  ogTitle: 'Contact Us | CDC',
  twitterTitle: 'Contact Us | CDC',
  description:
    'Reach out to CDC to discuss business transformation opportunities. Our team helps you create value, deliver results, and capture growth across industries.',
  ogDescription:
    'Reach out to CDC to discuss business transformation opportunities. Our team helps you create value, deliver results, and capture growth across industries.',
  twitterDescription:
    'Reach out to CDC to discuss business transformation opportunities. Our team helps you create value, deliver results, and capture growth across industries.'
})
</script>
