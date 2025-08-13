export type DevLogEntry = {
  id: string;
  date: string;
  summary: string;
  details?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
};

export type DevProject = {
  id: string;
  name: string;
  description?: string;
  url?: string;
  stack?: string[];
  logs: DevLogEntry[];
};
