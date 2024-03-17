<template>
  <span :class="colors" class="rounded-full py-1 px-3 text-sm">
    <slot />
  </span>
</template>

<script>
export default {
  name: "Pill",

  props: {
    colors: {
      type: String,
      required: true,
    },
  },
};
</script>
