<script setup>
import AnchorTag from "./shared/AnchorTag.vue";
</script>

<template>
  <footer class="max-w-lg pb-16 text-sm text-slate-500 sm:pb-0">
    <p>
      Thank you for stopping by, stay connected! This site is powered by

      <AnchorTag :link="'https://vuejs.org/'" :text="'Vue.js'" />, styled with

      <AnchorTag :link="'https://tailwindcss.com/'" :text="'Tailwind CSS'" />
      and deployed with

      <AnchorTag :link="'https://top.host/el'" :text="'TopHost'" />. <br />
      <span class="text-slate-400 focus:text-slate-400">
        © 2024, Vasileios Vasileios.
      </span>
    </p>
  </footer>
</template>
