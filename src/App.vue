<template>
  <section class="bg-gray-800 flex flex-col h-full items-center justify-center min-h-screen min-w-max">
    <main class="max-w-3xl">
      <h1 class="text-5xl mb-2 text-center font-extrabold text-emerald-600">{{ appName }}</h1>
      <h2 class="text-4xl mb-9 text-center font-extrabold text-emerald-600">With Typescript!</h2>
    </main>

    {{ apiBaseUrl }}
  </section>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const appName = computed(() => import.meta.env.VITE_APP_NAME)
const apiBaseUrl = computed(() => import.meta.env.VITE_API_BASE_URL)
</script>

<style scoped></style>
