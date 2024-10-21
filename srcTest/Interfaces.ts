interface Repository<T> {
  create: (obj: T) => T;
  get: () => T;
  delete: (obg: T) => T;
  update: (obj: T) => T;
}

export type { Repository };
