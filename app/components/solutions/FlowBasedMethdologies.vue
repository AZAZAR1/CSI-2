<template>
    <section id="flow-based-methodologies" class="px-6 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
            <SharedSectionHeader title="Flow-Based Methodologies"
                subtitle="Our proprietary Flow-Based methodologies provide systematic approaches to enterprise transformation and operational excellence."
                size="large" titleMarginBottom="small" subtitleMarginBottom="large" titleAlign="center"
                subtitleAlign="center" />
            <SharedCardGrid :items="flowBasedSolutions" :columns="2" variant="detailed" descriptionMargin="default">
                <template #card-content="{ item }">
                    <ul class="space-y-3">
                        <li v-for="(detail, index) in item.details" :key="index"
                            class="flex items-start text-sm leading-6">
                            <CircleCheckBig class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
                            <span>{{ detail }}</span>
                        </li>
                    </ul>
                </template>
            </SharedCardGrid>
        </div>
    </section>
</template>


<script setup lang="ts">
import {
    CircleCheckBig,
    BarChart3,
    Cog
} from 'lucide-vue-next'

const flowBasedSolutions = [
    {
        title: "Flow-Based Integrated Business Planning & Execution (FB-IBPE)",
        description: "Seamless integration of planning and execution processes for optimal results",
        icon: BarChart3,
        details: [
            "Financial goals deployment",
            "Operations process & ERP excellence",
            "Advanced analytics",
            "Performance management & Rapid problem solving"
        ]
    },
    {
        title: "Flow-Based Fulfillment Planning & Execution (FB-DRPE)",
        description: "Optimize demand and supply planning for peak performance and customer satisfaction",
        icon: Cog,
        details: [
            "Demand sensing and planning",
            "Supply optimization",
            "Inventory management",
            "Customer fulfillment excellence"
        ]
    }
];
</script>
