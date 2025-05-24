export abstract class Failure {
  readonly errorMessage: string | undefined;
  constructor(errorMessage?: string) {
    this.errorMessage = errorMessage;
  }
}

export class ServerFailure extends Failure {
  constructor(errorMessage?: string) {
    super(errorMessage);
  }
}

export class LocalFailure extends Failure {
  constructor(errorMessage?: string) {
    super(errorMessage);
  }
}
