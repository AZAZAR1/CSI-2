<template>
  <div class="flex flex-col items-center">
    <h2
      :class="[
        'tracking-tighter leading-[120%] text-primary-50',
        sizeClasses,
        titleAlignClass,
        titleMarginClass,
        props.titleClass
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      :class="[
        'font-normal md:max-w-5xl text-neutral-400 text-balance',
        subtitleSizeClasses,
        subtitleAlignClass,
        subtitleMarginClass,
        props.subtitleClass
      ]"
    >
    {{ subtitle }}
    </p>
  </div>
</template>



<script setup lang="ts">
type MarginOption = 'none' | 'small' | 'default' | 'large' | string

interface Props {
  title: string
  subtitle?: string
  size?: 'default' | 'large'
  titleAlign?: 'left' | 'center' | 'right'
  subtitleAlign?: 'left' | 'center' | 'right'
  marginBottom?: MarginOption
  titleMarginBottom?: MarginOption
  subtitleMarginBottom?: MarginOption
  titleClass?: string
  subtitleClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  titleAlign: 'left',
  subtitleAlign: 'left',
  marginBottom: 'default',
  titleClass: '',
  subtitleClass: ''
})

const sizeClasses = computed(() => {
  return props.size === 'large'
    ? 'text-[3rem] md:text-[3.5rem]'
    : 'text-[2.5rem] md:text-[3rem]'
})

const subtitleSizeClasses = computed(() => {
  return 'text-base md:text-lg md:leading-[1.5]'
})

const titleAlignClass = computed(() => ({
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}[props.titleAlign]))

const subtitleAlignClass = computed(() => ({
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}[props.subtitleAlign]))

const resolveMargin = (value?: MarginOption): string => {
  if (!value) return 'mb-12'
  const map: Record<string, string> = {
    none: '',
    small: 'mb-5',
    default: 'mb-12',
    large: 'mb-16'
  }
  return map[value] ?? value
}

const titleMarginClass = computed(() => {
  return resolveMargin(props.titleMarginBottom ?? props.marginBottom)
})

const subtitleMarginClass = computed(() => {
  return resolveMargin(props.subtitleMarginBottom ?? props.marginBottom)
})
</script>
