// Pure Node.js script to generate a multi-page, publication-quality academic PDF CV for Imesha Rajapaksha
// No external dependencies needed - uses valid PDF 1.4 specification
const fs = require('fs');
const path = require('path');

function createAcademicPDF() {
  const pages = [];
  const pageWidth = 595.28; // A4 points
  const pageHeight = 841.89; // A4 points
  const margin = 45;
  const contentWidth = pageWidth - (margin * 2);

  class PDFPage {
    constructor() {
      this.stream = [];
      this.y = pageHeight - 50;
    }

    addRaw(cmd) {
      this.stream.push(cmd);
    }

    addHeader() {
      // Name
      this.stream.push(`BT /F2 20 Tf 0.02 0.40 0.28 rg ${margin} ${this.y} Td (IMESHA RAJAPAKSHA) Tj ET`);
      this.y -= 16;
      // Subtitle
      this.stream.push(`BT /F2 10 Tf 0.15 0.20 0.30 rg ${margin} ${this.y} Td (Operations Research | Statistics | Biostatistics | Mathematical Modelling) Tj ET`);
      this.y -= 13;
      // Contact line 1
      this.stream.push(`BT /F1 8.5 Tf 0.35 0.40 0.45 rg ${margin} ${this.y} Td (Email: imesharajapaksha2020@gmail.com   |   Phone: +94 78 249 2665   |   Location: Sri Lanka) Tj ET`);
      this.y -= 11;
      // Contact line 2
      this.stream.push(`BT /F1 8.5 Tf 0.35 0.40 0.45 rg ${margin} ${this.y} Td (LinkedIn: linkedin.com/in/imesharajapaksha1998/   |   GitHub: github.com/imesharajapaksha2020) Tj ET`);
      this.y -= 11;
      this.stream.push(`BT /F1 8.5 Tf 0.35 0.40 0.45 rg ${margin} ${this.y} Td (Google Scholar: Imesha Rajapaksha   |   ResearchGate: Imesha-Rajapaksha) Tj ET`);
      this.y -= 12;

      // Decorative divider rule
      this.stream.push(`0.02 0.55 0.38 RG 1.5 w ${margin} ${this.y} m ${pageWidth - margin} ${this.y} l S`);
      this.y -= 16;
    }

    addSection(title) {
      if (this.y < 90) return false;
      this.stream.push(`0.02 0.45 0.32 RG 0.75 w ${margin} ${this.y - 2} m ${pageWidth - margin} ${this.y - 2} l S`);
      this.stream.push(`BT /F2 11 Tf 0.02 0.45 0.32 rg ${margin} ${this.y} Td (${this.escape(title.toUpperCase())}) Tj ET`);
      this.y -= 16;
      return true;
    }

    addParagraph(text, font = '/F1', size = 8.5, color = '0.15 0.18 0.22 rg', leading = 11) {
      const words = text.split(' ');
      let line = '';
      const maxCharsPerLine = Math.floor(contentWidth / (size * 0.5));

      for (const word of words) {
        if ((line + ' ' + word).trim().length > maxCharsPerLine) {
          if (this.y < 45) return false;
          this.stream.push(`BT ${font} ${size} Tf ${color} ${margin} ${this.y} Td (${this.escape(line.trim())}) Tj ET`);
          this.y -= leading;
          line = word + ' ';
        } else {
          line += word + ' ';
        }
      }
      if (line.trim().length > 0) {
        if (this.y < 45) return false;
        this.stream.push(`BT ${font} ${size} Tf ${color} ${margin} ${this.y} Td (${this.escape(line.trim())}) Tj ET`);
        this.y -= leading;
      }
      return true;
    }

    addItemHeader(role, institution, period) {
      if (this.y < 60) return false;
      this.stream.push(`BT /F2 9.5 Tf 0.10 0.15 0.25 rg ${margin} ${this.y} Td (${this.escape(role)}) Tj ET`);
      if (period) {
        const periodWidth = period.length * 5;
        this.stream.push(`BT /F3 8.5 Tf 0.35 0.40 0.45 rg ${pageWidth - margin - periodWidth} ${this.y} Td (${this.escape(period)}) Tj ET`);
      }
      this.y -= 12;
      if (institution) {
        this.stream.push(`BT /F3 8.5 Tf 0.20 0.45 0.35 rg ${margin} ${this.y} Td (${this.escape(institution)}) Tj ET`);
        this.y -= 11;
      }
      return true;
    }

    addBullet(bulletText, size = 8.2, indent = 12) {
      if (this.y < 45) return false;
      const bulletX = margin + 4;
      const textX = margin + indent;
      const availableWidth = contentWidth - indent;
      const maxChars = Math.floor(availableWidth / (size * 0.48));

      this.stream.push(`BT /F2 ${size} Tf 0.02 0.50 0.35 rg ${bulletX} ${this.y} Td (-) Tj ET`);

      const words = bulletText.split(' ');
      let line = '';
      let isFirst = true;

      for (const word of words) {
        if ((line + ' ' + word).trim().length > maxChars) {
          if (this.y < 45) return false;
          this.stream.push(`BT /F1 ${size} Tf 0.20 0.22 0.25 rg ${textX} ${this.y} Td (${this.escape(line.trim())}) Tj ET`);
          this.y -= 10.5;
          line = word + ' ';
          isFirst = false;
        } else {
          line += word + ' ';
        }
      }
      if (line.trim().length > 0) {
        if (this.y < 45) return false;
        this.stream.push(`BT /F1 ${size} Tf 0.20 0.22 0.25 rg ${textX} ${this.y} Td (${this.escape(line.trim())}) Tj ET`);
        this.y -= 10.5;
      }
      return true;
    }

    addSpacer(pts = 6) {
      this.y -= pts;
    }

    addFooter(pageNumber, totalPages) {
      const footerY = 25;
      this.stream.push(`0.80 0.82 0.85 RG 0.5 w ${margin} ${footerY + 10} m ${pageWidth - margin} ${footerY + 10} l S`);
      this.stream.push(`BT /F1 7.5 Tf 0.45 0.50 0.55 rg ${margin} ${footerY} Td (Imesha Rajapaksha - Curriculum Vitae | Academic Operations Research & Biostatistics) Tj ET`);
      const pageStr = `Page ${pageNumber} of ${totalPages}`;
      this.stream.push(`BT /F1 7.5 Tf 0.45 0.50 0.55 rg ${pageWidth - margin - 50} ${footerY} Td (${pageStr}) Tj ET`);
    }

    escape(str) {
      return (str || '').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    }

    getContent() {
      return this.stream.join('\n');
    }
  }

  // --- PAGE 1 ---
  const p1 = new PDFPage();
  p1.addHeader();

  p1.addSection('Academic & Research Profile');
  p1.addParagraph(
    'Statistics and Operations Research graduate (Second Class Upper, GPA: 3.4/4.00, University of Peradeniya) with a rigorous quantitative preparation in mathematical programming, optimization, queueing systems, and predictive biostatistical modeling. Currently a Temporary Lecturer in the Department of Community Medicine, Faculty of Medicine, University of Peradeniya, and Research Assistant at University of Kelaniya. Published 3 peer-reviewed abstracts in The Sri Lanka Journal of Surgery (Sep 2026) and delivered 3 oral conference presentations (SICET, iPURSE, SURS). Seeking doctoral / masters research opportunities in Operations Research, Biostatistics, or Applied Quantitative Disciplines.'
  );
  p1.addSpacer(8);

  p1.addSection('Education');
  p1.addItemHeader('B.Sc. (Honours) in Statistics and Operations Research', 'Faculty of Science, University of Peradeniya, Sri Lanka', '2020 - 2025');
  p1.addBullet('Academic Distinction: Second Class Upper Division (Honours); Cumulative GPA: 3.40 / 4.00.');
  p1.addBullet('Core Curricular Tracks: Mixed-Integer Linear Programming, Dynamic Queueing Networks, Advanced Probability & Stochastic Modelling, Statistical Inference, Multivariate Methods, Real Analysis, and Algorithm Design.');
  p1.addBullet('Secondary: Bandaranayake Central College, Veyangoda - G.C.E. Advanced Level in Physical Science Stream.');
  p1.addSpacer(8);

  p1.addSection('Academic Appointments & Professional Experience');
  p1.addItemHeader('Temporary Lecturer', 'Department of Community Medicine, Faculty of Medicine, University of Peradeniya', '2026 - Present');
  p1.addBullet('Conduct undergraduate medical student tutorials and small-group learning in quantitative research methodology, biostatistics, epidemiological surveillance, and clinical evidence appraisal.');
  p1.addBullet('Direct statistical analysis of Weekly Epidemiological Reports (WER) dataset across 24 administrative health districts, structuring predictive time-series models for communicable diseases.');
  p1.addSpacer(4);

  p1.addItemHeader('Research Assistant', 'Department of Surgery, Faculty of Medicine, University of Kelaniya', '2026');
  p1.addBullet('Investigated multi-year clinical oncology registry data (N=587) on breast cancer clinicopathological heterogeneity, survival determinants, and interval-to-radiotherapy recurrence rates.');
  p1.addBullet('Derived prognostic risk models and co-authored 3 accepted scientific publications for the 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka.');
  p1.addSpacer(4);

  p1.addItemHeader('Research Assistant', 'Department of Anaesthesiology, Faculty of Medicine, University of Peradeniya', '2026');
  p1.addBullet('Collaborated on acute surgical patient cohorts, applying statistical inference and multivariate survival analysis to evaluate systemic inflammatory prognostic markers (mGPS).');
  p1.addSpacer(4);

  p1.addItemHeader('Management Intern - WSAP (NZ) Phase II', 'Career Guidance Unit, University of Peradeniya', '2024 - 2025');
  p1.addBullet('Recipient of competitive Work-Readiness and Skills Acquisition Programme (WSAP NZ Phase II) traineeship; developed structured student academic data archives.');

  pages.push(p1);

  // --- PAGE 2 ---
  const p2 = new PDFPage();
  p2.addSection('Selected Quantitative Research Projects');
  
  p2.addItemHeader('Adaptive Queueing-Based Traffic Signal Control for Grade Crossings', 'Undergraduate Honours Thesis & Research Project', 'Python, PuLP, SimPy');
  p2.addBullet('Formulated a mixed-integer dynamic programming and multi-server queueing model (M/M/c/K, M/G/1) optimizing preemption intervals and cycle times at Mirigama railway crossing.');
  p2.addBullet('Attained 31% reduction in mean queue length and 28% decrease in cumulative vehicular delays under sudden stochastic train arrival disturbances.');
  p2.addSpacer(4);

  p2.addItemHeader('Prognostic Value of Modified Glasgow Prognostic Score (mGPS) in HPB Surgery', 'Clinical Predictive Modelling with Peradeniya & Kelaniya Medical Units', 'R, Survival Analysis');
  p2.addBullet('Evaluated preoperative serum C-reactive protein and albumin levels in hepatobiliary and pancreatic surgical patients to forecast post-operative morbidities and 90-day survival.');
  p2.addSpacer(4);

  p2.addItemHeader('Epidemiology and Clinicopathological Profiles in Breast Cancer (N=587)', 'Faculty of Medicine, University of Kelaniya Registry Cohort', 'SPSS, Multivariate Analysis');
  p2.addBullet('Explored hormonal receptor subtypes (ER+/PR+, ER+/PR-, triple-negative) and assessed the hazard ratio of surgery-to-radiotherapy interval delays on locoregional recurrence.');
  p2.addSpacer(4);

  p2.addItemHeader('National Epidemiological Disease Surveillance Dataset & Forecasting (WER)', 'Department of Community Medicine, University of Peradeniya', 'Python, Time-Series');
  p2.addBullet('Engineered automated ingestion pipeline converting 18 years of historical surveillance data into standardized longitudinal panels across 13 endemic infectious conditions.');
  p2.addSpacer(8);

  p2.addSection('Peer-Reviewed Publications (The Sri Lanka Journal of Surgery, Sep 2026)');
  p2.addBullet('[1] Rajapaksha, I., et al. "Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age: A Registry-Based Study." The Sri Lanka Journal of Surgery, Sep 2026, Vol. 44, Supp. S1.');
  p2.addBullet('[2] Rajapaksha, I., et al. "Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes (N=587)." The Sri Lanka Journal of Surgery, Sep 2026, Vol. 44, Supp. S1.');
  p2.addBullet('[3] Rajapaksha, I., et al. "Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence: A Single-Centre Cohort Study." The Sri Lanka Journal of Surgery, Sep 2026, Vol. 44, Supp. S1.');
  p2.addSpacer(8);

  p2.addSection('Oral Conference Presentations');
  p2.addBullet('SICET 2026 (Paper ID 76): "A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings."');
  p2.addBullet('iPURSE 2026 (Track 1, Paper ID 578): "Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes in Hepatobiliary and Pancreatic Surgical Patients in Sri Lanka."');
  p2.addBullet('SURS 2026 (Peradeniya): "Adaptive Traffic Optimization at Mirigama Rail-Road Intersection using Mixed-Integer Linear Programming."');

  pages.push(p2);

  // --- PAGE 3 ---
  const p3 = new PDFPage();

  p3.addSection('Technical Skills & Methodological Competencies');
  p3.addItemHeader('Operations Research & Optimization Solvers', '', '');
  p3.addBullet('Mathematical Formulations: Mixed-Integer Linear Programming (MILP), Integer Programming, Non-Linear Optimization, Simplex, Branch-and-Bound, Network Flows.');
  p3.addBullet('Queueing & Stochastic Systems: Dynamic queue networks (M/M/1, M/M/c, M/G/1), priority disciplines, discrete-event simulation, Markov Decision Processes.');
  p3.addBullet('Optimization Packages: Python PuLP, SciPy Optimize, SimPy, Excel Solver.');
  p3.addSpacer(4);

  p3.addItemHeader('Statistical Computing & Data Science', '', '');
  p3.addBullet('Statistical Programming: R, RStudio, Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn), SPSS, MINITAB.');
  p3.addBullet('Methodologies: Hypothesis Testing, Multiple Linear & Logistic Regression, Survival Analysis (Kaplan-Meier, Cox Proportional Hazards), PCA, Factor Analysis.');
  p3.addBullet('General Programming & Tools: C, Java, SQL, Git/GitHub, LaTeX, Markdown, HTML5, CSS.');
  p3.addSpacer(8);

  p3.addSection('Certifications & Pedagogical Training');
  p3.addBullet('Python for Data Science and Machine Learning A-Z (Udemy)');
  p3.addBullet('Professional Diploma in Technical Project Management (MTF Institute of Management)');
  p3.addBullet('Business Science Method & Applied Research Methodologies (MTF Institute)');
  p3.addBullet('Seminar Facilitator & Academic Coach - Statistical Circle & Operations Research Society, University of Peradeniya (2025 - 2026)');
  p3.addSpacer(8);

  p3.addSection('Academic References');
  p3.addItemHeader('Dr. Nilan Manoj Chathuranga', 'Senior Lecturer in Mathematics & Operations Research, University of Peradeniya', '');
  p3.addBullet('Department of Mathematics, Faculty of Science, University of Peradeniya, Sri Lanka');
  p3.addBullet('Email: chathuranga.mudalige@sci.pdn.ac.lk');
  p3.addSpacer(6);

  p3.addItemHeader('Dr. Niluka Rodrigo', 'Senior Lecturer in Mathematics & Statistics, University of Peradeniya', '');
  p3.addBullet('Department of Mathematics, Faculty of Science, University of Peradeniya, Sri Lanka');
  p3.addBullet('Email: nilukar@sci.pdn.ac.lk');

  pages.push(p3);

  // Add Footers
  pages.forEach((page, idx) => {
    page.addFooter(idx + 1, pages.length);
  });

  // Assemble PDF document objects
  const objects = [];
  let objCount = 0;

  function allocObj(content) {
    objCount++;
    objects.push({ id: objCount, content });
    return objCount;
  }

  // Obj 1: Catalog
  // Obj 2: Pages tree
  // Obj 3: Font Helvetica
  // Obj 4: Font Helvetica-Bold
  // Obj 5: Font Helvetica-Oblique
  const catalogId = 1;
  const pagesId = 2;
  const fontNormId = 3;
  const fontBoldId = 4;
  const fontItalicId = 5;

  objCount = 5; // Reserve first 5

  const pageObjIds = [];
  const contentObjIds = [];

  pages.forEach(page => {
    const content = page.getContent();
    const contentBuffer = Buffer.from(content, 'utf-8');
    const contentObjId = ++objCount;
    objects.push({
      id: contentObjId,
      content: `<< /Length ${contentBuffer.length} >>\nstream\n${content}\nendstream`
    });
    contentObjIds.push(contentObjId);

    const pageObjId = ++objCount;
    pageObjIds.push(pageObjId);
  });

  // Now create catalog, pages, fonts
  objects.unshift(
    {
      id: catalogId,
      content: `<< /Type /Catalog /Pages ${pagesId} 0 R >>`
    },
    {
      id: pagesId,
      content: `<< /Type /Pages /Kids [${pageObjIds.map(id => id + ' 0 R').join(' ')}] /Count ${pages.length} >>`
    },
    {
      id: fontNormId,
      content: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`
    },
    {
      id: fontBoldId,
      content: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`
    },
    {
      id: fontItalicId,
      content: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>`
    }
  );

  // Link page objects
  pageObjIds.forEach((pageId, idx) => {
    const pageContentId = contentObjIds[idx];
    const pageDef = `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontNormId} 0 R /F2 ${fontBoldId} 0 R /F3 ${fontItalicId} 0 R >> >> /Contents ${pageContentId} 0 R >>`;
    objects.push({
      id: pageId,
      content: pageDef
    });
  });

  // Sort objects by ID
  objects.sort((a, b) => a.id - b.id);

  // Generate byte offsets
  let offset = 0;
  const header = '%PDF-1.4\n%âãÏÓ\n';
  const parts = [header];
  offset += Buffer.byteLength(header, 'utf-8');

  const xref = [];
  xref.push('0000000000 65535 f ');

  for (const obj of objects) {
    const strOffset = String(offset).padStart(10, '0');
    xref.push(`${strOffset} 00000 n `);
    const objStr = `${obj.id} 0 obj\n${obj.content}\nendobj\n`;
    parts.push(objStr);
    offset += Buffer.byteLength(objStr, 'utf-8');
  }

  const startXref = offset;
  let xrefStr = `xref\n0 ${objects.length + 1}\n` + xref.join('\n') + '\n';
  xrefStr += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;
  parts.push(xrefStr);

  const fullPdfBuffer = Buffer.from(parts.join(''), 'binary');
  const targetPath = path.join(__dirname, '../public/Imesha_Rajapaksha_CV.pdf');
  fs.writeFileSync(targetPath, fullPdfBuffer);
  console.log(`Successfully generated academic PDF CV at ${targetPath} (${fullPdfBuffer.length} bytes)`);
}

createAcademicPDF();
