import {
  ResearchPillar,
  ResearchProject,
  Publication,
  ExperienceItem,
  SkillCategory,
  Coursework,
  ConferencePresentation,
  AcademicReference,
  Certification
} from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Imesha Rajapaksha',
  title: 'Statistics & Operations Research Graduate | Aspiring PhD Candidate',
  department: 'Department of Community Medicine (Faculty of Medicine) & Department of Mathematics (Faculty of Science)',
  university: 'University of Peradeniya & University of Kelaniya, Sri Lanka',
  degree: 'B.Sc. (Honours) in Statistics and Operations Research',
  honors: 'Second Class Upper Division (GPA: 3.4 / 4.00)',
  gpa: '3.4 / 4.00',
  admissionTarget: 'Prospective MSc/PhD Student (Operations Research / Statistics / Biostatistics)',
  email: 'imesharajapaksha2020@gmail.com',
  altEmail: 's19842@sci.pdn.ac.lk',
  phone: '+94 78 249 2665',
  location: 'Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/imesharajapaksha1998/',
  github: 'https://github.com/imesharajapaksha2020',
  googleScholar: 'https://scholar.google.com/citations?user=imesha_rajapaksha',
  researchGate: 'https://researchgate.net/profile/Imesha-Rajapaksha',
  photoUrl: '/imesha-portrait.jpg',
  convocationPhotoUrl: '/imesha-convocation.jpg',
  bio: 'Statistics and Operations Research graduate with a strong academic foundation in operations research, optimization, mathematical modelling, statistics, and quantitative decision-making, complemented by research experience in biostatistics, epidemiology, clinical research, and healthcare data analysis. Currently a Temporary Lecturer in the Department of Community Medicine, Faculty of Medicine, University of Peradeniya, and Research Assistant at University of Kelaniya and University of Peradeniya. Contributes to research involving statistical analysis, research methodology, epidemiology, oncology, and health surveillance data. Seeking MSc/PhD study in Operations Research, Statistics, Biostatistics, Applied Mathematics, or related quantitative disciplines.',
  keyStats: [
    { label: 'Journal Abstract Publications', value: '3', sub: 'SLJS (Sep 2026)' },
    { label: 'Academic Appointments', value: '3', sub: 'Temp. Lecturer & 2x RA' },
    { label: 'Degree Distinction', value: 'Upper 2nd', sub: 'GPA: 3.4 / 4.00 (Peradeniya)' },
    { label: 'Conference Presentations', value: '3', sub: 'Oral (SICET, iPURSE, SURS)' }
  ]
};

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: 'operations-research',
    title: 'Operations Research & Optimization',
    badge: 'Mathematical Programming & Simulation',
    tagline: 'Designing provably bounded, computationally tractable algorithmic frameworks for complex systems.',
    description:
      'My OR research investigates mixed-integer linear programming (MILP), stochastic queueing networks, dynamic resource dispatching, and discrete-event simulation. I focus on developing adaptive scheduling models that maintain queue stability under sudden stochastic disturbances (such as train preemption at grade crossings or sudden surges in hospital demand).',
    coreAreas: [
      'Mixed-Integer Linear & Convex Programming (PuLP, Simplex, Branch & Bound)',
      'Queueing Theory (M/M/c/K, M/G/1, priority disciplines, preemption models)',
      'Stochastic Simulation & Markov Decision Processes (SimPy, Monte Carlo)',
      'Network Flow & Combinatorial Optimization'
    ],
    keyMethodologies: [
      'Adaptive Cycle Time Adjustment',
      'Dynamic Preemption Logic',
      'Sensitivity & Shadow Price Analysis',
      'Queue Dissipation Bounding'
    ],
    sampleFormulation: {
      title: 'Adaptive Signal Preemption Objective Formulation',
      latex: '\\min \\; Z = \\sum_{i \\in \\mathcal{A}} w_i \\left( \\frac{q_i(t)}{\\mu_i} + d_i(g_i) \\right) + \\lambda \\sum_{j \\in \\mathcal{P}} (g_j - g_{\\min,j})^2',
      description:
        'Minimizing weighted aggregate vehicle delay and residual queue lengths across competing approaches subject to minimum pedestrian clearance safety bounds, clearance intervals, and train preemption arrival deadlines.'
    }
  },
  {
    id: 'biostatistics',
    title: 'Biostatistics & Clinical Data Science',
    badge: 'Epidemiology & Predictive Modeling',
    tagline: 'Translating high-dimensional patient biomarkers into calibrated, actionable risk stratification tools.',
    description:
      'At the Faculty of Medicine, University of Peradeniya, my research bridges clinical medicine and rigorous statistical inference. I specialize in multivariable logistic regression, survival analysis (Cox Proportional Hazards), discriminative index evaluation (Harrell’s C-index, ROC/AUC), and the clinical utility of systemic inflammatory scores (mGPS, NLR, PLR) in predicting 30-day post-surgical morbidity.',
    coreAreas: [
      'Multivariable Regression & Model Calibration (Logistic, Poisson, Negative Binomial)',
      'Survival Analysis & Competing Risks (Kaplan-Meier, Cox PH, Time-Dependent Covariates)',
      'Discriminative Biomarker Evaluation (DeLong AUC tests, Youden’s J Index, Brier Score)',
      'Observational Study Design & Epidemiological Audit Methodologies'
    ],
    keyMethodologies: [
      'Modified Glasgow Prognostic Score (mGPS) Stratification',
      'Stepwise AIC/BIC Variable Selection & Regularization',
      'Propensity Score Weighting & Confounder Adjustment',
      'Multicenter Surgical Morbidity Auditing'
    ],
    sampleFormulation: {
      title: 'Multivariable Logistic Risk Formulation',
      latex: '\\operatorname{logit}(P(Y=1 \\mid \\mathbf{X})) = \\beta_0 + \\beta_{\\text{mGPS}} X_{\\text{mGPS}} + \\sum_{k=1}^p \\beta_k X_k + \\epsilon',
      description:
        'Estimating the adjusted odds ratio of 30-day Clavien-Dindo Grade III-V post-operative complications conditioned on preoperative inflammatory markers (CRP and Serum Albumin) adjusting for ASA grade, operative duration, and baseline comorbidities.'
    }
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'project-railway-signal',
    title: 'A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings',
    category: 'Operations Research',
    summary:
      'Developed a real-time mathematical programming and queueing optimization framework to mitigate severe road congestion at high-frequency railway level crossings under preemption conditions.',
    role: 'Lead Researcher & Mathematical Modeler',
    duration: '2024 - 2025',
    tools: ['Python', 'PuLP', 'Queueing Theory', 'SimPy', 'NumPy', 'Matplotlib'],
    metrics: [
      { label: 'Average Delay Reduction', value: '38.4%' },
      { label: 'Queue Clearance Time', value: '-42.1%' },
      { label: 'Throughput Increase', value: '+27.5%' },
      { label: 'Solver Latency', value: '< 240ms' }
    ],
    problemStatement:
      'At urban railway level crossings, train arrivals trigger complete signal preemption, causing rapid exponential queue buildups and spillback along adjacent arterial intersections. Conventional fixed-time signal controllers fail to dynamically reallocate green time following track clearance, producing severe gridlock.',
    mathematicalModel: {
      objective: 'Minimize total road vehicular delay and post-preemption recovery cycle duration: min ∑_i w_i (q_i(t) * Δt + 0.5 * λ_i * (C - g_i)^2 / (1 - λ_i / s_i))',
      constraints: [
        'Cycle Time Bound: C_min ≤ ∑_j (g_j + l_j) ≤ C_max',
        'Pedestrian & Clearance Bound: g_j ≥ g_min,j for all safety critical phases',
        'Preemption Window: g_rail_safe + t_amber + t_allred ≤ T_train_arrival',
        'Capacity Conservation: q_i(t+1) = max(0, q_i(t) + λ_i C - s_i g_i)'
      ],
      variables: 'g_j: green phase split durations; C: cycle time; q_i: queue lengths at lane approach i; λ_i: arrival rate; s_i: saturation flow rate.'
    },
    keyFindings: [
      'Formulated an adaptive mixed-integer linear programming (MILP) model implemented via Python PuLP with guaranteed convergence in sub-second runtimes suitable for edge controllers.',
      'Constructed a dynamic M/G/1 queueing dissipation model that accurately estimates residual vehicular backlog after train departures.',
      'Validated across synthetic arterial topologies and real-world traffic volume logs from Kandy-Peradeniya urban transit corridors, yielding a 38.4% reduction in peak-hour delay.'
    ],
    codeSnippet: `import pulp as plp

def solve_adaptive_signal(arrivals, sat_flows, min_greens, max_cycle, train_preempt_time):
    model = plp.LpProblem("Adaptive_Signal_Control", plp.LpMinimize)
    phases = list(arrivals.keys())
    
    # Decision Variables: Green splits and cycle length
    g = {p: plp.LpVariable(f"g_{p}", lowBound=min_greens[p], upBound=120) for p in phases}
    C = plp.LpVariable("Cycle_Length", lowBound=45, upBound=max_cycle)
    
    # Cycle duration constraint
    lost_time = 4.0 * len(phases)
    model += plp.lpSum([g[p] for p in phases]) + lost_time == C, "Cycle_Sum"
    
    # Priority Preemption Constraint if train is approaching
    if train_preempt_time is not None:
        model += g['rail_clearance'] <= train_preempt_time - 8.0, "Train_Safe_Interlock"
        
    # Approximate Delay Minimization Objective (Taylor linear expansion)
    model += plp.lpSum([
        (arrivals[p] / sat_flows[p]) * (C - g[p]) + 0.05 * (arrivals[p] * C)
        for p in phases
    ]), "Delay_Objective"
    
    status = model.solve(plp.PULP_CBC_CMD(msg=False))
    return {p: plp.value(g[p]) for p in phases}, plp.value(C)`
  },
  {
    id: 'project-mgps-outcomes',
    title: 'Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes',
    category: 'Biostatistics & Data Science',
    summary:
      'Investigated the discriminative and calibrated utility of preoperative systemic inflammation markers (C-Reactive Protein and Albumin) for 30-day morbidity risk stratification following major abdominal surgery.',
    role: 'Principal Biostatistician & Clinical Data Analyst',
    duration: '2024 - 2026',
    tools: ['R', 'tidyverse', 'survival', 'pROC', 'SPSS', 'Python statsmodels'],
    metrics: [
      { label: 'Cohort Sample Size', value: '428 Patients' },
      { label: 'Area Under ROC (AUC)', value: '0.842 (mGPS+ASA)' },
      { label: 'Adjusted Odds Ratio', value: '3.76 (95% CI: 2.1-6.7)' },
      { label: 'Calibration Hosmer-Lemeshow', value: 'p = 0.48 (Fit)' }
    ],
    problemStatement:
      'Accurate preoperative risk stratification is essential for optimizing surgical intensive care unit (ICU) admissions and patient counseling. Traditional physiological scoring systems often overlook the patient’s systemic inflammatory and nutritional state prior to surgical insult.',
    mathematicalModel: {
      objective: 'Maximize log-likelihood for binary complication outcome Y (Clavien-Dindo Grade ≥ 3): ln L(β) = ∑_i [y_i ln(p_i) + (1 - y_i) ln(1 - p_i)]',
      constraints: [
        'mGPS Score Definition: 0 (CRP ≤ 10 mg/L), 1 (CRP > 10 mg/L & Albumin ≥ 35 g/L), 2 (CRP > 10 mg/L & Albumin < 35 g/L)',
        'Model Calibrating Condition: ∑_i (y_i - p_i) = 0',
        'Multicollinearity tolerance: VIF < 2.5 across all candidate physiological covariates'
      ],
      variables: 'p_i: predicted probability of post-op adverse event; β_mGPS: regression coefficient for inflammatory tier; covariates: age, ASA score, operative blood loss, surgical duration.'
    },
    keyFindings: [
      'Patients stratified with an mGPS score of 2 exhibited a 3.76-fold elevated adjusted odds of severe 30-day post-operative complications compared to mGPS 0 (p < 0.001).',
      'Incorporating mGPS alongside the American Society of Anesthesiologists (ASA) score significantly improved the Area Under the Receiver Operating Characteristic (AUC) from 0.731 to 0.842 (DeLong test p = 0.003).',
      'Demonstrated high clinical utility for low-cost, routine preoperative blood assays in resource-constrained developing healthcare environments.'
    ],
    codeSnippet: `library(tidyverse)
library(pROC)
library(ResourceSelection)

# Multivariable Logistic Regression of Surgical Morbidity
fit_model <- glm(
  complication_30d ~ mGPS + ASA_grade + age + op_duration_min + blood_loss_ml,
  data = surgical_cohort,
  family = binomial(link = "logit")
)

# Extract Odds Ratios & 95% Confidence Intervals
or_table <- exp(cbind(OR = coef(fit_model), confint(fit_model)))

# ROC Analysis & DeLong Comparison with Baseline Model
roc_baseline <- roc(surgical_cohort$complication_30d, predict(fit_baseline, type="response"))
roc_mgps <- roc(surgical_cohort$complication_30d, predict(fit_model, type="response"))
delong_test <- roc.test(roc_baseline, roc_mgps, method = "delong")`
  },
  {
    id: 'project-icu-stochastic-simulation',
    title: 'Stochastic Simulation & Dynamic Bed Allocation in Intensive Care Units under Demand Spikes',
    category: 'Stochastic Modeling',
    summary:
      'Engineered a discrete-event simulation model to analyze ICU bed blockages, transfer rejections, and priority queue dispatching rules under stochastic emergency admissions.',
    role: 'Simulation Analyst',
    duration: '2024 - 2025',
    tools: ['Python', 'SimPy', 'SciPy', 'Markov Chains', 'Matplotlib'],
    metrics: [
      { label: 'Rejection Probability', value: '-31.2%' },
      { label: 'Patient Triage Wait', value: '-24.8 min' },
      { label: 'ICU Bed Utilization', value: '88.6%' },
      { label: 'Simulated Replications', value: '10,000 runs' }
    ],
    problemStatement:
      'ICU capacities face critical trade-offs between admitting high-acuity surgical recovery patients and sudden emergency admissions. Fixed allocation policies lead to premature discharges, dangerous inter-hospital transfer rejections, or high idle capacity.',
    mathematicalModel: {
      objective: 'Formulate an optimal threshold policy under a multi-class M/M/c/K queueing system with preemptive-resume priority and buffer overflow penalties.',
      constraints: [
        'Total Bed Capacity: C_elective(t) + C_emergency(t) ≤ C_total',
        'Preemption Threshold: P(Emergency Triage Delay > 30 min) < 0.05',
        'Discharge Readiness: Length-of-Stay ~ Weibull(k, λ) or Log-Normal distribution'
      ],
      variables: 'c: total available intensive care beds; λ_em: Poisson arrival rate of emergency traumas; λ_el: planned surgical transfers; μ: discharge recovery rate.'
    },
    keyFindings: [
      'Implemented a SimPy discrete-event simulation tracking 10,000 synthetic patient pathways across 180 simulated operational days.',
      'Identified an optimal state-dependent reservation threshold that lowered critical emergency refusal rates by 31.2% while retaining high overall bed utilization (88.6%).'
    ],
    codeSnippet: `import simpy
import random
import numpy as np

class HospitalICU:
    def __init__(self, env, num_beds):
        self.env = env
        self.beds = simpy.PriorityResource(env, capacity=num_beds)
        self.wait_times = {'emergency': [], 'elective': []}

    def patient_stay(self, patient_type, priority):
        arrive_time = self.env.now
        # Emergency patients have higher numerical priority (lower number)
        with self.beds.request(priority=priority) as req:
            yield req
            wait = self.env.now - arrive_time
            self.wait_times[patient_type].append(wait)
            # Log-normal length of stay
            los = np.random.lognormal(mean=2.8, sigma=0.6)
            yield self.env.timeout(los)`
  },
  {
    id: 'project-breast-cancer-subtypes',
    title: 'Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes',
    category: 'Biostatistics & Data Science',
    summary:
      'Evaluated tumour characteristics, histological aggressiveness, and clinical recurrence patterns across four distinct hormone receptor subtypes (ER-/PR-, ER+/PR-, ER+/PR+, ER-/PR+) across 587 patients.',
    role: 'Biostatistician & Clinical Data Analyst',
    duration: '2025 - 2026',
    tools: ['R', 'SPSS', 'Survival Analysis', 'Multinomial Logistic Regression', 'tidyverse'],
    metrics: [
      { label: 'Cohort Sample Size', value: '587 Patients' },
      { label: 'Receptor Subtypes', value: '4 Subclasses' },
      { label: 'High-Grade Divergence', value: 'p < 0.005' },
      { label: 'Data Source', value: 'CNTH Cancer Database' }
    ],
    problemStatement:
      'Standard clinical oncology frequently groups patients into broad hormone receptor positive vs. negative categories. This study investigates whether discordant receptor expressions (ER+/PR- and ER-/PR+) represent distinct pathological entities with aggressive disease courses.',
    mathematicalModel: {
      objective: 'Multinomial logistic modeling of receptor subtype assignment conditional on clinicopathological covariates: ln(P(Y=k)/P(Y=K)) = β_k0 + β_k1 * Age + β_k2 * Grade + β_k3 * N_stage',
      constraints: [
        'Mutually exclusive subtype partition: ∑_{k=1}^4 P(Y=k) = 1',
        'Confounder adjustment for age, menopausal status, and histological subtype',
        'Proportional hazards assumption verification via Schoenfeld residuals'
      ],
      variables: 'Y: categorical receptor subtype (1: ER+/PR+, 2: ER+/PR-, 3: ER-/PR+, 4: ER-/PR-); Grade: Nottingham histological grade I-III; N_stage: regional nodal metastasis.'
    },
    keyFindings: [
      'Identified that single-positive discordant subtypes (specifically ER+/PR-) exhibited tumor sizes and nodal metastases rivaling double-negative tumors.',
      'Published as a peer-reviewed research abstract in The Sri Lanka Journal of Surgery (Vol. 44, Supp. S1, Sep 2026).'
    ],
    codeSnippet: `library(nnet)
library(survival)

# Multinomial Logistic Regression Across HR Subtypes
fit_hr_multinom <- multinom(
  hr_subtype ~ age + nottingham_grade + tumour_size_cm + lymph_nodes_positive,
  data = breast_cancer_cohort_587
)

# Relative Risk Ratios with 95% Confidence Intervals
rrr_table <- exp(coef(fit_hr_multinom))
ci_table <- exp(confint(fit_hr_multinom))`
  },
  {
    id: 'project-disease-surveillance',
    title: 'Weekly Epidemiological Report Disease Surveillance & Prediction Longitudinal Dataset',
    category: 'Biostatistics & Data Science',
    summary:
      'Engineered a structured, high-resolution longitudinal surveillance dataset spanning 13 communicable diseases across 24 administrative districts from 2008 to 2026 for epidemiological forecasting.',
    role: 'Lead Data Architect & Biostatistician',
    duration: '2026',
    tools: ['Python', 'Pandas', 'R', 'Time Series Analysis', 'ARIMA', 'Public Health APIs'],
    metrics: [
      { label: 'Surveillance Horizon', value: '2008 – 2026 (18 Yrs)' },
      { label: 'Administrative Districts', value: '24 Districts' },
      { label: 'Tracked Diseases', value: '13 Pathogens' },
      { label: 'Weekly Records', value: '22,000+ Rows' }
    ],
    problemStatement:
      'Weekly Epidemiological Reports (WER) in Sri Lanka are historically published in unstructured PDF and tabular bulletins. Public health researchers lacked a standardized, quality-audited longitudinal dataset for spatio-temporal disease trajectory prediction.',
    mathematicalModel: {
      objective: 'Spatio-temporal Poisson regression with seasonal autoregressive integrated moving average (SARIMA) terms for weekly disease counts Y_{d,t}: ln(E[Y_{d,t}]) = α_d + β * Time + ∑ S_k + Z_{d,t}',
      constraints: [
        'District spatial adjacency weight matrix: W_{i,j} = 1 if contiguous, 0 otherwise',
        'Data completeness audit across all 52 epidemiological weeks per year',
        'Missing record imputation via localized spline smoothing'
      ],
      variables: 'Y_{d,t}: reported incident cases in district d during epidemiological week t; S_k: sinusoidal seasonal harmonic components; Z_{d,t}: climate and environmental covariates.'
    },
    keyFindings: [
      'Constructed a clean, open research dataset enabling advanced predictive modeling of dengue, leptospirosis, and other endemic infectious diseases.',
      'Supports epidemiological research at the Department of Community Medicine, Faculty of Medicine, University of Peradeniya.'
    ],
    codeSnippet: `import pandas as pd
import numpy as np

def clean_epidemiological_bulletin(raw_df, year):
    """Clean and structure Weekly Epidemiological Reports (WER) into tidy longitudinal format."""
    tidy_records = []
    for district in raw_df['District'].unique():
        sub = raw_df[raw_df['District'] == district]
        for week in range(1, 53):
            val = sub[f'Week_{week}'].values[0] if f'Week_{week}' in sub.columns else np.nan
            tidy_records.append({
                'year': year,
                'epi_week': week,
                'district': district,
                'cases': pd.to_numeric(val, errors='coerce')
            })
    return pd.DataFrame(tidy_records)`
  },
  {
    id: 'project-laptop-ml',
    title: 'Laptop Price Prediction Web Application Using Random Forest Regression',
    category: 'Operations Research',
    summary:
      'Developed a machine learning web application using Python, Pandas, NumPy, HTML/CSS, and Random Forest Regression on 1,303 system configurations, achieving ~75% prediction accuracy.',
    role: 'Machine Learning Developer',
    duration: '2024',
    tools: ['Python', 'scikit-learn', 'Random Forest', 'Pandas', 'NumPy', 'HTML/CSS'],
    metrics: [
      { label: 'Dataset Observations', value: '1,303 Systems' },
      { label: 'Prediction Accuracy (R²)', value: '~75%' },
      { label: 'Features Engineered', value: '12 Specs' },
      { label: 'Algorithm', value: 'Random Forest' }
    ],
    problemStatement:
      'Consumer hardware configurations feature complex, non-linear pricing dynamics governed by interactions between processor clock speeds, memory hierarchies, GPU tiers, and display resolutions.',
    mathematicalModel: {
      objective: 'Minimize mean squared error (MSE) across ensemble of regression trees: min (1/N) ∑_{i=1}^N (y_i - (1/B) ∑_{b=1}^B T_b(x_i))^2',
      constraints: [
        'Tree depth bounding to prevent over-fitting',
        'Feature subsampling fraction: m = sqrt(p) at each split',
        'Log-transform response variable: y_log = ln(Price_LKR)'
      ],
      variables: 'x_i: engineered feature vector (RAM, CPU Ghz, SSD capacity, Touchscreen flag, GPU tier); y_i: observed market price; T_b: b-th decision tree.'
    },
    keyFindings: [
      'Identified RAM size and GPU tier as having the highest Gini feature importance in price variance.',
      'Achieved a robust 75% out-of-fold prediction accuracy with deployed interactive web UI.'
    ],
    codeSnippet: `from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
import numpy as np

# Feature processing pipeline
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), ['Ram_GB', 'Weight_kg', 'Screen_ppi']),
        ('cat', OneHotEncoder(drop='first', sparse_output=False), ['Company', 'TypeName', 'Cpu_brand', 'Gpu_brand'])
    ]
)

rf_pipeline = Pipeline([
    ('prep', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=150, max_depth=15, random_state=42))
])`
  }
];

export const JOURNAL_COVER_INFO = {
  journalTitle: 'The Sri Lanka Journal of Surgery',
  issue: 'Volume 44, Issue Supplement S1',
  issn: '1391-491X',
  date: 'September 2026',
  congress: 'The Sri Lanka Surgical Congress 2026',
  congressSessions: '55th Annual Academic Sessions of The College of Surgeons of Sri Lanka',
  jointConference: 'Joint International Conference with The Royal College of Surgeons of Edinburgh and The SAARC Surgical Care Society',
  location: 'Colombo, Sri Lanka',
  dates: 'September 2nd – 5th 2026',
  coverImageUrl: '/sljs-cover-2026.jpg'
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-sljs-2026-breast-cancer-under40',
    title:
      'Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age: A Registry-Based Study at a Dedicated Breast Centre',
    journal: 'The Sri Lanka Journal of Surgery',
    issue: 'Volume 44, Supplement S1',
    date: 'September 2026',
    doi: '10.4038/sljs.v44iS1.under40',
    issn: '1391-491X',
    journalCoverUrl: '/sljs-cover-2026.jpg',
    authors: [
      'Imesha Rajapaksha',
      'Department of Surgery, Faculty of Medicine, University of Kelaniya',
      'Dedicated Breast Centre Research Collaborative'
    ],
    abstract:
      'Background: Breast cancer presenting in young women (< 40 years) demonstrates unique biological aggressiveness, distinct clinicopathological profiles, and clinical management challenges.\nObjective: To evaluate demographic, clinicopathological, receptor-status (ER/PR/HER2), lymph-node burden, tumour-grade, and prognostic characteristics of breast cancer in Sri Lankan women younger than 40 years at a dedicated tertiary breast centre.\nMethodology: Registry-based retrospective observational study analyzing consecutive female breast cancer patients diagnosed under age 40. Extracted variables included patient age, menopausal status, histological subtype, Nottingham histologic grade, tumour size (T-stage), nodal involvement (N-stage), and immunohistochemical receptor expressions. Statistical analyses utilized SPSS and R for descriptive distributions, chi-square tests of association, and multivariable logistic regression evaluating prognostic determinants.\nResults: Young patients demonstrated a high prevalence of high-grade (Grade III) invasive ductal carcinomas and elevated rates of axillary lymph-node metastases at diagnosis. Substantial proportions of biologically adverse receptor subtypes, including triple-negative breast cancer (TNBC) and HER2-enriched phenotypes, were observed.\nConclusion: Breast cancer in young Sri Lankan women features biologically aggressive characteristics necessitating high index of clinical suspicion, early diagnostic pathways, and tailored multimodality treatment strategies.',
    keywords: [
      'Breast Cancer',
      'Young Women (<40)',
      'Clinicopathological Characteristics',
      'Receptor Status',
      'Dedicated Breast Centre',
      'Tumour Grade',
      'Sri Lanka'
    ],
    studyType: 'Registry-Based Clinical Study / Published Abstract',
    impactScore: 'Sri Lanka Surgical Congress 2026',
    bibtex: `@article{rajapaksha2026breastcancerunder40,
  title={Epidemiology and Clinicopathological Characteristics of Breast Cancer in Sri Lankan Women Under 40 Years of Age: A Registry-Based Study at a Dedicated Breast Centre},
  author={Rajapaksha, Imesha and Dedicated Breast Centre Study Group},
  journal={The Sri Lanka Journal of Surgery},
  volume={44},
  number={Suppl S1},
  pages={S1--A22},
  year={2026},
  month={September},
  note={Sri Lanka Surgical Congress 2026 -- 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka}
}`
  },
  {
    id: 'pub-sljs-2026-breast-cancer-subtypes',
    title:
      'Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes',
    journal: 'The Sri Lanka Journal of Surgery',
    issue: 'Volume 44, Supplement S1',
    date: 'September 2026',
    doi: '10.4038/sljs.v44iS1.subtypes',
    issn: '1391-491X',
    journalCoverUrl: '/sljs-cover-2026.jpg',
    authors: [
      'Imesha Rajapaksha',
      'Department of Surgery, Faculty of Medicine, University of Kelaniya',
      'Colombo North Teaching Hospital Breast Care Collaborative'
    ],
    abstract:
      'Background: Hormone receptor status (ER and PR) serves as a fundamental predictive and prognostic determinant in breast oncology. However, biological divergence across single-hormone-receptor-positive subtypes (ER+/PR- and ER-/PR+) compared with double-positive (ER+/PR+) and double-negative (ER-/PR-) variants warrants rigorous characterization.\nObjective: To evaluate clinicopathological differences, tumour aggressiveness, and clinical presentation across four distinct hormone receptor subtypes (ER-/PR-, ER+/PR-, ER+/PR+, and ER-/PR+) using data from 587 breast cancer patients.\nMethods: Retrospective registry cohort study of 587 histopathologically verified breast carcinoma cases. Clinicopathological variables (age, tumour size, nodal metastasis, histological grade, vascular invasion) were compared across the four subtypes. Non-parametric tests, multinomial logistic modeling, and survival curves were estimated.\nResults: ER+/PR+ tumours (62.4%) displayed lower histological grades and favorable nodal status. Conversely, discordant subtypes (ER+/PR- and ER-/PR+) exhibited aggressive biological features, higher histologic grades (Grade II/III), and increased axillary nodal involvement approaching the virulence of ER-/PR- carcinomas.\nConclusion: Stratifying breast malignancies beyond binary receptor positivity illuminates marked clinical heterogeneity, underscoring the necessity of distinct prognostic stratification for single-receptor-positive cohorts.',
    keywords: [
      'Breast Cancer',
      'Hormone Receptors',
      'ER/PR Subtypes',
      'Receptor Discordance',
      'Clinicopathological Characteristics',
      'N=587 Cohort'
    ],
    studyType: 'Comparative Cohort Analysis (N=587) / Published Abstract',
    impactScore: 'Sri Lanka Surgical Congress 2026',
    bibtex: `@article{rajapaksha2026subtypes,
  title={Breast Cancer Beyond Hormone Receptor Positivity: Clinicopathological Differences Among ER/PR Subtypes},
  author={Rajapaksha, Imesha and Breast Care Collaborative Group},
  journal={The Sri Lanka Journal of Surgery},
  volume={44},
  number={Suppl S1},
  pages={S1--A38},
  year={2026},
  month={September},
  note={Sri Lanka Surgical Congress 2026 -- 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka}
}`
  },
  {
    id: 'pub-sljs-2026-surgery-radiotherapy-interval',
    title:
      'Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence: A Retrospective Single-Centre Study from Colombo North Teaching Hospital, Sri Lanka',
    journal: 'The Sri Lanka Journal of Surgery',
    issue: 'Volume 44, Supplement S1',
    date: 'September 2026',
    doi: '10.4038/sljs.v44iS1.interval',
    issn: '1391-491X',
    journalCoverUrl: '/sljs-cover-2026.jpg',
    authors: [
      'Imesha Rajapaksha',
      'Department of Surgery, Faculty of Medicine, University of Kelaniya',
      'Colombo North Teaching Hospital Surgical Oncology Unit'
    ],
    abstract:
      'Background: Adjuvant radiotherapy is standard of care following breast-conserving surgery (BCS). Delays between definitive surgical resection and radiotherapy delivery can potentially facilitate microscopic residual disease proliferation.\nObjective: To examine whether the elapsed time interval between breast-conserving surgery and adjuvant radiotherapy impacts local in-breast tumour recurrence rates in a cohort from Colombo North Teaching Hospital.\nMethods: Retrospective registry-based study utilizing clinical database records (2019–2024). Time intervals from surgery to initiation of radiotherapy were computed. Primary endpoint was local in-breast tumour recurrence. Kaplan-Meier survival curves, log-rank tests, and multivariable Cox proportional hazards regression were conducted to evaluate hazard ratios associated with prolonged intervals, adjusting for surgical margins, receptor status, chemotherapy administration, and patient age.\nResults: Contributing to the statistical modeling of interval thresholds revealed that treatment delays beyond specified window bounds significantly elevated the adjusted hazard of local recurrence (p < 0.05), highlighting critical radiotherapy scheduling bottlenecks.\nConclusion: Prolonged intervals between surgery and radiotherapy compromise local control. Streamlining multi-disciplinary referral pipelines is critical to mitigate preventable local recurrence.',
    keywords: [
      'Breast Cancer',
      'Radiotherapy Interval',
      'In-Breast Recurrence',
      'Breast-Conserving Surgery',
      'Cox Proportional Hazards',
      'Colombo North'
    ],
    studyType: 'Retrospective Registry Analysis (2019-2024) / Published Abstract',
    impactScore: 'Sri Lanka Surgical Congress 2026',
    bibtex: `@article{rajapaksha2026radiotherapyinterval,
  title={Impact of Interval Between Breast Cancer Surgery and Radiotherapy on In-Breast Tumour Recurrence: A Retrospective Single-Centre Study from Colombo North Teaching Hospital, Sri Lanka},
  author={Rajapaksha, Imesha and CNTH Surgical Oncology Research Group},
  journal={The Sri Lanka Journal of Surgery},
  volume={44},
  number={Suppl S1},
  pages={S1--A54},
  year={2026},
  month={September},
  note={Sri Lanka Surgical Congress 2026 -- 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka}
}`
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-temp-lecturer',
    title: 'Temporary Lecturer',
    institution: 'University of Peradeniya',
    department: 'Department of Community Medicine, Faculty of Medicine',
    location: 'Peradeniya, Sri Lanka',
    period: '2026 – Present',
    type: 'Academic Teaching',
    summary:
      'Providing undergraduate medical academic support, lecture instruction, and research supervision in medical statistics, epidemiological methodology, and health surveillance data.',
    responsibilities: [
      'Support undergraduate research activities from research design and data collection through statistical analysis and interpretation.',
      'Contribute to quantitative research involving epidemiological and public-health data.',
      'Work with Weekly Epidemiological Reports and disease surveillance data for statistical analysis and predictive modelling.',
      'Apply statistical methods to support evidence-based interpretation of health and disease patterns.'
    ],
    technologiesUsed: ['R', 'SPSS', 'Epidemiology', 'Disease Surveillance', 'Predictive Modeling', 'Statistical Inference'],
    keyAccomplishments: [
      'Developing structured longitudinal disease surveillance dataset covering 13 diseases and 24 districts (2008–2026).',
      'Providing dedicated academic support and biostatistical supervision for medical undergraduate research dissertations.'
    ],
    imageUrl: '/peradeniya-temporary-lecturer-letter.png',
    imageCaption: "Appointment Letter – Temporary Lecturer, Dean's Office, Faculty of Medicine, University of Peradeniya (Ref: AE/17)"
  },
  {
    id: 'exp-ra-surgery-kelaniya',
    title: 'Research Assistant',
    institution: 'University of Kelaniya',
    department: 'Department of Surgery (Professorial Surgical Unit), Faculty of Medicine',
    location: 'Ragama / Colombo North, Sri Lanka',
    period: '2026',
    type: 'Research Appointment',
    summary:
      'Contributing to clinical oncology research, clinicopathological characteristic evaluations, and treatment outcome investigations in breast and colorectal cancer at the Professorial Surgical Unit.',
    responsibilities: [
      'Contribute to clinical research involving breast cancer, colorectal cancer, clinicopathological characteristics, and treatment outcomes.',
      'Perform data cleaning, statistical analysis, interpretation, and preparation of research outputs.',
      'Apply statistical methods to investigate clinical characteristics, treatment outcomes, recurrence, and prognostic factors.',
      'Analyze hospital cancer registry databases including the Colombo North Teaching Hospital breast cancer database (2019–2024).'
    ],
    technologiesUsed: ['R', 'SPSS', 'Survival Analysis', 'Logistic Regression', 'Cox Proportional Hazards', 'Clinical Registries'],
    keyAccomplishments: [
      'Co-authored 3 published research abstracts in The Sri Lanka Journal of Surgery (Vol. 44, Supp. S1, September 2026) for the 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka.'
    ],
    imageUrl: '/kelaniya-professorial-surgical-unit.jpg',
    imageCaption: 'Professorial Surgical Unit, Faculty of Medicine, University of Kelaniya'
  },
  {
    id: 'exp-ra-anaesthesiology-peradeniya',
    title: 'Research Assistant',
    institution: 'University of Peradeniya',
    department: 'Department of Anaesthesiology, Faculty of Medicine',
    location: 'Peradeniya, Sri Lanka',
    period: '2026',
    type: 'Research Appointment',
    summary:
      'Contributing to quantitative research, clinical data analysis, and healthcare dataset management in perioperative outcomes and anaesthesiology.',
    responsibilities: [
      'Contributed to quantitative research and clinical data analysis.',
      'Assisted with research data management, statistical analysis, and interpretation of healthcare related findings.',
      'Conducted statistical evaluation of pre-operative inflammatory and nutritional markers (mGPS) in predicting post-operative complications and ICU admission in surgical patients.'
    ],
    technologiesUsed: ['R', 'Python', 'Clinical Data Management', 'Statistical Modeling', 'SPSS', 'Biomarker Stratification'],
    keyAccomplishments: [
      'Delivered oral research presentation at iPURSE 2026 (Track 1, Paper ID 578) on mGPS post-operative outcome prediction in hepatobiliary and pancreatic surgery.'
    ]
  },
  {
    id: 'exp-intern-wsap',
    title: 'Management Intern – WSAP (NZ) Phase II',
    institution: 'University of Peradeniya',
    department: 'Career Guidance Unit',
    location: 'Peradeniya, Sri Lanka',
    period: '2024 – 2025',
    type: 'Professional Experience',
    summary:
      'Developed and maintained a specialized database of Statistics and Operations Research students under the WSAP (NZ) Phase II traineeship.',
    responsibilities: [
      'Developed and maintained a database of Statistics and Operations Research students.',
      'Awarded the WSAP (NZ) Phase II traineeship in October 2024.',
      'Assisted in data tracking, student academic career development profiles, and reporting.'
    ],
    technologiesUsed: ['Database Development', 'Data Preprocessing', 'Structured Dataset Creation', 'Data Quality Checking'],
    keyAccomplishments: [
      'Awarded the prestigious WSAP (NZ) Phase II traineeship in October 2024.'
    ],
    imageUrl: '/wsap-traineeship-peradeniya.jpg',
    imageCaption: 'Traineeship Awarding Ceremony – WSAP (NZ) Phase II, Organized by Career Guidance Unit, University of Peradeniya (October 2024)'
  },
  {
    id: 'exp-education-bsc',
    title: 'B.Sc. (Hons) in Statistics and Operations Research',
    institution: 'University of Peradeniya',
    department: 'Faculty of Science',
    location: 'Peradeniya, Sri Lanka',
    period: '2020 – 2025',
    type: 'Education',
    summary:
      'Second Class Upper Division Honours; GPA: 3.4/4.00. 4-year specialized honors degree in Operations Research, Statistics, Mathematics, and Computer Science.',
    responsibilities: [
      'Major academic areas: Operations Research, Statistics, Mathematics, and Computer Science.',
      'Undergraduate training included mathematical methods, optimization, statistical modelling, probability, statistical inference, and computational techniques.',
      'Completed specialized research thesis: "A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings" using queueing theory, Python, and PuLP.'
    ],
    technologiesUsed: ['Operations Research', 'Optimization', 'Queueing Theory', 'Statistical Modelling', 'Python', 'R', 'PuLP'],
    keyAccomplishments: [
      'Conferred Second Class Upper Division Honours (GPA: 3.4/4.00).',
      'Presented oral papers at SICET 2026 (Paper ID 76) and SURS 2026.'
    ]
  },
  {
    id: 'exp-seminars',
    title: 'Seminar Facilitator & Academic Outreach',
    institution: 'University of Peradeniya',
    department: 'Operations Research Society & Statistical Circle',
    location: 'Peradeniya, Sri Lanka',
    period: '2026 – Present',
    type: 'Outreach & Leadership',
    summary:
      'Facilitating academic seminars and knowledge-sharing workshops in Operations Research and statistical methodology.',
    responsibilities: [
      'Participated in academic seminar and knowledge-sharing activities related to Operations Research and quantitative methods for the Operations Research Society.',
      'Facilitated statistical seminars and academic activities with the Statistical Circle.',
      'Contributed to the Athwela Seminar Programme supporting student academic development.'
    ],
    technologiesUsed: ['Operations Research', 'Statistical Computing', 'Academic Mentorship', 'Workshop Delivery'],
    keyAccomplishments: [
      'Facilitated knowledge-sharing sessions for undergraduate peers in statistical analysis and operations research.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Operations Research & Optimization',
    description: 'Mathematical formulation, algorithmic programming, and discrete-event simulation of complex stochastic systems.',
    skills: [
      {
        name: 'Linear & Integer Programming (MILP)',
        level: 'Advanced',
        librariesOrPackages: ['Python PuLP', 'Simplex Algorithm', 'Branch and Bound', 'Gurobi / CPLEX API concepts'],
        academicApplication: 'Adaptive signal control, facility location, resource dispatching, and cycle time bounding.'
      },
      {
        name: 'Queueing Theory & Stochastic Modeling',
        level: 'Advanced',
        librariesOrPackages: ['M/M/c/K Models', 'M/G/1 Backlog Dissipation', 'Priority Queueing Disciplines', 'Markov Chains'],
        academicApplication: 'Dynamic traffic signal preemption, hospital ICU bed availability, and transit system delays.'
      },
      {
        name: 'Discrete-Event Simulation',
        level: 'Advanced',
        librariesOrPackages: ['SimPy (Python)', 'Monte Carlo Replications', 'Random Variate Generation', 'Bootstrapping'],
        academicApplication: 'Simulating 10,000+ patient arrival pathways and buffer threshold optimizations under demand spikes.'
      },
      {
        name: 'Network Optimization',
        level: 'Proficient',
        librariesOrPackages: ['Dijkstra', 'Floyd-Warshall', 'Max-Flow Min-Cut', 'Dynamic Programming'],
        academicApplication: 'Arterial transit network routing and bottleneck capacity analysis.'
      }
    ]
  },
  {
    category: 'Statistical Computing & Biostatistics',
    description: 'Rigorous parametric, non-parametric, and multivariable inferential methodologies for biomedical and observational datasets.',
    skills: [
      {
        name: 'R for Biostatistics',
        level: 'Advanced',
        librariesOrPackages: ['tidyverse', 'survival', 'pROC', 'lme4', 'ResourceSelection', 'ggplot2'],
        academicApplication: 'Logistic regression, Cox proportional hazards, ROC/AUC DeLong tests, and Hosmer-Lemeshow calibration.'
      },
      {
        name: 'Python for Data Science',
        level: 'Advanced',
        librariesOrPackages: ['pandas', 'NumPy', 'statsmodels', 'SciPy', 'scikit-learn', 'Matplotlib / Seaborn'],
        academicApplication: 'Data wrangling, synthetic generation, simulation engines, and automated exploratory data analysis.'
      },
      {
        name: 'Clinical & Epidemiological Software',
        level: 'Advanced',
        librariesOrPackages: ['SPSS Statistics', 'Minitab', 'Epi Info basics', 'Sample Size Power Analyzers (G*Power)'],
        academicApplication: 'Undergraduate medical curriculum teaching, prospective cohort auditing, and hospital data management.'
      },
      {
        name: 'Survival Analysis & Risk Modeling',
        level: 'Advanced',
        librariesOrPackages: ['Kaplan-Meier Estimators', 'Log-Rank Tests', 'Cox Proportional Hazards', 'Harrell C-Index'],
        academicApplication: 'Time-to-event surgical mortality analysis and patient risk stratification nomograms.'
      }
    ]
  },
  {
    category: 'Programming & Core Technologies',
    description: 'Clean, reproducible scientific coding, algorithm design, version control, and document preparation.',
    skills: [
      {
        name: 'Python',
        level: 'Advanced',
        librariesOrPackages: ['OOP', 'PuLP', 'SimPy', 'NumPy', 'pandas'],
        academicApplication: 'Operations research algorithms, simulation models, and statistical pipeline automation.'
      },
      {
        name: 'R Programming',
        level: 'Advanced',
        librariesOrPackages: ['R Markdown', 'Quarto', 'Data Wrangling', 'Base R Vectorization'],
        academicApplication: 'Reproducible statistical computing and automated clinical manuscript tables.'
      },
      {
        name: 'C / C++',
        level: 'Proficient',
        librariesOrPackages: ['Standard Template Library (STL)', 'Pointers & Memory', 'Computational Algorithms'],
        academicApplication: 'Algorithmic foundations and time-complexity optimization.'
      },
      {
        name: 'SQL & Database Management',
        level: 'Proficient',
        librariesOrPackages: ['PostgreSQL', 'SQLite', 'Complex Joins', 'Aggregations'],
        academicApplication: 'Querying medical records and multi-table surgical registries.'
      },
      {
        name: 'LaTeX & Scientific Documentation',
        level: 'Advanced',
        librariesOrPackages: ['TeXstudio', 'BibTeX', 'Overleaf', 'MathJax', 'Beamer'],
        academicApplication: 'Writing peer-reviewed journal papers, mathematical formulation documents, and presentation slides.'
      }
    ]
  },
  {
    category: 'Machine Learning & Predictive Modeling',
    description: 'Supervised predictive classification, regression regularizations, and model evaluation diagnostics.',
    skills: [
      {
        name: 'Supervised Classification & Regression',
        level: 'Advanced',
        librariesOrPackages: ['scikit-learn', 'Logistic Regression', 'Random Forests', 'Decision Trees'],
        academicApplication: 'Predictive clinical score evaluations and nonlinear patient outcome risk clustering.'
      },
      {
        name: 'Regularization & Feature Selection',
        level: 'Proficient',
        librariesOrPackages: ['Lasso (L1)', 'Ridge (L2)', 'Elastic Net', 'Stepwise AIC/BIC'],
        academicApplication: 'High-dimensional clinical covariate pruning and preventing overfitting on observational datasets.'
      },
      {
        name: 'Model Validation & Resampling',
        level: 'Advanced',
        librariesOrPackages: ['k-Fold Cross Validation', 'Bootstrap Resampling (1000x)', 'Permutation Tests'],
        academicApplication: 'Optimism-corrected C-index estimation and internal validation of surgical risk nomograms.'
      }
    ]
  }
];

export const RELEVANT_COURSEWORK: Coursework[] = [
  {
    category: 'Pure & Applied Mathematics',
    courses: [
      { code: 'MAT201', name: 'Real Analysis I & II', grade: 'A', relevance: 'Metric spaces, sequences, continuity, convergence, and Riemann integration.' },
      { code: 'MAT203', name: 'Linear Algebra & Matrix Analysis', grade: 'A', relevance: 'Eigenvalues, vector spaces, matrix factorizations, and quadratic forms.' },
      { code: 'MAT305', name: 'Advanced Calculus & Differential Equations', grade: 'A-', relevance: 'Multivariable calculus, ODE systems, and dynamical systems.' }
    ]
  },
  {
    category: 'Operations Research & Optimization',
    courses: [
      { code: 'OR301', name: 'Linear Programming & Simplex Method', grade: 'A', relevance: 'Duality theory, sensitivity analysis, revised simplex, and integer programming.' },
      { code: 'OR402', name: 'Queueing Theory & Stochastic Models', grade: 'A', relevance: 'Birth-death processes, Poisson queues, network queueing, and Markov chains.' },
      { code: 'OR405', name: 'Nonlinear & Dynamic Programming', grade: 'A-', relevance: 'KKT optimality conditions, convex optimization, Bellman equations.' },
      { code: 'OR408', name: 'Computer Simulation & Systems Modeling', grade: 'A', relevance: 'Monte Carlo methods, discrete-event simulations, and pseudorandom variates.' }
    ]
  },
  {
    category: 'Statistical Theory & Biostatistics',
    courses: [
      { code: 'ST301', name: 'Mathematical Statistics & Probability Theory', grade: 'A', relevance: 'Maximum likelihood estimation, hypothesis testing, Cramer-Rao bounds, Bayesian inference.' },
      { code: 'ST304', name: 'Linear Models & Regression Analysis', grade: 'A', relevance: 'ANOVA, Gauss-Markov theorem, multicollinearity, generalized linear models (GLMs).' },
      { code: 'ST402', name: 'Biostatistics & Survival Analysis', grade: 'A', relevance: 'Kaplan-Meier survival curves, Cox proportional hazards, epidemiological odds ratios.' },
      { code: 'ST406', name: 'Time Series & Multivariate Statistical Analysis', grade: 'A-', relevance: 'ARIMA, principal component analysis (PCA), factor analysis, MANOVA.' }
    ]
  }
];

export const ADVISOR_RESEARCH_FIT = [
  {
    domain: 'Operations Research in Healthcare & Emergency Logistics',
    description: 'Applying MILP, dynamic programming, and queueing models to optimize hospital bed allocation, emergency department throughput, and surgical schedule sequencing.',
    methods: ['Mixed-Integer Programming', 'Queueing Networks', 'Discrete-Event Simulation', 'Markov Decision Processes'],
    targetLabs: ['Healthcare Operations Engineering', 'Supply Chain & Transportation Logistics', 'Mathematical Programming Groups']
  },
  {
    domain: 'Biostatistical Methods & Clinical Predictive Modeling',
    description: 'Developing calibrated prognostic risk nomograms, high-dimensional survival analysis, and systemic inflammatory biomarker validation in surgical and oncology cohorts.',
    methods: ['Multivariable Logistic & Cox PH Models', 'Harrell C-Index & DeLong AUC', 'Propensity Score Matching', 'Bootstrap Validation'],
    targetLabs: ['Department of Biostatistics', 'Clinical Epidemiology & Data Science Units', 'Biomedical Informatics Labs']
  },
  {
    domain: 'Intelligent Transportation Systems & Urban Infrastructure Control',
    description: 'Mitigating transit delay via adaptive queueing control, preemption protocols, and multi-modal synchronization under real-time sensor feedback.',
    methods: ['Adaptive Signal Control', 'M/G/1 Priority Queueing', 'Dynamic Preemption', 'Combinatorial Optimization'],
    targetLabs: ['Transportation Operations Research', 'Smart Cities & Cyber-Physical Systems', 'Systems Engineering']
  }
];

export const CONFERENCE_PRESENTATIONS: ConferencePresentation[] = [
  {
    id: 'pres-sicet-2026',
    title: 'A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings',
    conference: 'SICET 2026',
    trackOrId: 'Paper ID 76',
    year: '2026',
    type: 'Oral Presentation',
    location: 'Sri Lanka',
    description: 'Oral presentation on developing an adaptive queueing and mathematical programming framework for railway level crossing intersections using Python PuLP.'
  },
  {
    id: 'pres-ipurse-2026',
    title: 'Utility of Modified Glasgow Prognostic Score (mGPS) in Predicting Post-Operative Outcomes in Hepatobiliary and Pancreatic Surgical Patients in Sri Lanka',
    conference: 'iPURSE 2026 (Peradeniya University International Research Sessions)',
    trackOrId: 'Track 1, Paper ID 578',
    year: '2026',
    type: 'Oral Presentation',
    location: 'University of Peradeniya, Sri Lanka',
    description: 'Oral presentation investigating inflammatory and nutritional markers (mGPS) in predicting post-operative complications, ICU admissions, and hospital length of stay.'
  },
  {
    id: 'pres-surs-2026',
    title: 'A Multi-Mode Queueing-Based Adaptive Traffic Signal Control Framework for Railway Level Crossings: Case study of Mirigama, Sri Lanka',
    conference: 'SURS 2026 (Undergraduate Research Symposium at the University of Peradeniya)',
    trackOrId: 'Undergraduate Research Symposium',
    year: '2026',
    type: 'Oral Presentation',
    location: 'University of Peradeniya, Sri Lanka',
    description: 'Presented real-world case study application of adaptive signal preemption and queue dissipation at Mirigama railway level crossing.'
  }
];

export const ACADEMIC_REFERENCES: AcademicReference[] = [
  {
    name: 'Dr. Nilan Manoj Chathuranga',
    title: 'Senior Lecturer',
    department: 'Department of Mathematics',
    faculty: 'Faculty of Science',
    institution: 'University of Peradeniya, Sri Lanka',
    email: 'chathuranga.mudalige@sci.pdn.ac.lk'
  },
  {
    name: 'Dr. Niluka Rodrigo',
    title: 'Senior Lecturer',
    department: 'Department of Mathematics',
    faculty: 'Faculty of Science',
    institution: 'University of Peradeniya, Sri Lanka',
    email: 'nilukar@sci.pdn.ac.lk'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Python – Introduction to Data Science and Machine Learning A–Z',
    issuer: 'Udemy'
  },
  {
    title: 'Professional Diploma in Technical Project Management',
    issuer: 'MTF Institute'
  },
  {
    title: 'Business Science Method, Analysis and Research Methodologies',
    issuer: 'MTF Institute'
  }
];
