import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Şahin Meriç",
  initials: "SM",
  url: "https://sahinmeric.com",
  location: "Bogotá, CO",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a Full-Stack Developer with 3 years of experience building scalable, user-friendly web apps using React, TypeScript, Node.js, and Python. I focus on writing clean, efficient code and creating intuitive digital experiences that help businesses grow.",
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
  languages: ["English", "Spanish", "German", "Turkish"],
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
      company: "Voyager Global Mobility",
      href: "https://vg.joinbuggy.com/",
      badges: [],
      location: "Remote",
      title: "Full-stack developer",
      logoUrl: "./vgm.jpg",
      start: "Oct 2024",
      end: "Nov 2025",
      description:
        "Contributed to the development of a global car leasing platform by:",
      tasks: [
        "Building scalable, reusable React components for dynamic and responsive interfaces.",
        "Migrating to functional components with React Hooks for better maintainability.",
        "Integrating Apollo GraphQL and optimizing performance using useMemo, useCallback, and effective caching strategies.",
        "Improving UI responsiveness and accessibility using CSS.",
        "Writing unit tests for components using Jest.",
        "Collaborating through code reviews, pair programming, and Agile ceremonies.",
        "Maintaining high code quality with clean code, SOLID, KISS, DRY principles.",
      ],
    },
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
        "Contributed to a U.S.-based startup's mental healthcare platform by:",
      tasks: [
        "Building scalable, maintainable React components using hooks.",
        "Increasing code robustness with TypeScript and Jest.",
        "Optimizing app performance, state management with React-query.",
        "Designing responsive, mobile-friendly UI with Material UI.",
        "Integrating RESTful APIs (Twilio, Stripe..) for seamless data flow.",
        "Maintaining high-quality Agile workflows with Git and Bitbucket.",
      ],
    },
    {
      company: "Globant",
      href: "https://globant.com",
      badges: [],
      location: "Remote",
      title: "Back-end developer",
      logoUrl: "./globant-logo-dark.svg",
      start: "Oct 2021",
      end: "Oct 2022",
      description: "Contributed to backend services and infrastructure by:",
      tasks: [
        "Developing scalable RESTful APIs with Node.js and Express.",
        "Implementing JWT-based authentication for secure user sessions.",
        "Optimizing data handling and performance with PostgreSQL.",
        "Automating deployments on AWS (EC2, S3, RDS) using Docker and CI/CD pipelines.",
        "Maintaining version control and Agile workflows with Git and GitHub.",
      ],
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full-stack developer",
      logoUrl: "./mrc.webp",
      start: "May 2021",
      end: "Oct 2021",
      description:
        "Completed several small projects on freelance platforms, contributing to both frontend and backend solutions by:",
      tasks: [
        "Fixing bugs and enhancing web app performance.",
        "Updating versions and managing database backups and transfers.",
        "Setting up servers and deploying applications.",
        "Developing websites for small businesses for a yoga instructor, a carpenter, and personal portfolio sites.",
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
      end: "May 2021",
      description:
        "Led process improvements by analyzing HelpDesk data, generating performance reports, and collaborating with developers to resolve technical issues and enhance user support.",
      tasks: [
        "Aided management in defining business objectives, requirements, and performance metrics.",
        "Analyzed HelpDesk data, generated reports, and tracked key performance indicators (KPIs) to drive process improvements.",
        "Collaborated closely with developers to resolve technical issues and develop effective solutions to enhance user support.",
      ],
    },
    {
      company: "Teksko",
      href: "",
      badges: [],
      location: "On-site",
      title: "IT Support Specialist",
      logoUrl: "./teksko.png",
      start: "Jan 2015",
      end: "Jan 2016",
      description:
        "Provided technical support and troubleshooting for hardware and software issues by:",
      tasks: [
        "Assisting users with technical inquiries and resolving issues promptly.",
        "Configuring and maintaining computer networks and hardware components.",
        "Performing software installations, upgrades, and updates.",
        "Training end-users on software applications and best practices.",
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
      end: "Jan 2015",
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
      school: "Çorlu University",
      href: "",
      degree: "Associate's degree of Computer Technology",
      description:
        "Focused on networking, hardware, and systems administration, gaining hands-on experience in configuring and maintaining computer networks and hardware components.",
      logoUrl: "/namik.jpg",
      start: "2014",
      end: "2016",
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
      title: "Demand Forecast",
      href: "https://github.com/sahinmeric/demand-forecast",
      dates: "2025",
      active: true,
      description:
        "A full-stack forecasting platform for uploading, validating, and analyzing sales data with interactive charts and admin controls.Built with React, TypeScript, Node.js, PostgreSQL, and deployed on Railway using Docker.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Material UI",
        "Node.js",
        "Express",
        "Prisma ORM",
        "PostgreSQL",
        "JWT",
        "Docker",
        "Docker Compose",
        "CI/CD with GitHub and Railway",
      ],
      links: [
        {
          type: "Live",
          href: "https://demand-forecast-production-6d66.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahinmeric/demand-forecast",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/demand_forecast.gif",
      video: "",
    },
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
          type: "Live",
          href: "https://celebrated-bubblegum-b0c618.netlify.app/register",
          icon: <Icons.globe className="size-3" />,
        },
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
      image: "/certjoin.png",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certificate_certjoin.png",
        },
      ],
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      dates: "August 2024",
      location: "Coursera",
      description:
        "Include hands-on, practicebased assessments and are designed to prepare them for entry-level roles in cybersecurity. They are competent in beginner-level Python, Linux, SQL, Security Information and Event Management (SIEM) tools, and Intrusion Detection Systems (IDS). They know how to identify common cybersecurity risks, threats, and vulnerabilities, as well as the techniques to mitigate.",
      image: "/coursera.png",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/coursera_cybersecurity.png",
        },
      ],
    },
    {
      title: "Ethical Hacking (Red, Blue & Purple Team)",
      dates: "July 2024",
      location: "UdeCataluña",
      description:
        "Understand the concepts, types, and phases of Ethical Hacking. Learn about tools, techniques, and methodologies that help identify vulnerabilities and information security flaws within an organization, with a focus on professional ethics. Define offensive and defensive security as represented by highly sought-after roles in the industry (Red, Blue & Purple Team).",
      image: "/ude.png",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/udecataluna_hacking_etico.png",
        },
      ],
    },
    // {
    //   title: "Project Management",
    //   dates: "July 2024",
    //   location: "UdeCataluña",
    //   description:
    //     "La gerencia de proyectos es una de las habilidades más solicitadas en las empresas, porque integra los diferentes procesos para llevar a cabo una labor, en la cual debe haber un equilibrio entre el alcance, cronograma y costo para la realización exitosa de este. Este diplomado se basa en el cumplimiento de esta necesidad y con total apoyo de los lineamientos del Project Management Institute (PMI)® a través sus estándares y esquemas de certificación.",
    //   image: "/ude.png",
    //   win: "",
    //   mlh: "",
    // },
    // {
    //   title: "Full-stack Software Development",
    //   dates: "July 2022",
    //   location: "Holberton Schools - Uruguay",
    //   description: "",
    //   image: "/holberton.png",
    //   win: "",
    //   mlh: "",
    //   links: [
    //     {
    //       title: "Certificate",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "/holberton.png",
    //     },
    //   ],
    // },
  ],
} as const;
