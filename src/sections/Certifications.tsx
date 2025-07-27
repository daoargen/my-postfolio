"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { certificationsData } from "@/data/certifications"
import { CertificationCard } from "@/components/CertificationCard"

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState("")

  const sortedCertifications = useMemo(() => {
    return [...certificationsData].sort((a, b) => 
      new Date(a.issueDate).getTime() - new Date(b.issueDate).getTime()
    )
  }, [])

  const filteredCertifications = useMemo(() => {
    const searchLower = searchTerm.toLowerCase()
    return sortedCertifications.filter((cert) =>
      cert.title.toLowerCase().includes(searchLower) ||
      cert.issuer.toLowerCase().includes(searchLower) ||
      cert.platform.toLowerCase().includes(searchLower) ||
      (cert.description?.toLowerCase().includes(searchLower) ?? false)
    )
  }, [sortedCertifications, searchTerm])

  return (
    <section id="certifications" className="py-16 pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my skills and knowledge
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
            <Input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No certifications found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
