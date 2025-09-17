import { python, c, cpp, java } from '../assets';
import { weatherpedia, mhft, CompileVortex } from '../assets';
import { mathwork, edunet, eduskill } from '../assets';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "Tableau", icon: c },
  { title: "Power BI", icon: cpp },
  { title: "SQL", icon: java },
];

export const experiences = [
  {
    title: "Database Administrator",
    company_name: "INSFP - Martyr Larbi Ben M'hidi | Mila",
    icon: mathwork,
    iconBg: "#161329",
    date: "Feb 2025 - July 2025",
    points: [
      "Architected the back-end on Microsoft SQL Server for persistent data storage, capable of handling over 1,000 student records with efficient query performance",
      "Designed the user interface with the VCL framework and Figma to provide an intuitive and efficient user experience",
      "Implemented a comprehensive student management system, including features for student registration, course enrollment, and academic performance tracking",
      "Developed a robust database schema to support the application, ensuring data integrity and security",
    ],
  },
  {
    title: "Data Management Intern",
    company_name: "EURL Montiko | Chelghoum Laid",
    icon: edunet,
    iconBg: "#161329",
    date: "May 2024 - Jan 2025",
    points: [
      "Completed virtual internship, gaining a strong foundation in SQL, including data analysis and processing",
      "Helped extract and organize data from different systems to create basic reports with Tableau on sales, inventory",
      "Handled the entry and maintenance of customer orders and information in the database (MySQL)",
    ],
  },
  {
    title: "Data Management Intern",
    company_name: "Bloomsbury Publishing Plc | London (Remote)",
    icon: eduskill,
    iconBg: "#161329",
    date: "June 2022 - Jan 2023",
    points: [
      "Responsible for the day-to-day operational management of databases, including performance tuning, backup and recovery, and security",
      "Performed regular checks on data to find and correct errors and inconsistencies",
      "Managed the complex process of migrating data from one database to another, ensuring data integrity is maintained",
    ],
  },
];

export const projects = [
  {
    name: "The Sahara Superpower: Algeria's Solar Potential",
    description:
      "A comprehensive data analysis project exploring the immense solar energy potential of Algeria’s southern regions—Adrar, Tamanrasset, and Illizi—by integrating geospatial data, solar irradiance metrics, and regional infrastructure insights to highlight opportunities for sustainable energy development.",
    tags: [
      { name: "Geospatial Data", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "SQL", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://salaheddineken.github.io/Algeria-s-Solar-Potentia/",
    github_link: "https://github.com/salaheddinekennouda/Algeria-s-Solar-Potential",
  },
  {
    name: "Algeria's 2020 COVID-19 Pandemic",
    description:
      "A data analysis project that explores the COVID-19 pandemic in Algeria during 2020, examining trends in cases, deaths, and hospitalizations to inform public health strategies.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:"https://salaheddineken.github.io/COVID-19-in-Algeria-2020-/",
    github_link: "https://github.com/salaheddinekennouda/Algeria-s-2020-COVID-19-Pandemic",
  },
  {
    name: "GTA VI Success Forecast",
    description:
      "A data analysis project that explores the success of the GTA VI game, examining trends in sales, reviews, and player engagement to inform marketing strategies.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },

    ],
    image: CompileVortex,
    source_code_link: "https://salaheddineken.github.io/A-Data-Driven-Prediction-for-GTA-VI/",
    github_link: "https://github.com/salaheddinekennouda/A-Data-Driven-Prediction-for-GTA-VI",
  },
];



