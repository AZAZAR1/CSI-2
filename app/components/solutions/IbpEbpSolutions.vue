<template>
    <section id="integrated-and-enterprise-business-planning" class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">

            <SharedSectionHeader title="Integrated & Enterprise Business Planning"
                subtitle="Comprehensive planning frameworks that align strategic objectives with operational execution, ensuring sustainable growth and competitive advantage."
                size="large" titleMarginBottom="small" subtitleMarginBottom="large" titleAlign="center"
                subtitleAlign="center" />

            <div class="w-full space-y-8">
                <div v-for="(solution, index) in siopFlow" :key="index"
                    class="p-8 rounded-2xl border border-slate-5 flex flex-col gap-4 relative">
                    <h3 class="text-primary-50 text-2xl font-medium mb-3">
                        {{ solution.title }}
                    </h3>

                    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
                        <div v-for="(step, stepIndex) in solution.siopSteps" :key="stepIndex"
                            class="flex items-center space-x-3 p-4 bg-[linear-gradient(to_right,#ffffff0f,#ffffff0f)] rounded-lg">
                            <div
                                class="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center text-primary-900 text-md font-semibold">
                                {{ stepIndex + 1 }}
                            </div>
                            <div>
                                <h4 class="text-md text-primary-50 mb-1 font-medium">{{ step.title }}</h4>
                                <p class="text-sm text-neutral-400">{{ step.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <SharedCardGrid :items="ibpEbpCards" :columns="1" show-icon="false" title-class="text-2xl font-medium"
                    description-margin="default">
                    <template #card-content="{ item }">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-primary-50">
                            <div v-for="(section, secIndex) in item.sections" :key="secIndex">
                                <h4 class="text-lg font-medium mb-4">{{ section.heading }}</h4>
                                <ul class="space-y-3">
                                    <li v-for="(point, pIndex) in section.items" :key="pIndex"
                                        class="flex items-start text-md leading-6">
                                        <CircleCheckBig
                                            class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
                                        <span>{{ point }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </SharedCardGrid>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CircleCheckBig } from 'lucide-vue-next';

const ibpEbpCards = [
    {
        title: 'Integrated Business Planning (IBP)',
        description:
            'Comprehensive planning process that aligns operational plans with financial and strategic objectives.',
        sections: [
            {
                heading: 'Planning Capabilities',
                items: ['Demand & Supply Planning', 'Financial Planning Integration']
            },
            {
                heading: 'Management Systems',
                items: ['Scenario Planning & Risk Management', 'Performance Management & KPIs']
            }
        ]
    },
    {
        title: 'Enterprise Business Planning (EBP)',
        description:
            'Strategic planning framework connecting long-term vision with operational execution.',
        sections: [
            {
                heading: 'Strategic Focus',
                items: ['Strategic Business Planning', 'Portfolio Management']
            },
            {
                heading: 'Execution Excellence',
                items: ['Resource Allocation Optimization', 'Business Case Development']
            }
        ]
    }
]

const siopFlow = [
    {
        title: 'Cross-functional planning process balancing demand, supply, and financial plans',
        siopSteps: [
            { title: 'Demand Planning & Forecasting', description: 'Statistical forecasting and market intelligence' },
            { title: 'Supply Planning & Capacity', description: 'Resource optimization and capacity management' },
            { title: 'Inventory Optimization', description: 'Working capital efficiency and service levels' },
            { title: 'Cross-functional Alignment', description: 'Integrated business planning and execution' }
        ]
    }
]
</script>