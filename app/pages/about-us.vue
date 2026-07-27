<template class="@container">
  <div class="pt-[60px] @header:pt-0">
    <AboutUsOurStory />
    <AboutUsRoi />
    <AboutUsLocations />
    <AboutUsUsecase />
    <AboutUsTeam />
    <GetStarted />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('about.seoTitle'),
  ogTitle: t('about.seoTitle'),
  twitterTitle: t('about.seoTitle'),
  description: t('about.seoDescription'),
  ogDescription: t('about.seoDescription'),
  twitterDescription: t('about.seoDescription')
})
</script>
