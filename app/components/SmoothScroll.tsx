'use client'

import React, { useRef, useEffect, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode;
  sections: { id: string }[]; // Removed 'gradient'
  onSectionChange: (sectionId: string) => void;
}

interface SectionElement extends React.HTMLProps<HTMLElement> {
  id: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, sections, onSectionChange }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number | null = null
    let currentSection = ''

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollPosition = container.scrollTop + window.innerHeight / 2

        for (const section of sections) {
          const element = sectionRefs.current[section.id]
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              if (currentSection !== section.id) {
                currentSection = section.id
                onSectionChange(section.id)
              }
              break
            }
          }
        }
      })
    }

    container.addEventListener('scroll', handleScroll)
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [sections, onSectionChange])

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<SectionElement>(child)) {
          return React.cloneElement(child, {
            ref: (el: HTMLDivElement) => {
              sectionRefs.current[child.props.id] = el
            },
            className: `${child.props.className} transition-all duration-500 ease-in-out`,
          })
        }
        return child
      })}
    </div>
  )
}

export default SmoothScroll

