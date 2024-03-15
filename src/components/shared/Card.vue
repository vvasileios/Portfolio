<template>
  <a
    :href="link"
    class="mb-12 group grid sm:grid-cols-7 grid-cols-1"
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
        class="mt-1 font-medium leading-snug text-slate-200 group-hover:text-teal-300"
      >
        {{ title }} {{ company }}
      </h3>
      <p class="mt-2 text-sm leading-normal">{{ description }}</p>
      <ul v-if="list" class="mt-2 flex flex-wrap">
        <li v-for="item in list" :key="item" class="mr-1.5 mt-2">
          {{ item }}
        </li>
      </ul>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",

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
