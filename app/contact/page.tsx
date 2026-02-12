'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/lib/data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 3000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Get In Touch</h1>
        <p className="text-foreground/60 max-w-2xl">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-cyan-400" />
                <h3 className="font-bold text-foreground">Email</h3>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-cyan-400" />
                <h3 className="font-bold text-foreground">Phone</h3>
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <h3 className="font-bold text-foreground">Location</h3>
              </div>
              <p className="text-foreground/80">
                {personalInfo.location}
                <br />
                <span className="text-sm text-foreground/60">{personalInfo.timezone}</span>
              </p>
            </div>

            {/* Availability */}
            <div className="glass rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Availability</h3>
              <p className="text-cyan-400 font-medium">{personalInfo.availability}</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    Failed to send message. Please try again.
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
