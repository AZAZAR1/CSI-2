<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">
            {{ t('home.impact.eyebrow') }}
          </p>

          <h2 class="mt-4 text-4xl font-medium leading-tight text-primary-50 sm:text-5xl">
            {{ t('home.impact.title') }}
          </h2>

          <p class="mt-5 text-base leading-7 text-neutral-400">
            {{ t('home.impact.description') }}
          </p>

          <a
            href="/contact-us"
            class="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-primary-500 px-5 text-base font-semibold text-primary-900 transition-all duration-200 hover:bg-primary-200 hover:text-black"
          >
            {{ t('home.impact.cta') }}
          </a>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <div
            v-for="item in impactCards"
            :key="item.metric"
            class="relative overflow-hidden rounded-2xl border p-6"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-80" />

            <div class="relative">
              <p class="text-4xl font-semibold tracking-tight text-primary-50">
                {{ item.metric }}
              </p>

              <h3 class="mt-5 text-xl font-semibold text-primary-50">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-sm leading-6 text-neutral-400">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const impactCards = computed(() => {
  const items = tm('home.impact.cards') as Array<{
    metric: string
    title: string
    description: string
  }>

  return items.map(item => ({
    metric: rt(item.metric),
    title: rt(item.title),
    description: rt(item.description)
  }))
})
</script>
