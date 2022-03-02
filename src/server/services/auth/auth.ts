import { NextFunction, Request, Response } from "express";
import { HttpStatuses } from "@/server/utils/httpStatuses";

class AuthService {
    // Авторизован так или иначе
    isAuthenticated: boolean = false;

    // middlewares
    setAuth(req: Request, res: Response, next: NextFunction) {
        this.isAuthenticated = req.cookies.uuid && req.cookies.authCookie;
        next();
    }

    checkAuth(req: Request, res: Response, next: NextFunction) {
        if (this.isAuthenticated) {
            next();
        } else {
            res.status(HttpStatuses.Unauthorized).send({ message: "Пользователь не авторизован" });
        }
    }
}

export default new AuthService();
