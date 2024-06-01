<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});

const handleMouseMove = (event) => {
  console.log(event.clientX, event.clientY);
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const torchStyle = computed(() => {
  console.log(mouseX.value, mouseY.value);
  return {
    top: `${mouseY.value}px`,
    left: `${mouseX.value}px`,
    background: `radial-gradient(600px circle at var('${mouseX.value}') var('${mouseY.value}'), rgba(29, 78, 216, 0.15) 80%)`,
  };
});
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    :style="torchStyle"
  ></div>
</template>
