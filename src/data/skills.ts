export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "React Native",
      "Responsive Design",
      "UI/UX Implementation",
    ],
  },
  {
    category: "Backend Basics",
    icon: "⚙️",
    skills: ["Node.js", "C#", ".NET", "PostgreSQL", "REST APIs", "Database Design", "Basic Backend Development"],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Figma (Basic)", "Version Control", "Debugging", "Testing"],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    skills: [
      "Problem-solving",
      "Teamwork",
      "Communication",
      "Time Management",
      "Fast Learning",
      "Adaptability",
      "Documentation",
    ],
  },
  {
    category: "Interests & Learning",
    icon: "📚",
    skills: [
      "UI/UX Design Trends",
      "New Frontend Frameworks",
      "Mobile Development",
      "Tech Meetups",
      "Hackathons",
      "Continuous Learning",
    ],
  },
]
