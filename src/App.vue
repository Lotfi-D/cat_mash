<template>
  <div class="">
    <the-header class="w-full fixed" />
    <main class="min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 pt-[150px]">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheHeader from './layout/TheHeader.vue';
</script>
