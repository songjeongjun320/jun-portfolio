'use client';

import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from 'react-icons/fa';

interface MilitarySectionProps {
  onBack: () => void;
}

export default function MilitarySection({ onBack }: MilitarySectionProps) {
  const content = [
    {
      title:
        'Volunteer, Arizona State University, T.Denny Sanford School of Social and Family Dynamics',
      content: [
        'April 2025 - present',
        'Engaged children in various educational and creative activities, fostering their social and cognitive development.',
        'Collaborated with other volunteers to create a positive, team-oriented atmosphere.',
        <a
          href="https://thesanfordschool.asu.edu/cdl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] hover:text-blue-500 underline transition-colors duration-200"
        >
          [Learn more about ASU Child Development Lab]
        </a>,
      ],
    },
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
          className="text-[#1877F2] hover:text-blue-500 underline transition-colors duration-200"
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
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc] px-[clamp(0.5rem,3vw,2.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>

      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#1877F2] mb-[clamp(1rem,4vw,3rem)] text-center tracking-tight uppercase">
        Military Service & Volunteer
      </h2>
      <div className="flex flex-col items-center gap-[clamp(0.7rem,2vw,1.5rem)] w-full">
        {content.map((service, index) => (
          <CSSTransition
            key={index}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="bg-white w-full min-w-[clamp(250px,40vw,700px)] max-w-[clamp(300px,90vw,1200px)] p-[clamp(1rem,3vw,2.5rem)] rounded-4xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 mx-auto border-2 border-blue-100">
              <h3 className="text-[clamp(1.3rem,2vw,2rem)] font-semibold text-[#1877F2] mb-6 border-b-2 border-blue-200 pb-2">
                {service.title}
              </h3>
              <ul className="space-y-[clamp(0.3rem,1vw,1rem)] text-gray-700">
                {service.content.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[clamp(1.1rem,2vw,1.5rem)] text-[#1877F2] font-bold">
                      •
                    </span>
                    <p className="text-[clamp(0.95rem,1.5vw,1.15rem)] leading-relaxed">
                      {typeof detail === 'string' ? (
                        detail
                      ) : detail && detail.type === 'a' ? (
                        <a
                          href={detail.props.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1877F2] hover:text-blue-500 underline transition-colors duration-200"
                        >
                          {detail.props.children}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
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
