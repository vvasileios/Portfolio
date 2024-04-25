<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  text: {
    type: String,
    default: "",
  },

  to: {
    type: String,
    default: "",
  },

  path: {
    type: String,
    default: "",
  },
});

const navigate = (path) => {
  if (path) {
    window.open(path, "_blank");
  } else {
    router.push(to);
  }
};
</script>

<template>
  <button
    class="group font-medium text-slate-100 hover:text-teal-300 focus:text-slate-100"
    @click="navigate(path)"
  >
    {{ text }}
    <font-awesome-icon
      :icon="['fas', 'arrow-right']"
      class="ml-2 transition-transform transform group-hover:translate-x-2 ease-in-out"
      size="sm"
    />
  </button>
</template>
