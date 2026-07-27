<template class="@container">
  <section class="relative pt-[60px] @header:pt-0 overflow-hidden">
    <div class="pointer-events-none absolute inset-0 z-0 md:before:absolute md:before:-left-[120px] md:before:-top-[520px] md:before:h-[1000px] md:before:w-[220px] md:before:-rotate-45 md:before:bg-gradient-to-b md:before:from-foreground/20 md:before:to-transparent md:before:blur-2xl
             md:after:absolute md:after:-right-[120px] md:after:-top-[520px] md:after:h-[1000px] md:after:w-[220px] md:after:rotate-45 md:after:bg-gradient-to-b md:after:from-foreground/20 md:after:to-transparent md:after:blur-2xl
             motion-reduce:before:hidden motion-reduce:after:hidden">
    </div>

    <div class="absolute inset-0 pointer-events-none overflow-hidden md:hidden z-0">
      <div class="flex relative">
        <div
          class="absolute pointer-events-none -top-[500px] bg-gradient-to-b blur-2xl from-foreground/20 h-[1000px] to-transparent w-[200px] -left-[100px] -rotate-45">
        </div>
      </div>
    </div>

    <div :class="['relative z-10 md:pb-32 md:pt-16 py-20 flex flex-col justify-center', description ? 'min-h-[480px]' : '']">
      <div class="mx-auto max-w-5xl px-6 md:max-w-7xl">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-[3rem] md:text-[4rem] tracking-tighter leading-[120%] text-primary-50 font-medium">
            {{ title }}
          </h1>

          <p v-if="description"
            class="mt-6 mb-8 md:text-[1.125rem] leading-[1.65] text-neutral-400 font-normal md:w-8/12 text-lg max-w-[800px] mx-auto">
            {{ description }}
          </p>

          <div v-if="showCta" class="flex flex-col justify-center gap-4 md:flex-row">
            <a class="inline-flex items-center justify-center select-none rounded-xl disabled:cursor-not-allowed ease-in-out text-primary-900 bg-origin-border bg-primary-500 shadow-sm not-disabled:hover:bg-primary-200 not-disabled:hover:text-black not-disabled:hover:shadow-button transition-all duration-200 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-hidden focus-visible:bg-primary-200 focus-visible:text-primary-900 text-base h-12 gap-0 px-5 font-semibold"
              :href="ctaLink">
              {{ ctaText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  showCta?: boolean
  ctaText?: string
  ctaLink?: string
}

withDefaults(defineProps<Props>(), {
  showCta: false,
  ctaText: 'Start your journey',
  ctaLink: '/contact-us'
})
</script>
