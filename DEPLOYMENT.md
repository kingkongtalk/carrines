# 部署说明

## 问题解决

原始错误是因为尝试使用 `npx wrangler deploy` 部署 Next.js 项目，但缺少正确的配置。

## 解决方案

### 方案1：使用 Netlify 部署（推荐）

项目已经配置了 `netlify.toml`，可以直接使用 Netlify 部署：

1. 将代码推送到 GitHub
2. 在 Netlify 中连接仓库
3. 使用以下设置：
   - Build command: `bun run build`
   - Publish directory: `.next`

### 方案2：使用 Cloudflare Pages 部署

现在项目已经配置了 `wrangler.toml`，可以使用 Cloudflare Pages 部署：

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 中连接仓库
3. 使用以下设置：
   - Framework preset: None
   - Build command: `bun run build`
   - Build output directory: `out`

## 配置更改

1. **next.config.js**: 添加了静态导出配置
   - `output: 'export'` - 启用静态导出
   - `trailingSlash: true` - 添加尾部斜杠

2. **wrangler.toml**: 创建了 Cloudflare Pages 配置
   - 指定构建命令和输出目录
   - 配置了生产环境变量

3. **package.json**: 添加了部署脚本
   - `"deploy": "bun run build"`

## 注意事项

- 静态导出模式下，某些 Next.js 功能可能不可用（如 API 路由）
- 确保所有图片都配置了正确的域名
- 部署前请运行 `bun run build` 测试构建是否成功 