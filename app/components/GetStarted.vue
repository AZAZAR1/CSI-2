<template>
  <section class="px-6 my-24 sm:my-40 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="px-8 py-20 rounded-3xl border flex flex-col items-center">
      <SharedSectionHeader
        :title="t('home.getStarted.title')"
        :subtitle="t('home.getStarted.subtitle')"
        size="large"
        titleMarginBottom="small"
        subtitleMarginBottom="none"
        titleAlign="center"
        subtitleAlign="center"
      />

      <div class="my-8 mb-0 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          class="inline-flex items-center justify-center select-none rounded-xl disabled:cursor-not-allowed ease-in-out text-primary-900 bg-origin-border bg-primary-500 shadow-sm not-disabled:hover:bg-primary-200 not-disabled:hover:text-black not-disabled:hover:shadow-button transition-all duration-200 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-hidden focus-visible:bg-primary-200 focus-visible:text-primary-900 text-base h-12 gap-0 px-5 font-semibold"
          href="/contact-us"
        >
          {{ t('home.getStarted.cta') }}

          <span class="-mr-2">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
