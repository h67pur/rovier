<script setup lang="ts">
// TODO: Подумать делать ли гибкую настройку
const solutions = [
    {
        icon: 'pi pi-sitemap',
        title: 'ERP для лизинга',
        description: 'Полный цикл сделок: от заявки до закрытия договора'
    },
    {
        icon: 'pi pi-sitemap',
        title: 'Клиентский кабинет',
        description: 'Удобный интерфейс для отслеживания лизинговых заявок'
    },
    {
        icon: 'pi pi-wallet',
        title: 'Скоринг-платформа',
        description: 'AI-анализ рисков с интеграцией ЦБ и бюро кредитных историй'
    },
    {
        icon: 'pi pi-chart-bar',
        title: 'BI-аналитика',
        description: 'Дашборды в реальном времени с ML-прогнозированием'
    },
    {
        icon: 'pi pi-file-pdf',
        title: 'Электронный документооборот',
        description: 'Цифровые договоры с ЭЦП и смарт-контрактами'
    },
    {
        icon: 'pi pi-file-plus',
        title: 'Перенос всей базы знаний',
        description: 'Успешно интегрируемся с вашими текущими системами'
    }
];
</script>

<template>
    <Card class="col-span-2 h-full rounded-2xl border-0 shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white transform transition-all duration-500 hover:shadow-2xl">
        <template #title>
            <div class="flex items-center gap-4">
                <div>
                    <h1 class="text-3xl font-bold tracking-tight">Лизинговая цифровая платформа «Leasing-Rovier»</h1>
                    <p class="text-lg text-purple-100 mt-2">Инновационные решение для вашей лизинговой компании</p>
                </div>
            </div>
        </template>

        <template #content>
            <div class="space-y-8 pr-6 pl-6 pb-6 pt-4">
                <div class="group relative overflow-hidden rounded-xl p-6 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/15">
                    <div class="flex gap-4 items-start">
                        <i class="pi pi-cloud text-3xl text-cyan-200 mt-1"></i>
                        <div>
                            <h2 class="text-2xl font-semibold mb-3">Цифровая трансформация лизинга</h2>
                            <p class="leading-relaxed text-cyan-50">
                                С 2020 года создаем комплексные IT-решения для автоматизации лизинговых операций.
                                Наша платформа объединяет CRM, скоринг, аналитику и документооборот в едином цифровом пространстве.
                                Более 120 успешных внедрений в России и СНГ.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="(solution, index) in solutions"
                         :key="index"
                         class="solution-card p-6 rounded-lg transition-all duration-300 hover:bg-white/10">
                        <div class="flex items-center gap-4">
                            <i :class="solution.icon" class="text-3xl text-cyan-200"></i>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">{{ solution.title }}</h3>
                                <p class="text-cyan-100">{{ solution.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6 border-t border-purple-300/30">
                    <div class="p-4">
                        <div class="text-3xl font-bold text-purple-200">5</div>
                        <div class="text-sm text-purple-100">Лет на рынке</div>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl font-bold text-purple-200">2.5B ₽</div>
                        <div class="text-sm text-purple-100">Средний объем сделок клиентов</div>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl font-bold text-purple-200">500+</div>
                        <div class="text-sm text-purple-100">Компаний-клиентов</div>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl font-bold text-purple-200">24/7</div>
                        <div class="text-sm text-purple-100">Поддержка</div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>
