<script setup>
import { ref } from "vue";
import SharedTable from "@/components/shared/SharedTable.vue";
import { tableContent } from "@/content/texts";

const tableHeaders = ref(["Project", "Made For", "Build with", "Link"]);
</script>

<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 select-none"
  >
    <div class="lg:py-24">
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
