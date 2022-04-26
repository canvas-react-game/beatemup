import { createProxyMiddleware } from "http-proxy-middleware";
import { root, base } from "@/services/API/API.service";

export const apiProxy = createProxyMiddleware(base, {
    target: root,
    changeOrigin: true,
    cookieDomainRewrite: "udc.ya-praktikum.tech",
});
