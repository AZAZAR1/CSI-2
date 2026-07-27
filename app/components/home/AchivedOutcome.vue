<template>
    <section class="px-6 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="relative overflow-hidden w-full rounded-2xl border px-6 py-9 shadow-xl backdrop-blur">
            <div
                class="absolute inset-0 pointer-events-none block opacity-100">
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent">
                </div>
            </div>
            <h2 class="text-3xl leading-[120%] text-center font-medium text-primary-50 mb-8">
                Achieved Outcome
            </h2>
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 text-center md:grid-cols-3">
                <div v-for="(item, index) in stats" :key="index" class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-sm leading-6 font-normal text-neutral-400">
                        {{ item.text }}
                    </dt>
                    <dd
                        class="order-first whitespace-nowrap bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-transparent text-4xl font-semibold tracking-tight">
                        {{ item.stats }}
                    </dd>
                </div>
            </dl>
        </div>
    </section>
</template>

<script setup lang="ts">
const stats = [
    {
        stats: '15-25%',
        text: 'Cost Reduction'
    },
    {
        stats: '20-30%',
        text: 'Inventory Optimization'
    },
    {
        stats: '95%+',
        text: 'Service Level Achievement'
    }
];
</script>