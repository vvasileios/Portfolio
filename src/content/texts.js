export const headerContent = {
  name: "Vasileios Vasileiadis",
  role: "Software Developer",
  intro:
    "Crafting engaging digital experiences through code and continuous learning.",
};

// export const aboutContent = {
//   id: "about",
//   title: "About",
//   paragraphs: [
//     "In early 2022, I embarked on a transformative journey, pivoting my career towards the dynamic realm of software development. This decisive shift was fueled by a blend of self-directed learning and a rigorous Master of Science in Information Systems, which together plunged me into the exhilarating world of coding and web development. My journey was not just a change of profession, but a leap into a passion that continues to grow each day.",
//     "Since then, I've been fortunate enough to contribute to the tech industry, particularly in a vibrant start-up environment. My experiences have not only sharpened my technical skills but have also allowed me to immerse myself in the art of creating pixel-perfect, engaging, and accessible digital experiences. My dedication lies in crafting software that excels both in aesthetics and performance, ensuring an optimal balance between visual appeal and efficiency. This commitment to growth is what drives my continuous quest for knowledge in this ever-evolving field.",
//     "Beyond the screen, I find balance in exercise, delving into books, enjoying quality time with my girlfriend, and embracing the simple joy of long walks. These moments away from the keyboard are crucial, providing fresh perspectives and inspiration that fuel my professional journey.",
//   ],
// };

export const experienceContent = {
  id: "experience",
  title: "Experience",
  technicalExperience: [
    {
      key: "1",
      dates: "Aug 2023 - Feb 2024",
      title: "Junior Software Developer ·",
      company: "Contractuo",
      link: "https://contractuo.com/",
      description:
        "Developed, maintained, and shipped in production front-end code for the document management system using the Vue.js ecosystem. Applied OOP principles and the JavaScript Selection API to engineer an advanced application editor. Translated complex Figma designs into precise, functional code, ensuring consistency and high fidelity. Collaborated in an Agile environment, adapting efficiently to evolving project requirements, contributing to the timely delivery of high-quality solutions.",
      techStack: ["JavaScript", "Vue", "TailwindCSS", "Git"],
    },
  ],
};

export const educationContent = {
  id: "education",
  title: "Education",
  schools: [
    {
      key: "1",
      dates: "Mar 2024 - Present",
      title: "Full-stack Engineering Stream ·",
      school: "TechPro Academy",
      link: "https://www.techproacademy.gr/",
      description:
        "Participated in an intensive bootcamp at TechPro Academy, focusing on Full Stack Engineering. The program encompassed both front-end and back-end technologies, equipping participants with comprehensive skills in web development. Engaged in hands-on projects that simulated real-world challenges, fostering a deep understanding of full stack development practices from database management to user interface design. The curriculum was designed to build proficiency in a wide array of programming languages and frameworks, preparing graduates to contribute effectively to any phase of the development lifecycle",
    },
    {
      key: "2",
      dates: "Oct 2022 - Present",
      title: "MSc, Information Systems ·",
      school: "International Hellenic University",
      link: "https://mais.ihu.gr/",
      description:
        "Achieved a Master of Science in Information Systems, delving into the intricate relationship between technology, organizations, and society. The program offered a diverse curriculum, covering key areas such as Information Systems and Digital Innovation, which explored the transformative role of IT in business processes, and Information Systems Design and Development, focusing on creating robust and scalable systems. Advanced courses like Artificial Intelligence and Recent Advances in Information Systems kept pace with cutting-edge technologies, while Financial Information Systems bridged the gap between IT and financial reporting. Practical skills were honed in Web Programming and Data Analysis and Research Methods, ensuring a balanced blend of theory and application. The program also emphasized strategic decision-making through courses like Decision Support and Management Control Systems, preparing graduates to navigate complex business environments effectively",
    },
    {
      key: "3",
      dates: "Oct 2013 - Jan 2021",
      title:
        "IM, Forestry & Management of the Environment & Natural Resources ·",
      school: "Democritus University Of Thrace",
      link: "https://fmenr.duth.gr/",
      description:
        "Earned an Integrated Master's degree in Forestry & Management of the Environment & Natural Resources, focusing on the sustainable management of forest ecosystems and the stewardship of natural resources. The program provided an in-depth understanding of ecological principles, conservation strategies, and the sustainable use of natural resources. It combined rigorous academic coursework with practical field studies, preparing graduates to tackle global environmental issues. The curriculum covered a broad spectrum of topics, from forest ecology and management to environmental policy and resource economics, ensuring a comprehensive education in managing natural landscapes and resources for future generations.",
    },
  ],
};

export const projectsContent = {
  id: "projects",
  title: "Projects",
  projects: [
    {
      key: "1",
      icon: "",
      title: "Time-Series Visualization",
      link: "https://github.com/vvasileios/timeseries-visualization",
      description:
        "Created a Vue.js application for visualizing time-series data, featuring interactive line charts and tables. The tool allows users to filter data by date and toggle visibility of different datasets, enhancing the analytical experience. Key functionalities include data representation from JSON datasets, customizable date range filtering, and user-controlled dataset visibility, making it an effective solution for understanding and analyzing time trends.",
      techStack: ["JavaScript", "Vue", "TailwindCSS"],
    },
    {
      key: "2",
      icon: "",
      title: "Spaceflight News Blog",
      link: "https://github.com/vvasileios/spaceflight-news",
      description:
        "Built a Space-Flight News Blog with a Home page for article previews and a Show page for detailed views, utilizing Vue.js and Vuex. Articles are efficiently managed and dynamically retrieved, ensuring an engaging user experience with direct links to full stories, catering to space-flight enthusiasts.",
      techStack: ["JavaScript", "Vue", "TailwindCSS"],
    },
    {
      key: "3",
      icon: "",
      title: "Face Recognition",
      link: "https://github.com/vvasileios/Face-Recognition",
      description:
        "Developed a facial recognition web application with user authentication, integrating Clarifai's API. Achieved 95% accuracy in detecting facial features, showcasing the app's effectiveness.",
      techStack: ["JavaScript", "React", "Node", "Express", "PostgreSQL"],
    },
  ],
};
