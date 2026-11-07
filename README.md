# 陈洛嘉 · 个人主页

> 把人形机器人从论文搬到现场

线上：https://chenlockyer.github.io/
工作室：https://chenlockyer.github.io/studio/ （双向互链）

Hexo + 自建 academic 主题，GitHub Actions 自动部署到 `gh-pages`。

## 版式方向

`quiet-instrument` —— 克制本身就是声明。单轴排版、五级字阶、纸白底、单一强调色（G1 面罩 LED 蓝）。

页面上每一张图都是**真机实拍或真实产品界面截图**，没有示意图、没有渲染图、没有 AI 生成图。

## 目录

```
source/
├── _data/
│   ├── projects.json      项目数据（首页「交付过的」与项目页都读它）
│   └── news.json          保留但当前未使用
├── _posts/                文章
├── about/index.md         履历内容（版式由 themes/academic/layout/cv.ejs 控制）
├── projects/index.md      项目页（layout: projects）
├── friends/index.md       工具与链接页
├── images/
│   ├── avatar.jpg         真实证件照（来自简历 PDF）
│   ├── site/              真机实拍
│   ├── projects/          真实界面截图
│   ├── ui/                产品界面截图
│   └── video/             现场视频
└── robots.txt

themes/academic/
├── _config.yml            导航、个人资料、事实数字、联系方式
├── layout/
│   ├── layout.ejs         全站骨架（顶栏 / 页脚 / SEO / JSON-LD）
│   ├── index.ejs          首页
│   ├── post.ejs           文章页
│   ├── page.ejs           通用页（支持 page_class / lead）
│   ├── cv.ejs             履历页
│   ├── projects.ejs       项目页
│   └── archive.ejs        归档页
└── source/
    ├── css/style.css      全部样式（token 在顶部）
    ├── js/main.js         进场动效 + 账本侧预览
    └── fonts/             自托管字体（STIX Two Text + Noto Serif SC 子集）
```

## 本地开发

```bash
npm install
npx hexo server        # http://localhost:4000
npx hexo generate
```

## 两个必须知道的坑

### 1. 字体是子集化的

加了新字（尤其写新文章）后必须重建子集，否则新字会**静默回退成系统字体**，页面上只是「这个字有点怪」。

字符集取 `public/` 里所有 HTML 的实际用字 ∪ GB2312 一级汉字（3755 字），
这样以后写新文章落在一级字范围内就不用重建。

字体源文件在 `.tmp-assets/fonts/`（NotoSerifSC-Regular.otf / SemiBold.otf），不在仓库里。

### 2. 文章 `date` 必须带时间

Hexo 用 `moment()` 按**解析机本地时区**解释 `date`，而 `_config.yml` 里的 `timezone` 不参与 permalink 计算。
CI 跑在 UTC、本地是 UTC+8，只写 `date: 2026-07-22` 会让两边生成**差一天**的路径：

| | 生成路径 |
|---|---|
| 本地 (+8) | `/2026/07/22/2026-07-22-hello-world/` |
| CI (UTC) | `/2026/07/21/2026-07-22-hello-world/` |

结果就是站内链接在线上全 404。正确写法：

```yaml
date: 2026-07-22 12:00:00
```

## 验收

```bash
node "C:\Users\11051\.dsh\skills\design-taste-frontend\scripts\inspect.mjs" <url 或 index.html>
node "C:\Users\11051\.dsh\skills\design-taste-frontend\scripts\lint.mjs" <源文件>
```

当前全部 8 个页面 **0 FAIL**。

## 写文章

```yaml
---
title: 标题                 # 两行内放得下，别太长
date: 2026-11-08 12:00:00    # 必须带时间，见上面第 2 个坑
categories: [机器人]
tags: [ROS, 强化学习]
description: 一句话摘要
hero: /images/site/xxx.jpg   # 可选，文章首屏大图
hero_alt: 图片描述
---
```

## 事实纪律

站上所有数字都必须能对得上真实交付记录，这是硬规矩。

例如：PR #121 目前是「review 中、未合入」——不能写成「已合入」。
