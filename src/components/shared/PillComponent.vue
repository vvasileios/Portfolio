<script setup>
defineProps({
    colors: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <span :class="colors" class="rounded-full py-1 px-3 text-sm">
        <slot />
    </span>
</template>
