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
          <li v-for="(section, index) in sections" :key="index">
            <a
              :href="`#${section}`"
              @click="updateSelectedSection(section)"
              :class="{
                'text-slate-200 uppercase': activeSection === section,
              }"
              class="text-sm font-bold"
            >
              {{ section }}
            </a>
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="ml-3 transition duration-500"
              :class="{
                'transition rotate-180 duration-500 text-slate-200':
                  activeSection === section,
              }"
            />
          </li>
        </ul>
      </nav>
    </div>

    <ul class="ml-3 mt-8 flex items-center">
      <li class="mr-5 shrink-0">
        <a
          href="https://github.com/vvasileios"
          :class="socialClasses"
          aria-label="Github"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
        </a>
      </li>
      <li class="mr-5 shrink-0">
        <a
          href="https://www.linkedin.com/in/vasileios-vasileiadis-999405221/"
          :class="socialClasses"
          aria-label="LinkedIn"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
        </a>
      </li>
      <li class="mr-5 shrink-0">
        <a
          href="https://www.instagram.com/vasilis_vasil/"
          :class="socialClasses"
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
