<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
      <SharedSectionHeader
        :title="t('about.team.title')"
        :subtitle="t('about.team.subtitle')"
        size="large"
        titleMarginBottom="small"
        subtitleMarginBottom="large"
        titleAlign="center"
        subtitleAlign="center"
      />

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div
          v-for="(member, index) in team"
          :key="member.name"
          class="bg-neutral-900 rounded-[14px] grid grid-rows-[auto_minmax(auto,_1fr)] overflow-hidden p-[2px] backdrop-blur h-full"
        >
          <div class="aspect-square rounded-t-[12px] rounded-b-[9px] overflow-hidden relative">
            <UiSkeleton
              v-if="!loaded[index]"
              class="absolute inset-0 z-[1] rounded-[12px] bg-neutral-700/20"
            />

            <NuxtPicture
              :ref="(el) => onPictureRef(el, index)"
              :src="member.image"
              format="avif,webp,jpeg"
              :quality="70"
              sizes="xs:100vw sm:50vw md:33vw lg:25vw xl:20vw"
              placeholder="blur"
              :img-attrs="{
                alt: member.name,
                class: `grayscale contrast-110 brightness-90 w-full h-full object-top object-cover transition-opacity duration-500 ${
                  loaded[index] ? 'opacity-100' : 'opacity-0'
                }`,
                loading: 'lazy',
                decoding: 'async'
              }"
            />
          </div>

          <a
            :href="member.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full flex-col gap-1 px-4 py-6 text-primary-50"
          >
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-semibold leading-7">
                {{ member.name }}
              </h4>

              <ArrowUpRight class="!w4 !h-4 group-hover:translate-x-1 transition-transform" />
            </div>

            <p class="text-sm font-semibold leading-6">
              {{ member.title }}
            </p>

            <p class="text-xs font-normal leading-6 text-neutral-400">
              {{ member.background }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

const team = computed(() => {
  const members = tm('about.team.members') as Array<{
    name: string
    title: string
    background: string
    image: string
    linkedin: string
  }>

  return members.map(member => ({
    name: rt(member.name),
    title: rt(member.title),
    background: rt(member.background),
    image: rt(member.image),
    linkedin: rt(member.linkedin)
  }))
})

const loaded = ref<Record<number, boolean>>({})

const onPictureRef = async (comp: any, index: number) => {
  await nextTick()

  const rootEl = comp?.$el ?? comp
  const img: HTMLImageElement | null = rootEl?.querySelector('img')

  if (!img) return

  if (img.complete && img.naturalWidth > 0) {
    loaded.value[index] = true
    return
  }

  const onLoad = () => (loaded.value[index] = true)
  const onError = () => (loaded.value[index] = true)

  img.addEventListener('load', onLoad, { once: true })
  img.addEventListener('error', onError, { once: true })
}
</script>
