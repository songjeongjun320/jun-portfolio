export interface IntroContent {
  name: string;
  title: string;
  description: string;
  details: string[];
}

export interface SkillsContent {
  languages: { name: string; icon: string }[];
  frameworks: string[];
  tools: string[];
  skills: string[];
  methodologies: string[];
  operatingSystems: string[];
}

export interface Section {
  id: string;
  title: string;
  content:
    | string[]
    | IntroContent
    | Experience[]
    | Research[]
    | MilitaryService[]
    | SkillsContent;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Research {
  title: string;
  details: string[];
}

export interface MilitaryService {
  title: string;
  content: (string | JSX.Element)[];
}
