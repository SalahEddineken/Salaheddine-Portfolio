// Removed direct imports from ../assets to avoid import-time failures.
// Use null or empty-string placeholders for icons/images so the file never throws.

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
  { title: "Python", icon: "/src/assets/tech-stack/python.png" },
  { title: "C", icon: "/src/assets/tech-stack/c.png" },
  { title: "C++", icon: "/src/assets/tech-stack/cpp.png" },
  { title: "Java", icon: "/src/assets/tech-stack/java.png" },
];

export const experiences = [
  {
    title: "Database Administrator",
    company_name: "INSFP - Martyr Larbi Ben M'hidi | Mila",
    icon: "/src/assets/company/mathwork.png",
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
    icon: "/src/assets/company/edunet.png",
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
    icon: "/src/assets/company/eduskill.png",
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
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: "/src/assets/projects/WeatherPedia.png",
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: "/src/assets/projects/termpw.png",
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: "/src/assets/projects/mhft.png",
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [{ name: "Shell", color: "blue-text-gradient" }],
    image: "/src/assets/projects/payloadmaster.png",
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "A web-based code compilation platform that supports multiple programming languages and provides real-time compilation results.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: "/src/assets/projects/CompileVortex.png",
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: "/src/assets/projects/sketcher.png",
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];



