import { BaseError } from '../common'
import HttpMessages from './httpMessages'
import HttpStatus from './httpStatus'

type ErrorPayload = { [index: string]: any }

export class InternalServerError extends BaseError {
  constructor(
    errorPayload: ErrorPayload = { msg: 'An internal error has occured' },
  ) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpMessages.H500,
      errorPayload,
      false,
    )
  }
}

export class BadRequestError extends BaseError {
  constructor(errorPayload: ErrorPayload) {
    super(
      HttpStatus.BAD_REQUEST,
      HttpMessages.H400,
      errorPayload,
      true /* is Operational */,
    )
  }
}

export class NotFoundError extends BaseError {
  constructor(errorPayload: ErrorPayload = { msg: 'resource does not exist' }) {
    super(HttpStatus.NOT_FOUND, HttpMessages.H404, errorPayload, true)
  }
}

export class UnauthorizedRequest extends BaseError {
  constructor(
    errorPayload: ErrorPayload = {
      msg: 'You are not authorized to access this route',
    },
  ) {
    super(HttpStatus.UNAUTHORIZED, HttpMessages.H401, errorPayload, true)
  }
}
