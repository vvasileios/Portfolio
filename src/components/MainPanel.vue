<template>
  <main class="pt-24 lg:w-1/2 lg:py-24">
    <content-section :id="this.id" :title="this.title">
      <template #content>
        <p class="mb-4">
          In early 2022, I embarked on a transformative journey, pivoting my
          career towards the dynamic realm of software development. This
          decisive shift was fueled by a blend of self-directed learning and a
          rigorous Master of Science in Information Systems, which together
          plunged me into the exhilarating world of coding and web development.
        </p>
        <p class="mb-4">
          Since then, I've been fortunate enough to contribute to the tech
          industry in a
          <ExternalLink
            :link="'https://contractuo.com/'"
            :text="'vibrant start-up environment'"
            about-content
          />, where I began honing my skills and gaining valuable experience.
          Currently, I'm part of a
          <ExternalLink
            :link="'https://stellarblue.eu/'"
            :text="'forward-thinking startup'"
            about-content
          />
          in the energy software sector, where I continuously learn and improve
          my knowledge and teamwork, contributing to innovative and sustainable
          technology solutions.
        </p>
        <p class="mb-4">
          Beyond the screen, I find balance in exercise, delving into books,
          enjoying quality time with my girlfriend, and embracing the simple joy
          of long walks.
        </p>
      </template>
    </content-section>

    <content-section
      :id="experienceContent.id"
      :title="experienceContent.title"
    >
      <template #content>
        <LinkCard
          v-for="job in experienceContent.technicalExperience"
          :key="job.key"
          :dates="job.dates"
          :title="job.title"
          :company="job.company"
          :description="job.description"
          :link="job.link"
          :list="job.techStack"
        />

        <InternalLink :text="'View Full Résumé'" :path="'/dummy.pdf'" />
      </template>
    </content-section>

    <content-section :id="educationContent.id" :title="educationContent.title">
      <template #content>
        <LinkCard
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
        <LinkCard
          v-for="project in projectsContent.projects"
          :key="project.key"
          :icon="project.icon"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :list="project.techStack"
        />
        <InternalLink :text="'View Full Project Archive'" />
      </template>
    </content-section>

    <Footer />
  </main>
</template>

<script>
import ContentSection from "./shared/ContentSection.vue";
import LinkCard from "./shared/LinkCard.vue";
import ExternalLink from "./shared/ExternalLink.vue";
import InternalLink from "./shared/InternalLink.vue";
import Footer from "./Footer.vue";
import {
  experienceContent,
  educationContent,
  projectsContent,
} from "@/content/texts.js";

export default {
  name: "MainPanel",

  components: {
    ContentSection,
    LinkCard,
    Footer,
    ExternalLink,
    InternalLink,
  },

  data() {
    return {
      experienceContent,
      educationContent,
      projectsContent,
      id: "about",
      title: "About",
    };
  },

  mounted() {
    window.addEventListener("scroll", this.updateSection);
  },

  unmounted() {
    window.removeEventListener("scroll", this.updateSection);
  },

  methods: {
    updateSection() {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 380;
        let height = section.offsetHeight;
        let sectionID = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          this.$store.commit("SET_ACTIVE_SECTION", sectionID);
        }
      });
    },
  },
};
</script>
