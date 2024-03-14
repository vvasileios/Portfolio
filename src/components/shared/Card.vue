<template>
  <a :href="link" class="" target="_blank" rel="noopener noreferrer">
    <div class="">
      <template v-if="icon">
        <img :src="icon" alt="Icon" class="icon" />
      </template>
      <template v-else>
        <span>{{ dates }}</span>
      </template>
    </div>
    <div class="">
      <h3>{{ title }} - {{ company }}</h3>
      <p>{{ description }}</p>
      <ul v-if="list" class="mt-2 flex flex-wrap">
        <li v-for="item in list" :key="item" class="mr-1.5 mt-2">{{ item }}</li>
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
