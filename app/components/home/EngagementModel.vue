<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
      <SharedSectionHeader
        :title="t('home.engagementModel.title')"
        :subtitle="t('home.engagementModel.subtitle')"
        size="large"
        titleMarginBottom="small"
        subtitleMarginBottom="large"
        titleAlign="center"
        subtitleAlign="center"
      />

      <div class="w-full md:w-[90%] mx-auto">
        <div
          v-html="engagementModelHorizontal"
          class="hidden md:block [&>svg]:w-full [&>svg]:h-auto"
        ></div>

        <div
          v-html="engagementModelVertical"
          class="block md:hidden [&>svg]:w-full [&>svg]:h-auto"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import engagementModelHorizontal from '~/assets/engagement-model-horizontal.svg?raw'
import engagementModelVertical from '~/assets/engagement-model-vertical.svg?raw'

const { t } = useI18n()
</script>
