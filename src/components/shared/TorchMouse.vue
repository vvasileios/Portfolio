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
  mouseX.value = event.pageX;
  mouseY.value = event.pageY;
};

const torchStyle = computed(() => {
  return {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `radial-gradient(circle 600px at ${mouseX.value}px ${mouseY.value}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };
});
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    :style="torchStyle"
  ></div>
</template>
