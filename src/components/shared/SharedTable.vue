<script setup>
import PillComponent from "./PillComponent.vue";
import SharedButton from "./SharedButton.vue";

defineProps({
  tableHeaders: {
    type: Array,
    default: () => [],
  },
  tableBody: {
    type: Array,
    default: () => [],
  },
});

const handleProject = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <table class="mt-12 w-full border-collapse text-left">
    <thead
      class="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur"
    >
      <tr>
        <th
          v-for="(header, index) in tableHeaders"
          :key="index"
          :class="[
            'py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell',
            index === 1 || index === 2 ? 'hidden md:table-cell' : '',
          ]"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="project in tableBody"
        :key="project.key"
        class="border-b border-slate-300/10 last:border-none"
      >
        <td
          class="py-4 pr-4 align-top font-semibold text-sm md:text-base leading-snug text-slate-200"
        >
          {{ project.title }}
        </td>
        <td class="hidden py-4 pr-4 align-top text-sm md:table-cell">
          {{ project.made }}
        </td>
        <td class="hidden w-2/4 py-4 pr-4 align-top text-sm md:table-cell">
          <ul class="flex flex-wrap">
            <li
              v-for="(item, itemIndex) in project.items"
              :key="itemIndex"
              class="my-1 mr-1.5"
            >
              <pill-component :colors="'bg-teal-400/10 text-teal-300'">
                {{ item }}
              </pill-component>
            </li>
          </ul>
        </td>
        <td class="py-4 pr-4 align-top text-sm lg:table-cell">
          <SharedButton
            :text="'Go to Project'"
            @click="handleProject(project.link)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
