<script setup>
import HeaderPanel from "@/components/HeaderPanel.vue";
import MainPanel from "@/components/MainPanel.vue";
</script>

<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-8">
      <HeaderPanel />

      <MainPanel />
    </div>
  </div>
</template>
