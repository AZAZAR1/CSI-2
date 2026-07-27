<template>
  <section class="mx-auto sm:py-24 mt-12 max-w-5xl overflow-hidden border-t border-slate-6 px-6 py-20 md:mt-0 md:max-w-7xl">
    <h2 class="text-center text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] z-20 mb-12 text-primary-50">
      Key Challenges We Solve
    </h2>
    <div class="z-20 mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols-3">
      <div
        v-for="(challenge, index) in challenges"
        :key="index"
        class="flex w-full flex-col gap-3 md:gap-2"
      >
        <div class="flex flex-row gap-3 md:flex-col md:gap-6">
          <component class="stroke-primary-500" :is="challenge.icon" :size="32" :strokeWidth="2"/>
          <h4 class="text-primary-50 text-xl leading-[32px] md:leading-none">
            {{ challenge.title }}
          </h4>
        </div>
        <p class="text-neutral-400 text-sm leading-[1.6] font-normal">
          {{ challenge.description }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import {
  TrendingDown,
  ChartColumnDecreasing,
  DollarSign,
  TriangleAlert,
  Target,
  Zap
} from 'lucide-vue-next'

const challenges = [
  {
    icon: TrendingDown,
    title: 'Missed Sales',
    description:
      'Unable to capture market opportunities due to poor sales execution and market penetration.'
  },
  {
    icon: ChartColumnDecreasing,
    title: 'Low Growth',
    description:
      'Struggling to achieve sustainable growth targets and scale business operations effectively.'
  },
  {
    icon: DollarSign,
    title: 'High Operating Costs',
    description:
      'Inefficient processes leading to excessive operational expenses and waste.'
  },
  {
    icon: TriangleAlert,
    title: 'Cash Constraints',
    description:
      'Poor working capital management affecting business liquidity and growth.'
  },
  {
    icon: Target,
    title: 'Poor Execution',
    description:
      'Gap between strategic planning and operational execution capabilities.'
  },
  {
    icon: Zap,
    title: 'Digital Disruption',
    description:
      'Competitive pressure from agile digital start-ups and new market entrants.'
  }
]
</script>
