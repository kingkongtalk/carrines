# 部署说明

## 问题解决

原始错误是因为尝试使用 `npx wrangler deploy` 部署 Next.js 项目，但缺少正确的配置。

## 解决方案

### 方案1：使用 Netlify 部署（推荐）

项目已经配置了 `netlify.toml`，可以直接使用 Netlify 部署：

1. 将代码推送到 GitHub
2. 在 Netlify 中连接仓库
3. 使用以下设置：
   - Build command: `npm run build`
   - Publish directory: `.next`

### 方案2：使用 Cloudflare Pages 部署

**重要：不要使用 `npx wrangler deploy`，应该使用 Cloudflare Pages 界面部署**

1. 将代码推送到 GitHub
2. 访问 [dash.cloudflare.com](https://dash.cloudflare.com)
3. 进入 Pages 部分，创建新项目
4. 连接你的 GitHub 仓库
5. 使用以下设置：
   - Framework preset: **None**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (留空)

## 配置更改

1. **next.config.js**: 添加了静态导出配置
   - `output: 'export'` - 启用静态导出
   - `trailingSlash: true` - 添加尾部斜杠

2. **wrangler.toml**: 简化了配置
   - 移除了可能导致问题的 site 配置
   - 保留了基本的构建命令

3. **package.json**: 添加了部署脚本
   - `"deploy": "npm run build"`

## 重要说明

- **不要使用 `npx wrangler deploy`** - 这个命令用于 Cloudflare Workers，不是 Pages
- 使用 Cloudflare Pages 的 Web 界面进行部署
- 静态导出模式下，某些 Next.js 功能可能不可用（如 API 路由）
- 确保所有图片都配置了正确的域名
- 部署前请运行 `npm run build` 测试构建是否成功

## 故障排除

如果遇到构建错误：
1. 确保所有依赖都已安装：`npm install`
2. 检查是否有服务器端代码（API 路由等）
3. 确保图片域名配置正确
4. 查看构建日志中的具体错误信息 