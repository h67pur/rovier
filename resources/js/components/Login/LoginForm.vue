<script setup lang="ts">
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {};

const changes = [
    {
        id: 1,
        icon: 'pi pi-rocket',
        color: '#60a5fa',
        title: 'Релиз v1.12.0',
        date: '2024-02-15',
        description: 'Полная переработка модуля отчетности, добавлены новые типы аналитики',
        tags: ['Release', 'Analytics', 'UI Update'],
        details: {
            author: 'John Doe',
            features: ['Новый дашборд аналитики', 'Оптимизация производительности на 40%'],
            breaking: ['Изменен API генерации отчетов']
        }
    },
    {
        id: 2,
        icon: 'pi pi-bug',
        color: '#f87171',
        title: 'Исправление ошибок',
        date: '2024-02-14',
        description: 'Критические исправления в модуле безопасности',
        tags: ['Hotfix', 'Security'],
        details: {
            author: 'Jane Smith',
            fixes: ['Устранена уязвимость XSS', 'Исправлена потеря данных при роллбэке']
        }
    },
    {
        id: 3,
        icon: 'pi pi-star',
        color: '#6ee7b7',
        title: 'Новый функционал для анализа данных',
        date: '2024-01-22',
        description: 'Добавление возможностей для визуализации данных',
        tags: ['Feature', 'Data Visualization'],
        details: {
            author: 'Alice Johnson',
            features: ['Графики на основе пользовательских параметров', 'Интерактивные отчеты']
        }
    },
    {
        id: 4,
        icon: 'pi pi-chart-line',
        color: '#fbbf24',
        title: 'Оптимизация скорости загрузки',
        date: '2023-12-30',
        description: 'Улучшение производительности загрузки страниц приложения',
        tags: ['Performance', 'Improvement'],
        details: {
            author: 'Robert Brown',
            improvements: ['Сокращено время загрузки на 30%', 'Оптимизированы запросы к серверу']
        }
    },
    {
        id: 5,
        icon: 'pi pi-cog',
        color: '#f59e0b',
        title: 'Обновление модуля настроек',
        date: '2023-11-20',
        description: 'Новые опции для настройки пользовательского интерфейса',
        tags: ['Update', 'UI Settings'],
        details: {
            author: 'Emily Davis',
            features: ['Темная тема', 'Настройка шрифтов']
        }
    },
    {
        id: 6,
        icon: 'pi pi-shield',
        color: '#2563eb',
        title: 'Обновление безопасности',
        date: '2023-10-10',
        description: 'Улучшения в системе аутентификации',
        tags: ['Security', 'Update'],
        details: {
            author: 'Michael Wilson',
            features: ['Двухфакторная аутентификация', 'Улучшенные правила паролей']
        }
    },
    {
        id: 7,
        icon: 'pi pi-users',
        color: '#next',
        title: 'Добавление функций совместной работы',
        date: '2023-09-15',
        description: 'Функционал для совместной работы пользователей в реальном времени',
        tags: ['Collaboration', 'Feature'],
        details: {
            author: 'Linda Martinez',
            features: ['Совместное редактирование документов', 'Комментарии в реальном времени']
        }
    },
    {
        id: 8,
        icon: 'pi pi-pencil',
        color: '#22c55e',
        title: 'Обновления интерфейса редактирования',
        date: '2023-08-01',
        description: 'Улучшения в интерфейсе редактирования контента',
        tags: ['UI Update', 'Editing'],
        details: {
            author: 'James Anderson',
            features: ['Новые инструменты форматирования', 'Лучшие подсказки для пользователей']
        }
    },
    {
        id: 9,
        icon: 'pi pi-globe',
        color: '#3b82f6',
        title: 'Локализация и интернационализация',
        date: '2023-07-10',
        description: 'Поддержка нескольких языков в приложении',
        tags: ['Localization', 'Internationalization'],
        details: {
            author: 'Sarah Thomas',
            features: ['Поддержка языков: русский, английский, испанский']
        }
    },
    {
        id: 10,
        icon: 'pi pi-rocket',
        color: '#60a5fa',
        title: 'Релиз v1.11.0',
        date: '2023-06-20',
        description: 'Обновления с новыми функциями и исправлениями',
        tags: ['Release'],
        details: {
            author: 'John Doe',
            features: ['Создание шаблонов отчетов', 'Новые интеграции с API'],
            fixes: ['Исправлена ошибка генерации PDF']
        }
    }
];
</script>

<template>
    <div class="flex flex-col gap-4">
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
                <Button label="Войти"
                        size="small"
                        icon="pi pi-sign-in"
                        class="w-full mt-4"
                        @click="handleLogin" />
            </template>
        </Card>
        <Card class="h-full border-0 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <template #title>
                <div class="flex items-center gap-3">
                    <i class="pi pi-history text-2xl text-blue-400"></i>
                    <h2 class="text-xl font-bold">История последних изменений</h2>
                </div>
            </template>

            <template #content>
                <div class="h-[600px] overflow-y-auto scroll-container">
                    <div v-for="(change, index) in changes"
                         :key="index"
                         class="group relative mb-4 transition-all duration-300">
                        <Card class="border-0 rounded-xl bg-gray-700/50 hover:!bg-gray-700/70 backdrop-blur-sm cursor-pointer transition-all duration-300">
                            <template #content>
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0">
                                        <i :class="change.icon" class="text-2xl mt-1" :style="{ color: change.color }"></i>
                                    </div>
                                    <div class="flex-grow">
                                        <div class="flex items-center justify-between">
                                            <h3 class="text-lg font-semibold text-blue-400">{{ change.title }}</h3>
                                            <span class="text-sm text-gray-400">{{ change.date }}</span>
                                        </div>
                                        <p class="mt-2 text-gray-300">{{ change.description }}</p>
                                        <div class="mt-3 flex items-center gap-2 text-sm">
                                            <Tag v-for="(tag, tagIndex) in change.tags"
                                                 :key="tagIndex"
                                                 :value="tag"
                                                 class="text-xs bg-gray-600/50 border-0" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.scroll-container {
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #1f2937;
}

.scroll-container::-webkit-scrollbar {
    width: 8px;
}

.scroll-container::-webkit-scrollbar-track {
    background: #1f2937;
    border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
}

.group:hover .hover-effect {
    transform: translateX(5px);
    opacity: 1;
}
</style>
