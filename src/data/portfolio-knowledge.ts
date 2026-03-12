// ============================================================
// Portfolio Knowledge Base
// ============================================================
// This file is the SINGLE SOURCE OF TRUTH for the AI assistant.
// Replace all values below with your own information.
// The AI will ONLY answer based on data provided here.
// ============================================================

export const portfolioKnowledge = {
  name: "王子涵 (Erwin Wang)",

  bio: `AI 产品经理，毕业于法国 EDHEC 商学院（企业战略与管理硕士，FT 欧洲 Top10）。
本科就读于江西财经大学市场营销专业，专业前 5%，优秀毕业生。
目前在深圳，专注于 AI Agent 产品设计与落地，曾参与字节跳动、求职方舟等产品工作。
擅长将复杂业务问题转化为可执行的 AI 产品方案，具备 SQL 数据分析、A/B 实验设计与全栈开发能力。`,

  currentFocus:
    "AI Agent 设计与产品落地、全栈开发、求职 AI 工具、黑客松项目",

  education: [
    {
      school: "法国 EDHEC 商学院",
      degree: "硕士",
      major: "企业战略与管理",
      period: "2022.07 - 2025.02",
      details: "Financial Times 欧洲商学院 Top10，管理类 Top5；成绩前 20%；获路易威登 INSIDE、VC&PE 博科尼等专业认证",
    },
    {
      school: "江西财经大学",
      degree: "本科",
      major: "市场营销（项目投资与营销策划）",
      period: "2018.09 - 2022.06",
      details: "全国财经院校 Top7；专业前 5%；优秀毕业生、一等学业奖学金、国家级大创课题负责人",
    },
    {
      school: "伦敦大学",
      degree: "学士（在读）",
      major: "计算机科学（人工智能方向）",
      period: "2025.09 - 2026.02",
      details: "Coursera 在线选修：数据库 SQL、Python、软件工程、AI 与机器学习、智能代理、RAG 与微调；成绩前 10%",
    },
  ],

  strengths: [
    "AI Agent 产品设计与落地（Vision-agent loop、多模态决策）",
    "数据分析与 A/B 实验设计（SQL、漏斗分析、归因）",
    "全栈开发（Python、Next.js、Dify、RAG）",
    "精益敏捷管理（Scrum, SAFe 6.0）",
    "多语言沟通能力（中文母语、英语雅思7分/CET-6、法语 DELF A2）",
    "国际化视野（法国、英国、巴黎实习经历）",
  ],

  skills: [
    "AI Agent 设计",
    "产品经理",
    "SQL",
    "Python",
    "数据分析",
    "A/B 实验",
    "Scrum / SAFe",
    "全栈开发",
    "RAG",
    "Dify",
    "Next.js",
    "Mixpanel",
  ],

  projects: [
    {
      name: "深客松（抖音创变者计划）· 新能源汽车智能售前 AI",
      role: "产品与全栈开发",
      period: "2025.12",
      teamSize: null,
      description:
        "面向新能源汽车选购场景设计的 AI 咨询平台，基于 Dify 构建智能选车系统，集成 AI Chatbot 围绕预算、续航、充电条件等维度的智能问答与个性化推荐，实现自动化售前咨询。",
      outcome: "项目已开源，GitHub: https://github.com/ErwinWong027/findbestev",
    },
    {
      name: "谷歌开发者黑客松 · AI 对话智能生成名片",
      role: "产品经理与全栈开发",
      period: "2025.11",
      teamSize: null,
      description:
        "打造端到端人信息结构化引擎，支持任意格式简历（PDF/扫描件/图片）→ 结构化 JSON → 规范化 PDF → Agent 对话接入。采用文本提取 + OCR + 轻量级 7B 模型分层解析架构。",
      outcome: "GitHub: https://github.com/ErwinWong027/DEEP-HACKATHON-2025",
    },
    {
      name: "AdventureX 黑客松 · 数字分身机器人",
      role: "产品与全栈开发",
      period: "2025.07",
      teamSize: null,
      description:
        "基于 RAG 技术构建具备上下文感知与策略决策能力的对话型 AI Agent，使用 sentence-transformers + LanceDB 构建本地对话案例库，结合 Qwen3 大模型进行两阶段推理，探索 AI 重塑人际连接的最小可行范式。",
      outcome: "GitHub: https://github.com/ErwinWong027/autochat-bot",
    },
    {
      name: "欧莱雅 BrandStorm · 智能水壶过滤器",
      role: "产品管理专家",
      period: "2023.01 - 2023.03",
      teamSize: null,
      description:
        "负责 Brita 新型智能水壶过滤器的开发和上市，通过市场研究引入阻垢和软水功能，与工程和设计团队紧密合作，协调市场营销团队制定推广策略。",
      outcome: "成功推动产品从概念到市场推广，与 90% 竞争者形成差异化。",
    },
  ],

  experiences: [
    {
      company: "求职方舟",
      role: "AI 产品经理",
      period: "2025.04 - 2025.12",
      location: "杭州",
      highlights:
        "主导 AI 自动投递 Agent 产品设计与迭代，推动技术架构从 DOM/HTML+LLM 静态解析升级为 Vision-agent loop 多模态循环决策，自主动态适配 200+ 企业申请页，填充准确率达 92%+，真实用户效率提升 30 倍。注册用户对话到推荐岗位转化率达 45%，两周产出 10+ 条宣传视频吸引 400+ 用户。",
    },
    {
      company: "字节跳动",
      role: "搜索产品实习生（国际电商）",
      period: "2024.09 - 2024.12",
      location: "上海",
      highlights:
        "负责 TikTok 北美市场搜索优化，通过数据分析与 A/B 实验推动排序公式优化（opms+0.5%），独立设计商品卡信任感标签（pv ctr a/b+1%），主导猜你喜欢策略优化并推全实验。",
    },
    {
      company: "Iterative Games",
      role: "游戏经济系统 Web3 产品实习生",
      period: "2023.09 - 2023.12",
      location: "法国巴黎",
      highlights:
        "用 Mixpanel 漏斗分析 NFT 支付流失点，结合 A/B 实验优化支付 UX，简化法币支付流程并增加加密钱包引导步骤，支付转化率提升 4%，成功率提高 7%。",
    },
    {
      company: "CrossPath",
      role: "运营助理实习生",
      period: "2023.06 - 2023.08",
      location: "英国伦敦",
      highlights:
        "负责 Airtable 员工信息数据库维护（准确率 98%+），协助社交媒体推广，运用 Apollo 搭建 3 项业务自动化流程，提升日常工作效率约 30%。",
    },
  ],

  // ============================================================
  // HOW THIS WEBSITE WAS BUILT — the actual AI-assisted process
  // ============================================================
  howThisSiteWasBuilt: {
    summary:
      "这个网站从一份结构化的 realProfile.json 开始，全程通过人机对话用 AI 辅助完成，零手写代码。",
    steps: [
      "起点：准备了一份结构化个人档案 (realProfile.json)，包含教育、实习、项目、技能等原始数据。",
      "规划：向 AI 描述目标受众（招聘方）与设计风格（极简、专业、信任感），AI 生成完整技术方案——技术栈选型 (Next.js 16 + Tailwind CSS 4 + Motion 12)、5 大板块设计、信息层级规划、UX 流程图。",
      "构建：通过自然语言指令逐模块开发，AI 逐一生成源文件：i18n 双语路由、吸顶导航栏、打字动画 Hero、统计数据卡片、项目展示网格、联系表单验证等——即写即测。",
      "迭代：每一轮修改都是一次产品迭代。例如加入 AI 聊天助手功能，以及将内容从虚拟人物替换为真实个人资料。",
    ],
    techStack: [
      "Next.js 16 (App Router, Turbopack, RSC)",
      "TypeScript 5",
      "Tailwind CSS 4 (CSS-first @theme)",
      "Motion 12 (滚动动画)",
      "next-intl (中英双语)",
      "React Hook Form (联系表单)",
      "Qwen-Plus (AI 聊天助手)",
    ],
    tools: ["Cursor (AI IDE)", "Claude (规划与对话)", "Qwen-Plus (聊天 API)"],
  },

  awards: [
    "国际互联网+创新创业大赛北京赛区银奖 (2021)",
    "全球品牌策划大赛全国一等奖 (2021)",
    "全国大学生电子商务三创赛省二等奖 (2021)",
    "国家级大学生创业实践项目立项 (2020-2021)",
    "江西财经大学优秀毕业生（前 5%）",
    "一等学业奖学金",
  ],

  hobbies: "篮球、羽毛球、音乐、看书、算法竞赛、数据分析",

  contact: {
    email: "zihan.wang@edhec.com",
    wechat: "brilliantbiscuit",
    location: "深圳 / 杭州",
  },

  jobIntention: {
    targetRole: "AI 产品经理 / 数据产品经理",
    targetCity: "深圳 / 杭州 / 上海",
    availableDate: "随时",
  },
};
