<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import InfoPanel from '@/components/Welcome/InfoPanel.vue';
import LoginPanel from '@/components/Welcome/LoginPanel.vue';
import HistoryPanel from '@/components/Welcome/HistoryPanel.vue';
</script>

<template>
    <Head title="Вход в систему" />
    <div class="flex flex-col gap-4 w-full p-3 h-screen items-center overflow-hidden">
        <div class="flex w-full rounded-lg border">
            <span class="text-xl py-2 px-3 font-bold bg-blue-400 rounded-l-lg cursor-pointer">
                Leasing-Rovier
            </span>
        </div>
        <div class="grid grid-cols-3 gap-4 w-full h-full justify-center">
            <InfoPanel />
            <div class="flex flex-col gap-4">
                <LoginPanel />
                <HistoryPanel />
            </div>
        </div>
    </div>
</template>
