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
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const torchStyle = computed(() => {
  const circleSize = 600;
  const halfCircleSize = circleSize / 2;

  return {
    top: `${mouseY.value - halfCircleSize}px`,
    left: `${mouseX.value - halfCircleSize}px`,
    background: `radial-gradient(${circleSize}px circle at ${mouseX.value}px ${mouseY.value}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };
});
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    :style="torchStyle"
  ></div>
</template>
