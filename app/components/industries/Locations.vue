<template>
    <section
        class="relative mx-auto sm:py-24 mt-12 flex w-full max-w-[calc(80rem-var(--spacing)*12)] flex-col items-center justify-center overflow-hidden rounded-3xl pt-24 md:mt-30 dark:border dark:border-slate-6">
        <div class="absolute top-[15rem] size-[40rem] rounded-full bg-[#5ddac9]/15 blur-3xl md:top-[16rem]"></div>
        <h2
            class="z-10 mt-6 inline-block bg-gradient-to-b from-white to-primary-500 bg-clip-text px-2 text-center text-5xl font-light tracking-tighter text-transparent md:text-8xl">
            Deliver Solutions <br />
            Around the Globe
        </h2>
        <img :src="worldMap" alt="dotted world map" loading="lazy" width="1200" height="1200" decoding="async"
            class="absolute top-4 z-20 aspect-square size-full max-w-fit md:top-[6.5rem]" />

        <div class="z-20 -mt-32 h-[36rem] w-full overflow-hidden md:-mt-36">
            <div
                class="absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-neutral-950/95 to-neutral-950">
            </div>

            <div class="absolute inset-x-6 bottom-12 m-auto max-w-4xl md:top-1.5/3">
                <div
                    class="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border border-white/[3%] bg-white/[1%] px-6 text-center py-6 shadow-xl backdrop-blur md:grid-cols-1 md:p-8">
                    <div v-for="(item, index) in stats" :key="index" class="flex flex-col items-center gap-2">
                        <h4
                            class="whitespace-nowrap bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                            {{ item.title }}
                        </h4>
                        <p class="text-sm leading-6 font-normal text-primary-200/40 md:max-w-[50%]">
                            {{ item.description }}
                        </p>
                        <div class="mx-auto flex flex-wrap justify-center gap-x-8 mt-4">
                            <div v-for="region in regions" :key="region">
                                <div class="mb-4 flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" class="text-primary-500">
                                        <path
                                            d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                                    </svg>
                                    <h4 class="text-lg font-semibold text-primary-50">{{ region }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import worldMap from '~/assets/world-map.svg';

const stats = [
    {
        title: '5 global operational regions',
        description:
            'Choose where your transformation happens. CDC offers 5 regional expertise centers worldwide, giving you the flexibility to leverage local market knowledge while implementing global best practices for your enterprise.'
    }
];

const regions = [
    "GCC",
    "Europe",
    "Turkey",
    "United States",
    "India"
];
</script>
