<template>
    <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full border-t py-12 sm:py-24 flex flex-col items-center">
            <SharedSectionHeader title="I’m interested in :" size="large" />
            <div class="grid w-full grid-cols-1 gap-8 overflow-hidden md:grid-cols-2">
                <a href="/contact-us" v-for="(button, index) in Buttons" :key="index"
                    class="relative p-8 rounded-2xl border flex flex-col group overflow-clip">
                    <div
                        class="absolute inset-0 pointer-events-none block duration-300 group-hover:opacity-100 opacity-0 transition-opacity">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent">
                        </div>
                    </div>
                    <h3 class="text-primary-50 mb-4 text-xl">
                        {{ button.title }}
                    </h3>
                    <p class="text-neutral-400 text-sm text-pretty grow-1 mb-4">
                        {{ button.description }}
                    </p>
                    <ul class="space-y-3">
                        <li v-for="(details, index) in button.details" :key="index"
                            class="flex items-start text-sm leading-6">
                            <CircleCheckBig class="w-4 h-4 mt-1 mr-3 flex-shrink-0 stroke-[1.5px] stroke-green-400" />
                            <span>{{ details }}</span>
                        </li>
                    </ul>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { CircleCheckBig, ArrowRight } from 'lucide-vue-next'

const Buttons = [
    {
        title: "Gen AI for business",
        description: "Human augmentation and knowledge generator",
        details: [
            "Install advanced analytics integrated data hub",
            "Generate smart text-based outputs",
            "Automate business processes"
        ]
    },
    {
        title: "IBP&E",
        description: "Scale profitably, improve service level and reduce inventory. For Start-Ups and enterprises",
        details: [
            "Order-to-Cash ERP excellence",
            "Demand planning",
            "Manufacturing and Distribution excellence"
        ]
    }
];
</script>