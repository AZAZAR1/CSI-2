<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24">
      <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <!-- LEFT SIDE -->
        <div class="relative">
          <img
            src="/team/founders.webp"
            :alt="t('home.clients.imageAlt')"
            class="w-full rounded-2xl object-cover border border-neutral-800"
          />
        </div>

        <!-- RIGHT SIDE -->
        <div>
          <SharedSectionHeader
            :title="t('home.clients.title')"
            size="large"
            align="left"
          />

          <div class="space-y-6 mt-8">
            <div
              v-for="client in clients"
              :key="client.name"
              class="relative group border border-neutral-800 rounded-xl overflow-hidden"
            >
              <div
                class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
              </div>

              <div class="relative p-6">
                <p class="text-sm md:text-base text-muted-foreground mb-6">
                  {{ t(client.testimony) }}
                </p>

                <div class="h-6" v-html="client.svg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import medtronic from '~/assets/medtronic.svg?raw'
import napcoNational from '~/assets/napco-national.svg?raw'
import spineart from '~/assets/spineart.svg?raw'

const { t } = useI18n()

const clients = [
  {
    name: 'Medtronic',
    testimony: 'home.clients.testimonials.medtronic',
    svg: medtronic
  },
  {
    name: 'Becton Dickinson',
    testimony: 'home.clients.testimonials.bectonDickinson',
    svg: napcoNational
  },
  {
    name: 'Unigraf',
    testimony: 'home.clients.testimonials.unigraf',
    svg: spineart
  }
]
</script>

<style scoped>
::v-deep(svg) {
  height: 100%;
  width: auto;
}
</style>
