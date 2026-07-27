<template>
    <section class="px-6 w-full mx-auto max-w-5xl md:max-w-7xl">
        <ul class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li v-for="resource in resources" :key="resource.title"
                class="relative overflow-hidden border rounded-sm lg:rounded-md">
                <a :href="`/resources/${resource.slug}.pdf`" target="_blank" class="relative w-full group">
                    <NuxtImg :src="`/resources/${resource.slug}.jpg`" :alt="resource.title" width="395" height="208"
                        :placeholder="[392, 208, 70, 1]"
                        class="w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(.25,.8,.25,1)] group-hover:scale-[1.08] group-hover:-translate-y-1"
                        format="avif,webp,jpeg" quality="80" preload loading="eager" decoding="sync" />
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
const resources = [
    {
        title: 'Discover Where Your SME Stands on the Journey from Manual Operations to Predictive Intelligence',
        slug: 'discover-where-your-sme-stands-on-the-journey-from-manual-operations-to-predictive-intelligence'
    },
    {
        title: 'Is Your Supply Chain Holding You Back?',
        slug: 'is-your-supply-chain-holding-you-back'
    },
    {
        title: 'From Chaos to Flow: Lessons from SMEs Who Transformed Their Supply Chains',
        slug: 'from-chaos-to-flow-lessons-from-smes-who-transformed-their-supply-chains'
    }
]
</script>