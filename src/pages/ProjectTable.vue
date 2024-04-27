<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SharedTable from "@/components/shared/SharedTable.vue";
import SharedButton from "@/components/shared/SharedButton.vue";
import { tableContent } from "@/content/texts";

const router = useRouter();
const tableHeaders = ref(["Project", "Made For", "Build with", "Link"]);

const handleBack = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:py-24">
      <SharedButton
        :text="'Vasileios Vasileiadis'"
        is-back
        @click="handleBack"
      />
      <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Projects
      </h1>
      <SharedTable
        :table-headers="tableHeaders"
        :table-body="tableContent.tableProjects"
      />
    </div>
  </div>
</template>
