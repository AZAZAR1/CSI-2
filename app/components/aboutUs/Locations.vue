<template>
  <section class="px-6 my-20 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div
      class="relative py-12 sm:py-20 md:py-24 flex flex-col items-center justify-center overflow-hidden rounded-3xl border"
    >
      <div
        class="absolute top-[18rem] size-[40rem] rounded-full bg-primary-500/15 blur-3xl md:top-[16rem]"
      ></div>

      <h2
        class="z-10 inline-block bg-gradient-to-b from-white to-primary-500 bg-clip-text px-4 text-center text-6xl sm:text-7xl font-light tracking-tighter text-transparent md:text-8xl"
      >
        {{ t('about.locations.titleLine1') }}
        <br />
        {{ t('about.locations.titleLine2') }}
      </h2>

      <img
        :src="worldMap"
        alt="dotted world map"
        loading="lazy"
        width="1200"
        height="1200"
        decoding="async"
        class="absolute z-20 aspect-square size-full max-w-fit top-[-6rem] sm:top-[-3rem] md:top-[6rem]"
      />

      <div class="z-20 -mt-32 h-[48rem] md:h-[34rem] w-full md:-mt-36">
        <div
          class="absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-neutral-950/95 to-neutral-950"
        ></div>

        <div class="absolute inset-x-6 bottom-12 m-auto max-w-4xl md:top-1.5/3">
          <div
            class="grid grid-cols-1 gap-x-10 gap-y-4 sm:gap-y-6 rounded-lg border border-white/[3%] bg-white/[1%] px-6 py-6 shadow-xl backdrop-blur md:grid-cols-2 md:p-8"
          >
            <div
              v-for="(item, index) in stats"
              :key="index"
              class="flex flex-col gap-2"
            >
              <h4
                class="whitespace-nowrap bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-base sm:text-lg font-semibold text-transparent md:text-xl"
              >
                {{ item.title }}
              </h4>

              <p class="text-sm leading-6 font-normal text-primary-200/40">
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
import worldMap from '~/assets/world-map.svg'

const { t, tm, rt } = useI18n()

const stats = computed(() => {
  const items = tm('about.locations.cards') as Array<{
    title: string
    description: string
  }>

  return items.map(item => ({
    title: rt(item.title),
    description: rt(item.description)
  }))
})
</script>
