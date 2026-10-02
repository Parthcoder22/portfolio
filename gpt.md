# Swiss Editorial Developer Portfolio & System Architecture (Parth Gohel)

> **File:** `gpt.md`  
> **Status:** Production-ready Swiss Editorial portfolio for client conversion, startups, and executive recruitment.  
> **Design Theme:** Swiss Editorial Meets Premium Technology Studio (warm ivory `#F7F6F2`, near-black `#171717`, cobalt blue `#3458D4`, charcoal `#17191C`).  
> **Tech Stack:** React 19, Vite, Tailwind CSS v4, Three.js, Lucide React, Oxlint.

---

## 1. Design Theme: Swiss Editorial Meets Premium Technology Studio

Inspired by Swiss graphic design, high-end digital agencies, editorial publications, and sophisticated technology brands.

- **Background:** Warm ivory (`#F7F6F2`) uniformly throughout all sections, including Contact & Footer.
- **Card Surfaces:** Pure white (`#FFFFFF`) with `#E6E4DE` borders.
- **Primary Text:** Rich near-black (`#171717`)
- **Secondary Text:** Muted neutral gray (`#555555` to `#777777`)
- **Borders & Rules:** Soft neutral gray (`#E6E4DE`)
- **Accent:** Sophisticated cobalt blue (`#3458D4` / hover `#2648BD`)

### Typography & Grid:
- **Headlines:** `Inter` (Bold, clean neo-grotesque Swiss proportions, tight optical tracking)
- **Technical Annotations & Numbers:** `Space Grotesk` (Monospace / grotesque numerals, e.g., `01 / SELECTED WORK`)
- **Body:** `Plus Jakarta Sans` (Comfortable, legible, generous line height)
- **Grid:** Asymmetric Swiss editorial grid, precise hairline rules, numbered phases (`01`, `02`, `03`, `04`).

---

## 2. Information Architecture & Section Hierarchy

```text
[Header / Navbar]
  ├── Wordmark: "PARTH GOHEL" (PG monogram)
  ├── Navigation: About | Services | Selected Work | Process | Contact
  └── Primary Desktop CTA: "Start a Project" (Cobalt blue #3458D4)

[1. Hero: Bold, Minimal, and Memorable]
  ├── Category Label: FULL-STACK DEVELOPMENT / AI-POWERED SOLUTIONS / CREATIVE TECHNOLOGY
  ├── Headline: "Building Digital Products That Move Ideas Forward."
  ├── Narrative: "I'm Parth Gohel, a developer focused on full-stack applications, AI-powered solutions, and thoughtful digital experiences."
  ├── Primary CTA: "Start a Project" -> #contact
  ├── Secondary CTA: "Explore My Work" -> #projects
  ├── Studio Metrics: 200+ LeetCode Problems | B.Tech MSU Baroda CSE | Production AI & Web Systems
  └── Visual Composition: Restyled 3D chrome/metallic core with subtle studio lighting & interactive architectural spec callouts

[2. Selected Work: Premium Case Study Layout]
  ├── NyayaSahayak — Legal AI Assistant (Next.js, FastAPI, FAISS, Supabase RAG)
  ├── Gramin Udyam Sahayak — AI Credit & Advisory Portal (React 19, pgvector HNSW, Gemini API, Whisper)
  ├── CareerFlow — Placement Management Platform (React, Node.js, Express, PostgreSQL, Gemini ATS)
  └── CABGO — Urban Mobility Platform (React, Node.js, MongoDB 2dsphere Geospatial Index)
  └── Deep-Dive Case Study Modal with problem context, user personas, engineering contributions, and GitHub repos

[3. Services: Services I Offer]
  ├── 01. Web Application Development (Clean frontend, reliable backends, databases, APIs)
  ├── 02. AI Integration (RAG applications, vector search, conversational interfaces)
  ├── 03. Business Websites and Dashboards (Administrative interfaces, RBAC, analytics)
  └── 04. MVP Development (Turning early product ideas into working applications)

[4. Work Process: How I Work]
  ├── 01. Discover — Understand requirements and goals.
  ├── 02. Plan — Define features, architecture, and priorities.
  ├── 03. Develop — Build and refine the product.
  └── 04. Deliver — Test, polish, and prepare the application for deployment or handoff.

[5. Technical Stack: Skills & Architecture]
  ├── Categorized Pills: Frontend | Backend | AI & Machine Learning | Databases | Programming & Tools
  ├── Selected Skill Detail Banner with live dismissal
  └── Core Architectural Capabilities (Full-Stack, RAG, Database Modeling, DSA 200+)

[6. About: Curious by Nature. Driven by Building.]
  ├── Personal & Professional statement
  ├── Technical focus areas & MSU Baroda CSE B.Tech foundation
  └── Genuine achievements (200+ LeetCode problems solved, applied RAG deployments)

[7. Contact: Let's Build Something Meaningful (Warm Ivory Theme)]
  ├── Headline: "Let's Build Something Meaningful."
  ├── Direct Email: officialparth135@gmail.com (with copy feedback)
  ├── Verified Social Links: LinkedIn (linkedin.com/in/gohel-parth22), GitHub (github.com/Parthcoder22)
  └── Structured Project Inquiry Form with Web3Forms API direct email delivery & mailto fallback

[Footer]
  └── Wordmark, Worldwide Availability indicator, Back-to-Top, and copyright.
```

---

## 3. Case Studies & Verified Links

1. **NyayaSahayak — Legal AI Assistant**
   - **Repository:** `https://github.com/Piyush6100/nyayasahayak`
   - **Stack:** Next.js, React, TypeScript, Tailwind CSS, FastAPI, FAISS, Supabase.
   - **Key Features:** Conversational RAG, FAISS semantic search, RTI drafting wizard, Case Vault, welfare scheme discovery.

2. **Gramin Udyam Sahayak**
   - **Repository:** `https://github.com/Parthcoder22/Gramin_Udyam_Sahayak`
   - **Stack:** React 19, Python, FastAPI, Supabase pgvector (HNSW), Gemini AI, Whisper.
   - **Key Features:** Concessional credit routing (PMEGP, PMFME, NBCFDC), deterministic amortizing EMI calculation, vernacular voice parsing, 45+ DPR RAG indexing.

3. **CareerFlow**
   - **Repository:** `https://github.com/Parthcoder22/CareerFlow`
   - **Stack:** React, Tailwind CSS, Node.js, Express.js, PostgreSQL, JWT, Cloudinary, Gemini API.
   - **Key Features:** Multi-role RBAC, placement drive pipelines, Gemini ATS resume qualification.

4. **CABGO**
   - **Repository:** `https://github.com/Parthcoder22/CABGO`
   - **Stack:** React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB 2dsphere.
   - **Key Features:** Geospatial proximity radius querying, dual passenger/driver interfaces, atomic ride booking states.

---

## 4. Code Quality & Standards

- **Oxlint:** 0 errors, 0 warnings across all 23 files.
- **Vite Build:** Compiles in <400ms with zero errors.
- **Accessibility:** High text contrast on `#F7F6F2` ivory canvas and `#17191C` charcoal contact section.
- **Interactions:** Subtle mix-blend-mode difference cursor, smooth mouse tracking on 3D centerpiece, restrained transitions.
