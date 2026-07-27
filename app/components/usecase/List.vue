<template>
    <section class="px-6 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(study, index) in usecases" :key="index"
                class="relative overflow-hidden text-primary-50 min-h-120 md:min-h-[504px] h-full"
                :class="gradients[index % gradients.length]">
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="relative z-10 flex flex-col h-full justify-between">
                    <div class="flex h-12 m-8 items-center justify-start">
                        <div class="h-8">
                            <img v-if="study.logo" :src="`/${study.logo}`" alt="Logo" class="h-full object-contain" />
                        </div>
                    </div>

                    <div class="flex flex-col m-5 px-6 py-8 bg-[#0C0E12]/30">
                        <h3 class="text-xl font-semibold mb-3 leading-8">{{ study.title }}</h3>
                        <p class="text-sm font-medium leading-7 mb-6">{{ study.excerpt }}</p>

                        <a class="flex items-center gap-1 text-primary-50 cursor-pointer group" :href="`/contact-us`">
                            <span class="text-md leading-6 font-semibold">Learn More</span>
                            <ArrowUpRight class="!w-5 !h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const gradients = [
    'bg-[#7F56D9]',
    'bg-[#079455]',
    'bg-[#1570EF]',
]

const { data: usecases } = await useAsyncData('use-cases', () =>
    queryCollection('usecase').all()
)
</script>
