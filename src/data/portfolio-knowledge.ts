// ============================================================
// Portfolio Knowledge Base
// ============================================================
// This file is the SINGLE SOURCE OF TRUTH for the AI assistant.
// Replace all values below with your own information.
// The AI will ONLY answer based on data provided here.
// ============================================================

export const portfolioKnowledge = {
  name: "吴邪 (Wu Xie)",

  bio: `浙江大学地质工程（勘查地球物理）方向硕士研究生，本科毕业于浙江大学建筑工程专业。
拥有建筑工程与地质工程的复合背景，具备扎实的工程基础与地震数据分析能力。
熟练使用 MATLAB 等工具进行工程与科研建模。
关注地下工程、能源勘探与工程数字化方向。`,

  currentFocus:
    "微地震信号处理与弱事件检测、工程数字化、BIM 技术应用",

  education: [
    {
      school: "浙江大学",
      degree: "硕士",
      major: "地质工程（勘查地球物理）",
      period: "2025.09 - 2028.07",
      details: "地球科学学院，研究方向：微地震信号处理与弱事件检测，导师：张起灵，GPA 3.89/5，专业前 10%",
    },
    {
      school: "浙江大学",
      degree: "本科",
      major: "建筑工程",
      period: "2021.09 - 2025.07",
      details: "建筑工程学院，专业前 5%",
    },
  ],

  strengths: [
    "复合工程背景（建筑工程 + 地质工程/地球物理）",
    "MATLAB 信号处理与科研建模",
    "BIM 建模与工程数字化",
    "结构设计与分析",
    "工程数据系统化整理与管理",
    "CET-6 英语能力",
  ],

  skills: [
    "MATLAB",
    "BIM 建模",
    "地震数据分析",
    "信号处理",
    "结构设计",
    "工程数字化",
    "Python",
    "数据可视化",
  ],

  projects: [
    {
      name: "微地震事件检测与分析软件系统",
      role: "算法设计与系统实现负责人",
      period: "2026.03 - 2027.12",
      teamSize: 3,
      description:
        "针对油气地震勘探与地下工程监测中微地震信号信噪比低、人工拾取效率低的问题，基于 MATLAB 实现微地震信号预处理、能量判据与多特征联合判别算法，完成事件自动检测与初步分类。以第一作者取得软件著作权。",
      outcome: "软件著作权 1 项",
    },
    {
      name: "智慧校园综合楼建筑设计与 BIM 建模项目",
      role: "项目负责人",
      period: "2023.03 - 2024.01",
      teamSize: 5,
      description:
        "以实际校园综合楼为设计对象，独立完成主要结构构件布置与关键节点设计，基于 BIM 技术建立完整建筑信息模型。",
      outcome: "校级建筑设计竞赛一等奖",
    },
  ],

  experiences: [
    {
      company: "字节跑动科技有限公司",
      role: "工程数据与 BIM 技术实习生",
      period: "2024.06 - 2024.09",
      location: "北京",
      highlights:
        "负责 BIM 模型搭建与校核，将分散工程数据转化为可查询数字化资料，参与工程数字化管理流程优化，建立标准化模板。",
    },
    {
      company: "东凤汽车集团有限公司",
      role: "建筑施工管理实习生",
      period: "2023.07 - 2023.10",
      location: "武汉",
      highlights:
        "参与施工进度管理、质量安全检查与资料归档，深入理解「现场—资料—管理决策」的工程管理闭环。",
    },
  ],

  // ============================================================
  // HOW THIS WEBSITE WAS BUILT — the actual AI-assisted process
  // ============================================================
  howThisSiteWasBuilt: {
    summary:
      "这个网站从一份 173 行的 mockProfile.json 开始，全程通过人机对话用 AI 辅助完成，零手写代码。",
    steps: [
      "起点：准备了一份结构化个人档案 (mockProfile.json)，包含教育、实习、项目、技能等原始数据。",
      "规划：向 AI 描述目标受众（招聘方）与设计风格（极简、专业、信任感），AI 生成完整技术方案——技术栈选型 (Next.js 16 + Tailwind CSS 4 + Motion 12)、5 大板块设计、信息层级规划、UX 流程图。",
      "构建：通过自然语言指令逐模块开发，AI 逐一生成 18+ 源文件：i18n 双语路由、吸顶导航栏、打字动画 Hero、统计数据卡片、项目展示网格、联系表单验证等——即写即测。",
      "迭代：每一轮修改都是一次产品迭代。例如 AI 方法论板块从抽象方法论重构为本站真实构建过程复盘，以及后来加入这个 AI 聊天助手功能。",
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

  publications: [
    {
      title: "微地震事件识别与弱信号检测方法研究",
      status: "在研",
      expectedDate: "2027.06",
    },
  ],

  patents: [
    {
      name: "微地震事件检测与分析软件",
      type: "软件著作权",
      date: "2027.12",
    },
  ],

  awards: ["浙江大学建筑设计竞赛一等奖 (2024)", "优秀学生干部"],

  hobbies: "工程制图、地球物理探索、编程",

  contact: {
    email: "wuxie@zju.edu.cn",
    wechat: "wuxie_zju",
    location: "杭州 / 北京",
  },

  jobIntention: {
    targetRole: "地球物理工程师 / 工程数据分析岗",
    targetCity: "杭州 / 北京",
    availableDate: "2028.07",
  },
};
