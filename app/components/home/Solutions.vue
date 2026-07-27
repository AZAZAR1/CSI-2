<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
      <SharedSectionHeader
        :title="t('home.solutions.title')"
        size="large"
      />

      <SharedCardGrid
        :items="solutions"
        :columns="2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Boxes, Workflow, Layers, Cpu } from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

const icons = [Boxes, Workflow, Layers, Cpu]

const solutions = computed(() => {
  const items = tm('home.solutions.items') as Array<{
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
