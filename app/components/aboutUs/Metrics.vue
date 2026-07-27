<template>
    <section class="px-6 mt-8 w-full mx-auto max-w-5xl md:max-w-7xl">
        <div class="w-full flex flex-col items-center">
            <SharedMetricsDisplay :stats="stats" :columns="3" />
        </div>
    </section>
</template>

<script setup lang="ts">
const stats = [
    {
        stats: '50+',
        text: 'Enterprise clients'
    },
    {
        stats: '20%',
        text: 'Average sales growth'
    },
    {
        stats: '25+',
        text: 'Countries served'
    }
];
</script>