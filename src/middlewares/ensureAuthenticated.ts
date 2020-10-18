import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

import AppError from '../errors/AppError';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError('JWT Token is missing', 401);
    }

    // Bearer sauaosuifhaosufh

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub } = decoded as TokenPayload; // força a variável decoded a ser do tipo TokenPayload
        
        request.user = {
            id: sub,
        } // usado para mostrar quem é o usuário que está fazendo a requisição na rota autenticada

        return next();
    } catch { // nao precisa passar (error) no typescript se nao quiser usar o 'error'
        throw new AppError('Invalid JWT token', 401)
    }
}