/* @ts-ignore */
import rateLimit from "express-rate-limit";

// NOTE: Базовая защита от DDOS
export const limiterMiddleware = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 100,
});
