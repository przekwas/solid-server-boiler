import { Request, Response, NextFunction } from 'express'

export const routeNotFoundHandler = async (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Url Route Not Present!',
  })
}
