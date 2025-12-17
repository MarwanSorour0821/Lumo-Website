'use client'

import Link from 'next/link'
import { ContactCard } from "@/components/ui/contact-card"
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Here you would typically send the form data to your API
    // For now, we'll just simulate a submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="mb-8 inline-block hover:opacity-80 transition-opacity" style={{ fontFamily: "'Product Sans'", color: '#B01328' }}>
          ← Back to Home
        </Link>
        
        <div className="mb-12">
          <ContactCard
            title="Get in touch"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'lumobloodapp@gmail.com',
              },
              {
                icon: PhoneIcon,
                label: 'Support',
                value: 'Available via email',
              },
              {
                icon: MapPinIcon,
                label: 'Response Time',
                value: '24-48 hours',
                className: 'md:col-span-2',
              }
            ]}
          >
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input 
                  id="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={status === 'loading'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={status === 'loading'}
                  rows={4}
                />
              </div>
              {status === 'success' && (
                <p className="text-sm text-green-600">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <Button 
                className="w-full" 
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </ContactCard>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 bg-white p-8 rounded-lg shadow" style={{ fontFamily: "'Product Sans'" }}>
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is Lumo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lumo is a health technology platform that reads your blood work and explains what it means in simple terms, along with actionable recommendations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How do I join the waitlist?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Simply enter your email address on our homepage and click "Get Early Access". We'll notify you when Lumo becomes available.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Is Lumo a replacement for medical advice?</h3>
                <p className="text-gray-700 leading-relaxed">
                  No. Lumo is designed to help you understand your blood work results, but it is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with your healthcare provider for medical decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How do you protect my health information?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We take privacy and security seriously. All data is encrypted and stored securely. Please review our Privacy Policy for more details on how we protect your information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">When will Lumo be available?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're working hard to bring Lumo to you soon. Join our waitlist to be among the first to know when we launch.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Additional Resources</h2>
            <div className="space-y-3">
              <Link href="/terms" className="block hover:opacity-80 transition-opacity" style={{ color: '#B01328' }}>
                Terms of Service →
              </Link>
              <Link href="/privacy" className="block hover:opacity-80 transition-opacity" style={{ color: '#B01328' }}>
                Privacy Policy →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
