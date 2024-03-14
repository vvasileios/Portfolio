<template>
  <main class="pt-24 lg:w-1/2 lg:py-24">
    <content-section :id="aboutContent.id" :title="aboutContent.title">
      <template #content>
        <p>{{ aboutContent.story }}</p>
        <p>{{ aboutContent.text }}</p>
        <p>{{ aboutContent.hobbies }}</p>
      </template>
    </content-section>

    <content-section
      :id="experienceContent.id"
      :title="experienceContent.title"
    >
      <template #content>
        <Card
          v-for="job in experienceContent.techJobs"
          :key="job.key"
          :dates="job.dates"
          :title="job.title"
          :company="job.company"
          :description="job.description"
          :link="job.link"
          :list="job.techStack"
        />
      </template>
    </content-section>

    <content-section :id="aboutContent.id" :title="aboutContent.title">
      <template #content>
        <p class="mt-5">{{ aboutContent.story }}</p>
        <p class="mt-5">{{ aboutContent.text }}</p>
        <p class="mt-5">{{ aboutContent.hobbies }}</p>
      </template>
    </content-section>

    <content-section :id="aboutContent.id" :title="aboutContent.title">
      <template #content>
        <p class="mt-5">{{ aboutContent.story }}</p>
        <p class="mt-5">{{ aboutContent.text }}</p>
        <p class="mt-5">{{ aboutContent.hobbies }}</p>
      </template>
    </content-section>
  </main>
</template>

<script>
import ContentSection from "./shared/ContentSection.vue";
import Card from "./shared/Card.vue";
import { aboutContent, experienceContent } from "@/content/texts.js";

export default {
  name: "MainPanel",

  components: {
    ContentSection,
    Card,
  },

  data() {
    return {
      aboutContent,
      experienceContent,
    };
  },
};
</script>
