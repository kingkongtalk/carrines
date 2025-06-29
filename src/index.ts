/**
 * Cloudflare Worker 入口点
 * 用于处理静态网站资源
 */

const worker = {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    // 处理静态资源请求
    const url = new URL(request.url);
    const path = url.pathname;
    
    // 如果是根路径，返回 index.html
    if (path === '/' || path === '') {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }
    
    // 其他路径直接传递给静态资源处理器
    return env.ASSETS.fetch(request);
  }
};

export default worker; 