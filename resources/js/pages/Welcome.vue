<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Стартовая страница" />
    <div class="h-screen flex flex-col items-center justify-center overflow-hidden">
        <div class="grid grid-cols-3 gap-4 w-full max-w-4xl">
            <div v-for="x in 12" :key="x" class="text-center border p-4 rounded-lg flex items-center justify-center">
                {{ x }}
            </div>
        </div>
    </div>
</template>
