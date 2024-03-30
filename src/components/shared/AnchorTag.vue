<template>
  <a
    :href="link"
    :class="[
      aboutContent ? 'text-slate-200' : 'text-slate-400',
      isNextPage ? 'text-slate-50' : '',
      'group font-medium hover:text-teal-300 focus:text-teal-300',
    ]"
    target="_blank"
    rel="noreferrer noopener"
  >
    {{ text }}
    <font-awesome-icon
      v-if="isNextPage"
      :icon="['fas', 'arrow-right']"
      class="ml-2 transition-transform transform group-hover:translate-x-2 ease-in-out"
      size="sm"
    />
  </a>
</template>

<script>
export default {
  name: "AnchorTag",

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

    isNextPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
