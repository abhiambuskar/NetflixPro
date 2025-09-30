import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 px-8 md:px-20 border-t border-gray-800'>
      <div className='max-w-6xl mx-auto'>
        {/* Social Media Links */}
        <div className='flex gap-6 mb-8'>
          <a href='#' className='hover:text-white transition-colors'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.1-4-.2-7.55-2.12-9.92-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63.96-.7 1.8-1.56 2.46-2.55z'/>
            </svg>
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.15 6.84 9.46.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.85-2.51.46-3.16-.61-3.36-1.17-.11-.28-.6-1.17-1.02-1.41-.35-.19-.85-.65-.01-.66.79-.01 1.35.72 1.54 1.02.9 1.52 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48 3.97-1.32 6.83-5.05 6.83-9.46 0-5.5-4.46-9.96-9.96-9.96z'/>
            </svg>
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
            </svg>
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'/>
            </svg>
          </a>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          <div className='space-y-3'>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Audio Description</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Help Center</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Gift Cards</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Media Center</a>
          </div>
          <div className='space-y-3'>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Investor Relations</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Jobs</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Terms of Use</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Privacy</a>
          </div>
          <div className='space-y-3'>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Legal Notices</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Cookie Preferences</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Corporate Information</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Contact Us</a>
          </div>
          <div className='space-y-3'>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Account</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Ways to Watch</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Speed Test</a>
            <a href='#' className='block hover:text-white transition-colors text-sm'>Only on Netflix</a>
          </div>
        </div>

        {/* Service Code Button */}
        <button className='border border-gray-600 text-gray-400 px-4 py-2 text-sm hover:text-white hover:border-white transition-colors mb-8'>
          Service Code
        </button>

        {/* Copyright */}
        <p className='text-xs text-gray-500'>
          © 1997-2025 Netflix Clone, Inc. • This is a portfolio project and not affiliated with Netflix.
        </p>
      </div>
    </footer>
  )
}

export default Footer