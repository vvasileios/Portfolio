<template>
  <button
    @click="navigate"
    class="group font-medium text-slate-100 hover:text-teal-300 focus:text-teal-300"
  >
    {{ text }}
    <font-awesome-icon
      :icon="['fas', 'arrow-right']"
      class="ml-2 transition-transform transform group-hover:translate-x-2 ease-in-out"
      size="sm"
    />
  </button>
</template>

<script>
export default {
  name: "InternalLink",

  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
