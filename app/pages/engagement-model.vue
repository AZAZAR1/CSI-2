<template>
  <main class="overflow-hidden bg-[#050606] text-primary-50">
    <!-- HERO -->
    <section class="relative pt-[90px] pb-20 md:pt-28 md:pb-28">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[120px]"></div>
        <div class="absolute right-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-green-400/10 blur-[120px]"></div>
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-6">
        <div class="max-w-5xl">
          <p class="mb-6 inline-flex rounded-full border border-primary-500/30 bg-primary-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
            {{ t('engagement.hero.badge') }}
          </p>

          <h1 class="max-w-6xl text-[3.2rem] font-medium leading-[1.03] tracking-[-0.06em] text-primary-50 md:text-[5.8rem]">
            {{ t('engagement.hero.title') }}
          </h1>

          <p class="mt-8 max-w-3xl text-lg leading-[1.8] text-neutral-300 md:text-xl">
            {{ t('engagement.hero.description') }}
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              :to="localePath('/contact-us')"
              class="inline-flex h-14 items-center justify-center rounded-xl bg-primary-500 px-8 text-base font-semibold text-primary-950 transition hover:bg-primary-200 md:h-16 md:text-lg"
            >
              {{ t('engagement.hero.primaryCta') }}
            </NuxtLink>

            <a
              href="#engagement-model"
              class="inline-flex h-14 items-center justify-center rounded-xl border border-white/15 px-8 text-base font-semibold text-primary-50 transition hover:border-primary-500 hover:bg-primary-500/10 md:h-16 md:text-lg"
            >
              {{ t('engagement.hero.secondaryCta') }}
            </a>
          </div>
        </div>

        <div class="mt-16 grid gap-4 md:grid-cols-4">
          <div
            v-for="metric in heroMetrics"
            :key="metric.value"
            class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <p class="text-3xl font-semibold tracking-[-0.04em] text-primary-300">
              {{ metric.value }}
            </p>
            <p class="mt-2 text-sm leading-6 text-neutral-400">
              {{ metric.label }}
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- PROBLEM -->
    <section class="border-y border-white/10 bg-white/[0.02] py-20">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
              {{ t('engagement.problem.label') }}
            </p>
            <h2 class="text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
              {{ t('engagement.problem.title') }}
            </h2>
          </div>

          <p class="text-lg leading-[1.8] text-neutral-300">
            {{ t('engagement.problem.description') }}
          </p>
        </div>

        <div class="mt-14 grid gap-5 md:grid-cols-3">
          <div
            v-for="item in problemCards"
            :key="item.title"
            class="rounded-3xl border border-white/10 bg-[#0d0f0f] p-8"
          >
            <p class="mb-5 text-5xl font-medium text-primary-400">
              {{ item.number }}
            </p>
            <h3 class="text-2xl font-semibold tracking-[-0.03em]">
              {{ item.title }}
            </h3>
            <p class="mt-4 leading-7 text-neutral-400">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ENGAGEMENT MODEL -->
    <section id="engagement-model" class="py-24">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-4xl text-center">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
            {{ t('engagement.model.label') }}
          </p>
          <h2 class="text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
            {{ t('engagement.model.title') }}
          </h2>
        </div>

        <div class="relative mt-16 grid gap-6 md:grid-cols-3">
          <div
            v-for="phase in phases"
            :key="phase.title"
            class="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-primary-500/50 hover:bg-primary-500/[0.06]"
          >
            <div class="mb-8 flex items-center justify-between">
              <span class="rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-300">
                {{ phase.duration }}
              </span>
              <span class="text-sm font-semibold text-neutral-500">
                {{ phase.step }}
              </span>
            </div>

            <h3 class="text-3xl font-semibold tracking-[-0.04em]">
              {{ phase.title }}
            </h3>
            <p class="mt-4 min-h-[84px] leading-7 text-neutral-400">
              {{ phase.description }}
            </p>

            <div class="mt-8 border-t border-white/10 pt-6">
              <p class="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-300">
                {{ t('engagement.model.outputsLabel') }}
              </p>
              <ul class="space-y-3">
                <li
                  v-for="output in phase.outputs"
                  :key="output"
                  class="flex gap-3 text-sm leading-6 text-neutral-300"
                >
                  <span class="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-primary-400"></span>
                  {{ output }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DIAGNOSTIC OFFER -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-6">
        <div class="overflow-hidden rounded-[2rem] border border-primary-500/20 bg-primary-500/[0.06]">
          <div class="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div class="border-b border-primary-500/20 p-8 md:border-b-0 md:border-r md:p-12">
              <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
                {{ t('engagement.diagnostic.label') }}
              </p>
              <h2 class="text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
                {{ t('engagement.diagnostic.title') }}
              </h2>
              <p class="mt-6 leading-8 text-neutral-300">
                {{ t('engagement.diagnostic.description') }}
              </p>

              <NuxtLink
                :to="localePath('/contact-us')"
                class="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-primary-500 px-8 text-base font-semibold text-primary-950 transition hover:bg-primary-200"
              >
                {{ t('engagement.diagnostic.cta') }}
              </NuxtLink>
            </div>

            <div class="grid gap-0 md:grid-cols-2">
              <div
                v-for="item in diagnosticOutputs"
                :key="item.title"
                class="border-b border-white/10 p-8 md:border-r md:odd:border-r"
              >
                <h3 class="text-xl font-semibold tracking-[-0.03em]">
                  {{ item.title }}
                </h3>
                <p class="mt-3 leading-7 text-neutral-400">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESULTS -->
    <section class="border-y border-white/10 bg-white/[0.02] py-24">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
              {{ t('engagement.results.label') }}
            </p>
            <h2 class="text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
              {{ t('engagement.results.title') }}
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="outcome in outcomes"
              :key="outcome.title"
              class="rounded-3xl border border-white/10 bg-[#0d0f0f] p-7"
            >
              <p class="text-3xl font-semibold text-primary-300">
                {{ outcome.metric }}
              </p>
              <h3 class="mt-4 text-xl font-semibold">
                {{ outcome.title }}
              </h3>
              <p class="mt-3 leading-7 text-neutral-400">
                {{ outcome.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CDC -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-4xl text-center">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
            {{ t('engagement.whyCdc.label') }}
          </p>
          <h2 class="text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
            {{ t('engagement.whyCdc.title') }}
          </h2>
          <p class="mt-6 text-lg leading-8 text-neutral-300">
            {{ t('engagement.whyCdc.description') }}
          </p>
        </div>

        <div class="mt-14 overflow-hidden rounded-3xl border border-white/10">
          <div
            v-for="row in comparison"
            :key="row.traditional"
            class="grid border-b border-white/10 last:border-b-0 md:grid-cols-2"
          >
            <div class="bg-white/[0.02] p-6 text-neutral-400">
              {{ row.traditional }}
            </div>
            <div class="bg-primary-500/[0.06] p-6 font-semibold text-primary-100">
              {{ row.cdc }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="px-6 pb-24">
      <div class="mx-auto max-w-7xl rounded-[2rem] border border-primary-500/20 bg-primary-500 p-10 text-center text-primary-950 md:p-16">
        <h2 class="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
          {{ t('engagement.finalCta.title') }}
        </h2>
        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-primary-950/80">
          {{ t('engagement.finalCta.description') }}
        </p>

        <NuxtLink
          :to="localePath('/contact-us')"
          class="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-[#050606] px-8 text-base font-semibold text-primary-50 transition hover:bg-black md:h-16 md:text-lg"
        >
          {{ t('engagement.finalCta.cta') }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
type HeroMetric = {
  value: string
  label: string
}

type ProblemCard = {
  number: string
  title: string
  text: string
}

type Phase = {
  step: string
  title: string
  duration: string
  description: string
  outputs: string[]
}

type DiagnosticOutput = {
  title: string
  text: string
}

type Outcome = {
  metric: string
  title: string
  text: string
}

type ComparisonRow = {
  traditional: string
  cdc: string
}

const { t } = useI18n()
const localePath = useLocalePath()

const heroMetrics = computed<HeroMetric[]>(() => [
  {
    value: t('engagement.hero.metrics.0.value'),
    label: t('engagement.hero.metrics.0.label')
  },
  {
    value: t('engagement.hero.metrics.1.value'),
    label: t('engagement.hero.metrics.1.label')
  },
  {
    value: t('engagement.hero.metrics.2.value'),
    label: t('engagement.hero.metrics.2.label')
  },
  {
    value: t('engagement.hero.metrics.3.value'),
    label: t('engagement.hero.metrics.3.label')
  }
])

const problemCards = computed<ProblemCard[]>(() =>
  [0, 1, 2].map((index) => ({
    number: t(`engagement.problem.cards.${index}.number`),
    title: t(`engagement.problem.cards.${index}.title`),
    text: t(`engagement.problem.cards.${index}.text`)
  }))
)

const phases = computed<Phase[]>(() =>
  [0, 1, 2].map((index) => ({
    step: t(`engagement.model.phases.${index}.step`),
    title: t(`engagement.model.phases.${index}.title`),
    duration: t(`engagement.model.phases.${index}.duration`),
    description: t(`engagement.model.phases.${index}.description`),
    outputs: [0, 1, 2, 3].map((outputIndex) =>
      t(`engagement.model.phases.${index}.outputs.${outputIndex}`)
    )
  }))
)

const diagnosticOutputs = computed<DiagnosticOutput[]>(() =>
  [0, 1, 2, 3].map((index) => ({
    title: t(`engagement.diagnostic.outputs.${index}.title`),
    text: t(`engagement.diagnostic.outputs.${index}.text`)
  }))
)

const outcomes = computed<Outcome[]>(() =>
  [0, 1, 2, 3].map((index) => ({
    metric: t(`engagement.results.outcomes.${index}.metric`),
    title: t(`engagement.results.outcomes.${index}.title`),
    text: t(`engagement.results.outcomes.${index}.text`)
  }))
)

const comparison = computed<ComparisonRow[]>(() =>
  [0, 1, 2, 3].map((index) => ({
    traditional: t(`engagement.whyCdc.comparison.${index}.traditional`),
    cdc: t(`engagement.whyCdc.comparison.${index}.cdc`)
  }))
)

useSeoMeta({
  title: t('engagement.seoTitle'),
  ogTitle: t('engagement.seoTitle'),
  twitterTitle: t('engagement.seoTitle'),
  description: t('engagement.seoDescription'),
  ogDescription: t('engagement.seoDescription'),
  twitterDescription: t('engagement.seoDescription')
})
</script>
