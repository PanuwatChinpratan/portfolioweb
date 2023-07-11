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

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";


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
    title: "•inexperienced </span>",
    desc: "",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021",
    title: "King Mongkut's Institute of Technology Ladkrabang </span>",
    desc: "•Bachelor of Science in Plant Production Technology",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "Nawaminthrachinuthit Suankularb Wittayalai Pathumthani </span>",
    desc: "•High School Diploma",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "(Basic)",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "(Basic)",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "(Basic)",
  },

  {
    id: 4,
    title: "MongoDB",
    percentage: "(Basic)",
  },

  {
    id: 5,
    title: "Node.js",
    percentage: "(Basic)",
  },

  {
    id: 6,
    title: "Bootstrap",
    percentage: "(Basic)",
  },

  {
    id: 7,
    title: "Git",
    percentage: "(Basic)",
  },

  {
    id: 8,
    title: "React.js",
    percentage: "(Basic)",
  },
  {
    id: 9,
    title: "Next.js",
    percentage: "(Basic)",
  },
  {
    id: 10,
    title: "Tailwind",
    percentage: "(Basic)",
  },
  {
    id: 11,
    title: "RESTful API",
    percentage: "(Basic)",
  },
  {
    id: 12,
    title: "Typescript",
    percentage: "(Soon)",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Todo List",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "HUMAN",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React.js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://todolist-pi-flame.vercel.app/" target="_blank">Todolist</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Booking",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "HUMAN",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React.js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://travel-front-delta.vercel.app/home" target="_blank">Booking</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Milo Store",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "HUMAN",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Next.js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://ecomshopping.vercel.app/" target="_blank">
            MiloStore
          </a>
        ),
      },
    ],
  },
];

