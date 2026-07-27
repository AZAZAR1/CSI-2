<template>
  <div :class="gridClasses">
    <div v-for="(item, index) in items" :key="index" :class="cardClasses">
      <div v-if="showIcon && item.icon" :class="iconWrapperClasses">
        <component :is="item.icon" :class="iconClasses" />
      </div>

      <h3 :class="[titleClasses, titleClass]">
        {{ item.title }}
      </h3>

      <p v-if="item.description" :class="[descriptionClasses, descriptionMarginClass, descriptionClass]">
        {{ item.description }}
      </p>

      <slot name="card-content" :item="item" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface CardItem {
  title: string
  description?: string
  icon?: any
  [key: string]: any
}

interface Props {
  items: CardItem[]
  columns?: 1 | 2 | 3 | 4
  showIcon?: boolean
  variant?: 'default' | 'compact' | 'detailed'
  descriptionMargin?: 'none' | 'default'
  titleClass?: string
  descriptionClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 2,
  showIcon: true,
  variant: 'default',
  descriptionMargin: 'none',
  titleClass: '',
  descriptionClass: ''
})

const gridClasses = computed(() => {
  const baseClasses = 'grid w-full gap-8 overflow-hidden'
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  return `${baseClasses} ${columnClasses[props.columns]}`
})

const cardClasses = computed(() => {
  return props.variant === 'compact'
    ? 'flex flex-col gap-3 md:gap-2'
    : 'p-8 rounded-2xl border flex flex-col'
})

const iconWrapperClasses = computed(() => {
  if (props.variant === 'compact') {
    return 'flex flex-row gap-3 md:flex-col md:gap-6'
  }
  return 'relative mb-6 mt-1.5 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border text-lg md:mt-0 bg-radial bg-radial-[circle_at_100%_0%] from-primary-500/15 to-transparent to-[66.84%]'
})

const iconClasses = computed(() => {
  if (props.variant === 'compact') {
    return 'stroke-primary-500 w-8 h-8 stroke-[2]'
  }
  return 'w-5 stroke-[1.5px]'
})

const titleClasses = computed(() => {
  if (props.variant === 'compact') {
    return 'text-primary-50 text-xl leading-[32px] md:leading-none'
  }
  return 'text-primary-50 mb-4 text-xl'
})

const descriptionClasses = computed(() => {
  if (props.variant === 'compact') {
    return 'text-neutral-400 text-sm leading-[1.6] font-normal'
  }
  return 'text-neutral-400 text-md font-normal'
})

const descriptionMarginClass = computed(() => {
  return props.descriptionMargin === 'none' ? '' : 'mb-4'
})
</script>
