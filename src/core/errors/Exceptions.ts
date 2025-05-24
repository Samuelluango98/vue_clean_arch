export class ServerException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerException';
  }
}

export class LocalException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LocalException';
  }
}
