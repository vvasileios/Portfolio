<script setup>
defineProps({
    id: {
        type: String,
        default: "",
    },

    title: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <section
        class="scroll-mt-16 mb-12 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        :id="id"
    >
        <h2 class="mb-5 mt-16 text-slate-200 font-bold uppercase lg:sr-only">
            {{ title }}
        </h2>
        <slot name="content" />
    </section>
</template>
