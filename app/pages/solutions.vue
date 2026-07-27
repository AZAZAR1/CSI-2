<template>
  <section class="px-6 pt-24 pb-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="flex flex-wrap gap-3">
      <a
        v-for="(section, index) in sections"
        :key="section.title"
        :href="`#solution-section-${index + 1}`"
        class="rounded-full border border-neutral-800 px-5 py-2 text-sm font-semibold text-primary-50 transition hover:border-primary-500 hover:bg-primary-500 hover:text-primary-950"
      >
        {{ section.title }}
      </a>
    </div>
  </section>

  <section
    v-for="(section, sectionIndex) in sections"
    :id="`solution-section-${sectionIndex + 1}`"
    :key="section.title"
    class="scroll-mt-28 px-6 py-12 sm:py-20 w-full mx-auto max-w-5xl md:max-w-7xl"
  >
    <div class="mb-10 max-w-4xl">
      <p class="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary-400">
        {{ section.eyebrow }}
      </p>

      <h2 class="text-4xl font-medium tracking-tight text-primary-50 sm:text-5xl">
        {{ section.title }}
      </h2>

      <p class="mt-5 text-base leading-7 text-neutral-400 sm:text-lg">
        {{ section.description }}
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="card in section.cards"
        :id="card.anchor"
        :key="card.anchor"
        class="group rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 transition hover:border-primary-500/60"
      >
        <div class="flex h-full flex-col">
          <div class="mb-10 flex h-20 items-center justify-center rounded-xl border border-neutral-800 bg-background/40 text-primary-400">
            <span class="text-3xl font-semibold">
              {{ card.number }}
            </span>
          </div>

          <h3 class="text-xl font-semibold leading-7 text-primary-50">
            {{ card.title }}
          </h3>

          <p class="mt-4 text-sm leading-6 text-neutral-400">
            {{ card.shortDescription }}
          </p>

          <button
            type="button"
            class="mt-6 inline-flex w-fit items-center rounded-full border border-primary-500 px-4 py-2 text-sm font-semibold text-primary-50 transition hover:bg-primary-500 hover:text-primary-950"
            :aria-expanded="expandedCard === card.anchor"
            @click="toggleCard(card.anchor)"
          >
            {{ expandedCard === card.anchor ? t('solutionsPage.viewLess') : t('solutionsPage.viewMore') }}
          </button>

          <div
            v-if="expandedCard === card.anchor"
            class="mt-6 border-t border-neutral-800 pt-5"
          >
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">
              {{ t('solutionsPage.detailedOffering') }}
            </p>

            <ul class="space-y-3">
              <li
                v-for="detail in card.details"
                :key="detail"
                class="flex gap-3 text-sm leading-6 text-neutral-300"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"></span>
                <span>{{ detail }}</span>
              </li>
            </ul>

            <a
              class="mt-6 inline-flex text-sm font-semibold text-primary-400 transition hover:text-primary-200"
              :href="`#${card.anchor}`"
            >
              {{ card.cta }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <GetStarted />
</template>

<script setup lang="ts">
import { solutionsContent as enSolutions } from '../../content/solutions/en'
import { solutionsContent as frSolutions } from '../../content/solutions/fr'
import { solutionsContent as deSolutions } from '../../content/solutions/de'

const { t, locale } = useI18n()

const expandedCard = ref<string | null>(null)

const contentByLocale = {
  en: enSolutions,
  fr: frSolutions,
  de: deSolutions
}

const sections = computed(() => {
  return contentByLocale[locale.value as keyof typeof contentByLocale] || enSolutions
})

const toggleCard = (anchor: string) => {
  expandedCard.value = expandedCard.value === anchor ? null : anchor
}

useSeoMeta({
  title: t('solutionsPage.seoTitle'),
  ogTitle: t('solutionsPage.seoTitle'),
  twitterTitle: t('solutionsPage.seoTitle'),
  description: t('solutionsPage.seoDescription'),
  ogDescription: t('solutionsPage.seoDescription'),
  twitterDescription: t('solutionsPage.seoDescription')
})
</script>
