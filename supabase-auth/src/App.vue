<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="text-red-900">
    <header class="bg-[#6c47ff]">
      <div class="container flex justify-between items-center h-20">
        <div class="text-2xl font-extrabold text-white">Supabase Auth</div>
        <nav class="flex items-center">
          <RouterLink to="/" class="text-white mx-4 font-semibold">Home (UnProtected)</RouterLink>
          <RouterLink to="/auth" class="text-white mx-4 font-semibold">Auth (UnProtected)</RouterLink>
          <RouterLink to="/" class="text-white mx-4 font-semibold">Profile (Protected)</RouterLink>
        </nav>
      </div>
    </header>
    <main class="container mx-auto">
      <div class="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div class="w-full">
          <RouterView />
        </div>
      </div>
    </main>
  </h1>
</template>
