'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import SmoothScroll from './components/SmoothScroll'
import { ProjectCard } from './components/project-card'
import { BsBriefcase } from 'react-icons/bs'

interface IntroContent {
  name: string;
  title: string;
  description: string;
  details: string[];
}

interface Section {
  id: string;
  // gradient: string;
  title: string;
  content: string[] | IntroContent | Experience[] | Research[];
}
interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

interface Research {
  title: string;
  details: string[];
}

const projects = [
  {
    id: 1,
    title: "Who am I?",
    description: "Explanation for myself",
    image: "/placeholder.svg?height=400&width=600",
    views: 1200,
    date: new Date('2024-01-06'),
    href: "/projects/who-am-i"
  },
  {
    id: 2,
    title: "MindVillage - Hack for Humanity",
    description: "To resolve the mental issues",
    image: "/placeholder.svg?height=400&width=600",
    views: 1200,
    date: new Date('2024-01-06'),
    href: "/projects/mindvillage"
  },
  {
    id: 3,
    title: "Why don't you be more nice(!)?",
    description: "2nd Prize Ethical Hackathon",
    image: "/placeholder.svg?height=400&width=600",
    views: 3400,
    date: new Date('2024-01-01'),
    href: "/projects/ethical-hackathon"
  },
  {
    id: 4,
    title: "Project 3",
    description: "This is a brief description of Project 3.",
    image: "/placeholder.svg?height=400&width=600",
    views: 5600,
    date: new Date('2023-12-25'),
    href: "/projects/project-3"
  },
  {
    id: 5,
    title: "Project 4",
    description: "This is a brief description of Project 4.",
    image: "/placeholder.svg?height=400&width=600",
    views: 7800,
    date: new Date('2023-12-18'),
    href: "/projects/project-4"
  },
  {
    id: 6,
    title: "Project 5",
    description: "This is a brief description of Project 5.",
    image: "/placeholder.svg?height=400&width=600",
    views: 9000,
    date: new Date('2023-12-08'),
    href: "/projects/project-5"
  }
]

const sections: Section[] = [
  {
    id: 'intro',
    // gradient: 'from-custom-teal via-custom-green to-custom-blue',
    title: 'Introduction',
    content: {
      name: '(Jun) JeongJun Song',
      title: 'Web Developer & NLP ML Researcher',
      description: `As a Web Developer:
I pursue simplicity in web design and strive to create clean, intuitive interfaces. 
My goal is to develop solutions that are easily understandable for both users and developers, 
focusing on maintainable and efficient code.

As a Researcher:
I explore whether LLMs can learn new languages not pre-trained within their models, 
and pursue Define Tuning techniques to remove unnecessary components within LLMs 
instead of traditional fine-tuning methods.`,
      details: [
        'Full-stack Development',
        'NLP/ML Research',
        'Clean Code Advocate',
        'Problem Solver'
      ]
    },
  },
  {
    id: 'education',
    // gradient: 'bg-gradient-to-bl from-red-400 via-pink-200 to-purple-500',
    title: 'Education',
    content: [
      'Arizona State University, Ira A. Fulton Schools of Engineering | GPA: 3.81/4.0',
      'B.S. Computer Science (Expected December 2025)',
      "Dean's List (2023 - Expected until graduation) | NamU Scholarship (2023-2025)",
      'Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI'
    ]
  },
  {
    id: 'experience',
    // gradient: 'from-custom-purple via-custom-pink to-custom-red',
    title: 'Professional Experiences',
    content: [
      {
        role: 'Undergraduate Research Assistant in NLP/ML',
        company: 'ASU ARC LAB',
        period: 'Jan 2025-Present',
        details: [
          'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
          'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
          'Achieved 95% code coverage through automated unit testing implementation'
        ]
      },
      {
        role: 'Research Aide',
        company: 'Arizona State University',
        period: 'May 2024-Present',
        details: [
          'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
          'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
          'Achieved 95% code coverage through automated unit testing implementation'
        ]
      },
      {
        role: 'Software Engineering Intern',
        company: 'NGL Transportation INC',
        period: 'Jan 2022-Jan 2023',
        details: [
          'Reduced truck gate processing time from 5 min to 5-10 sec by implementing OCR system',
          'Improved image detection accuracy by 20% through YOLOv5 model refinement',
          'Managed 10,000+ daily data transactions using PostgreSQL and AWS S3'
        ]
      }
    ] as Experience[]
  },
  {
    id: 'research',
    // gradient: 'bg-gradient-to-bl from-blue-400 via-indigo-200 to-purple-500',
    title: 'Research Interests',
    content: [
      {
        title: 'Language Model Development',
        details: [
          'Exploring whether an LLM trained in one natural language can autonomously learn untrained languages.',
          'This advancement could enable models to independently learn from visual and auditory data, symbolizing humanity\'s ability to master all languages.'
        ]
      },
      {
        title: 'Define Tuning',
        details: [
          'Researching a method to remove unnecessary components from models, rather than traditional Fine Tuning.',
          'This addresses biases in LLMs trained on large datasets and helps design models tailored to specific research needs.'
        ]
      }
    ] as Research[]
  }
  
  ,
  {
    id: 'publication',
    // gradient: 'bg-gradient-to-bl from-green-400 via-teal-200 to-blue-500',
    title: 'Publication',
    content: [
      '"ML-based YMS (Yard Management System) Automation: Can Technology Replace Human Labor?"\nSubmitted to arXiv, under review (2024)"'
    ]
  }, 
  
  {
    id: 'projects',
    // gradient: 'bg-gradient-to-bl from-blue-400 via-indigo-200 to-purple-500',
    title: 'Projects',
    content: [] 
  },
  {
    id: 'skills',
    // gradient: 'bg-gradient-to-bl from-indigo-400 via-blue-200 to-teal-500',
    title: 'Tech Stack',
    content: [
      'Frontend: React, Vue.js, Angular',
      'Backend: Node.js, Django, Flask',
      'Database: MongoDB, PostgreSQL, MySQL',
      'AI/ML: TensorFlow, PyTorch, scikit-learn'
    ]
  },
  {
    id: 'awards',
    // gradient: 'bg-gradient-to-bl from-teal-400 via-blue-200 to-indigo-500',
    title: 'Leadership & Prize',
    content: [
      '최우수 논문상 - 국제 AI 컨퍼퍼런스 (2022)',
      '혁신적 프로젝트상 - 전국 해커톤 (2021)',
      '우수 연구원상 - XYZ 대학교 (2020)',
      '리더십 어어워드드드 - DEF 대학교 (2015)'
    ]
  },
  {
    id: 'military',
    // gradient: 'bg-gradient-to-bl from-gray-400 via-gray-200 to-gray-500',
    title: 'Military Service',
    content: [
      '대한민국 육군 - 병장 만기 전역',
      '복무 기간: 2015.03 - 2017.02',
      '정보통신병으로 근무',
      '모범장병 표창 수상'
    ]
  },
  {
    id: 'contact',
    // gradient: 'bg-gradient-to-bl from-green-400 via-teal-200 to-blue-500',
    title: 'Contact Information',
    content: [
      'Email: example@email.com',
      'LinkedIn: linkedin.com/in/username',
      'GitHub: github.com/username',
      'Personal Website: www.example.com'
    ]
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro')
  const [bgStyle, setBgStyle] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevSection, setPrevSection] = useState('intro')
  const [isImageFlipped, setIsImageFlipped] = useState(false)

  // useEffect(() => {
  //   if (activeSection !== prevSection) {
  //     setIsTransitioning(true)
      
  //     // 현재 섹션과 이전 섹션의 색상 가져오기
  //     const currentSection = sections.find(section => section.id === activeSection)
  //     const previousSection = sections.find(section => section.id === prevSection)
      
  //     if (currentSection && previousSection) {
  //       const currentColors = currentSection.gradient.split(' ').slice(1)
  //       const prevColors = previousSection.gradient.split(' ').slice(1)
        
  //       // 중간 색상으로 전환
  //       setBgStyle({
  //         backgroundImage: `linear-gradient(to bottom left, ${currentColors.map((color, i) => {
  //           return `color-mix(in srgb, ${color} 50%, ${prevColors[i]} 50%)`
  //         }).join(', ')})`,
  //         transition: 'background-image 0.5s ease-in-out'
  //       })

  //       // 0.5초 후 최종 색상으로 전환
  //       setTimeout(() => {
  //         setBgStyle({
  //           backgroundImage: `linear-gradient(to bottom left, ${currentColors.join(', ')})`,
  //           transition: 'background-image 0.5s ease-in-out'
  //         })
  //         setIsTransitioning(false)
  //       }, 500)
  //     }
      
  //     setPrevSection(activeSection)
  //   }
  // }, [activeSection, prevSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen transition-all duration-500 ease-in-out" style={bgStyle}>
      {/* Navigation Bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-black/30 rounded-lg">
        <div className="flex flex-col">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center justify-end py-2 px-4 transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-white/20' 
                  : 'hover:bg-white/10'
              }`}
              aria-label={`Navigate to ${section.title}`}
            >
              <span className="text-white text-base mr-2">
                {section.title}
              </span>
              <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 group-hover:bg-white/75'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <SmoothScroll sections={sections} onSectionChange={setActiveSection}>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen w-full snap-start bg-black text-white"
            >
            {section.id === 'projects' ? (
              <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      views={project.views}
                      date={project.date}
                      href={project.href}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-white mb-12">{section.title}</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  {section.id === 'intro' && (
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-16">
                      <div 
                        className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer"
                        style={{ perspective: '1000px' }}
                        onMouseEnter={() => setIsImageFlipped(true)}
                        onMouseLeave={() => setIsImageFlipped(false)}
                      >
                        <div 
                          className="absolute w-full h-full transition-transform duration-500 ease-in-out preserve-3d"
                          style={{ transform: isImageFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
                        >
                          <div className="absolute w-full h-full backface-hidden">
                            <Image
                              src="/img/whoami.jpg"
                              alt="Profile"
                              fill
                              className="object-cover"
                              priority
                            />
                          </div>
                          <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                            <Image
                              src="/img/jun-square-2.jpg"
                              alt="Alternative Profile"
                              fill
                              className="object-cover"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 text-white text-center md:text-left">
                        {(section.content as IntroContent).name && (
                          <>
                            <h3 className="text-4xl font-bold text-white">{(section.content as IntroContent).name}</h3>
                            <p className="text-2xl font-semibold text-white">{(section.content as IntroContent).title}</p>
                            <p className="text-xl whitespace-pre-line text-white">{(section.content as IntroContent).description}</p>
                            <ul className="space-y-2 text-xl text-white">
                              {(section.content as IntroContent).details.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <span className="text-2xl">•</span> {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {section.id === 'experience' ? (
                    <div className="container mx-auto px-4 py-20">
                      <h2 className="text-5xl font-bold text-white mb-12 text-center">{section.title}</h2>
                      <div className="max-w-4xl mx-auto space-y-6">
                        {(section.content as Experience[]).map((exp, index) => (
                          <div key={index} className="experience-box">
                            <h3 className="experience-title">{exp.company}</h3>
                            <div className="experience-subtitle">
                              <span>{exp.role}</span>
                              <span className="text-gray-400 mx-2">•</span>
                              <span className="text-gray-400">{exp.period}</span>
                            </div>
                            <ul className="experience-details">
                              {exp.details.map((detail, i) => (
                                <li key={i} className="experience-detail-item">
                                  <span className="text-gray-400">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : section.id !== 'intro' && section.id !== 'projects' ? (
                    <ul className="space-y-3 text-xl md:text-2xl text-white">
                      {Array.isArray(section.content) && section.content.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-2xl">•</span> {typeof item === 'string' ? item : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            )}
          </section>
        ))}
      </SmoothScroll>
      <style jsx global>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

