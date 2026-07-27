<template>
    <section id="supply-chain-management" class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">

            <SharedSectionHeader title="Supply Chain Management Excellence"
                subtitle="End-to-end supply chain optimization solutions that enhance efficiency, reduce costs, and build resilient, agile supply networks."
                size="large" titleMarginBottom="small" subtitleMarginBottom="large" titleAlign="center"
                subtitleAlign="center" />

            <div class="grid w-full gap-8 grid-cols-1 md:grid-cols-3">
                <div v-for="(solution, index) in scmSolutions" :key="index"
                    class="p-8 md:p-6 lg:p-8 ring-[1.5px] rounded-lg" :class="[solution.color.bg, solution.color.ring]">
                    <div class="h-full flex flex-col">
                        <h3 class="text-primary-50 text-xl font-medium mb-6 text-center">{{ solution.title }}</h3>
                        <div class="flex-1 space-y-4">
                            <div v-for="(cap, capIndex) in solution.capabilities" :key="capIndex"
                                class="bg-[linear-gradient(to_right,#ffffff0f,#ffffff0f)] px-6 py-5 rounded-lg text-center">
                                <h4 class="text-md text-primary-50 mb-2 font-medium">{{ cap.title }}</h4>
                                <p class="text-sm text-neutral-400">{{ cap.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const scmSolutions = [
    {
        title: "Network Design",
        color: {
            bg: "bg-[#8F8F8F]/12",
            ring: "ring-[#8F8F8F]"
        },
        capabilities: [
            {
                title: "Network Optimization",
                desc: "Strategic facility location and configuration"
            },
            {
                title: "Distribution Strategy",
                desc: "Multi-tier distribution and stocking maps"
            },
            {
                title: "Supplier Management",
                desc: "Strategic sourcing, vendor scheduling, and supplier performance improvement"
            },
            {
                title: "PFEP (Plan-for-Every-Part)",
                desc: "Inventory and stocking policies tailored by SKU, channel, and geography"
            }
        ]
    },
    {
        title: "Visibility & Control",
        color: {
            bg: "bg-[#149ECA]/12",
            ring: "ring-[#149ECA]"
        },
        capabilities: [
            {
                title: "Real-time Visibility",
                desc: "End-to-end transparency across demand, supply, and fulfillment"
            },
            {
                title: "Risk Management",
                desc: "Proactive identification and mitigation of supply constraints"
            },
            {
                title: "Performance Monitoring",
                desc: "KPI-driven control of OTIF, working capital turns, and cycle time"
            },
            {
                title: "Constraint Management",
                desc: "Integrated RCCP/MPS to align supply with production capacity"
            }
        ]
    },
    {
        title: "Analytics",
        color: {
            bg: "bg-[#00DC82]/12",
            ring: "ring-[#00DC82]"
        },
        capabilities: [
            {
                title: "Predictive Analytics",
                desc: "AI/ML-driven demand forecasting and scenario planning"
            },
            {
                title: "Cost-to-Serve Analysis",
                desc: "Profitability assessment and optimization across channels"
            },
            {
                title: "Optimization Models",
                desc: "Mathematical modeling for smarter inventory and logistics decisions"
            },
            {
                title: "Digital SCM Tools",
                desc: "DRP, WMS, and ERP optimization for agile execution"
            }
        ]
    }
];
</script>
