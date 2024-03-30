<template>
  <footer class="max-w-lg pb-16 text-sm text-slate-500 sm:pb-0">
    <p>
      Created in

      <ExternalLink
        :link="'https://code.visualstudio.com/'"
        :text="'Visual Studio Code'"
      />

      by yours truly. Built with

      <ExternalLink :link="'https://vuejs.org/'" :text="'Vue.js'" />

      and

      <ExternalLink :link="'https://tailwindcss.com/'" :text="'Tailwind CSS'" />

      , deployed with

      <ExternalLink
        :link="'https://top.host/web-hosting.htm'"
        :text="'Top.Host'"
      />. All icons are set through

      <ExternalLink
        :link="'https://fontawesome.com/'"
        :text="'Font Awesome'"
      />.
    </p>
  </footer>
</template>

<script>
import ExternalLink from "./shared/ExternalLink.vue";

export default {
  name: "Footer",

  components: {
    ExternalLink,
  },
};
</script>
