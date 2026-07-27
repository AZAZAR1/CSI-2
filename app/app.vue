<template>
  <div>
    <Header />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Footer />
    <UiToaster />
  </div>
</template>

<script setup lang="ts">
import 'vue-sonner/style.css'

useHead({
  script: [
    {
      innerHTML: `
        window._linkedin_partner_id = "10039409";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

        window.lintrk = window.lintrk || function(a,b){
          (window.lintrk.q = window.lintrk.q || []).push([a,b])
        };
      `
    } as any,
    {
      src: 'https://snap.licdn.com/li.lms-analytics/insight.min.js',
      async: true,
      tagPriority: 'low'
    } as any
  ],
  noscript: [
    {
      innerHTML: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=10039409&fmt=gif" />`
    } as any
  ]
})
</script>
