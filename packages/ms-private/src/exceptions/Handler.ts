import { Request, Response, NextFunction } from 'express';

import AppException from './AppException';

class Handler {
  public async handleError(
    error: Error,
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    if (error instanceof AppException) {
      const formattedError = {
        code: error.code,
        status: 'error',
        message: error.message,
        stack: error.stack,
      };

      if (process.env.NODE_ENV !== 'development') {
        delete formattedError.stack;
      }

      return response.status(error.statusCode).json(formattedError);
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
}

export default Handler;
