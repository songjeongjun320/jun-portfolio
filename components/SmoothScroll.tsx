'use client'

import React, { useRef, useEffect, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode;
  onSectionChange: (sectionId: string) => void;
}

interface SectionElement extends React.HTMLProps<HTMLElement> {
  id: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, onSectionChange }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number | null = null
    let currentSection = ''
    let lastScrollTime = 0 // Track last scroll time to limit frequency of updates

    const handleScroll = () => {
      // Get current time to throttle scroll updates
      const now = Date.now()

      // Limit scroll event frequency (e.g., 100ms)
      if (now - lastScrollTime < 100) return

      lastScrollTime = now

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollPosition = container.scrollTop + window.innerHeight / 2

        for (const sectionId in sectionRefs.current) {
          const element = sectionRefs.current[sectionId]
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              if (currentSection !== sectionId) {
                currentSection = sectionId
                onSectionChange(sectionId)
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
  }, [onSectionChange])

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
