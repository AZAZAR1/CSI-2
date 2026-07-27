<template>
  <Head>
    <Link
      rel="preload"
      as="image"
      href="/team/HeroHome.webp"
      fetchpriority="high"
    />
  </Head>

  <section class="relative overflow-hidden bg-[#061E20] pt-[60px] @header:pt-0">
    <div class="relative min-h-[520px] overflow-hidden md:min-h-[560px] lg:min-h-[600px]">
      <picture>
        <source srcset="/team/HeroHome.webp" type="image/webp" />
        <img
          src="/team/HeroHome.webp"
          alt=""
          width="1920"
          height="900"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          class="absolute inset-0 z-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        />
      </picture>

      <div
        class="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(236,234,229,0.92)_0%,rgba(236,234,229,0.78)_24%,rgba(236,234,229,0.34)_47%,rgba(236,234,229,0.05)_72%,rgba(236,234,229,0)_100%)]"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-32 lg:pt-36">
        <div class="max-w-[760px]">
          <h1
            class="whitespace-pre-line text-[#082427] font-normal text-[3.5rem] leading-[108%] tracking-[-0.045em] md:text-6xl lg:text-[5rem]"
          >
            {{ t('home.heroTitle') }}
          </h1>

          <div class="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <div class="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="currentColor"
                class="shrink-0 text-primary-500"
                aria-hidden="true"
              >
                <path
                  d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"
                />
              </svg>

              <h4 class="text-base font-semibold text-[#082427] md:text-lg">
                {{ t('home.location') }}
              </h4>
            </div>

            <div class="hidden h-7 w-px bg-[#082427]/25 md:block"></div>

            <a
              href="https://www.d3minds.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-fit items-center rounded-full border border-[#082427]/15 bg-[#F8F6F2]/78 px-5 py-2.5 text-sm font-medium text-[#082427] shadow-sm transition hover:border-primary-500/60 hover:bg-[#F8F6F2]/90 md:text-base"
            >
              {{ t('home.poweredBy') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="relative bg-[#061E20] py-16 md:py-20">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(88,214,200,0.14),transparent_32%)]"
        aria-hidden="true"
      ></div>

      <div class="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
        <div>
          <p class="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-primary-500">
            {{ t('home.trustEyebrow') }}
          </p>

          <h2 class="max-w-2xl text-4xl font-normal leading-tight tracking-[-0.03em] text-[#F4FAF8] md:text-5xl">
            {{ t('home.trustTitle') }}
          </h2>

          <p class="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            {{ t('home.trustBody') }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="item in trustSignals"
            :key="item.value"
            class="rounded-[28px] border border-primary-500/20 bg-white/[0.025] p-7"
          >
            <div class="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 text-primary-500">
              {{ item.icon }}
            </div>

            <h3 class="text-4xl font-semibold tracking-[-0.04em] text-[#F4FAF8]">
              {{ t(item.value) }}
            </h3>

            <p class="mt-3 text-lg font-semibold text-[#F4FAF8]">
              {{ t(item.title) }}
            </p>

            <p class="mt-4 text-base leading-7 text-white/60">
              {{ t(item.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const trustSignals = [
  {
    icon: 'ↆ',
    value: 'home.trustSignals.experience.value',
    title: 'home.trustSignals.experience.title',
    description: 'home.trustSignals.experience.description'
  },
  {
    icon: '◎',
    value: 'home.trustSignals.global.value',
    title: 'home.trustSignals.global.title',
    description: 'home.trustSignals.global.description'
  },
  {
    icon: '♙',
    value: 'home.trustSignals.results.value',
    title: 'home.trustSignals.results.title',
    description: 'home.trustSignals.results.description'
  }
]
</script>
