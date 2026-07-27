<template>
  <IndustriesSectors />
  <IndustriesMetrics />
  <GetStarted />
</template>

<script setup lang="ts">
const { t } = useI18n()
  
useSeoMeta({
  title: t('industries.seoTitle'),
  ogTitle: t('industries.seoTitle'),
  twitterTitle: t('industries.seoTitle'),
  description: t('industries.seoDescription'),
  ogDescription: t('industries.seoDescription'),
  twitterDescription: t('industries.seoDescription')
})
</script>
