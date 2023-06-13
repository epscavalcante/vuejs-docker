<template>
    <h1 class="text-2xl text-gray-200 font-semibold">Contact page</h1>

    <div class="flex justify-center gap-x-5 my-10 text-emerald-400 font-semibold">
        <RouterLink :to="{ name: 'home' }">Back home</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped></style>