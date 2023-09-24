import { Request, Response, NextFunction } from 'express'
import consola from 'consola'

export const catchAllErrorHandler = async (err, req: Request, res: Response, next: NextFunction) => {
  consola.error(err.stack)
  res.status(500).json({ success: false, message: err.message })
};
