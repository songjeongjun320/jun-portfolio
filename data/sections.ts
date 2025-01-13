import { Experience, Research, Section } from '@/types';

export 
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
        period: 'Jan 2025 - Present',
        details: [
          'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
          'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
          'Achieved 95% code coverage through automated unit testing implementation',
        ],
      },
      {
        role: 'Research Aide',
        company: 'Arizona State University',
        period: 'May 2024 - Dec 2024',
        details: [
          'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
          'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
          'Achieved 95% code coverage through automated unit testing implementation',
        ],
      },
      {
        role: 'Software Engineering Intern',
        company: 'NGL Transportation INC',
        period: 'Jan 2022 - Jan 2023',
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