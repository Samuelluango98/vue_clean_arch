export abstract class Either<L, R> {
  abstract isLeft(): this is Left<L, R>;
  abstract isRight(): this is Right<L, R>;
  abstract value: L | R;
  fold<T>(onLeft: (left: L) => T, onRight: (right: R) => T): T {
    if (this.isLeft()) return onLeft(this.value);
    return onRight((this as Right<L, R>).value);
  }
}

export class Left<L, R> extends Either<L, R> {
  constructor(public readonly value: L) {
    super();
  }

  isLeft(): this is Left<L, R> {
    return true;
  }

  isRight(): this is Right<L, R> {
    return false;
  }
}

export class Right<L, R> extends Either<L, R> {
  constructor(public readonly value: R) {
    super();
  }

  isLeft(): this is Left<L, R> {
    return false;
  }

  isRight(): this is Right<L, R> {
    return true;
  }
}
