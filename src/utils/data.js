import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
export const projectExperience = [
  {
    name: "Front End Projects",
    projects: 2,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Full Stack Projects",
    projects: 3,
    icon: FaDatabase,
    bg: "#EEC048",
  },
  {
    name: "C++ Projects",
    projects: 2,
    icon: CgGames,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "A Beginner Web Developer, Competitive Programmer, And Open Source Enthusiast. Crafting Visually Stunning Websites , Solving Coding Challenges, And Contributing To Open Source Projects Drive My Passion.",
  " Eager To Learn, Grow, And Explore Emerging Technologies.",
];

export const workExp = [
  {
    place: "Student",
    tenure: "July 2018 - May 2019",
    role: "10th Standard Secondary School Education",
    detail:
      "Student at Nav Krishna Valley Gurukul Sangli Maharashtra",
  },
  {
    place: "Student",
    tenure: "July 2020 - May 2021",
    role: "12th Standard Higher Secondary School Education",
    detail:
      "Student at Nav Krishna Valley Gurukul Sangli Maharashtra",
  },
  {
    place: "Engineering Student",
    tenure: "December 2021 - May 2025",
    role: "Computer Science Undergraduate",
    detail:
      "Pursuing Computer Science And Engineering from one of the premium institute of India , IIT ISM DHANBAD",
  },
];

export const comments = [
  {
    name: "JAVASCRIPT",
    post:"EXPERT",
    comment:
      "Utilized in projects for its ability to enhance user interaction and create dynamic features on websites, ensuring a seamless and engaging user experience.",
    img: "./js.webp",
  },
  {
    name: "C++",
    post: "EXPERT",
    comment:
      "Employed in projects due to its efficiency and performance, making it suitable for building robust systems, high-performance applications, and resource-intensive tasks.",
    img: "./c++.webp",
  },
  {
    name: "REACTJS",
    post: "INTERMEDIATE",
    comment:
      "Chosen for projects to streamline UI development, ReactJS accelerates the creation of modern, responsive web applications, enhancing user interfaces and facilitating efficient updates.",
    img: "./react-logo.webp",
  },
  {
    name: "CSS",
    post: "INTERMEDIATE",
    comment:
      "Integral to projects for styling and layout, CSS ensures visually appealing and responsive design, contributing to a polished and user-friendly appearance of web applications.",
    img: "./css.webp",
  },
  {
    name: "HTML",
    post: "EXPERT",
    comment:
      "Essential in projects as the fundamental markup language, HTML structures content and forms the backbone of web pages, enabling effective presentation and communication of information.",
    img: "./html.webp",
  },
  {
    name: "NODEJS",
    post: "BEGGINER",
    comment:
      "Selected for projects to build scalable server-side applications and APIs, NodeJS excels in handling concurrent connections, making it ideal for real-time applications and efficient server-side development.",
    img: "./nodejs.webp",
  },
  {
    name: "EXPRESSJS",
    post: "BEGINNER",
    comment:
      "Integrated into projects for its simplicity and flexibility in building robust web applications and APIs, ExpressJS streamlines server-side development and enhances project scalability.",
    img: "./express.webp",
  },
  {
    name: "MONGODB",
    post: "INTERMEDIATE",
    comment:
      "Adopted for projects requiring a scalable and high-performance database solution, MongoDB's NoSQL architecture is suitable for real-time big data processing and content management.",
    img: "./mongodb-logo.webp",
  },
  {
    name: "SQL",
    post: "EXPERT",
    comment:
      "Implemented in projects that involve relational databases, SQL is crucial for managing and querying structured data, ensuring data integrity, and supporting a wide range of applications such as business systems and analytics tools.",
    img: "./sql.webp",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
