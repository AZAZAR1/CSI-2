<template>
  <section class="px-6 w-full mx-auto max-w-5xl md:max-w-7xl @container">
    <div class="w-full pt-36 pb-12 sm:pb-24 @header:pt-24 flex flex-col items-center">
      <SharedSectionHeader
        :title="t('industries.sectors.title')"
        :subtitle="t('industries.sectors.subtitle')"
        size="large"
        titleMarginBottom="small"
        subtitleMarginBottom="large"
        titleAlign="center"
        subtitleAlign="center"
      />

      <div class="grid w-full grid-cols-1 gap-8 overflow-hidden md:grid-cols-2">
        <div
          v-for="(industry, index) in industries"
          :key="'industry-' + index"
          class="px-6 py-10 md:p-8 rounded-2xl border flex flex-col gap-6 relative"
        >
          <div class="flex gap-4 items-center">
            <div
              class="relative mt-1.5 flex h-15 w-15 items-center justify-center overflow-hidden rounded-lg border text-lg md:mt-0 bg-radial-[circle_at_100%_0%] from-primary-500/15 to-transparent to-[66.84%]"
            >
              <component :is="industry.icon" class="w-8 h-8 stroke-[2px]" />
            </div>

            <h3 class="text-primary-50 text-xl md:text-2xl font-medium">
              {{ industry.title }}
            </h3>
          </div>

          <p class="text-neutral-400 text-md text-pretty">
            {{ industry.description }}
          </p>

          <div v-if="industry.challenges?.length">
            <h4 class="text-lg mb-4 font-medium text-primary-50">
              {{ t('industries.sectors.challengesLabel') }}
            </h4>

            <ul class="space-y-3">
              <li
                v-for="(challenge, cIndex) in industry.challenges"
                :key="'challenge-' + index + '-' + cIndex"
                class="flex items-start text-sm leading-6"
              >
                <TriangleAlert class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-red-400" />
                <span>{{ challenge }}</span>
              </li>
            </ul>
          </div>

          <div v-if="industry.solutions?.length">
            <h4 class="text-lg font-medium mt-2 mb-4 text-primary-50">
              {{ t('industries.sectors.solutionsLabel') }}
            </h4>

            <ul class="space-y-3">
              <li
                v-for="(solution, sIndex) in industry.solutions"
                :key="'solution-' + index + '-' + sIndex"
                class="flex items-start text-sm leading-6"
              >
                <CircleCheckBig class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
                <span>{{ solution }}</span>
              </li>
            </ul>
          </div>

          <Badge class="absolute top-3 right-3 lg:top-4 lg:right-4 text-xs leading-6" variant="outline">
            {{ industry.impact }}
          </Badge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Stethoscope,
  Package,
  Shield,
  Building,
  Factory,
  TriangleAlert,
  CircleCheckBig
} from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'

const { t, tm, rt } = useI18n()

const icons = [Stethoscope, Factory, Package, Shield, Building]

const industries = computed(() => {
  const items = tm('industries.sectors.items') as Array<{
    title: string
    description: string
    challenges: string[]
    solutions: string[]
    impact: string
  }>

  return items.map((item, index) => ({
    icon: icons[index],
    title: rt(item.title),
    description: rt(item.description),
    challenges: item.challenges.map(challenge => rt(challenge)),
    solutions: item.solutions.map(solution => rt(solution)),
    impact: rt(item.impact)
  }))
})
</script>
