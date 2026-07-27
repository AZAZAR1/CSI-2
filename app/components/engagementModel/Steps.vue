<template>
    <section class="px-6 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full flex flex-col items-center">
            <div class="space-y-16">
                <div class="px-6 py-10 rounded-xl border" v-for="(approach, index) in approaches" :key="index" :class="[
                    index % 2 === 1 ? 'lg:flex-row-reverse' : '',
                    'flex flex-col md:flex-row gap-8'
                ]">
                    <div class="relative w-full rounded px-8 py-5 min-h-60 lg:max-w-[488px] flex flex-col ring-[1.5px]"
                        :class="[approach.color.bg, approach.color.ring]">
                        <div class="flex-1 flex flex-col justify-center text-primary-50 text-left sm:text-center">
                            <div class="flex sm:justify-center mb-4">
                                <component :is="approach.icon" class="w-12 h-12 text-primary-50" />
                            </div>
                            <h3 class="text-2xl font-bold mb-2">{{ approach.phase }}</h3>
                            <h4 class="text-lg">{{ approach.title }}</h4>
                            <div class="absolute top-4 right-4 text-sm leading-6 rounded-full px-3 py-1"
                                :class="approach.color.badge">
                                <span class="font-semibold text-[#0A0A0A]">Duration: {{ approach.duration }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-2/3">
                        <div>
                            <p class="text-neutral-400 mb-6 text-lg">{{ approach.description }}</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-6 text-primary-50">
                                <div>
                                    <h5 class="text-lg mb-4 font-medium">Key Deliverables</h5>
                                    <ul class="space-y-3">
                                        <li v-for="(deliverable, dIdx) in approach.deliverables" :key="dIdx"
                                            class="flex items-start text-sm leading-6">
                                            <CircleCheckBig
                                                class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
                                            <span>{{ deliverable }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 class="text-lg mb-4 font-medium">Key Activities</h5>
                                    <ul class="space-y-3">
                                        <li v-for="(activity, aIdx) in approach.keyActivities" :key="aIdx"
                                            class="flex items-start text-sm leading-6">
                                            <CircleCheckBig
                                                class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
                                            <span>{{ activity }}</span>
                                        </li>
                                    </ul>
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
import { CircleCheckBig } from 'lucide-vue-next'
import { Microscope, PencilRuler, Rocket } from 'lucide-vue-next'

const approaches = [
    {
        phase: 'Diagnose',
        title: 'Free 3-Day Diagnostic',
        icon: Microscope,
        color: {
            bg: "bg-[#8F8F8F]/12",
            ring: "ring-[#8F8F8F]",
            badge: "bg-[#8F8F8F]"
        },
        duration: '3 Days',
        deliverables: [
            'Value chain mapping and analysis',
            'Digital baseline assessment',
            'Gap analysis and pain point identification',
            'Transformation opportunity assessment',
            'Executive summary with recommendations',
        ],
        description:
            'Comprehensive assessment of your current state to identify transformation opportunities and establish baseline metrics.',
        keyActivities: [
            'Stakeholder interviews and workshops',
            'Process mapping and documentation',
            'Systems and technology assessment',
            'Performance baseline establishment',
        ],
    },
    {
        phase: 'Design',
        title: 'Solution Design & Planning',
        icon: PencilRuler,
        color: {
            bg: "bg-[#149ECA]/12",
            ring: "ring-[#149ECA]",
            badge: "bg-[#149ECA]"
        },
        duration: '2-4 Weeks',
        deliverables: [
            'Detailed transformation roadmap',
            'Tool and technology specifications',
            'Capability development plan',
            'Change management strategy',
            'ROI projections and business case',
        ],
        description:
            'Develop comprehensive transformation plan with tools, capabilities, and secure management buy-in for implementation.',
        keyActivities: [
            'Solution architecture design',
            'Tool selection and customization',
            'Training program development',
            'Change management planning',
        ],
    },
    {
        phase: 'Deliver',
        title: 'Implementation & Sustainment',
        icon: Rocket,
        color: {
            bg: "bg-[#00DC82]/12",
            ring: "ring-[#00DC82]",
            badge: "bg-[#00DC82]"
        },
        duration: '3-12 Months',
        deliverables: [
            'Deployed flow-based solutions',
            'Trained and certified teams',
            'Performance monitoring systems',
            'Continuous improvement processes',
            'Sustained results validation',
        ],
        description:
            'Deploy solutions, upskill teams, and ensure sustained results through ongoing support and optimization.',
        keyActivities: [
            'Solution deployment and testing',
            'Team training and certification',
            'Performance monitoring setup',
            'Optimization and fine-tuning',
        ],
    },
]
</script>