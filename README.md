# Wu Xie Portfolio

Personal brand website for Wu Xie (吴邪) — Geophysical Engineer & Engineering Digitalization.

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

## Sections (8 total)

| # | Section | ID | Description |
|---|---|---|---|
| 1 | **Hero** | `#hero` | Full-screen intro, typewriter animation, CTA buttons |
| 2 | **About** | `#about` | Bio, 4 stat cards, skill tags |
| 3 | **Timeline** | `#timeline` | macOS Time Machine-style experience timeline (9 nodes, jelly card transitions) |
| 4 | **Projects** | `#projects` | 4 project cards in 2×2 grid with gradient top bars |
| 5 | **AI Methodology** | `#ai-method` | How this site was built — 4-step process with real inputs/outputs |
| 6 | **AI Chat** | `#ai-chat` | Interactive assistant powered by Qwen-Plus, answers from portfolio data |
| 7 | **Gallery** | `#gallery` | iOS widget-style video cover cards, macOS link confirmation dialog |
| 8 | **Contact** | `#contact` | Form + email/wechat/location info |

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # i18n provider, fonts, theme
│   │   └── page.tsx            # Composes all 8 sections
│   ├── api/chat/route.ts       # Qwen-Plus API proxy
│   ├── layout.tsx              # Root HTML/body
│   └── globals.css             # Tailwind 4 @theme config
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky, blur, dark/locale toggle, mobile menu
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx  # Top progress bar
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Timeline.tsx
│   │   ├── Projects.tsx
│   │   ├── AIMethodology.tsx
│   │   ├── AIChat.tsx
│   │   ├── Gallery.tsx
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

## Changelog & Iteration History

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
1. 欢迎文案：改为 "你好！我是吴邪的 AI 助手，了解他的全部背景。试试下面的问题，或直接输入你想问的。"
2. 图标：换成机器人图标
3. 移除上传附件功能
4. 输入框占位符：改为 "Ask me anything about 吴邪…"
5. 建议问题：从"请介绍一下吴邪"开始的四个问题
6. 移除"状态：未登录"
7. 底部文案：改为"下滑查看详细介绍"

**AI Output**:

**Modified Files (3)**:
| File | Changes |
|---|---|
| `src/components/sections/AIChat.tsx` | UI 样式重构：`rounded-2xl` → `rounded-3xl`，`h-[400px]` → `h-[550px]`，间距增大，机器人图标替换，移除附件上传相关代码 |
| `src/messages/zh.json` | 更新 `aiChat` 命名空间：`welcome`、`placeholder`、`q1-q4`、`disclaimer` |
| `src/messages/en.json` | 同步更新英文翻译 |

**Key Changes**:
- **视觉升级**：更大的圆角（`rounded-3xl`）、更大的消息区域高度（550px）、更宽松的内边距（`px-6 py-8`）
- **图标替换**：Header 图标从 `Sparkles` 改为 `Bot`（机器人），欢迎页图标也使用 `Bot`
- **文案优化**：
  - `welcome`: "你好！我是吴邪的 AI 助手，了解他的全部背景。试试下面的问题，或直接输入你想问的。"
  - `placeholder`: "Ask me anything about 吴邪…"
  - `q1`: "请介绍一下吴邪"
  - `q2`: "他参与过哪些项目？"
  - `q3`: "他最擅长什么？"
  - `q4`: "他的求职意向是什么？"
  - `disclaimer`: "下滑查看详细介绍"
- **问题数量**：从 5 个减少到 4 个，移除了"这个网站是怎么搭建的？"
- **移除功能**：删除了附件上传相关代码和"状态：未登录"显示

**Technical Notes**:
- 样式参考了 `/未命名文件夹/ChatDialog_副本/` 中的设计
- 保持了原有的聊天逻辑和 API 调用不变
- 仅修改视觉层和文案，未触及业务逻辑

---

### v1.2 — 架构重构与导航优化 (Round 12)

**User Input**: 
1. AI助手模块放到关于我的前面。
2. 首页、AI助手、关于我、精选项目、作品展示放一页，AI助手、关于我、精选项目、作品展示合并到导航栏首页的下拉框中。履历、AI方法论、联系方式应该分别建立分页。
3. 合理规划一下框架。
4. readme中v1.2 — Development Server Restart & Cache Issue (Round 12)是小改动，去掉这个说明。根据我们对话的上下文继续添加说明续写，说明如何更新迭代的、修改逻辑是什么，总结好方案和对话更新到readme的V1.2。

**需求分析**:
- **AI助手位置调整**：从第6位移动到第2位（Hero之后），提升AI助手的可见性和交互优先级
- **首页内容整合**：将原本8个Section的单页应用拆分为"首页 + 3个独立页面"的混合架构
- **导航结构重构**：首页改为下拉菜单，包含4个子项（AI助手、关于我、精选项目、作品展示）
- **独立页面拆分**：履历、AI方法论、联系方式分别建立独立路由页面

**架构设计**:

**新路由结构**:
```
src/app/[locale]/
├── page.tsx                    # 首页（Hero + AI助手 + 关于我 + 精选项目 + 作品展示）
├── timeline/
│   └── page.tsx               # 履历独立页面
├── ai-methodology/
│   └── page.tsx               # AI方法论独立页面
└── contact/
    └── page.tsx               # 联系方式独立页面
```

**导航结构**:
- **桌面端**：首页（下拉菜单）| 履历 | AI方法论 | 联系方式
- **移动端**：汉堡菜单展开，首页子菜单折叠/展开

**AI Output (3个新文件，4个修改文件)**:

**新建文件**:
| 文件路径 | 用途 |
|---------|------|
| `src/app/[locale]/timeline/page.tsx` | 履历独立页面，包含返回首页按钮和 SectionHeading |
| `src/app/[locale]/ai-methodology/page.tsx` | AI 方法论独立页面 |
| `src/app/[locale]/contact/page.tsx` | 联系方式独立页面 |

---

### v1.3 — UI 细节优化与打字机特效 (Round 13)

**User Input & AI Output**: 移除导航栏主题切换按钮，新增语言切换框（分段控制器设计，左侧"中"、右侧"EN"，当前语言高亮显示），保留Globe图标并置于语言框左侧；为AI助手欢迎语添加打字机特效，"你好！"静态显示，"我是吴邪的 AI 助手。可以通过我了解他。"动态逐字呈现并循环播放（打字→暂停→删除→重新开始）。修改涉及 `Navbar.tsx`（UI重构）、`AIChat.tsx`（打字机动画逻辑）、`zh.json`（欢迎语文案更新）。

**修改文件**: `page.tsx`（调整 Section 顺序为 Hero→AIChat→About→Projects→Gallery）、`Navbar.tsx`（重构为下拉菜单结构）、`zh.json`/`en.json`（更新导航文案），创建 timeline/ai-methodology/contact 三个独立页面。

**架构决策**: 将履历、AI 方法论、联系方式拆分为独立页面以优化长内容阅读体验，首页保留 5 个核心 Section 控制合理长度，AI 助手移至第 2 位提升交互优先级，符合"先吸引后深入"的 UX 原则。



---

### Summary

| Metric | Value |
|---|---|
| Total conversation rounds | 12 |
| Total source files | 25+ |
| Sections built | 8 |
| Languages supported | 2 (中文 / English) |
| i18n keys | 120+ |
| Hand-written lines of code | 0 |
| Build tool | Cursor + Claude |
| AI chat backend | Qwen-Plus (DashScope) |
| First successful build | Round 3 (v0.3) |
| Time from empty directory to running site | 1 conversation round |
| Latest iteration | v1.2 (UI refinement + cache fix) |

## Built with AI

This entire website — from architecture planning to every line of code — was built through conversational AI assistance. The process is documented both in this README and in the "AI Methodology" section of the site itself.
