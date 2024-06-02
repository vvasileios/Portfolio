<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  isBack: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button
    class="group font-medium text-slate-100 hover:text-teal-300 focus:text-slate-100"
    @click="handleClick"
  >
    <font-awesome-icon
      v-if="isBack"
      :icon="['fas', 'arrow-left']"
      class="mr-2 transition-transform transform group-hover:-translate-x-2 ease-in-out"
      size="sm"
    />
    {{ text }}
    <font-awesome-icon
      v-if="!isBack"
      :icon="['fas', 'arrow-right']"
      class="ml-2 transition-transform transform group-hover:translate-x-2 ease-in-out"
      size="sm"
    />
  </button>
</template>
