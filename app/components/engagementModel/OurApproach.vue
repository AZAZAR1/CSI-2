<template>
    <section class="mx-auto mt-24 px-6 pt-12 sm:pt-24 flex flex-col items-center">
        <h2 class="text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-5 text-center text-primary-50">
            Why Choose Our Approach
        </h2>
        <p class="text-base md:text-[1.125rem] md:leading-[1.5] font-normal max-w-lg text-center text-neutral-400 mb-12">
            <span class="inline-block align-top text-balance">
                Proven advantages of our systematic methodology
            </span>
        </p>
        <div class="grid w-full grid-cols-1 gap-8 overflow-hidden md:grid-cols-3">
            <div v-for="(approach, index) in approaches" :key="index"
                class="p-8 rounded-2xl border border-slate-5 flex flex-col">
                <div
                    class="border-slate-5 relative mb-6 mt-1.5 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border text-lg md:mt-0 bg-radial-[circle_at_100%_0%] from-primary-500/15 to-transparent to-[66.84%]">
                    <component :is="approach.icon" class="w-5 stroke-[1.5px]" />
                </div>

                <h3 class="text-primary-50 mb-4 text-xl">
                    {{ approach.title }}
                </h3>
                <p class="text-neutral-400 text-sm text-slate-11 text-pretty max-w-96 grow-1">
                    {{ approach.description }}
                </p>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { Clock, Users, CircleCheckBig } from 'lucide-vue-next'

const approaches = [
  {
    title: 'Accelerated Results',
    description: 'See measurable improvements within the first 90 days of implementation',
    icon: Clock,
  },
  {
    title: 'Capability Building',
    description: 'Transfer knowledge and build internal capabilities for long-term sustainability',
    icon: Users,
  },
  {
    title: 'Proven Methodology',
    description: 'Battle-tested flow-based approaches with demonstrated ROI across industries',
    icon: CircleCheckBig,
  },
]
</script>
