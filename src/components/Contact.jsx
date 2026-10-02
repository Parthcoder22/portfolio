import React, { useState } from 'react'
import { Copy, Check, Send, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/Icons'

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    budget: 'Open to discuss',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState({})

  const emailAddress = 'officialparth135@gmail.com'
  const WEB3FORMS_ACCESS_KEY = 'b7e586c0-fdc2-47a5-8414-3fbd272bf8a5'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    onShowToast({
      type: 'success',
      title: 'Email Copied',
      message: `${emailAddress} copied to clipboard.`
    })
    setTimeout(() => setCopied(false), 3000)
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of what you are building.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      onShowToast({
        type: 'warning',
        title: 'Incomplete Details',
        message: 'Please complete the required fields before submitting.'
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          subject: `New Project Inquiry: ${formData.projectType} — ${formData.name}`,
          from_name: `${formData.name} (via Portfolio)`
        })
      })

      const result = await response.json()

      if (result.success) {
        onShowToast({
          type: 'success',
          title: 'Message Delivered!',
          message: 'Thank you! Your message was delivered directly to Parth. Expect a reply within 24 hours.'
        })
        setFormData({
          name: '',
          email: '',
          projectType: 'Full-Stack Web Application',
          budget: 'Open to discuss',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch {
      // Fallback: trigger user's default email client with inquiry pre-filled
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`)
      const body = encodeURIComponent(
        `Hi Parth,\n\nI would like to discuss a project with you.\n\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\nClient Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}\n`
      )
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`

      onShowToast({
        type: 'info',
        title: 'Email Client Opened',
        message: 'Your default mail client has been opened with your inquiry pre-filled.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] text-[#171717] border-t border-[#E6E4DE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Direct Channels */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#3458D4] uppercase">
                06 / CONTACT
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-tight">
              Let&apos;s Build Something Meaningful.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              Have an idea, a product to build, or a project to discuss? I&apos;d love to hear about it.
            </p>

            {/* Direct Email Card */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6E4DE] shadow-xs">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2 font-semibold">
                Direct Email
              </span>
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-mono text-sm sm:text-base text-[#171717] hover:text-[#3458D4] transition-colors font-medium break-all xs:break-normal"
                >
                  {emailAddress}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="w-fit px-3 py-1.5 rounded-md bg-[#F7F6F2] hover:bg-[#EFECE6] text-xs font-mono text-[#555555] hover:text-[#171717] transition-colors cursor-pointer inline-flex items-center gap-1.5 border border-[#E6E4DE]"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Professional Verified Social Profiles */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.linkedin.com/in/gohel-parth22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F0EFE9] border border-[#E6E4DE] hover:border-[#3458D4] transition-all duration-150 flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-[#3458D4]" />
                  <div>
                    <span className="text-xs font-mono text-[#777777] block">Connect</span>
                    <span className="text-sm font-semibold text-[#171717]">LinkedIn</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#3458D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/Parthcoder22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F0EFE9] border border-[#E6E4DE] hover:border-[#3458D4] transition-all duration-150 flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-[#171717]" />
                  <div>
                    <span className="text-xs font-mono text-[#777777] block">Repositories</span>
                    <span className="text-sm font-semibold text-[#171717]">GitHub</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#3458D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Availability Indicator */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2.5 text-xs font-mono text-[#777777]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Response time: Usually within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Structured Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#E6E4DE] p-5 sm:p-8 lg:p-9 shadow-xs">
              <h3 className="font-display font-bold text-xl text-[#171717] mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-[#666666] mb-6">
                Tell me about your scope, requirements, or vision. I will get back to you with architectural considerations and availability.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: null })
                      }}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-4 py-3 rounded-lg bg-[#F7F6F2] border ${
                        errors.name ? 'border-red-500' : 'border-[#E6E4DE] focus:border-[#3458D4]'
                      } text-[#171717] placeholder-[#888888] text-base sm:text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: null })
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#F7F6F2] border ${
                        errors.email ? 'border-red-500' : 'border-[#E6E4DE] focus:border-[#3458D4]'
                      } text-[#171717] placeholder-[#888888] text-base sm:text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Project Type Select */}
                  <div>
                    <label htmlFor="project-type-select" className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                      Project Category
                    </label>
                    <select
                      id="project-type-select"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE] focus:border-[#3458D4] text-[#171717] text-base sm:text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                      <option value="AI-Powered Solution">AI Integration / RAG Pipeline</option>
                      <option value="Business Dashboard">Business Website &amp; Dashboard</option>
                      <option value="MVP & Startup Prototype">MVP &amp; Startup Development</option>
                      <option value="Technical Consulting / Other">Technical Consulting / Other</option>
                    </select>
                  </div>

                  {/* Budget Scope */}
                  <div>
                    <label htmlFor="budget-select" className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                      Target Budget Scope
                    </label>
                    <select
                      id="budget-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE] focus:border-[#3458D4] text-[#171717] text-base sm:text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Open to discuss">Open to discuss</option>
                      <option value="<$1,000">&lt; $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value=">$5,000">&gt; $5,000</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    Project Scope &amp; Goals <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: null })
                    }}
                    placeholder="Briefly describe what you want to build, existing infrastructure, and desired timeline..."
                    className={`w-full px-4 py-3 rounded-lg bg-[#F7F6F2] border ${
                      errors.message ? 'border-red-500' : 'border-[#E6E4DE] focus:border-[#3458D4]'
                    } text-[#171717] placeholder-[#888888] text-base sm:text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg font-mono text-xs font-semibold text-white bg-[#3458D4] hover:bg-[#2648BD] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
