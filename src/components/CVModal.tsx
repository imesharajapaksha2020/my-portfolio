'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';
import {
  PERSONAL_INFO,
  EXPERIENCE_ITEMS,
  PUBLICATIONS,
  RESEARCH_PROJECTS,
  CONFERENCE_PRESENTATIONS,
  ACADEMIC_REFERENCES,
  CERTIFICATIONS
} from '@/data/portfolioData';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  GraduationCap,
  Award,
  CheckCircle,
  Building2,
  Calendar,
  Sparkles,
  Phone,
  Globe,
  UserCheck
} from 'lucide-react';

export default function CVModal() {
  const { isCVModalOpen, setIsCVModalOpen, logInteraction } = usePortfolio();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isCVModalOpen) return null;

  const handleDownloadCV = () => {
    // Increment session engagement tracker
    logInteraction('Downloaded Academic CV (TXT/PDF)', 'Full Academic CV', 'FileText');

    // Create a printable text formatted academic document
    const element = document.createElement('a');
    const cvTextContent = `================================================================================
CURRICULUM VITAE: IMESHA RAJAPAKSHA
Statistics and Operations Research
Operations Research · Optimization · Statistical Modelling · Biostatistics
================================================================================

CONTACT INFORMATION:
- Full Name: Imesha Rajapaksha
- Address/Location: Sri Lanka
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- GitHub: ${PERSONAL_INFO.github}
- Google Scholar: ${PERSONAL_INFO.googleScholar}
- ResearchGate: ${PERSONAL_INFO.researchGate}

ACADEMIC PROFILE:
Statistics and Operations Research graduate with a strong academic foundation in operations
research, optimization, mathematical modelling, statistics, and quantitative decision-making,
complemented by research experience in biostatistics, epidemiology, clinical research, and healthcare
data analysis. Primary academic interests lie in applying operations research and statistical
methodology to complex real-world decision problems, particularly through optimization, queueing
theory, simulation, network modelling, and predictive analytics, alongside research experience
applying quantitative methods to medical and public-health problems, including oncology,
post-operative outcomes, and disease surveillance. Currently a Temporary Lecturer in the Department
of Community Medicine, Faculty of Medicine, University of Peradeniya, contributing to research
involving statistical analysis, research methodology, epidemiology, and health-related data.
Seeking MSc/PhD study in Operations Research, Statistics, Biostatistics, Applied Mathematics,
or related quantitative disciplines.

RESEARCH INTERESTS:
- Operations Research: Optimization, mathematical modelling, queueing theory, simulation,
  network optimization, transportation systems, decision modelling, and resource allocation.
- Statistics: Statistical modelling, statistical inference, regression analysis, multivariate
  statistics, experimental design, and quantitative data analysis.
- Biostatistics: Clinical data analysis, epidemiology, survival analysis, predictive modelling,
  medical statistics, and evidence-based healthcare research.
- Data Science & Machine Learning: Predictive modelling, machine learning, data preprocessing,
  statistical learning, and computational methods.

EDUCATION:
- B.Sc. (Hons) in Statistics and Operations Research
  Faculty of Science, University of Peradeniya, Sri Lanka
  Second Class Upper Division; GPA: 3.4/4.00 (2020 – 2025)
  * Major academic areas: Operations Research, Statistics, Mathematics, and Computer Science.
  * Undergraduate training included mathematical methods, optimization, statistical modelling,
    probability, statistical inference, and computational techniques.
- G.C.E. Advanced Level – Physical Science Stream
  Bandaranayake Central College, Veyangoda, Sri Lanka

RESEARCH & ACADEMIC EXPERIENCE:
1. Temporary Lecturer
   Department of Community Medicine, Faculty of Medicine, University of Peradeniya (2026 – Present)
   - Support undergraduate research activities from research design and data collection through
     statistical analysis and interpretation.
   - Contribute to quantitative research involving epidemiological and public-health data.
   - Work with Weekly Epidemiological Reports and disease surveillance data for statistical
     analysis and predictive modelling.
   - Apply statistical methods to support evidence-based interpretation of health and disease patterns.

2. Research Assistant
   Department of Surgery, Faculty of Medicine, University of Kelaniya (2026)
   - Contribute to clinical research involving breast cancer, colorectal cancer, clinicopathological
     characteristics, and treatment outcomes.
   - Perform data cleaning, statistical analysis, interpretation, and preparation of research outputs.
   - Apply statistical methods to investigate clinical characteristics, treatment outcomes, recurrence,
     and prognostic factors.

3. Research Assistant
   Department of Anaesthesiology, Faculty of Medicine, University of Peradeniya (2026)
   - Contributed to quantitative research and clinical data analysis.
   - Assisted with research data management, statistical analysis, and interpretation of healthcare
     related findings.

ADDITIONAL PROFESSIONAL EXPERIENCE:
- Management Intern – WSAP (NZ) Phase II
  Career Guidance Unit, University of Peradeniya (2024 – 2025)
  - Developed and maintained a database of Statistics and Operations Research students.
  - Awarded the WSAP (NZ) Phase II traineeship in October 2024.

SELECTED RESEARCH PROJECTS:
- A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings (Python, PuLP)
- Optimization Mathematical Modelling Using Excel
- Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes in Hepatobiliary and Pancreatic Surgical Patients
- Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age
- Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes (N=587)
- Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence (CNTH Database 2019–2024)
- Weekly Epidemiological Report Disease Surveillance and Prediction Dataset (13 diseases, 24 districts, 2008–2026)
- Exploring Heart Disease Predictors with Multivariate Techniques (PCA, Factor Analysis, Discriminant Analysis)
- Laptop Price Prediction Using Machine Learning (Random Forest Regression, 75% accuracy)

PUBLICATIONS (THE SRI LANKA JOURNAL OF SURGERY, SEPTEMBER 2026):
1. "Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age: A Registry-Based Study at a Dedicated Breast Centre"
   The Sri Lanka Journal of Surgery, September 2026, Volume 44, Supplement S1.
   (Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka)

2. "Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes"
   The Sri Lanka Journal of Surgery, September 2026, Volume 44, Supplement S1.
   (Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka)

3. "Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence: A Retrospective Single-Centre Study from Colombo North Teaching Hospital, Sri Lanka"
   The Sri Lanka Journal of Surgery, September 2026, Volume 44, Supplement S1.
   (Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka)

CONFERENCE PRESENTATIONS (ORAL PRESENTATIONS):
1. Oral Presentation – SICET 2026 (Paper ID 76):
   "A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings." (2026)
2. Oral Presentation – iPURSE 2026 (Track 1, Paper ID 578):
   "Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes in Hepatobiliary and Pancreatic Surgical Patients in Sri Lanka." (2026)
3. Oral Presentation – SURS 2026 (Undergraduate Research Symposium at the University of Peradeniya):
   "A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings: Case study of Mirigama, Sri Lanka" (2026)

TEACHING & OUTREACH:
- Temporary Lecturer, Department of Community Medicine, Faculty of Medicine, University of Peradeniya
- Seminar Facilitator, Operations Research Society, University of Peradeniya (2026 – Present)
- Seminar Facilitator, Statistical Circle, University of Peradeniya
- Seminar Programme Contributor, Athwela Seminar Programme, University of Peradeniya

TECHNICAL SKILLS:
- Programming: Python, R, RStudio, C, Java, HTML, CSS
- Statistical Computing: Statistical modelling, regression analysis, multivariate analysis, data cleaning, EDA
- Operations Research: Optimization, mathematical modelling, queueing theory, simulation, network optimization
- Machine Learning: Predictive modelling, Random Forest, scikit-learn, Pandas, NumPy
- Data Management: Data preprocessing, structured dataset creation, data quality checking

CERTIFICATIONS:
- Python – Introduction to Data Science and Machine Learning A–Z, Udemy
- Professional Diploma in Technical Project Management, MTF Institute
- Business Science Method, Analysis and Research Methodologies, MTF Institute

AWARDS & ACHIEVEMENTS:
- B.Sc. (Hons) in Statistics and Operations Research – Second Class Upper Division (GPA: 3.4/4.00)
- WSAP (NZ) Phase II Traineeship – October 2024

LANGUAGES:
- Sinhala – Native / Fluent
- English – Professional working proficiency

ACADEMIC REFERENCES:
1. Dr. Nilan Manoj Chathuranga
   Senior Lecturer, Department of Mathematics, Faculty of Science, University of Peradeniya, Sri Lanka
   Email: chathuranga.mudalige@sci.pdn.ac.lk

2. Dr. Niluka Rodrigo
   Senior Lecturer, Department of Mathematics, Faculty of Science, University of Peradeniya, Sri Lanka
   Email: nilukar@sci.pdn.ac.lk

================================================================================
Generated via Imesha Rajapaksha Academic Portfolio System
================================================================================`;

    const file = new Blob([cvTextContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Imesha_Rajapaksha_CV.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    logInteraction('Printed Academic CV', 'Triggered browser print', 'Printer');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 dark:bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-white p-6 sm:p-10 space-y-6">
        
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Curriculum Vitae Preview</h2>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              Authentic CV Synchronized
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
              title="Print to PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print to PDF</span>
            </button>

            <button
              id="modal-cv-download-trigger"
              onClick={handleDownloadCV}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download CV (.txt)'}</span>
            </button>

            <button
              onClick={() => setIsCVModalOpen(false)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Academic CV Printable Document Body */}
        <div className="space-y-8 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-sans shadow-xs">
          
          {/* Header with Academic Portrait */}
          <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                Statistics & Operations Research • Biostatistics • Optimization
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-slate-600 dark:text-slate-400 text-xs pt-1">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 shadow-sm relative bg-slate-100 dark:bg-slate-800">
              <Image
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Academic Profile */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Academic Profile
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <strong className="text-sm font-bold text-slate-900 dark:text-white">University of Peradeniya, Sri Lanka</strong>
                  <p className="text-slate-700 dark:text-slate-300">
                    B.Sc. (Hons) in Statistics and Operations Research • Second Class Upper Division (GPA: 3.4/4.00)
                  </p>
                </div>
                <span className="font-mono text-slate-500 dark:text-slate-400 text-xs shrink-0">
                  2020 – 2025
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                <div>
                  <strong className="text-slate-900 dark:text-white">Bandaranayake Central College, Veyangoda</strong>
                  <p className="text-slate-600 dark:text-slate-400">G.C.E. Advanced Level – Physical Science Stream</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Research Appointments */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Academic & Research Appointments
            </h2>
            {EXPERIENCE_ITEMS.filter((e) => e.type === 'Academic Teaching' || e.type === 'Research Appointment').map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {exp.title} — {exp.institution}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-xs">{exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs italic">
                  {exp.department}
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-xs">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                {/* Professorial Surgical Unit / Appointment Image Callout in CV */}
                {exp.imageUrl && (
                  <div className="mt-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div className="w-14 h-10 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 shadow-2xs bg-white dark:bg-slate-900 flex items-center justify-center p-0.5">
                      <Image
                        src={exp.imageUrl}
                        alt={exp.imageCaption || exp.title}
                        width={56}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-300 leading-tight">
                      <span className="font-bold text-slate-900 dark:text-white block">
                        {exp.imageCaption || exp.title}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {exp.institution} • {exp.period}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Additional Professional Experience
            </h2>
            {EXPERIENCE_ITEMS.filter((e) => e.type === 'Professional Experience').map((exp) => (
              <div key={exp.id} className="space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {exp.title} — {exp.institution}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-xs">{exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs italic">{exp.department}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                {/* WSAP Ceremony Photo Callout in CV Preview */}
                {exp.imageUrl && (
                  <div className="mt-2 p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 flex items-center gap-3">
                    <div className="w-16 h-12 rounded-lg overflow-hidden border border-amber-500/30 shrink-0 shadow-2xs bg-slate-900">
                      <Image
                        src={exp.imageUrl}
                        alt="WSAP Traineeship Ceremony"
                        width={64}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-300 leading-tight">
                      <span className="font-bold text-slate-900 dark:text-white block flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        Traineeship Awarding Ceremony – WSAP (NZ) Phase II
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        Career Guidance Unit, University of Peradeniya • October 2024
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Publications */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 dark:border-slate-800 pb-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Published Research Abstracts in The Sri Lanka Journal of Surgery (September 2026)
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
                ISSN 1391-491X • Vol. 44 Supp. S1
              </span>
            </div>

            {/* Official Journal Cover Callout Banner */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-2xs">
              <div className="w-12 h-16 rounded overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 shadow-xs bg-slate-900">
                <Image
                  src="/sljs-cover-2026.jpg"
                  alt="The Sri Lanka Journal of Surgery Cover"
                  width={48}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5 text-xs">
                <p className="font-bold text-slate-900 dark:text-white">
                  The Sri Lanka Journal of Surgery — Official Issue Supplement S1
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-tight">
                  The Sri Lanka Surgical Congress 2026 • 55th Annual Academic Sessions of The College of Surgeons of Sri Lanka (Joint International Conference with RCSEd & SAARC Surgical Care Society)
                </p>
                <p className="text-emerald-700 dark:text-emerald-400 text-[11px] font-mono">
                  September 2026 • Colombo, Sri Lanka • 3 Published Peer-Reviewed Abstracts
                </p>
              </div>
            </div>

            {PUBLICATIONS.map((pub, idx) => (
              <div key={pub.id} className="space-y-1 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">
                  [{idx + 1}] {pub.title}
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  {pub.authors.join(', ')} (2026).{' '}
                  <span className="italic font-semibold text-slate-800 dark:text-slate-200">{pub.journal}</span>, {pub.issue}.
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Presented at the Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka.
                </p>
              </div>
            ))}
          </div>

          {/* Conference Oral Presentations */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Conference Presentations (Oral Presentations)
            </h2>
            {CONFERENCE_PRESENTATIONS.map((pres, idx) => (
              <div key={pres.id} className="space-y-0.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    [{idx + 1}] {pres.conference}: &ldquo;{pres.title}&rdquo;
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-mono text-xs">{pres.year}</span>
                </div>
                {pres.description && (
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">{pres.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Academic References */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Academic References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {ACADEMIC_REFERENCES.map((ref, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{ref.name}</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">{ref.title}, {ref.department}</div>
                  <div className="text-slate-600 dark:text-slate-400">{ref.faculty}, {ref.institution}</div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-mono pt-0.5">{ref.email}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
