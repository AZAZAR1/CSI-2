<template>
  <section class="mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full py-12 sm:py-24 flex flex-col items-center">
      <div class="px-6">
        <SharedSectionHeader
          :title="t('home.resources.title')"
          size="large"
        />
      </div>

      <ResourceList />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
