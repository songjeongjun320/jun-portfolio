'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SmoothScroll from './components/SmoothScroll';
import { ProjectCard } from './components/project-card';

interface IntroContent {
  name: string;
  title: string;
  description: string;
  details: string[];
}

interface SkillsContent {
  languages: string[];
  frameworks: string[];
  tools: string[];
  skills: string[];
  methodologies: string[];
  operatingSystems: string[];
}

interface Section {
  id: string;
  // gradient: string;
  title: string;
  content:
    | string[]
    | IntroContent
    | Experience[]
    | Research[]
    | MilitaryService[]
    | SkillsContent;
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

interface MilitaryService {
  title: string;
  content: (string | JSX.Element)[];
}

const projects = [
  {
    id: 1,
    title: 'Who am I?',
    description: 'My personal website project',
    image: '/img/whoami.jpg',
    views: 1200,
    date: new Date('2025-01-09'),
    href: 'https://github.com/songjeongjun320/jun-portfolio',
  },
  {
    id: 2,
    title:
      'Building YMS(Yard Management System) Automation - Publishing Research Paper',
    description:
      'Using Machine Learning and OCR(Optical Character Recognition) Technology',
    image: '/img/YMS_project.jpg',
    views: 1200,
    date: new Date('2024-12-25'),
    href: 'https://github.com/songjeongjun320/ASU_FURI_Project',
  },
  {
    id: 3,
    title: 'Business Contract Analyzer',
    description:
      'An efficient tool for PDF manipulation and risk analysis using LLMs',
    image: '/img/bsns_cntrct_analyzer.png',
    views: 3400,
    date: new Date('2024-11-10'),
    href: 'https://github.com/songjeongjun320/business-contract-analyzer',
  },
  {
    id: 4,
    title: 'Building the ASU Bookstore Web App',
    description: 'Empowering Students with an Intuitive Textbook Platform',
    image: '/img/bookstore.jpg',
    views: 5600,
    date: new Date('2024-11-24'),
    href: 'https://github.com/songjeongjun320/Bookstore_project',
  },
  {
    id: 5,
    title: 'Hacks for Humanity 2024 - MindVillage',
    description: 'Building a platform for mental health support',
    image: '/img/mindvillage.png',
    views: 7800,
    date: new Date('2024-10-13'),
    href: 'https://github.com/songjeongjun320/mindvillage',
  },
  {
    id: 6,
    title: `Ethical Hackathon - "Why don't you be more nice(r)?" 2nd Prize 🏆`,
    description: 'Using AI LLama and Sentient model from Hugging face',
    image: '/img/ethical_hackathon.jpg',
    views: 9000,
    date: new Date('2024-09-29'),
    href: 'https://github.com/songjeongjun320/ethical_hackathon',
  },
];

const sections: Section[] = [
  {
    id: 'intro',
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
        'Problem Solver',
      ],
    },
  },
  {
    id: 'education',
    title: 'Education',
    content: [
      'Arizona State University, Ira A. Fulton Schools of Engineering | GPA: 3.81/4.0',
      'B.S. Computer Science (Expected December 2025)',
      "Dean's List (2023 - Expected until graduation) | NamU Scholarship (2023-2025)",
      'Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI',
    ],
  },
  {
    id: 'experience',
    title: 'Professional Experiences',
    content: [
      {
        role: 'Undergraduate Research Assistant in NLP/ML',
        company: 'ASU ARC LAB',
        period: 'Jan 2025-Present',
        details: [
          'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
          'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
          'Achieved 95% code coverage through automated unit testing implementation',
        ],
      },
      {
        role: 'Research Aide',
        company: 'Arizona State University',
        period: 'May 2024-Present',
        details: [
          'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
          'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
          'Achieved 95% code coverage through automated unit testing implementation',
        ],
      },
      {
        role: 'Software Engineering Intern',
        company: 'NGL Transportation INC',
        period: 'Jan 2022-Jan 2023',
        details: [
          'Reduced truck gate processing time from 5 min to 5-10 sec by implementing OCR system',
          'Improved image detection accuracy by 20% through YOLOv5 model refinement',
          'Managed 10,000+ daily data transactions using PostgreSQL and AWS S3',
        ],
      },
    ] as Experience[],
  },
  {
    id: 'research',
    title: 'Research Interests',
    content: [
      {
        title: 'Language Model Development',
        details: [
          'Exploring whether an LLM trained in one natural language can autonomously learn untrained languages.',
          "This advancement could enable models to independently learn from visual and auditory data, symbolizing humanity's ability to master all languages.",
        ],
      },
      {
        title: 'Define Tuning',
        details: [
          'Researching a method to remove unnecessary components from models, rather than traditional Fine Tuning.',
          'This addresses biases in LLMs trained on large datasets and helps design models tailored to specific research needs.',
        ],
      },
    ] as Research[], // Alternatively, we can remove this if the type is inferred correctly.
  },
  {
    id: 'publication',
    title: 'Publication',
    content: [
      '"ML-based YMS (Yard Management System) Automation: Can Technology Replace Human Labor?" Submitted to arXiv, under review (2024)"',
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    content: [],
  },
  {
    id: 'skills',
    title: 'Tech Stack',
    content: {
      languages: ['Python', 'Java', 'JavaScript', 'C++', 'TypeScript', 'HTML', 'CSS'],
      frameworks: ['Next.js', 'React', 'React Query', 'Flask'],
      tools: ['Supabase', 'Git', 'AWS', 'YOLO', 'Jira', 'Linux'],
      skills: [
        'Full Stack Development',
        'Agile Development',
        'Data Structures and Algorithms',
        'Software Engineering',
        'QA Testing',
        'Computer Architecture',
      ],
      methodologies: ['REST API', 'Agile'],
      operatingSystems: ['Linux'],
    },
  },
  {
    id: 'awards',
    title: 'Leadership & Prize',
    content: [
      'ASU Dean’s List (2023 - 2024)',
      'ASU NamU Scholarship (2023 - 2025)',
      '2nd Prize, Ethical Hackathon (2024)',
      'Furi Research Presentation (2024)',
      'Participant of Amazon’s Campus Summer Series (2024)',
    ],
  },
  {
    id: 'military',
    title: 'Military Service',
    content: [
      {
        title:
          'Hanbit Unit 12th Peacekeepers, United Nations (UN), Bor, South Sudan',
        content: [
          'Driver and Interpreter | January 2020 - January 2021',
          'Supported UN peacekeeping with logistics, interpretation, and aid for war-affected children during COVID-19.',
            'Read related article on KBS World News: <https://world.kbs.co.kr/service/news_view.htm?lang=e&Seq_Code=153813>',
        ],
      },{
        title:
          '1st Infantry Division, Paju, South Korea',
        content: [
          'Driver | May 2019 - January 2020',
          'Conducted troop transportation operations to support mission-critical deployments efficiently and safely.',
          'Performed artillery firing drills, ensuring precise execution and compliance with safety protocols during live-fire training.',
          'Maintained a high level of combat readiness through rigorous training exercises and operational assessments.',
          'Gained expertise in teamwork, logistical coordination, and situational problem-solving under high-pressure environments.',
        ],
      }
    ],
  },
  {
    id: 'contact',
    // gradient: 'bg-gradient-to-bl from-green-400 via-teal-200 to-blue-500',
    title: 'Contact Information',
    content: [
      'Email: songjeongjun320@gmail.com ',
      'LinkedIn: www.linkedin.com/in/junsong0602',
      'GitHub: https://github.com/songjeongjun320',
      'Personal Website: https://junswebsite.vercel.app/',
    ],
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [bgStyle, setBgStyle] = useState({});
  const [isImageFlipped, setIsImageFlipped] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative min-h-screen transition-all duration-500 ease-in-out"
      style={bgStyle}
    >
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
              <span className="text-white text-base mr-2">{section.title}</span>
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white scale-125'
                    : 'bg-white/50 group-hover:bg-white/75'
                }`}
              />
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
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
            ) : section.id === 'publication' ? (
              <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {(section.content as string[]).map((publication, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[70%] mx-auto"
                    >
                      <p className="text-2xl text-white whitespace-pre-line">{publication}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
            : section.id === 'military' ? (
              <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {(section.content as MilitaryService[]).map(
                    (service, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[80%] mx-auto"
                      >
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {service.title}
                        </h3>
                        <ul className="space-y-2 text-white">
                          {service.content.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-xl">•</span>
                              <p className="text-lg">{detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ):  section.id === 'skills' ? (
              <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {/* Languages */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
                    <ul className="space-y-2">
                      {(section.content as SkillsContent).languages.map((language, index) => (
                        <li key={index} className="text-white text-lg">
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>
            
                  {/* Frameworks */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Frameworks</h3>
                    <ul className="space-y-2">
                      {(section.content as SkillsContent).frameworks?.map((framework, index) => (
                        <li key={index} className="text-white text-lg">
                          {framework}
                        </li>
                      ))}
                    </ul>
                  </div>
            
                  {/* Tools */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
                    <ul className="space-y-2">
                      {(section.content as SkillsContent).tools.map((tool, index) => (
                        <li key={index} className="text-white text-lg">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
            
                  {/* Skills */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
                    <ul className="space-y-2">
                      {(section.content as SkillsContent).skills.map((skill, index) => (
                        <li key={index} className="text-white text-lg">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
            
                  {/* Methodologies */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Methodologies</h3>
                    <ul className="space-y-2">
                      {(section.content as SkillsContent).methodologies.map((methodology, index) => (
                        <li key={index} className="text-white text-lg">
                          {methodology}
                        </li>
                      ))}
                    </ul>
                  </div>
            
                  {/* Operating Systems */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Operating Systems</h3>
                    <ul className="space-y-2">
                      {(section.content as SkillsContent).operatingSystems.map((os, index) => (
                        <li key={index} className="text-white text-lg">
                          {os}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ): section.id === 'research' ? (
              <div className="container mx-auto px-2 py-32">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {(section.content as Research[]).map((research, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[70%] mx-auto"
                    >
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {research.title}
                      </h3>
                      <ul className="space-y-2 text-white">
                        {research.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-xl">•</span>
                            <p className="text-lg">{detail}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-white mb-12">
                  {section.title}
                </h2>
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
                          style={{
                            transform: isImageFlipped
                              ? 'rotateY(180deg)'
                              : 'rotateY(0)',
                          }}
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
                          <div
                            className="absolute w-full h-full backface-hidden"
                            style={{ transform: 'rotateY(180deg)' }}
                          >
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
                            <h3 className="text-4xl font-bold text-white">
                              {(section.content as IntroContent).name}
                            </h3>
                            <p className="text-2xl font-semibold text-white">
                              {(section.content as IntroContent).title}
                            </p>
                            <p className="text-xl whitespace-pre-line text-white">
                              {(section.content as IntroContent).description}
                            </p>
                            <ul className="space-y-2 text-xl text-white">
                              {(section.content as IntroContent).details.map(
                                (item, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-2xl">•</span> {item}
                                  </li>
                                ),
                              )}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {section.id === 'experience' ? (
                    <div className="max-w-4xl mx-auto space-y-6">
                      {(section.content as Experience[]).map((exp, index) => (
                        <div
                          key={index}
                          className="experience-box bg-gray-800 p-6 rounded-lg shadow-md"
                        >
                          {/* 회사 이름 */}
                          <h3 className="experience-title text-2xl font-bold mb-2">
                            {exp.company}
                          </h3>
                          
                          {/* 역할과 기간 */}
                          <div className="experience-subtitle text-lg flex items-center mb-4">
                            <span>{exp.role}</span>
                            <span className="text-gray-400 mx-2">|</span>
                            <span>{exp.period}</span>
                          </div>

                          {/* 상세 내용 */}
                          <ul className="experience-details list-disc list-inside space-y-2">
                            {exp.details.map((detail, i) => (
                              <li
                                key={i}
                                className="experience-detail-item text-base"
                              >
                              <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      </div>
                  ) : section.id !== 'intro' && section.id !== 'projects' ? (
                    <ul className="space-y-3 text-xl md:text-2xl text-white">
                      {Array.isArray(section.content) &&
                        section.content.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="text-2xl">•</span>{' '}
                            {typeof item === 'string' ? item : null}
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
  );
}
