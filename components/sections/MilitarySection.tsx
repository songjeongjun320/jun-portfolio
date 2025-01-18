'use client';

import { CSSTransition } from 'react-transition-group';

export default function MilitarySection() {
  const content = [
    {
      title:
        'Hanbit Unit 12th Peacekeepers, United Nations (UN), Bor, South Sudan',
      content: [
        'Driver and Interpreter | January 2020 - January 2021',
        'Supported UN peacekeeping with logistics, interpretation, and aid for war-affected children during COVID-19.',
        <a
          href="https://world.kbs.co.kr/service/news_view.htm?lang=e&Seq_Code=153813"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
        >
          [Read related article on KBS World News]
        </a>,
      ],
    },
    {
      title: '1st Infantry Division, Paju, South Korea',
      content: [
        'Driver | May 2019 - January 2020',
        'Conducted troop transportation operations to support mission-critical deployments efficiently and safely.',
        'Performed artillery firing drills, ensuring precise execution and compliance with safety protocols during live-fire training.',
        'Maintained a high level of combat readiness through rigorous training exercises and operational assessments.',
        'Gained expertise in teamwork, logistical coordination, and situational problem-solving under high-pressure environments.',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <h2 className="text-4xl font-extrabold text-white mb-16 text-center tracking-tight uppercase">
        Military Service
      </h2>
      <div className="space-y-12">
        {content.map((service, index) => (
          <CSSTransition
            key={index}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-4xl mx-auto">
              <h3 className="text-3xl font-semibold text-teal-400 mb-6 border-b-2 border-gray-600 pb-2">
                {service.title}
              </h3>
              <ul className="space-y-4 text-gray-300">
                {service.content.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl text-teal-400 font-bold">•</span>
                    <p className="text-lg leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}
