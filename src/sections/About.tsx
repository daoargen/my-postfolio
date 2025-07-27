"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Github,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Phone,
  CheckCircle,
  Target,
} from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const tabs = [
    { id: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful and functional web experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Profile */}
          <div
            className={`lg:col-span-1 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Profile Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm font-medium">Available for opportunities</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dao Le Van</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Fresher Front-end Developer</p>

                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ho Chi Minh City, Vietnam
                  </div>
                  <div className="flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    FPT University Student
                  </div>        
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-2">
                    <a 
                      href="mailto:daolevan089@gmail.com"
                      className="flex items-center justify-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      daolevan089@gmail.com
                    </a>
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      076542317
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-4 mt-6">
                  
                  <div className="flex justify-center space-x-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-white/50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      onClick={() => window.open("https://github.com/daolevan", "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-white/50 dark:bg-gray-700/50 hover:bg-[#4267B2]/20 dark:hover:bg-[#4267B2]/30"
                      onClick={() => window.open("https://facebook.com/daolevan.me", "_blank")}
                    >
                      <svg className="w-4 h-4" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                      </svg>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-white/50 dark:bg-gray-700/50 hover:bg-[#0084FF]/20 dark:hover:bg-[#0084FF]/30"
                      onClick={() => window.open("https://m.me/daolevan.me", "_blank")}
                    >
                      <svg className="w-4 h-4" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.486 2 2 6.262 2 11.5c0 2.545 1.088 4.988 3 6.772v4.228l4.135-2.525c.912.25 1.878.395 2.865.395 5.514 0 10-4.262 10-9.5S17.514 2 12 2zm1.003 12.485l-2.775-2.94-5.227 2.94 5.732-6.09 2.775 2.94 5.227-2.94-5.732 6.09z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                onClick={() => window.open('/assets/cv.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hello there! 👋</h3>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      I'm a passionate and motivated fresher front-end developer with a solid foundation in modern web
                      technologies. Currently pursuing my Bachelor's degree in Software Engineering at FPT University,
                      I've gained hands-on experience through internships and real-world projects.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      My journey in tech started with curiosity and has evolved into a genuine passion for creating
                      beautiful, functional, and user-friendly web applications. I enjoy the problem-solving aspect of
                      development and the satisfaction of bringing ideas to life through code.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        What I Do
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li>• Responsive Web Development</li>
                        <li>• React.js & Next.js Applications</li>
                        <li>• UI/UX Implementation</li>
                        <li>• Mobile App Development (React Native)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-500" />
                        My Goals
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li>• Join a professional development team</li>
                        <li>• Master advanced React patterns</li>
                        <li>• Contribute to open-source projects</li>
                        <li>• Build impactful web applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function User({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )
}
