<template>
  <section id="digital-transformation" class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
    <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
      <SharedSectionHeader title="Digital Transformation Excellence"
        subtitle="We accelerate digital transformation by combining the cutting-edge technologies of TOMAX DIGITAL platforms (powered by D3MINDS), enabling people, processes, and platforms to evolve together — and deliver real business value."
        size="large" titleMarginBottom="small" subtitleMarginBottom="large" titleAlign="center"
        subtitleAlign="center" />

      <SharedCardGrid :items="saasProducts" :columns="3" :show-icon="true" variant="default" descriptionMargin="default"
        titleClass="text-primary-50 mb-4 text-xl"
        descriptionClass="text-neutral-400 text-sm text-slate-11 text-pretty mb-4">
        <template #card-content="{ item }">
          <ul class="space-y-3">
            <li v-for="(feature, featureIndex) in item.features" :key="featureIndex"
              class="flex items-start text-sm leading-6">
              <CircleCheckBig class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </template>
      </SharedCardGrid>
    </div>
  </section>
</template>

<script setup>
import { CircleCheckBig } from 'lucide-vue-next';
import { Sparkles, Layers, Factory } from 'lucide-vue-next'

const saasProducts = [
  {
    title: "Gen AI/ML Applications",
    description: "Harness the power of generative AI and machine learning to transform your business operations with intelligent automation and predictive insights",
    icon: Sparkles,
    features: [
      "Predictive demand forecasting with advanced ML algorithms",
      "Automated process optimization and decision support",
      "Natural language processing for business intelligence",
      "Generative AI for scenario planning and simulation"
    ]
  },
  {
    title: "Integrated Data Hub (IDH)",
    description: "Centralize and harmonize your enterprise data ecosystem for real-time visibility, analytics, and intelligent decision-making across all functions",
    icon: Layers,
    features: [
      "Unified data platform for enterprise-wide integration",
      "Real-time data synchronization and validation",
      "Advanced analytics and business intelligence",
      "Seamless integration with existing systems"
    ]
  },
  {
    title: "Digital Manufacturing Apps",
    description: "End-to-end digital manufacturing product that connects planning, execution, and optimization for Industry 4.0 excellence",
    icon: Factory,
    features: [
      "Real-time production planning and scheduling",
      "Digital twin technology for process optimization",
      "Integrated quality management systems",
      "Smart factory analytics and performance monitoring"
    ]
  }
];
</script>