# 唐睿霖 Riley Tang · 个人网站

基于 **React 18 + Vite** 的单页个人作品集。

## 在线访问

- 正式链接（GitHub Pages）：https://rileytang0905.github.io/personal-website/
- 备用链接：https://24b92f3fbf5c4d8da68fbe386cb81870.app.workbuddy.host
- 主持经历页：/#/hosting
- 戏剧经历页：/#/drama

## 页面结构

| 板块 | 说明 |
|------|------|
| 首页 Hero | 视频背景 + 全屏排版 |
| 关于我 | 教育背景 / 荣誉奖项 / 校园身份文件夹（React Bits Folder 交互） |
| 项目与实践 | 蕾奥规划 / 草图营造 / 城市研究与治理学会 / 服务学习（React Bits AccordionGallery） |
| 能力与技能 | 硬/软技能 + 主持经历入口（React Bits WarpText 标题） |
| 生活与爱好 | 戏剧 / 舞蹈 / 其他 |
| 联系我 | 邮箱 / 电话 |

子页面：主持经历时间线（按年份分组）与戏剧经历页（《花散》《风声》两段舞台经历 + 落笔感想）。

## 本地运行

```bash
npm install
npm run dev      # 开发环境 http://localhost:5173
npm run build    # 生产构建，输出 dist/
npm run preview  # 预览构建结果
```

## 说明

- 路由使用 **HashRouter**（`/`、`/#/hosting`、`/#/drama`），适配任意静态托管，刷新不 404
- 集成 React Bits 组件：AccordionGallery、Folder、WarpText（依赖 gsap、ogl）
- Vite `base: './'`，构建产物可部署在任意路径（根路径或子目录均可）
- `public/` 为全部照片素材，已包含在仓库中
