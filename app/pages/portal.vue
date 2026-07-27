<script setup lang="ts">
useSeoMeta({
  title: 'Supply Chain Savings Calculator | CDC',
  description: 'Estimate the potential annual savings from CDC Supply Chain Managed Services.',
  ogTitle: 'CDC Supply Chain Savings Calculator',
  ogDescription: 'Calculate your indicative savings from automation and managed offshoring.',
})
</script>

<template>
  <main class="portal-page">
    <ScmSavingsCalculator />
  </main>
</template>

<style scoped>
.portal-page{min-height:100vh;background:radial-gradient(circle at 72% 8%,rgba(72,174,155,.13),transparent 31%),#0a0a0a}
</style>
