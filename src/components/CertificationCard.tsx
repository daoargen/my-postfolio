"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar } from "lucide-react"
import type { Certification } from "@/data/certifications"

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const formattedDate = new Date(certification.issueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <Card className="group bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Header with Icon and Platform Badge */}
          <div className="flex items-start justify-between">
            <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
            <Badge 
              variant="secondary" 
              className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
            >
              {certification.platform}
            </Badge>
          </div>

          {/* Title and Issuer */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {certification.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {certification.issuer}
            </p>
          </div>

          {/* Date */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1.5" />
            {formattedDate}
          </div>

          {/* Skills */}
          {certification.description && (
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {certification.description}
              </p>
            </div>
          )}

          {/* Certificate Link */}
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-2 group-hover:underline"
          >
            View Certificate
            <ExternalLink className="h-4 w-4 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
