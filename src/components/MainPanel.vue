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
          My journey was not just a change of profession, but a leap into a
          passion that continues to grow each day.
        </p>
        <p class="mb-4">
          Since then, I've been fortunate enough to contribute to the tech
          industry, particularly in a
          <AnchorTag
            :link="'https://contractuo.com/'"
            :text="'vibrant start-up environment'"
            :about-content="true"
          />. My experiences have not only sharpened my technical skills but
          have also allowed me to immerse myself in the art of creating
          pixel-perfect, engaging, and accessible digital experiences. My
          dedication lies in crafting software that excels both in aesthetics
          and performance, ensuring an optimal balance between visual appeal and
          efficiency. This commitment to growth is what drives my continuous
          quest for knowledge in this ever-evolving field.
        </p>
        <p class="mb-4">
          Beyond the screen, I find balance in exercise, delving into books,
          enjoying quality time with my girlfriend, and embracing the simple joy
          of long walks. These moments away from the keyboard are crucial,
          providing fresh perspectives and inspiration that fuel my professional
          journey.
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

        <AnchorTag :text="'View Full Resume'" />
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
        <AnchorTag :text="'View Full Project Archive'" />
      </template>
    </content-section>

    <Footer />
  </main>
</template>

<script>
import ContentSection from "./shared/ContentSection.vue";
import Card from "./shared/Card.vue";
import AnchorTag from "./shared/AnchorTag.vue";
import Footer from "./shared/Footer.vue";
import {
  experienceContent,
  educationContent,
  projectsContent,
} from "@/content/texts.js";

export default {
  name: "MainPanel",

  components: {
    ContentSection,
    Card,
    Footer,
    AnchorTag,
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
