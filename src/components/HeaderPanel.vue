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
          <li
            v-for="(section, index) in sections"
            :key="index"
            class="flex items-center gap-3 mt-2"
          >
            <a
              :href="`#${section}`"
              :class="{
                'text-slate-200 uppercase': activeSection === section,
              }"
              class="text-sm font-bold"
              @click="updateSelectedSection(section)"
            >
              {{ section }}
            </a>
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              :class="{
                'transition rotate-180 duration-500 text-slate-200':
                  activeSection === section,
              }"
              class="transition duration-500"
            />
          </li>
        </ul>
      </nav>

      <div class="bg-white">
        <ul class="mt-16 ml-2 flex flex-row flex-wrap">
          <li class="mx-2 border-2 border-red-500">Javascript</li>
          <li class="mx-2 border-2 border-red-500">Typescript</li>
          <li class="mx-2 border-2 border-red-500">Vue</li>
          <li class="mx-2 border-2 border-red-500">Tailwind</li>
          <li class="mx-2 border-2 border-red-500">Bootstrap</li>
          <li class="mx-2 border-2 border-red-500">Git</li>
          <li class="mx-2 border-2 border-red-500">Terminal</li>
          <li class="mx-2 border-2 border-red-500">WordPress</li>
          <li class="mx-2 border-2 border-red-500">C#</li>
          <li class="mx-2 border-2 border-red-500">Java</li>
          <li class="mx-2 border-2 border-red-500">SpringBoot</li>
          <li class="mx-2 border-2 border-red-500">SQL</li>
          <li class="mx-2 border-2 border-red-500">PHP</li>
          <li class="mx-2 border-2 border-red-500">Express</li>
          <li class="mx-2 border-2 border-red-500">HTML</li>
          <li class="mx-2 border-2 border-red-500">CSS</li>
        </ul>
      </div>
    </div>

    <ul class="ml-3 mt-8 flex items-center">
      <li class="mr-5 shrink-0">
        <a
          :class="socialClasses"
          href="https://github.com/vvasileios"
          aria-label="Github"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
        </a>
      </li>
      <li class="mr-5 shrink-0">
        <a
          :class="socialClasses"
          href="https://www.linkedin.com/in/vasileios-vasileiadis-999405221/"
          aria-label="LinkedIn"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
        </a>
      </li>
      <li class="mr-5 shrink-0">
        <a
          :class="socialClasses"
          href="https://www.instagram.com/vasilis_vasil/"
          aria-label="Instagram"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import { headerContent } from "@/content/texts";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      headerContent,
      socialClasses: "hover:text-teal-300 focus:text-teal-300",
      sections: ["about", "experience", "education", "projects"],
    };
  },

  computed: {
    ...mapGetters({
      activeSection: "getActiveSection",
    }),
  },

  methods: {
    updateSelectedSection(section) {
      this.$store.dispatch("updateActiveSection", section);
    },
  },
};
</script>
