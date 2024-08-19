import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ineuronp,
  evottop,
  threejs,
  quiet,       // Add new import
  codesync,    // Add new import
  iit         // Add new import
} from "../assets";

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

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer Intern",
    company_name: "INeuron",
    icon: ineuronp,
    iconBg: "#383E56",
    date: "July 2023 - Sept 2023",
    points: [
      "Developing and maintaining web applications by integrating OpenWeatherMap, WeatherAPI, and Climacell APIs using a global JavaScript class, which improved data accuracy by 30%.",
      "Collaborating with cross-functional teams to add features like air quality, UV index, and 7-day forecasts; implemented custom alerts, which increased user engagement by 25%.",
      "Implementing responsive design and ensuring cross-browser compatibility by using Chart.js for interactive charts of 12 months’ historical data, enhancing data insights.",
      "Participating in code reviews and providing constructive feedback to improve the overall quality and performance of the web application.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Evotto",
    icon: evottop,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Company Overview: Leveraging electric vehicles with advanced display screens, Evotto ADSMITH delivers innovative and eco-friendly advertising solutions.",
  "Front-End Development: Engineered a dynamic Order Booking Page using React.js and Redux, optimizing state management and user interaction for ad customization and calendar integration.",
  "Back-End Development: Developed and deployed RESTful APIs with Node.js and Express.js, integrating MongoDB to enhance user authentication and ad booking, resulting in improved data handling efficiency and system scalability."
    ],
  },
];

const testimonials = [
  
  // {
  //   testimonial:
  //     "Yet to Come.",
  
  // }
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "",
  // },
];

const projects = [
  {
    name: "Quiet-Center",
    description:
      "QuietCenter is a project focused on providing tools and resources for individuals to achieve mental and emotional well-being. This Project is committed to helping individuals find tranquility in their daily lives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: quiet,
    source_code_link: "https://github.com/Anurag29Nitrr/QuietCenter",
  },
  {
    name: "CodeSync(Realtime-Code-Editor)",
    description:
      "A dynamic environment that allows interviewers to assess candidates’ problem-solving abilities and coding proficiency as they write code. This real-time evaluation enhances the accuracy of technical assessments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: codesync,
    source_code_link: "https://github.com/Anurag29Nitrr/CodeSync-Realtime-Code-Editor-",
  },
  {
    name: "Network Anomaly Detector",
    description:
      "Built this project at Tech Future Hackathon 2024, IIT Delhi, Successfully identified and mitigated network anomalies.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: " SciKit Learn",
        color: "pink-text-gradient",
      },
    ],
    image: iit,
    source_code_link: "https://github.com/Anurag29Nitrr/Anamoly-Detection-Project-Binary-Bugs",
  },
];

export { services, technologies, experiences, testimonials, projects };
