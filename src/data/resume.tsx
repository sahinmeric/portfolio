import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sahin Meric",
  initials: "SM",
  url: "https://sahinmeric.com",
  location: "Bogotá, CO",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a full-stack developer. I enjoy crafting clean, efficient code and focusing on user-friendly experiences. I love tackling challenges and helping businesses thrive through technology.",
  summary: "",
  avatarUrl: "/me1.png",
  hardSkills: [
    "React",
    "Typescript",
    "JavaScript",
    "HTML",
    "CSS",
    "Material UI",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PostgreSQL",
    "GraphQL",
    "Git",
    "GitHub",
    "BitBucket",
    "CI/CD",
    "Docker",
    "AWS",
    "Linux",
    "JWT",
    "Firebase",
    "Cybersecurity",
  ],
  softSkills: [
    "Comunication",
    "Problem-solving",
    "Attention to detail",
    "Time management",
    "Self organization",
    "Ownership",
    "Analytical thinking",
    "Collaborative working",
    "Flexibility / Adaptability",
    "Desire to learn and improve",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sahinmeric22@gmail.com",
    tel: "+573027810863",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sahinmeric",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sahinmeric",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/smericdev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sahinmeric22@gmail.com",
        icon: Icons.email,

        navbar: true,
      },

      WhatsApp: {
        name: "Whatsapp",
        url: "https://wa.me/+573027810863",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MediSprout",
      href: "https://medisprout.com",
      badges: [],
      location: "Remote",
      title: "Front-end developer",
      logoUrl: "./medisprout_logo.jpg",
      start: "Oct 2022",
      end: "Jul 2024",
      description:
        "Contributed to a U.S.-based startup's mental healthcare platform, elevating user experience through the implementation of advanced web technologies and innovative design solutions.",
      tasks: [
        "Developed scalable and reusable React components.",
        "Enhanced code robustness with TypeScript.",
        "Optimized app performance and state management using React-query.",
        "Created responsive, mobile-friendly designs with Material UI.",
        "Ensured efficient, high-quality Agile deliveries with Git and BitBucket.",
      ],
    },
    {
      company: "Globant",
      href: "https://globant.com",
      badges: [],
      location: "Remote",
      title: "QA Analyst",
      logoUrl: "./globant-logo-dark.svg",
      start: "Jun 2022",
      end: "Oct 2022",
      description:
        "Executed testing, identified bugs, and reported issues via JIRA. Managed test plans in an Agile environment, ensuring high-quality product releases through detailed quality assurance processes.",
      tasks: [
        "Performed testing, identifying and reporting bugs via JIRA.",
        "Created and managed test plans in an Agile environment to ensure high-quality releases.",
      ],
    },
    {
      company: "Etermax",
      href: "https://etermax.com",
      badges: [],
      location: "Hybrid",
      title: "Sr. Support & Reporting Specialist",
      logoUrl: "./etermax.svg",
      start: "Jan 2016",
      end: "May 2022",
      description:
        "Led process improvements by analyzing HelpDesk data, generating performance reports, and collaborating with developers to resolve technical issues and enhance user support.",
      tasks: [
        "Aided management in defining business objectives, requirements, and performance metrics.",
        "Analyzed HelpDesk data, generated reports, and tracked key performance indicators (KPIs) to drive process improvements.",
        "Collaborated closely with developers to resolve technical issues and develop effective solutions to enhance user support.",
      ],
    },
    {
      company: "Aster",
      href: "https://www.astertextile.com",
      badges: [],
      location: "On-site",
      title: "Textile Engineer",
      logoUrl: "./aster.png",
      start: "Jan 2014",
      end: "Jan 2016",
      description:
        "Managed order timelines, developed cost-effective manufacturing strategies, and ensured timely delivery by coordinating schedules and client expectations.",
      tasks: [
        "Collaborated with clients to define order scopes and timelines.",
        "Ensured on-time delivery through effective schedule management.",
        "Developed economically viable manufacturing strategies.",
      ],
    },
  ],
  education: [
    {
      school: "UdeCataluña",
      href: "https://www.ucatalunya.edu.co/",
      degree: "Ethical Hacking (Red, Blue & Purple Team)",
      description:
        "Acquired practical skills in cybersecurity, penetration testing, and ethical hacking to identify and address security vulnerabilities.",
      logoUrl: "/ude.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "UdeCataluña",
      href: "https://www.ucatalunya.edu.co/",
      degree: "Project Management",
      description:
        "Developed expertise in planning, executing, and managing projects effectively, with a focus on resource allocation and timeline management.",
      logoUrl: "/ude.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Holberton Schools",
      href: "https://holbertonschool.uy/",
      degree: "Full-Stack Software Development",
      description:
        "Completed an intensive program focused on full-stack software development, including algorithms, databases, and system design.",
      logoUrl: "/holberton.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Marmara University",
      href: "https://marmara.edu.tr",
      degree: "Bachelor's Degree of Textile Engineering",
      description:
        "Gained a strong foundation in textile technologies, manufacturing processes, and materials engineering.",
      logoUrl: "/marmara.png",
      start: "2005",
      end: "2009",
    },
  ],
  projects: [
    {
      title: "CRM app",
      href: "https://github.com/sahinmeric/konecta-crm-app",
      dates: "2024",
      active: true,
      description:
        "Konecta CRM is a customer relationship management application that allows users to manage and track interactions with clients effectively. This project provides features for user registration, login, and managing employee data.",
      technologies: [
        "React",
        "Material UI",
        "Node.js",
        "Express",
        "Sequelize",
        "SQLite",
        "JWT",
        "Docker",
        "Docker Compose",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahinmeric/konecta-crm-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crm_app.gif",
      video: "",
    },
    {
      title: "tic-tac-toe",
      href: "https://tic-tac-toe-game-df9b7.web.app/",
      dates: "2024",
      active: true,
      description:
        "A web-based Tic-Tac-Toe game built with React, TypeScript, and Firebase for real-time multiplayer support.",
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Firebase Realtime Database",
      ],
      links: [
        {
          type: "Live",
          href: "https://tic-tac-toe-game-df9b7.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/tic-tac-toe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tic_tac_toe.gif",
      video: "",
    },
    {
      title: "Minstagram",
      href: "https://minstagram1.web.app/",
      dates: "2024",
      active: true,
      description:
        "Minstagram is a full-stack photo-sharing application developed using React, TypeScript, Material UI, Firebase, and Firestore. This application allows users to register, upload, like, comment on, and report photos.",
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Firebase Firestore",
        "Firebase Storage",
        "Firebase Authentication",
        "Firebase Hosting",
      ],
      links: [
        {
          type: "Live",
          href: "https://minstagram1.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/minstagram",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/minstagram.gif",
      video: "",
    },
    {
      title: "Anime finder",
      href: "https://anime-finder-tan.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Anime Finder is a simple web application that allows users to search for anime using the AniList GraphQL API. It displays information such as the anime's title, description, episode count, genres, and cover image.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "GraphQL",
        "Apollo Client",
        "Vercel",
      ],
      links: [
        {
          type: "Live",
          href: "https://anime-finder-tan.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/anime-finder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/anime_find.gif",
      video: "",
    },
    {
      title: "Network-IT",
      href: "https://silver-kringle-2bef55.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "Network-IT is a web platform that connects IT professionals seeking community, collaboration, and career opportunities, especially for those relocating. It offers a central hub for users to network, join local groups, share opportunities, and access insights into the tech landscape of their new locations.",
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Node.js",
        "Netlify",
      ],
      links: [
        {
          type: "Live",
          href: "https://silver-kringle-2bef55.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/network-it",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/network_it.gif",
      video: "",
    },
    {
      title: "React Movie DB",
      href: "https://wonderful-wilson-c25069.netlify.app/",
      dates: "2023",
      active: true,
      description:
        "React Movie Database is a React and TypeScript project that uses an open API to let users search and find movie information.",
      technologies: ["React", "Typescript", "Movie DB API", "Netlify"],
      links: [
        {
          type: "Live",
          href: "https://wonderful-wilson-c25069.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/reactmoviedb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/react_movie_db.gif",
      video: "",
    },
    {
      title: "Invocing App",
      href: "https://github.com/sahinmeric/django_project",
      dates: "2024",
      active: true,
      description:
        "A robust full-stack application designed to efficiently handle CRUD operations.",
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Python",
        "Django",
        "SQL Server",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahinmeric/django_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/noimage.png",
      video: "",
    },
    {
      title: "POKE Api",
      href: "https://github.com/sahinmeric/pokeAPI",
      dates: "2024",
      active: true,
      description:
        "This project is a simple Node.js-based API built using the NestJS framework. It connects to the PokéAPI to fetch data about Pokémon, such as their names, types, and translated type names.",
      technologies: ["Node.js", "NestJS"],
      links: [
        {
          type: "Live",
          href: "https://pokeapi-nest.onrender.com/api/pokemon",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/pokeAPI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/noimage.png",
      video: "",
    },
    {
      title: "PYME Registration",
      href: "https://github.com/sahinmeric/register_page",
      dates: "2024",
      active: true,
      description:
        "A full-stack web application consisting of a frontend built with Angular and a backend built with .NET. The application allows users to register with their company details, including NIT, email, phone number, and password. Upon successful registration, a JWT token is generated and stored in session storage for subsequent authentication.",
      technologies: [
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        ".NET 8.0",
        "C#",
        "JWT",
        "Azure",
        "Netlify",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahinmeric/register_page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/register.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Ethical Hacking Certified Associate (EHCA)",
      dates: "Oct 2024",
      location: "CertJoin",
      description:
        "The Ethical Hacking Certified Associate (EHCA) badge certifies your foundational knowledge in ethical hacking. It serves as evidence of your comprehensive understanding and technical proficiency to conduct penetration testing on an organization's computer infrastructure. By earning this badge, you demonstrate your capability to identify vulnerabilities, assess potential risks, and implement effective security measures to protect sensitive information and ensure the integrity of computer systems.",
      image: "/hacking_etico.png",
      win: "",
      mlh: "",
      links: [
        {
          title: "Badge",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://api.badgr.io/public/assertions/hic5rFZkQFOjqiqx-eID9Q",
        },
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certificate_certjoin.pdf",
        },
      ],
    },
  ],
} as const;
