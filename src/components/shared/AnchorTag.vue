<template>
  <a
    :href="link"
    :class="[
      aboutContent ? 'text-slate-200' : 'text-slate-400',
      isLink ? 'text-slate-100' : '',
      'group font-medium hover:text-teal-300 focus:text-teal-300',
    ]"
    target="_blank"
    rel="noreferrer noopener"
  >
    {{ text }}
    <font-awesome-icon
      v-if="isLink"
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

    isLink: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
