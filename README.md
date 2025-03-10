# CyanBlog Frontend

基于 Vue 3 + TypeScript + Vite 构建的现代化博客系统前端。

## 技术栈

- **核心框架：** Vue 3
- **开发语言：** TypeScript
- **构建工具：** Vite
- **UI 框架：** Ant Design Vue
- **状态管理：** Pinia
- **路由管理：** Vue Router
- **HTTP 客户端：** Axios

## 项目特性

- 🚀 基于 Vite 的快速开发和构建
- 💪 TypeScript 支持，提供完整的类型检查
- 🎨 使用 Ant Design Vue 组件库，提供美观的 UI 界面
- 🔒 内置多重安全措施（XSS 防护、CSRF 防护等）
- 📱 响应式设计，支持多种设备
- 🌐 基于 Docker 的部署支持

## 项目结构

```plaintext
src/
├── assets/        # 静态资源
├── components/    # 公共组件
├── layouts/       # 布局组件
├── router/        # 路由配置
├── utils/         # 工具函数
├── views/         # 页面组件
├── App.vue        # 根组件
└── main.ts        # 入口文件
```

## 开发环境

### 系统要求

- Node.js >= 16
- npm >= 7

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 环境配置

项目包含两个环境配置文件：

- `.env`：开发环境配置
- `.env.production`：生产环境配置

## 安全特性

- 内置 CSRF Token 验证
- XSS 防护
- 请求响应拦截器
- 安全的 HTTP 头配置
- Docker 网络隔离

## 部署说明

项目支持 Docker 部署，生产环境中前端服务与后端 API 服务运行在同一 Docker 网络内，通过内部网络进行通信，提高了系统安全性。

## 开发团队

- Created by Trae

## 许可证

[MIT License](LICENSE)


[<img src="https://www.go176.net/content/uploadfile/202309/b5111695853313.png"/>](https://awacode.top/lyxy)