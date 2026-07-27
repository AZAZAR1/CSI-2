<template>
  <div :class="panelClasses">
    <h2 v-if="title" :class="titleClasses">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mb-12 text-base md:text-[1.125rem] md:leading-[1.5] text-neutral-400 font-normal text-center max-w-[800px] mx-auto"
    >
      {{ description }}
    </p>

    <dl :class="gridClasses">
      <div
        v-for="(item, index) in stats"
        :key="index"
        class="mx-auto flex max-w-xs flex-col gap-y-4"
      >
        <dt class="text-base/7 leading-6 font-normal text-neutral-400">
          {{ item.text }}
        </dt>
        <dd
          class="order-first whitespace-nowrap bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-transparent text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {{ item.stats }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Stat {
  stats: string
  text: string
}

interface Props {
  stats: Stat[]
  columns?: 3 | 4
  title?: string
  description?: string
  bgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  bgClass: 'bg-primary-500/[3%]'
})

const panelClasses = computed(() => {
  return [
    'w-full rounded-2xl border border-white/[3%] px-6 py-12 sm:px-8 sm:py-16 shadow-xl backdrop-blur',
    props.bgClass
  ].join(' ')
})

const gridClasses = computed(() => {
  const base = 'grid grid-cols-1 gap-x-4 gap-y-8 text-center'
  const columnClass = props.columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
  return `${base} ${columnClass}`
})

const titleClasses = computed(() => {
  return [
    'text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] text-center text-primary-50',
    props.description ? 'mb-6' : 'mb-12'
  ].join(' ')
})
</script>