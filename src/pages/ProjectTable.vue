<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TableComponent from "@/components/shared/TableComponent.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { tableContent } from "@/content/PortfolioContent";

const router = useRouter();
const tableHeaders = ref(["Project", "Build with", "Link"]);

const handleBack = () => {
    router.push("/");
};
</script>

<template>
    <div
        class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
        <div class="lg:py-24">
            <ButtonComponent
                :text="'Vasileios Vasileiadis'"
                is-back
                @click="handleBack"
            />
            <h1
                class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
            >
                Projects
            </h1>
            <TableComponent
                :table-headers="tableHeaders"
                :table-body="tableContent.tableProjects"
            />
        </div>
    </div>
</template>
