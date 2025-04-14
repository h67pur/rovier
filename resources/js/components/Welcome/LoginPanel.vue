<script setup lang="ts">
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {

};
</script>

<template>
    <Card class="border rounded-2xl shadow-lg transition-all duration-300">
        <template #title>Вход в систему</template>
        <template #content>
            <div class="flex flex-col-2 gap-4 justify-between pt-2">
                <FloatLabel variant="on" class="w-full">
                    <InputText id="email_label" v-model="email" class="w-full"/>
                    <label for="email_label">Email</label>
                </FloatLabel>

                <FloatLabel variant="on">
                    <Password v-model="password" inputId="password-label" toggleMask :feedback="false" />
                    <label for="password-label">Пароль</label>
                </FloatLabel>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <Button label="Войти"
                        size="small"
                        icon="pi pi-sign-in"
                        class="w-full mt-4"
                        @click="handleLogin" />
                <Button label="Восстановить пароль"
                        size="small"
                        icon="pi pi-refresh"
                        class="w-full mt-4"
                        @click="handleLogin" />
            </div>
        </template>
    </Card>
</template>
