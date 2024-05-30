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

const torchStyle = computed(() => {
  return {
    top: `${mouseY.value}px`,
    left: `${mouseX.value}px`,
  };
});

const handleMouseMove = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};
</script>

<template>
  <div class="torch" :style="torchStyle"></div>
</template>

<style scoped>
.torch {
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
  z-index: 9999;
}
</style>
