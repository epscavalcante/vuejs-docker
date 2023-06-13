<template>
    <h1 class="text-2xl text-gray-200 font-semibold">Home page</h1>

    <div class="section flex gap-x-5 my-10 text-emerald-400 font-semibold">
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Contat</RouterLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>