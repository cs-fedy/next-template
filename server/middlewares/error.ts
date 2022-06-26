import { Request, Response, NextFunction } from 'express'
import { BaseError } from '../common'

export default (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { statusCode, message, errorPayload } = err

  const response = {
    code: statusCode,
    message,
    error: errorPayload,
  }

  res.status(statusCode).send(response)
}
