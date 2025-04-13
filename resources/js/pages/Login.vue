<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import InfoPanel from '@/components/Login/InfoPanel.vue';
import LoginForm from '@/components/Login/LoginForm.vue';
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
            <LoginForm />
        </div>
    </div>
</template>

<style>

</style>
