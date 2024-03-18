<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
  >
    <div>
      <h1 class="text-4xl text-slate-200 font-bold tracking-tight sm:text-5xl">
        {{ headerContent.name }}
      </h1>
      <h2
        class="mt-3 ml-2 text-lg text-slate-200 font-medium tracking-tight sm:text-xl"
      >
        {{ headerContent.role }}
      </h2>
      <p class="mt-4 ml-2 max-w-xs leading-normal">
        {{ headerContent.intro }}
      </p>
      <nav class="nav hidden lg:block">
        <ul class="mt-16 ml-2 w-max">
          <li>
            <a href="#about" @click="updateSelectedSection('about')"> About </a>
          </li>
          <li>
            <a href="#experience" @click="updateSelectedSection('experience')">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" @click="updateSelectedSection('education')">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" @click="updateSelectedSection('projects')">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <ul class="ml-3 mt-8 flex items-center">
      <li class="mr-5 text-xs shrink-0"><a href="">Github</a></li>
      <li class="mr-5 text-xs shrink-0"><a href="">LinkedIn</a></li>
      <li class="mr-5 text-xs shrink-0"><a href="">Instagram</a></li>
    </ul>
  </header>
</template>

<script>
import { headerContent } from "@/content/texts";

export default {
  data() {
    return {
      headerContent,
    };
  },

  methods: {
    updateSelectedSection(section) {
      console.log(section);
      this.$store.dispatch("updateActiveSection", section);
    },
  },
};
</script>
