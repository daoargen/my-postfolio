"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  ArrowUpRight,
  Filter,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { projectsData } from "@/data/projects"

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [isVisible, setIsVisible] = useState(false)

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("projects")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])



  // Get unique technologies for filter
  const allTechnologies = ["All", ...Array.from(new Set(projectsData.flatMap((p) => p.technologies)))]

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "All" || project.technologies.includes(selectedFilter)
    return matchesSearch && matchesFilter
  })



  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 animate-spin" />
            Featured Work
            <TrendingUp className="w-4 h-4 ml-2" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work and see how I bring ideas to life through code
          </p>
        </div>

        {/* Search and Filter Section */}
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {allTechnologies.slice(0, 6).map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedFilter === tech ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(tech)}
                    className={`transition-all duration-300 ${
                      selectedFilter === tech
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    }`}
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </div>
        </div>

        {/* Projects Grid with Stagger Animation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-xl ${
                index === 0 ? "lg:col-span-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Overlay Effects */}
              <div className={`relative overflow-hidden ${index === 0 ? "h-80" : "h-64"}`}>
                <Image
                  src={project.image || "/private-project.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 100vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.githubUrl && (
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-gray-900 shadow-lg backdrop-blur-sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="icon"
                      className="bg-blue-600 hover:bg-blue-700 shadow-lg"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Project Status Badge */}
                {project.liveUrl && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      Live
                    </Badge>
                  </div>
                )}


              </div>

              <CardContent className="p-8">
                {/* Project Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.company && (
                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                      >
                        {project.company}
                      </Badge>
                    )}
                    {project.duration && (
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Team Size & Code Lines */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  {project.teamSize && (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.teamSize}
                    </div>
                  )}

                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                      onClick={() => setSelectedFilter(tech)}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    >
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 mr-2 animate-spin" />
                <h3 className="text-2xl font-bold">Ready to collaborate?</h3>
                <Sparkles className="w-6 h-6 ml-2 animate-spin" />
              </div>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
                together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://github.com/daoargen", "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
