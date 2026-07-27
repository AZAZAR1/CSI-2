<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
      <SharedSectionHeader
        :title="t('home.approach.title')"
        :subtitle="t('home.approach.subtitle')"
        size="large"
        titleMarginBottom="small"
        subtitleMarginBottom="large"
        titleAlign="center"
        subtitleAlign="center"
      />

      <SharedCardGrid
        :items="approaches"
        :columns="3"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Clock, Users, CircleCheckBig } from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

const icons = [Clock, Users, CircleCheckBig]

const approaches = computed(() => {
  const items = tm('home.approach.items') as Array<{
    title: string
    description: string
  }>

  return items.map((item, index) => ({
    title: rt(item.title),
    description: rt(item.description),
    icon: icons[index]
  }))
})
</script>
