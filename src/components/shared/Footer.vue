<template>
  <footer class="max-w-lg pb-16 text-sm text-slate-500 sm:pb-0">
    <p>
      Created in

      <Anchor
        :link="'https://code.visualstudio.com/'"
        :text="'Visual Studio Code'"
      />

      by yours truly. Built with

      <Anchor :link="'https://vuejs.org/'" :text="'Vue.js'" />

      and

      <Anchor :link="'https://tailwindcss.com/'" :text="'Tailwind CSS'" />

      , deployed with

      <Anchor :link="''" :text="'Web Hosting'" />

      . Inspiration and design by

      <Anchor :link="'https://brittanychiang.com/'" :text="'Brittany Chiang'" />
    </p>
  </footer>
</template>

<script>
import Anchor from "./Anchor.vue";
export default {
  name: "Footer",

  components: {
    Anchor,
  },
};
</script>
