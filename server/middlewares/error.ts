/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { BaseError } from '../common'

const errorHandler = (
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

export default errorHandler
