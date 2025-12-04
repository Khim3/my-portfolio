import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Khiem",
  lastName: "Nhat Nguyen",
  name: `Nguyen Nhat Khiem`,
  role: "AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "nhatkhiem003@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Khim3",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nhkhiemnguyen042/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: (
      <>
        Khiem is a Ho Chi Minh City-based AI engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
experiences: [
  {
    company: "Velox Tech",
    timeframe: "July 2024 - Oct 2024",
    role: "AI Engineer Intern",
    achievements: [
      <>Optimized Database Systems: Rearranged and improved the database system for better efficiency and scalability.</>,
      <>AI Development: Trained, tested, labeled data, and prepared datasets to streamline model training; used Ultralytics with PyTorch to fine-tune and evaluate the YOLOv9 model, achieving ~85% segmentation accuracy and ~82% detection accuracy for small aquatic creatures.</>,
      <>Distributed Systems: Designed and implemented a distributed database system with a publish–subscribe mechanism.</>,
      <>Workflow Documentation: Created detailed documentation to enhance clarity and maintainability.</>,
    ],

        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "International University - VNUHCM",
  timeframe: "2023 - 2024",
  role: "Teaching Assistant (Calculus 1 and Data Structures & Algorithms)",
  achievements: [
    <>Student Support: Addressed student queries with detailed explanations and visual illustrations to improve understanding.</>,
    <>Material Preparation: Developed revision materials, curated practice exercises, and organized online review sessions.</>,
    <>Mentorship: Provided study strategies, guided students through problem-solving techniques, and supported instructors in preparing teaching resources.</>,
  ],
        images: [],
      },
    ],
  },
studies: {
  display: true,
  title: "Education",
  institutions: [
    {
      name: "International University - VNUHCM",
      description: (
        <>
          Bachelor of Data Science with a cumulative GPA of 3.6. <br />
          Received the academic excellence award three consecutive times
          for achieving the highest GPA with the most credits in major
          subjects across four main semesters.
        </>
      ),
    },

    {
      name: "Publications",
      description: (
        <>
          IUFlowGen: An AI System for Converting Procedural Texts into
          Flowcharts. In Proceedings of MIWAI 2025, Lecture Notes in
          Computer Science (LNCS), Springer.{" "}
          <a
            href="https://doi.org/10.1007/978-981-95-4960-3_18"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1007/978-981-95-4960-3_18
          </a>
        </>
      ),
    },

    {
      name: "IELTS 7.0 Overall",
      description: (
        <>
          Certified proficiency in English with an overall band score of
          7.0, issued by the British Council (Aug 2025).
        </>
      ),
    },

    {
      name: "IBM Machine Learning Professional Certificate",
      description: (
        <>
          Mastered core machine learning concepts and gained hands-on
          experience in practical ML applications through IBM’s
          professional certification program.
        </>
      ),
    },
  ],
},  
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building fullstack AI applications with Next.js.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        
      },
      {
        title: "AI Development",
        description: (
          <>Integrating AI tools into design and development workflows.</>

        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "LangChain",
            icon: "langchain",
          },
          {
            name: "Langgraph",
            icon: "langgraph",
          },
          {
            name: "Ollama",
            icon: "ollama",
          },
          {
            name: "sklearn",
            icon: "sklearn",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
        ],
          },
        {  
        title: "Environments & Tools",
        description: (<>Familiar with various development environments and tools.</>
        ),
        tags: [
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
      },
  
      ],
    },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
