<template>
    <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
            <SharedSectionHeader title="Enterprise Planning & Execution Integration" size="large" marginBottom="large"
                titleAlign="center" />

            <div v-for="(group, index) in coreCapabilities" :key="index"
                class="w-full col-span-2 p-6 md:p-8 rounded-2xl border flex flex-col gap-6 relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div v-for="(cap, secIndex) in group.epeiCapabilities" :key="secIndex"
                        class="flex space-x-4 p-4 bg-[linear-gradient(to_right,#ffffff04,#ffffff04)] rounded-lg"
                        :class="secIndex === group.epeiCapabilities.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''">
                        <div
                            class="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border text-lg bg-radial-[circle_at_100%_0%] from-primary-500/15 to-transparent to-[66.84%] shrink-0">
                            <component :is="cap.icon" class="w-6 h-6 stroke-[1.5px]" />
                        </div>
                        <div>
                            <h4 class="text-md text-primary-50 mb-1 font-medium">{{ cap.title }}</h4>
                            <p class="text-sm text-neutral-400">{{ cap.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    TrendingUp,
    Banknote,
    Handshake,
    PackageSearch,
    Boxes,
    Factory,
    LayoutDashboard
} from 'lucide-vue-next'

const coreCapabilities = [
    {
        section: "Enterprise Planning & Execution Integration",
        epeiCapabilities: [
            {
                title: "Planning Maturity",
                description: "SIOP → IBP → EBP → SDP",
                icon: TrendingUp
            },
            {
                title: "Finance & HR",
                description: "Payroll, accounting, reporting",
                icon: Banknote
            },
            {
                title: "Sales & Marketing",
                description: "CRM, KYC, Sales orders, forecasting, pricing",
                icon: Handshake
            },
            {
                title: "Supply Chain Mgmt",
                description: "RCCP, MPS, DRP, inventory accounting, returns mgmt",
                icon: PackageSearch
            },
            {
                title: "Warehousing",
                description: "FIFO/WMS, bin picking, cycle counting, labeling",
                icon: Boxes
            },
            {
                title: "Manufacturing",
                description: "MO processing, production BOM, WIP mgmt, cost accounting",
                icon: Factory
            },
            {
                title: "Cross-functional analytics",
                description: "Portfolio & demand planning, inventory projection, scenario planning, OTC analytics, FP&A excellence, strategy deployment",
                icon: LayoutDashboard
            }
        ]
    }
]
</script>
