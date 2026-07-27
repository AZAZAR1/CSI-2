<template>
  <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full py-12 sm:py-24 flex flex-col items-center">
      <div class="flex flex-col gap-6 lg:flex-row md:gap-8 lg:gap-24">
        <h1
          class="text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] mb-2 text-primary-50 lg:w-7/12"
        >
          {{ $t('about.story.title') }}
        </h1>

        <ul
          class="text-base md:text-[1.125rem] md:leading-[1.5] text-neutral-400 font-normal lg:w-8/12 space-y-4"
        >
          <li>{{ $t('about.story.paragraph1') }}</li>
          <li>{{ $t('about.story.paragraph2') }}</li>
          <li>{{ $t('about.story.paragraph3') }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
