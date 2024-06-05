<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const handleMouseMove = (event) => {
  mouseX.value = event.pageX;
  mouseY.value = event.pageY;
};

const torchStyle = computed(() => {
  const transparency = windowWidth.value <= 1500 ? "50%" : "80%";
  const color =
    windowWidth.value <= 1500
      ? "rgba(29, 78, 216, 0.3)"
      : "rgba(29, 78, 216, 0.2)";

  return {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `radial-gradient(circle 600px at ${mouseX.value}px ${mouseY.value}px, ${color}, transparent ${transparency})`,
  };
});
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    :style="torchStyle"
  ></div>
</template>
