<template>
  <a
    :href="link"
    class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
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
  },
};
</script>
