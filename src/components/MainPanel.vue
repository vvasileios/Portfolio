<template>
  <main class="pt-24 lg:w-1/2 lg:py-24">
    <content-section :id="aboutContent.id" :title="aboutContent.title">
      <template #content>
        <p
          v-for="(text, index) in aboutContent.paragraphs"
          :key="index"
          class="mb-4"
        >
          {{ text }}
        </p>
      </template>
    </content-section>

    <content-section
      :id="experienceContent.id"
      :title="experienceContent.title"
    >
      <template #content>
        <Card
          v-for="job in experienceContent.technicalExperience"
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

    <content-section :id="educationContent.id" :title="educationContent.title">
      <template #content>
        <Card
          v-for="school in educationContent.schools"
          :key="school.key"
          :dates="school.dates"
          :title="school.title"
          :company="school.school"
          :description="school.description"
          :link="school.link"
        />
      </template>
    </content-section>

    <content-section :id="projectsContent.id" :title="projectsContent.title">
      <template #content>
        <Card
          v-for="project in projectsContent.projects"
          :key="project.key"
          :icon="project.icon"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :list="project.techStack"
        />
      </template>
    </content-section>
  </main>
</template>

<script>
import ContentSection from "./shared/ContentSection.vue";
import Card from "./shared/Card.vue";
import {
  aboutContent,
  experienceContent,
  educationContent,
  projectsContent,
} from "@/content/texts.js";

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
      educationContent,
      projectsContent,
    };
  },
};
</script>
