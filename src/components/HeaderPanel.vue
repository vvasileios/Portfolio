<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { headerContent, techIcons } from "@/content/PortfolioContent";

const store = useStore();

const headerContentRef = ref(headerContent);
const socialClasses = ref("hover:text-teal-300 focus:text-teal-300");
const sections = ref(["about", "experience", "education", "projects"]);

const activeSection = computed(() => store.getters.getActiveSection);

const updateSelectedSection = (section) =>
  store.dispatch("updateActiveSection", section);
</script>

<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
  >
    <div class="mb-10">
      <h1 class="text-4xl text-slate-200 font-bold tracking-tight sm:text-5xl">
        {{ headerContentRef.name }}
      </h1>
      <h2
        class="mt-3 ml-2 text-lg text-slate-200 font-medium tracking-tight sm:text-xl"
      >
        {{ headerContentRef.role }}
      </h2>
      <p class="mt-4 ml-2 max-w-xs leading-normal">
        {{ headerContentRef.intro }}
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

      <div class="mt-16 lg:mr-24 mr-5">
        <ul class="flex gap-5 flex-wrap py-5">
          <li v-for="(icon, index) in techIcons" :key="index">
            <img :src="icon.src" :alt="icon.alt" class="w-8 h-8" />
          </li>
        </ul>
      </div>
    </div>

    <ul class="ml-3 mt-8 flex items-center">
      <li class="mr-5 shrink-0">
        <a
          :class="socialClasses"
          href="https://github.com/vvasileios"
          target="_blank"
          aria-label="Github"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
        </a>
      </li>
      <li class="mr-5 shrink-0">
        <a
          :class="socialClasses"
          href="https://www.linkedin.com/in/vasileios-vasileiadis-999405221/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
        </a>
      </li>
      <li class="mr-5 shrink-0">
        <a
          :class="socialClasses"
          href="https://www.instagram.com/vasilis_vasil/"
          target="_blank"
          aria-label="Instagram"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
        </a>
      </li>
    </ul>
  </header>
</template>
