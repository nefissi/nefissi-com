"use strict";

/* ==========================================================================
   Paramètres personnels modifiables en un seul endroit
   ========================================================================== */
const PROFILE_CONFIG = {
  fullName: "Mohamed Ali NEFISSI",
  firstName: "Mohamed Ali",
  lastName: "NEFISSI",
  email: "contact@nefissi.com",
  phone: "", // Optionnel : ajoute ton numéro (ex: "+33 6 00 00 00 00") pour l'inclure dans la fiche .vcf
  linkedinUrl: "https://www.linkedin.com/in/nefissi/", // Remplace par l'URL exacte de ton profil LinkedIn
  websiteUrl: "https://nefissi.com",
  location: {
    fr: "Île-de-France · Hybride / Télétravail",
    en: "Paris Area, France · Hybrid / Remote"
  },
  availability: {
    fr: "Disponible · Missions Freelance ou CDI · Île-de-France / Hybride",
    en: "Available · Contract / Permanent Roles · Paris Area / Hybrid"
  }
};

/* ==========================================================================
   Données bilingues complètes (FR / EN)
   ========================================================================== */
const I18N = {
  fr: {
    skipLink: "Aller directement au contenu",
    tabs: { all: "Profil 360°", devops: "Cloud & DevOps", devsecops: "DevSecOps", scrum: "Scrum Master / Lead" },
    printBtn: "Exporter vue PDF",
    contactCta: "Me contacter",
    staticPdfBtn: "Dossier PDF complet",
    vcardBtn: "Fiche contact (.vcf)",
    clientsLabel: "Grands comptes :",
    archEyebrow: "Preuve technique",
    archSectionTitle: "Architectures déployées en production",
    archTabs: ["Gouvernance Cloud", "Landing Zone AWS", "ETL & Data Quality"],
    certEyebrow: "Accréditations vérifiables & Diplôme",
    certSectionTitle: "Certifications 2025 – 2026",
    verifyLabel: "Vérifier",
    eduTitle: "Diplôme d'Ingénieur en Informatique",
    eduSub: "INSA Lyon · Parcours ISIMS Sfax / INSA Lyon — Juin 2010",
    skillsEyebrow: "Cartographie technique & méthodologique",
    skillsSectionTitle: "13 domaines de compétences éprouvés",
    searchPlaceholder: "Filtrer (ex: Terraform, Lambda, SAFe, Oracle)...",
    priorityTag: "Clé",
    noSkillMatch: "Aucun domaine ne correspond au filtre",
    expEyebrow: "Parcours 2006 – 2026 · 15 missions",
    expSectionTitle: "Expériences professionnelles détaillées",
    showAllExp: "Afficher tout l'historique (15 missions)",
    collapseExp: "Réduire aux 6 missions majeures (2014–2026)",
    footAll: "Vue 360°",
    modalEyebrow: "Contact direct · Réponse sous 24h",
    modalTitle: "Échanger autour d'une mission ou d'un poste",
    lblName: "Nom / Société *",
    lblEmail: "Adresse e-mail professionnelle *",
    lblSubject: "Profil ciblé",
    lblMessage: "Message *",
    submitBtn: "Envoyer le message",
    sendingBtn: "Envoi en cours...",
    copyEmailBtn: "Copier contact@nefissi.com",
    toastVcard: "Fiche contact Mohamed_Ali_NEFISSI.vcf téléchargée.",
    toastCopied: "Adresse copiée : contact@nefissi.com",
    toastSent: "Message envoyé avec succès. Merci !",
    toastFallback: "Ouverture de votre messagerie vers contact@nefissi.com...",
    toastValidation: "Veuillez renseigner votre nom, un e-mail valide et votre message."
  },
  en: {
    skipLink: "Skip to main content",
    tabs: { all: "360° Profile", devops: "Cloud & DevOps", devsecops: "DevSecOps", scrum: "Scrum Master / Lead" },
    printBtn: "Export PDF View",
    contactCta: "Get in touch",
    staticPdfBtn: "Full PDF Dossier",
    vcardBtn: "Save Contact (.vcf)",
    clientsLabel: "Enterprise clients:",
    archEyebrow: "Technical Proof",
    archSectionTitle: "Production-Deployed Architectures",
    archTabs: ["Cloud Governance", "AWS Landing Zone", "ETL & Data Quality"],
    certEyebrow: "Verifiable Credentials & Degree",
    certSectionTitle: "Certifications 2025 – 2026",
    verifyLabel: "Verify",
    eduTitle: "Master of Engineering in Computer Science",
    eduSub: "INSA Lyon · Joint Track ISIMS Sfax / INSA Lyon — June 2010",
    skillsEyebrow: "Technical & Agile Capability Matrix",
    skillsSectionTitle: "13 Proven Competency Domains",
    searchPlaceholder: "Filter (e.g., Terraform, Lambda, SAFe, Oracle)...",
    priorityTag: "Core",
    noSkillMatch: "No domain matches filter",
    expEyebrow: "Track Record 2006 – 2026 · 15 Engagements",
    expSectionTitle: "Detailed Professional Experience",
    showAllExp: "Show full history (15 engagements)",
    collapseExp: "Show 6 key engagements (2014–2026)",
    footAll: "360° View",
    modalEyebrow: "Direct Contact · Reply within 24h",
    modalTitle: "Discuss a role or consulting engagement",
    lblName: "Name / Company *",
    lblEmail: "Work Email Address *",
    lblSubject: "Target Profile",
    lblMessage: "Message *",
    submitBtn: "Send Message",
    sendingBtn: "Sending...",
    copyEmailBtn: "Copy contact@nefissi.com",
    toastVcard: "Contact card Mohamed_Ali_NEFISSI.vcf downloaded.",
    toastCopied: "Email copied: contact@nefissi.com",
    toastSent: "Message sent successfully. Thank you!",
    toastFallback: "Opening your email client to contact@nefissi.com...",
    toastValidation: "Please fill in your name, a valid email address, and your message."
  }
};

const PERSONAS = {
  all: {
    priorityDomains: ["aws", "iac", "secops", "agile", "python", "cicd"],
    fr: {
      badge: "Vue hybride 360° · Ingénierie Cloud, DevSecOps & Scrum Master",
      role: "Ingénieur DevSecOps, Cloud AWS/Azure & Scrum Master SAFe",
      summary:
        "Ingénieur informatique INSA Lyon avec 16 ans d'expérience auprès de grands comptes (Société Générale, AXA, BNP Paribas, Bouygues Telecom, Veolia). Double compétence combinant développement Python/SQL, automatisation Cloud AWS & Azure (Terraform, CloudFormation, CI/CD) et pilotage Agile d'équipes internationales jusqu'à 14 personnes.",
      kpis: [
        { value: "16 ans", label: "Expérience grands comptes", sub: "Banque, Assurance, Télécoms, Énergie" },
        { value: "+1 000", label: "Comptes AWS & Azure", sub: "Gouvernance & sécurité chez Société Générale" },
        { value: "14 pers.", label: "Équipe France – Inde", sub: "Scrum Master & Lead SAFe anglophone" },
        { value: "30 → 80 %", label: "Couverture de tests", sub: "Pytest & SonarQube chez BNP Paribas Manaos" }
      ]
    },
    en: {
      badge: "360° Hybrid View · Cloud Engineering, DevSecOps & Scrum Master",
      role: "DevSecOps Engineer, AWS/Azure Cloud & SAFe Scrum Master",
      summary:
        "INSA Lyon Computer Science Engineer with 16 years of enterprise experience (Société Générale, AXA, BNP Paribas, Bouygues Telecom, Veolia). Bridges hands-on Python/SQL engineering, AWS & Azure Cloud automation (Terraform, CloudFormation, CI/CD), and Agile leadership across distributed teams of up to 14 members.",
      kpis: [
        { value: "16 yrs", label: "Enterprise Experience", sub: "Banking, Insurance, Telecom, Energy" },
        { value: "1,000+", label: "AWS & Azure Accounts", sub: "Cloud security governance at Société Générale" },
        { value: "14 ppl", label: "France – India Team", sub: "English-speaking SAFe Scrum Master & Lead" },
        { value: "30 → 80%", label: "Test Coverage Boost", sub: "Pytest & SonarQube at BNP Paribas Manaos" }
      ]
    }
  },
  devops: {
    priorityDomains: ["aws", "iac", "cicd", "python", "prod", "quality"],
    fr: {
      badge: "Profil ciblé · Cloud Architect, IaC & Plateforme DevOps",
      role: "Ingénieur Cloud AWS & DevOps — Terraform, CloudFormation & CI/CD",
      summary:
        "Spécialiste de la construction de fondations Cloud multi-comptes et multi-régions (Landing Zone AWS, Account Vending Machine, Service Catalog) et de l'automatisation des chaînes de déploiement (GitHub Actions, GitLab CI, CircleCI, Terraform Enterprise, Python serverless).",
      kpis: [
        { value: "Multi-Cloud", label: "AWS & Azure", sub: "Landing Zone, Lambda, EC2, Step Functions" },
        { value: "IaC Expert", label: "Terraform & CloudFormation", sub: "Terraform Enterprise, AVM, Service Catalog" },
        { value: "CI/CD", label: "GitHub Actions & GitLab", sub: "Migration Jenkins, Docker, SonarQube" },
        { value: "Certifié 2026", label: "GitLab CI/CD & AI DevOps", sub: "Accréditations officielles 2026" }
      ]
    },
    en: {
      badge: "Targeted Profile · Cloud Architect, IaC & DevOps Platform",
      role: "AWS Cloud & DevOps Engineer — Terraform, CloudFormation & CI/CD",
      summary:
        "Specialist in multi-account, multi-region Cloud foundations (AWS Landing Zone, Account Vending Machine, Service Catalog) and automated CI/CD delivery pipelines (GitHub Actions, GitLab CI, CircleCI, Terraform Enterprise, serverless Python).",
      kpis: [
        { value: "Multi-Cloud", label: "AWS & Azure", sub: "Landing Zone, Lambda, EC2, Step Functions" },
        { value: "IaC Expert", label: "Terraform & CloudFormation", sub: "Terraform Enterprise, AVM, Service Catalog" },
        { value: "CI/CD", label: "GitHub Actions & GitLab", sub: "Jenkins migration, Docker, SonarQube" },
        { value: "2026 Certified", label: "GitLab CI/CD & AI DevOps", sub: "Official 2026 accreditations" }
      ]
    }
  },
  devsecops: {
    priorityDomains: ["secops", "aws", "iac", "cicd", "quality", "python"],
    fr: {
      badge: "Profil ciblé · Ingénieur DevSecOps & Conformité Cloud",
      role: "Ingénieur DevSecOps — Gouvernance & Sécurité Multi-Cloud AWS / Azure",
      summary:
        "Conception et déploiement à grande échelle de catalogues de règles de détection et de remédiation sécurité sur plus de 1 000 comptes AWS et souscriptions Azure. Automatisation des contrôles de conformité (AWS Config, Airflow, Grafana) et intégration de la sécurité dans les pipelines CI/CD.",
      kpis: [
        { value: "+1 000", label: "Comptes AWS & Azure", sub: "Déploiement de politiques de sécurité groupe" },
        { value: "Conformité", label: "AWS Config & Airflow", sub: "Contrôles automatisés & reporting Grafana" },
        { value: "IAM & API", label: "Rotation & Self-Service", sub: "Automatisation IAM, API Gateway, EventBridge" },
        { value: "Certifié 2026", label: "GitLab Security Associate", sub: "Sécurisation des chaînes CI/CD (sept. 2026)" }
      ]
    },
    en: {
      badge: "Targeted Profile · DevSecOps & Cloud Compliance Engineer",
      role: "DevSecOps Engineer — Multi-Cloud Governance & Security (AWS / Azure)",
      summary:
        "Design and large-scale rollout of security detection and policy enforcement catalogs across 1,000+ AWS accounts and Azure subscriptions. Automated compliance checks (AWS Config, Airflow, Grafana) and security-hardened CI/CD pipelines.",
      kpis: [
        { value: "1,000+", label: "AWS & Azure Accounts", sub: "Enterprise security policy rollout" },
        { value: "Compliance", label: "AWS Config & Airflow", sub: "Automated checks & Grafana dashboards" },
        { value: "IAM & API", label: "Credential Rotation", sub: "IAM automation, API Gateway, EventBridge" },
        { value: "2026 Certified", label: "GitLab Security Associate", sub: "CI/CD pipeline security (Sept. 2026)" }
      ]
    }
  },
  scrum: {
    priorityDomains: ["agile", "secops", "aws", "prod", "design", "python"],
    fr: {
      badge: "Profil ciblé · Scrum Master SAFe & Tech Lead",
      role: "Scrum Master Certifié (PSM I / PSPO I) & Tech Lead Technique",
      summary:
        "Animation d'équipes Agiles distribuées (France–Inde, 5 à 14 personnes) dans un cadre SAFe. Double posture technique et méthodologique permettant de lever les blocages d'architecture, co-construire la roadmap produit et sécuriser les engagements de PI Planning.",
      kpis: [
        { value: "14 pers.", label: "Coordination France – Inde", sub: "8 ingénieurs France + 6 développeurs Inde" },
        { value: "7 pers.", label: "Tech Lead Bouygues Telecom", sub: "Pilotage technique complet sur plus de 5 ans" },
        { value: "SAFe / Scrum", label: "PI Planning & ART Sync", sub: "Animation rituels, roadmap & transfert de savoir" },
        { value: "PSM I & PSPO I", label: "Certifié Scrum.org 2026", sub: "Double certification Scrum Master & Product Owner" }
      ]
    },
    en: {
      badge: "Targeted Profile · SAFe Scrum Master & Technical Lead",
      role: "Certified Scrum Master (PSM I / PSPO I) & Technical Lead",
      summary:
        "Facilitating distributed Agile teams (France–India, 5 to 14 members) within a SAFe framework. Dual engineering and Agile leadership posture to remove architectural impediments, co-build product roadmaps, and secure PI Planning commitments.",
      kpis: [
        { value: "14 ppl", label: "France – India Delivery", sub: "8 engineers in France + 6 developers in India" },
        { value: "7 ppl", label: "Bouygues Telecom Tech Lead", sub: "End-to-end technical leadership over 5+ years" },
        { value: "SAFe / Scrum", label: "PI Planning & ART Sync", sub: "Ceremonies, roadmap & knowledge transfer" },
        { value: "PSM I & PSPO I", label: "Scrum.org Certified 2026", sub: "Dual Scrum Master & Product Owner credentials" }
      ]
    }
  }
};

const ARCHITECTURES = {
  devsecops: {
    caption: {
      fr: "Société Générale (2024–2026) : orchestration serverless en Python des politiques de sécurité sur plus de 1 000 comptes AWS et souscriptions Azure, contrôles Airflow et restitution Grafana.",
      en: "Société Générale (2024–2026): serverless Python orchestration of security policies across 1,000+ AWS accounts and Azure subscriptions, Airflow compliance jobs, and Grafana reporting."
    },
    svg: `
      <svg class="arch-svg" viewBox="0 0 760 230" role="img" aria-label="Architecture Gouvernance DevSecOps Multi-Cloud">
        <defs>
          <marker id="arrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
          </marker>
        </defs>
        <rect x="12" y="24" width="155" height="74" rx="12" fill="#17171d" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="89" y="54" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">AWS Landing Zone</text>
        <text x="89" y="75" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">EventBridge · Lambda</text>

        <rect x="12" y="128" width="155" height="74" rx="12" fill="#17171d" stroke="#818cf8" stroke-width="1.5"/>
        <text x="89" y="158" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Azure Subscriptions</text>
        <text x="89" y="179" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">API Mgmt · Event Grid</text>

        <line x1="167" y1="61" x2="232" y2="96" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow1)"/>
        <line x1="167" y1="165" x2="232" y2="128" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow1)"/>

        <rect x="238" y="56" width="225" height="114" rx="14" fill="#111115" stroke="#34d399" stroke-width="1.8"/>
        <text x="350" y="88" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" text-anchor="middle">PYTHON DEVSECOPS ENGINE</text>
        <text x="350" y="112" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Security Policy Catalog</text>
        <text x="350" y="134" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">API Gateway · Step Functions</text>
        <text x="350" y="152" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Terraform · CloudFormation</text>

        <line x1="463" y1="92" x2="532" y2="64" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow1)"/>
        <line x1="463" y1="134" x2="532" y2="162" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow1)"/>

        <rect x="538" y="24" width="208" height="74" rx="12" fill="#17171d" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="642" y="54" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">+1 000 Accounts Governed</text>
        <text x="642" y="75" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">GitHub Actions CI/CD</text>

        <rect x="538" y="128" width="208" height="74" rx="12" fill="#17171d" stroke="#34d399" stroke-width="1.5"/>
        <text x="642" y="158" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Compliance &amp; Observability</text>
        <text x="642" y="179" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Apache Airflow · Grafana</text>
      </svg>
    `
  },
  landing: {
    caption: {
      fr: "AXA Competency Center (2022–2024) : provisioning automatisé de comptes AWS via Account Vending Machine, consommation self-service Service Catalog et Terraform Enterprise.",
      en: "AXA Competency Center (2022–2024): automated AWS account vending, self-service Service Catalog provisioning, and Terraform Enterprise workspace automation."
    },
    svg: `
      <svg class="arch-svg" viewBox="0 0 760 230" role="img" aria-label="Architecture Landing Zone AWS et Self-Service">
        <defs>
          <marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
          </marker>
        </defs>
        <rect x="14" y="68" width="170" height="92" rx="12" fill="#17171d" stroke="#818cf8" stroke-width="1.5"/>
        <text x="99" y="102" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">AXA Operating Companies</text>
        <text x="99" y="124" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">SSP Portal · IAM Onboarding</text>
        <text x="99" y="142" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Terraform Enterprise</text>

        <line x1="184" y1="114" x2="246" y2="114" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow2)"/>

        <rect x="252" y="42" width="230" height="144" rx="14" fill="#111115" stroke="#38bdf8" stroke-width="1.8"/>
        <text x="367" y="72" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" text-anchor="middle">MPI IAAS PLATFORM</text>
        <text x="367" y="96" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Account Vending Machine</text>
        <text x="367" y="120" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">AWS Organizations · CloudFormation</text>
        <text x="367" y="140" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Service Catalog · Lambda Python</text>
        <text x="367" y="160" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Step Functions · Systems Manager</text>

        <line x1="482" y1="84" x2="544" y2="62" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow2)"/>
        <line x1="482" y1="144" x2="544" y2="164" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow2)"/>

        <rect x="550" y="24" width="196" height="74" rx="12" fill="#17171d" stroke="#34d399" stroke-width="1.5"/>
        <text x="648" y="54" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Storage &amp; Resilience</text>
        <text x="648" y="75" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">NetApp AWS · AWS Backup</text>

        <rect x="550" y="128" width="196" height="74" rx="12" fill="#17171d" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="648" y="158" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Multi-Account Monitoring</text>
        <text x="648" y="179" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">CloudWatch · AWS Config</text>
      </svg>
    `
  },
  etl: {
    caption: {
      fr: "Bouygues Telecom, Veolia & BNP Paribas Manaos : collecte multi-protocoles en Python, normalisation Pandas/DataFrames, chargement contrôlé Oracle PL/SQL & BigQuery.",
      en: "Bouygues Telecom, Veolia & BNP Paribas Manaos: multi-protocol Python ingestion, Pandas DataFrame normalization, controlled Oracle PL/SQL & BigQuery loading."
    },
    svg: `
      <svg class="arch-svg" viewBox="0 0 760 230" role="img" aria-label="Architecture ETL et Qualité des Données">
        <defs>
          <marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
          </marker>
        </defs>
        <rect x="14" y="42" width="185" height="144" rx="12" fill="#17171d" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="106" y="74" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" text-anchor="middle">1. EXTRACTION</text>
        <text x="106" y="98" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Heterogeneous Sources</text>
        <text x="106" y="122" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">SNMP OID · SSH · REST API</text>
        <text x="106" y="142" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">S3 · SFTP · CSV · HTTP</text>
        <text x="106" y="162" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Cron / AWS Lambda</text>

        <line x1="199" y1="114" x2="262" y2="114" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow3)"/>

        <rect x="268" y="42" width="215" height="144" rx="14" fill="#111115" stroke="#34d399" stroke-width="1.8"/>
        <text x="375" y="74" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" text-anchor="middle">2. TRANSFORM &amp; QA</text>
        <text x="375" y="98" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Python &amp; Pandas Engine</text>
        <text x="375" y="122" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Normalization · Cross-checks</text>
        <text x="375" y="142" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Resilient Shell Loader</text>
        <text x="375" y="162" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Pytest (80%) · SonarQube</text>

        <line x1="483" y1="114" x2="546" y2="114" stroke="#38bdf8" stroke-width="1.6" marker-end="url(#arrow3)"/>

        <rect x="552" y="42" width="194" height="144" rx="12" fill="#17171d" stroke="#818cf8" stroke-width="1.5"/>
        <text x="649" y="74" fill="#818cf8" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" text-anchor="middle">3. LOAD &amp; KPI</text>
        <text x="649" y="98" fill="#f4f4f6" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Databases &amp; Referentials</text>
        <text x="649" y="122" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Oracle PL/SQL · PostgreSQL</text>
        <text x="649" y="142" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">BigQuery SQL · Datalake</text>
        <text x="649" y="162" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Drift Reports &amp; ETL OUT</text>
      </svg>
    `
  }
};

/* Remplace les URLs Credly / Scrum.org par tes liens directs de badges si souhaité */
const CERTIFICATIONS = [
  { name: "GitLab Certified Security Associate", dateFr: "14 sept. 2026", dateEn: "Sept 14, 2026", url: "https://www.credly.com" },
  { name: "GitLab Certified Fundamentals Associate", dateFr: "30 juil. 2026", dateEn: "July 30, 2026", url: "https://www.credly.com" },
  { name: "GitLab Certified CI/CD Associate", dateFr: "1er juil. 2026", dateEn: "July 1, 2026", url: "https://www.credly.com" },
  { name: "Scrum.org Professional Scrum Product Owner I (PSPO I)", dateFr: "10 mai 2026", dateEn: "May 10, 2026", url: "https://www.scrum.org/certificates" },
  { name: "Scrum.org Professional Scrum Master I (PSM I)", dateFr: "29 avr. 2026", dateEn: "April 29, 2026", url: "https://www.scrum.org/certificates" },
  { name: "AI Level 2 : DevOps & Cloud Engineer", dateFr: "Fév. 2026", dateEn: "Feb 2026", url: "https://www.credly.com" },
  { name: "GenAI Level 1", dateFr: "Fév. 2025", dateEn: "Feb 2025", url: "https://www.credly.com" }
];

const SKILL_DOMAINS = [
  {
    id: "aws",
    titleFr: "AWS & Plateformes Cloud",
    titleEn: "AWS & Cloud Platforms",
    descFr: "Landing Zone multi-comptes/multi-régions, plateforme IaaS, services serverless (Lambda, Step Functions, EventBridge, API Gateway) et Azure API Mgmt.",
    descEn: "Multi-account/multi-region Landing Zone, IaaS platform, serverless services (Lambda, Step Functions, EventBridge, API Gateway), and Azure API Mgmt.",
    refs: ["Société Générale", "AXA", "Veolia", "Manaos"]
  },
  {
    id: "iac",
    titleFr: "Infrastructure as Code (IaC)",
    titleEn: "Infrastructure as Code (IaC)",
    descFr: "Terraform, Terraform Enterprise, AWS CloudFormation, modules de provisioning, Service Catalog et automatisation IAM / Account Vending Machine.",
    descEn: "Terraform, Terraform Enterprise, AWS CloudFormation, provisioning modules, Service Catalog, and IAM / Account Vending Machine automation.",
    refs: ["AXA", "Société Générale", "Veolia"]
  },
  {
    id: "secops",
    titleFr: "Sécurité & Conformité Cloud",
    titleEn: "Cloud Security & Compliance",
    descFr: "Gestion et assignation de politiques AWS/Azure sur +1 000 comptes, AWS Config, contrôles automatisés Apache Airflow et reporting Grafana.",
    descEn: "AWS/Azure policy assignment across 1,000+ accounts, AWS Config, automated Apache Airflow compliance checks, and Grafana reporting.",
    refs: ["Société Générale", "AXA"]
  },
  {
    id: "agile",
    titleFr: "Coordination Technique & Agile",
    titleEn: "Technical Leadership & Agile",
    descFr: "Tech Lead (7 pers.) et Scrum Master SAFe (14 pers. France–Inde), animation PI Planning, ART Sync, roadmap produit et accompagnement utilisateurs.",
    descEn: "Tech Lead (7 members) and SAFe Scrum Master (14 members France–India), PI Planning, ART Sync, product roadmap, and user onboarding.",
    refs: ["Société Générale", "Bouygues", "AXA"]
  },
  {
    id: "python",
    titleFr: "Développement Python",
    titleEn: "Python Engineering",
    descFr: "Collecte de données, règles métier, API REST, fonctions serverless AWS Lambda, automatisation système et traitements haute volumétrie.",
    descEn: "Data ingestion, business rule engines, REST APIs, AWS Lambda serverless functions, system automation, and high-volume pipelines.",
    refs: ["Société Générale", "AXA", "Manaos", "Veolia", "Bouygues"]
  },
  {
    id: "cicd",
    titleFr: "CI/CD & Automatisation",
    titleEn: "CI/CD & Delivery Automation",
    descFr: "Migration Jenkins vers GitHub Actions, pipelines GitLab CI et CircleCI, conteneurisation Docker et articulation avec les releases.",
    descEn: "Jenkins to GitHub Actions migration, GitLab CI and CircleCI pipelines, Docker containerization, and release orchestration.",
    refs: ["Société Générale", "Veolia", "Manaos"]
  },
  {
    id: "quality",
    titleFr: "Qualité Logicielle",
    titleEn: "Software Quality & Testing",
    descFr: "Tests unitaires Pytest, suivi de couverture et SonarQube (hausse de 30 % à 80 %), revues de code et validation des tests d'intégration/E2E.",
    descEn: "Pytest unit testing, code coverage & SonarQube tracking (raised from 30% to 80%), code reviews, and integration/E2E test validation.",
    refs: ["Manaos", "Société Générale", "Veolia"]
  },
  {
    id: "etl",
    titleFr: "Intégration & Qualité des Données",
    titleEn: "Data Integration & Data Quality",
    descFr: "ETL internes, traitements CSV, Pandas/DataFrames, contrôles de cohérence, comparaison opérationnel/référentiel et reporting.",
    descEn: "Internal ETL pipelines, CSV processing, Pandas DataFrames, data consistency validation, operational vs. referential diffing, and reporting.",
    refs: ["Bouygues", "Manaos", "Veolia", "Equancy"]
  },
  {
    id: "sql",
    titleFr: "SQL & Bases de Données",
    titleEn: "SQL & Relational Databases",
    descFr: "PL/SQL Oracle massif, requêtes complexes PostgreSQL, traitements BigQuery SQL ; optimisation et exploitation des chaînes de données.",
    descEn: "High-volume Oracle PL/SQL, complex PostgreSQL queries, BigQuery SQL pipelines; query tuning and production database operations.",
    refs: ["Bouygues", "Société Générale", "Veolia"]
  },
  {
    id: "prod",
    titleFr: "Production & MCO",
    titleEn: "Production Operations & SRE",
    descFr: "Supervision batch, gestion des releases, diagnostic d'incidents, support N2, astreintes mensuelles et transfert de connaissances.",
    descEn: "Batch monitoring, release management, root-cause incident diagnostics, L2 support, monthly on-call rotations, and knowledge transfer.",
    refs: ["Société Générale", "AXA", "Bouygues"]
  },
  {
    id: "web",
    titleFr: "Développement Web & Applicatif",
    titleEn: "Web & Enterprise Applications",
    descFr: "Django, PHP (Zend Framework 2), JavaScript, interfaces d'administration et fonctionnalités métier.",
    descEn: "Django, PHP (Zend Framework 2), JavaScript, back-office administration tools, and business workflows.",
    refs: ["Equancy", "UltraMag", "PSA", "CRNL", "LIRIS"]
  },
  {
    id: "design",
    titleFr: "Conception & Validation Logicielle",
    titleEn: "Software Architecture & Validation",
    descFr: "Recueil des besoins, spécifications fonctionnelles et techniques, études de faisabilité, maquettes et validation.",
    descEn: "Requirements gathering, functional & technical specifications, feasibility studies, prototyping, and QA validation.",
    refs: ["SNCF", "CRNL", "LIRIS", "LIESP", "PLINETEL"]
  },
  {
    id: "gui",
    titleFr: "Interfaces & Logiciels Spécialisés",
    titleEn: "Desktop & Specialized Interfaces",
    descFr: "Composants Python/PHP, interfaces de tests auditifs (PyQt/PySide) et application C# de visualisation géographique.",
    descEn: "Python/PHP components, clinical auditory testing UIs (PyQt/PySide), and C# GIS visualization desktop software.",
    refs: ["CRNL", "PLINETEL"]
  }
];

const EXPERIENCES = [
  {
    client: "Société Générale",
    sectorFr: "Banque / Sécurité Cloud · Val de Fontenay",
    sectorEn: "Banking / Cloud Security · Paris Area",
    roleFr: "Ingénieur DevSecOps & Scrum Master",
    roleEn: "DevSecOps Engineer & Scrum Master",
    periodFr: "Juil. 2024 – Août 2026",
    periodEn: "July 2024 – Aug 2026",
    featured: true,
    tags: ["devsecops", "devops", "scrum"],
    contextFr:
      "Sécurité des environnements Cloud AWS et Azure sur plus de 1 000 comptes et souscriptions. Mission répartie à 50 % DevSecOps et 50 % Scrum Master SAFe au sein d'une équipe internationale de 14 personnes (8 en France, 6 en Inde), travail en anglais.",
    contextEn:
      "Cloud security governance across 1,000+ AWS accounts and Azure subscriptions. Split 50% DevSecOps engineering and 50% SAFe Scrum Master within a 14-person international team (8 in France, 6 in India), working full-time in English.",
    bulletsFr: [
      "Conception et développement en Python d'API et d'orchestrations serverless (AWS Lambda, API Gateway, EventBridge, Step Functions, Azure API Management, Event Grid).",
      "Déploiement et maintenance des infrastructures via Terraform et AWS CloudFormation, incluant la migration de Terraform vers CloudFormation et de Jenkins vers GitHub Actions.",
      "Automatisation des contrôles de conformité avec Apache Airflow et restitution des métriques de sécurité dans Grafana.",
      "Animation des rituels Scrum/SAFe (PI Planning, ART Sync), contribution à la roadmap produit, gestion des astreintes et transfert de compétences vers l'équipe en Inde."
    ],
    bulletsEn: [
      "Designed and built Python APIs and serverless orchestrations (AWS Lambda, API Gateway, EventBridge, Step Functions, Azure API Management, Event Grid).",
      "Deployed and maintained infrastructure with Terraform and AWS CloudFormation, leading migrations from Terraform to CloudFormation and Jenkins to GitHub Actions.",
      "Automated compliance checks using Apache Airflow and exposed cloud security KPIs in Grafana dashboards.",
      "Facilitated Scrum/SAFe ceremonies (PI Planning, ART Sync), co-built the product roadmap, handled monthly on-call duties, and led knowledge transfer to the India team."
    ],
    stack: ["Python", "AWS Lambda", "EventBridge", "Step Functions", "Azure API Mgmt", "Terraform", "CloudFormation", "GitHub Actions", "Airflow", "Grafana", "SAFe"]
  },
  {
    client: "AXA — AWS Competency Center",
    sectorFr: "Assurance / Services financiers · Paris",
    sectorEn: "Insurance / Financial Services · Paris",
    roleFr: "Ingénieur Python / AWS — Cloud & Infrastructure as Code",
    roleEn: "Python / AWS Engineer — Cloud & Infrastructure as Code",
    periodFr: "Avr. 2022 – Juin 2024",
    periodEn: "Apr 2022 – June 2024",
    featured: true,
    tags: ["devops", "devsecops", "scrum"],
    contextFr:
      "Construction et évolution des fondations Cloud multi-comptes et multi-régions sur la plateforme IaaS MPI pour accompagner la migration Cloud des filiales du groupe AXA.",
    contextEn:
      "Built and evolved multi-account, multi-region AWS Cloud foundations on the MPI IaaS platform to accelerate Cloud adoption across AXA Operating Companies.",
    bulletsFr: [
      "Automatisation de la Landing Zone AWS multi-comptes/multi-régions avec CloudFormation, AWS Organizations et l'Account Vending Machine (AVM).",
      "Développement de modules Terraform / Terraform Enterprise et intégration AWS Service Catalog pour la consommation en libre-service.",
      "Automatisation de la gestion IAM, rotation des identifiants, enrôlement sur le portail SSP, stockage partagé NetApp et plans AWS Backup.",
      "Supervision centralisée multi-comptes avec CloudWatch et règles de conformité AWS Config ; onboarding et formation des filiales."
    ],
    bulletsEn: [
      "Automated the multi-account/multi-region AWS Landing Zone using CloudFormation, AWS Organizations, and the Account Vending Machine (AVM).",
      "Developed Terraform / Terraform Enterprise modules integrated with AWS Service Catalog for self-service infrastructure consumption.",
      "Automated IAM user lifecycle, credential rotation, SSP portal API onboarding, shared NetApp storage, and AWS Backup workflows.",
      "Implemented multi-account CloudWatch observability and AWS Config compliance rules; trained and onboarded AXA subsidiaries."
    ],
    stack: ["Python", "Bash", "PowerShell", "CloudFormation", "Terraform Enterprise", "AWS Organizations", "Service Catalog", "IAM", "AWS Config", "CloudWatch", "SAFe"]
  },
  {
    client: "Société Générale — GTS",
    sectorFr: "Banque / Infrastructure IT",
    sectorEn: "Banking / IT Infrastructure",
    roleFr: "Développeur Python / Shell / SQL & Scrum Master",
    roleEn: "Python / Shell / SQL Developer & Scrum Master",
    periodFr: "Janv. 2021 – Avr. 2022",
    periodEn: "Jan 2021 – Apr 2022",
    featured: true,
    tags: ["scrum", "devops"],
    contextFr:
      "Évolution de FACPRO, application critique de collecte des données d'infrastructure et de facturation interne des actifs IT, au sein d'une équipe Scrum de 5 personnes.",
    contextEn:
      "Evolved FACPRO, a mission-critical infrastructure data collection and internal IT asset billing platform, within a 5-person Scrum team.",
    bulletsFr: [
      "Refonte de l'architecture applicative et développement des programmes de collecte et de calcul en Python 3, Shell et SQL.",
      "Rédaction et optimisation de requêtes SQL complexes sous PostgreSQL et administration courante via pgAdmin.",
      "Supervision des traitements batch en production, diagnostic et correction d'incidents critiques.",
      "Animation complète des rituels Scrum, levée des obstacles et participation aux PI Planning / ART Sync."
    ],
    bulletsEn: [
      "Re-architected core data ingestion and internal billing calculation pipelines in Python 3, Shell, and SQL.",
      "Authored and tuned complex PostgreSQL queries and handled day-to-day database administration via pgAdmin.",
      "Monitored production batch workflows, diagnosed incidents, and delivered hotfixes to ensure service continuity.",
      "Facilitated all Scrum ceremonies, removed impediments, and contributed to PI Planning and ART Sync."
    ],
    stack: ["Python 3", "Shell", "PostgreSQL", "SQL", "pgAdmin", "Linux", "Git", "Jira", "Scrum"]
  },
  {
    client: "BNP Paribas — Manaos",
    sectorFr: "FinTech / Données de portefeuilles d'investissement",
    sectorEn: "FinTech / Investment Portfolio Data",
    roleFr: "Développeur Backend Python / AWS",
    roleEn: "Backend Python / AWS Developer",
    periodFr: "Avr. – Nov. 2020",
    periodEn: "Apr – Nov 2020",
    featured: true,
    tags: ["devops", "devsecops"],
    contextFr:
      "Développement de la plateforme Manaos au sein d'une équipe Agile de 7 personnes : refonte ETL, modules serverless et renforcement majeur de la qualité logicielle.",
    contextEn:
      "Contributed to the Manaos investment data platform within a 7-person Agile team: ETL refactoring, serverless APIs, and software quality uplift.",
    bulletsFr: [
      "Refactorisation et optimisation des traitements ETL Python utilisant Pandas et les DataFrames.",
      "Conception de modules métier serverless sous AWS Lambda exposés via API REST et développement des flux partenaires ETL OUT.",
      "Augmentation du taux de couverture de tests de l'ensemble de l'ETL de 30 % à 80 % avec Pytest et suivi SonarQube.",
      "Création et maintenance des pipelines CI/CD avec CircleCI et Docker."
    ],
    bulletsEn: [
      "Refactored and optimized Python ETL data transformation pipelines leveraging Pandas and DataFrames.",
      "Built serverless business modules on AWS Lambda exposed via REST APIs and developed outbound partner ETL flows.",
      "Increased overall ETL unit test coverage from 30% to 80% using Pytest and SonarQube quality gates.",
      "Created and maintained Dockerized CI/CD pipelines on CircleCI."
    ],
    stack: ["Python 3", "Pandas", "AWS Lambda", "S3", "API REST", "Pytest", "SonarQube", "CircleCI", "Docker"]
  },
  {
    client: "Veolia — Digital Factory",
    sectorFr: "Services à l'environnement · GCP & AWS",
    sectorEn: "Environmental Services · GCP & AWS",
    roleFr: "Développeur Backend Python / Cloud",
    roleEn: "Backend Python / Cloud Developer",
    periodFr: "Juil. 2019 – Mars 2020",
    periodEn: "July 2019 – Mar 2020",
    featured: true,
    tags: ["devops"],
    contextFr:
      "Alimentation et exploitation du Datalake pour le calcul d'indicateurs KPI en environnement multi-cloud GCP et AWS.",
    contextEn:
      "Datalake ingestion and KPI computation pipelines across a hybrid GCP and AWS cloud environment.",
    bulletsFr: [
      "Développement de flux de collecte Python (CSV, HTTP, FTP, S3, API) avec contrôles de qualité des données.",
      "Développement des traitements SQL dans BigQuery et de fonctions AWS Lambda pour le calcul des KPI.",
      "Provisioning Terraform (Lambda, S3, EC2) et participation aux pipelines de déploiement GitLab CI."
    ],
    bulletsEn: [
      "Built multi-source Python ingestion pipelines (CSV, HTTP, FTP, S3, APIs) with embedded data quality checks.",
      "Developed BigQuery SQL transformations and AWS Lambda functions for business KPI calculation.",
      "Provisioned AWS resources (Lambda, S3, EC2) with Terraform and maintained GitLab CI deployment pipelines."
    ],
    stack: ["Python", "BigQuery SQL", "AWS Lambda", "S3", "EC2", "Terraform", "GitLab CI", "Pytest"]
  },
  {
    client: "Bouygues Telecom",
    sectorFr: "Télécommunications · Bogedo / Bogedo Trans",
    sectorEn: "Telecommunications · Bogedo / Bogedo Trans",
    roleFr: "Tech Lead — Intégration de données Python / Oracle PL/SQL",
    roleEn: "Tech Lead — Python / Oracle PL/SQL Data Integration",
    periodFr: "Fév. 2014 – Mai 2019",
    periodEn: "Feb 2014 – May 2019",
    featured: true,
    tags: ["scrum", "devops"],
    contextFr:
      "Pilotage technique d'une équipe de 7 personnes sur un ETL interne collectant chaque nuit les configurations des équipements réseau (Ericsson MINI-LINK) pour détecter les écarts avec les référentiels.",
    contextEn:
      "Technical lead for a 7-person team building an internal ETL collecting nightly telecom equipment configurations (Ericsson MINI-LINK) to detect drift against engineering referentials.",
    bulletsFr: [
      "Coordination technique d'une équipe de 7 personnes, animation des ateliers métiers/techniques et gestion du support N2.",
      "Développement des collecteurs Python (SNMP OID, SSH, Telnet, SOAP, SFTP) et règles de normalisation métier.",
      "Développement d'un loader Shell résilient avec reprise après erreur et de procédures stockées Oracle PL/SQL massives de comparaison aux référentiels."
    ],
    bulletsEn: [
      "Provided technical leadership for a 7-member team, led technical/business workshops, and managed L2 production support.",
      "Engineered Python network collectors (SNMP OID, SSH, Telnet, SOAP, SFTP) and complex business normalization rules.",
      "Built an idempotent Shell CSV loader with error recovery and high-volume Oracle PL/SQL stored procedures for referential drift detection."
    ],
    stack: ["Python", "Oracle PL/SQL", "Shell", "SNMP", "SSH", "Cron", "Tech Lead (7 ppl)"]
  },
  {
    client: "Equancy",
    sectorFr: "Data Quality / Business Intelligence",
    sectorEn: "Data Quality / Business Intelligence",
    roleFr: "Développeur Python / Django",
    roleEn: "Python / Django Developer",
    periodFr: "Oct. 2013 – Janv. 2014",
    periodEn: "Oct 2013 – Jan 2014",
    featured: false,
    tags: ["devops"],
    contextFr: "Contrôle automatique de la structure et de la cohérence des flux multi-sources alimentant un outil de Business Intelligence.",
    contextEn: "Automated schema and consistency validation of multi-source data feeds powering a Business Intelligence platform.",
    bulletsFr: ["Développement de scripts de chargement Python/Django, contrôles de couverture temporelle et interfaces de supervision."],
    bulletsEn: ["Built Python/Django ingestion scripts, temporal completeness checks, and monitoring dashboards."],
    stack: ["Python", "Django 1.5", "MongoDB", "MySQL", "Bootstrap 3"]
  },
  {
    client: "UltraMag",
    sectorFr: "Édition numérique",
    sectorEn: "Digital Publishing",
    roleFr: "Développeur PHP / Zend Framework 2",
    roleEn: "PHP / Zend Framework 2 Developer",
    periodFr: "Mai – Sept. 2013",
    periodEn: "May – Sept 2013",
    featured: false,
    tags: [],
    contextFr: "Déclinaison numérique d'un magazine papier avec liseuse, espace communautaire et boutique d'abonnements.",
    contextEn: "Digital edition of a print magazine featuring an online reader, community features, and subscription store.",
    bulletsFr: ["Développement des fonctionnalités éditoriales, gestion des abonnements et outils d'administration."],
    bulletsEn: ["Developed editorial publishing workflows, subscription management, and back-office administration tools."],
    stack: ["PHP 5", "Zend Framework 2", "MongoDB", "MySQL", "JavaScript"]
  },
  {
    client: "SNCF",
    sectorFr: "Données de maintenance / GMAO",
    sectorEn: "Railway Maintenance Data / CMMS",
    roleFr: "Développeur Python",
    roleEn: "Python Developer",
    periodFr: "Janv. – Mai 2013",
    periodEn: "Jan – May 2013",
    featured: false,
    tags: [],
    contextFr: "Reprise et migration de données historiques de maintenance vers une solution GMAO.",
    contextEn: "Legacy railway maintenance data cleansing and migration into a Computerized Maintenance Management System.",
    bulletsFr: ["Recueil des besoins, spécifications, scripts Python de transformation CSV/Excel et tests unitaires."],
    bulletsEn: ["Gathered requirements, authored technical specs, and built CSV/Excel transformation scripts in Python."],
    stack: ["Python", "PySide", "PyQt4", "XSLT", "CSV", "Git"]
  },
  {
    client: "PSA",
    sectorFr: "Applications intranet / Conformité CCC",
    sectorEn: "Intranet Applications / CCC Compliance",
    roleFr: "Développeur PHP",
    roleEn: "PHP Developer",
    periodFr: "Août – Déc. 2012",
    periodEn: "Aug – Dec 2012",
    featured: false,
    tags: ["devsecops"],
    contextFr: "Développement de composants intranet de filtrage d'articles PSA Chine en lien avec la conformité CCC.",
    contextEn: "Developed intranet filtering components for PSA China parts in compliance with CCC regulatory standards.",
    bulletsFr: ["Intégration de fichiers Excel en base et contrôles de cohérence applicatifs."],
    bulletsEn: ["Automated Excel-to-database ingestion and implemented cross-system data consistency checks."],
    stack: ["PHP", "MySQL", "JavaScript", "Ajax", "Git"]
  },
  {
    client: "CRNL — Lyon",
    sectorFr: "Recherche / Logiciel de tests auditifs",
    sectorEn: "Neuroscience Research / Auditory Testing Software",
    roleFr: "Développeur Python / PHP",
    roleEn: "Python / PHP Developer",
    periodFr: "Janv. – Juil. 2012",
    periodEn: "Jan – July 2012",
    featured: false,
    tags: [],
    contextFr: "Logiciel de tests auditifs destiné aux professionnels de santé avec restitution web des résultats.",
    contextEn: "Clinical auditory testing desktop suite for healthcare professionals with web-based result reporting.",
    bulletsFr: ["Études de faisabilité, moteurs audio Python, interfaces PyQt/PHP et packaging exécutable."],
    bulletsEn: ["Conducted feasibility studies, built Python audio engines, PyQt/PHP interfaces, and standalone executables."],
    stack: ["Python", "PHP", "PyQt4", "SQLAlchemy", "SQLite", "MySQL"]
  },
  {
    client: "LIRIS — Lyon",
    sectorFr: "E-learning / Serious games",
    sectorEn: "E-learning / Serious Games",
    roleFr: "Développeur PHP",
    roleEn: "PHP Developer",
    periodFr: "Juin – Déc. 2011",
    periodEn: "June – Dec 2011",
    featured: false,
    tags: [],
    contextFr: "Plateforme Learning Games Factory de conception et diffusion de jeux pédagogiques.",
    contextEn: "Learning Games Factory platform for authoring, distributing, and reusing educational serious games.",
    bulletsFr: ["Développement de modules réutilisables, administration web et tests fonctionnels."],
    bulletsEn: ["Built reusable platform modules, web administration interfaces, and functional test suites."],
    stack: ["PHP", "MySQL", "JavaScript", "XML", "OAI-PMH"]
  },
  {
    client: "LIESP — INSA Lyon",
    sectorFr: "Interopérabilité e-learning",
    sectorEn: "E-learning Interoperability",
    roleFr: "Développeur PHP / ActionScript",
    roleEn: "PHP / ActionScript Developer",
    periodFr: "Mars 2010 – Mai 2011",
    periodEn: "Mar 2010 – May 2011",
    featured: false,
    tags: [],
    contextFr: "Projet de fin d'études INSA Lyon suivi du démarrage de carrière professionnelle en juillet 2010.",
    contextEn: "INSA Lyon Master's graduation project transitioning into full-time professional engineering in July 2010.",
    bulletsFr: ["Interopérabilité de contenus pédagogiques entre fournisseurs via le protocole OAI-PMH."],
    bulletsEn: ["Implemented cross-provider serious game metadata harvesting and interoperability using OAI-PMH."],
    stack: ["PHP 5", "MySQL", "ActionScript", "XML", "OAI-PMH"]
  },
  {
    client: "FARABI — Tunis",
    sectorFr: "Agence web & communication",
    sectorEn: "Web & Digital Agency",
    roleFr: "Web Designer / Développeur PHP",
    roleEn: "Web Designer / PHP Developer",
    periodFr: "Juin – Déc. 2007",
    periodEn: "June – Dec 2007",
    featured: false,
    tags: [],
    contextFr: "Création de sites web vitrines et supports graphiques.",
    contextEn: "Design and development of corporate websites and promotional visual assets.",
    bulletsFr: ["Conception de maquettes, développement HTML/PHP/MySQL et maintenance."],
    bulletsEn: ["Designed mockups and developed dynamic HTML/PHP/MySQL websites."],
    stack: ["HTML", "PHP", "JavaScript", "MySQL"]
  },
  {
    client: "PLINETEL — Tunis",
    sectorFr: "Systèmes d'Information Géographique (SIG)",
    sectorEn: "Geographic Information Systems (GIS)",
    roleFr: "Développeur C# — Projet de fin d'études DUT",
    roleEn: "C# Developer — Graduation Project",
    periodFr: "Fév. – Juil. 2006",
    periodEn: "Feb – July 2006",
    featured: false,
    tags: [],
    contextFr: "Logiciel de visualisation et d'interprétation de données géographiques.",
    contextEn: "Desktop application for geographic data visualization and spatial attribute inspection.",
    bulletsFr: ["Gestion des couches cartographiques, attributs et export SQL/XML."],
    bulletsEn: ["Implemented map layer management, zoom controls, and SQL/XML data export."],
    stack: ["C#", "SQL Server", "MySQL", "OpenGIS", "XML"]
  }
];

/* ==========================================================================
   État de l'application & Logique de rendu
   ========================================================================== */
const state = {
  lang: "fr",
  persona: "all",
  arch: "devsecops",
  search: "",
  showAllExp: false
};

const ROUTE_TO_PERSONA = {
  "/": "all",
  "/devops": "devops",
  "/devsecops": "devsecops",
  "/scrum-master": "scrum"
};

function resolveInitialPersona() {
  const params = new URLSearchParams(window.location.search);
  const queryProfil = params.get("profil");
  if (queryProfil && PERSONAS[queryProfil]) return queryProfil;

  const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
  return ROUTE_TO_PERSONA[cleanPath] || "all";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("show"), 3500);
}

function applyStaticLabels() {
  const t = I18N[state.lang];
  document.documentElement.lang = state.lang;

  document.getElementById("skipLink").textContent = t.skipLink;
  document.getElementById("tabAll").textContent = t.tabs.all;
  document.getElementById("tabDevops").textContent = t.tabs.devops;
  document.getElementById("tabDevsecops").textContent = t.tabs.devsecops;
  document.getElementById("tabScrum").textContent = t.tabs.scrum;
  document.getElementById("printBtnLabel").textContent = t.printBtn;
  document.getElementById("availabilityText").textContent = PROFILE_CONFIG.availability[state.lang];
  document.getElementById("clientsLabel").textContent = t.clientsLabel;
  document.getElementById("contactCtaLabel").textContent = t.contactCta;
  document.getElementById("staticPdfLabel").textContent = t.staticPdfBtn;
  document.getElementById("vcardLabel").textContent = t.vcardBtn;
  document.getElementById("archEyebrow").textContent = t.archEyebrow;
  document.getElementById("archSectionTitle").textContent = t.archSectionTitle;
  document.getElementById("archTab1").textContent = t.archTabs[0];
  document.getElementById("archTab2").textContent = t.archTabs[1];
  document.getElementById("archTab3").textContent = t.archTabs[2];
  document.getElementById("certEyebrow").textContent = t.certEyebrow;
  document.getElementById("certSectionTitle").textContent = t.certSectionTitle;
  document.getElementById("eduTitle").textContent = t.eduTitle;
  document.getElementById("eduSub").textContent = t.eduSub;
  document.getElementById("skillsEyebrow").textContent = t.skillsEyebrow;
  document.getElementById("skillsSectionTitle").textContent = t.skillsSectionTitle;
  document.getElementById("skillSearch").placeholder = t.searchPlaceholder;
  document.getElementById("expEyebrow").textContent = t.expEyebrow;
  document.getElementById("expSectionTitle").textContent = t.expSectionTitle;
  document.getElementById("footAll").textContent = t.footAll;

  // Modale
  document.getElementById("modalEyebrow").textContent = t.modalEyebrow;
  document.getElementById("modalTitle").textContent = t.modalTitle;
  document.getElementById("lblName").textContent = t.lblName;
  document.getElementById("lblEmail").textContent = t.lblEmail;
  document.getElementById("lblSubject").textContent = t.lblSubject;
  document.getElementById("lblMessage").textContent = t.lblMessage;
  document.getElementById("submitContactBtn").textContent = t.submitBtn;
  document.getElementById("copyEmailFallbackBtn").textContent = t.copyEmailBtn;

  const toggleExpBtn = document.getElementById("toggleAllExpBtn");
  toggleExpBtn.textContent = state.showAllExp ? t.collapseExp : t.showAllExp;

  document.querySelectorAll("[data-lang-opt]").forEach((el) => {
    el.classList.toggle("active", el.dataset.langOpt === state.lang);
  });
}

function renderPersona(personaKey, updateHistory = true) {
  const personaObj = PERSONAS[personaKey] || PERSONAS.all;
  const content = personaObj[state.lang];
  state.persona = personaKey;
  document.documentElement.setAttribute("data-persona", personaKey);

  document.querySelectorAll(".persona-btn").forEach((btn) => {
    const isActive = btn.dataset.persona === personaKey;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    if (isActive && updateHistory) {
      const targetPath = btn.dataset.path;
      if (window.location.protocol !== "file:" && window.location.pathname !== targetPath) {
        window.history.pushState({ persona: personaKey }, "", targetPath);
      }
    }
  });

  document.getElementById("personaBadge").textContent = content.badge;
  document.getElementById("heroRole").textContent = content.role;
  document.getElementById("heroSummary").textContent = content.summary;

  document.getElementById("kpiGrid").innerHTML = content.kpis
    .map(
      (kpi) => `
      <div class="kpi-card">
        <div class="kpi-value">${kpi.value}</div>
        <div>
          <div class="kpi-label">${kpi.label}</div>
          <div class="kpi-sub">${kpi.sub}</div>
        </div>
      </div>`
    )
    .join("");

  if (personaKey === "devops") renderArch("landing");
  else if (personaKey === "devsecops") renderArch("devsecops");

  renderSkills();
  renderExperiences();
}

function renderArch(archKey) {
  const arch = ARCHITECTURES[archKey] || ARCHITECTURES.devsecops;
  state.arch = archKey;

  document.querySelectorAll(".arch-tab").forEach((tab) => {
    const active = tab.dataset.arch === archKey;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  document.getElementById("archViewer").innerHTML = `${arch.svg}<p class="arch-caption">${arch.caption[state.lang]}</p>`;
}

function renderCertifications() {
  const t = I18N[state.lang];
  document.getElementById("certList").innerHTML = CERTIFICATIONS.map((c) => {
    const dateStr = state.lang === "fr" ? c.dateFr : c.dateEn;
    return `
      <li class="cert-item">
        <div class="cert-info">
          <span class="cert-name">${c.name}</span>
          <span class="cert-date">${dateStr}</span>
        </div>
        <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="cert-verify-link" aria-label="${t.verifyLabel} ${c.name}">
          <span>${t.verifyLabel}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </li>`;
  }).join("");
}

function renderSkills() {
  const t = I18N[state.lang];
  const grid = document.getElementById("skillsGrid");
  const priorities = PERSONAS[state.persona].priorityDomains;
  const term = state.search.trim().toLowerCase();

  const sorted = [...SKILL_DOMAINS]
    .filter((s) => {
      if (!term) return true;
      const title = state.lang === "fr" ? s.titleFr : s.titleEn;
      const desc = state.lang === "fr" ? s.descFr : s.descEn;
      return (
        title.toLowerCase().includes(term) ||
        desc.toLowerCase().includes(term) ||
        s.refs.some((r) => r.toLowerCase().includes(term))
      );
    })
    .sort((a, b) => {
      const idxA = priorities.indexOf(a.id);
      const idxB = priorities.indexOf(b.id);
      if (idxA === -1 && idxB === -1) return 0;
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });

  if (sorted.length === 0) {
    grid.innerHTML = `<p class="hero-summary">${t.noSkillMatch} « ${state.search} ».</p>`;
    return;
  }

  grid.innerHTML = sorted
    .map((s) => {
      const isPriority = priorities.includes(s.id);
      const title = state.lang === "fr" ? s.titleFr : s.titleEn;
      const desc = state.lang === "fr" ? s.descFr : s.descEn;
      return `
      <article class="skill-card ${isPriority ? "is-priority" : ""}">
        <div>
          <div class="skill-card-head">
            <h3>${title}</h3>
            ${isPriority ? `<span class="priority-tag">${t.priorityTag}</span>` : ""}
          </div>
          <p class="skill-desc">${desc}</p>
        </div>
        <div class="skill-refs">
          ${s.refs.map((ref) => `<span>${ref}</span>`).join("")}
        </div>
      </article>`;
    })
    .join("");
}

function renderExperiences() {
  const container = document.getElementById("expTimeline");
  const term = state.search.trim().toLowerCase();

  const filtered = EXPERIENCES.filter((exp) => {
    if (!state.showAllExp && !term && !exp.featured) return false;
    if (!term) return true;
    const role = state.lang === "fr" ? exp.roleFr : exp.roleEn;
    const context = state.lang === "fr" ? exp.contextFr : exp.contextEn;
    const bullets = state.lang === "fr" ? exp.bulletsFr : exp.bulletsEn;
    return (
      exp.client.toLowerCase().includes(term) ||
      role.toLowerCase().includes(term) ||
      context.toLowerCase().includes(term) ||
      exp.stack.some((st) => st.toLowerCase().includes(term)) ||
      bullets.some((b) => b.toLowerCase().includes(term))
    );
  });

  container.innerHTML = filtered
    .map((exp) => {
      const isMatchPersona = state.persona !== "all" && exp.tags.includes(state.persona);
      const sector = state.lang === "fr" ? exp.sectorFr : exp.sectorEn;
      const role = state.lang === "fr" ? exp.roleFr : exp.roleEn;
      const period = state.lang === "fr" ? exp.periodFr : exp.periodEn;
      const context = state.lang === "fr" ? exp.contextFr : exp.contextEn;
      const bullets = state.lang === "fr" ? exp.bulletsFr : exp.bulletsEn;

      return `
      <article class="exp-card ${isMatchPersona ? "is-featured" : ""}">
        <div class="exp-top">
          <div>
            <div class="exp-client">${exp.client} · ${sector}</div>
            <h3 class="exp-role">${role}</h3>
          </div>
          <span class="exp-period">${period}</span>
        </div>
        <p class="exp-context">${context}</p>
        <ul class="exp-bullets">
          ${bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <div class="exp-stack">
          ${exp.stack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </article>`;
    })
    .join("");
}

/* ==========================================================================
   Génération dynamique de la fiche contact vCard (.vcf)
   ========================================================================== */
function downloadVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${PROFILE_CONFIG.lastName};${PROFILE_CONFIG.firstName};;;`,
    `FN:${PROFILE_CONFIG.fullName}`,
    "TITLE:Ingénieur DevSecOps, Cloud AWS/Azure & Scrum Master SAFe",
    `EMAIL;TYPE=INTERNET,PREF:${PROFILE_CONFIG.email}`,
    PROFILE_CONFIG.phone ? `TEL;TYPE=CELL:${PROFILE_CONFIG.phone}` : "",
    `URL:${PROFILE_CONFIG.websiteUrl}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${PROFILE_CONFIG.linkedinUrl}`,
    "END:VCARD"
  ].filter(Boolean);

  const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Mohamed_Ali_NEFISSI.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast(I18N[state.lang].toastVcard);
}

/* ==========================================================================
   Initialisation
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Synchroniser le lien LinkedIn depuis la configuration
  document.getElementById("linkedinBtn").href = PROFILE_CONFIG.linkedinUrl;

  // Thème & langue persistants
  const savedTheme = localStorage.getItem("nefissi-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  const savedLang = localStorage.getItem("nefissi-lang");
  if (savedLang === "en" || savedLang === "fr") {
    state.lang = savedLang;
  }

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("nefissi-theme", next);
  });

  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "fr" ? "en" : "fr";
    localStorage.setItem("nefissi-lang", state.lang);
    applyStaticLabels();
    renderCertifications();
    renderArch(state.arch);
    renderPersona(state.persona, false);
  });

  document.getElementById("personaTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".persona-btn");
    if (!btn) return;
    renderPersona(btn.dataset.persona, true);
  });

  document.querySelectorAll("[data-route]").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.location.protocol === "file:") return;
      e.preventDefault();
      const persona = ROUTE_TO_PERSONA[link.getAttribute("data-route")] || "all";
      renderPersona(persona, true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  window.addEventListener("popstate", () => {
    renderPersona(resolveInitialPersona(), false);
  });

  document.querySelector(".arch-tabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".arch-tab");
    if (!tab) return;
    renderArch(tab.dataset.arch);
  });

  document.getElementById("skillSearch").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderSkills();
    renderExperiences();
  });

  document.getElementById("toggleAllExpBtn").addEventListener("click", () => {
    state.showAllExp = !state.showAllExp;
    const btn = document.getElementById("toggleAllExpBtn");
    btn.setAttribute("aria-expanded", String(state.showAllExp));
    btn.textContent = state.showAllExp ? I18N[state.lang].collapseExp : I18N[state.lang].showAllExp;
    renderExperiences();
  });

  document.getElementById("printPdfBtn").addEventListener("click", () => window.print());
  document.getElementById("downloadVcardBtn").addEventListener("click", downloadVCard);

  // Modale de contact serverless
  const modal = document.getElementById("contactModal");
  const openModal = () => {
    modal.hidden = false;
    document.getElementById("senderName").focus();
  };
  const closeModal = () => {
    modal.hidden = true;
  };

  document.getElementById("openContactModalBtn").addEventListener("click", openModal);
  document.getElementById("closeContactModalBtn").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  document.getElementById("copyEmailFallbackBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_CONFIG.email);
      showToast(I18N[state.lang].toastCopied);
    } catch {
      showToast(PROFILE_CONFIG.email);
    }
  });

  document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const t = I18N[state.lang];
    const form = e.currentTarget;
    const submitBtn = document.getElementById("submitContactBtn");

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value,
      message: form.message.value.trim(),
      website: form.website.value // honeypot
    };

    if (!payload.name || !payload.email.includes("@") || !payload.message) {
      showToast(t.toastValidation);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t.sendingBtn;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Serverless endpoint non configuré");

      form.reset();
      closeModal();
      showToast(t.toastSent);
    } catch {
      // Repli automatique propre vers mailto si la variable API n'est pas encore configurée
      closeModal();
      showToast(t.toastFallback);
      window.location.href = `mailto:${PROFILE_CONFIG.email}?subject=${encodeURIComponent(`[nefissi.com] ${payload.subject} — ${payload.name}`)}&body=${encodeURIComponent(payload.message)}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t.submitBtn;
    }
  });

  // Premier rendu
  applyStaticLabels();
  renderCertifications();
  renderArch("devsecops");
  renderPersona(resolveInitialPersona(), false);
});