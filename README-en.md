# Erwin Wang Portfolio

Personal brand website for Wang Zihan (Erwin) — AI Product Manager & Full-Stack Developer.

Built entirely through human-AI conversation, zero hand-written code.

## Tech Stack

| Dependency | Version | Role |
|---|---|---|
| Next.js | 16.x | App Router, Turbopack, RSC |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | CSS-first `@theme`, Oxide engine |
| Motion | 12.x | Scroll & transition animations |
| next-intl | 4.x | Chinese / English bilingual |
| React Hook Form | 7.x | Contact form validation |
| Lucide React | latest | Icons |
| Qwen-Plus | — | AI chat assistant backend |

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in DASHSCOPE_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections (7 total)

| # | Section | ID | Description |
|---|---|---|---|
| 1 | **Hero** | `#hero` | Full-screen intro, typewriter animation, CTA buttons |
| 2 | **AI Chat** | `#ai-chat` | Interactive assistant powered by Qwen-Plus, answers from portfolio data |
| 3 | **About** | `#about` | Bio, 4 stat cards, skill tags |
| 4 | **Project Gallery** | `#project-gallery` | 4 project-work pairs in 2×2 grid |
| 5 | **Timeline** | `#timeline` | macOS Time Machine-style experience timeline (13 nodes, jelly card transitions) |
| 6 | **AI Methodology** | `#ai-method` | How this site was built — 4-step process with real inputs/outputs |
| 7 | **Contact** | `#contact` | Form + email/wechat/location info |

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # i18n provider, fonts, theme
│   │   └── page.tsx            # Composes all sections
│   ├── api/chat/route.ts       # Qwen-Plus API proxy
│   ├── layout.tsx              # Root HTML/body
│   └── globals.css             # Tailwind 4 @theme config
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky, blur, locale toggle, mobile menu
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx  # Top progress bar
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AIChat.tsx
│   │   ├── About.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── Timeline.tsx
│   │   ├── AIMethodology.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ThemeProvider.tsx
│       ├── AnimateOnScroll.tsx
│       └── SectionHeading.tsx
├── data/
│   └── portfolio-knowledge.ts  # AI assistant knowledge base
├── lib/
│   └── system-prompt.ts        # Qwen-Plus system prompt builder
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── messages/
│   ├── zh.json
│   └── en.json
└── middleware.ts                # Locale routing
```

## Features

- **Dark mode** — system preference detection + manual toggle
- **Bilingual** — 中文 / English, URL-based locale (`/zh`, `/en`)
- **Smooth scroll** — CSS scroll-behavior + anchor offset for sticky nav
- **Scroll progress bar** — 2px gradient indicator at page top
- **Scroll-triggered animations** — fadeInUp via Motion `whileInView`
- **Timeline jelly effect** — spring-based card transitions on node click
- **iOS-style gallery** — rounded cards with play overlay, macOS confirmation dialog
- **AI chat assistant** — Qwen-Plus powered, scoped to portfolio knowledge only
- **Responsive** — mobile-first, hamburger menu, adaptive grids

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DASHSCOPE_API_KEY` | Yes (for AI chat) | Qwen-Plus API key from [DashScope](https://dashscope.console.aliyun.com/) |

---

## Iteration Log & AI Interaction History

This website was built entirely through human-AI conversation. Below is the complete record of every iteration round, from the initial idea to the current state.

---

### v0.1 — Project Planning (Round 1)

**User Input**: Described the goal (personal portfolio for recruiters), listed the desired tech stack (Next.js 16, Tailwind 4, Motion 12, next-intl, React Hook Form, Lucide), and asked for a site structure proposal.

**AI Output**:
- Proposed single-page scroll + detail page hybrid architecture
- Designed 6 core sections: Hero, About, Skills, Projects, AI Playground, Contact
- Produced UX flow diagram and content hierarchy
- Defined design system (color, typography, spacing, animation specs)
- Planned full directory structure

**Deliverable**: Written plan document with site map, section breakdowns, and implementation steps.

---

### v0.2 — Data-Driven Plan Refinement (Round 2)

**User Input**: Provided `mockProfile.json` (173 lines of structured personal data) and refined design requirements — minimal, elegant, high-trust, responsive.

**AI Output**:
- Mapped all plan sections to real profile data (education, internships, projects, awards)
- Replaced generic "AI PM" positioning with actual role: "地球物理工程师 · 工程数字化"
- Refined sections: About (4 stat cards from real data), Projects (4 cards mapped to profile), AI Methodology (placeholder for later)
- Confirmed scope: full build with bilingual + dark mode

**Key Decision**: AI methodology section kept as placeholder, to be filled with real build process later.

---

### v0.3 — Full Site Build (Round 3)

**User Input**: Approved plan, instructed to begin implementation.

**AI Output**: Built the complete site from empty directory to running application.

**Files Created (18)**:
| Category | Files |
|---|---|
| Config | `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore` |
| i18n | `middleware.ts`, `i18n/routing.ts`, `i18n/request.ts`, `messages/zh.json`, `messages/en.json` |
| Layout | `Navbar.tsx`, `Footer.tsx`, `ScrollProgress.tsx` |
| Sections | `Hero.tsx`, `About.tsx`, `Projects.tsx`, `AIMethodology.tsx`, `Contact.tsx` |
| UI | `ThemeProvider.tsx`, `AnimateOnScroll.tsx`, `SectionHeading.tsx` |

**Technical Milestones**:
- Resolved npm naming issue (Chinese directory name) by manual project initialization
- Installed 7 dependency groups across 3 sequential npm install commands (PowerShell `&&` incompatibility)
- Build passed on first attempt: `next build` compiled in 4.1s, 2 static pages generated
- Dev server confirmed working: HTTP 200 on both `/zh` and `/en` routes

---

### v0.4 — AI Methodology Rewrite (Round 4)

**User Input**: "AI构建的方法论指的是构建当前个人网站的逻辑流程和方案" — clarified that this section should document the actual build process of THIS website, not abstract methodology.

**AI Output**:
- Rewrote `AIMethodology.tsx` from generic 4-step cards to a **vertical timeline** layout with concrete inputs/outputs
- Changed component from horizontal grid to alternating left/right timeline with connecting line
- Each step now shows a specific badge (e.g., "mockProfile.json (173 lines)", "18 files · Bilingual · Dark mode")
- Added toolchain display: Cursor, Claude, Next.js 16, Tailwind 4, Motion 12, next-intl
- Updated both `zh.json` and `en.json` with new concrete copy
- Closing statement changed from "more cases coming" to "零手写代码，全部通过人机对话完成"

---

### v0.5 — AI Chat Assistant (Round 5)

**User Input**: Detailed specification for an AI chat section — Qwen-Plus backend, portfolio-scoped answers, suggested questions, loading/error states, macOS-grade design.

**AI Output (4 new files)**:
| File | Purpose |
|---|---|
| `data/portfolio-knowledge.ts` | Structured knowledge base — single source of truth for the AI, with replacement markers |
| `lib/system-prompt.ts` | Dynamic system prompt builder — identity, tone, knowledge injection, strict boundary rules |
| `app/api/chat/route.ts` | Server-side API route — validates input, prepends system prompt, calls Qwen-Plus, returns reply |
| `components/sections/AIChat.tsx` | Chat UI — header, 5 suggested questions, message bubbles, typewriter-style loading, error toast, input bar |

**Modified (4 files)**: `zh.json`, `en.json` (new `aiChat` namespace), `Navbar.tsx` (added anchor), `page.tsx` (added section).

**Architecture Decisions**:
- API key stored server-side only (`DASHSCOPE_API_KEY` in `.env.local`)
- Conversation context: last 10 messages sent to API to maintain coherence
- Language auto-matching: system prompt instructs model to reply in user's language
- Created `.env.example` template for onboarding

---

### v0.6 — API Key Configuration (Round 6)

**User Input**: Provided DashScope API key.

**AI Output**:
- Created `.env.local` with the key
- Verified `.gitignore` excludes `.env*.local`
- Restarted dev server; confirmed `Environments: .env.local` loaded in console
- AI chat assistant now fully functional

---

### v0.7 — Gallery Section (Round 7)

**User Input**: Requested a "Xiaohongshu Gallery" with iOS widget-style cards, video cover + play icon overlay, hover lift animation, and macOS-style link confirmation dialog.

**AI Output (1 new file, 4 modified)**:
- `Gallery.tsx`: 4 cards in `rounded-[20px]` iOS widget style, 3:4 aspect ratio
  - Gradient cover placeholders (replaceable with real images)
  - White semi-transparent frosted-glass play button centered on each cover
  - Tag pills (top-left, `bg-black/30 backdrop-blur`)
  - Hover: card lifts 1.5px + shadow deepens, cover scales 105%, play button scales 110%
  - Click: triggers `MacOSModal` component
- `MacOSModal`: macOS dialog with red/yellow/green window controls, external-link icon, spring scale-in animation, cancel/open buttons
- Updated nav (8 anchors), i18n (zh/en `gallery` namespace), page composition

---

### v0.8 — Experience Timeline (Round 8)

**User Input**: Requested a "macOS Time Machine"-style timeline with hover-enlarging dots and jelly card transitions.

**AI Output (1 new file, 4 modified)**:
- `Timeline.tsx`: 9 chronological nodes covering 2021–2027
  - Left sidebar: vertical track with animated dots — `spring(400, 20)` enlarge on hover, color-coded per entry type
  - Right panel: macOS window-style card (red/yellow/green dots + date header)
  - Card transition: `spring(350, 25, 0.8)` jelly effect — scale 0.92→1 on enter, 1→0.95 on exit
  - Mobile: horizontal scrollable timeline, stacked layout
- 9 entries fully mapped from `mockProfile.json`: education (2), campus (1), projects (2), internships (2), award (1), publications (1)
- Updated nav (now 8 section anchors), i18n (zh/en `timeline` namespace with 9×4 content keys)

---

### v0.9 — README Update (Round 9)

**User Input**: "更新readme"

**AI Output**: Rewrote README with complete tech stack table, all 8 sections documented, full directory tree, feature list, and environment variable guide.

---

### v1.0 — Iteration History (Round 10)

**User Input**: "制作好网站从头到尾版本更改或者迭代的说明并且包含每轮聊天交互的记录总结添加到readme"

**AI Output**: Added this Changelog & Iteration History section — documenting every round of human-AI conversation, decisions made, files created/modified, and technical milestones.

---

### v1.1 — AI Chat UI Refinement (Round 11)

**User Input**: "参考@/未命名文件夹 中ai对话框的样式，修改项目主页对话框的样式和视觉效果（不更改逻辑和内容）"

**Specific Requirements**:
1. Welcome message: "你好！我是吴邪的 AI 助手，了解他的全部背景。试试下面的问题，或直接输入你想问的。"
2. Icon: Change to robot icon
3. Remove attachment upload feature
4. Input placeholder: "Ask me anything about 吴邪…"
5. Suggested questions: Four questions starting with "请介绍一下吴邪"
6. Remove "Status: Not logged in"
7. Bottom text: "下滑查看详细介绍"

**AI Output**:

**Modified Files (3)**:
| File | Changes |
|---|---|
| `src/components/sections/AIChat.tsx` | UI refactored: `rounded-2xl` → `rounded-3xl`, `h-[400px]` → `h-[550px]`, increased spacing, robot icon replacement, removed attachment upload code |
| `src/messages/zh.json` | Updated `aiChat` namespace: `welcome`, `placeholder`, `q1-q4`, `disclaimer` |
| `src/messages/en.json` | Synced English translations |

**Key Changes**:
- **Visual upgrade**: Larger border radius (`rounded-3xl`), larger message area height (550px), looser padding (`px-6 py-8`)
- **Icon replacement**: Header icon from `Sparkles` to `Bot`, welcome page uses `Bot` too
- **Copy optimization**:
  - `welcome`: "你好！我是吴邪的 AI 助手，了解他的全部背景。试试下面的问题，或直接输入你想问的。"
  - `placeholder`: "Ask me anything about 吴邪…"
  - `q1`: "请介绍一下吴邪"
  - `q2`: "他参与过哪些项目？"
  - `q3`: "他最擅长什么？"
  - `q4`: "这个网站是如何做的？"
  - `disclaimer`: "下滑查看详细介绍"
- **Question count**: Reduced from 5 to 4, removed "这个网站是怎么搭建的？"
- **Removed features**: Attachment upload code and "Status: Not logged in" display

**Technical Notes**:
- Style reference from `/未命名文件夹/ChatDialog_副本/`
- Preserved original chat logic and API calls unchanged
- Only modified visual layer and copy, no business logic touched

---

### v1.2 — Architecture Refactoring & Navigation Optimization (Round 12)

**User Input**: 
1. Move AI Assistant section before About Me.
2. Home, AI Assistant, About Me, Featured Projects, Works should be on one page, merged into a dropdown menu under Home in the navbar. Timeline, AI Methodology, Contact should be separate pages.
3. Reasonable framework planning.
4. Remove the small change note "v1.2 — Development Server Restart & Cache Issue (Round 12)" from README. Continue adding iteration notes based on our conversation context.

**Requirement Analysis**:
- **AI Assistant position**: Moved from position 6 to position 2 (after Hero), improving visibility and interaction priority
- **Home content integration**: Split original 8-section single-page app into "Home + 3 separate pages" hybrid architecture
- **Navigation restructure**: Home becomes dropdown menu with 4 sub-items (AI Assistant, About Me, Featured Projects, Works)
- **Separate pages**: Timeline, AI Methodology, Contact each get independent route pages

**Architecture Design**:

**New Route Structure**:
```
src/app/[locale]/
├── page.tsx                    # Home (Hero + AI Assistant + About + Featured Projects + Works)
├── timeline/
│   └── page.tsx               # Timeline separate page
├── ai-methodology/
│   └── page.tsx               # AI Methodology separate page
└── contact/
    └── page.tsx               # Contact separate page
```

**Navigation Structure**:
- **Desktop**: Home (dropdown) | Timeline | AI Methodology | Contact
- **Mobile**: Hamburger menu, Home submenu collapsible/expandable

**AI Output (3 new files, 4 modified files)**:

**New Files**:
| File Path | Purpose |
|---------|------|
| `src/app/[locale]/timeline/page.tsx` | Timeline page with back-to-home button and SectionHeading |
| `src/app/[locale]/ai-methodology/page.tsx` | AI Methodology separate page |
| `src/app/[locale]/contact/page.tsx` | Contact separate page |

---

### v1.3 — UI Details & Typewriter Effect (Round 13)

**User Input**: Remove theme toggle button from navbar, add language switcher (segmented control design), add typewriter effect to AI assistant welcome message.

**Architecture Decision**: Split Timeline, AI Methodology, and Contact into separate pages for better long-content reading experience. Home retains 5 core Sections for reasonable length. AI Assistant moved to position 2 for higher interaction priority.

---

### v1.4 — Project & Works Merge (Round 14)

**User Input**: Merge Featured Projects and Works, title "项目作品展示" (Project Works Display), subtitle "从算法设计到工程落地" (From Algorithm Design to Engineering). Put works on the left side of projects, merged into one container, display 2 project work cards per row.

---

### v1.5 — Triple Synergy: Home, AI Methodology, Before/After Comparison (Round 15)

**User Input**: Complete three synergy upgrades, transforming the site from "changelog" style to "productized iteration case study" style.

**Upgrade Content**:

#### A. Home 4-Stage Iteration Summary

**New Component**: `src/components/sections/IterationSummary.tsx`

**Content Structure**:
- **Title**: "这个网站是如何迭代出来的" (How This Site Iterated)
- **Summary**: Productized building philosophy
- **4 Stage Cards** (2x2 grid):
  1. **Problem Definition**: Summary + 3 Bullets
  2. **Data-Driven Building**: Summary + 3 Bullets
  3. **AI-Native Interaction**: Summary + 3 Bullets
  4. **Productized Polish**: Summary + 3 Bullets
- **Bottom Takeaway**: "这不是一次性生成的页面，而是一个通过'定义—生成—评估—迭代'逐步收敛出来的产品。" (This is not a one-shot generated page, but a product that converged through "define-generate-evaluate-iterate")
- **CTA Button**: "查看完整构建过程" →跳转AI方法论页面

#### B. AI Methodology Page Complete Refactor

**Refactored Component**: `src/components/sections/AIMethodology.tsx`

**New Content Sections**:
1. **Metrics Strip**: 4 key metrics
   - Multi-round human-AI collaboration iterations
   - Bilingual information architecture
   - AI-assisted process from planning to deployment
   - Qwen-Plus based portfolio assistant

2. **Section 1 - Core Building Logic**: 4 Logic cards
   - Define audience first, then define page
   - Structure first, then generate implementation
   - Constrain content with real data first
   - Ship MVP first, then iterate

3. **Section 2 - Four-Stage Evolution**: 4 Phase details
   - **Phase 1: Problem Definition** - Paragraph + What Changed + Why It Mattered + Outputs
   - **Phase 2: Data-Driven Building** - Same structure
   - **Phase 3: AI-Native Interaction** - Same structure
   - **Phase 4: Productized Polish** - Same structure

4. **Section 3 - Toolchain & Collaboration**: 5 Workflow descriptions
   - Gemini, Trae IDE + GLM 5/Qwen, Cursor + Claude, Next.js + Tailwind CSS, Qwen-Plus API

5. **Section 4 - Before/After Comparison**: 3 Compare card sets
   - From generic structure to recruitment-focused personal brand portal
   - From static display to AI interactive experience
   - From long single page to hybrid information architecture
   - Placeholder design, real screenshots can be added later

6. **Section 5 - Final Summary**: Core philosophy
   - "这个网站不是通过一次性生成得到的，而是在真实目标约束下，通过多轮'定义—生成—评估—优化'逐步收敛出来的。"

#### C. Before/After Comparison Component

**New Component**: `src/components/sections/BeforeAfterComparison.tsx`

**Design Features**:
- Left-right comparison layout (stacked on mobile)
- Elegant placeholder design (gradient background + icon + text)
- Shows "Early Version (screenshot pending)" / "Current Version (screenshot pending)"
- Dashed border indicates replaceable
- Version labels and brief descriptions included

**File Modification List**:

**New Files**:
| File Path | Purpose |
|---------|------|
| `src/components/sections/IterationSummary.tsx` | Home iteration summary |
| `src/components/sections/BeforeAfterComparison.tsx` | Before/After comparison |

**Modified Files**:
| File Path | Changes |
|---------|---------|
| `src/app/[locale]/page.tsx` | Added IterationSummary to home |
| `src/components/sections/AIMethodology.tsx` | Complete refactor, supports new structure |
| `src/messages/zh.json` | Added iterationSummary and aiMethod translations (90+ lines) |
| `src/messages/en.json` | Synced English translations (90+ lines) |

**Technical Highlights**:
- **Component reuse**: Using existing AnimateOnScroll, SectionHeading components
- **Type safety**: Complete TypeScript type definitions
- **Responsive design**: Mobile-first, adaptive layout
- **Dark mode**: All new components support dark mode
- **Bilingual**: Complete Chinese/English translation alignment

**Core Value**:
The site now fully presents the complete story of "AI-iterated productized personal brand portal", from concise summary on home to detailed case study on AI Methodology page. Content is rooted in real development history, reflecting product thinking in personal brand building.

---

### v1.6 — Projects & Awards Separation (Round 16)

**User Input**: Separate awards from the project products above, add subheading: 荣誉奖项 (Honors & Awards).

**Upgrade Content**:

**Modified Component**: `src/components/sections/ProjectGallery.tsx`

**Structure Optimization**:
- Split original 15 project cards into two parts:
  1. **项目作品展示** (Project Works Display, first 4): Keep original title and subtitle
  2. **荣誉奖项** (Honors & Awards, last 11): New independent subheading "荣誉奖项"

---

### v1.7 — Content Rewrite: mockProfile → realProfile (Round 17)

**User Input**: Read README and frontend project, rewrite all content based on `realProfile.json`, keep honors & awards unchanged.

**Background**:
The site originally used fictional character "吴邪" (from novel Naughty Takeaways, Zhejiang University Geophysics Engineer) as content prototype (`mockProfile.json`). Now fully replaced with real person Wang Zihan (Erwin) — AI Product Manager, with real background including EDHEC Business School, ByteDance, Qiuzhi Fangzhou, etc.

**Modification Scope**:

**i18n Content (zh.json / en.json)**:
- `hero`: Name changed to `Erwin`, title changed to `AI 产品经理 · 全栈开发`, tagline updated
- `about`: Description, subtitle, stats (EDHEC FT Top10, 4 internships, 5 projects, 3 hackathons)
- `aiChat`: Assistant name, welcome message, suggested questions all updated to Erwin-related
- `timeline`: Expanded from 9 to **13 entries**, covering 2018.09 Jiangxi University of Finance → 2025.12 Shenzhou Hackathon
- `projectGallery`: project1–4 and work1–4 changed to hackathon & AI PM content; work5–15 and project5–15 (honors & awards) unchanged
- `contact.location_value`: Changed to Shenzhen / Hangzhou
- `footer.copyright`: Changed to Erwin Wang
- `iterationSummary` / `aiMethod`: `mockProfile.json` reference changed to `realProfile.json`

**Component Modifications**:
- `About.tsx`: skills array changed to AI PM skill stack (AI Agent, SQL, RAG, Dify…); avatar letter `吴` → `E`
- `Timeline.tsx`: entries array expanded from 9 to 13 items, with correct dates, icons and i18n keys
- `ProjectGallery.tsx`: First 4 items' URLs changed to real GitHub links; first 4 projectTags updated; honors & awards unchanged

**AI Knowledge Base**:
- `portfolio-knowledge.ts`: Complete rewrite, includes Erwin's education (3 schools), 4 work/internship experiences, 3 hackathon projects, awards and contact info
- `system-prompt.ts`: AI assistant identity updated from "Wu Xie" to "Erwin (王子涵)"

**Core Value**:
Site fully switched from fictional character to real person. Content fully aligned with `realProfile.json`. AI assistant can correctly answer questions about Erwin's real background.

---

### v1.8 — AI Chat Streaming & UI Simplification (Round 18)

**User Input**: 
1. AI responses use streaming output
2. Remove user and AI avatars in conversation

**Backend Changes** (`src/app/api/chat/route.ts`):
- Added `stream: true` parameter when calling Qwen API
- Parsed SSE stream and converted to plain text stream
- Used `ReadableStream` to read AI response chunks

**Frontend Changes** (`src/components/sections/AIChat.tsx`):
- Created empty assistant message placeholder first
- Used `res.body?.getReader()` to read stream
- Real-time `setMessages` updates content, implementing typewriter effect

**Core Value**:
AI responses changed from "waiting for full response" to "real-time character-by-character display", providing smoother user experience. Simultaneously simplified UI elements, making conversation content the visual focus.

---

### v1.9 — Timeline Style Upgrade (Round 19)

**User Input**: Timeline page's education and work experience should use reference image style (colorful gradient cards + timeline layout).

**Reference Style Features**:
- Alternating left-right timeline layout
- Each experience uses different vibrant gradient background colors (pink, blue, yellow, etc.)
- Time period displayed at top of card
- Content structure: Company/School name (bold), Position/Degree, Bullet points
- Timeline line runs through all cards, diamond node decorations

---

### v2.0 — Theme Color Customization & Education Enhancement (Round 20)

**User Input**: Change theme color from purple to #00b0c2; change iteration summary's Emoji and Svg to theme color; change four-stage evolution background to theme color; add school logos to opposite side of education cards; make AI methodology page's four-stage evolution auto-scroll; make home's four stages auto-scroll; change work experience to full-width left-right split cards and update content.

**Core Value**:
Unified brand visual style, theme color #00b0c2 more aligned with personal brand tone. Education cards now include school logos, improving credibility and professional image. Auto-scroll displays improve content presentation efficiency. Work experience split layout clearer shows information hierarchy.

---

### v2.1 — Hero & About Avatar Premium Upgrade (Round 21)

**User Input**: Add square framed photo to right side of Home Hero module (Big Sur window style border + photo dominant color diffuse shadow + 3D tilt effect); change "About Me" section avatar to circle with same effect.

**Core Value**:
Using macOS Big Sur window border design language, 1px ultra-thin white border simulates native window texture. Using Canvas to extract photo's dominant color generates dynamic diffuse shadow, creating floating effect. Mouse hover produces 3D tilt and gloss flow, simulating real card interaction experience.

---

### v2.2 — Hero Dynamic Glow & Gradient Background (Round 22)

**User Input**: Add dynamic glow and gradient background effects to hero module.

**Core Value**:
Added four-color dynamic gradient background layer and four independently animated colored glow spheres to Hero module, creating modern tech visual atmosphere. Through fine transparency control and radial gradient design, effects remain elegant without being overwhelming.

---

## Summary

| Metric | Value |
|---|---|
| Total conversation rounds | 22 |
| Total source files | 27+ |
| Sections built | 8 |
| Languages supported | 2 (中文 / English) |
| i18n keys | 260+ |
| Hand-written lines of code | 0 |
| Build tool | Cursor + Claude |
| AI chat backend | Qwen-Plus (DashScope) |
| First successful build | Round 3 (v0.3) |
| Time from empty directory to running site | 1 conversation round |
| Latest iteration | v2.2 (Hero Dynamic Glow & Gradient Background) |

## Built with AI

This entire website — from architecture planning to every line of code — was built through conversational AI assistance. The process is documented both in this README and in the "AI Methodology" section of the site itself.
