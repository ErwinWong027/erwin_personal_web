# 项目作品展示合并计划

## 需求分析

### 当前结构
- **精选项目 (Projects.tsx)**: 4个项目卡片，2x2网格布局，标题"精选项目"，副标题"从算法设计到工程落地"
- **作品展示 (Gallery.tsx)**: 4个作品卡片，4列网格布局，标题"作品展示"，副标题"我的短视频与教程内容"

### 目标结构
- **合并后**: 单一section，标题"项目作品展示"，副标题"从算法设计到工程落地"
- **布局**: 每行包含"作品卡片（左）+ 项目卡片（右）"的配对组合
- **配对关系**:
  - 作品1（MATLAB 地震信号处理实战）← 项目1（微地震事件检测与分析软件系统）
  - 作品2（BIM 建模从零到一）← 项目2（智慧校园综合楼 BIM 建模项目）
  - 作品3（AI 辅助建站全过程）← 项目3（字节跑动 · 工程数字化实习）
  - 作品4（工程数字化经验分享）← 项目4（东凤汽车 · 施工管理实习）

## 实施步骤

### 1. 创建新的合并组件 `ProjectGallery.tsx`
**文件路径**: `src/components/sections/ProjectGallery.tsx`

**组件结构**:
```
ProjectGallery
├── SectionHeading (title="项目作品展示", subtitle="从算法设计到工程落地")
└── 4个配对卡片行
    ├── 作品卡片（左）- iOS widget风格，3:4比例
    └── 项目卡片（右）- 扩展高度，内容分多行
```

**布局设计**:
- 使用 `grid grid-cols-1 lg:grid-cols-2 gap-6` 实现响应式布局
- 每个配对行包含两个卡片容器
- 作品卡片保持原有样式（rounded-[20px], 3:4比例, 播放按钮覆盖层）
- 项目卡片扩展高度以容纳多行内容

### 2. 项目卡片布局设计
**内容保持原样**，CSS自动换行：
- 标题、角色、日期、描述、标签等内容保持原有文本
- 使用 `flex flex-col` 布局，内容自然流动
- 容器宽度增加时，文本自动换行适应
- 标签使用 `flex-wrap` 自动换行

### 3. 更新国际化文件
**修改文件**: `src/messages/zh.json`, `src/messages/en.json`

**新增命名空间**: `projectGallery`
```json
{
  "projectGallery": {
    "title": "项目作品展示",
    "subtitle": "从算法设计到工程落地",
    // 项目内容（从projects迁移）
    "project1_title": "...",
    "project1_role": "...",
    // 作品内容（从gallery迁移）
    "work1_title": "...",
    "work1_tag": "..."
  }
}
```

### 4. 更新导航和页面结构
**修改文件**:
- `src/components/layout/Navbar.tsx` - 移除"作品展示"单独导航项
- `src/app/[locale]/page.tsx` - 替换Projects和Gallery为ProjectGallery
- `src/messages/zh.json` - 更新nav命名空间

**导航结构**:
```
首页（下拉）
├── AI 助手
├── 关于我
└── 项目作品展示  ← 合并后的导航项
```

### 5. 删除旧组件
**删除文件**:
- `src/components/sections/Projects.tsx`
- `src/components/sections/Gallery.tsx`

**更新导入**: 在 `page.tsx` 中移除旧组件导入

## 技术细节

### 响应式布局
- **桌面端 (lg+)**: 作品卡片和项目卡片并排显示（左右布局）
- **平板/移动端**: 垂直堆叠，作品卡片在上，项目卡片在下

### 样式一致性
- 作品卡片保持iOS widget风格（rounded-[20px], 3:4比例）
- 项目卡片使用与About section一致的卡片样式
- 两者高度对齐，视觉平衡

### 动画效果
- 保持AnimateOnScroll的淡入动画
- 每个配对行延迟0.1s依次出现
- 作品卡片hover效果：lift + shadow + scale
- 项目卡片hover效果：lift + shadow

## 文件修改清单

| 操作 | 文件路径 | 说明 |
|------|---------|------|
| 新建 | `src/components/sections/ProjectGallery.tsx` | 合并组件 |
| 修改 | `src/messages/zh.json` | 添加projectGallery命名空间，更新nav |
| 修改 | `src/messages/en.json` | 同步英文翻译 |
| 修改 | `src/components/layout/Navbar.tsx` | 更新导航结构 |
| 修改 | `src/app/[locale]/page.tsx` | 替换组件引用 |
| 删除 | `src/components/sections/Projects.tsx` | 旧组件（可选保留） |
| 删除 | `src/components/sections/Gallery.tsx` | 旧组件（可选保留） |

## 验证步骤

1. 启动开发服务器 `npm run dev`
2. 检查首页"项目作品展示"section显示正确
3. 验证响应式布局（桌面/平板/移动端）
4. 测试作品卡片点击弹窗功能
5. 验证导航栏"项目作品展示"跳转正确
6. 检查中英文切换功能
7. 运行构建 `npm run build` 确保无错误
