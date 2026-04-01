# Erwin Wang 个人作品集网站

个人品牌网站——AI 产品经理与全栈开发者王子涵（Erwin）。


## 技术栈

| 依赖 | 版本 | 作用 |
|---|---|---|
| Next.js | 16.x | App Router, Turbopack, RSC |
| TypeScript | 5.x | 类型安全 |
| Tailwind CSS | 4.x | CSS-first `@theme`, Oxide 引擎 |
| Motion | 12.x | 滚动与过渡动画 |
| next-intl | 4.x | 中文 / English 双语支持 |
| React Hook Form | 7.x | 表单验证 |
| Lucide React | latest | 图标 |
| Qwen-Plus | — | AI 聊天助手后端 |

## 快速开始

```bash
npm install
cp .env.example .env.local   # 然后填写 DASHSCOPE_API_KEY
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)。

## 页面板块（7个）

| # | 板块 | ID | 描述 |
|---|---|---|---|
| 1 | **首页 Hero** | `#hero` | 全屏intro打字机动画，CTA按钮 |
| 2 | **AI 助手** | `#ai-chat` | Qwen-Plus驱动的交互式助手，基于作品集数据作答 |
| 3 | **关于我** | `#about` | 个人简介，4个统计卡片，技能标签 |
| 4 | **项目作品展示** | `#project-gallery` | 4个项目作品成对展示，2×2网格布局 |
| 5 | **履历时间轴** | `#timeline` | macOS Time Machine风格体验时间轴（13个节点，果冻卡片过渡效果） |
| 6 | **AI 方法论** | `#ai-method` | 网站构建方法——4阶段流程，含真实输入输出 |
| 7 | **联系方式** | `#contact` | 表单 + 邮箱/微信/所在地信息 |

## 项目结构

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # i18n provider, 字体, 主题
│   │   └── page.tsx            # 组合所有板块
│   ├── api/chat/route.ts       # Qwen-Plus API 代理
│   ├── layout.tsx              # 根 HTML/body
│   └── globals.css             # Tailwind 4 @theme 配置
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # 粘性导航，模糊效果，语言切换，移动端菜单
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx  # 顶部进度条
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
│   └── portfolio-knowledge.ts  # AI 助手知识库
├── lib/
│   └── system-prompt.ts        # Qwen-Plus 系统提示词构建器
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── messages/
│   ├── zh.json
│   └── en.json
└── middleware.ts                # 语言路由
```

## 功能特性

- **暗黑模式** — 系统偏好检测 + 手动切换
- **双语支持** — 中文 / English，基于URL的语言路由（`/zh`, `/en`）
- **平滑滚动** — CSS scroll-behavior + 粘性导航偏移
- **滚动进度条** — 页面顶部2px渐变指示器
- **滚动触发动画** — Motion `whileInView` 实现 fadeInUp
- **时间轴果冻效果** — 节点点击时弹簧过渡动画
- **iOS风格图库** — 圆角卡片 + 播放覆盖层，macOS确认对话框
- **AI 聊天助手** — Qwen-Plus驱动，仅基于作品集知识作答
- **响应式设计** — 移动端优先，汉堡菜单，自适应网格

## 环境变量

| 变量 | 必填 | 描述 |
|---|---|---|
| `DASHSCOPE_API_KEY` | 是（用于AI聊天） | 来自 [DashScope](https://dashscope.console.aliyun.com/) 的 Qwen-Plus API 密钥 |

---

## 迭代日志与AI交互历史

本网站完全通过人机对话构建。以下是从初始构想到当前状态的完整迭代记录。

---

### v0.1 — 项目规划（第1轮）

**用户输入**：描述目标（招聘用个人作品集），列出技术栈（Next.js 16, Tailwind 4, Motion 12, next-intl, React Hook Form, Lucide），请求网站结构方案。

**AI输出**：
- 提出单页滚动 + 详情页混合架构
- 设计6个核心板块：Hero, About, Skills, Projects, AI Playground, Contact
- 输出UX流程图和内容层级
- 定义设计系统（颜色、字体、间距、动画规范）
- 规划完整目录结构

**交付物**：包含站点地图、板块分解和实施步骤的规划文档。

---

### v0.2 — 数据驱动方案优化（第2轮）

**用户输入**：提供 `mockProfile.json`（173行结构化个人数据）和优化后的设计需求——简约、优雅、高可信度、响应式。

**AI输出**：
- 将所有板块映射到真实个人数据（教育、实习、项目、获奖）
- 用实际角色"地球物理工程师 · 工程数字化"替代通用"AI PM"定位
- 优化板块：About（来自真实数据的4个统计卡片）、Projects（映射到个人资料的4个卡片）、AI Methodology（预留位后续填充）
- 确认范围：完整构建，含双语 + 暗黑模式

**关键决策**：AI方法论板块保留为占位符，后续用真实构建过程填充。

---

### v0.3 — 完整网站构建（第3轮）

**用户输入**：批准方案，开始实施。

**AI输出**：从空目录构建完整网站并运行。

**创建文件（18个）**：
| 类别 | 文件 |
|---|---|
| 配置 | `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore` |
| i18n | `middleware.ts`, `i18n/routing.ts`, `i18n/request.ts`, `messages/zh.json`, `messages/en.json` |
| 布局 | `Navbar.tsx`, `Footer.tsx`, `ScrollProgress.tsx` |
| 板块 | `Hero.tsx`, `About.tsx`, `Projects.tsx`, `AIMethodology.tsx`, `Contact.tsx` |
| UI组件 | `ThemeProvider.tsx`, `AnimateOnScroll.tsx`, `SectionHeading.tsx` |

**技术里程碑**：
- 解决npm命名问题（中文目录名），通过手动项目初始化
- 分3个顺序npm install命令安装7组依赖（PowerShell `&&` 不兼容）
- 首次构建通过：`next build` 4.1秒编译完成，生成2个静态页面
- 开发服务器确认可用：HTTP 200 响应 `/zh` 和 `/en` 路由

---

### v0.4 — AI方法论重写（第4轮）

**用户输入**："AI构建的方法论指的是构建当前个人网站的逻辑流程和方案" —— 明确该板块应记录本网站的实际构建过程，而非抽象方法论。

**AI输出**：
- 将 `AIMethodology.tsx` 从通用4步骤卡片重写为**垂直时间轴**布局，含具体输入输出
- 组件从水平网格改为左右交替时间轴，连线贯穿
- 每步显示具体徽章（如"mockProfile.json (173行)", "18文件 · 双语 · 暗黑模式"）
- 添加工具链展示：Cursor, Claude, Next.js 16, Tailwind 4, Motion 12, next-intl
- 更新 `zh.json` 和 `en.json` 的具体文案
- 结束语从"更多案例即将推出"改为"零手写代码，全部通过人机对话完成"

---

### v0.5 — AI聊天助手（第5轮）

**用户输入**：AI聊天板块详细规格——Qwen-Plus后端、作品集范围作答、建议问题、加载/错误状态、macOS级别设计。

**AI输出（4个新文件）**：
| 文件 | 用途 |
|---|---|
| `data/portfolio-knowledge.ts` | 结构化知识库——AI的唯一真实来源，含替换标记 |
| `lib/system-prompt.ts` | 动态系统提示词构建器——身份、语气、知识注入、严格边界规则 |
| `app/api/chat/route.ts` | 服务端API路由——验证输入、预置系统提示词、调用Qwen-Plus、返回回复 |
| `components/sections/AIChat.tsx` | 聊天UI——头部、5个建议问题、消息气泡、打字机风格加载、错误提示、输入框 |

**修改（4个文件）**：`zh.json`, `en.json`（新增 `aiChat` 命名空间）, `Navbar.tsx`（添加锚点）, `page.tsx`（添加板块）。

**架构决策**：
- API密钥仅服务端存储（`.env.local` 中的 `DASHSCOPE_API_KEY`）
- 对话上下文：发送最近10条消息给API以保持连贯性
- 语言自动匹配：系统提示词指示模型用用户语言回复
- 创建 `.env.example` 模板方便入门

---

### v0.6 — API密钥配置（第6轮）

**用户输入**：提供DashScope API密钥。

**AI输出**：
- 创建含密钥的 `.env.local`
- 确认 `.gitignore` 排除 `.env*.local`
- 重启开发服务器；确认控制台加载 `Environments: .env.local`
- AI聊天助手现已完成可用

---

### v0.7 — 图库板块（第7轮）

**用户输入**：请求"小红书图库"风格——iOS小组件风格卡片、视频封面 + 播放图标覆盖层、悬浮上浮动画、macOS风格链接确认对话框。

**AI输出（1个新文件，4个修改）**：
- `Gallery.tsx`：4个 `rounded-[20px]` iOS小组件风格卡片，3:4宽高比
  - 渐变封面占位符（可替换为真实图片）
  - 半透明白色磨砂玻璃播放按钮居中于封面
  - 标签药丸（左上角，`bg-black/30 backdrop-blur`）
  - 悬浮：卡片上浮1.5px + 阴影加深，封面缩放105%，播放按钮缩放110%
  - 点击：触发 `MacOSModal` 组件
- `MacOSModal`：macOS对话框，红/黄/绿窗口控制按钮，外部链接图标，弹簧缩放进场动画，取消/打开按钮
- 更新导航（8个锚点）、i18n（zh/en `gallery` 命名空间）、页面组合

---

### v0.8 — 体验时间轴（第8轮）

**用户输入**：请求"macOS Time Machine"风格时间轴——悬浮放大圆点和果冻卡片过渡效果。

**AI输出（1个新文件，4个修改）**：
- `Timeline.tsx`：9个时间节点，2021–2027
  - 左侧边栏：垂直轨道带动画圆点——悬浮时 `spring(400, 20)` 放大，按条目类型配色
  - 右侧面板：macOS窗口风格卡片（红/黄/绿圆点 + 日期标题）
  - 卡片过渡：`spring(350, 25, 0.8)` 果冻效果——进入时0.92→1缩放，离开时1→0.95缩放
  - 移动端：横向可滚动时间轴，堆叠布局
- 9个条目完整映射自 `mockProfile.json`：教育（2）、校园（1）、项目（2）、实习（2）、获奖（1）、 publications（1）
- 更新导航（现为8个板块锚点）、i18n（zh/en `timeline` 命名空间，9×4内容键）

---

### v0.9 — README更新（第9轮）

**用户输入**："更新readme"

**AI输出**：重写README，包含完整技术栈表格、所有8个板块文档、完整目录树、功能列表和环境变量指南。

---

### v1.0 — 迭代历史（第10轮）

**用户输入**："制作好网站从头到尾版本更改或者迭代的说明并且包含每轮聊天交互的记录总结添加到readme"

**AI输出**：添加本迭代历史板块——记录每轮人机对话、所做的决策、创建/修改的文件和技术里程碑。

---

### v1.1 — AI聊天UI优化（第11轮）

**用户输入**："参考@/未命名文件夹 中ai对话框的样式，修改项目主页对话框的样式和视觉效果（不更改逻辑和内容）"

**具体需求**：
1. 欢迎文案：改为 "你好！我是吴邪的 AI 助手，了解他的全部背景。试试下面的问题，或直接输入你想问的。"
2. 图标：换成机器人图标
3. 移除上传附件功能
4. 输入框占位符：改为 "Ask me anything about 吴邪…"
5. 建议问题：从"请介绍一下吴邪"开始的四个问题
6. 移除"状态：未登录"
7. 底部文案：改为"下滑查看详细介绍"

**AI输出**：

**修改文件（3个）**：
| 文件 | 更改 |
|---|---|
| `src/components/sections/AIChat.tsx` | UI样式重构：`rounded-2xl` → `rounded-3xl`，`h-[400px]` → `h-[550px]`，间距增大，机器人图标替换，移除附件上传相关代码 |
| `src/messages/zh.json` | 更新 `aiChat` 命名空间：`welcome`、`placeholder`、`q1-q4`、`disclaimer` |
| `src/messages/en.json` | 同步更新英文翻译 |

**关键更改**：
- **视觉升级**：更大圆角（`rounded-3xl`）、更大消息区域高度（550px）、更宽松内边距（`px-6 py-8`）
- **图标替换**：Header图标从 `Sparkles` 改为 `Bot`（机器人），欢迎页图标也使用 `Bot`
- **文案优化**：
  - `welcome`: "你好！我是吴邪的 AI 助手，了解他的全部背景。试试下面的问题，或直接输入你想问的。"
  - `placeholder`: "Ask me anything about 吴邪…"
  - `q1`: "请介绍一下吴邪"
  - `q2`: "他参与过哪些项目？"
  - `q3`: "他最擅长什么？"
  - `q4`: "这个网站是如何做的？"
  - `disclaimer`: "下滑查看详细介绍"
- **问题数量**：从5个减少到4个，移除"这个网站是怎么搭建的？"
- **移除功能**：删除附件上传相关代码和"状态：未登录"显示

**技术说明**：
- 样式参考了 `/未命名文件夹/ChatDialog_副本/` 中的设计
- 保持了原有的聊天逻辑和API调用不变
- 仅修改视觉层和文案，未触及业务逻辑

---

### v1.2 — 架构重构与导航优化（第12轮）

**用户输入**： 
1. AI助手模块放到关于我的前面。
2. 首页、AI助手、关于我、精选项目、作品展示放一页，AI助手、关于我、精选项目、作品展示合并到导航栏首页的下拉框中。履历、AI方法论、联系方式应该分别建立分页。
3. 合理规划一下框架。
4. readme中v1.2 — Development Server Restart & Cache Issue (Round 12)是小改动，去掉这个说明。根据我们对话的上下文继续添加说明续写，说明如何更新迭代的、修改逻辑是什么，总结好方案和对话更新到readme的V1.2。

**需求分析**：
- **AI助手位置调整**：从第6位移动到第2位（Hero之后），提升AI助手的可见性和交互优先级
- **首页内容整合**：将原本8个Section的单页应用拆分为"首页 + 3个独立页面"的混合架构
- **导航结构重构**：首页改为下拉菜单，包含4个子项（AI助手、关于我、精选项目、作品展示）
- **独立页面拆分**：履历、AI方法论、联系方式分别建立独立路由页面

**架构设计**：

**新路由结构**：
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

**导航结构**：
- **桌面端**：首页（下拉菜单）| 履历 | AI方法论 | 联系方式
- **移动端**：汉堡菜单展开，首页子菜单折叠/展开

**AI输出（3个新文件，4个修改文件）**：

**新建文件**：
| 文件路径 | 用途 |
|---------|------|
| `src/app/[locale]/timeline/page.tsx` | 履历独立页面，包含返回首页按钮和 SectionHeading |
| `src/app/[locale]/ai-methodology/page.tsx` | AI 方法论独立页面 |
| `src/app/[locale]/contact/page.tsx` | 联系方式独立页面 |

---

### v1.3 — UI细节优化与打字机特效（第13轮）

**用户输入**：移除导航栏主题切换按钮，新增语言切换框（分段控制器设计），为AI助手欢迎语添加打字机特效。

**架构决策**：将履历、AI 方法论、联系方式拆分为独立页面以优化长内容阅读体验，首页保留 5 个核心 Section 控制合理长度，AI 助手移至第 2 位提升交互优先级。

---

### v1.4 — 项目作品展示合并（第14轮）

**用户输入**：精选项目和作品展示合并，标题为"项目作品展示"，副标题"从算法设计到工程落地"。作品放在项目左边，合并为一个容器，一行显示2个项目作品卡片。

---

### v1.5 — 三协同升级：首页、AI方法论、Before/After对比（第15轮）

**用户输入**：完成三个协同升级，将网站从"变更日志"风格转化为"产品化迭代案例研究"风格。

**升级内容**：

#### A. 首页4阶段迭代摘要

**新增组件**：`src/components/sections/IterationSummary.tsx`

**内容结构**：
- **标题**："这个网站是如何迭代出来的"
- **简介**：产品化构建理念
- **4个阶段卡片**（2x2网格布局）：
  1. **问题定义**: Summary + 3个Bullets
  2. **数据驱动建站**: Summary + 3个Bullets
  3. **AI原生交互**: Summary + 3个Bullets
  4. **产品化打磨**: Summary + 3个Bullets
- **底部Takeaway**："这不是一次性生成的页面，而是一个通过'定义—生成—评估—迭代'逐步收敛出来的产品。"
- **CTA按钮**："查看完整构建过程" → 跳转AI方法论页面

#### B. AI方法论页面完整重构

**重构组件**：`src/components/sections/AIMethodology.tsx`

**新增内容板块**：
1. **Metrics Strip**: 4个关键指标
   - 多轮人机协作迭代
   - 双语信息架构
   - 从规划到部署的AI辅助流程
   - 基于Qwen-Plus的作品集助手

2. **Section 1 - 核心构建逻辑**: 4个Logic卡片
   - 先定义受众，再定义页面
   - 先做结构，再生成实现
   - 先用真实资料约束内容
   - 先上线MVP，再继续迭代

3. **Section 2 - 四阶段演进**: 4个Phase详情
   - **阶段一：问题定义** - Paragraph + What Changed + Why It Mattered + Outputs
   - **阶段二：数据驱动建站** - 同上结构
   - **阶段三：AI原生交互** - 同上结构
   - **阶段四：产品化打磨** - 同上结构

4. **Section 3 - 工具链与协作流程**: 5个Workflow描述
   - Gemini、Trae IDE + GLM 5/Qwen、Cursor + Claude、Next.js + Tailwind CSS、Qwen-Plus API

5. **Section 4 - 版本前后对比**: 3组Compare卡片
   - 从通用结构到面向招聘方的个人品牌门户
   - 从静态展示到AI交互体验
   - 从长单页到混合式信息架构
   - 占位符设计，后续可替换真实截图

6. **Section 5 - 最后的总结**: 核心理念总结
   - "这个网站不是通过一次性生成得到的，而是在真实目标约束下，通过多轮'定义—生成—评估—优化'逐步收敛出来的。"

#### C. Before/After对比组件

**新增组件**：`src/components/sections/BeforeAfterComparison.tsx`

**设计特点**：
- 左右对比布局（移动端上下堆叠）
- 精美占位符设计（渐变背景 + 图标 + 文字说明）
- 显示"早期版本（待添加截图）" / "当前版本（待添加截图）"
- 虚线边框提示可替换
- 包含版本标签和简要说明

**文件修改清单**：

**新建文件**：
| 文件路径 | 用途 |
|---------|------|
| `src/components/sections/IterationSummary.tsx` | 首页演进历程 |
| `src/components/sections/BeforeAfterComparison.tsx` | Before/After对比 |

**修改文件**：
| 文件路径 | 修改内容 |
|---------|---------|
| `src/app/[locale]/page.tsx` | 添加IterationSummary到首页 |
| `src/components/sections/AIMethodology.tsx` | 完整重构，支持新结构 |
| `src/messages/zh.json` | 添加iterationSummary和aiMethod新翻译（共90+行） |
| `src/messages/en.json` | 同步英文翻译（共90+行） |

**技术亮点**：
- **组件复用**：使用现有的AnimateOnScroll、SectionHeading组件
- **类型安全**：TypeScript类型定义完善
- **响应式设计**：移动端优先，自适应布局
- **暗黑模式**：所有新增组件支持暗黑模式
- **双语支持**：中英文翻译完整对应

**核心价值**：
网站现在完整呈现了"通过AI迭代构建的产品化个人品牌门户"的完整故事，从首页的简洁摘要到AI方法论页面的详细案例研究，内容植根于真实开发史，体现了产品思维在个人品牌建设中的应用。

---

### v1.6 — 项目与奖项分离展示（第16轮）

**用户输入**：奖项和上面的项目产品展示分开吧，写个小标题：荣誉奖项。

**升级内容**：

#### 项目作品展示板块优化

**修改组件**：`src/components/sections/ProjectGallery.tsx`

**结构优化**：
- 将原有的15个项目卡片分为两部分：
  1. **项目作品展示**（前4个）：保留原有的标题和副标题
  2. **荣誉奖项**（后11个）：新增独立小标题"荣誉奖项"

---

### v1.7 — 内容重写：mockProfile → realProfile（第17轮）

**用户输入**：阅读 readme 和前端项目，根据 `realProfile.json` 重写所有内容，荣誉奖项保持不变。

**背景**：
网站原先使用虚构人物"吴邪"(盗墓笔记虚拟人物,浙大地球物理工程师)作为内容原型(`mockProfile.json`),现全面替换为真实主人公王子涵(Erwin)——AI 产品经理,具有 EDHEC 商学院、阿里巴巴、求职方舟等真实背景。

**修改范围**：

**i18n 内容 (zh.json / en.json)**：
- `hero`: 姓名改为 `Erwin`，职位改为 `AI 产品经理 · 全栈开发`，tagline 更新
- `about`: 描述、副标题、统计数据（EDHEC FT Top10、4段实习、5个项目、3次黑客松）
- `aiChat`: 助手名称、欢迎语、建议问题全部更新为 Erwin 相关
- `timeline`: 从 9 个条目扩展为 **13 个条目**，覆盖 2018.09 江西财大 → 2025.12 深客松
- `projectGallery`: project1–4 和 work1–4 改为黑客松与 AI PM 内容；work5–15 和 project5–15（荣誉奖项）保持不变
- `contact.location_value`: 改为深圳 / 杭州
- `footer.copyright`: 改为 Erwin Wang
- `iterationSummary` / `aiMethod`: `mockProfile.json` 引用改为 `realProfile.json`

**组件修改**：
- `About.tsx`: skills 数组改为 AI PM 技能栈（AI Agent、SQL、RAG、Dify…）；头像字母 `吴` → `E`
- `Timeline.tsx`: entries 数组从 9 项扩展至 13 项，含正确日期、图标和 i18n 键
- `ProjectGallery.tsx`: 前 4 个 items 的 URL 改为真实 GitHub 链接；前 4 个 projectTags 更新；荣誉奖项部分不变

**AI 知识库**：
- `portfolio-knowledge.ts`: 完整重写，包含 Erwin 的教育（3所院校）、4段工作/实习经历、3个黑客松项目、获奖情况与联系方式
- `system-prompt.ts`: AI 助手身份从"Wu Xie"更新为"Erwin (王子涵)"

**核心价值**：
网站从虚构人物完全切换到真实主人公，内容与 `realProfile.json` 全面对齐，AI 助手能够正确回答关于 Erwin 真实背景的提问。

---

### v1.8 — AI Chat流式输出与UI精简（第18轮）

**用户输入**： 
1. AI 回答采用流式输出
2. 对话中的用户和 AI 头像去掉

**后端修改** (`src/app/api/chat/route.ts`)：
- 添加 `stream: true` 参数调用 Qwen API
- 将 SSE 流解析并转换为纯文本流返回
- 使用 `ReadableStream` 逐块读取 AI 回复内容

**前端修改** (`src/components/sections/AIChat.tsx`)：
- 先创建空的 assistant 消息占位
- 使用 `res.body?.getReader()` 读取流
- 实时 `setMessages` 更新内容，实现打字机效果

**核心价值**：
AI 回复从"等待整段返回"变为"实时逐字显示"，用户体验更流畅自然；同时精简 UI 元素，让对话内容成为视觉焦点。

---

### v1.9 — 履历时间轴样式升级（第19轮）

**用户输入**：履历分页的教育经历和工作经历做成参考图样式（彩色渐变卡片 + 时间轴布局）。

**参考样式特点**：
- 左右交替的时间轴布局
- 每条经历使用不同的鲜艳渐变背景色（粉色、蓝色、黄色等）
- 时间段显示在卡片顶部
- 内容结构：公司/学校名称（加粗）、职位/学位、要点列表
- 时间轴线贯穿所有卡片，菱形节点装饰

---

### v2.0 — 主题色定制与教育经历增强（第20轮）

**用户输入**：主题色从紫色改为 #00b0c2；迭代策略摘要的 Emoji 和 Svg 改成主题色；四阶段演进背景改成主题色；在教育经历卡片对侧添加学校 Logo；网站构建过程 ai-methodology 分页的四阶段演进实现自动滚动；首页四阶段实现自动滚动；工作经历改为全宽左右分栏卡片并更新内容。

**核心价值**：
统一品牌视觉风格，主题色 #00b0c2 更符合个人品牌调性；教育经历增加学校 Logo 展示，提升可信度和专业形象；自动滚动展示提升内容展示效率；工作经历分栏布局更清晰展示信息层级。

---

### v2.1 — Hero与About头像高级感升级（第21轮）

**用户输入**：首页 Hero 模块右侧添加正方形相框照片（Big Sur 窗口风格边框 + 照片主色调弥散阴影 + 3D 倾斜效果）；"关于我"部分的头像改为圆形并应用相同效果。

**核心价值**：
采用 macOS Big Sur 窗口边框设计语言，1px 极细白边模拟原生窗口质感；通过 Canvas 提取照片主色调生成动态弥散阴影，营造悬浮效果；鼠标悬停时产生 3D 倾斜和光泽流动，模拟真实卡片交互体验。

---

### v2.2 — Hero动态光晕与渐变背景（第22轮）

**用户输入**：给hero模块加上动态光晕和渐变背景炫彩效果。

**核心价值**：
为 Hero 模块添加四色动态渐变背景层和四个独立动画的彩色光晕球体，营造现代科技感的视觉氛围；通过精细的透明度控制和径向渐变设计，确保效果淡雅不喧宾夺主。

---

## 总结

| 指标 | 数值 |
|---|---|
| 对话轮次 | 22 |
| 源文件数量 | 27+ |
| 页面板块 | 8 |
| 支持语言 | 2 (中文 / English) |
| i18n 键数量 | 260+ |
| 手写代码行数 | 0 |
| 构建工具 | Cursor + Claude |
| AI聊天后端 | Qwen-Plus (DashScope) |
| 首次成功构建 | 第3轮 (v0.3) |
| 从空目录到运行站点 | 1轮对话 |
| 最新迭代 | v2.2 (Hero 动态光晕与渐变背景) |

## AI 构建

整个网站——从架构规划到每一行代码——都是通过对话式AI辅助构建的。这一过程记录在本README和网站的"AI方法论"板块中。
