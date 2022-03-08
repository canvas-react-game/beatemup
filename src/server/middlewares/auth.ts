import { Request, Response, NextFunction } from "express";
import { HttpStatuses } from "@/server/utils/httpStatuses";

export const checkAuth = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (req.cookies.uuid && req.cookies.authCookie) {
        next();
    } else {
        res.status(HttpStatuses.Unauthorized).send({ message: "Пользователь не авторизован" });
    }
}