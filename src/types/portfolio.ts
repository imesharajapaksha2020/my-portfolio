export interface ResearchPillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  coreAreas: string[];
  keyMethodologies: string[];
  sampleFormulation: {
    title: string;
    latex: string;
    description: string;
  };
}

export interface ResearchProject {
  id: string;
  title: string;
  category: 'Operations Research' | 'Biostatistics & Data Science' | 'Stochastic Modeling';
  summary: string;
  role: string;
  duration: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  problemStatement: string;
  mathematicalModel: {
    objective: string;
    constraints: string[];
    variables: string;
  };
  keyFindings: string[];
  codeSnippet: string;
  githubUrl?: string;
  paperUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  issue: string;
  date: string;
  doi?: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  impactScore?: string;
  bibtex: string;
  studyType: string;
  journalCoverUrl?: string;
  issn?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  institution: string;
  department: string;
  location: string;
  period: string;
  type: 'Academic Teaching' | 'Research Appointment' | 'Education' | 'Professional Experience' | 'Outreach & Leadership';
  summary: string;
  responsibilities: string[];
  technologiesUsed: string[];
  keyAccomplishments: string[];
  imageUrl?: string;
  imageCaption?: string;
}

export interface ConferencePresentation {
  id: string;
  title: string;
  conference: string;
  trackOrId?: string;
  year: string;
  type: 'Oral Presentation' | 'Poster Presentation';
  location?: string;
  description?: string;
}

export interface AcademicReference {
  name: string;
  title: string;
  department: string;
  faculty: string;
  institution: string;
  email: string;
  phone?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    librariesOrPackages: string[];
    academicApplication: string;
  }[];
}

export interface Coursework {
  category: string;
  courses: {
    code: string;
    name: string;
    grade: string;
    relevance: string;
  }[];
}

export interface EngagementLog {
  timestamp: string;
  action: string;
  details: string;
  iconName: string;
}

export interface ProfessorNote {
  id: string;
  text: string;
  createdAt: string;
}
