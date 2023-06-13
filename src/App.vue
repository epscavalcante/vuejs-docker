<template>
  <section class="bg-gray-800 flex flex-col h-full items-center justify-center min-h-screen min-w-max">
    <main class="max-w-3xl border-b-2 mb-9 pb-5">
      <h1 class="text-5xl mb-2 text-center font-extrabold text-emerald-600">{{ appName }}</h1>
      <h2 class="text-4xl text-center font-extrabold text-emerald-600">With Typescript!</h2>
    </main>

    <section class="text-center">
      <RouterView />
    </section>

  </section>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { RouterView } from 'vue-router';

const appName = computed(() => import.meta.env.VITE_APP_NAME)
</script>

<style scoped></style>
