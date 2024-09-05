<script setup>
defineProps({
    link: {
        type: String,
        default: "",
    },

    text: {
        type: String,
        default: "",
    },

    aboutContent: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <a
        :href="link"
        :class="[
            aboutContent
                ? 'text-slate-200 focus:text-slate-200'
                : 'text-slate-400 focus:text-slate-400',
            'group font-medium hover:text-teal-300 ',
        ]"
        target="_blank"
        rel="noreferrer noopener"
    >
        {{ text }}
    </a>
</template>
