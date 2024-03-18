<template>
  <a
    :href="link"
    class="font-medium hover:text-teal-300 focus:text-teal-300"
    :class="[aboutContent ? 'text-slate-200' : 'text-slate-400']"
    target="_blank"
    rel="noreferrer noopener"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "Anchor",

  props: {
    link: {
      type: String,
      default: "",
    },

    text: {
      type: String,
      default: "",
    },

    aboutContent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
