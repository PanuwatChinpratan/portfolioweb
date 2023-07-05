import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Full name : ",
    description: "Panuwat Chinpratan",
  },

  {
    id: 2,
    title: "Nickname : ",
    description: "Milo",
  },

  {
    id: 3,
    title: "Age : ",
    description: "25 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Thai",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+66 945677543",
  },

  {
    id: 8,
    title: "Email : ",
    description: "60040161@kmitl.ac.th",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Thai, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "0+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "0+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "0+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "0+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Present",
    title: "inexperienced </span>",
    desc: "",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021",
    title: "King Mongkut's Institute of Technology Ladkrabang </span>",
    desc: "Bachelor of Science in Plant Production Technology",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "Nawaminthrachinuthit Suankularb Wittayalai Pathumthani </span>",
    desc: "High School Diploma",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "(basic)",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "(basic)",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "intermediate",
  },

  {
    id: 4,
    title: "MongoDB",
    percentage: "(basic)",
  },

  {
    id: 5,
    title: "NodeJS",
    percentage: "(basic)",
  },

  {
    id: 6,
    title: "Bootstrap",
    percentage: "intermediate",
  },

  {
    id: 7,
    title: "Git",
    percentage: "(basic)",
  },

  {
    id: 8,
    title: "ReactJS",
    percentage: "(basic)",
  },
  {
    id: 9,
    title: "NextJS",
    percentage: "(basic)",
  },
  {
    id: 10,
    title: "Tailwind",
    percentage: "(basic)",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://www.google.com/">Google</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://www.google.com/">Google</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://www.google.com/">Google</a>,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];