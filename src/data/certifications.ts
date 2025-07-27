export interface Certification {
  id: number
  title: string
  platform: string
  issuer: string
  issueDate: string
  url: string
  description?: string
}

export const certificationsData: Certification[] = [
  {
    id: 9,
    title: "Academic Skills for University Success",
    platform: "Coursera",
    issuer: "The University of Sydney",
    issueDate: "May 27, 2022",
    url: "https://coursera.org/share/321452226ddc57d6e8c544ac3666d595",
    description: "Skills gained: Critical Thinking, Academic Research, Study Skills"
  },
  {
    id: 8,
    title: "Computer Communications",
    platform: "Coursera",
    issuer: "University of Colorado System",
    issueDate: "October 5, 2022",
    url: "https://coursera.org/share/17d88cfbfcc6eac5cedb9df0e82f240b",
    description: "Skills gained: Network Protocols, TCP/IP, Computer Networking"
  },
  {
    id: 7,
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    platform: "Coursera",
    issuer: "University of Michigan",
    issueDate: "January 13, 2023",
    url: "https://coursera.org/share/01861f52f6e7a7eb4ba709cf6657c2b4",
    description: "Skills gained: HTML5, CSS3, JavaScript, Responsive Design"
  },
  {
    id: 4,
    title: "Software Development Lifecycle",
    platform: "Coursera",
    issuer: "University of Minnesota",
    issueDate: "May 23, 2023",
    url: "https://coursera.org/share/c1d06192b9cf3c9687d0153f9be1e385",
    description: "Skills gained: Agile Methodologies, Software Development, DevOps"
  },
  {
    id: 5,
    title: "CertNexus Certified Ethical Emerging Technologist",
    platform: "Coursera",
    issuer: "CertNexus",
    issueDate: "September 15, 2023",
    url: "https://coursera.org/share/203a65b3f78f3e2a450b50d628b0f0eb",
    description: "Skills gained: AI Ethics, Data Privacy, Emerging Technology"
  },
  {
    id: 6,
    title: "Academic English: Writing",
    platform: "Coursera",
    issuer: "University of California, Irvine",
    issueDate: "January 12, 2024",
    url: "https://coursera.org/share/0366664d62db5440f824fa754de8dfce",
    description: "Skills gained: Academic Writing, Research Writing, Grammar and Punctuation"
  },
  {
    id: 1,
    title: "Project Management & Other Tools for Career Development",
    platform: "Coursera",
    issuer: "University of California, Irvine Division of Continuing Education",
    issueDate: "May 24, 2024",
    url: "https://coursera.org/share/8da6fc92b303e0c4562357063f30b165",
    description: "Skills gained: Career Development, Project Management, Presentation Skills"
  },
  {
    id: 3,
    title: "User Experience Research and Design",
    platform: "Coursera",
    issuer: "University of Michigan",
    issueDate: "June 24, 2024",
    url: "https://coursera.org/share/68976a45d1b926a5b34dcde089717f9b",
    description: "Skills gained: User Research, Usability Testing, User Experience (UX) Design"
  },
  {
    id: 2,
    title: "Project Management Principles and Practices",
    platform: "Coursera",
    issuer: "University of California, Irvine Division of Continuing Education",
    issueDate: "August 11, 2024",
    url: "https://coursera.org/share/574230b33b2c3295cfc82410c878cd6c",
    description: "Skills gained: Project Planning, Risk Management, Project Management Professional (PMP)"
  }
]
