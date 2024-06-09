<script setup>
import AnchorTag from "./shared/AnchorTag.vue";
</script>

<template>
  <footer class="max-w-lg pb-16 text-sm text-slate-500 sm:pb-0">
    <p>
      Created in

      <AnchorTag
        :link="'https://code.visualstudio.com/'"
        :text="'Visual Studio Code'"
      />

      by yours truly. Built with

      <AnchorTag :link="'https://vuejs.org/'" :text="'Vue.js'" />

      and

      <AnchorTag :link="'https://tailwindcss.com/'" :text="'Tailwind CSS'" />

      , deployed with

      <AnchorTag
        :link="'https://top.host/web-hosting.htm'"
        :text="'Top.Host'"
      />.
    </p>
  </footer>
</template>
