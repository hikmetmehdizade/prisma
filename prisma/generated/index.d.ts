
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Workspace
 * 
 */
export type Workspace = {
  uuid: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model WorkspaceMember
 * 
 */
export type WorkspaceMember = {
  uuid: string
  userId: string
  workspaceId: string
  role: WorkspaceMemberRole
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Task
 * 
 */
export type Task = {
  uuid: string
  title: string
  isDone: boolean
  createdAt: Date
  updatedAt: Date
  workspaceId: string
  statusId: string
}

/**
 * Model AssignedMember
 * 
 */
export type AssignedMember = {
  memberId: string
  taskId: string
  role: TaskRole
}

/**
 * Model User
 * 
 */
export type User = {
  uuid: string
  email: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserIdentity
 * 
 */
export type UserIdentity = {
  uuid: string
  email: string
  password: string
  refreshToken: string | null
}

/**
 * Model WorkspaceTaskStatus
 * 
 */
export type WorkspaceTaskStatus = {
  uuid: string
  title: string
  createdAt: Date
  updatedAt: Date
  workspaceId: string
  order: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const TaskRole: {
  CREATOR: 'CREATOR',
  OBSERVER: 'OBSERVER',
  EXECUTOR: 'EXECUTOR'
};

export type TaskRole = (typeof TaskRole)[keyof typeof TaskRole]


export const WorkspaceMemberRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type WorkspaceMemberRole = (typeof WorkspaceMemberRole)[keyof typeof WorkspaceMemberRole]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<GlobalReject>;

  /**
   * `prisma.workspaceMember`: Exposes CRUD operations for the **WorkspaceMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceMembers
    * const workspaceMembers = await prisma.workspaceMember.findMany()
    * ```
    */
  get workspaceMember(): Prisma.WorkspaceMemberDelegate<GlobalReject>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<GlobalReject>;

  /**
   * `prisma.assignedMember`: Exposes CRUD operations for the **AssignedMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignedMembers
    * const assignedMembers = await prisma.assignedMember.findMany()
    * ```
    */
  get assignedMember(): Prisma.AssignedMemberDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userIdentity`: Exposes CRUD operations for the **UserIdentity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserIdentities
    * const userIdentities = await prisma.userIdentity.findMany()
    * ```
    */
  get userIdentity(): Prisma.UserIdentityDelegate<GlobalReject>;

  /**
   * `prisma.workspaceTaskStatus`: Exposes CRUD operations for the **WorkspaceTaskStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceTaskStatuses
    * const workspaceTaskStatuses = await prisma.workspaceTaskStatus.findMany()
    * ```
    */
  get workspaceTaskStatus(): Prisma.WorkspaceTaskStatusDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Workspace: 'Workspace',
    WorkspaceMember: 'WorkspaceMember',
    Task: 'Task',
    AssignedMember: 'AssignedMember',
    User: 'User',
    UserIdentity: 'UserIdentity',
    WorkspaceTaskStatus: 'WorkspaceTaskStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkspaceCountOutputType
   */


  export type WorkspaceCountOutputType = {
    members: number
    tasks: number
    taskStatuses: number
  }

  export type WorkspaceCountOutputTypeSelect = {
    members?: boolean
    tasks?: boolean
    taskStatuses?: boolean
  }

  export type WorkspaceCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkspaceCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceCountOutputTypeArgs)
    ? WorkspaceCountOutputType 
    : S extends { select: any } & (WorkspaceCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WorkspaceCountOutputType ? WorkspaceCountOutputType[P] : never
  } 
      : WorkspaceCountOutputType




  // Custom InputTypes

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     * 
    **/
    select?: WorkspaceCountOutputTypeSelect | null
  }



  /**
   * Count Type WorkspaceMemberCountOutputType
   */


  export type WorkspaceMemberCountOutputType = {
    tasks: number
  }

  export type WorkspaceMemberCountOutputTypeSelect = {
    tasks?: boolean
  }

  export type WorkspaceMemberCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkspaceMemberCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceMemberCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceMemberCountOutputTypeArgs)
    ? WorkspaceMemberCountOutputType 
    : S extends { select: any } & (WorkspaceMemberCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WorkspaceMemberCountOutputType ? WorkspaceMemberCountOutputType[P] : never
  } 
      : WorkspaceMemberCountOutputType




  // Custom InputTypes

  /**
   * WorkspaceMemberCountOutputType without action
   */
  export type WorkspaceMemberCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMemberCountOutputType
     * 
    **/
    select?: WorkspaceMemberCountOutputTypeSelect | null
  }



  /**
   * Count Type TaskCountOutputType
   */


  export type TaskCountOutputType = {
    assignedMembers: number
  }

  export type TaskCountOutputTypeSelect = {
    assignedMembers?: boolean
  }

  export type TaskCountOutputTypeGetPayload<S extends boolean | null | undefined | TaskCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TaskCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TaskCountOutputTypeArgs)
    ? TaskCountOutputType 
    : S extends { select: any } & (TaskCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TaskCountOutputType ? TaskCountOutputType[P] : never
  } 
      : TaskCountOutputType




  // Custom InputTypes

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     * 
    **/
    select?: TaskCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    workspaceParticipation: number
  }

  export type UserCountOutputTypeSelect = {
    workspaceParticipation?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type WorkspaceTaskStatusCountOutputType
   */


  export type WorkspaceTaskStatusCountOutputType = {
    tasks: number
  }

  export type WorkspaceTaskStatusCountOutputTypeSelect = {
    tasks?: boolean
  }

  export type WorkspaceTaskStatusCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkspaceTaskStatusCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceTaskStatusCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceTaskStatusCountOutputTypeArgs)
    ? WorkspaceTaskStatusCountOutputType 
    : S extends { select: any } & (WorkspaceTaskStatusCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WorkspaceTaskStatusCountOutputType ? WorkspaceTaskStatusCountOutputType[P] : never
  } 
      : WorkspaceTaskStatusCountOutputType




  // Custom InputTypes

  /**
   * WorkspaceTaskStatusCountOutputType without action
   */
  export type WorkspaceTaskStatusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatusCountOutputType
     * 
    **/
    select?: WorkspaceTaskStatusCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Workspace
   */


  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    uuid: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    uuid?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    uuid?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    uuid?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs = {
    /**
     * Filter which Workspace to aggregate.
     * 
    **/
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs = {
    where?: WorkspaceWhereInput
    orderBy?: Enumerable<WorkspaceOrderByWithAggregationInput>
    by: Array<WorkspaceScalarFieldEnum>
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }


  export type WorkspaceGroupByOutputType = {
    uuid: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect = {
    uuid?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | WorkspaceMemberFindManyArgs
    tasks?: boolean | TaskFindManyArgs
    taskStatuses?: boolean | WorkspaceTaskStatusFindManyArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }


  export type WorkspaceInclude = {
    members?: boolean | WorkspaceMemberFindManyArgs
    tasks?: boolean | TaskFindManyArgs
    taskStatuses?: boolean | WorkspaceTaskStatusFindManyArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  } 

  export type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Workspace :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceArgs | WorkspaceFindManyArgs)
    ? Workspace  & {
    [P in TrueKeys<S['include']>]:
        P extends 'members' ? Array < WorkspaceMemberGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'tasks' ? Array < TaskGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'taskStatuses' ? Array < WorkspaceTaskStatusGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (WorkspaceArgs | WorkspaceFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'members' ? Array < WorkspaceMemberGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'tasks' ? Array < TaskGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'taskStatuses' ? Array < WorkspaceTaskStatusGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Workspace ? Workspace[P] : never
  } 
      : Workspace


  type WorkspaceCountArgs = Merge<
    Omit<WorkspaceFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceCountAggregateInputType | true
    }
  >

  export interface WorkspaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Workspace'> extends True ? Prisma__WorkspaceClient<WorkspaceGetPayload<T>> : Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null, null>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Workspace'> extends True ? Prisma__WorkspaceClient<WorkspaceGetPayload<T>> : Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null, null>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const workspaceWithUuidOnly = await prisma.workspace.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends WorkspaceFindManyArgs>(
      args?: SelectSubset<T, WorkspaceFindManyArgs>
    ): PrismaPromise<Array<WorkspaceGetPayload<T>>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceCreateArgs>(
      args: SelectSubset<T, WorkspaceCreateArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Create many Workspaces.
     *     @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     *     @example
     *     // Create many Workspaces
     *     const workspace = await prisma.workspace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceDeleteArgs>(
      args: SelectSubset<T, WorkspaceDeleteArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceUpdateArgs>(
      args: SelectSubset<T, WorkspaceUpdateArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceUpsertArgs>(
      args: SelectSubset<T, WorkspaceUpsertArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Find one Workspace that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Find the first Workspace that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    members<T extends WorkspaceMemberFindManyArgs= {}>(args?: Subset<T, WorkspaceMemberFindManyArgs>): PrismaPromise<Array<WorkspaceMemberGetPayload<T>>| Null>;

    tasks<T extends TaskFindManyArgs= {}>(args?: Subset<T, TaskFindManyArgs>): PrismaPromise<Array<TaskGetPayload<T>>| Null>;

    taskStatuses<T extends WorkspaceTaskStatusFindManyArgs= {}>(args?: Subset<T, WorkspaceTaskStatusFindManyArgs>): PrismaPromise<Array<WorkspaceTaskStatusGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Workspace base type for findUnique actions
   */
  export type WorkspaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     * 
    **/
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace: findUnique
   */
  export interface WorkspaceFindUniqueArgs extends WorkspaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace base type for findFirst actions
   */
  export type WorkspaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     * 
    **/
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     * 
    **/
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     * 
    **/
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }

  /**
   * Workspace: findFirst
   */
  export interface WorkspaceFindFirstArgs extends WorkspaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspaces to fetch.
     * 
    **/
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     * 
    **/
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }


  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * The data needed to create a Workspace.
     * 
    **/
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }


  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs = {
    /**
     * The data used to create many Workspaces.
     * 
    **/
    data: Enumerable<WorkspaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * The data needed to update a Workspace.
     * 
    **/
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     * 
    **/
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs = {
    /**
     * The data used to update Workspaces.
     * 
    **/
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     * 
    **/
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     * 
    **/
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     * 
    **/
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }


  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter which Workspace to delete.
     * 
    **/
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs = {
    /**
     * Filter which Workspaces to delete
     * 
    **/
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace: findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs = WorkspaceFindUniqueArgsBase
      

  /**
   * Workspace: findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs = WorkspaceFindFirstArgsBase
      

  /**
   * Workspace without action
   */
  export type WorkspaceArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
  }



  /**
   * Model WorkspaceMember
   */


  export type AggregateWorkspaceMember = {
    _count: WorkspaceMemberCountAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  export type WorkspaceMemberMinAggregateOutputType = {
    uuid: string | null
    userId: string | null
    workspaceId: string | null
    role: WorkspaceMemberRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMemberMaxAggregateOutputType = {
    uuid: string | null
    userId: string | null
    workspaceId: string | null
    role: WorkspaceMemberRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMemberCountAggregateOutputType = {
    uuid: number
    userId: number
    workspaceId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMemberMinAggregateInputType = {
    uuid?: true
    userId?: true
    workspaceId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMemberMaxAggregateInputType = {
    uuid?: true
    userId?: true
    workspaceId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMemberCountAggregateInputType = {
    uuid?: true
    userId?: true
    workspaceId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceMemberAggregateArgs = {
    /**
     * Filter which WorkspaceMember to aggregate.
     * 
    **/
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceMembers
    **/
    _count?: true | WorkspaceMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type GetWorkspaceMemberAggregateType<T extends WorkspaceMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceMember[P]>
      : GetScalarType<T[P], AggregateWorkspaceMember[P]>
  }




  export type WorkspaceMemberGroupByArgs = {
    where?: WorkspaceMemberWhereInput
    orderBy?: Enumerable<WorkspaceMemberOrderByWithAggregationInput>
    by: Array<WorkspaceMemberScalarFieldEnum>
    having?: WorkspaceMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceMemberCountAggregateInputType | true
    _min?: WorkspaceMemberMinAggregateInputType
    _max?: WorkspaceMemberMaxAggregateInputType
  }


  export type WorkspaceMemberGroupByOutputType = {
    uuid: string
    userId: string
    workspaceId: string
    role: WorkspaceMemberRole
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceMemberCountAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  type GetWorkspaceMemberGroupByPayload<T extends WorkspaceMemberGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkspaceMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceMemberSelect = {
    uuid?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    workspace?: boolean | WorkspaceArgs
    workspaceId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | AssignedMemberFindManyArgs
    _count?: boolean | WorkspaceMemberCountOutputTypeArgs
  }


  export type WorkspaceMemberInclude = {
    user?: boolean | UserArgs
    workspace?: boolean | WorkspaceArgs
    tasks?: boolean | AssignedMemberFindManyArgs
    _count?: boolean | WorkspaceMemberCountOutputTypeArgs
  } 

  export type WorkspaceMemberGetPayload<S extends boolean | null | undefined | WorkspaceMemberArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceMember :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceMemberArgs | WorkspaceMemberFindManyArgs)
    ? WorkspaceMember  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'workspace' ? WorkspaceGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'tasks' ? Array < AssignedMemberGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? WorkspaceMemberCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (WorkspaceMemberArgs | WorkspaceMemberFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'workspace' ? WorkspaceGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'tasks' ? Array < AssignedMemberGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? WorkspaceMemberCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof WorkspaceMember ? WorkspaceMember[P] : never
  } 
      : WorkspaceMember


  type WorkspaceMemberCountArgs = Merge<
    Omit<WorkspaceMemberFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceMemberCountAggregateInputType | true
    }
  >

  export interface WorkspaceMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one WorkspaceMember that matches the filter.
     * @param {WorkspaceMemberFindUniqueArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkspaceMember'> extends True ? Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>> : Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T> | null, null>

    /**
     * Find the first WorkspaceMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkspaceMember'> extends True ? Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>> : Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T> | null, null>

    /**
     * Find zero or more WorkspaceMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany()
     * 
     * // Get first 10 WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const workspaceMemberWithUuidOnly = await prisma.workspaceMember.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends WorkspaceMemberFindManyArgs>(
      args?: SelectSubset<T, WorkspaceMemberFindManyArgs>
    ): PrismaPromise<Array<WorkspaceMemberGetPayload<T>>>

    /**
     * Create a WorkspaceMember.
     * @param {WorkspaceMemberCreateArgs} args - Arguments to create a WorkspaceMember.
     * @example
     * // Create one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.create({
     *   data: {
     *     // ... data to create a WorkspaceMember
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceMemberCreateArgs>(
      args: SelectSubset<T, WorkspaceMemberCreateArgs>
    ): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>>

    /**
     * Create many WorkspaceMembers.
     *     @param {WorkspaceMemberCreateManyArgs} args - Arguments to create many WorkspaceMembers.
     *     @example
     *     // Create many WorkspaceMembers
     *     const workspaceMember = await prisma.workspaceMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceMemberCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceMemberCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a WorkspaceMember.
     * @param {WorkspaceMemberDeleteArgs} args - Arguments to delete one WorkspaceMember.
     * @example
     * // Delete one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceMember
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceMemberDeleteArgs>(
      args: SelectSubset<T, WorkspaceMemberDeleteArgs>
    ): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>>

    /**
     * Update one WorkspaceMember.
     * @param {WorkspaceMemberUpdateArgs} args - Arguments to update one WorkspaceMember.
     * @example
     * // Update one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceMemberUpdateArgs>(
      args: SelectSubset<T, WorkspaceMemberUpdateArgs>
    ): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>>

    /**
     * Delete zero or more WorkspaceMembers.
     * @param {WorkspaceMemberDeleteManyArgs} args - Arguments to filter WorkspaceMembers to delete.
     * @example
     * // Delete a few WorkspaceMembers
     * const { count } = await prisma.workspaceMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceMemberDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceMemberDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceMemberUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceMemberUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkspaceMember.
     * @param {WorkspaceMemberUpsertArgs} args - Arguments to update or create a WorkspaceMember.
     * @example
     * // Update or create a WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.upsert({
     *   create: {
     *     // ... data to create a WorkspaceMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceMember we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceMemberUpsertArgs>(
      args: SelectSubset<T, WorkspaceMemberUpsertArgs>
    ): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>>

    /**
     * Find one WorkspaceMember that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkspaceMemberFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceMemberFindUniqueOrThrowArgs>
    ): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>>

    /**
     * Find the first WorkspaceMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceMemberFindFirstOrThrowArgs>
    ): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T>>

    /**
     * Count the number of WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberCountArgs} args - Arguments to filter WorkspaceMembers to count.
     * @example
     * // Count the number of WorkspaceMembers
     * const count = await prisma.workspaceMember.count({
     *   where: {
     *     // ... the filter for the WorkspaceMembers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceMemberCountArgs>(
      args?: Subset<T, WorkspaceMemberCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceMemberAggregateArgs>(args: Subset<T, WorkspaceMemberAggregateArgs>): PrismaPromise<GetWorkspaceMemberAggregateType<T>>

    /**
     * Group by WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceMemberGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceMemberClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    tasks<T extends AssignedMemberFindManyArgs= {}>(args?: Subset<T, AssignedMemberFindManyArgs>): PrismaPromise<Array<AssignedMemberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkspaceMember base type for findUnique actions
   */
  export type WorkspaceMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * Filter, which WorkspaceMember to fetch.
     * 
    **/
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember: findUnique
   */
  export interface WorkspaceMemberFindUniqueArgs extends WorkspaceMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceMember base type for findFirst actions
   */
  export type WorkspaceMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * Filter, which WorkspaceMember to fetch.
     * 
    **/
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     * 
    **/
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     * 
    **/
    distinct?: Enumerable<WorkspaceMemberScalarFieldEnum>
  }

  /**
   * WorkspaceMember: findFirst
   */
  export interface WorkspaceMemberFindFirstArgs extends WorkspaceMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceMember findMany
   */
  export type WorkspaceMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * Filter, which WorkspaceMembers to fetch.
     * 
    **/
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceMembers.
     * 
    **/
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkspaceMemberScalarFieldEnum>
  }


  /**
   * WorkspaceMember create
   */
  export type WorkspaceMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * The data needed to create a WorkspaceMember.
     * 
    **/
    data: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
  }


  /**
   * WorkspaceMember createMany
   */
  export type WorkspaceMemberCreateManyArgs = {
    /**
     * The data used to create many WorkspaceMembers.
     * 
    **/
    data: Enumerable<WorkspaceMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkspaceMember update
   */
  export type WorkspaceMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * The data needed to update a WorkspaceMember.
     * 
    **/
    data: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceMember to update.
     * 
    **/
    where: WorkspaceMemberWhereUniqueInput
  }


  /**
   * WorkspaceMember updateMany
   */
  export type WorkspaceMemberUpdateManyArgs = {
    /**
     * The data used to update WorkspaceMembers.
     * 
    **/
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     * 
    **/
    where?: WorkspaceMemberWhereInput
  }


  /**
   * WorkspaceMember upsert
   */
  export type WorkspaceMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * The filter to search for the WorkspaceMember to update in case it exists.
     * 
    **/
    where: WorkspaceMemberWhereUniqueInput
    /**
     * In case the WorkspaceMember found by the `where` argument doesn't exist, create a new WorkspaceMember with this data.
     * 
    **/
    create: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
    /**
     * In case the WorkspaceMember was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
  }


  /**
   * WorkspaceMember delete
   */
  export type WorkspaceMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
    /**
     * Filter which WorkspaceMember to delete.
     * 
    **/
    where: WorkspaceMemberWhereUniqueInput
  }


  /**
   * WorkspaceMember deleteMany
   */
  export type WorkspaceMemberDeleteManyArgs = {
    /**
     * Filter which WorkspaceMembers to delete
     * 
    **/
    where?: WorkspaceMemberWhereInput
  }


  /**
   * WorkspaceMember: findUniqueOrThrow
   */
  export type WorkspaceMemberFindUniqueOrThrowArgs = WorkspaceMemberFindUniqueArgsBase
      

  /**
   * WorkspaceMember: findFirstOrThrow
   */
  export type WorkspaceMemberFindFirstOrThrowArgs = WorkspaceMemberFindFirstArgsBase
      

  /**
   * WorkspaceMember without action
   */
  export type WorkspaceMemberArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     * 
    **/
    select?: WorkspaceMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceMemberInclude | null
  }



  /**
   * Model Task
   */


  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    uuid: string | null
    title: string | null
    isDone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
    statusId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    uuid: string | null
    title: string | null
    isDone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
    statusId: string | null
  }

  export type TaskCountAggregateOutputType = {
    uuid: number
    title: number
    isDone: number
    createdAt: number
    updatedAt: number
    workspaceId: number
    statusId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    uuid?: true
    title?: true
    isDone?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    statusId?: true
  }

  export type TaskMaxAggregateInputType = {
    uuid?: true
    title?: true
    isDone?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    statusId?: true
  }

  export type TaskCountAggregateInputType = {
    uuid?: true
    title?: true
    isDone?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    statusId?: true
    _all?: true
  }

  export type TaskAggregateArgs = {
    /**
     * Filter which Task to aggregate.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs = {
    where?: TaskWhereInput
    orderBy?: Enumerable<TaskOrderByWithAggregationInput>
    by: Array<TaskScalarFieldEnum>
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }


  export type TaskGroupByOutputType = {
    uuid: string
    title: string
    isDone: boolean
    createdAt: Date
    updatedAt: Date
    workspaceId: string
    statusId: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect = {
    uuid?: boolean
    title?: boolean
    isDone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceArgs
    workspaceId?: boolean
    assignedMembers?: boolean | AssignedMemberFindManyArgs
    status?: boolean | WorkspaceTaskStatusArgs
    statusId?: boolean
    _count?: boolean | TaskCountOutputTypeArgs
  }


  export type TaskInclude = {
    workspace?: boolean | WorkspaceArgs
    assignedMembers?: boolean | AssignedMemberFindManyArgs
    status?: boolean | WorkspaceTaskStatusArgs
    _count?: boolean | TaskCountOutputTypeArgs
  } 

  export type TaskGetPayload<S extends boolean | null | undefined | TaskArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Task :
    S extends undefined ? never :
    S extends { include: any } & (TaskArgs | TaskFindManyArgs)
    ? Task  & {
    [P in TrueKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'assignedMembers' ? Array < AssignedMemberGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'status' ? WorkspaceTaskStatusGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends '_count' ? TaskCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (TaskArgs | TaskFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'assignedMembers' ? Array < AssignedMemberGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'status' ? WorkspaceTaskStatusGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends '_count' ? TaskCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Task ? Task[P] : never
  } 
      : Task


  type TaskCountArgs = Merge<
    Omit<TaskFindManyArgs, 'select' | 'include'> & {
      select?: TaskCountAggregateInputType | true
    }
  >

  export interface TaskDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaskFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Task'> extends True ? Prisma__TaskClient<TaskGetPayload<T>> : Prisma__TaskClient<TaskGetPayload<T> | null, null>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaskFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Task'> extends True ? Prisma__TaskClient<TaskGetPayload<T>> : Prisma__TaskClient<TaskGetPayload<T> | null, null>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const taskWithUuidOnly = await prisma.task.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs>(
      args?: SelectSubset<T, TaskFindManyArgs>
    ): PrismaPromise<Array<TaskGetPayload<T>>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs>(
      args: SelectSubset<T, TaskCreateArgs>
    ): Prisma__TaskClient<TaskGetPayload<T>>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs>(
      args?: SelectSubset<T, TaskCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs>(
      args: SelectSubset<T, TaskDeleteArgs>
    ): Prisma__TaskClient<TaskGetPayload<T>>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs>(
      args: SelectSubset<T, TaskUpdateArgs>
    ): Prisma__TaskClient<TaskGetPayload<T>>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs>(
      args?: SelectSubset<T, TaskDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs>(
      args: SelectSubset<T, TaskUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs>(
      args: SelectSubset<T, TaskUpsertArgs>
    ): Prisma__TaskClient<TaskGetPayload<T>>

    /**
     * Find one Task that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs>
    ): Prisma__TaskClient<TaskGetPayload<T>>

    /**
     * Find the first Task that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs>
    ): Prisma__TaskClient<TaskGetPayload<T>>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaskClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    assignedMembers<T extends AssignedMemberFindManyArgs= {}>(args?: Subset<T, AssignedMemberFindManyArgs>): PrismaPromise<Array<AssignedMemberGetPayload<T>>| Null>;

    status<T extends WorkspaceTaskStatusArgs= {}>(args?: Subset<T, WorkspaceTaskStatusArgs>): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Task base type for findUnique actions
   */
  export type TaskFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Task to fetch.
     * 
    **/
    where: TaskWhereUniqueInput
  }

  /**
   * Task: findUnique
   */
  export interface TaskFindUniqueArgs extends TaskFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task base type for findFirst actions
   */
  export type TaskFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Task to fetch.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     * 
    **/
    distinct?: Enumerable<TaskScalarFieldEnum>
  }

  /**
   * Task: findFirst
   */
  export interface TaskFindFirstArgs extends TaskFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task findMany
   */
  export type TaskFindManyArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Tasks to fetch.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task create
   */
  export type TaskCreateArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The data needed to create a Task.
     * 
    **/
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs = {
    /**
     * The data used to create many Tasks.
     * 
    **/
    data: Enumerable<TaskCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The data needed to update a Task.
     * 
    **/
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs = {
    /**
     * The data used to update Tasks.
     * 
    **/
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     * 
    **/
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The filter to search for the Task to update in case it exists.
     * 
    **/
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     * 
    **/
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter which Task to delete.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs = {
    /**
     * Filter which Tasks to delete
     * 
    **/
    where?: TaskWhereInput
  }


  /**
   * Task: findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs = TaskFindUniqueArgsBase
      

  /**
   * Task: findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs = TaskFindFirstArgsBase
      

  /**
   * Task without action
   */
  export type TaskArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
  }



  /**
   * Model AssignedMember
   */


  export type AggregateAssignedMember = {
    _count: AssignedMemberCountAggregateOutputType | null
    _min: AssignedMemberMinAggregateOutputType | null
    _max: AssignedMemberMaxAggregateOutputType | null
  }

  export type AssignedMemberMinAggregateOutputType = {
    memberId: string | null
    taskId: string | null
    role: TaskRole | null
  }

  export type AssignedMemberMaxAggregateOutputType = {
    memberId: string | null
    taskId: string | null
    role: TaskRole | null
  }

  export type AssignedMemberCountAggregateOutputType = {
    memberId: number
    taskId: number
    role: number
    _all: number
  }


  export type AssignedMemberMinAggregateInputType = {
    memberId?: true
    taskId?: true
    role?: true
  }

  export type AssignedMemberMaxAggregateInputType = {
    memberId?: true
    taskId?: true
    role?: true
  }

  export type AssignedMemberCountAggregateInputType = {
    memberId?: true
    taskId?: true
    role?: true
    _all?: true
  }

  export type AssignedMemberAggregateArgs = {
    /**
     * Filter which AssignedMember to aggregate.
     * 
    **/
    where?: AssignedMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<AssignedMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AssignedMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignedMembers
    **/
    _count?: true | AssignedMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignedMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignedMemberMaxAggregateInputType
  }

  export type GetAssignedMemberAggregateType<T extends AssignedMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignedMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignedMember[P]>
      : GetScalarType<T[P], AggregateAssignedMember[P]>
  }




  export type AssignedMemberGroupByArgs = {
    where?: AssignedMemberWhereInput
    orderBy?: Enumerable<AssignedMemberOrderByWithAggregationInput>
    by: Array<AssignedMemberScalarFieldEnum>
    having?: AssignedMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignedMemberCountAggregateInputType | true
    _min?: AssignedMemberMinAggregateInputType
    _max?: AssignedMemberMaxAggregateInputType
  }


  export type AssignedMemberGroupByOutputType = {
    memberId: string
    taskId: string
    role: TaskRole
    _count: AssignedMemberCountAggregateOutputType | null
    _min: AssignedMemberMinAggregateOutputType | null
    _max: AssignedMemberMaxAggregateOutputType | null
  }

  type GetAssignedMemberGroupByPayload<T extends AssignedMemberGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AssignedMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignedMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignedMemberGroupByOutputType[P]>
            : GetScalarType<T[P], AssignedMemberGroupByOutputType[P]>
        }
      >
    >


  export type AssignedMemberSelect = {
    memberId?: boolean
    member?: boolean | WorkspaceMemberArgs
    taskId?: boolean
    task?: boolean | TaskArgs
    role?: boolean
  }


  export type AssignedMemberInclude = {
    member?: boolean | WorkspaceMemberArgs
    task?: boolean | TaskArgs
  } 

  export type AssignedMemberGetPayload<S extends boolean | null | undefined | AssignedMemberArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AssignedMember :
    S extends undefined ? never :
    S extends { include: any } & (AssignedMemberArgs | AssignedMemberFindManyArgs)
    ? AssignedMember  & {
    [P in TrueKeys<S['include']>]:
        P extends 'member' ? WorkspaceMemberGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'task' ? TaskGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (AssignedMemberArgs | AssignedMemberFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'member' ? WorkspaceMemberGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'task' ? TaskGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof AssignedMember ? AssignedMember[P] : never
  } 
      : AssignedMember


  type AssignedMemberCountArgs = Merge<
    Omit<AssignedMemberFindManyArgs, 'select' | 'include'> & {
      select?: AssignedMemberCountAggregateInputType | true
    }
  >

  export interface AssignedMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one AssignedMember that matches the filter.
     * @param {AssignedMemberFindUniqueArgs} args - Arguments to find a AssignedMember
     * @example
     * // Get one AssignedMember
     * const assignedMember = await prisma.assignedMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssignedMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AssignedMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AssignedMember'> extends True ? Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>> : Prisma__AssignedMemberClient<AssignedMemberGetPayload<T> | null, null>

    /**
     * Find the first AssignedMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberFindFirstArgs} args - Arguments to find a AssignedMember
     * @example
     * // Get one AssignedMember
     * const assignedMember = await prisma.assignedMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssignedMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AssignedMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AssignedMember'> extends True ? Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>> : Prisma__AssignedMemberClient<AssignedMemberGetPayload<T> | null, null>

    /**
     * Find zero or more AssignedMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignedMembers
     * const assignedMembers = await prisma.assignedMember.findMany()
     * 
     * // Get first 10 AssignedMembers
     * const assignedMembers = await prisma.assignedMember.findMany({ take: 10 })
     * 
     * // Only select the `memberId`
     * const assignedMemberWithMemberIdOnly = await prisma.assignedMember.findMany({ select: { memberId: true } })
     * 
    **/
    findMany<T extends AssignedMemberFindManyArgs>(
      args?: SelectSubset<T, AssignedMemberFindManyArgs>
    ): PrismaPromise<Array<AssignedMemberGetPayload<T>>>

    /**
     * Create a AssignedMember.
     * @param {AssignedMemberCreateArgs} args - Arguments to create a AssignedMember.
     * @example
     * // Create one AssignedMember
     * const AssignedMember = await prisma.assignedMember.create({
     *   data: {
     *     // ... data to create a AssignedMember
     *   }
     * })
     * 
    **/
    create<T extends AssignedMemberCreateArgs>(
      args: SelectSubset<T, AssignedMemberCreateArgs>
    ): Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>>

    /**
     * Create many AssignedMembers.
     *     @param {AssignedMemberCreateManyArgs} args - Arguments to create many AssignedMembers.
     *     @example
     *     // Create many AssignedMembers
     *     const assignedMember = await prisma.assignedMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssignedMemberCreateManyArgs>(
      args?: SelectSubset<T, AssignedMemberCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AssignedMember.
     * @param {AssignedMemberDeleteArgs} args - Arguments to delete one AssignedMember.
     * @example
     * // Delete one AssignedMember
     * const AssignedMember = await prisma.assignedMember.delete({
     *   where: {
     *     // ... filter to delete one AssignedMember
     *   }
     * })
     * 
    **/
    delete<T extends AssignedMemberDeleteArgs>(
      args: SelectSubset<T, AssignedMemberDeleteArgs>
    ): Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>>

    /**
     * Update one AssignedMember.
     * @param {AssignedMemberUpdateArgs} args - Arguments to update one AssignedMember.
     * @example
     * // Update one AssignedMember
     * const assignedMember = await prisma.assignedMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssignedMemberUpdateArgs>(
      args: SelectSubset<T, AssignedMemberUpdateArgs>
    ): Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>>

    /**
     * Delete zero or more AssignedMembers.
     * @param {AssignedMemberDeleteManyArgs} args - Arguments to filter AssignedMembers to delete.
     * @example
     * // Delete a few AssignedMembers
     * const { count } = await prisma.assignedMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssignedMemberDeleteManyArgs>(
      args?: SelectSubset<T, AssignedMemberDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignedMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignedMembers
     * const assignedMember = await prisma.assignedMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssignedMemberUpdateManyArgs>(
      args: SelectSubset<T, AssignedMemberUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AssignedMember.
     * @param {AssignedMemberUpsertArgs} args - Arguments to update or create a AssignedMember.
     * @example
     * // Update or create a AssignedMember
     * const assignedMember = await prisma.assignedMember.upsert({
     *   create: {
     *     // ... data to create a AssignedMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignedMember we want to update
     *   }
     * })
    **/
    upsert<T extends AssignedMemberUpsertArgs>(
      args: SelectSubset<T, AssignedMemberUpsertArgs>
    ): Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>>

    /**
     * Find one AssignedMember that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AssignedMemberFindUniqueOrThrowArgs} args - Arguments to find a AssignedMember
     * @example
     * // Get one AssignedMember
     * const assignedMember = await prisma.assignedMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssignedMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AssignedMemberFindUniqueOrThrowArgs>
    ): Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>>

    /**
     * Find the first AssignedMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberFindFirstOrThrowArgs} args - Arguments to find a AssignedMember
     * @example
     * // Get one AssignedMember
     * const assignedMember = await prisma.assignedMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssignedMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AssignedMemberFindFirstOrThrowArgs>
    ): Prisma__AssignedMemberClient<AssignedMemberGetPayload<T>>

    /**
     * Count the number of AssignedMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberCountArgs} args - Arguments to filter AssignedMembers to count.
     * @example
     * // Count the number of AssignedMembers
     * const count = await prisma.assignedMember.count({
     *   where: {
     *     // ... the filter for the AssignedMembers we want to count
     *   }
     * })
    **/
    count<T extends AssignedMemberCountArgs>(
      args?: Subset<T, AssignedMemberCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignedMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignedMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignedMemberAggregateArgs>(args: Subset<T, AssignedMemberAggregateArgs>): PrismaPromise<GetAssignedMemberAggregateType<T>>

    /**
     * Group by AssignedMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignedMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignedMemberGroupByArgs['orderBy'] }
        : { orderBy?: AssignedMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignedMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignedMemberGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignedMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AssignedMemberClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    member<T extends WorkspaceMemberArgs= {}>(args?: Subset<T, WorkspaceMemberArgs>): Prisma__WorkspaceMemberClient<WorkspaceMemberGetPayload<T> | Null>;

    task<T extends TaskArgs= {}>(args?: Subset<T, TaskArgs>): Prisma__TaskClient<TaskGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AssignedMember base type for findUnique actions
   */
  export type AssignedMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * Filter, which AssignedMember to fetch.
     * 
    **/
    where: AssignedMemberWhereUniqueInput
  }

  /**
   * AssignedMember: findUnique
   */
  export interface AssignedMemberFindUniqueArgs extends AssignedMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AssignedMember base type for findFirst actions
   */
  export type AssignedMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * Filter, which AssignedMember to fetch.
     * 
    **/
    where?: AssignedMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<AssignedMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedMembers.
     * 
    **/
    cursor?: AssignedMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedMembers.
     * 
    **/
    distinct?: Enumerable<AssignedMemberScalarFieldEnum>
  }

  /**
   * AssignedMember: findFirst
   */
  export interface AssignedMemberFindFirstArgs extends AssignedMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AssignedMember findMany
   */
  export type AssignedMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * Filter, which AssignedMembers to fetch.
     * 
    **/
    where?: AssignedMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<AssignedMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignedMembers.
     * 
    **/
    cursor?: AssignedMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedMembers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AssignedMemberScalarFieldEnum>
  }


  /**
   * AssignedMember create
   */
  export type AssignedMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * The data needed to create a AssignedMember.
     * 
    **/
    data: XOR<AssignedMemberCreateInput, AssignedMemberUncheckedCreateInput>
  }


  /**
   * AssignedMember createMany
   */
  export type AssignedMemberCreateManyArgs = {
    /**
     * The data used to create many AssignedMembers.
     * 
    **/
    data: Enumerable<AssignedMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AssignedMember update
   */
  export type AssignedMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * The data needed to update a AssignedMember.
     * 
    **/
    data: XOR<AssignedMemberUpdateInput, AssignedMemberUncheckedUpdateInput>
    /**
     * Choose, which AssignedMember to update.
     * 
    **/
    where: AssignedMemberWhereUniqueInput
  }


  /**
   * AssignedMember updateMany
   */
  export type AssignedMemberUpdateManyArgs = {
    /**
     * The data used to update AssignedMembers.
     * 
    **/
    data: XOR<AssignedMemberUpdateManyMutationInput, AssignedMemberUncheckedUpdateManyInput>
    /**
     * Filter which AssignedMembers to update
     * 
    **/
    where?: AssignedMemberWhereInput
  }


  /**
   * AssignedMember upsert
   */
  export type AssignedMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * The filter to search for the AssignedMember to update in case it exists.
     * 
    **/
    where: AssignedMemberWhereUniqueInput
    /**
     * In case the AssignedMember found by the `where` argument doesn't exist, create a new AssignedMember with this data.
     * 
    **/
    create: XOR<AssignedMemberCreateInput, AssignedMemberUncheckedCreateInput>
    /**
     * In case the AssignedMember was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AssignedMemberUpdateInput, AssignedMemberUncheckedUpdateInput>
  }


  /**
   * AssignedMember delete
   */
  export type AssignedMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
    /**
     * Filter which AssignedMember to delete.
     * 
    **/
    where: AssignedMemberWhereUniqueInput
  }


  /**
   * AssignedMember deleteMany
   */
  export type AssignedMemberDeleteManyArgs = {
    /**
     * Filter which AssignedMembers to delete
     * 
    **/
    where?: AssignedMemberWhereInput
  }


  /**
   * AssignedMember: findUniqueOrThrow
   */
  export type AssignedMemberFindUniqueOrThrowArgs = AssignedMemberFindUniqueArgsBase
      

  /**
   * AssignedMember: findFirstOrThrow
   */
  export type AssignedMemberFindFirstOrThrowArgs = AssignedMemberFindFirstArgsBase
      

  /**
   * AssignedMember without action
   */
  export type AssignedMemberArgs = {
    /**
     * Select specific fields to fetch from the AssignedMember
     * 
    **/
    select?: AssignedMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssignedMemberInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uuid: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uuid: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    uuid: number
    email: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uuid?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    uuid?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    uuid?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    uuid: string
    email: string
    firstName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    uuid?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceParticipation?: boolean | WorkspaceMemberFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    workspaceParticipation?: boolean | WorkspaceMemberFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'workspaceParticipation' ? Array < WorkspaceMemberGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'workspaceParticipation' ? Array < WorkspaceMemberGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userWithUuidOnly = await prisma.user.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    workspaceParticipation<T extends WorkspaceMemberFindManyArgs= {}>(args?: Subset<T, WorkspaceMemberFindManyArgs>): PrismaPromise<Array<WorkspaceMemberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserIdentity
   */


  export type AggregateUserIdentity = {
    _count: UserIdentityCountAggregateOutputType | null
    _min: UserIdentityMinAggregateOutputType | null
    _max: UserIdentityMaxAggregateOutputType | null
  }

  export type UserIdentityMinAggregateOutputType = {
    uuid: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
  }

  export type UserIdentityMaxAggregateOutputType = {
    uuid: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
  }

  export type UserIdentityCountAggregateOutputType = {
    uuid: number
    email: number
    password: number
    refreshToken: number
    _all: number
  }


  export type UserIdentityMinAggregateInputType = {
    uuid?: true
    email?: true
    password?: true
    refreshToken?: true
  }

  export type UserIdentityMaxAggregateInputType = {
    uuid?: true
    email?: true
    password?: true
    refreshToken?: true
  }

  export type UserIdentityCountAggregateInputType = {
    uuid?: true
    email?: true
    password?: true
    refreshToken?: true
    _all?: true
  }

  export type UserIdentityAggregateArgs = {
    /**
     * Filter which UserIdentity to aggregate.
     * 
    **/
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     * 
    **/
    orderBy?: Enumerable<UserIdentityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserIdentities
    **/
    _count?: true | UserIdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserIdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserIdentityMaxAggregateInputType
  }

  export type GetUserIdentityAggregateType<T extends UserIdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserIdentity[P]>
      : GetScalarType<T[P], AggregateUserIdentity[P]>
  }




  export type UserIdentityGroupByArgs = {
    where?: UserIdentityWhereInput
    orderBy?: Enumerable<UserIdentityOrderByWithAggregationInput>
    by: Array<UserIdentityScalarFieldEnum>
    having?: UserIdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserIdentityCountAggregateInputType | true
    _min?: UserIdentityMinAggregateInputType
    _max?: UserIdentityMaxAggregateInputType
  }


  export type UserIdentityGroupByOutputType = {
    uuid: string
    email: string
    password: string
    refreshToken: string | null
    _count: UserIdentityCountAggregateOutputType | null
    _min: UserIdentityMinAggregateOutputType | null
    _max: UserIdentityMaxAggregateOutputType | null
  }

  type GetUserIdentityGroupByPayload<T extends UserIdentityGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserIdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserIdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserIdentityGroupByOutputType[P]>
            : GetScalarType<T[P], UserIdentityGroupByOutputType[P]>
        }
      >
    >


  export type UserIdentitySelect = {
    uuid?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
  }


  export type UserIdentityGetPayload<S extends boolean | null | undefined | UserIdentityArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserIdentity :
    S extends undefined ? never :
    S extends { include: any } & (UserIdentityArgs | UserIdentityFindManyArgs)
    ? UserIdentity 
    : S extends { select: any } & (UserIdentityArgs | UserIdentityFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserIdentity ? UserIdentity[P] : never
  } 
      : UserIdentity


  type UserIdentityCountArgs = Merge<
    Omit<UserIdentityFindManyArgs, 'select' | 'include'> & {
      select?: UserIdentityCountAggregateInputType | true
    }
  >

  export interface UserIdentityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserIdentity that matches the filter.
     * @param {UserIdentityFindUniqueArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserIdentityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserIdentityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserIdentity'> extends True ? Prisma__UserIdentityClient<UserIdentityGetPayload<T>> : Prisma__UserIdentityClient<UserIdentityGetPayload<T> | null, null>

    /**
     * Find the first UserIdentity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityFindFirstArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserIdentityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserIdentityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserIdentity'> extends True ? Prisma__UserIdentityClient<UserIdentityGetPayload<T>> : Prisma__UserIdentityClient<UserIdentityGetPayload<T> | null, null>

    /**
     * Find zero or more UserIdentities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserIdentities
     * const userIdentities = await prisma.userIdentity.findMany()
     * 
     * // Get first 10 UserIdentities
     * const userIdentities = await prisma.userIdentity.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userIdentityWithUuidOnly = await prisma.userIdentity.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends UserIdentityFindManyArgs>(
      args?: SelectSubset<T, UserIdentityFindManyArgs>
    ): PrismaPromise<Array<UserIdentityGetPayload<T>>>

    /**
     * Create a UserIdentity.
     * @param {UserIdentityCreateArgs} args - Arguments to create a UserIdentity.
     * @example
     * // Create one UserIdentity
     * const UserIdentity = await prisma.userIdentity.create({
     *   data: {
     *     // ... data to create a UserIdentity
     *   }
     * })
     * 
    **/
    create<T extends UserIdentityCreateArgs>(
      args: SelectSubset<T, UserIdentityCreateArgs>
    ): Prisma__UserIdentityClient<UserIdentityGetPayload<T>>

    /**
     * Create many UserIdentities.
     *     @param {UserIdentityCreateManyArgs} args - Arguments to create many UserIdentities.
     *     @example
     *     // Create many UserIdentities
     *     const userIdentity = await prisma.userIdentity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserIdentityCreateManyArgs>(
      args?: SelectSubset<T, UserIdentityCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserIdentity.
     * @param {UserIdentityDeleteArgs} args - Arguments to delete one UserIdentity.
     * @example
     * // Delete one UserIdentity
     * const UserIdentity = await prisma.userIdentity.delete({
     *   where: {
     *     // ... filter to delete one UserIdentity
     *   }
     * })
     * 
    **/
    delete<T extends UserIdentityDeleteArgs>(
      args: SelectSubset<T, UserIdentityDeleteArgs>
    ): Prisma__UserIdentityClient<UserIdentityGetPayload<T>>

    /**
     * Update one UserIdentity.
     * @param {UserIdentityUpdateArgs} args - Arguments to update one UserIdentity.
     * @example
     * // Update one UserIdentity
     * const userIdentity = await prisma.userIdentity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserIdentityUpdateArgs>(
      args: SelectSubset<T, UserIdentityUpdateArgs>
    ): Prisma__UserIdentityClient<UserIdentityGetPayload<T>>

    /**
     * Delete zero or more UserIdentities.
     * @param {UserIdentityDeleteManyArgs} args - Arguments to filter UserIdentities to delete.
     * @example
     * // Delete a few UserIdentities
     * const { count } = await prisma.userIdentity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserIdentityDeleteManyArgs>(
      args?: SelectSubset<T, UserIdentityDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserIdentities
     * const userIdentity = await prisma.userIdentity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserIdentityUpdateManyArgs>(
      args: SelectSubset<T, UserIdentityUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserIdentity.
     * @param {UserIdentityUpsertArgs} args - Arguments to update or create a UserIdentity.
     * @example
     * // Update or create a UserIdentity
     * const userIdentity = await prisma.userIdentity.upsert({
     *   create: {
     *     // ... data to create a UserIdentity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserIdentity we want to update
     *   }
     * })
    **/
    upsert<T extends UserIdentityUpsertArgs>(
      args: SelectSubset<T, UserIdentityUpsertArgs>
    ): Prisma__UserIdentityClient<UserIdentityGetPayload<T>>

    /**
     * Find one UserIdentity that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserIdentityFindUniqueOrThrowArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserIdentityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserIdentityFindUniqueOrThrowArgs>
    ): Prisma__UserIdentityClient<UserIdentityGetPayload<T>>

    /**
     * Find the first UserIdentity that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityFindFirstOrThrowArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserIdentityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserIdentityFindFirstOrThrowArgs>
    ): Prisma__UserIdentityClient<UserIdentityGetPayload<T>>

    /**
     * Count the number of UserIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityCountArgs} args - Arguments to filter UserIdentities to count.
     * @example
     * // Count the number of UserIdentities
     * const count = await prisma.userIdentity.count({
     *   where: {
     *     // ... the filter for the UserIdentities we want to count
     *   }
     * })
    **/
    count<T extends UserIdentityCountArgs>(
      args?: Subset<T, UserIdentityCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserIdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserIdentityAggregateArgs>(args: Subset<T, UserIdentityAggregateArgs>): PrismaPromise<GetUserIdentityAggregateType<T>>

    /**
     * Group by UserIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserIdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserIdentityGroupByArgs['orderBy'] }
        : { orderBy?: UserIdentityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserIdentityGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserIdentity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserIdentityClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserIdentity base type for findUnique actions
   */
  export type UserIdentityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * Filter, which UserIdentity to fetch.
     * 
    **/
    where: UserIdentityWhereUniqueInput
  }

  /**
   * UserIdentity: findUnique
   */
  export interface UserIdentityFindUniqueArgs extends UserIdentityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserIdentity base type for findFirst actions
   */
  export type UserIdentityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * Filter, which UserIdentity to fetch.
     * 
    **/
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     * 
    **/
    orderBy?: Enumerable<UserIdentityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIdentities.
     * 
    **/
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIdentities.
     * 
    **/
    distinct?: Enumerable<UserIdentityScalarFieldEnum>
  }

  /**
   * UserIdentity: findFirst
   */
  export interface UserIdentityFindFirstArgs extends UserIdentityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserIdentity findMany
   */
  export type UserIdentityFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * Filter, which UserIdentities to fetch.
     * 
    **/
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     * 
    **/
    orderBy?: Enumerable<UserIdentityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserIdentities.
     * 
    **/
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserIdentityScalarFieldEnum>
  }


  /**
   * UserIdentity create
   */
  export type UserIdentityCreateArgs = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * The data needed to create a UserIdentity.
     * 
    **/
    data: XOR<UserIdentityCreateInput, UserIdentityUncheckedCreateInput>
  }


  /**
   * UserIdentity createMany
   */
  export type UserIdentityCreateManyArgs = {
    /**
     * The data used to create many UserIdentities.
     * 
    **/
    data: Enumerable<UserIdentityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserIdentity update
   */
  export type UserIdentityUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * The data needed to update a UserIdentity.
     * 
    **/
    data: XOR<UserIdentityUpdateInput, UserIdentityUncheckedUpdateInput>
    /**
     * Choose, which UserIdentity to update.
     * 
    **/
    where: UserIdentityWhereUniqueInput
  }


  /**
   * UserIdentity updateMany
   */
  export type UserIdentityUpdateManyArgs = {
    /**
     * The data used to update UserIdentities.
     * 
    **/
    data: XOR<UserIdentityUpdateManyMutationInput, UserIdentityUncheckedUpdateManyInput>
    /**
     * Filter which UserIdentities to update
     * 
    **/
    where?: UserIdentityWhereInput
  }


  /**
   * UserIdentity upsert
   */
  export type UserIdentityUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * The filter to search for the UserIdentity to update in case it exists.
     * 
    **/
    where: UserIdentityWhereUniqueInput
    /**
     * In case the UserIdentity found by the `where` argument doesn't exist, create a new UserIdentity with this data.
     * 
    **/
    create: XOR<UserIdentityCreateInput, UserIdentityUncheckedCreateInput>
    /**
     * In case the UserIdentity was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserIdentityUpdateInput, UserIdentityUncheckedUpdateInput>
  }


  /**
   * UserIdentity delete
   */
  export type UserIdentityDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
    /**
     * Filter which UserIdentity to delete.
     * 
    **/
    where: UserIdentityWhereUniqueInput
  }


  /**
   * UserIdentity deleteMany
   */
  export type UserIdentityDeleteManyArgs = {
    /**
     * Filter which UserIdentities to delete
     * 
    **/
    where?: UserIdentityWhereInput
  }


  /**
   * UserIdentity: findUniqueOrThrow
   */
  export type UserIdentityFindUniqueOrThrowArgs = UserIdentityFindUniqueArgsBase
      

  /**
   * UserIdentity: findFirstOrThrow
   */
  export type UserIdentityFindFirstOrThrowArgs = UserIdentityFindFirstArgsBase
      

  /**
   * UserIdentity without action
   */
  export type UserIdentityArgs = {
    /**
     * Select specific fields to fetch from the UserIdentity
     * 
    **/
    select?: UserIdentitySelect | null
  }



  /**
   * Model WorkspaceTaskStatus
   */


  export type AggregateWorkspaceTaskStatus = {
    _count: WorkspaceTaskStatusCountAggregateOutputType | null
    _avg: WorkspaceTaskStatusAvgAggregateOutputType | null
    _sum: WorkspaceTaskStatusSumAggregateOutputType | null
    _min: WorkspaceTaskStatusMinAggregateOutputType | null
    _max: WorkspaceTaskStatusMaxAggregateOutputType | null
  }

  export type WorkspaceTaskStatusAvgAggregateOutputType = {
    order: number | null
  }

  export type WorkspaceTaskStatusSumAggregateOutputType = {
    order: number | null
  }

  export type WorkspaceTaskStatusMinAggregateOutputType = {
    uuid: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
    order: number | null
  }

  export type WorkspaceTaskStatusMaxAggregateOutputType = {
    uuid: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
    order: number | null
  }

  export type WorkspaceTaskStatusCountAggregateOutputType = {
    uuid: number
    title: number
    createdAt: number
    updatedAt: number
    workspaceId: number
    order: number
    _all: number
  }


  export type WorkspaceTaskStatusAvgAggregateInputType = {
    order?: true
  }

  export type WorkspaceTaskStatusSumAggregateInputType = {
    order?: true
  }

  export type WorkspaceTaskStatusMinAggregateInputType = {
    uuid?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    order?: true
  }

  export type WorkspaceTaskStatusMaxAggregateInputType = {
    uuid?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    order?: true
  }

  export type WorkspaceTaskStatusCountAggregateInputType = {
    uuid?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    order?: true
    _all?: true
  }

  export type WorkspaceTaskStatusAggregateArgs = {
    /**
     * Filter which WorkspaceTaskStatus to aggregate.
     * 
    **/
    where?: WorkspaceTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceTaskStatuses to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceTaskStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkspaceTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceTaskStatuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceTaskStatuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceTaskStatuses
    **/
    _count?: true | WorkspaceTaskStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceTaskStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceTaskStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceTaskStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceTaskStatusMaxAggregateInputType
  }

  export type GetWorkspaceTaskStatusAggregateType<T extends WorkspaceTaskStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceTaskStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceTaskStatus[P]>
      : GetScalarType<T[P], AggregateWorkspaceTaskStatus[P]>
  }




  export type WorkspaceTaskStatusGroupByArgs = {
    where?: WorkspaceTaskStatusWhereInput
    orderBy?: Enumerable<WorkspaceTaskStatusOrderByWithAggregationInput>
    by: Array<WorkspaceTaskStatusScalarFieldEnum>
    having?: WorkspaceTaskStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceTaskStatusCountAggregateInputType | true
    _avg?: WorkspaceTaskStatusAvgAggregateInputType
    _sum?: WorkspaceTaskStatusSumAggregateInputType
    _min?: WorkspaceTaskStatusMinAggregateInputType
    _max?: WorkspaceTaskStatusMaxAggregateInputType
  }


  export type WorkspaceTaskStatusGroupByOutputType = {
    uuid: string
    title: string
    createdAt: Date
    updatedAt: Date
    workspaceId: string
    order: number
    _count: WorkspaceTaskStatusCountAggregateOutputType | null
    _avg: WorkspaceTaskStatusAvgAggregateOutputType | null
    _sum: WorkspaceTaskStatusSumAggregateOutputType | null
    _min: WorkspaceTaskStatusMinAggregateOutputType | null
    _max: WorkspaceTaskStatusMaxAggregateOutputType | null
  }

  type GetWorkspaceTaskStatusGroupByPayload<T extends WorkspaceTaskStatusGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkspaceTaskStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceTaskStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceTaskStatusGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceTaskStatusGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceTaskStatusSelect = {
    uuid?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceArgs
    workspaceId?: boolean
    tasks?: boolean | TaskFindManyArgs
    order?: boolean
    _count?: boolean | WorkspaceTaskStatusCountOutputTypeArgs
  }


  export type WorkspaceTaskStatusInclude = {
    workspace?: boolean | WorkspaceArgs
    tasks?: boolean | TaskFindManyArgs
    _count?: boolean | WorkspaceTaskStatusCountOutputTypeArgs
  } 

  export type WorkspaceTaskStatusGetPayload<S extends boolean | null | undefined | WorkspaceTaskStatusArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceTaskStatus :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceTaskStatusArgs | WorkspaceTaskStatusFindManyArgs)
    ? WorkspaceTaskStatus  & {
    [P in TrueKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'tasks' ? Array < TaskGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? WorkspaceTaskStatusCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (WorkspaceTaskStatusArgs | WorkspaceTaskStatusFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'tasks' ? Array < TaskGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? WorkspaceTaskStatusCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof WorkspaceTaskStatus ? WorkspaceTaskStatus[P] : never
  } 
      : WorkspaceTaskStatus


  type WorkspaceTaskStatusCountArgs = Merge<
    Omit<WorkspaceTaskStatusFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceTaskStatusCountAggregateInputType | true
    }
  >

  export interface WorkspaceTaskStatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one WorkspaceTaskStatus that matches the filter.
     * @param {WorkspaceTaskStatusFindUniqueArgs} args - Arguments to find a WorkspaceTaskStatus
     * @example
     * // Get one WorkspaceTaskStatus
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceTaskStatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceTaskStatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkspaceTaskStatus'> extends True ? Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>> : Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T> | null, null>

    /**
     * Find the first WorkspaceTaskStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusFindFirstArgs} args - Arguments to find a WorkspaceTaskStatus
     * @example
     * // Get one WorkspaceTaskStatus
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceTaskStatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceTaskStatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkspaceTaskStatus'> extends True ? Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>> : Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T> | null, null>

    /**
     * Find zero or more WorkspaceTaskStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceTaskStatuses
     * const workspaceTaskStatuses = await prisma.workspaceTaskStatus.findMany()
     * 
     * // Get first 10 WorkspaceTaskStatuses
     * const workspaceTaskStatuses = await prisma.workspaceTaskStatus.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const workspaceTaskStatusWithUuidOnly = await prisma.workspaceTaskStatus.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends WorkspaceTaskStatusFindManyArgs>(
      args?: SelectSubset<T, WorkspaceTaskStatusFindManyArgs>
    ): PrismaPromise<Array<WorkspaceTaskStatusGetPayload<T>>>

    /**
     * Create a WorkspaceTaskStatus.
     * @param {WorkspaceTaskStatusCreateArgs} args - Arguments to create a WorkspaceTaskStatus.
     * @example
     * // Create one WorkspaceTaskStatus
     * const WorkspaceTaskStatus = await prisma.workspaceTaskStatus.create({
     *   data: {
     *     // ... data to create a WorkspaceTaskStatus
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceTaskStatusCreateArgs>(
      args: SelectSubset<T, WorkspaceTaskStatusCreateArgs>
    ): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>>

    /**
     * Create many WorkspaceTaskStatuses.
     *     @param {WorkspaceTaskStatusCreateManyArgs} args - Arguments to create many WorkspaceTaskStatuses.
     *     @example
     *     // Create many WorkspaceTaskStatuses
     *     const workspaceTaskStatus = await prisma.workspaceTaskStatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceTaskStatusCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceTaskStatusCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a WorkspaceTaskStatus.
     * @param {WorkspaceTaskStatusDeleteArgs} args - Arguments to delete one WorkspaceTaskStatus.
     * @example
     * // Delete one WorkspaceTaskStatus
     * const WorkspaceTaskStatus = await prisma.workspaceTaskStatus.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceTaskStatus
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceTaskStatusDeleteArgs>(
      args: SelectSubset<T, WorkspaceTaskStatusDeleteArgs>
    ): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>>

    /**
     * Update one WorkspaceTaskStatus.
     * @param {WorkspaceTaskStatusUpdateArgs} args - Arguments to update one WorkspaceTaskStatus.
     * @example
     * // Update one WorkspaceTaskStatus
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceTaskStatusUpdateArgs>(
      args: SelectSubset<T, WorkspaceTaskStatusUpdateArgs>
    ): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>>

    /**
     * Delete zero or more WorkspaceTaskStatuses.
     * @param {WorkspaceTaskStatusDeleteManyArgs} args - Arguments to filter WorkspaceTaskStatuses to delete.
     * @example
     * // Delete a few WorkspaceTaskStatuses
     * const { count } = await prisma.workspaceTaskStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceTaskStatusDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceTaskStatusDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceTaskStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceTaskStatuses
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceTaskStatusUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceTaskStatusUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkspaceTaskStatus.
     * @param {WorkspaceTaskStatusUpsertArgs} args - Arguments to update or create a WorkspaceTaskStatus.
     * @example
     * // Update or create a WorkspaceTaskStatus
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.upsert({
     *   create: {
     *     // ... data to create a WorkspaceTaskStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceTaskStatus we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceTaskStatusUpsertArgs>(
      args: SelectSubset<T, WorkspaceTaskStatusUpsertArgs>
    ): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>>

    /**
     * Find one WorkspaceTaskStatus that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkspaceTaskStatusFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceTaskStatus
     * @example
     * // Get one WorkspaceTaskStatus
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceTaskStatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceTaskStatusFindUniqueOrThrowArgs>
    ): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>>

    /**
     * Find the first WorkspaceTaskStatus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusFindFirstOrThrowArgs} args - Arguments to find a WorkspaceTaskStatus
     * @example
     * // Get one WorkspaceTaskStatus
     * const workspaceTaskStatus = await prisma.workspaceTaskStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceTaskStatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceTaskStatusFindFirstOrThrowArgs>
    ): Prisma__WorkspaceTaskStatusClient<WorkspaceTaskStatusGetPayload<T>>

    /**
     * Count the number of WorkspaceTaskStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusCountArgs} args - Arguments to filter WorkspaceTaskStatuses to count.
     * @example
     * // Count the number of WorkspaceTaskStatuses
     * const count = await prisma.workspaceTaskStatus.count({
     *   where: {
     *     // ... the filter for the WorkspaceTaskStatuses we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceTaskStatusCountArgs>(
      args?: Subset<T, WorkspaceTaskStatusCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceTaskStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceTaskStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceTaskStatusAggregateArgs>(args: Subset<T, WorkspaceTaskStatusAggregateArgs>): PrismaPromise<GetWorkspaceTaskStatusAggregateType<T>>

    /**
     * Group by WorkspaceTaskStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceTaskStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceTaskStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceTaskStatusGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceTaskStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceTaskStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceTaskStatusGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceTaskStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceTaskStatusClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    tasks<T extends TaskFindManyArgs= {}>(args?: Subset<T, TaskFindManyArgs>): PrismaPromise<Array<TaskGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkspaceTaskStatus base type for findUnique actions
   */
  export type WorkspaceTaskStatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * Filter, which WorkspaceTaskStatus to fetch.
     * 
    **/
    where: WorkspaceTaskStatusWhereUniqueInput
  }

  /**
   * WorkspaceTaskStatus: findUnique
   */
  export interface WorkspaceTaskStatusFindUniqueArgs extends WorkspaceTaskStatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceTaskStatus base type for findFirst actions
   */
  export type WorkspaceTaskStatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * Filter, which WorkspaceTaskStatus to fetch.
     * 
    **/
    where?: WorkspaceTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceTaskStatuses to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceTaskStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceTaskStatuses.
     * 
    **/
    cursor?: WorkspaceTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceTaskStatuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceTaskStatuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceTaskStatuses.
     * 
    **/
    distinct?: Enumerable<WorkspaceTaskStatusScalarFieldEnum>
  }

  /**
   * WorkspaceTaskStatus: findFirst
   */
  export interface WorkspaceTaskStatusFindFirstArgs extends WorkspaceTaskStatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceTaskStatus findMany
   */
  export type WorkspaceTaskStatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * Filter, which WorkspaceTaskStatuses to fetch.
     * 
    **/
    where?: WorkspaceTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceTaskStatuses to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceTaskStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceTaskStatuses.
     * 
    **/
    cursor?: WorkspaceTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceTaskStatuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceTaskStatuses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkspaceTaskStatusScalarFieldEnum>
  }


  /**
   * WorkspaceTaskStatus create
   */
  export type WorkspaceTaskStatusCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * The data needed to create a WorkspaceTaskStatus.
     * 
    **/
    data: XOR<WorkspaceTaskStatusCreateInput, WorkspaceTaskStatusUncheckedCreateInput>
  }


  /**
   * WorkspaceTaskStatus createMany
   */
  export type WorkspaceTaskStatusCreateManyArgs = {
    /**
     * The data used to create many WorkspaceTaskStatuses.
     * 
    **/
    data: Enumerable<WorkspaceTaskStatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkspaceTaskStatus update
   */
  export type WorkspaceTaskStatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * The data needed to update a WorkspaceTaskStatus.
     * 
    **/
    data: XOR<WorkspaceTaskStatusUpdateInput, WorkspaceTaskStatusUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceTaskStatus to update.
     * 
    **/
    where: WorkspaceTaskStatusWhereUniqueInput
  }


  /**
   * WorkspaceTaskStatus updateMany
   */
  export type WorkspaceTaskStatusUpdateManyArgs = {
    /**
     * The data used to update WorkspaceTaskStatuses.
     * 
    **/
    data: XOR<WorkspaceTaskStatusUpdateManyMutationInput, WorkspaceTaskStatusUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceTaskStatuses to update
     * 
    **/
    where?: WorkspaceTaskStatusWhereInput
  }


  /**
   * WorkspaceTaskStatus upsert
   */
  export type WorkspaceTaskStatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * The filter to search for the WorkspaceTaskStatus to update in case it exists.
     * 
    **/
    where: WorkspaceTaskStatusWhereUniqueInput
    /**
     * In case the WorkspaceTaskStatus found by the `where` argument doesn't exist, create a new WorkspaceTaskStatus with this data.
     * 
    **/
    create: XOR<WorkspaceTaskStatusCreateInput, WorkspaceTaskStatusUncheckedCreateInput>
    /**
     * In case the WorkspaceTaskStatus was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkspaceTaskStatusUpdateInput, WorkspaceTaskStatusUncheckedUpdateInput>
  }


  /**
   * WorkspaceTaskStatus delete
   */
  export type WorkspaceTaskStatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
    /**
     * Filter which WorkspaceTaskStatus to delete.
     * 
    **/
    where: WorkspaceTaskStatusWhereUniqueInput
  }


  /**
   * WorkspaceTaskStatus deleteMany
   */
  export type WorkspaceTaskStatusDeleteManyArgs = {
    /**
     * Filter which WorkspaceTaskStatuses to delete
     * 
    **/
    where?: WorkspaceTaskStatusWhereInput
  }


  /**
   * WorkspaceTaskStatus: findUniqueOrThrow
   */
  export type WorkspaceTaskStatusFindUniqueOrThrowArgs = WorkspaceTaskStatusFindUniqueArgsBase
      

  /**
   * WorkspaceTaskStatus: findFirstOrThrow
   */
  export type WorkspaceTaskStatusFindFirstOrThrowArgs = WorkspaceTaskStatusFindFirstArgsBase
      

  /**
   * WorkspaceTaskStatus without action
   */
  export type WorkspaceTaskStatusArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceTaskStatus
     * 
    **/
    select?: WorkspaceTaskStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceTaskStatusInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AssignedMemberScalarFieldEnum: {
    memberId: 'memberId',
    taskId: 'taskId',
    role: 'role'
  };

  export type AssignedMemberScalarFieldEnum = (typeof AssignedMemberScalarFieldEnum)[keyof typeof AssignedMemberScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TaskScalarFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    isDone: 'isDone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workspaceId: 'workspaceId',
    statusId: 'statusId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserIdentityScalarFieldEnum: {
    uuid: 'uuid',
    email: 'email',
    password: 'password',
    refreshToken: 'refreshToken'
  };

  export type UserIdentityScalarFieldEnum = (typeof UserIdentityScalarFieldEnum)[keyof typeof UserIdentityScalarFieldEnum]


  export const UserScalarFieldEnum: {
    uuid: 'uuid',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceMemberScalarFieldEnum: {
    uuid: 'uuid',
    userId: 'userId',
    workspaceId: 'workspaceId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceMemberScalarFieldEnum = (typeof WorkspaceMemberScalarFieldEnum)[keyof typeof WorkspaceMemberScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceTaskStatusScalarFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workspaceId: 'workspaceId',
    order: 'order'
  };

  export type WorkspaceTaskStatusScalarFieldEnum = (typeof WorkspaceTaskStatusScalarFieldEnum)[keyof typeof WorkspaceTaskStatusScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type WorkspaceWhereInput = {
    AND?: Enumerable<WorkspaceWhereInput>
    OR?: Enumerable<WorkspaceWhereInput>
    NOT?: Enumerable<WorkspaceWhereInput>
    uuid?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    members?: WorkspaceMemberListRelationFilter
    tasks?: TaskListRelationFilter
    taskStatuses?: WorkspaceTaskStatusListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: WorkspaceMemberOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    taskStatuses?: WorkspaceTaskStatusOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = {
    uuid?: string
  }

  export type WorkspaceOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WorkspaceMemberWhereInput = {
    AND?: Enumerable<WorkspaceMemberWhereInput>
    OR?: Enumerable<WorkspaceMemberWhereInput>
    NOT?: Enumerable<WorkspaceMemberWhereInput>
    uuid?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    workspaceId?: StringFilter | string
    role?: EnumWorkspaceMemberRoleFilter | WorkspaceMemberRole
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    tasks?: AssignedMemberListRelationFilter
  }

  export type WorkspaceMemberOrderByWithRelationInput = {
    uuid?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: AssignedMemberOrderByRelationAggregateInput
  }

  export type WorkspaceMemberWhereUniqueInput = {
    uuid?: string
  }

  export type WorkspaceMemberOrderByWithAggregationInput = {
    uuid?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceMemberCountOrderByAggregateInput
    _max?: WorkspaceMemberMaxOrderByAggregateInput
    _min?: WorkspaceMemberMinOrderByAggregateInput
  }

  export type WorkspaceMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceMemberScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    workspaceId?: StringWithAggregatesFilter | string
    role?: EnumWorkspaceMemberRoleWithAggregatesFilter | WorkspaceMemberRole
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TaskWhereInput = {
    AND?: Enumerable<TaskWhereInput>
    OR?: Enumerable<TaskWhereInput>
    NOT?: Enumerable<TaskWhereInput>
    uuid?: StringFilter | string
    title?: StringFilter | string
    isDone?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    workspaceId?: StringFilter | string
    assignedMembers?: AssignedMemberListRelationFilter
    status?: XOR<WorkspaceTaskStatusRelationFilter, WorkspaceTaskStatusWhereInput>
    statusId?: StringFilter | string
  }

  export type TaskOrderByWithRelationInput = {
    uuid?: SortOrder
    title?: SortOrder
    isDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    workspaceId?: SortOrder
    assignedMembers?: AssignedMemberOrderByRelationAggregateInput
    status?: WorkspaceTaskStatusOrderByWithRelationInput
    statusId?: SortOrder
  }

  export type TaskWhereUniqueInput = {
    uuid?: string
  }

  export type TaskOrderByWithAggregationInput = {
    uuid?: SortOrder
    title?: SortOrder
    isDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    statusId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaskScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaskScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaskScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    isDone?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    workspaceId?: StringWithAggregatesFilter | string
    statusId?: StringWithAggregatesFilter | string
  }

  export type AssignedMemberWhereInput = {
    AND?: Enumerable<AssignedMemberWhereInput>
    OR?: Enumerable<AssignedMemberWhereInput>
    NOT?: Enumerable<AssignedMemberWhereInput>
    memberId?: StringFilter | string
    member?: XOR<WorkspaceMemberRelationFilter, WorkspaceMemberWhereInput>
    taskId?: StringFilter | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    role?: EnumTaskRoleFilter | TaskRole
  }

  export type AssignedMemberOrderByWithRelationInput = {
    memberId?: SortOrder
    member?: WorkspaceMemberOrderByWithRelationInput
    taskId?: SortOrder
    task?: TaskOrderByWithRelationInput
    role?: SortOrder
  }

  export type AssignedMemberWhereUniqueInput = {
    memberId_taskId?: AssignedMemberMemberIdTaskIdCompoundUniqueInput
  }

  export type AssignedMemberOrderByWithAggregationInput = {
    memberId?: SortOrder
    taskId?: SortOrder
    role?: SortOrder
    _count?: AssignedMemberCountOrderByAggregateInput
    _max?: AssignedMemberMaxOrderByAggregateInput
    _min?: AssignedMemberMinOrderByAggregateInput
  }

  export type AssignedMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AssignedMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<AssignedMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AssignedMemberScalarWhereWithAggregatesInput>
    memberId?: StringWithAggregatesFilter | string
    taskId?: StringWithAggregatesFilter | string
    role?: EnumTaskRoleWithAggregatesFilter | TaskRole
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    uuid?: StringFilter | string
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workspaceParticipation?: WorkspaceMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uuid?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceParticipation?: WorkspaceMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    uuid?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    uuid?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserIdentityWhereInput = {
    AND?: Enumerable<UserIdentityWhereInput>
    OR?: Enumerable<UserIdentityWhereInput>
    NOT?: Enumerable<UserIdentityWhereInput>
    uuid?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    refreshToken?: StringNullableFilter | string | null
  }

  export type UserIdentityOrderByWithRelationInput = {
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserIdentityWhereUniqueInput = {
    uuid?: string
    email?: string
  }

  export type UserIdentityOrderByWithAggregationInput = {
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    _count?: UserIdentityCountOrderByAggregateInput
    _max?: UserIdentityMaxOrderByAggregateInput
    _min?: UserIdentityMinOrderByAggregateInput
  }

  export type UserIdentityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserIdentityScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserIdentityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserIdentityScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    refreshToken?: StringNullableWithAggregatesFilter | string | null
  }

  export type WorkspaceTaskStatusWhereInput = {
    AND?: Enumerable<WorkspaceTaskStatusWhereInput>
    OR?: Enumerable<WorkspaceTaskStatusWhereInput>
    NOT?: Enumerable<WorkspaceTaskStatusWhereInput>
    uuid?: StringFilter | string
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    workspaceId?: StringFilter | string
    tasks?: TaskListRelationFilter
    order?: IntFilter | number
  }

  export type WorkspaceTaskStatusOrderByWithRelationInput = {
    uuid?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    workspaceId?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    order?: SortOrder
  }

  export type WorkspaceTaskStatusWhereUniqueInput = {
    uuid?: string
  }

  export type WorkspaceTaskStatusOrderByWithAggregationInput = {
    uuid?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    order?: SortOrder
    _count?: WorkspaceTaskStatusCountOrderByAggregateInput
    _avg?: WorkspaceTaskStatusAvgOrderByAggregateInput
    _max?: WorkspaceTaskStatusMaxOrderByAggregateInput
    _min?: WorkspaceTaskStatusMinOrderByAggregateInput
    _sum?: WorkspaceTaskStatusSumOrderByAggregateInput
  }

  export type WorkspaceTaskStatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceTaskStatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceTaskStatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceTaskStatusScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    workspaceId?: StringWithAggregatesFilter | string
    order?: IntWithAggregatesFilter | number
  }

  export type WorkspaceCreateInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    taskStatuses?: WorkspaceTaskStatusCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    taskStatuses?: WorkspaceTaskStatusUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    taskStatuses?: WorkspaceTaskStatusUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    taskStatuses?: WorkspaceTaskStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberCreateInput = {
    uuid?: string
    user: UserCreateNestedOneWithoutWorkspaceParticipationInput
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: AssignedMemberCreateNestedManyWithoutMemberInput
  }

  export type WorkspaceMemberUncheckedCreateInput = {
    uuid?: string
    userId: string
    workspaceId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: AssignedMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type WorkspaceMemberUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspaceParticipationNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: AssignedMemberUpdateManyWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: AssignedMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type WorkspaceMemberCreateManyInput = {
    uuid?: string
    userId: string
    workspaceId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceMemberUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    assignedMembers?: AssignedMemberCreateNestedManyWithoutTaskInput
    status: WorkspaceTaskStatusCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    assignedMembers?: AssignedMemberUncheckedCreateNestedManyWithoutTaskInput
    statusId: string
  }

  export type TaskUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    assignedMembers?: AssignedMemberUpdateManyWithoutTaskNestedInput
    status?: WorkspaceTaskStatusUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    assignedMembers?: AssignedMemberUncheckedUpdateManyWithoutTaskNestedInput
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    statusId: string
  }

  export type TaskUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignedMemberCreateInput = {
    member: WorkspaceMemberCreateNestedOneWithoutTasksInput
    task: TaskCreateNestedOneWithoutAssignedMembersInput
    role?: TaskRole
  }

  export type AssignedMemberUncheckedCreateInput = {
    memberId: string
    taskId: string
    role?: TaskRole
  }

  export type AssignedMemberUpdateInput = {
    member?: WorkspaceMemberUpdateOneRequiredWithoutTasksNestedInput
    task?: TaskUpdateOneRequiredWithoutAssignedMembersNestedInput
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberUncheckedUpdateInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberCreateManyInput = {
    memberId: string
    taskId: string
    role?: TaskRole
  }

  export type AssignedMemberUpdateManyMutationInput = {
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberUncheckedUpdateManyInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type UserCreateInput = {
    uuid?: string
    email: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceParticipation?: WorkspaceMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uuid?: string
    email: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceParticipation?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceParticipation?: WorkspaceMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceParticipation?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uuid?: string
    email: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIdentityCreateInput = {
    uuid?: string
    email: string
    password: string
    refreshToken?: string | null
  }

  export type UserIdentityUncheckedCreateInput = {
    uuid?: string
    email: string
    password: string
    refreshToken?: string | null
  }

  export type UserIdentityUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserIdentityUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserIdentityCreateManyInput = {
    uuid?: string
    email: string
    password: string
    refreshToken?: string | null
  }

  export type UserIdentityUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserIdentityUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkspaceTaskStatusCreateInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTaskStatusesInput
    tasks?: TaskCreateNestedManyWithoutStatusInput
    order?: number
  }

  export type WorkspaceTaskStatusUncheckedCreateInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutStatusInput
    order?: number
  }

  export type WorkspaceTaskStatusUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTaskStatusesNestedInput
    tasks?: TaskUpdateManyWithoutStatusNestedInput
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceTaskStatusUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutStatusNestedInput
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceTaskStatusCreateManyInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    order?: number
  }

  export type WorkspaceTaskStatusUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceTaskStatusUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type WorkspaceMemberListRelationFilter = {
    every?: WorkspaceMemberWhereInput
    some?: WorkspaceMemberWhereInput
    none?: WorkspaceMemberWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type WorkspaceTaskStatusListRelationFilter = {
    every?: WorkspaceTaskStatusWhereInput
    some?: WorkspaceTaskStatusWhereInput
    none?: WorkspaceTaskStatusWhereInput
  }

  export type WorkspaceMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceTaskStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkspaceRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type EnumWorkspaceMemberRoleFilter = {
    equals?: WorkspaceMemberRole
    in?: Enumerable<WorkspaceMemberRole>
    notIn?: Enumerable<WorkspaceMemberRole>
    not?: NestedEnumWorkspaceMemberRoleFilter | WorkspaceMemberRole
  }

  export type AssignedMemberListRelationFilter = {
    every?: AssignedMemberWhereInput
    some?: AssignedMemberWhereInput
    none?: AssignedMemberWhereInput
  }

  export type AssignedMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceMemberCountOrderByAggregateInput = {
    uuid?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMemberMaxOrderByAggregateInput = {
    uuid?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMemberMinOrderByAggregateInput = {
    uuid?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWorkspaceMemberRoleWithAggregatesFilter = {
    equals?: WorkspaceMemberRole
    in?: Enumerable<WorkspaceMemberRole>
    notIn?: Enumerable<WorkspaceMemberRole>
    not?: NestedEnumWorkspaceMemberRoleWithAggregatesFilter | WorkspaceMemberRole
    _count?: NestedIntFilter
    _min?: NestedEnumWorkspaceMemberRoleFilter
    _max?: NestedEnumWorkspaceMemberRoleFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type WorkspaceTaskStatusRelationFilter = {
    is?: WorkspaceTaskStatusWhereInput
    isNot?: WorkspaceTaskStatusWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    isDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    statusId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    isDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    statusId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    isDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    statusId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type WorkspaceMemberRelationFilter = {
    is?: WorkspaceMemberWhereInput
    isNot?: WorkspaceMemberWhereInput
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type EnumTaskRoleFilter = {
    equals?: TaskRole
    in?: Enumerable<TaskRole>
    notIn?: Enumerable<TaskRole>
    not?: NestedEnumTaskRoleFilter | TaskRole
  }

  export type AssignedMemberMemberIdTaskIdCompoundUniqueInput = {
    memberId: string
    taskId: string
  }

  export type AssignedMemberCountOrderByAggregateInput = {
    memberId?: SortOrder
    taskId?: SortOrder
    role?: SortOrder
  }

  export type AssignedMemberMaxOrderByAggregateInput = {
    memberId?: SortOrder
    taskId?: SortOrder
    role?: SortOrder
  }

  export type AssignedMemberMinOrderByAggregateInput = {
    memberId?: SortOrder
    taskId?: SortOrder
    role?: SortOrder
  }

  export type EnumTaskRoleWithAggregatesFilter = {
    equals?: TaskRole
    in?: Enumerable<TaskRole>
    notIn?: Enumerable<TaskRole>
    not?: NestedEnumTaskRoleWithAggregatesFilter | TaskRole
    _count?: NestedIntFilter
    _min?: NestedEnumTaskRoleFilter
    _max?: NestedEnumTaskRoleFilter
  }

  export type UserCountOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserIdentityCountOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserIdentityMaxOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserIdentityMinOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type WorkspaceTaskStatusCountOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    order?: SortOrder
  }

  export type WorkspaceTaskStatusAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type WorkspaceTaskStatusMaxOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    order?: SortOrder
  }

  export type WorkspaceTaskStatusMinOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    order?: SortOrder
  }

  export type WorkspaceTaskStatusSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type WorkspaceMemberCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutWorkspaceInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutWorkspaceInput>
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
  }

  export type TaskCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<TaskCreateWithoutWorkspaceInput>, Enumerable<TaskUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutWorkspaceInput>
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type WorkspaceTaskStatusCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<WorkspaceTaskStatusCreateWithoutWorkspaceInput>, Enumerable<WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceTaskStatusCreateOrConnectWithoutWorkspaceInput>
    createMany?: WorkspaceTaskStatusCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
  }

  export type WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutWorkspaceInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutWorkspaceInput>
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<TaskCreateWithoutWorkspaceInput>, Enumerable<TaskUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutWorkspaceInput>
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type WorkspaceTaskStatusUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<WorkspaceTaskStatusCreateWithoutWorkspaceInput>, Enumerable<WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceTaskStatusCreateOrConnectWithoutWorkspaceInput>
    createMany?: WorkspaceTaskStatusCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutWorkspaceInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    set?: Enumerable<WorkspaceMemberWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    delete?: Enumerable<WorkspaceMemberWhereUniqueInput>
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    update?: Enumerable<WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<WorkspaceMemberScalarWhereInput>
  }

  export type TaskUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutWorkspaceInput>, Enumerable<TaskUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type WorkspaceTaskStatusUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<WorkspaceTaskStatusCreateWithoutWorkspaceInput>, Enumerable<WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceTaskStatusCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<WorkspaceTaskStatusUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: WorkspaceTaskStatusCreateManyWorkspaceInputEnvelope
    set?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    delete?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    connect?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    update?: Enumerable<WorkspaceTaskStatusUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<WorkspaceTaskStatusUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<WorkspaceTaskStatusScalarWhereInput>
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutWorkspaceInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    set?: Enumerable<WorkspaceMemberWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    delete?: Enumerable<WorkspaceMemberWhereUniqueInput>
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    update?: Enumerable<WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<WorkspaceMemberScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutWorkspaceInput>, Enumerable<TaskUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type WorkspaceTaskStatusUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<WorkspaceTaskStatusCreateWithoutWorkspaceInput>, Enumerable<WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceTaskStatusCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<WorkspaceTaskStatusUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: WorkspaceTaskStatusCreateManyWorkspaceInputEnvelope
    set?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    delete?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    connect?: Enumerable<WorkspaceTaskStatusWhereUniqueInput>
    update?: Enumerable<WorkspaceTaskStatusUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<WorkspaceTaskStatusUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<WorkspaceTaskStatusScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutWorkspaceParticipationInput = {
    create?: XOR<UserCreateWithoutWorkspaceParticipationInput, UserUncheckedCreateWithoutWorkspaceParticipationInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceParticipationInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutMembersInput = {
    create?: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMembersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type AssignedMemberCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutMemberInput>, Enumerable<AssignedMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutMemberInput>
    createMany?: AssignedMemberCreateManyMemberInputEnvelope
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
  }

  export type AssignedMemberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutMemberInput>, Enumerable<AssignedMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutMemberInput>
    createMany?: AssignedMemberCreateManyMemberInputEnvelope
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutWorkspaceParticipationNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceParticipationInput, UserUncheckedCreateWithoutWorkspaceParticipationInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceParticipationInput
    upsert?: UserUpsertWithoutWorkspaceParticipationInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWorkspaceParticipationInput, UserUncheckedUpdateWithoutWorkspaceParticipationInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMembersInput
    upsert?: WorkspaceUpsertWithoutMembersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutMembersInput, WorkspaceUncheckedUpdateWithoutMembersInput>
  }

  export type EnumWorkspaceMemberRoleFieldUpdateOperationsInput = {
    set?: WorkspaceMemberRole
  }

  export type AssignedMemberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutMemberInput>, Enumerable<AssignedMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<AssignedMemberUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: AssignedMemberCreateManyMemberInputEnvelope
    set?: Enumerable<AssignedMemberWhereUniqueInput>
    disconnect?: Enumerable<AssignedMemberWhereUniqueInput>
    delete?: Enumerable<AssignedMemberWhereUniqueInput>
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
    update?: Enumerable<AssignedMemberUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<AssignedMemberUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<AssignedMemberScalarWhereInput>
  }

  export type AssignedMemberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutMemberInput>, Enumerable<AssignedMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<AssignedMemberUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: AssignedMemberCreateManyMemberInputEnvelope
    set?: Enumerable<AssignedMemberWhereUniqueInput>
    disconnect?: Enumerable<AssignedMemberWhereUniqueInput>
    delete?: Enumerable<AssignedMemberWhereUniqueInput>
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
    update?: Enumerable<AssignedMemberUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<AssignedMemberUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<AssignedMemberScalarWhereInput>
  }

  export type WorkspaceCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTasksInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type AssignedMemberCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutTaskInput>, Enumerable<AssignedMemberUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutTaskInput>
    createMany?: AssignedMemberCreateManyTaskInputEnvelope
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
  }

  export type WorkspaceTaskStatusCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkspaceTaskStatusCreateWithoutTasksInput, WorkspaceTaskStatusUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceTaskStatusCreateOrConnectWithoutTasksInput
    connect?: WorkspaceTaskStatusWhereUniqueInput
  }

  export type AssignedMemberUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutTaskInput>, Enumerable<AssignedMemberUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutTaskInput>
    createMany?: AssignedMemberCreateManyTaskInputEnvelope
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkspaceUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTasksInput
    upsert?: WorkspaceUpsertWithoutTasksInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutTasksInput, WorkspaceUncheckedUpdateWithoutTasksInput>
  }

  export type AssignedMemberUpdateManyWithoutTaskNestedInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutTaskInput>, Enumerable<AssignedMemberUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<AssignedMemberUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: AssignedMemberCreateManyTaskInputEnvelope
    set?: Enumerable<AssignedMemberWhereUniqueInput>
    disconnect?: Enumerable<AssignedMemberWhereUniqueInput>
    delete?: Enumerable<AssignedMemberWhereUniqueInput>
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
    update?: Enumerable<AssignedMemberUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<AssignedMemberUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<AssignedMemberScalarWhereInput>
  }

  export type WorkspaceTaskStatusUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkspaceTaskStatusCreateWithoutTasksInput, WorkspaceTaskStatusUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceTaskStatusCreateOrConnectWithoutTasksInput
    upsert?: WorkspaceTaskStatusUpsertWithoutTasksInput
    connect?: WorkspaceTaskStatusWhereUniqueInput
    update?: XOR<WorkspaceTaskStatusUpdateWithoutTasksInput, WorkspaceTaskStatusUncheckedUpdateWithoutTasksInput>
  }

  export type AssignedMemberUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<Enumerable<AssignedMemberCreateWithoutTaskInput>, Enumerable<AssignedMemberUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<AssignedMemberCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<AssignedMemberUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: AssignedMemberCreateManyTaskInputEnvelope
    set?: Enumerable<AssignedMemberWhereUniqueInput>
    disconnect?: Enumerable<AssignedMemberWhereUniqueInput>
    delete?: Enumerable<AssignedMemberWhereUniqueInput>
    connect?: Enumerable<AssignedMemberWhereUniqueInput>
    update?: Enumerable<AssignedMemberUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<AssignedMemberUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<AssignedMemberScalarWhereInput>
  }

  export type WorkspaceMemberCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkspaceMemberCreateWithoutTasksInput, WorkspaceMemberUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutTasksInput
    connect?: WorkspaceMemberWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutAssignedMembersInput = {
    create?: XOR<TaskCreateWithoutAssignedMembersInput, TaskUncheckedCreateWithoutAssignedMembersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedMembersInput
    connect?: TaskWhereUniqueInput
  }

  export type WorkspaceMemberUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutTasksInput, WorkspaceMemberUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutTasksInput
    upsert?: WorkspaceMemberUpsertWithoutTasksInput
    connect?: WorkspaceMemberWhereUniqueInput
    update?: XOR<WorkspaceMemberUpdateWithoutTasksInput, WorkspaceMemberUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUpdateOneRequiredWithoutAssignedMembersNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedMembersInput, TaskUncheckedCreateWithoutAssignedMembersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedMembersInput
    upsert?: TaskUpsertWithoutAssignedMembersInput
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutAssignedMembersInput, TaskUncheckedUpdateWithoutAssignedMembersInput>
  }

  export type EnumTaskRoleFieldUpdateOperationsInput = {
    set?: TaskRole
  }

  export type WorkspaceMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutUserInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutUserInput>
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
  }

  export type WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutUserInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutUserInput>
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
  }

  export type WorkspaceMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutUserInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    set?: Enumerable<WorkspaceMemberWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    delete?: Enumerable<WorkspaceMemberWhereUniqueInput>
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    update?: Enumerable<WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WorkspaceMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WorkspaceMemberScalarWhereInput>
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WorkspaceMemberCreateWithoutUserInput>, Enumerable<WorkspaceMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkspaceMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    set?: Enumerable<WorkspaceMemberWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    delete?: Enumerable<WorkspaceMemberWhereUniqueInput>
    connect?: Enumerable<WorkspaceMemberWhereUniqueInput>
    update?: Enumerable<WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WorkspaceMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WorkspaceMemberScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkspaceCreateNestedOneWithoutTaskStatusesInput = {
    create?: XOR<WorkspaceCreateWithoutTaskStatusesInput, WorkspaceUncheckedCreateWithoutTaskStatusesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTaskStatusesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<TaskCreateWithoutStatusInput>, Enumerable<TaskUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutStatusInput>
    createMany?: TaskCreateManyStatusInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<TaskCreateWithoutStatusInput>, Enumerable<TaskUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutStatusInput>
    createMany?: TaskCreateManyStatusInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutTaskStatusesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTaskStatusesInput, WorkspaceUncheckedCreateWithoutTaskStatusesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTaskStatusesInput
    upsert?: WorkspaceUpsertWithoutTaskStatusesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutTaskStatusesInput, WorkspaceUncheckedUpdateWithoutTaskStatusesInput>
  }

  export type TaskUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutStatusInput>, Enumerable<TaskUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: TaskCreateManyStatusInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutStatusInput>, Enumerable<TaskUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: TaskCreateManyStatusInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumWorkspaceMemberRoleFilter = {
    equals?: WorkspaceMemberRole
    in?: Enumerable<WorkspaceMemberRole>
    notIn?: Enumerable<WorkspaceMemberRole>
    not?: NestedEnumWorkspaceMemberRoleFilter | WorkspaceMemberRole
  }

  export type NestedEnumWorkspaceMemberRoleWithAggregatesFilter = {
    equals?: WorkspaceMemberRole
    in?: Enumerable<WorkspaceMemberRole>
    notIn?: Enumerable<WorkspaceMemberRole>
    not?: NestedEnumWorkspaceMemberRoleWithAggregatesFilter | WorkspaceMemberRole
    _count?: NestedIntFilter
    _min?: NestedEnumWorkspaceMemberRoleFilter
    _max?: NestedEnumWorkspaceMemberRoleFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumTaskRoleFilter = {
    equals?: TaskRole
    in?: Enumerable<TaskRole>
    notIn?: Enumerable<TaskRole>
    not?: NestedEnumTaskRoleFilter | TaskRole
  }

  export type NestedEnumTaskRoleWithAggregatesFilter = {
    equals?: TaskRole
    in?: Enumerable<TaskRole>
    notIn?: Enumerable<TaskRole>
    not?: NestedEnumTaskRoleWithAggregatesFilter | TaskRole
    _count?: NestedIntFilter
    _min?: NestedEnumTaskRoleFilter
    _max?: NestedEnumTaskRoleFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type WorkspaceMemberCreateWithoutWorkspaceInput = {
    uuid?: string
    user: UserCreateNestedOneWithoutWorkspaceParticipationInput
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: AssignedMemberCreateNestedManyWithoutMemberInput
  }

  export type WorkspaceMemberUncheckedCreateWithoutWorkspaceInput = {
    uuid?: string
    userId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: AssignedMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type WorkspaceMemberCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<WorkspaceMemberCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutWorkspaceInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedMembers?: AssignedMemberCreateNestedManyWithoutTaskInput
    status: WorkspaceTaskStatusCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutWorkspaceInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedMembers?: AssignedMemberUncheckedCreateNestedManyWithoutTaskInput
    statusId: string
  }

  export type TaskCreateOrConnectWithoutWorkspaceInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput>
  }

  export type TaskCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<TaskCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceTaskStatusCreateWithoutWorkspaceInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutStatusInput
    order?: number
  }

  export type WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutStatusInput
    order?: number
  }

  export type WorkspaceTaskStatusCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceTaskStatusWhereUniqueInput
    create: XOR<WorkspaceTaskStatusCreateWithoutWorkspaceInput, WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceTaskStatusCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<WorkspaceTaskStatusCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    update: XOR<WorkspaceMemberUpdateWithoutWorkspaceInput, WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    data: XOR<WorkspaceMemberUpdateWithoutWorkspaceInput, WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceMemberScalarWhereInput
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyWithoutMembersInput>
  }

  export type WorkspaceMemberScalarWhereInput = {
    AND?: Enumerable<WorkspaceMemberScalarWhereInput>
    OR?: Enumerable<WorkspaceMemberScalarWhereInput>
    NOT?: Enumerable<WorkspaceMemberScalarWhereInput>
    uuid?: StringFilter | string
    userId?: StringFilter | string
    workspaceId?: StringFilter | string
    role?: EnumWorkspaceMemberRoleFilter | WorkspaceMemberRole
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutWorkspaceInput, TaskUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutWorkspaceInput, TaskUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TaskUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasksInput>
  }

  export type TaskScalarWhereInput = {
    AND?: Enumerable<TaskScalarWhereInput>
    OR?: Enumerable<TaskScalarWhereInput>
    NOT?: Enumerable<TaskScalarWhereInput>
    uuid?: StringFilter | string
    title?: StringFilter | string
    isDone?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workspaceId?: StringFilter | string
    statusId?: StringFilter | string
  }

  export type WorkspaceTaskStatusUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceTaskStatusWhereUniqueInput
    update: XOR<WorkspaceTaskStatusUpdateWithoutWorkspaceInput, WorkspaceTaskStatusUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceTaskStatusCreateWithoutWorkspaceInput, WorkspaceTaskStatusUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceTaskStatusUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceTaskStatusWhereUniqueInput
    data: XOR<WorkspaceTaskStatusUpdateWithoutWorkspaceInput, WorkspaceTaskStatusUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceTaskStatusUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceTaskStatusScalarWhereInput
    data: XOR<WorkspaceTaskStatusUpdateManyMutationInput, WorkspaceTaskStatusUncheckedUpdateManyWithoutTaskStatusesInput>
  }

  export type WorkspaceTaskStatusScalarWhereInput = {
    AND?: Enumerable<WorkspaceTaskStatusScalarWhereInput>
    OR?: Enumerable<WorkspaceTaskStatusScalarWhereInput>
    NOT?: Enumerable<WorkspaceTaskStatusScalarWhereInput>
    uuid?: StringFilter | string
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workspaceId?: StringFilter | string
    order?: IntFilter | number
  }

  export type UserCreateWithoutWorkspaceParticipationInput = {
    uuid?: string
    email: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWorkspaceParticipationInput = {
    uuid?: string
    email: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWorkspaceParticipationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspaceParticipationInput, UserUncheckedCreateWithoutWorkspaceParticipationInput>
  }

  export type WorkspaceCreateWithoutMembersInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    taskStatuses?: WorkspaceTaskStatusCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutMembersInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    taskStatuses?: WorkspaceTaskStatusUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutMembersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
  }

  export type AssignedMemberCreateWithoutMemberInput = {
    task: TaskCreateNestedOneWithoutAssignedMembersInput
    role?: TaskRole
  }

  export type AssignedMemberUncheckedCreateWithoutMemberInput = {
    taskId: string
    role?: TaskRole
  }

  export type AssignedMemberCreateOrConnectWithoutMemberInput = {
    where: AssignedMemberWhereUniqueInput
    create: XOR<AssignedMemberCreateWithoutMemberInput, AssignedMemberUncheckedCreateWithoutMemberInput>
  }

  export type AssignedMemberCreateManyMemberInputEnvelope = {
    data: Enumerable<AssignedMemberCreateManyMemberInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkspaceParticipationInput = {
    update: XOR<UserUpdateWithoutWorkspaceParticipationInput, UserUncheckedUpdateWithoutWorkspaceParticipationInput>
    create: XOR<UserCreateWithoutWorkspaceParticipationInput, UserUncheckedCreateWithoutWorkspaceParticipationInput>
  }

  export type UserUpdateWithoutWorkspaceParticipationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWorkspaceParticipationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUpsertWithoutMembersInput = {
    update: XOR<WorkspaceUpdateWithoutMembersInput, WorkspaceUncheckedUpdateWithoutMembersInput>
    create: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
  }

  export type WorkspaceUpdateWithoutMembersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    taskStatuses?: WorkspaceTaskStatusUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutMembersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    taskStatuses?: WorkspaceTaskStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type AssignedMemberUpsertWithWhereUniqueWithoutMemberInput = {
    where: AssignedMemberWhereUniqueInput
    update: XOR<AssignedMemberUpdateWithoutMemberInput, AssignedMemberUncheckedUpdateWithoutMemberInput>
    create: XOR<AssignedMemberCreateWithoutMemberInput, AssignedMemberUncheckedCreateWithoutMemberInput>
  }

  export type AssignedMemberUpdateWithWhereUniqueWithoutMemberInput = {
    where: AssignedMemberWhereUniqueInput
    data: XOR<AssignedMemberUpdateWithoutMemberInput, AssignedMemberUncheckedUpdateWithoutMemberInput>
  }

  export type AssignedMemberUpdateManyWithWhereWithoutMemberInput = {
    where: AssignedMemberScalarWhereInput
    data: XOR<AssignedMemberUpdateManyMutationInput, AssignedMemberUncheckedUpdateManyWithoutTasksInput>
  }

  export type AssignedMemberScalarWhereInput = {
    AND?: Enumerable<AssignedMemberScalarWhereInput>
    OR?: Enumerable<AssignedMemberScalarWhereInput>
    NOT?: Enumerable<AssignedMemberScalarWhereInput>
    memberId?: StringFilter | string
    taskId?: StringFilter | string
    role?: EnumTaskRoleFilter | TaskRole
  }

  export type WorkspaceCreateWithoutTasksInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    taskStatuses?: WorkspaceTaskStatusCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTasksInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    taskStatuses?: WorkspaceTaskStatusUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTasksInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
  }

  export type AssignedMemberCreateWithoutTaskInput = {
    member: WorkspaceMemberCreateNestedOneWithoutTasksInput
    role?: TaskRole
  }

  export type AssignedMemberUncheckedCreateWithoutTaskInput = {
    memberId: string
    role?: TaskRole
  }

  export type AssignedMemberCreateOrConnectWithoutTaskInput = {
    where: AssignedMemberWhereUniqueInput
    create: XOR<AssignedMemberCreateWithoutTaskInput, AssignedMemberUncheckedCreateWithoutTaskInput>
  }

  export type AssignedMemberCreateManyTaskInputEnvelope = {
    data: Enumerable<AssignedMemberCreateManyTaskInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceTaskStatusCreateWithoutTasksInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTaskStatusesInput
    order?: number
  }

  export type WorkspaceTaskStatusUncheckedCreateWithoutTasksInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    order?: number
  }

  export type WorkspaceTaskStatusCreateOrConnectWithoutTasksInput = {
    where: WorkspaceTaskStatusWhereUniqueInput
    create: XOR<WorkspaceTaskStatusCreateWithoutTasksInput, WorkspaceTaskStatusUncheckedCreateWithoutTasksInput>
  }

  export type WorkspaceUpsertWithoutTasksInput = {
    update: XOR<WorkspaceUpdateWithoutTasksInput, WorkspaceUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
  }

  export type WorkspaceUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    taskStatuses?: WorkspaceTaskStatusUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    taskStatuses?: WorkspaceTaskStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type AssignedMemberUpsertWithWhereUniqueWithoutTaskInput = {
    where: AssignedMemberWhereUniqueInput
    update: XOR<AssignedMemberUpdateWithoutTaskInput, AssignedMemberUncheckedUpdateWithoutTaskInput>
    create: XOR<AssignedMemberCreateWithoutTaskInput, AssignedMemberUncheckedCreateWithoutTaskInput>
  }

  export type AssignedMemberUpdateWithWhereUniqueWithoutTaskInput = {
    where: AssignedMemberWhereUniqueInput
    data: XOR<AssignedMemberUpdateWithoutTaskInput, AssignedMemberUncheckedUpdateWithoutTaskInput>
  }

  export type AssignedMemberUpdateManyWithWhereWithoutTaskInput = {
    where: AssignedMemberScalarWhereInput
    data: XOR<AssignedMemberUpdateManyMutationInput, AssignedMemberUncheckedUpdateManyWithoutAssignedMembersInput>
  }

  export type WorkspaceTaskStatusUpsertWithoutTasksInput = {
    update: XOR<WorkspaceTaskStatusUpdateWithoutTasksInput, WorkspaceTaskStatusUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkspaceTaskStatusCreateWithoutTasksInput, WorkspaceTaskStatusUncheckedCreateWithoutTasksInput>
  }

  export type WorkspaceTaskStatusUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTaskStatusesNestedInput
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceTaskStatusUncheckedUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceMemberCreateWithoutTasksInput = {
    uuid?: string
    user: UserCreateNestedOneWithoutWorkspaceParticipationInput
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceMemberUncheckedCreateWithoutTasksInput = {
    uuid?: string
    userId: string
    workspaceId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceMemberCreateOrConnectWithoutTasksInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutTasksInput, WorkspaceMemberUncheckedCreateWithoutTasksInput>
  }

  export type TaskCreateWithoutAssignedMembersInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    status: WorkspaceTaskStatusCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedMembersInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    statusId: string
  }

  export type TaskCreateOrConnectWithoutAssignedMembersInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedMembersInput, TaskUncheckedCreateWithoutAssignedMembersInput>
  }

  export type WorkspaceMemberUpsertWithoutTasksInput = {
    update: XOR<WorkspaceMemberUpdateWithoutTasksInput, WorkspaceMemberUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkspaceMemberCreateWithoutTasksInput, WorkspaceMemberUncheckedCreateWithoutTasksInput>
  }

  export type WorkspaceMemberUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspaceParticipationNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithoutAssignedMembersInput = {
    update: XOR<TaskUpdateWithoutAssignedMembersInput, TaskUncheckedUpdateWithoutAssignedMembersInput>
    create: XOR<TaskCreateWithoutAssignedMembersInput, TaskUncheckedCreateWithoutAssignedMembersInput>
  }

  export type TaskUpdateWithoutAssignedMembersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    status?: WorkspaceTaskStatusUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedMembersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceMemberCreateWithoutUserInput = {
    uuid?: string
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: AssignedMemberCreateNestedManyWithoutMemberInput
  }

  export type WorkspaceMemberUncheckedCreateWithoutUserInput = {
    uuid?: string
    workspaceId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: AssignedMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type WorkspaceMemberCreateOrConnectWithoutUserInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceMemberCreateManyUserInputEnvelope = {
    data: Enumerable<WorkspaceMemberCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceMemberWhereUniqueInput
    update: XOR<WorkspaceMemberUpdateWithoutUserInput, WorkspaceMemberUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceMemberWhereUniqueInput
    data: XOR<WorkspaceMemberUpdateWithoutUserInput, WorkspaceMemberUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceMemberUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceMemberScalarWhereInput
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceParticipationInput>
  }

  export type WorkspaceCreateWithoutTaskStatusesInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTaskStatusesInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTaskStatusesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTaskStatusesInput, WorkspaceUncheckedCreateWithoutTaskStatusesInput>
  }

  export type TaskCreateWithoutStatusInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    assignedMembers?: AssignedMemberCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStatusInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    assignedMembers?: AssignedMemberUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStatusInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStatusInput, TaskUncheckedCreateWithoutStatusInput>
  }

  export type TaskCreateManyStatusInputEnvelope = {
    data: Enumerable<TaskCreateManyStatusInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutTaskStatusesInput = {
    update: XOR<WorkspaceUpdateWithoutTaskStatusesInput, WorkspaceUncheckedUpdateWithoutTaskStatusesInput>
    create: XOR<WorkspaceCreateWithoutTaskStatusesInput, WorkspaceUncheckedCreateWithoutTaskStatusesInput>
  }

  export type WorkspaceUpdateWithoutTaskStatusesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTaskStatusesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutStatusInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutStatusInput, TaskUncheckedUpdateWithoutStatusInput>
    create: XOR<TaskCreateWithoutStatusInput, TaskUncheckedCreateWithoutStatusInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutStatusInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutStatusInput, TaskUncheckedUpdateWithoutStatusInput>
  }

  export type TaskUpdateManyWithWhereWithoutStatusInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasksInput>
  }

  export type WorkspaceMemberCreateManyWorkspaceInput = {
    uuid?: string
    userId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyWorkspaceInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    statusId: string
  }

  export type WorkspaceTaskStatusCreateManyWorkspaceInput = {
    uuid?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
  }

  export type WorkspaceMemberUpdateWithoutWorkspaceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspaceParticipationNestedInput
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: AssignedMemberUpdateManyWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: AssignedMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutMembersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutWorkspaceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedMembers?: AssignedMemberUpdateManyWithoutTaskNestedInput
    status?: WorkspaceTaskStatusUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutWorkspaceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedMembers?: AssignedMemberUncheckedUpdateManyWithoutTaskNestedInput
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceTaskStatusUpdateWithoutWorkspaceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutStatusNestedInput
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceTaskStatusUncheckedUpdateWithoutWorkspaceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutStatusNestedInput
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceTaskStatusUncheckedUpdateManyWithoutTaskStatusesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AssignedMemberCreateManyMemberInput = {
    taskId: string
    role?: TaskRole
  }

  export type AssignedMemberUpdateWithoutMemberInput = {
    task?: TaskUpdateOneRequiredWithoutAssignedMembersNestedInput
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberUncheckedUpdateWithoutMemberInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberUncheckedUpdateManyWithoutTasksInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberCreateManyTaskInput = {
    memberId: string
    role?: TaskRole
  }

  export type AssignedMemberUpdateWithoutTaskInput = {
    member?: WorkspaceMemberUpdateOneRequiredWithoutTasksNestedInput
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberUncheckedUpdateWithoutTaskInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type AssignedMemberUncheckedUpdateManyWithoutAssignedMembersInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    role?: EnumTaskRoleFieldUpdateOperationsInput | TaskRole
  }

  export type WorkspaceMemberCreateManyUserInput = {
    uuid?: string
    workspaceId: string
    role?: WorkspaceMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceMemberUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: AssignedMemberUpdateManyWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: AssignedMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceParticipationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceMemberRoleFieldUpdateOperationsInput | WorkspaceMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyStatusInput = {
    uuid?: string
    title: string
    isDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
  }

  export type TaskUpdateWithoutStatusInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    assignedMembers?: AssignedMemberUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStatusInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    assignedMembers?: AssignedMemberUncheckedUpdateManyWithoutTaskNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}