export const projectsData = [
  {
    id: 'nyayasahayak',
    title: 'NyayaSahayak',
    subtitle: 'Legal AI Assistant & Citizen Empowerment Platform',
    tagline: 'Empowering Citizens with Accessible Legal Intelligence & Procedural Automation',
    category: 'AI / LegalTech & Citizen Empowerment',
    badge: 'Featured AI Platform',
    accentColor: '#3458D4',
    year: '2024',
    summary:
      'An AI-powered legal information and procedural assistance platform designed to democratize access to the Indian legal system through Conversational RAG, FAISS semantic search, RTI drafting workflows, and bilingual scheme navigation.',
    problem:
      'The Indian legal system presents severe barriers for citizens: archaic legal jargon, prohibitive consultation fees, lack of clarity around statutory rights (RTI), and fragmented directories for legal aid and social welfare schemes.',
    intendedUsers:
      'Everyday Indian citizens, legal aid volunteers, marginalized communities navigating civic welfare, and applicants drafting formal Right to Information (RTI) petitions.',
    role: 'Full-Stack & AI Contributor (developed conversational RAG interfaces, semantic document retrieval workflows with FAISS, bilingual prompt pipelines, and responsive frontend views).',
    solution:
      'Engineered an accessible legal assistant featuring conversational retrieval-augmented generation over constitutional acts and IPC/BNS provisions, an automated RTI drafting wizard, a secure Case Vault, welfare scheme discovery, and a verified legal help directory.',
    features: [
      'Conversational RAG: Natural-language legal consultation grounded strictly in Indian statutory frameworks',
      'Semantic Document Retrieval: High-speed vector search over legal statutes and precedents using FAISS',
      'Automated RTI Drafting: Guided step-by-step petition generator producing compliant Right to Information forms',
      'Secure Case Vault: Confidential user document storage with encryption and structured metadata tagging',
      'Welfare Scheme Discovery: Automated matching of user eligibility to state and central government assistance programs',
      'Verified Legal Help Directory: Geographically filtered directory of legal aid cells and public advocates'
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'FAISS',
      'Supabase',
      'LangChain'
    ],
    challenges: [
      {
        challenge: 'Eliminating legal hallucinations in natural language responses',
        solution:
          'Enforced strict prompt boundaries and context-grounded retrieval using FAISS vector search, requiring the model to cite exact sections of statutes (e.g., IPC/CrPC/BNS) and attach verified source citations.'
      },
      {
        challenge: 'Automating multi-jurisdictional RTI drafting workflows',
        solution:
          'Designed modular questionnaire flows that normalize user inputs into formally formatted, authority-addressed RTI applications ready for print or digital submission.'
      }
    ],
    github: 'https://github.com/Piyush6100/nyayasahayak',
    demo: 'https://github.com/Piyush6100/nyayasahayak',
    previewType: 'legal'
  },
  {
    id: 'gramin-udyam-sahayak',
    title: 'Gramin Udyam Sahayak',
    subtitle: 'ग्रामीण उद्यम सहायक • AI Credit & Advisory Portal',
    tagline: 'AI-Powered Government Concessional Credit & Advisory Portal for Rural Micro-Enterprises',
    category: 'AI / AgriFinTech & Civic Tech',
    badge: 'Flagship AI Project',
    accentColor: '#10b981',
    year: '2025',
    summary:
      'An end-to-end digital assistance portal designed to empower rural Indian micro-entrepreneurs by demystifying government-backed concessional credit (PMEGP, PMFME, NBCFDC), computing deterministic amortizing EMI math, and generating hyper-local feasibility reports using RAG over official DPRs.',
    problem:
      'Rural Indian micro-entrepreneurs face severe hurdles accessing government concessional credit due to bureaucratic complexity, language barriers, complex eligibility guidelines, lack of financial literacy regarding CapEx/OpEx allocation, and absence of hyper-local feasibility benchmarks.',
    intendedUsers:
      'Rural micro-entrepreneurs (Dairy, Textiles, Agro-processing, Retail, Handicrafts), Common Service Center (CSC) village operators, and rural microfinance officers.',
    role: 'Full-Stack & AI Architecture (designed the dynamic financial engine, pgvector semantic search pipeline with Supabase HNSW indexing, Gemini RAG advisory generation, and vernacular voice auto-fill).',
    solution:
      'Engineered a full-stack platform featuring deterministic scheme routing (Micro Finance vs Term Loans with CapEx/OpEx splits), Supabase pgvector HNSW semantic search over 45+ official government DPR profiles, Gemini AI advisory synthesis, and vernacular voice auto-fill via Whisper & Gemini.',
    features: [
      'Dynamic Financial Engine: Computes 10% borrower equity, 90% loan eligibility, and reducing-balance amortizing EMI schedules',
      'Deterministic Scheme Routing: Micro Finance (≤₹1.4L at 6.5%, 36-mo) vs Term Loans (>₹1.4L at 8.0%, 84-mo) with 70/30 CapEx/OpEx split',
      'Hyper-Local RAG Feasibility Engine: Supabase pgvector HNSW index semantic-searching 45+ official government DPR profiles with Gemini AI',
      'Vernacular Voice Auto-Fill: Converts spoken Hindi/English/Hinglish intent directly into structured loan application fields',
      'Resilient Loan Flow: Supabase PostgreSQL storage with Row Level Security (RLS) and offline session fallback',
      'Multilingual UI & Export: Instant English/हिंदी language toggle and browser-native PDF DPR report export'
    ],
    techStack: [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Supabase',
      'PostgreSQL',
      'pgvector',
      'Google Gemini API',
      'OpenAI Whisper'
    ],
    challenges: [
      {
        challenge: 'Semantic search over dense, bureaucratic government DPR documents',
        solution:
          'Built an automated ingestion pipeline that parsed 45+ official PDFs, recursively chunked text to ~800 chars with 150-char overlaps, generated 768-dimensional embeddings via Gemini, and indexed them into Supabase pgvector using an HNSW cosine index for sub-second retrieval.'
      },
      {
        challenge: 'Parsing vernacular spoken intent into structured financial forms',
        solution:
          'Engineered an audio processing pipeline with Whisper & Gemini that normalizes conversational Hindi/Hinglish speech and reliably extracts structured parameters (location, margin money, business category) with zero manual typing.'
      }
    ],
    github: 'https://github.com/Parthcoder22/Gramin_Udyam_Sahayak',
    demo: 'https://github.com/Parthcoder22/Gramin_Udyam_Sahayak',
    previewType: 'gramin'
  },
  {
    id: 'careerflow',
    title: 'CareerFlow',
    subtitle: 'AI-Powered Placement Management System',
    tagline: 'Streamlining Campus Placement Lifecycles with AI Automation',
    category: 'Full-Stack / EdTech SaaS',
    accentColor: '#8b5cf6',
    year: '2025',
    summary:
      'A comprehensive campus placement management platform uniting students, training & placement officers (TPOs), and corporate recruiters into a structured operational portal.',
    problem:
      'University placement cells manage thousands of candidate applications across multiple recruitment drives manually. This leads to coordination bottlenecks, missed deadlines, disorganized resume vetting, and lack of visibility into student interview progress.',
    intendedUsers:
      'University Training & Placement Officers (TPOs), graduating students applying for campus drives, and visiting corporate recruiters.',
    role: 'Full-Stack Engineering (PostgreSQL schema architecture, multi-role auth, Gemini API resume parsing, and coordinator dashboards).',
    solution:
      'Engineered an end-to-end recruitment platform with multi-tier role-based access control (Students, Coordinators, Admins). Integrated Google Gemini API for automated student skill extraction and ATS feedback, alongside dynamic recruitment round progression tracking.',
    features: [
      'Multi-tier role-based access control (RBAC) with secure JWT authentication',
      'Placement drive orchestration across multi-stage interview rounds',
      'AI-assisted resume qualification and ATS feedback powered by Gemini API',
      'Automated student profile and portfolio rendering',
      'Document and application workflows with verified transcript management'
    ],
    techStack: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
      'Cloudinary',
      'Gemini API'
    ],
    challenges: [
      {
        challenge: 'Modeling complex multi-stage recruitment rounds',
        solution:
          'Designed a normalized PostgreSQL schema with indexed foreign keys and status flags, ensuring clean transactional updates as candidates advance through technical and HR rounds.'
      },
      {
        challenge: 'Automated skill extraction from unstructured PDF resumes',
        solution:
          'Engineered structured prompt templates with the Gemini API to extract key competencies and generate targeted ATS improvement recommendations.'
      }
    ],
    github: 'https://github.com/Parthcoder22/CareerFlow',
    demo: 'https://careerflow-portal.vercel.app',
    previewType: 'placement'
  },
  {
    id: 'cabgo',
    title: 'CABGO',
    subtitle: 'Urban Mobility Platform',
    tagline: 'Real-Time Dispatch & Intelligent Transit Ecosystem',
    category: 'Full-Stack / Geospatial Mobility',
    accentColor: '#38bdf8',
    year: '2024',
    summary:
      'A scalable ride-hailing and fleet management platform concept engineered for synchronized passenger, driver, and administrative workflows with geospatial routing.',
    problem:
      'Ride-dispatch platforms require reliable geospatial proximity calculations and robust state management to synchronize ride lifecycles without race conditions or communication desynchronization.',
    intendedUsers:
      'Urban commuters booking rides, drivers receiving dispatched pickups, and administrative operators overseeing fleet logistics.',
    role: 'Systems Architecture & Geospatial Implementation (MongoDB geospatial indexing, dual-mode interfaces, route polyline visualization).',
    solution:
      'Developed a full-stack mobility concept featuring MongoDB 2dsphere indexing for high-speed spatial proximity queries, dual responsive interfaces for passengers and drivers, simulated route polyline tracking, and an administrative telemetry dashboard.',
    features: [
      'Dual passenger and driver interfaces with instant mode switching',
      'Dynamic ride booking with surge estimation and route previews',
      'Interactive map engine with route polyline rendering and live pins',
      'End-to-end ride management: request, acceptance, OTP verification, completion',
      'Administrative dashboard with fleet distribution and activity metrics'
    ],
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB'
    ],
    challenges: [
      {
        challenge: 'Low-latency proximity querying for nearby available drivers',
        solution:
          'Implemented MongoDB 2dsphere geospatial indexing, enabling sub-millisecond point-to-point radius searches across coordinate pairs.'
      },
      {
        challenge: 'Preventing race conditions during driver allocation',
        solution:
          'Applied atomic state-transition guards to ensure a ride booking cannot be accepted simultaneously by multiple drivers.'
      }
    ],
    github: 'https://github.com/Parthcoder22/CABGO',
    demo: 'https://cabgo-mobility.vercel.app',
    previewType: 'mobility'
  }
]
