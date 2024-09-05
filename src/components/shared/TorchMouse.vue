<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);
const scrollX = ref(window.scrollX);
const scrollY = ref(window.scrollY);
const isMobile = ref(window.innerWidth <= 768);

onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
    isMobile.value = window.innerWidth <= 768;
};

const handleMouseMove = (event) => {
    if (isMobile.value) return;
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
};

const handleScroll = () => {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
};

const torchStyle = computed(() => {
    const transparency = windowWidth.value <= 1500 ? "50%" : "80%";
    const color =
        windowWidth.value <= 1500
            ? "rgba(29, 78, 216, 0.3)"
            : "rgba(29, 78, 216, 0.2)";

    const adjustedX = isMobile.value
        ? windowWidth.value / 2
        : mouseX.value + scrollX.value;
    const adjustedY = isMobile.value
        ? window.innerHeight / 2
        : mouseY.value + scrollY.value;

    return {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `radial-gradient(circle 600px at ${adjustedX}px ${adjustedY}px, ${color}, transparent ${transparency})`,
    };
});
</script>

<template>
    <div
        class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        :style="torchStyle"
    ></div>
</template>
