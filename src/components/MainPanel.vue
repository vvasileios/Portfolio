<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ContentSection from "./shared/ContentSection.vue";
import LinkCard from "./shared/LinkCard.vue";
import AnchorTag from "./shared/AnchorTag.vue";
import SharedButton from "./shared/SharedButton.vue";
import Footer from "./Footer.vue";
import {
  experienceContent,
  educationContent,
  projectsContent,
} from "@/content/texts.js";

const store = useStore();
const router = useRouter();

const experienceContentRef = ref(experienceContent);
const educationContentRef = ref(educationContent);
const projectsContentRef = ref(projectsContent);
const id = "about";
const title = "About";

const updateSection = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 380;
    let height = section.offsetHeight;
    let sectionID = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      store.commit("SET_ACTIVE_SECTION", sectionID);
    }
  });
};

const handleCV = () => {
  window.open("/dummy.pdf", "_blank");
};

const changePage = () => {
  router.push("/table");
};

onMounted(() => window.addEventListener("scroll", updateSection));

onUnmounted(() => window.removeEventListener("scroll", updateSection));
</script>

<template>
  <main class="pt-24 lg:w-1/2 lg:py-24">
    <content-section :id="id" :title="title">
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
          <AnchorTag
            :link="'https://contractuo.com/'"
            :text="'vibrant start-up environment'"
            about-content
          />, where I began honing my skills and gaining valuable experience.
          Currently, I'm part of a
          <AnchorTag
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
      :id="experienceContentRef.id"
      :title="experienceContentRef.title"
    >
      <template #content>
        <LinkCard
          v-for="job in experienceContentRef.technicalExperience"
          :key="job.key"
          :dates="job.dates"
          :title="job.title"
          :company="job.company"
          :description="job.description"
          :link="job.link"
          :list="job.techStack"
        />

        <SharedButton :text="'View Full Résumé'" @click="handleCV" />
      </template>
    </content-section>

    <content-section
      :id="educationContentRef.id"
      :title="educationContentRef.title"
    >
      <template #content>
        <LinkCard
          v-for="school in educationContentRef.schools"
          :key="school.key"
          :dates="school.dates"
          :title="school.title"
          :company="school.school"
          :description="school.description"
          :link="school.link"
        />
      </template>
    </content-section>

    <content-section
      :id="projectsContentRef.id"
      :title="projectsContentRef.title"
    >
      <template #content>
        <LinkCard
          v-for="project in projectsContentRef.projects"
          :key="project.key"
          :icon="project.icon"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :list="project.techStack"
        />

        <SharedButton :text="'View Full Project Archive'" @click="changePage" />
      </template>
    </content-section>

    <Footer />
  </main>
</template>
