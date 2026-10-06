export const projectsData = [
  {
    id: 'pharmaconnect',
    title: 'PharmaConnect',
    subtitle: 'B2B Institutional Pharmaceutical Marketplace',
    tagline: 'Compliant Procurement Platform Connecting Certified Pharma Manufacturers Directly with Hospitals',
    category: 'Full-Stack / B2B HealthTech & Supply Chain',
    badge: 'Flagship B2B Platform',
    accentColor: '#0284c7',
    year: '2025',
    summary:
      'A mission-critical B2B institutional pharmaceutical marketplace designed to eradicate opaque, multi-tier middleman networks in medicine procurement across India through direct digital procurement, statutory compliance (CDSCO, WHO-GMP, 21 CFR Part 11), cold-chain IoT telemetry, and automated escrow clearance.',
    problem:
      'Opaque multi-tier middleman networks in medicine procurement create high counterfeit risks, transit cold chain thermal excursions, lack of statutory drug licensing validation, non-compliant tax invoicing, and severe working capital bottlenecks between hospitals and pharmaceutical manufacturers.',
    intendedUsers:
      'NABH-accredited hospital networks, institutional healthcare buying groups, wholesale pharmacies, CDSCO-certified pharmaceutical manufacturers, and C&F logistics agents.',
    role: 'Full-Stack Architecture & Engineering (designed 16-table PostgreSQL schema, multi-role RBAC, statutory compliance engines, IoT cold chain telemetry monitoring, Razorpay escrow integration, and real-time Socket.IO communication).',
    solution:
      'Engineered an end-to-end B2B procurement exchange featuring CDSCO license validation, GS1-128 barcode lookup, automated Form INV-01 tax invoicing, IoT thermal excursion quarantine (2°C–8°C), an 8-stage order lifecycle pipeline, and milestone-based escrow release upon Certificate of Analysis (CoA) verification.',
    features: [
      'Institutional Exchange & Verification: Real-time CDSCO clearing status, daily trade turnover metrics, and active thermal fleet tracking',
      'Buyer Procurement Desk: Tiered volume wholesale pricing, instant Certificate of Analysis (CoA) inspection, and bedside patient dispense slips',
      'Supplier Enterprise Command Center: Cleanroom HVAC & particle monitoring, rapid SKU regulatory classification (Schedule H/H1/X), and order fulfillment pipeline',
      'Cold Chain IoT Telemetry & Quarantine: Continuous thermal logging (2°C–8°C) with automated Form 483 quarantine protocols for excursion-damaged stock',
      'Statutory Tax Invoicing & E-Way Bills: Section 31 CGST Act compliant Form INV-01 tax invoices with dynamic QR codes and NIC E-Way bill generation',
      'Razorpay Escrow Integration: Milestone-based escrow payments with HMAC SHA-256 webhook verification and fund release upon digital CoA sign-off',
      'Real-Time WebSocket Communication: PO-bound buyer-supplier secure chat with compliance document attachments and 21 CFR Part 11 immutable audit trail'
    ],
    techStack: [
      'React 19',
      'Vite 8',
      'Tailwind CSS v4',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Supabase',
      'Socket.io',
      'Razorpay Escrow',
      'Recharts',
      'Zod'
    ],
    challenges: [
      {
        challenge: 'Automating statutory regulatory compliance and cold-chain integrity',
        solution:
          'Engineered automated CDSCO/FDA license validation, GS1-128 barcode scanning, and continuous IoT thermal tracking (2°C–8°C) with automated Form 483 excursion quarantine to prevent damaged medicine batches from reaching hospital wards.'
      },
      {
        challenge: 'Secure milestone escrow and multi-entity B2B invoicing',
        solution:
          'Implemented Razorpay escrow contracts with HMAC SHA-256 webhook verification releasing funds only upon digital Certificate of Analysis (CoA) sign-off, coupled with Section 31 CGST Act Form INV-01 split CGST/SGST/IGST tax invoice generation.'
      }
    ],
    github: 'https://github.com/Parthcoder22/pharmaconnect',
    demo: 'https://pharmaconneect.netlify.app/',
    previewType: 'pharma'
  },
  {
    id: 'antigravity-web3',
    title: 'AntiGravity Web3',
    subtitle: 'Interactive Web3 & Blockchain Simulation Platform',
    tagline: 'Escape the Gravity of Web2 — Interactive Blockchain Education & SHA-256 Mining Simulation',
    category: 'Web3 / Cryptography & Blockchain EdTech',
    badge: 'Interactive Web3 Engine',
    accentColor: '#7c3aed',
    year: '2025',
    summary:
      'A futuristic, interactive educational Web3 platform built to demystify core blockchain architectures, cryptographic hashing, and decentralized networks through real-time simulations, live market telemetry, and hands-on SHA-256 Proof-of-Work mining without heavy external libraries.',
    problem:
      'Traditional Web3 educational materials are abstract, dense, or locked behind complex wallet configurations and gas fees, making foundational concepts like Proof-of-Work mining, cryptographic immutability, and Layer-2 scaling difficult for newcomers to intuitively experience.',
    intendedUsers:
      'Web3 developers, blockchain learners, computer science students, and enthusiasts looking for hands-on, visual intuition for cryptographic hashing and decentralized protocols.',
    role: 'Frontend Architecture & Cryptographic Engineering (developed reactive UI with Tailwind CSS v4 and Framer Motion, implemented client-side SHA-256 Proof of Work using the native Web Crypto API, and integrated real-time CoinGecko market telemetry).',
    solution:
      'Engineered a lightweight, browser-native 4-page educational web platform featuring an interactive SHA-256 block mining simulator demonstrating Proof of Work and chain invalidation cascades, side-by-side architectural comparison decks (Web2 vs Web3, BTC vs ETH, DB vs Blockchain), real-time CoinGecko price tickers, and an Arbitrum Layer-2 scaling explainer.',
    features: [
      'Interactive SHA-256 Block Simulator: Nonce iteration mining with target difficulty ("00"), automatic hash pointer chaining, and real-time visual tamper invalidation',
      'Native Web Crypto API Engine: Zero external blockchain dependencies — lightning-fast client-side cryptographic hashing via browser SubtleCrypto',
      'Real-Time Crypto Telemetry: Live market prices and 24h change indicators for BTC, ETH, SOL, and ARB powered by CoinGecko API',
      'Architectural Comparison Decks: 4 interactive glassmorphism comparison modules covering Web2 vs Web3, Bitcoin vs Ethereum, Public vs Private Keys, and Centralized DB vs Blockchain',
      'Arbitrum L2 Scaling Explainer: 3-step interactive breakdown of Layer-2 rollup mechanisms, gas compression, and settlement',
      'Futuristic Glassmorphic Theme: Deep space backdrop (#020817), neon cyan/purple accents, floating ambient orbs, and smooth Framer Motion transitions'
    ],
    techStack: [
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'Web Crypto API',
      'Framer Motion',
      'React Router v6',
      'CoinGecko API',
      'Lucide React'
    ],
    challenges: [
      {
        challenge: 'Implementing high-performance client-side block mining without heavy Web3 dependencies',
        solution:
          'Leveraged the browser native Web Crypto API (SubtleCrypto.digest) with asynchronous batch nonce increments to mine SHA-256 blocks with difficulty targets without locking the main UI thread.'
      },
      {
        challenge: 'Visualizing cryptographic immutability and cascading invalidation across chained blocks',
        solution:
          'Engineered a reactive dependency tree where modifying any transaction data in an earlier block instantaneously recalculates hash discrepancies, marks the tampered block as invalid, and visually fractures downstream hash links.'
      }
    ],
    github: 'https://github.com/Parthcoder22/AntiGravity_Web3_platform',
    demo: 'https://antigravityweb3platform.netlify.app/',
    previewType: 'web3'
  },
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
    demo: 'https://career-flow-teal.vercel.app/',
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
