export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  company?: string
  duration?: string
  teamSize?: string

}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Koine Platform - Sexual Education Courses",
    description:
      "A comprehensive web and mobile application for selling sexual education courses for parents and children. Built with modern technologies and responsive design, featuring user authentication, course management, and payment integration.",
    image: "/koine.png",
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "JavaScript", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://koine.id.vn",
    company: "Koine Platform",
    duration: "09/2024 – 04/2025",
    teamSize: "4 members"
  },
  {
    id: 2,
    title: "Intern & Training Management System",
    description:
      "Developed a comprehensive management system for FPT Software to handle intern recruitment and training schedules. Features include candidate tracking, interview scheduling, and training progress monitoring.",
    image: "/private-project.png",
    technologies: ["React.js", "C#", "PostgreSQL", ".NET", "JavaScript", "Bootstrap"],
    company: "FPT Software",
    duration: "01/2024 – 04/2024",
    teamSize: "43 members"
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance to showcase projects and skills.",
    image: "/postfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/daoargen",
    liveUrl: "#",
    company: "Personal Project",
  },
]
