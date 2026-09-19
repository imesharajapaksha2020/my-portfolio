'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import {
  X,
  Download,
  Printer,
  FileText
} from 'lucide-react';

export default function CVModal() {
  const { isCVModalOpen, setIsCVModalOpen, logInteraction } = usePortfolio();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isCVModalOpen) return null;

  const handleDownloadCV = () => {
    // Increment session engagement tracker
    logInteraction('Downloaded Academic CV (PDF)', 'Full Academic CV', 'FileText');

    // Download authentic academic PDF document
    const link = document.createElement('a');
    link.href = '/Imesha_Rajapaksha_CV.pdf';
    link.download = 'Imesha_Rajapaksha_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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
              <span>{downloadSuccess ? 'Downloaded!' : 'Download CV (.pdf)'}</span>
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
        <div className="bg-white dark:bg-slate-950 p-6 sm:p-10 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-serif leading-relaxed shadow-sm text-xs sm:text-[13px]">

          {/* CV Header: Centered Academic Style */}
          <div className="text-center pb-4 mb-4 border-b border-slate-300 dark:border-slate-700">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">
              Imesha Rajapaksha
            </h1>
            <p className="text-sm font-serif text-slate-800 dark:text-slate-200 mt-1">
              Statistics and Operations Research
            </p>
            <p className="text-xs font-serif text-slate-700 dark:text-slate-300 mt-0.5">
              Operations Research · Optimization · Statistical Modelling · Biostatistics
            </p>
            <p className="text-xs font-serif text-slate-700 dark:text-slate-300 mt-1">
              Sri Lanka &nbsp;|&nbsp;{' '}
              <a href="mailto:imesharajapaksha2020@gmail.com" className="hover:underline text-blue-700 dark:text-blue-400">
                imesharajapaksha2020@gmail.com
              </a>{' '}
              &nbsp;|&nbsp;{' '}
              <a href="tel:+94782492665" className="hover:underline text-blue-700 dark:text-blue-400">
                +94 78 249 2665
              </a>
            </p>
            <div className="text-xs font-serif text-slate-700 dark:text-slate-300 mt-1 flex flex-wrap justify-center gap-x-2">
              <a href="https://imesha-sewwandhi-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 dark:text-blue-400 font-semibold">
                Portfolio Website
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/imesharajapaksha1998/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 dark:text-blue-400">
                LinkedIn
              </a>
              <span>|</span>
              <a href="https://github.com/imesharajapaksha2020" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 dark:text-blue-400">
                GitHub
              </a>
              <span>|</span>
              <a href="https://scholar.google.com/citations?user=imesha_rajapaksha" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 dark:text-blue-400">
                Google Scholar
              </a>
              <span>|</span>
              <a href="https://researchgate.net/profile/Imesha-Rajapaksha" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 dark:text-blue-400">
                ResearchGate
              </a>
            </div>
          </div>

          {/* 1. Academic Profile */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Academic Profile
            </h2>
            <p className="text-justify text-slate-800 dark:text-slate-200 leading-normal">
              Statistics and Operations Research graduate with a strong academic foundation in operations research,
              optimization, mathematical modelling, statistics, and quantitative decision-making, complemented by research
              experience in biostatistics, epidemiology, clinical research, and healthcare data analysis. Primary academic
              interests lie in applying operations research and statistical methodology to complex real-world decision
              problems, particularly through optimization, queueing theory, simulation, network modelling, and predictive
              analytics, alongside research experience applying quantitative methods to medical and public-health problems,
              including oncology, post-operative outcomes, and disease surveillance. Currently a Temporary Lecturer in the
              Department of Community Medicine, Faculty of Medicine, University of Peradeniya, contributing to research
              involving statistical analysis, research methodology, epidemiology, and health-related data. Seeking MSc/PhD
              study in Operations Research, Statistics, Biostatistics, Applied Mathematics, or related quantitative disciplines.
            </p>
          </div>

          {/* 2. Research Interests */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Research Interests
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-800 dark:text-slate-200">
              <li>
                <strong>Operations Research:</strong> Optimization, mathematical modelling, queueing theory, simulation, network optimization, transportation systems, decision modelling, and resource allocation.
              </li>
              <li>
                <strong>Statistics:</strong> Statistical modelling, statistical inference, regression analysis, multivariate statistics, experimental design, and quantitative data analysis.
              </li>
              <li>
                <strong>Biostatistics:</strong> Clinical data analysis, epidemiology, survival analysis, predictive modelling, medical statistics, and evidence-based healthcare research.
              </li>
              <li>
                <strong>Data Science &amp; Machine Learning:</strong> Predictive modelling, machine learning, data preprocessing, statistical learning, and computational methods.
              </li>
            </ul>
          </div>

          {/* 3. Education */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">B.Sc. (Hons) in Statistics and Operations Research</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2020 – 2025</span>
                </div>
                <div className="text-slate-800 dark:text-slate-200">Faculty of Science, University of Peradeniya, Sri Lanka</div>
                <div className="text-slate-800 dark:text-slate-200">Second Class Upper Division; GPA: 3.4/4.00</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-1 text-slate-800 dark:text-slate-200">
                  <li>Major academic areas: Operations Research, Statistics, Mathematics, and Computer Science.</li>
                  <li>Undergraduate training included mathematical methods, optimization, statistical modelling, probability, statistical inference, and computational techniques.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900 dark:text-white">G.C.E. Advanced Level – Physical Science Stream</div>
                <div className="text-slate-800 dark:text-slate-200">Bandaranayake Central College, Veyangoda, Sri Lanka</div>
              </div>
            </div>
          </div>

          {/* 4. Research Experience */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Research Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Temporary Lecturer</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026 – Present</span>
                </div>
                <div className="italic text-slate-800 dark:text-slate-200">Department of Community Medicine, Faculty of Medicine, University of Peradeniya</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-1 text-slate-800 dark:text-slate-200">
                  <li>Support undergraduate research activities from research design and data collection through statistical analysis and interpretation.</li>
                  <li>Contribute to quantitative research involving epidemiological and public-health data.</li>
                  <li>Work with Weekly Epidemiological Reports and disease surveillance data for statistical analysis and predictive modelling.</li>
                  <li>Apply statistical methods to support evidence-based interpretation of health and disease patterns.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Research Assistant</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026</span>
                </div>
                <div className="italic text-slate-800 dark:text-slate-200">Department of Surgery, Faculty of Medicine, University of Kelaniya</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-1 text-slate-800 dark:text-slate-200">
                  <li>Contribute to clinical research involving breast cancer, colorectal cancer, clinicopathological characteristics, and treatment outcomes.</li>
                  <li>Perform data cleaning, statistical analysis, interpretation, and preparation of research outputs.</li>
                  <li>Apply statistical methods to investigate clinical characteristics, treatment outcomes, recurrence, and prognostic factors.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Research Assistant</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026</span>
                </div>
                <div className="italic text-slate-800 dark:text-slate-200">Department of Anaesthesiology, Faculty of Medicine, University of Peradeniya</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-1 text-slate-800 dark:text-slate-200">
                  <li>Contributed to quantitative research and clinical data analysis.</li>
                  <li>Assisted with research data management, statistical analysis, and interpretation of healthcare-related findings.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Selected Research Projects */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Selected Research Projects
            </h2>

            <div className="space-y-3">
              <div>
                <h3 className="font-serif font-bold italic text-slate-900 dark:text-white mb-1">
                  Operations Research, Optimization &amp; Transportation
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-800 dark:text-slate-200 text-justify">
                  <li>
                    <strong>A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings.</strong> Developed a queueing-based adaptive traffic signal control framework for a railway level crossing and three-road intersection, incorporating Poisson arrival processes, queueing theory, mathematical optimization, and simulation using Python and PuLP. The framework considered normal, railway preemption, and recovery operating modes to improve traffic flow and reduce queueing delay.
                  </li>
                  <li>
                    <strong>Optimization Mathematical Modelling Using Excel.</strong> Developed optimization models using mathematical programming techniques and Excel-based computational methods for decision-making problems.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold italic text-slate-900 dark:text-white mb-1">
                  Statistics, Biostatistics &amp; Data Science
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-800 dark:text-slate-200 text-justify">
                  <li>
                    <strong>Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes in Hepatobiliary and Pancreatic Surgical Patients in Sri Lanka.</strong> Prospective clinical research investigating the utility of mGPS for predicting post-operative outcomes, involving statistical analysis of pre-operative inflammatory and nutritional markers, post-operative complications, length of hospital stay, ICU admission, and mortality-related outcomes.
                  </li>
                  <li>
                    <strong>Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age: A Registry-Based Study at a Dedicated Breast Centre.</strong> Registry-based study investigating demographic, clinicopathological, receptor-status, lymph-node, tumour-grade, and prognostic characteristics of breast cancer among women younger than 40 years.
                  </li>
                  <li>
                    <strong>Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes.</strong> Evaluated tumour characteristics and clinical outcomes across four hormone receptor (HR) subtypes – ER−/PR−, ER+/PR−, ER+/PR+, and ER−/PR+ – using data from 587 breast cancer patients.
                  </li>
                  <li>
                    <strong>Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence: A Retrospective Single-Centre Study from Colombo North Teaching Hospital, Sri Lanka.</strong> Examined whether the time interval between breast-conserving surgery and adjuvant radiotherapy affects in-breast tumour recurrence, using data from the Colombo North Teaching Hospital breast cancer database (2019–2024); contributed to the statistical analysis.
                  </li>
                  <li>
                    <strong>Weekly Epidemiological Report Disease Surveillance and Prediction Dataset.</strong> Developing a structured longitudinal dataset from Weekly Epidemiological Reports covering 13 diseases, 24 districts, and the period 2008–2026, supporting statistical analysis and predictive modelling of disease patterns.
                  </li>
                  <li>
                    <strong>Exploring Heart Disease Predictors with Multivariate Techniques.</strong> Applied Principal Component Analysis, Factor Analysis, Discriminant Analysis, and Canonical Analysis to investigate relationships among heart disease risk factors using multivariate statistical techniques.
                  </li>
                  <li>
                    <strong>An Overview of Bayesian Exploration and Modeling of Heart Disease Risk Factors.</strong> Explored Bayesian statistical concepts and modelling approaches for analysing and interpreting heart disease risk factors.
                  </li>
                  <li>
                    <strong>Laptop Price Prediction Using Machine Learning.</strong> Developed a web-based machine-learning application using Python, Pandas, NumPy, HTML/CSS, and Random Forest Regression on a dataset of 1,303 observations, achieving approximately 75% prediction accuracy.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Publications */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Publications
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-800 dark:text-slate-200">
              <li>
                Published research abstract: <strong>Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age: A Registry-Based Study at a Dedicated Breast Centre.</strong> <em>The Sri Lanka Journal of Surgery</em>, September 2026, Volume 44, Supplement S1, as part of the Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka.
              </li>
              <li>
                Published research abstract: <strong>Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes.</strong> <em>The Sri Lanka Journal of Surgery</em>, September 2026, Volume 44, Supplement S1, as part of the Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka.
              </li>
              <li>
                Published research abstract: <strong>Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence: A Retrospective Single-Centre Study from Colombo North Teaching Hospital, Sri Lanka.</strong> <em>The Sri Lanka Journal of Surgery</em>, September 2026, Volume 44, Supplement S1, as part of the Sri Lanka Surgical Congress 2026 – 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka.
              </li>
            </ul>
          </div>

          {/* 7. Conference Presentations */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Conference Presentations
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Oral Presentation – SICET 2026 (Paper ID 76)</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026</span>
                </div>
                <div className="text-slate-800 dark:text-slate-200">
                  “A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings.”
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Oral Presentation – iPURSE 2026 (Track 1, Paper ID 578)</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026</span>
                </div>
                <div className="text-slate-800 dark:text-slate-200">
                  “Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes in Hepatobiliary and Pancreatic Surgical Patients in Sri Lanka.”
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Oral Presentation – SURS 2026 (Undergraduate Research Symposium at the University of Peradeniya)</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026</span>
                </div>
                <div className="text-slate-800 dark:text-slate-200">
                  “A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings.Case study of Mirigama, Sri Lanka”
                </div>
              </div>
            </div>
          </div>

          {/* 8. Teaching Experience */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Teaching Experience
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Temporary Lecturer</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026 – Present</span>
                </div>
                <div className="italic text-slate-800 dark:text-slate-200">Department of Community Medicine, Faculty of Medicine, University of Peradeniya</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-0.5 text-slate-800 dark:text-slate-200">
                  <li>Undergraduate academic support and research supervision.</li>
                  <li>Guidance in research methodology, data analysis, and interpretation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-slate-900 dark:text-white">Seminar Facilitator</span>
                  <span className="italic text-slate-700 dark:text-slate-300">2026 – Present</span>
                </div>
                <div className="italic text-slate-800 dark:text-slate-200">Operations Research Society, University of Peradeniya</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-0.5 text-slate-800 dark:text-slate-200">
                  <li>Participated in academic seminar and knowledge-sharing activities related to Operations Research and quantitative methods.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900 dark:text-white">Seminar Facilitator</div>
                <div className="italic text-slate-800 dark:text-slate-200">Statistical Circle, University of Peradeniya</div>
                <ul className="list-disc pl-5 space-y-0.5 mt-0.5 text-slate-800 dark:text-slate-200">
                  <li>Participated in statistical seminars and academic activities.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900 dark:text-white">Seminar Programme Contributor</div>
                <div className="italic text-slate-800 dark:text-slate-200">Athwela Seminar Programme, University of Peradeniya</div>
              </div>
            </div>
          </div>

          {/* 9. Additional Professional Experience */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Additional Professional Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-serif">
                <span className="font-bold text-slate-900 dark:text-white">Management Intern – WSAP (NZ) Phase II</span>
                <span className="italic text-slate-700 dark:text-slate-300">2024 – 2025</span>
              </div>
              <div className="italic text-slate-800 dark:text-slate-200">Career Guidance Unit, University of Peradeniya</div>
              <ul className="list-disc pl-5 space-y-0.5 mt-1 text-slate-800 dark:text-slate-200">
                <li>Developed and maintained a database of Statistics and Operations Research students.</li>
                <li>Awarded the WSAP (NZ) Phase II traineeship in October 2024.</li>
              </ul>
            </div>
          </div>

          {/* 10. Technical Skills */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Technical Skills
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-800 dark:text-slate-200">
              <li><strong>Programming &amp; Analysis:</strong> Python, R, RStudio, C, Java</li>
              <li><strong>Statistical Computing:</strong> Statistical modelling, regression analysis, multivariate analysis, data cleaning, exploratory data analysis</li>
              <li><strong>Operations Research:</strong> Optimization, mathematical modelling, queueing theory, simulation, network optimization, decision modelling</li>
              <li><strong>Machine Learning:</strong> Predictive modelling, Random Forest, machine learning workflows, Pandas, NumPy</li>
              <li><strong>Data Management:</strong> Data preprocessing, database development, structured dataset creation, data quality checking</li>
              <li><strong>Web Technologies:</strong> HTML, CSS</li>
              <li><strong>Research:</strong> Research methodology, statistical analysis, clinical data analysis, epidemiological analysis, scientific reporting</li>
            </ul>
          </div>

          {/* 11. Professional Development & Certifications */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Professional Development &amp; Certifications
            </h2>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-800 dark:text-slate-200">
              <li>Python – Introduction to Data Science and Machine Learning A–Z, Udemy.</li>
              <li>Professional Diploma in Technical Project Management, MTF Institute.</li>
              <li>Business Science Method, Analysis and Research Methodologies, MTF Institute.</li>
            </ul>
          </div>

          {/* 12. Awards & Academic Achievements */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Awards &amp; Academic Achievements
            </h2>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-800 dark:text-slate-200">
              <li>B.Sc. (Hons) in Statistics and Operations Research – Second Class Upper Division, University of Peradeniya.</li>
              <li>WSAP (NZ) Phase II Traineeship – October 2024.</li>
            </ul>
          </div>

          {/* 13. Languages */}
          <div className="mb-5">
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Languages
            </h2>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-800 dark:text-slate-200">
              <li>Sinhala – Native / Fluent</li>
              <li>English – Professional working proficiency</li>
            </ul>
          </div>

          {/* 14. Academic References */}
          <div>
            <h2 className="text-sm font-serif font-bold text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-0.5 mb-2">
              Academic References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-800 dark:text-slate-200">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Dr. Nilan Manoj Chathuranga</div>
                <div>Senior Lecturer</div>
                <div>Department of Mathematics</div>
                <div>Faculty of Science</div>
                <div>University of Peradeniya, Sri Lanka</div>
                <div>
                  <a href="mailto:chathuranga.mudalige@sci.pdn.ac.lk" className="text-blue-700 dark:text-blue-400 hover:underline">
                    chathuranga.mudalige@sci.pdn.ac.lk
                  </a>
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-900 dark:text-white">Dr. Niluka Rodrigo</div>
                <div>Senior Lecturer</div>
                <div>Department of Mathematics</div>
                <div>Faculty of Science</div>
                <div>University of Peradeniya, Sri Lanka</div>
                <div>
                  <a href="mailto:nilukar@sci.pdn.ac.lk" className="text-blue-700 dark:text-blue-400 hover:underline">
                    nilukar@sci.pdn.ac.lk
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
