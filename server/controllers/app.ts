import {Request, Response} from 'express';
import { NextFunction } from 'webpack-dev-server';

// Пока что просто пропускаем через эти роуты к следующему обработчику
export default function (req: Request, res: Response, next: NextFunction) {
    next()
}