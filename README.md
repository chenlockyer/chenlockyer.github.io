# 陈洛嘉的个人主页

> 机器人工程师 · 探索智能机器的边界

基于 [Hexo](https://hexo.io/) 的学术风格个人主页，部署于 [GitHub Pages](https://pages.github.com/)。

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/chenlockyer/chenlockyer.github.io.git
cd chenlockyer.github.io

# 安装依赖
npm install

# 本地预览
hexo server
# 访问 http://localhost:4000

# 构建静态文件
hexo generate
```

## 📁 项目结构

```
chenlockyer.github.io/
├── source/                    # 源文件
│   ├── _data/                 # 数据文件（驱动首页内容）
│   │   ├── news.json          # News 动态列表
│   │   └── projects.json      # 项目展示数据
│   ├── _posts/                # 博客文章（Markdown）
│   ├── about/index.md         # 关于页
│   ├── projects/index.md      # 项目展示页
│   ├── friends/index.md       # 友链页
│   └── images/                # 图片资源
├── themes/academic/           # 自定义学术主题
│   ├── layout/                # EJS 模板
│   │   ├── index.ejs          # 首页（个人主页布局）
│   │   ├── post.ejs           # 文章页
│   │   ├── page.ejs           # 通用页面
│   │   └── archive.ejs        # 归档页
│   └── source/css/style.css   # 样式
├── _config.yml                # 站点配置
└── .github/workflows/pages.yml # GitHub Actions 部署
```

## ✍️ 写博客

在 `source/_posts/` 下创建 Markdown 文件，格式：

```markdown
---
title: 文章标题
date: 2026-07-22
categories:
  - ROS
tags:
  - C++
  - Sim2Real
description: 文章简介（显示在首页列表）
---

正文内容...
```

## 📝 更新个人信息

编辑数据文件即可，无需修改模板：

### News 动态 — `source/_data/news.json`
```json
[
  {"date": "2026-05", "text": "项目交付或获奖动态"},
  {"date": "2026-01", "text": "其他事件"}
]
```

### 项目展示 — `source/_data/projects.json`
```json
[
  {
    "name": "项目名称",
    "desc": "一句话描述",
    "tech": ["C++", "ROS", "Python"],
    "link": "https://github.com/...",
    "date": "2026.05"
  }
]
```

### 个人介绍 — `themes/academic/layout/index.ejs`
编辑首页模板中的简介段落、研究方向等文字内容。

## 🖼️ 更换头像

将照片放入 `source/images/avatar.jpg`（建议 400×400 以上，正方形），或替换 `avatar.svg`。

## 🖼️ 项目展示图片

1. 截图放到 `source/images/projects/`，命名用小写英文 + 短横线，如 `multi-robot.jpg`
2. 在 `source/_data/projects.json` 对应项目里加 `"image": "multi-robot.jpg"`（可选，不加则显示占位符）
3. 截图建议 **800×450** 以上（16:9），模板会自动裁剪统一显示，无需手动精确裁切
4. 文件格式推荐 JPG，单张控制在 500KB 以内即可

## 🚢 部署

每次 `git push` 到 `main` 分支，GitHub Actions 自动构建并部署到 GitHub Pages，无需手动操作。

## 🛠️ 技术栈

- **生成器**：[Hexo](https://hexo.io/)
- **主题**：自建 Academic 主题（受 Tairan He / Jon Barron 风格启发）
- **模板**：EJS
- **部署**：GitHub Actions → GitHub Pages
- **字体**：Titillium Web
