import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden11111', HttpStatus.FORBIDDEN);
  }
}
