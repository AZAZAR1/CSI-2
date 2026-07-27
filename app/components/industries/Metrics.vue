<template>
        <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full flex flex-col items-center">
            <SharedMetricsDisplay :stats="stats" :columns="4" />
        </div>
    </section>
</template>

<script setup lang="ts">
const stats = [
    {
        stats: '25%',
        text: 'Average Revenue Growth'
    },
    {
        stats: '40%',
        text: 'Operational Efficiency Gain'
    },
    {
        stats: '$5M',
        text: 'Annual Cost Savings'
    },
    {
        stats: '90%',
        text: 'Goal Alignment Rate'
    }
];
</script>