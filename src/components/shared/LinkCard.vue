<template>
  <a
    :href="link"
    class="mb-12 group grid sm:grid-cols-7 grid-cols-1 rounded transition duration-300 ease-in-out transform hover:scale-105"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="col-span-2">
      <img v-if="icon" :src="icon" alt="Icon" />

      <span
        v-else
        class="text-xs font-semibold uppercase tracking-wide text-slate-500"
      >
        {{ dates }}
      </span>
    </div>

    <div class="col-span-5">
      <h3
        class="font-medium leading-snug text-slate-200 group-hover:text-teal-300 group-focus:text-slate-300 transition-colors duration-300"
      >
        {{ title }} {{ company }}

        <font-awesome-icon
          :icon="['fa', 'link']"
          class="pl-2 group-hover:text-teal-300 group-focus:text-slate-300 group-hover:-translate-y-0.5 group-hover:transition group-hover:rotate-45 group-hover:duration-500"
          size="sm"
        />
      </h3>

      <p class="mt-2 text-sm leading-normal">{{ description }}</p>
      <ul v-if="list" class="mt-2 flex flex-wrap">
        <li v-for="item in list" :key="item" class="mr-1.5 mt-2">
          <Pill :colors="'bg-teal-400/10 text-teal-300'">
            {{ item }}
          </Pill>
        </li>
      </ul>
    </div>
  </a>
</template>

<script>
import Pill from "./Pill.vue";
export default {
  name: "LinkCard",

  components: {
    Pill,
  },

  props: {
    icon: {
      type: String,
      default: "",
    },

    dates: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "",
    },

    company: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },

    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
