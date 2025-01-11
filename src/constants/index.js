import medical from "../assets/projects/medical.jpeg";
import rctmod from "../assets/projects/rctmod.png";
import react from "../assets/projects/react.png";
import heroSecurity from "../assets/projects/heroSecurity.webp";
import healthSdk from "../assets/projects/healthSdk.png";
import amani from "../assets/projects/amani.jpeg";

export const EXPERIENCES = [
  {
    year: "Jul 2020 - Present",
    role: "SDE 2",
    company: "Unthinkable Solutions",
    description:
      "Experienced mobile app developer with over 4.5 years of expertise in Mobile app development. Skilled in React Native, React, JS, TypeScript, Redux Core Java, and Kotlin. Committed to delivering high-quality & innovative solutions.",
    technologies: ["React", "React.js", "Javascript", "Typescript", "Android"],
  },
];

export const EDUCATION = [
  {
    year: "Sep 2020 - Sep 2022",
    degree: "Masters in Computer Application",
    college:
      "Maharaja agrasen institute of management & technology, Yamunanagar 135001, Haryana.",
    mode: "[Non-Attending]",
  },
  {
    year: "Jul 2017 - Sep 2020",
    degree: "Bachelors in Computer Application",
    college:
      "TilakRaj chadha institute of management & technology, Yamunanagar 135001, Haryana.",
  },
];

export const PROJECTS = [
  {
    title: "Medical Legal & Telemedicine Solution",
    image: medical,
    description: `It consists of multiple react native applications that provides healthcare services directly from your phone & helps patients to connect to Medical Practitioner over a video call and get advice from them.`,
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Context",
      "Redux",
    ],
  },
  {
    title: "React modules",
    image: rctmod,
    description: `It is basically a collection of multiple standalone libraries built for providing common api service, feature-flagging, navigation libraries and multiple flows used in the project.`,
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Context",
      "Firebase",
    ],
  },
  {
    title: "Medical Profile & Payment Web module",
    image: react,
    description: `Medical Profile Web Application created in ReactJs that allows the user to fill in their medical history.

    Payment module created in React JS for seamless payment gateway experience utilizing stripe as the payment library`,
    technologies: ["HTML", "React.js", "Tailwind"],
  },
  {
    title: "Hero Security (Antivirus & Optimizer)",
    image: heroSecurity,
    description: `This is an Android application that allows users to scan their installed applications in device for viruses, connect to a VPN, use the QR scanner and many other features such as junk cleaner, battery optimiser, storage optimiser & App locker`,
    technologies: ["Android", "Java", "Kotlin"],
  },
  {
    title: "Device Health Sdk",
    image: healthSdk,
    description: `FS Security Device Health Check Library is an Android SDK which provides a mechanism to check a phone's hardware, sensors and components to make sure everything is working properly for the purpose of mobile device insurance`,
    technologies: ["Android", "Java", "Kotlin"],
  },
  {
    title: "Amani",
    image: amani,
    description: `It was an Android SDK built for the KYC process used in banks or in other identity verification. It had several steps like capturing and uploading documents(Passport, Driving license), selfie, Address proof or personal details for the verification of user.
`,
    technologies: ["Android", "Java"],
  },
];

export const MY_DETAILS = {
  NAME: "Geetanshu Batra",
  DOMAIN: "Mobile App & Web Developer",
  ADDRESS: "6/745 Brij Vihar, Saharanpur 247001, U.P.",
  PHONE: "7300 80 4841",
  EMAIL: "batra.geet01@gmail.com",
  SUMMARY_CONTENT: `I am an experienced mobile app and web developer with over 4.5 years of expertise in creating innovative, high-quality applications. I am highly skilled in React Native, React.js, JavaScript, TypeScript, Redux, Core Java, and Kotlin. Throughout my career, I have successfully developed and delivered multiple mobile applications for a wide range of industries, from startups to large enterprises.
    
  I am committed to building scalable, efficient, and user-friendly solutions while adhering to best practices and clean coding principles. My focus is on delivering high-performance applications that meet both user needs and business goals. I am a proactive problem solver, always eager to learn and stay up to date with emerging technologies to provide cutting-edge solutions in every project I undertake.`,
  ABOUT_TEXT: `I am a dedicated and versatile mobile app and web developer with a passion for creating efficient and user-friendly applications. With 4.5 years of professional experience, I have worked with a variety of technologies, including React Native, React.js, Android, JavaScript, TypeScript, Java & Kotlin. My journey in development began with a deep curiosity for how applications and websites work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, reading self-help books, working out, exploring new technologies, and contributing to open-source projects.`,
  GITHUB: "https://github.com/batra-geet?tab=repositories",
  LINKEDIN: "https://www.linkedin.com/in/geetanshu-batra-004875159",
};

export const APP_CONSTANTS = {
  ABOUT: " About ",
  ME: " Me ",
  TECHNOLOGIES: " Technologies ",
  EXPERIENCE: " Experience ",
  PROJECTS: " Projects ",
  GET_IN_TOUCH: " Get in Touch ",
  EDUCATION: " Education ",
  CONTACT_ME: "Contact me",
  GITHUB: "Github",
  LINKEDIN: "LinkedIn",
  DOWNLOAD_RESUME: "Download Resume",
};

export const SKILLS = {
  REACT: "React",
  ANDROID: "Android",
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  TAILWIND: "Tailwind",
  HTML: "HTML",
  CSS: "CSS",
};
