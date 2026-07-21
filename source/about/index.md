---
title: 关于我
date: 2026-07-22
type: about
---

## 👋 Hi，我是陈洛嘉

深圳技术大学计算机科学与技术专业本科生（2023-2027），专注于**机器人系统**、**强化学习**和**多模态 AI**。热爱将算法变为实物——让机器人动起来、理解世界、与人交互。

目前在 [GitHub](https://github.com/chenlockyer) 上开源机器人相关项目，欢迎交流。

---

## 🎓 教育经历

{% timeline %}

<!-- node 2023 年 9 月 -->
**深圳技术大学 · 计算机科学与技术 · 本科**
- GPA：3.27 / 4.0（专业前 40%）
- 相关课程：人工智能导论、Prompt 提示词工程、深度学习、计算机视觉与图像处理
- 获奖：
  - 蓝桥杯全国总决赛 C/C++ 优秀奖 · 广东省一等奖
  - 高教社杯大学生数学建模广东省二等奖
  - 2025 CAIP AI 视觉应用广东省二等奖
  - 校长之星奖学金 · 优秀学生二等奖学金
- SZTU 百度人工智能菁英班成员
<!-- endnode -->

{% endtimeline %}

---

## 💼 项目经历

{% timeline %}

<!-- node 2026 年 5 月 -->
### 多机器人集群控制系统 · 组长

通过 TCP 协议与 NTP 时间同步，实现 PC 端对多台 G1 人形机器人的实时集群同步舞蹈表演。

- 基于 unitree_ros2 编写 TCP/wirelesscontroller 桥接节点
- 前端实现指令发送、舞蹈编排等控制面板
- 通过 SSH/SFTP 远程部署，RSA License 管理
- **实际交付 3 家客户**，后续移交售后维护团队
<!-- endnode -->

<!-- node 2026 年 1 月 -->
### G1 机器人远程操控系统

面向 Unitree G1 人形机器人的远程控制系统。

- 基于 ROS + Python/Flask 作为中间件，React 前端 + SQLite 数据库
- 集成图传、路径规划、RViz 位姿可视化、固定点导航
- 支持机器人全身远程控制、肢体动作控制
<!-- endnode -->

<!-- node 2025 年 9 月 -->
### 人形机器人强化学习全身运动控制 · 组长
[🔗 unitree_rl_lab PR #121](https://github.com/unitreerobotics/unitree_rl_lab/pull/121)

基于强化学习实现 G1 人形机器人舞蹈动作训练与部署。

- 使用 GMR 方法从人体动作视频生成参考数据集
- CSV Editor / savgoal 平滑滤波 + Retarget 关标定
- BeyondMimic 模型 + Isaac Lab / MuJoCo 仿真训练
- sim2sim 和 sim2real 全流程验证
- **成功提交 PR 并被官方 unitree_rl_lab 仓库合并**
<!-- endnode -->

<!-- node 2025 年 7 月 -->
### 多模态大模型图像自动标注系统 · 组长
腾讯 Mini 项目

基于 MLLM 的 Text-to-Image 自动标注质量评估体系。

- 构建自动化标注质量评估 pipeline
- 以 MLLM 作为判断模型评测生成图像质量
- **标注速度 168.5 张/小时，一次通过率 90.2%**
- 证明自动化标注系统在实际生产中的有效性
<!-- endnode -->

{% endtimeline %}

---

## 🛠 技能

| 类别 | 技能 |
|------|------|
| **编程语言** | Python, C++, MATLAB, SQL |
| **深度学习** | PyTorch, PaddlePaddle, OpenCV, NumPy, Matplotlib |
| **机器人** | ROS/ROS2, Isaac Lab, MuJoCo, RViz, unitree_ros2 |
| **领域知识** | 强化学习(RL), 模仿学习, Sim2Real, SLAM, 路径规划 |
| **工具** | Git, Docker, Linux, SSH, CMake |

---

## 📬 联系方式

- **邮箱**：[202300202023@stumail.sztu.edu.cn](mailto:202300202023@stumail.sztu.edu.cn)
- **GitHub**：[github.com/chenlockyer](https://github.com/chenlockyer)
- **微信**：HelloWorld_280647
