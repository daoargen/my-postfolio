"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser'
import { toast } from "sonner"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function Contact(): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div id="contact" className="py-16 pt-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <a 
                    href="mailto:daolevan089@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    daolevan089@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">0765423178</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Khu Công nghệ cao, Q.9, Thành phố Thủ Đức, TP.HCM, Vietnam</span>
                </div>
                {/* Facebook */}
                <div className="flex items-center space-x-3">
                  {/* Facebook icon SVG */}
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  <a 
                    href="https://www.facebook.com/levandao0802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Facebook
                  </a>
                </div>
                {/* Messenger */}
                <div className="flex items-center space-x-3">
                  {/* Messenger icon SVG */}
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.013 2 11.09c0 2.63 1.07 4.99 2.86 6.74V22l2.62-1.44c1.3.36 2.68.56 4.12.56 5.523 0 10-4.013 10-9.09S17.523 2 12 2zm.13 13.08l-2.19-2.34-4.07 2.34 5.13-5.66 2.19 2.34 4.07-2.34-5.13 5.66z"/></svg>
                  <a 
                    href="https://m.me/levandao0802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Messenger
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps moved to the right column */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  title="FPT University HCMC Campus"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.455157251696!2d106.8091055!3d10.8411126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC%20Campus!5e0!3m2!1sen!2s!4v1690273116079!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
