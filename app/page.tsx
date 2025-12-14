'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Trigger fade-in after a short delay to ensure embed is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    // Validate email
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you! You\'ve been added to the waitlist.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      {/* Unicorn Studio Embed - Full Screen with Fade In */}
      <div 
        data-us-project="lVU1d1WVyep3KHTj7YZ1" 
        style={{ width: '100vw', height: '100vh' }}
        className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Text Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-1000 ease-in-out delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center px-4 w-full max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl leading-tight" style={{ fontFamily: "'Product Sans'" }}>
            The future of health.
            <br />
            Built on your blood.
          </h1>
          
          <p className="text-base md:text-lg text-white/90 mb-8 drop-shadow-lg" style={{ fontFamily: "'Product Sans'" }}>
            We read your blood work and explain what it means — simply <br /> and what to do about it.
          </p>

          {/* Email Input Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="max-w-md mx-auto">
              <p className="text-xs md:text-sm text-white/80 mb-1 drop-shadow-md text-left" style={{ fontFamily: "'Product Sans'" }}>
                822 people already joined the waitlist!
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm
                         text-white placeholder-white/60
                         focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200
                         text-sm"
                style={{ fontFamily: "'Product Sans'" }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2 bg-white text-black font-bold rounded-lg
                         hover:bg-white/90 active:scale-95
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                         transition-all duration-200
                         text-sm whitespace-nowrap"
                style={{ fontFamily: "'Product Sans'" }}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </span>
                ) : (
                  'Get Early Access'
                )}
              </button>
              </div>
            </div>

            {message && (
              <div
                className={`mt-4 text-sm max-w-lg mx-auto ${
                  status === 'success'
                    ? 'text-white'
                    : 'p-4 rounded-lg bg-red-500/20 text-red-100 border border-red-400/30'
                }`}
                style={{ fontFamily: "'Product Sans'" }}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Load Unicorn Studio script */}
      <Script
        id="unicorn-studio-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
                i.onload=function(){
                  if(window.UnicornStudio && !window.UnicornStudio.isInitialized){
                    UnicornStudio.init();
                    window.UnicornStudio.isInitialized=!0;
                  }
                };
                (document.head || document.body).appendChild(i);
              }
            }();
          `
        }}
      />
    </main>
  )
}
