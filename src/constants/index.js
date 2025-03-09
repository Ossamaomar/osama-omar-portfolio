import project1 from "../assets/projects/e-commerce.png";
import project2 from "../assets/projects/wild-oasis-dashboard.png";
import project3 from "../assets/projects/wild-oasis.png";
import project4 from "../assets/projects/social-app.png";
import project5 from "../assets/projects/react-pizza.png";

export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, wishlist, create order, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "React Query",
      "Context API",
      "Hero UI",
      "Tailwind css",
    ],
    link: "https://wal-cart-ecommerce.vercel.app/"
  },
  {
    title: "The Wild Oasis Dashboard",
    image: project2,
    description:
      "An application for managing hotel bookings and check-ins, featuring a modern dashboard to analyze hotel insights, confirm check-ins, handle cabin modifications, and manage website settings.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "React Query",
      "Context API",
      "Styled components",
      "Supabase",
    ],
    link: "https://the-wild-oasis-weld-eight.vercel.app/"
  },
  {
    title: "The Wild Oasis Website",
    image: project3,
    description:
      "The user website for The Wild Oasis Hotel, allowing users to create bookings and access other features. Built with Next.js to enhance performance and SEO.",
    technologies: ["HTML", "CSS", "NextJS", "Context API", "Tailwind CSS"],
    link: "https://the-wild-oasis-website-seven-pi.vercel.app/"
  },
  {
    title: "Linked Posts",
    image: project4,
    description:
      "A social media platform for creating and publishing posts, with features like rich text editing, commenting, and user profiles.",
    technologies: [
      "HTML",
      "CSS",
      "NextJS",
      "Redux",
      "Material UI",
      "Tailwind CSS",
    ],
    link: "https://linked-posts-ecru.vercel.app/"
  },
  {
    title: "Fast React Pizza",
    image: project5,
    description:
      "A pizza restraunt website where the user discover the restraunt menu, create and edit cart and create orders ",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Tailwind CSS",
    ],
    link: "https://fast-react-pizza-two-weld.vercel.app/"
  },
];


