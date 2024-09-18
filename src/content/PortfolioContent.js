export const headerContent = {
    name: "Vasileios Vasileiadis",
    role: "Software Developer",
    intro: "Creating impactful digital experiences through innovative coding and ongoing learning.",
};

export const experienceContent = {
    id: "experience",
    title: "Experience",
    technicalExperience: [
        {
            dates: "April 2024 - Present",
            title: "Software Developer ·",
            company: "StellarBlue",
            link: "https://stellarblue.eu/",
            description:
                "Developed, maintained, and deployed front-end code for software solutions in the energy sector. Collaborated in an Agile environment, quickly adapting to changing project needs to ensure the timely delivery of top-quality solutions.",
            techStack: [
                "JavaScript",
                "Vue",
                "Bootstrap",
                "C#",
                "Git",
                "HTML",
                "CSS",
            ],
        },
        {
            dates: "Aug 2023 - Feb 2024",
            title: "Software Developer ·",
            company: "Contractuo",
            link: "https://contractuo.com/",
            description:
                "Engineered and maintained front-end code for a document management system using the Vue.js framework. Utilized Object-Oriented Programming principles and the JavaScript Selection API to create a sophisticated application editor. Actively collaborated in an Agile setting, adapting swiftly to project changes to deliver high-caliber solutions on schedule.",
            techStack: [
                "JavaScript",
                "Vue",
                "TailwindCSS",
                "Git",
                "HTML",
                "CSS",
                "Figma",
            ],
        },
    ],
};

export const educationContent = {
    id: "education",
    title: "Education",
    schools: [
        {
            dates: "Oct 2022 - Dec 2024",
            title: "MSc, Information Systems ·",
            school: "DUTH",
            link: "https://mais.mst.duth.gr/",
            description:
                "Achieved an MSc in Information Systems, focusing on the synergy between technology and business, with key learnings in systems design, web programming, and AI, enhancing capabilities in developing innovative IT solutions.",
        },
        {
            dates: "Mar 2024 - Jul 2024",
            title: "Back-end Engineering ·",
            school: "TechPro Academy",
            link: "https://www.techproacademy.gr/",
            description:
                "Completed an intensive Back-end Engineering bootcamp, gaining hands-on experience in back-end development technologies, with a focus on real-world application and project-based learning.",
        },
        {
            dates: "Oct 2013 - Jan 2021",
            title: "IM, Forestry & Management of the Environment & Natural Resources ·",
            school: "DUTH",
            link: "https://fmenr.duth.gr/",
            description:
                "Earned an Integrated Master's degree, specializing in sustainable forestry and environmental resource management, gaining insights into ecological conservation and sustainability practices, geared towards addressing global environmental issues.",
        },
    ],
};

import WeatherWidget from "/assets/images/WeatherWidget.png";
import Timeseries from "/assets/images/Timeseries.png";
import ComingSoon from "/assets/images/ComingSoon.png";

export const projectsContent = {
    id: "projects",
    title: "Projects",
    projects: [
        {
            icon: ComingSoon,
            title: "OnWoodByPatelis",
            link: "https://onwoodbypatelis.com",
            description:
                "Built a WordPress website for a furniture company, featuring a modern design and user-friendly interface. The site showcases the company's products and services, with a focus on high-quality visuals and engaging content. Key features include a product catalog, image galleries, and contact forms, providing a comprehensive online presence for the business.",
            techStack: ["WordPress", "PHP", "HTML", "CSS"],
        },
        {
            icon: ComingSoon,
            title: "Book Catalog RESTful API",
            link: "https://github.com/vvasileios/book-catalog",
            description:
                "Developed a RESTful API for a book catalog system, enabling users to manage book data, including titles, authors, and genres. Implemented CRUD operations for book entities, with secure authentication and authorization features. The API was built using Java, SpringBoot, and Spring Data JPA, with a H2 In-Memory database.",
        },
        {
            icon: WeatherWidget,
            title: "Weather Widget",
            link: "https://github.com/vvasileios/WeatherWidget",
            description:
                "Created a Vue.js application designed to provide comprehensive weather information and forecasts. It features a responsive interface that allows users to access real-time weather data, including temperature, humidity, wind speed, and more.The widget offers a forecast feature up to 6 days in advance, complete with a line chart visualization of temperature trends over the week.",
            techStack: ["JavaScript", "Vue", "TailwindCSS"],
        },
        {
            icon: Timeseries,
            title: "Time-Series Visualization",
            link: "https://github.com/vvasileios/timeseries-visualization",
            description:
                "Created a Vue.js application for visualizing time-series data, featuring interactive line charts and tables. The tool allows users to filter data by date and toggle visibility of different datasets, enhancing the analytical experience. Key functionalities include data representation from JSON datasets, customizable date range filtering, and user-controlled dataset visibility, making it an effective solution for understanding and analyzing time trends.",
            techStack: ["JavaScript", "Vue", "TailwindCSS"],
        },
    ],
};

export const tableContent = {
    tableProjects: [
        {
            title: "OnWoodByPatelis",
            items: ["WordPress", "PHP", "HTML", "CSS"],
            link: "https://onwoodbypatelis.com",
        },
        {
            title: "Portfolio",
            items: [
                "Vue 3",
                "Vuex",
                "VueRouter",
                "JavaScript",
                "TailwindCSS",
                "Git",
                "HTML",
                "CSS",
            ],
            link: "https://vvasileios.com",
        },
        {
            title: "Book Catalog RESTful API",
            items: [
                "Java",
                "SpringBoot",
                "Spring Data JPA",
                "Spring Security",
                "H2 Database",
                "Maven",
                "JUnit",
                "Postman",
                "Swagger",
            ],
            link: "https://github.com/vvasileios/book-catalog",
        },
        {
            title: "MultiVenture",
            items: [
                "Vue 3",
                "Pinia",
                "VueRouter",
                "Typescript",
                "TailwindCSS",
                "HTML",
                "CSS",
            ],
            link: "",
        },
        {
            title: "WeatherWidget",
            items: [
                "Vue 3",
                "Vuex",
                "JavaScript",
                "TailwindCSS",
                "HTML",
                "CSS",
            ],
            link: "https://github.com/vvasileios/WeatherWidget",
        },
        {
            title: "Time-Series Visualization",
            items: [
                "Vue 3",
                "Vuex",
                "JavaScript",
                "TailwindCSS",
                "HTML",
                "CSS",
            ],
            link: "https://github.com/vvasileios/timeseries-visualization",
        },
        {
            title: "Spaceflight News Blog",
            items: [
                "Vue 3",
                "Vuex",
                "VueRouter",
                "JavaScript",
                "TailwindCSS",
                "Git",
                "HTML",
                "CSS",
            ],
            link: "",
        },
        {
            title: "Ever-Clean",
            items: ["JavaScript", "HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
            link: "",
        },
        {
            title: "FaceRecognition App",
            items: [
                "React",
                "Bootstrap",
                "JavaScript",
                "HTML",
                "CSS",
                "Node.js",
                "Express.js",
                "PostgreSQL",
            ],
            link: "",
        },
        {
            title: "MicroProjectsHub",
            items: ["JavaScript", "HTML", "CSS"],
            link: "https://github.com/vvasileios/MicroProjectsHub",
        },
    ],
};

import javascript from "/assets/icons/javascript.png";
import typescript from "/assets/icons/typescript.png";
import vue from "/assets/icons/vue.png";
import tailwind from "/assets/icons/tailwindcss.png";
import bootstrap from "/assets/icons/bootstrap.png";
import html from "/assets/icons/html.png";
import css from "/assets/icons/css.png";
import java from "/assets/icons/java.png";
import springboot from "/assets/icons/springboot.png";
import csharp from "/assets/icons/csharp.png";
import git from "/assets/icons/git.png";
import sql from "/assets/icons/sql.png";
import node from "/assets/icons/node.png";
import express from "/assets/icons/express.png";
import php from "/assets/icons/php.png";
import wordpress from "/assets/icons/wordpress.png";
import react from "/assets/icons/react.png";

export const techIcons = [
    { src: javascript, alt: "JavaScript" },
    { src: vue, alt: "Vue" },
    { src: typescript, alt: "TypeScript" },
    { src: php, alt: "PHP" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: tailwind, alt: "TailwindCSS" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: react, alt: "React" },
    { src: node, alt: "Node" },
    { src: express, alt: "Express" },
    { src: csharp, alt: "C#" },
    { src: java, alt: "Java" },
    { src: springboot, alt: "SpringBoot" },
    { src: sql, alt: "SQL" },
    { src: git, alt: "Git" },
    { src: wordpress, alt: "Wordpress" },
];
