<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div class="flex flex-col gap-6">
          <SharedSectionHeader
            :title="t('home.leadership.title')"
            size="large"
            margin-bottom="none"
          />

          <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
            {{ t('home.leadership.description') }}
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="item in expertise"
            :key="item.title"
            class="rounded-[14px] border bg-card p-6"
          >
            <p class="text-sm font-medium text-primary">
              {{ item.label }}
            </p>

            <h3 class="mt-3 text-xl font-semibold text-foreground">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-muted-foreground">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const expertise = computed(() => {
  const cards = tm('home.leadership.cards') as Array<{
    label: string
    title: string
    description: string
  }>

  return cards.map(card => ({
    label: rt(card.label),
    title: rt(card.title),
    description: rt(card.description)
  }))
})
</script>
