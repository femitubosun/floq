/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model OtpToken
 *
 */
export type OtpToken = $Result.DefaultSelection<Prisma.$OtpTokenPayload>;
/**
 * Model VirtualAccount
 *
 */
export type VirtualAccount =
  $Result.DefaultSelection<Prisma.$VirtualAccountPayload>;
/**
 * Model Transaction
 *
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>;
/**
 * Model LedgerEntry
 *
 */
export type LedgerEntry = $Result.DefaultSelection<Prisma.$LedgerEntryPayload>;
/**
 * Model FxSnapshot
 *
 */
export type FxSnapshot = $Result.DefaultSelection<Prisma.$FxSnapshotPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const TokenType: {
    PASSWORD_RESET: 'PASSWORD_RESET';
    SIGNUP: 'SIGNUP';
  };

  export type TokenType = (typeof TokenType)[keyof typeof TokenType];

  export const Currency: {
    PHP: 'PHP';
    USD: 'USD';
    EUR: 'EUR';
    GBP: 'GBP';
    NGN: 'NGN';
  };

  export type Currency = (typeof Currency)[keyof typeof Currency];

  export const TransactionType: {
    TRANSFER: 'TRANSFER';
    FxConversion: 'FxConversion';
    DEPOSIT: 'DEPOSIT';
    WITHDRAWAL: 'WITHDRAWAL';
    REVERSAL: 'REVERSAL';
  };

  export type TransactionType =
    (typeof TransactionType)[keyof typeof TransactionType];

  export const TransactionStatus: {
    PENDING: 'PENDING';
    COMMITTED: 'COMMITTED';
    FAILED: 'FAILED';
    REVERSED: 'REVERSED';
  };

  export type TransactionStatus =
    (typeof TransactionStatus)[keyof typeof TransactionStatus];

  export const InitiatorType: {
    USER: 'USER';
    SYSTEM: 'SYSTEM';
    ADMIN: 'ADMIN';
  };

  export type InitiatorType =
    (typeof InitiatorType)[keyof typeof InitiatorType];

  export const EntryType: {
    DEBIT: 'DEBIT';
    CREDIT: 'CREDIT';
  };

  export type EntryType = (typeof EntryType)[keyof typeof EntryType];

  export const FxProvider: {
    CBN: 'CBN';
    OPENEXCHANGERATES: 'OPENEXCHANGERATES';
  };

  export type FxProvider = (typeof FxProvider)[keyof typeof FxProvider];
}

export type TokenType = $Enums.TokenType;

export const TokenType: typeof $Enums.TokenType;

export type Currency = $Enums.Currency;

export const Currency: typeof $Enums.Currency;

export type TransactionType = $Enums.TransactionType;

export const TransactionType: typeof $Enums.TransactionType;

export type TransactionStatus = $Enums.TransactionStatus;

export const TransactionStatus: typeof $Enums.TransactionStatus;

export type InitiatorType = $Enums.InitiatorType;

export const InitiatorType: typeof $Enums.InitiatorType;

export type EntryType = $Enums.EntryType;

export const EntryType: typeof $Enums.EntryType;

export type FxProvider = $Enums.FxProvider;

export const FxProvider: typeof $Enums.FxProvider;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpToken`: Exposes CRUD operations for the **OtpToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OtpTokens
   * const otpTokens = await prisma.otpToken.findMany()
   * ```
   */
  get otpToken(): Prisma.OtpTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.virtualAccount`: Exposes CRUD operations for the **VirtualAccount** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more VirtualAccounts
   * const virtualAccounts = await prisma.virtualAccount.findMany()
   * ```
   */
  get virtualAccount(): Prisma.VirtualAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
   * ```
   */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerEntry`: Exposes CRUD operations for the **LedgerEntry** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more LedgerEntries
   * const ledgerEntries = await prisma.ledgerEntry.findMany()
   * ```
   */
  get ledgerEntry(): Prisma.LedgerEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fxSnapshot`: Exposes CRUD operations for the **FxSnapshot** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FxSnapshots
   * const fxSnapshots = await prisma.fxSnapshot.findMany()
   * ```
   */
  get fxSnapshot(): Prisma.FxSnapshotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    OtpToken: 'OtpToken';
    VirtualAccount: 'VirtualAccount';
    Transaction: 'Transaction';
    LedgerEntry: 'LedgerEntry';
    FxSnapshot: 'FxSnapshot';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'otpToken'
        | 'virtualAccount'
        | 'transaction'
        | 'ledgerEntry'
        | 'fxSnapshot';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      OtpToken: {
        payload: Prisma.$OtpTokenPayload<ExtArgs>;
        fields: Prisma.OtpTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OtpTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OtpTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>;
          };
          findFirst: {
            args: Prisma.OtpTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OtpTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>;
          };
          findMany: {
            args: Prisma.OtpTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>[];
          };
          create: {
            args: Prisma.OtpTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>;
          };
          createMany: {
            args: Prisma.OtpTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OtpTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>[];
          };
          delete: {
            args: Prisma.OtpTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>;
          };
          update: {
            args: Prisma.OtpTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>;
          };
          deleteMany: {
            args: Prisma.OtpTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OtpTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OtpTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>[];
          };
          upsert: {
            args: Prisma.OtpTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>;
          };
          aggregate: {
            args: Prisma.OtpTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOtpToken>;
          };
          groupBy: {
            args: Prisma.OtpTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OtpTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.OtpTokenCountArgs<ExtArgs>;
            result: $Utils.Optional<OtpTokenCountAggregateOutputType> | number;
          };
        };
      };
      VirtualAccount: {
        payload: Prisma.$VirtualAccountPayload<ExtArgs>;
        fields: Prisma.VirtualAccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VirtualAccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VirtualAccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>;
          };
          findFirst: {
            args: Prisma.VirtualAccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VirtualAccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>;
          };
          findMany: {
            args: Prisma.VirtualAccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>[];
          };
          create: {
            args: Prisma.VirtualAccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>;
          };
          createMany: {
            args: Prisma.VirtualAccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.VirtualAccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>[];
          };
          delete: {
            args: Prisma.VirtualAccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>;
          };
          update: {
            args: Prisma.VirtualAccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>;
          };
          deleteMany: {
            args: Prisma.VirtualAccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VirtualAccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.VirtualAccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>[];
          };
          upsert: {
            args: Prisma.VirtualAccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>;
          };
          aggregate: {
            args: Prisma.VirtualAccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVirtualAccount>;
          };
          groupBy: {
            args: Prisma.VirtualAccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VirtualAccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.VirtualAccountCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<VirtualAccountCountAggregateOutputType>
              | number;
          };
        };
      };
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>;
        fields: Prisma.TransactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransaction>;
          };
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionCountAggregateOutputType>
              | number;
          };
        };
      };
      LedgerEntry: {
        payload: Prisma.$LedgerEntryPayload<ExtArgs>;
        fields: Prisma.LedgerEntryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LedgerEntryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LedgerEntryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
          };
          findFirst: {
            args: Prisma.LedgerEntryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LedgerEntryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
          };
          findMany: {
            args: Prisma.LedgerEntryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[];
          };
          create: {
            args: Prisma.LedgerEntryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
          };
          createMany: {
            args: Prisma.LedgerEntryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LedgerEntryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[];
          };
          delete: {
            args: Prisma.LedgerEntryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
          };
          update: {
            args: Prisma.LedgerEntryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
          };
          deleteMany: {
            args: Prisma.LedgerEntryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LedgerEntryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LedgerEntryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[];
          };
          upsert: {
            args: Prisma.LedgerEntryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
          };
          aggregate: {
            args: Prisma.LedgerEntryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLedgerEntry>;
          };
          groupBy: {
            args: Prisma.LedgerEntryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LedgerEntryGroupByOutputType>[];
          };
          count: {
            args: Prisma.LedgerEntryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<LedgerEntryCountAggregateOutputType>
              | number;
          };
        };
      };
      FxSnapshot: {
        payload: Prisma.$FxSnapshotPayload<ExtArgs>;
        fields: Prisma.FxSnapshotFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FxSnapshotFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FxSnapshotFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>;
          };
          findFirst: {
            args: Prisma.FxSnapshotFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FxSnapshotFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>;
          };
          findMany: {
            args: Prisma.FxSnapshotFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>[];
          };
          create: {
            args: Prisma.FxSnapshotCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>;
          };
          createMany: {
            args: Prisma.FxSnapshotCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FxSnapshotCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>[];
          };
          delete: {
            args: Prisma.FxSnapshotDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>;
          };
          update: {
            args: Prisma.FxSnapshotUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>;
          };
          deleteMany: {
            args: Prisma.FxSnapshotDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FxSnapshotUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FxSnapshotUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>[];
          };
          upsert: {
            args: Prisma.FxSnapshotUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FxSnapshotPayload>;
          };
          aggregate: {
            args: Prisma.FxSnapshotAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFxSnapshot>;
          };
          groupBy: {
            args: Prisma.FxSnapshotGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FxSnapshotGroupByOutputType>[];
          };
          count: {
            args: Prisma.FxSnapshotCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<FxSnapshotCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    otpToken?: OtpTokenOmit;
    virtualAccount?: VirtualAccountOmit;
    transaction?: TransactionOmit;
    ledgerEntry?: LedgerEntryOmit;
    fxSnapshot?: FxSnapshotOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number;
    transactions: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs;
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OtpTokenWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
  };

  /**
   * Count Type VirtualAccountCountOutputType
   */

  export type VirtualAccountCountOutputType = {
    ledgerEntries: number;
  };

  export type VirtualAccountCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ledgerEntries?:
      | boolean
      | VirtualAccountCountOutputTypeCountLedgerEntriesArgs;
  };

  // Custom InputTypes
  /**
   * VirtualAccountCountOutputType without action
   */
  export type VirtualAccountCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccountCountOutputType
     */
    select?: VirtualAccountCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VirtualAccountCountOutputType without action
   */
  export type VirtualAccountCountOutputTypeCountLedgerEntriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LedgerEntryWhereInput;
  };

  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    ledgerEntries: number;
  };

  export type TransactionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ledgerEntries?: boolean | TransactionCountOutputTypeCountLedgerEntriesArgs;
  };

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountLedgerEntriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LedgerEntryWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string | null;
    password: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      tokens?: boolean | User$tokensArgs<ExtArgs>;
      transactions?: boolean | User$transactionsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'name' | 'password',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tokens?: boolean | User$tokensArgs<ExtArgs>;
    transactions?: boolean | User$transactionsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      tokens: Prisma.$OtpTokenPayload<ExtArgs>[];
      transactions: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string | null;
        password: string;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OtpTokenPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$transactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TransactionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.tokens
   */
  export type User$tokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    where?: OtpTokenWhereInput;
    orderBy?:
      | OtpTokenOrderByWithRelationInput
      | OtpTokenOrderByWithRelationInput[];
    cursor?: OtpTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[];
  };

  /**
   * User.transactions
   */
  export type User$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    cursor?: TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model OtpToken
   */

  export type AggregateOtpToken = {
    _count: OtpTokenCountAggregateOutputType | null;
    _min: OtpTokenMinAggregateOutputType | null;
    _max: OtpTokenMaxAggregateOutputType | null;
  };

  export type OtpTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenType: $Enums.TokenType | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    isUsed: boolean | null;
  };

  export type OtpTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenType: $Enums.TokenType | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    isUsed: boolean | null;
  };

  export type OtpTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    tokenType: number;
    tokenHash: number;
    expiresAt: number;
    isUsed: number;
    _all: number;
  };

  export type OtpTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    tokenType?: true;
    tokenHash?: true;
    expiresAt?: true;
    isUsed?: true;
  };

  export type OtpTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    tokenType?: true;
    tokenHash?: true;
    expiresAt?: true;
    isUsed?: true;
  };

  export type OtpTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    tokenType?: true;
    tokenHash?: true;
    expiresAt?: true;
    isUsed?: true;
    _all?: true;
  };

  export type OtpTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OtpToken to aggregate.
     */
    where?: OtpTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?:
      | OtpTokenOrderByWithRelationInput
      | OtpTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OtpTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OtpTokens
     **/
    _count?: true | OtpTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OtpTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OtpTokenMaxAggregateInputType;
  };

  export type GetOtpTokenAggregateType<T extends OtpTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateOtpToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpToken[P]>
      : GetScalarType<T[P], AggregateOtpToken[P]>;
  };

  export type OtpTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OtpTokenWhereInput;
    orderBy?:
      | OtpTokenOrderByWithAggregationInput
      | OtpTokenOrderByWithAggregationInput[];
    by: OtpTokenScalarFieldEnum[] | OtpTokenScalarFieldEnum;
    having?: OtpTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpTokenCountAggregateInputType | true;
    _min?: OtpTokenMinAggregateInputType;
    _max?: OtpTokenMaxAggregateInputType;
  };

  export type OtpTokenGroupByOutputType = {
    id: string;
    userId: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date;
    isUsed: boolean;
    _count: OtpTokenCountAggregateOutputType | null;
    _min: OtpTokenMinAggregateOutputType | null;
    _max: OtpTokenMaxAggregateOutputType | null;
  };

  type GetOtpTokenGroupByPayload<T extends OtpTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OtpTokenGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OtpTokenGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OtpTokenGroupByOutputType[P]>;
        }
      >
    >;

  export type OtpTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenType?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      isUsed?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['otpToken']
  >;

  export type OtpTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenType?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      isUsed?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['otpToken']
  >;

  export type OtpTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenType?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      isUsed?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['otpToken']
  >;

  export type OtpTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    tokenType?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    isUsed?: boolean;
  };

  export type OtpTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'tokenType' | 'tokenHash' | 'expiresAt' | 'isUsed',
    ExtArgs['result']['otpToken']
  >;
  export type OtpTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type OtpTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type OtpTokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $OtpTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OtpToken';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        tokenType: $Enums.TokenType;
        tokenHash: string;
        expiresAt: Date;
        isUsed: boolean;
      },
      ExtArgs['result']['otpToken']
    >;
    composites: {};
  };

  type OtpTokenGetPayload<
    S extends boolean | null | undefined | OtpTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$OtpTokenPayload, S>;

  type OtpTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OtpTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpTokenCountAggregateInputType | true;
  };

  export interface OtpTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OtpToken'];
      meta: { name: 'OtpToken' };
    };
    /**
     * Find zero or one OtpToken that matches the filter.
     * @param {OtpTokenFindUniqueArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpTokenFindUniqueArgs>(
      args: SelectSubset<T, OtpTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OtpToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpTokenFindUniqueOrThrowArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OtpTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OtpToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenFindFirstArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpTokenFindFirstArgs>(
      args?: SelectSubset<T, OtpTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OtpToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenFindFirstOrThrowArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OtpTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OtpTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpTokens
     * const otpTokens = await prisma.otpToken.findMany()
     *
     * // Get first 10 OtpTokens
     * const otpTokens = await prisma.otpToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const otpTokenWithIdOnly = await prisma.otpToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OtpTokenFindManyArgs>(
      args?: SelectSubset<T, OtpTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OtpToken.
     * @param {OtpTokenCreateArgs} args - Arguments to create a OtpToken.
     * @example
     * // Create one OtpToken
     * const OtpToken = await prisma.otpToken.create({
     *   data: {
     *     // ... data to create a OtpToken
     *   }
     * })
     *
     */
    create<T extends OtpTokenCreateArgs>(
      args: SelectSubset<T, OtpTokenCreateArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OtpTokens.
     * @param {OtpTokenCreateManyArgs} args - Arguments to create many OtpTokens.
     * @example
     * // Create many OtpTokens
     * const otpToken = await prisma.otpToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OtpTokenCreateManyArgs>(
      args?: SelectSubset<T, OtpTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OtpTokens and returns the data saved in the database.
     * @param {OtpTokenCreateManyAndReturnArgs} args - Arguments to create many OtpTokens.
     * @example
     * // Create many OtpTokens
     * const otpToken = await prisma.otpToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OtpTokens and only return the `id`
     * const otpTokenWithIdOnly = await prisma.otpToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OtpTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OtpTokenCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a OtpToken.
     * @param {OtpTokenDeleteArgs} args - Arguments to delete one OtpToken.
     * @example
     * // Delete one OtpToken
     * const OtpToken = await prisma.otpToken.delete({
     *   where: {
     *     // ... filter to delete one OtpToken
     *   }
     * })
     *
     */
    delete<T extends OtpTokenDeleteArgs>(
      args: SelectSubset<T, OtpTokenDeleteArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OtpToken.
     * @param {OtpTokenUpdateArgs} args - Arguments to update one OtpToken.
     * @example
     * // Update one OtpToken
     * const otpToken = await prisma.otpToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OtpTokenUpdateArgs>(
      args: SelectSubset<T, OtpTokenUpdateArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OtpTokens.
     * @param {OtpTokenDeleteManyArgs} args - Arguments to filter OtpTokens to delete.
     * @example
     * // Delete a few OtpTokens
     * const { count } = await prisma.otpToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OtpTokenDeleteManyArgs>(
      args?: SelectSubset<T, OtpTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OtpTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpTokens
     * const otpToken = await prisma.otpToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OtpTokenUpdateManyArgs>(
      args: SelectSubset<T, OtpTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OtpTokens and returns the data updated in the database.
     * @param {OtpTokenUpdateManyAndReturnArgs} args - Arguments to update many OtpTokens.
     * @example
     * // Update many OtpTokens
     * const otpToken = await prisma.otpToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OtpTokens and only return the `id`
     * const otpTokenWithIdOnly = await prisma.otpToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OtpTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OtpTokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one OtpToken.
     * @param {OtpTokenUpsertArgs} args - Arguments to update or create a OtpToken.
     * @example
     * // Update or create a OtpToken
     * const otpToken = await prisma.otpToken.upsert({
     *   create: {
     *     // ... data to create a OtpToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpToken we want to update
     *   }
     * })
     */
    upsert<T extends OtpTokenUpsertArgs>(
      args: SelectSubset<T, OtpTokenUpsertArgs<ExtArgs>>,
    ): Prisma__OtpTokenClient<
      $Result.GetResult<
        Prisma.$OtpTokenPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OtpTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenCountArgs} args - Arguments to filter OtpTokens to count.
     * @example
     * // Count the number of OtpTokens
     * const count = await prisma.otpToken.count({
     *   where: {
     *     // ... the filter for the OtpTokens we want to count
     *   }
     * })
     **/
    count<T extends OtpTokenCountArgs>(
      args?: Subset<T, OtpTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpTokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OtpToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpTokenAggregateArgs>(
      args: Subset<T, OtpTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetOtpTokenAggregateType<T>>;

    /**
     * Group by OtpToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenGroupByArgs} args - Group by arguments.
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
      T extends OtpTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpTokenGroupByArgs['orderBy'] }
        : { orderBy?: OtpTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OtpTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOtpTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OtpToken model
     */
    readonly fields: OtpTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OtpToken model
   */
  interface OtpTokenFieldRefs {
    readonly id: FieldRef<'OtpToken', 'String'>;
    readonly userId: FieldRef<'OtpToken', 'String'>;
    readonly tokenType: FieldRef<'OtpToken', 'TokenType'>;
    readonly tokenHash: FieldRef<'OtpToken', 'String'>;
    readonly expiresAt: FieldRef<'OtpToken', 'DateTime'>;
    readonly isUsed: FieldRef<'OtpToken', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * OtpToken findUnique
   */
  export type OtpTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * Filter, which OtpToken to fetch.
     */
    where: OtpTokenWhereUniqueInput;
  };

  /**
   * OtpToken findUniqueOrThrow
   */
  export type OtpTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * Filter, which OtpToken to fetch.
     */
    where: OtpTokenWhereUniqueInput;
  };

  /**
   * OtpToken findFirst
   */
  export type OtpTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * Filter, which OtpToken to fetch.
     */
    where?: OtpTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?:
      | OtpTokenOrderByWithRelationInput
      | OtpTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OtpTokens.
     */
    cursor?: OtpTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtpTokens.
     */
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[];
  };

  /**
   * OtpToken findFirstOrThrow
   */
  export type OtpTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * Filter, which OtpToken to fetch.
     */
    where?: OtpTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?:
      | OtpTokenOrderByWithRelationInput
      | OtpTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OtpTokens.
     */
    cursor?: OtpTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtpTokens.
     */
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[];
  };

  /**
   * OtpToken findMany
   */
  export type OtpTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * Filter, which OtpTokens to fetch.
     */
    where?: OtpTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?:
      | OtpTokenOrderByWithRelationInput
      | OtpTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OtpTokens.
     */
    cursor?: OtpTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpTokens.
     */
    skip?: number;
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[];
  };

  /**
   * OtpToken create
   */
  export type OtpTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a OtpToken.
     */
    data: XOR<OtpTokenCreateInput, OtpTokenUncheckedCreateInput>;
  };

  /**
   * OtpToken createMany
   */
  export type OtpTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OtpTokens.
     */
    data: OtpTokenCreateManyInput | OtpTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OtpToken createManyAndReturn
   */
  export type OtpTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many OtpTokens.
     */
    data: OtpTokenCreateManyInput | OtpTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OtpToken update
   */
  export type OtpTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a OtpToken.
     */
    data: XOR<OtpTokenUpdateInput, OtpTokenUncheckedUpdateInput>;
    /**
     * Choose, which OtpToken to update.
     */
    where: OtpTokenWhereUniqueInput;
  };

  /**
   * OtpToken updateMany
   */
  export type OtpTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OtpTokens.
     */
    data: XOR<
      OtpTokenUpdateManyMutationInput,
      OtpTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which OtpTokens to update
     */
    where?: OtpTokenWhereInput;
    /**
     * Limit how many OtpTokens to update.
     */
    limit?: number;
  };

  /**
   * OtpToken updateManyAndReturn
   */
  export type OtpTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * The data used to update OtpTokens.
     */
    data: XOR<
      OtpTokenUpdateManyMutationInput,
      OtpTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which OtpTokens to update
     */
    where?: OtpTokenWhereInput;
    /**
     * Limit how many OtpTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OtpToken upsert
   */
  export type OtpTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the OtpToken to update in case it exists.
     */
    where: OtpTokenWhereUniqueInput;
    /**
     * In case the OtpToken found by the `where` argument doesn't exist, create a new OtpToken with this data.
     */
    create: XOR<OtpTokenCreateInput, OtpTokenUncheckedCreateInput>;
    /**
     * In case the OtpToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpTokenUpdateInput, OtpTokenUncheckedUpdateInput>;
  };

  /**
   * OtpToken delete
   */
  export type OtpTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
    /**
     * Filter which OtpToken to delete.
     */
    where: OtpTokenWhereUniqueInput;
  };

  /**
   * OtpToken deleteMany
   */
  export type OtpTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OtpTokens to delete
     */
    where?: OtpTokenWhereInput;
    /**
     * Limit how many OtpTokens to delete.
     */
    limit?: number;
  };

  /**
   * OtpToken without action
   */
  export type OtpTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpTokenInclude<ExtArgs> | null;
  };

  /**
   * Model VirtualAccount
   */

  export type AggregateVirtualAccount = {
    _count: VirtualAccountCountAggregateOutputType | null;
    _avg: VirtualAccountAvgAggregateOutputType | null;
    _sum: VirtualAccountSumAggregateOutputType | null;
    _min: VirtualAccountMinAggregateOutputType | null;
    _max: VirtualAccountMaxAggregateOutputType | null;
  };

  export type VirtualAccountAvgAggregateOutputType = {
    balance: Decimal | null;
  };

  export type VirtualAccountSumAggregateOutputType = {
    balance: Decimal | null;
  };

  export type VirtualAccountMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    currency: $Enums.Currency | null;
    balance: Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    idempotencyKey: string | null;
  };

  export type VirtualAccountMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    currency: $Enums.Currency | null;
    balance: Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    idempotencyKey: string | null;
  };

  export type VirtualAccountCountAggregateOutputType = {
    id: number;
    name: number;
    currency: number;
    balance: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    idempotencyKey: number;
    _all: number;
  };

  export type VirtualAccountAvgAggregateInputType = {
    balance?: true;
  };

  export type VirtualAccountSumAggregateInputType = {
    balance?: true;
  };

  export type VirtualAccountMinAggregateInputType = {
    id?: true;
    name?: true;
    currency?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    idempotencyKey?: true;
  };

  export type VirtualAccountMaxAggregateInputType = {
    id?: true;
    name?: true;
    currency?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    idempotencyKey?: true;
  };

  export type VirtualAccountCountAggregateInputType = {
    id?: true;
    name?: true;
    currency?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    idempotencyKey?: true;
    _all?: true;
  };

  export type VirtualAccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which VirtualAccount to aggregate.
     */
    where?: VirtualAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?:
      | VirtualAccountOrderByWithRelationInput
      | VirtualAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VirtualAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VirtualAccounts
     **/
    _count?: true | VirtualAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VirtualAccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VirtualAccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VirtualAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VirtualAccountMaxAggregateInputType;
  };

  export type GetVirtualAccountAggregateType<
    T extends VirtualAccountAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateVirtualAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualAccount[P]>
      : GetScalarType<T[P], AggregateVirtualAccount[P]>;
  };

  export type VirtualAccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VirtualAccountWhereInput;
    orderBy?:
      | VirtualAccountOrderByWithAggregationInput
      | VirtualAccountOrderByWithAggregationInput[];
    by: VirtualAccountScalarFieldEnum[] | VirtualAccountScalarFieldEnum;
    having?: VirtualAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VirtualAccountCountAggregateInputType | true;
    _avg?: VirtualAccountAvgAggregateInputType;
    _sum?: VirtualAccountSumAggregateInputType;
    _min?: VirtualAccountMinAggregateInputType;
    _max?: VirtualAccountMaxAggregateInputType;
  };

  export type VirtualAccountGroupByOutputType = {
    id: string;
    name: string;
    currency: $Enums.Currency;
    balance: Decimal;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    idempotencyKey: string;
    _count: VirtualAccountCountAggregateOutputType | null;
    _avg: VirtualAccountAvgAggregateOutputType | null;
    _sum: VirtualAccountSumAggregateOutputType | null;
    _min: VirtualAccountMinAggregateOutputType | null;
    _max: VirtualAccountMaxAggregateOutputType | null;
  };

  type GetVirtualAccountGroupByPayload<T extends VirtualAccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VirtualAccountGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof VirtualAccountGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualAccountGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualAccountGroupByOutputType[P]>;
        }
      >
    >;

  export type VirtualAccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      currency?: boolean;
      balance?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      idempotencyKey?: boolean;
      ledgerEntries?: boolean | VirtualAccount$ledgerEntriesArgs<ExtArgs>;
      _count?: boolean | VirtualAccountCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['virtualAccount']
  >;

  export type VirtualAccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      currency?: boolean;
      balance?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      idempotencyKey?: boolean;
    },
    ExtArgs['result']['virtualAccount']
  >;

  export type VirtualAccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      currency?: boolean;
      balance?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      idempotencyKey?: boolean;
    },
    ExtArgs['result']['virtualAccount']
  >;

  export type VirtualAccountSelectScalar = {
    id?: boolean;
    name?: boolean;
    currency?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    idempotencyKey?: boolean;
  };

  export type VirtualAccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'currency'
    | 'balance'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'idempotencyKey',
    ExtArgs['result']['virtualAccount']
  >;
  export type VirtualAccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ledgerEntries?: boolean | VirtualAccount$ledgerEntriesArgs<ExtArgs>;
    _count?: boolean | VirtualAccountCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type VirtualAccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type VirtualAccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $VirtualAccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'VirtualAccount';
    objects: {
      ledgerEntries: Prisma.$LedgerEntryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        currency: $Enums.Currency;
        balance: Prisma.Decimal;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        idempotencyKey: string;
      },
      ExtArgs['result']['virtualAccount']
    >;
    composites: {};
  };

  type VirtualAccountGetPayload<
    S extends boolean | null | undefined | VirtualAccountDefaultArgs,
  > = $Result.GetResult<Prisma.$VirtualAccountPayload, S>;

  type VirtualAccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    VirtualAccountFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: VirtualAccountCountAggregateInputType | true;
  };

  export interface VirtualAccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['VirtualAccount'];
      meta: { name: 'VirtualAccount' };
    };
    /**
     * Find zero or one VirtualAccount that matches the filter.
     * @param {VirtualAccountFindUniqueArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualAccountFindUniqueArgs>(
      args: SelectSubset<T, VirtualAccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one VirtualAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualAccountFindUniqueOrThrowArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualAccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VirtualAccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first VirtualAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountFindFirstArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualAccountFindFirstArgs>(
      args?: SelectSubset<T, VirtualAccountFindFirstArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first VirtualAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountFindFirstOrThrowArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VirtualAccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more VirtualAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualAccounts
     * const virtualAccounts = await prisma.virtualAccount.findMany()
     *
     * // Get first 10 VirtualAccounts
     * const virtualAccounts = await prisma.virtualAccount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const virtualAccountWithIdOnly = await prisma.virtualAccount.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VirtualAccountFindManyArgs>(
      args?: SelectSubset<T, VirtualAccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a VirtualAccount.
     * @param {VirtualAccountCreateArgs} args - Arguments to create a VirtualAccount.
     * @example
     * // Create one VirtualAccount
     * const VirtualAccount = await prisma.virtualAccount.create({
     *   data: {
     *     // ... data to create a VirtualAccount
     *   }
     * })
     *
     */
    create<T extends VirtualAccountCreateArgs>(
      args: SelectSubset<T, VirtualAccountCreateArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many VirtualAccounts.
     * @param {VirtualAccountCreateManyArgs} args - Arguments to create many VirtualAccounts.
     * @example
     * // Create many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VirtualAccountCreateManyArgs>(
      args?: SelectSubset<T, VirtualAccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many VirtualAccounts and returns the data saved in the database.
     * @param {VirtualAccountCreateManyAndReturnArgs} args - Arguments to create many VirtualAccounts.
     * @example
     * // Create many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VirtualAccounts and only return the `id`
     * const virtualAccountWithIdOnly = await prisma.virtualAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VirtualAccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VirtualAccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a VirtualAccount.
     * @param {VirtualAccountDeleteArgs} args - Arguments to delete one VirtualAccount.
     * @example
     * // Delete one VirtualAccount
     * const VirtualAccount = await prisma.virtualAccount.delete({
     *   where: {
     *     // ... filter to delete one VirtualAccount
     *   }
     * })
     *
     */
    delete<T extends VirtualAccountDeleteArgs>(
      args: SelectSubset<T, VirtualAccountDeleteArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one VirtualAccount.
     * @param {VirtualAccountUpdateArgs} args - Arguments to update one VirtualAccount.
     * @example
     * // Update one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VirtualAccountUpdateArgs>(
      args: SelectSubset<T, VirtualAccountUpdateArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more VirtualAccounts.
     * @param {VirtualAccountDeleteManyArgs} args - Arguments to filter VirtualAccounts to delete.
     * @example
     * // Delete a few VirtualAccounts
     * const { count } = await prisma.virtualAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VirtualAccountDeleteManyArgs>(
      args?: SelectSubset<T, VirtualAccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more VirtualAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VirtualAccountUpdateManyArgs>(
      args: SelectSubset<T, VirtualAccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more VirtualAccounts and returns the data updated in the database.
     * @param {VirtualAccountUpdateManyAndReturnArgs} args - Arguments to update many VirtualAccounts.
     * @example
     * // Update many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VirtualAccounts and only return the `id`
     * const virtualAccountWithIdOnly = await prisma.virtualAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends VirtualAccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VirtualAccountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one VirtualAccount.
     * @param {VirtualAccountUpsertArgs} args - Arguments to update or create a VirtualAccount.
     * @example
     * // Update or create a VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.upsert({
     *   create: {
     *     // ... data to create a VirtualAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualAccount we want to update
     *   }
     * })
     */
    upsert<T extends VirtualAccountUpsertArgs>(
      args: SelectSubset<T, VirtualAccountUpsertArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      $Result.GetResult<
        Prisma.$VirtualAccountPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of VirtualAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountCountArgs} args - Arguments to filter VirtualAccounts to count.
     * @example
     * // Count the number of VirtualAccounts
     * const count = await prisma.virtualAccount.count({
     *   where: {
     *     // ... the filter for the VirtualAccounts we want to count
     *   }
     * })
     **/
    count<T extends VirtualAccountCountArgs>(
      args?: Subset<T, VirtualAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualAccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a VirtualAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VirtualAccountAggregateArgs>(
      args: Subset<T, VirtualAccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetVirtualAccountAggregateType<T>>;

    /**
     * Group by VirtualAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountGroupByArgs} args - Group by arguments.
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
      T extends VirtualAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualAccountGroupByArgs['orderBy'] }
        : { orderBy?: VirtualAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VirtualAccountGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetVirtualAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VirtualAccount model
     */
    readonly fields: VirtualAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualAccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    ledgerEntries<T extends VirtualAccount$ledgerEntriesArgs<ExtArgs> = {}>(
      args?: Subset<T, VirtualAccount$ledgerEntriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LedgerEntryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the VirtualAccount model
   */
  interface VirtualAccountFieldRefs {
    readonly id: FieldRef<'VirtualAccount', 'String'>;
    readonly name: FieldRef<'VirtualAccount', 'String'>;
    readonly currency: FieldRef<'VirtualAccount', 'Currency'>;
    readonly balance: FieldRef<'VirtualAccount', 'Decimal'>;
    readonly createdAt: FieldRef<'VirtualAccount', 'DateTime'>;
    readonly updatedAt: FieldRef<'VirtualAccount', 'DateTime'>;
    readonly deletedAt: FieldRef<'VirtualAccount', 'DateTime'>;
    readonly idempotencyKey: FieldRef<'VirtualAccount', 'String'>;
  }

  // Custom InputTypes
  /**
   * VirtualAccount findUnique
   */
  export type VirtualAccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where: VirtualAccountWhereUniqueInput;
  };

  /**
   * VirtualAccount findUniqueOrThrow
   */
  export type VirtualAccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where: VirtualAccountWhereUniqueInput;
  };

  /**
   * VirtualAccount findFirst
   */
  export type VirtualAccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where?: VirtualAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?:
      | VirtualAccountOrderByWithRelationInput
      | VirtualAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VirtualAccounts.
     */
    cursor?: VirtualAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VirtualAccounts.
     */
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[];
  };

  /**
   * VirtualAccount findFirstOrThrow
   */
  export type VirtualAccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where?: VirtualAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?:
      | VirtualAccountOrderByWithRelationInput
      | VirtualAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VirtualAccounts.
     */
    cursor?: VirtualAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VirtualAccounts.
     */
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[];
  };

  /**
   * VirtualAccount findMany
   */
  export type VirtualAccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualAccounts to fetch.
     */
    where?: VirtualAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?:
      | VirtualAccountOrderByWithRelationInput
      | VirtualAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VirtualAccounts.
     */
    cursor?: VirtualAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number;
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[];
  };

  /**
   * VirtualAccount create
   */
  export type VirtualAccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a VirtualAccount.
     */
    data: XOR<VirtualAccountCreateInput, VirtualAccountUncheckedCreateInput>;
  };

  /**
   * VirtualAccount createMany
   */
  export type VirtualAccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many VirtualAccounts.
     */
    data: VirtualAccountCreateManyInput | VirtualAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VirtualAccount createManyAndReturn
   */
  export type VirtualAccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * The data used to create many VirtualAccounts.
     */
    data: VirtualAccountCreateManyInput | VirtualAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VirtualAccount update
   */
  export type VirtualAccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a VirtualAccount.
     */
    data: XOR<VirtualAccountUpdateInput, VirtualAccountUncheckedUpdateInput>;
    /**
     * Choose, which VirtualAccount to update.
     */
    where: VirtualAccountWhereUniqueInput;
  };

  /**
   * VirtualAccount updateMany
   */
  export type VirtualAccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update VirtualAccounts.
     */
    data: XOR<
      VirtualAccountUpdateManyMutationInput,
      VirtualAccountUncheckedUpdateManyInput
    >;
    /**
     * Filter which VirtualAccounts to update
     */
    where?: VirtualAccountWhereInput;
    /**
     * Limit how many VirtualAccounts to update.
     */
    limit?: number;
  };

  /**
   * VirtualAccount updateManyAndReturn
   */
  export type VirtualAccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * The data used to update VirtualAccounts.
     */
    data: XOR<
      VirtualAccountUpdateManyMutationInput,
      VirtualAccountUncheckedUpdateManyInput
    >;
    /**
     * Filter which VirtualAccounts to update
     */
    where?: VirtualAccountWhereInput;
    /**
     * Limit how many VirtualAccounts to update.
     */
    limit?: number;
  };

  /**
   * VirtualAccount upsert
   */
  export type VirtualAccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the VirtualAccount to update in case it exists.
     */
    where: VirtualAccountWhereUniqueInput;
    /**
     * In case the VirtualAccount found by the `where` argument doesn't exist, create a new VirtualAccount with this data.
     */
    create: XOR<VirtualAccountCreateInput, VirtualAccountUncheckedCreateInput>;
    /**
     * In case the VirtualAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualAccountUpdateInput, VirtualAccountUncheckedUpdateInput>;
  };

  /**
   * VirtualAccount delete
   */
  export type VirtualAccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
    /**
     * Filter which VirtualAccount to delete.
     */
    where: VirtualAccountWhereUniqueInput;
  };

  /**
   * VirtualAccount deleteMany
   */
  export type VirtualAccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which VirtualAccounts to delete
     */
    where?: VirtualAccountWhereInput;
    /**
     * Limit how many VirtualAccounts to delete.
     */
    limit?: number;
  };

  /**
   * VirtualAccount.ledgerEntries
   */
  export type VirtualAccount$ledgerEntriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    where?: LedgerEntryWhereInput;
    orderBy?:
      | LedgerEntryOrderByWithRelationInput
      | LedgerEntryOrderByWithRelationInput[];
    cursor?: LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[];
  };

  /**
   * VirtualAccount without action
   */
  export type VirtualAccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualAccount
     */
    omit?: VirtualAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null;
  };

  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  export type TransactionMinAggregateOutputType = {
    id: string | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    initiatorId: string | null;
    initiatorType: $Enums.InitiatorType | null;
    idempotencyKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    executedAt: Date | null;
    fxSnapshotId: string | null;
  };

  export type TransactionMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    initiatorId: string | null;
    initiatorType: $Enums.InitiatorType | null;
    idempotencyKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    executedAt: Date | null;
    fxSnapshotId: string | null;
  };

  export type TransactionCountAggregateOutputType = {
    id: number;
    type: number;
    status: number;
    initiatorId: number;
    initiatorType: number;
    idempotencyKey: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    executedAt: number;
    fxSnapshotId: number;
    _all: number;
  };

  export type TransactionMinAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    initiatorId?: true;
    initiatorType?: true;
    idempotencyKey?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    executedAt?: true;
    fxSnapshotId?: true;
  };

  export type TransactionMaxAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    initiatorId?: true;
    initiatorType?: true;
    idempotencyKey?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    executedAt?: true;
    fxSnapshotId?: true;
  };

  export type TransactionCountAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    initiatorId?: true;
    initiatorType?: true;
    idempotencyKey?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    executedAt?: true;
    fxSnapshotId?: true;
    _all?: true;
  };

  export type TransactionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transactions
     **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionMaxAggregateInputType;
  };

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> =
    {
      [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateTransaction[P]>
        : GetScalarType<T[P], AggregateTransaction[P]>;
    };

  export type TransactionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithAggregationInput
      | TransactionOrderByWithAggregationInput[];
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
    having?: TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
  };

  export type TransactionGroupByOutputType = {
    id: string;
    type: $Enums.TransactionType;
    status: $Enums.TransactionStatus;
    initiatorId: string | null;
    initiatorType: $Enums.InitiatorType | null;
    idempotencyKey: string | null;
    metadata: JsonValue;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    executedAt: Date | null;
    fxSnapshotId: string | null;
    _count: TransactionCountAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof TransactionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>;
        }
      >
    >;

  export type TransactionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      status?: boolean;
      initiatorId?: boolean;
      initiatorType?: boolean;
      idempotencyKey?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      executedAt?: boolean;
      fxSnapshotId?: boolean;
      initiator?: boolean | Transaction$initiatorArgs<ExtArgs>;
      ledgerEntries?: boolean | Transaction$ledgerEntriesArgs<ExtArgs>;
      fxSnapshot?: boolean | Transaction$fxSnapshotArgs<ExtArgs>;
      _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      status?: boolean;
      initiatorId?: boolean;
      initiatorType?: boolean;
      idempotencyKey?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      executedAt?: boolean;
      fxSnapshotId?: boolean;
      initiator?: boolean | Transaction$initiatorArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      status?: boolean;
      initiatorId?: boolean;
      initiatorType?: boolean;
      idempotencyKey?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      executedAt?: boolean;
      fxSnapshotId?: boolean;
      initiator?: boolean | Transaction$initiatorArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectScalar = {
    id?: boolean;
    type?: boolean;
    status?: boolean;
    initiatorId?: boolean;
    initiatorType?: boolean;
    idempotencyKey?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    executedAt?: boolean;
    fxSnapshotId?: boolean;
  };

  export type TransactionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'type'
    | 'status'
    | 'initiatorId'
    | 'initiatorType'
    | 'idempotencyKey'
    | 'metadata'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'executedAt'
    | 'fxSnapshotId',
    ExtArgs['result']['transaction']
  >;
  export type TransactionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    initiator?: boolean | Transaction$initiatorArgs<ExtArgs>;
    ledgerEntries?: boolean | Transaction$ledgerEntriesArgs<ExtArgs>;
    fxSnapshot?: boolean | Transaction$fxSnapshotArgs<ExtArgs>;
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TransactionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    initiator?: boolean | Transaction$initiatorArgs<ExtArgs>;
  };
  export type TransactionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    initiator?: boolean | Transaction$initiatorArgs<ExtArgs>;
  };

  export type $TransactionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Transaction';
    objects: {
      initiator: Prisma.$UserPayload<ExtArgs> | null;
      ledgerEntries: Prisma.$LedgerEntryPayload<ExtArgs>[];
      fxSnapshot: Prisma.$FxSnapshotPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        type: $Enums.TransactionType;
        status: $Enums.TransactionStatus;
        initiatorId: string | null;
        initiatorType: $Enums.InitiatorType | null;
        idempotencyKey: string | null;
        metadata: Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        executedAt: Date | null;
        fxSnapshotId: string | null;
      },
      ExtArgs['result']['transaction']
    >;
    composites: {};
  };

  type TransactionGetPayload<
    S extends boolean | null | undefined | TransactionDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionPayload, S>;

  type TransactionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TransactionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TransactionCountAggregateInputType | true;
  };

  export interface TransactionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
      meta: { name: 'Transaction' };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionFindManyArgs>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends TransactionCreateArgs>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionCreateManyArgs>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends TransactionDeleteArgs>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionUpdateArgs>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionDeleteManyArgs>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionUpdateManyArgs>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
     **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(
      args: Subset<T, TransactionAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Transaction model
     */
    readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    initiator<T extends Transaction$initiatorArgs<ExtArgs> = {}>(
      args?: Subset<T, Transaction$initiatorArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    ledgerEntries<T extends Transaction$ledgerEntriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Transaction$ledgerEntriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LedgerEntryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    fxSnapshot<T extends Transaction$fxSnapshotArgs<ExtArgs> = {}>(
      args?: Subset<T, Transaction$fxSnapshotArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<'Transaction', 'String'>;
    readonly type: FieldRef<'Transaction', 'TransactionType'>;
    readonly status: FieldRef<'Transaction', 'TransactionStatus'>;
    readonly initiatorId: FieldRef<'Transaction', 'String'>;
    readonly initiatorType: FieldRef<'Transaction', 'InitiatorType'>;
    readonly idempotencyKey: FieldRef<'Transaction', 'String'>;
    readonly metadata: FieldRef<'Transaction', 'Json'>;
    readonly createdAt: FieldRef<'Transaction', 'DateTime'>;
    readonly updatedAt: FieldRef<'Transaction', 'DateTime'>;
    readonly deletedAt: FieldRef<'Transaction', 'DateTime'>;
    readonly executedAt: FieldRef<'Transaction', 'DateTime'>;
    readonly fxSnapshotId: FieldRef<'Transaction', 'String'>;
  }

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
  };

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
  };

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * The data used to update Transactions.
     */
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput;
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
  };

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number;
  };

  /**
   * Transaction.initiator
   */
  export type Transaction$initiatorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Transaction.ledgerEntries
   */
  export type Transaction$ledgerEntriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    where?: LedgerEntryWhereInput;
    orderBy?:
      | LedgerEntryOrderByWithRelationInput
      | LedgerEntryOrderByWithRelationInput[];
    cursor?: LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[];
  };

  /**
   * Transaction.fxSnapshot
   */
  export type Transaction$fxSnapshotArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    where?: FxSnapshotWhereInput;
  };

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
  };

  /**
   * Model LedgerEntry
   */

  export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null;
    _avg: LedgerEntryAvgAggregateOutputType | null;
    _sum: LedgerEntrySumAggregateOutputType | null;
    _min: LedgerEntryMinAggregateOutputType | null;
    _max: LedgerEntryMaxAggregateOutputType | null;
  };

  export type LedgerEntryAvgAggregateOutputType = {
    amount: Decimal | null;
    fxRate: Decimal | null;
  };

  export type LedgerEntrySumAggregateOutputType = {
    amount: Decimal | null;
    fxRate: Decimal | null;
  };

  export type LedgerEntryMinAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    accountId: string | null;
    currency: $Enums.Currency | null;
    amount: Decimal | null;
    entryType: $Enums.EntryType | null;
    fxRate: Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type LedgerEntryMaxAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    accountId: string | null;
    currency: $Enums.Currency | null;
    amount: Decimal | null;
    entryType: $Enums.EntryType | null;
    fxRate: Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type LedgerEntryCountAggregateOutputType = {
    id: number;
    transactionId: number;
    accountId: number;
    currency: number;
    amount: number;
    entryType: number;
    fxRate: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type LedgerEntryAvgAggregateInputType = {
    amount?: true;
    fxRate?: true;
  };

  export type LedgerEntrySumAggregateInputType = {
    amount?: true;
    fxRate?: true;
  };

  export type LedgerEntryMinAggregateInputType = {
    id?: true;
    transactionId?: true;
    accountId?: true;
    currency?: true;
    amount?: true;
    entryType?: true;
    fxRate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type LedgerEntryMaxAggregateInputType = {
    id?: true;
    transactionId?: true;
    accountId?: true;
    currency?: true;
    amount?: true;
    entryType?: true;
    fxRate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type LedgerEntryCountAggregateInputType = {
    id?: true;
    transactionId?: true;
    accountId?: true;
    currency?: true;
    amount?: true;
    entryType?: true;
    fxRate?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type LedgerEntryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LedgerEntry to aggregate.
     */
    where?: LedgerEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?:
      | LedgerEntryOrderByWithRelationInput
      | LedgerEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LedgerEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LedgerEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LedgerEntries
     **/
    _count?: true | LedgerEntryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LedgerEntryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LedgerEntrySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LedgerEntryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LedgerEntryMaxAggregateInputType;
  };

  export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> =
    {
      [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateLedgerEntry[P]>
        : GetScalarType<T[P], AggregateLedgerEntry[P]>;
    };

  export type LedgerEntryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LedgerEntryWhereInput;
    orderBy?:
      | LedgerEntryOrderByWithAggregationInput
      | LedgerEntryOrderByWithAggregationInput[];
    by: LedgerEntryScalarFieldEnum[] | LedgerEntryScalarFieldEnum;
    having?: LedgerEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LedgerEntryCountAggregateInputType | true;
    _avg?: LedgerEntryAvgAggregateInputType;
    _sum?: LedgerEntrySumAggregateInputType;
    _min?: LedgerEntryMinAggregateInputType;
    _max?: LedgerEntryMaxAggregateInputType;
  };

  export type LedgerEntryGroupByOutputType = {
    id: string;
    transactionId: string;
    accountId: string;
    currency: $Enums.Currency;
    amount: Decimal;
    entryType: $Enums.EntryType;
    fxRate: Decimal | null;
    metadata: JsonValue;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: LedgerEntryCountAggregateOutputType | null;
    _avg: LedgerEntryAvgAggregateOutputType | null;
    _sum: LedgerEntrySumAggregateOutputType | null;
    _min: LedgerEntryMinAggregateOutputType | null;
    _max: LedgerEntryMaxAggregateOutputType | null;
  };

  type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LedgerEntryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof LedgerEntryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>;
        }
      >
    >;

  export type LedgerEntrySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      accountId?: boolean;
      currency?: boolean;
      amount?: boolean;
      entryType?: boolean;
      fxRate?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
      account?: boolean | VirtualAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ledgerEntry']
  >;

  export type LedgerEntrySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      accountId?: boolean;
      currency?: boolean;
      amount?: boolean;
      entryType?: boolean;
      fxRate?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
      account?: boolean | VirtualAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ledgerEntry']
  >;

  export type LedgerEntrySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      accountId?: boolean;
      currency?: boolean;
      amount?: boolean;
      entryType?: boolean;
      fxRate?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
      account?: boolean | VirtualAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ledgerEntry']
  >;

  export type LedgerEntrySelectScalar = {
    id?: boolean;
    transactionId?: boolean;
    accountId?: boolean;
    currency?: boolean;
    amount?: boolean;
    entryType?: boolean;
    fxRate?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type LedgerEntryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'transactionId'
    | 'accountId'
    | 'currency'
    | 'amount'
    | 'entryType'
    | 'fxRate'
    | 'metadata'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['ledgerEntry']
  >;
  export type LedgerEntryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    account?: boolean | VirtualAccountDefaultArgs<ExtArgs>;
  };
  export type LedgerEntryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    account?: boolean | VirtualAccountDefaultArgs<ExtArgs>;
  };
  export type LedgerEntryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    account?: boolean | VirtualAccountDefaultArgs<ExtArgs>;
  };

  export type $LedgerEntryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'LedgerEntry';
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>;
      account: Prisma.$VirtualAccountPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        transactionId: string;
        accountId: string;
        currency: $Enums.Currency;
        amount: Prisma.Decimal;
        entryType: $Enums.EntryType;
        fxRate: Prisma.Decimal | null;
        metadata: Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
      },
      ExtArgs['result']['ledgerEntry']
    >;
    composites: {};
  };

  type LedgerEntryGetPayload<
    S extends boolean | null | undefined | LedgerEntryDefaultArgs,
  > = $Result.GetResult<Prisma.$LedgerEntryPayload, S>;

  type LedgerEntryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    LedgerEntryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LedgerEntryCountAggregateInputType | true;
  };

  export interface LedgerEntryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'];
      meta: { name: 'LedgerEntry' };
    };
    /**
     * Find zero or one LedgerEntry that matches the filter.
     * @param {LedgerEntryFindUniqueArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEntryFindUniqueArgs>(
      args: SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one LedgerEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEntryFindFirstArgs>(
      args?: SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany()
     *
     * // Get first 10 LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LedgerEntryFindManyArgs>(
      args?: SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a LedgerEntry.
     * @param {LedgerEntryCreateArgs} args - Arguments to create a LedgerEntry.
     * @example
     * // Create one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.create({
     *   data: {
     *     // ... data to create a LedgerEntry
     *   }
     * })
     *
     */
    create<T extends LedgerEntryCreateArgs>(
      args: SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many LedgerEntries.
     * @param {LedgerEntryCreateManyArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LedgerEntryCreateManyArgs>(
      args?: SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many LedgerEntries and returns the data saved in the database.
     * @param {LedgerEntryCreateManyAndReturnArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a LedgerEntry.
     * @param {LedgerEntryDeleteArgs} args - Arguments to delete one LedgerEntry.
     * @example
     * // Delete one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.delete({
     *   where: {
     *     // ... filter to delete one LedgerEntry
     *   }
     * })
     *
     */
    delete<T extends LedgerEntryDeleteArgs>(
      args: SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one LedgerEntry.
     * @param {LedgerEntryUpdateArgs} args - Arguments to update one LedgerEntry.
     * @example
     * // Update one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LedgerEntryUpdateArgs>(
      args: SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more LedgerEntries.
     * @param {LedgerEntryDeleteManyArgs} args - Arguments to filter LedgerEntries to delete.
     * @example
     * // Delete a few LedgerEntries
     * const { count } = await prisma.ledgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LedgerEntryDeleteManyArgs>(
      args?: SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LedgerEntryUpdateManyArgs>(
      args: SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LedgerEntries and returns the data updated in the database.
     * @param {LedgerEntryUpdateManyAndReturnArgs} args - Arguments to update many LedgerEntries.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LedgerEntryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LedgerEntryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one LedgerEntry.
     * @param {LedgerEntryUpsertArgs} args - Arguments to update or create a LedgerEntry.
     * @example
     * // Update or create a LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.upsert({
     *   create: {
     *     // ... data to create a LedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEntryUpsertArgs>(
      args: SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>,
    ): Prisma__LedgerEntryClient<
      $Result.GetResult<
        Prisma.$LedgerEntryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryCountArgs} args - Arguments to filter LedgerEntries to count.
     * @example
     * // Count the number of LedgerEntries
     * const count = await prisma.ledgerEntry.count({
     *   where: {
     *     // ... the filter for the LedgerEntries we want to count
     *   }
     * })
     **/
    count<T extends LedgerEntryCountArgs>(
      args?: Subset<T, LedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEntryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LedgerEntryAggregateArgs>(
      args: Subset<T, LedgerEntryAggregateArgs>,
    ): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>;

    /**
     * Group by LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryGroupByArgs} args - Group by arguments.
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
      T extends LedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLedgerEntryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LedgerEntry model
     */
    readonly fields: LedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEntryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionDefaultArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      | $Result.GetResult<
          Prisma.$TransactionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    account<T extends VirtualAccountDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, VirtualAccountDefaultArgs<ExtArgs>>,
    ): Prisma__VirtualAccountClient<
      | $Result.GetResult<
          Prisma.$VirtualAccountPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LedgerEntry model
   */
  interface LedgerEntryFieldRefs {
    readonly id: FieldRef<'LedgerEntry', 'String'>;
    readonly transactionId: FieldRef<'LedgerEntry', 'String'>;
    readonly accountId: FieldRef<'LedgerEntry', 'String'>;
    readonly currency: FieldRef<'LedgerEntry', 'Currency'>;
    readonly amount: FieldRef<'LedgerEntry', 'Decimal'>;
    readonly entryType: FieldRef<'LedgerEntry', 'EntryType'>;
    readonly fxRate: FieldRef<'LedgerEntry', 'Decimal'>;
    readonly metadata: FieldRef<'LedgerEntry', 'Json'>;
    readonly createdAt: FieldRef<'LedgerEntry', 'DateTime'>;
    readonly updatedAt: FieldRef<'LedgerEntry', 'DateTime'>;
    readonly deletedAt: FieldRef<'LedgerEntry', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * LedgerEntry findUnique
   */
  export type LedgerEntryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput;
  };

  /**
   * LedgerEntry findUniqueOrThrow
   */
  export type LedgerEntryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput;
  };

  /**
   * LedgerEntry findFirst
   */
  export type LedgerEntryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?:
      | LedgerEntryOrderByWithRelationInput
      | LedgerEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LedgerEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[];
  };

  /**
   * LedgerEntry findFirstOrThrow
   */
  export type LedgerEntryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?:
      | LedgerEntryOrderByWithRelationInput
      | LedgerEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LedgerEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[];
  };

  /**
   * LedgerEntry findMany
   */
  export type LedgerEntryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?:
      | LedgerEntryOrderByWithRelationInput
      | LedgerEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LedgerEntries.
     */
    skip?: number;
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[];
  };

  /**
   * LedgerEntry create
   */
  export type LedgerEntryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * The data needed to create a LedgerEntry.
     */
    data: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>;
  };

  /**
   * LedgerEntry createMany
   */
  export type LedgerEntryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LedgerEntry createManyAndReturn
   */
  export type LedgerEntryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LedgerEntry update
   */
  export type LedgerEntryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * The data needed to update a LedgerEntry.
     */
    data: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>;
    /**
     * Choose, which LedgerEntry to update.
     */
    where: LedgerEntryWhereUniqueInput;
  };

  /**
   * LedgerEntry updateMany
   */
  export type LedgerEntryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<
      LedgerEntryUpdateManyMutationInput,
      LedgerEntryUncheckedUpdateManyInput
    >;
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput;
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number;
  };

  /**
   * LedgerEntry updateManyAndReturn
   */
  export type LedgerEntryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<
      LedgerEntryUpdateManyMutationInput,
      LedgerEntryUncheckedUpdateManyInput
    >;
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput;
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LedgerEntry upsert
   */
  export type LedgerEntryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * The filter to search for the LedgerEntry to update in case it exists.
     */
    where: LedgerEntryWhereUniqueInput;
    /**
     * In case the LedgerEntry found by the `where` argument doesn't exist, create a new LedgerEntry with this data.
     */
    create: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>;
    /**
     * In case the LedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>;
  };

  /**
   * LedgerEntry delete
   */
  export type LedgerEntryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
    /**
     * Filter which LedgerEntry to delete.
     */
    where: LedgerEntryWhereUniqueInput;
  };

  /**
   * LedgerEntry deleteMany
   */
  export type LedgerEntryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LedgerEntries to delete
     */
    where?: LedgerEntryWhereInput;
    /**
     * Limit how many LedgerEntries to delete.
     */
    limit?: number;
  };

  /**
   * LedgerEntry without action
   */
  export type LedgerEntryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null;
  };

  /**
   * Model FxSnapshot
   */

  export type AggregateFxSnapshot = {
    _count: FxSnapshotCountAggregateOutputType | null;
    _avg: FxSnapshotAvgAggregateOutputType | null;
    _sum: FxSnapshotSumAggregateOutputType | null;
    _min: FxSnapshotMinAggregateOutputType | null;
    _max: FxSnapshotMaxAggregateOutputType | null;
  };

  export type FxSnapshotAvgAggregateOutputType = {
    rate: Decimal | null;
  };

  export type FxSnapshotSumAggregateOutputType = {
    rate: Decimal | null;
  };

  export type FxSnapshotMinAggregateOutputType = {
    id: string | null;
    baseCurrency: $Enums.Currency | null;
    quoteCurrency: $Enums.Currency | null;
    rate: Decimal | null;
    timestamp: Date | null;
    provider: $Enums.FxProvider | null;
    transactionId: string | null;
  };

  export type FxSnapshotMaxAggregateOutputType = {
    id: string | null;
    baseCurrency: $Enums.Currency | null;
    quoteCurrency: $Enums.Currency | null;
    rate: Decimal | null;
    timestamp: Date | null;
    provider: $Enums.FxProvider | null;
    transactionId: string | null;
  };

  export type FxSnapshotCountAggregateOutputType = {
    id: number;
    baseCurrency: number;
    quoteCurrency: number;
    rate: number;
    timestamp: number;
    provider: number;
    transactionId: number;
    _all: number;
  };

  export type FxSnapshotAvgAggregateInputType = {
    rate?: true;
  };

  export type FxSnapshotSumAggregateInputType = {
    rate?: true;
  };

  export type FxSnapshotMinAggregateInputType = {
    id?: true;
    baseCurrency?: true;
    quoteCurrency?: true;
    rate?: true;
    timestamp?: true;
    provider?: true;
    transactionId?: true;
  };

  export type FxSnapshotMaxAggregateInputType = {
    id?: true;
    baseCurrency?: true;
    quoteCurrency?: true;
    rate?: true;
    timestamp?: true;
    provider?: true;
    transactionId?: true;
  };

  export type FxSnapshotCountAggregateInputType = {
    id?: true;
    baseCurrency?: true;
    quoteCurrency?: true;
    rate?: true;
    timestamp?: true;
    provider?: true;
    transactionId?: true;
    _all?: true;
  };

  export type FxSnapshotAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FxSnapshot to aggregate.
     */
    where?: FxSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FxSnapshots to fetch.
     */
    orderBy?:
      | FxSnapshotOrderByWithRelationInput
      | FxSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FxSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FxSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FxSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FxSnapshots
     **/
    _count?: true | FxSnapshotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FxSnapshotAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FxSnapshotSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FxSnapshotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FxSnapshotMaxAggregateInputType;
  };

  export type GetFxSnapshotAggregateType<T extends FxSnapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateFxSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFxSnapshot[P]>
      : GetScalarType<T[P], AggregateFxSnapshot[P]>;
  };

  export type FxSnapshotGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FxSnapshotWhereInput;
    orderBy?:
      | FxSnapshotOrderByWithAggregationInput
      | FxSnapshotOrderByWithAggregationInput[];
    by: FxSnapshotScalarFieldEnum[] | FxSnapshotScalarFieldEnum;
    having?: FxSnapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FxSnapshotCountAggregateInputType | true;
    _avg?: FxSnapshotAvgAggregateInputType;
    _sum?: FxSnapshotSumAggregateInputType;
    _min?: FxSnapshotMinAggregateInputType;
    _max?: FxSnapshotMaxAggregateInputType;
  };

  export type FxSnapshotGroupByOutputType = {
    id: string;
    baseCurrency: $Enums.Currency;
    quoteCurrency: $Enums.Currency;
    rate: Decimal;
    timestamp: Date;
    provider: $Enums.FxProvider;
    transactionId: string;
    _count: FxSnapshotCountAggregateOutputType | null;
    _avg: FxSnapshotAvgAggregateOutputType | null;
    _sum: FxSnapshotSumAggregateOutputType | null;
    _min: FxSnapshotMinAggregateOutputType | null;
    _max: FxSnapshotMaxAggregateOutputType | null;
  };

  type GetFxSnapshotGroupByPayload<T extends FxSnapshotGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FxSnapshotGroupByOutputType, T['by']> & {
          [P in keyof T & keyof FxSnapshotGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FxSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], FxSnapshotGroupByOutputType[P]>;
        }
      >
    >;

  export type FxSnapshotSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      baseCurrency?: boolean;
      quoteCurrency?: boolean;
      rate?: boolean;
      timestamp?: boolean;
      provider?: boolean;
      transactionId?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['fxSnapshot']
  >;

  export type FxSnapshotSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      baseCurrency?: boolean;
      quoteCurrency?: boolean;
      rate?: boolean;
      timestamp?: boolean;
      provider?: boolean;
      transactionId?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['fxSnapshot']
  >;

  export type FxSnapshotSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      baseCurrency?: boolean;
      quoteCurrency?: boolean;
      rate?: boolean;
      timestamp?: boolean;
      provider?: boolean;
      transactionId?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['fxSnapshot']
  >;

  export type FxSnapshotSelectScalar = {
    id?: boolean;
    baseCurrency?: boolean;
    quoteCurrency?: boolean;
    rate?: boolean;
    timestamp?: boolean;
    provider?: boolean;
    transactionId?: boolean;
  };

  export type FxSnapshotOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'baseCurrency'
    | 'quoteCurrency'
    | 'rate'
    | 'timestamp'
    | 'provider'
    | 'transactionId',
    ExtArgs['result']['fxSnapshot']
  >;
  export type FxSnapshotInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };
  export type FxSnapshotIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };
  export type FxSnapshotIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };

  export type $FxSnapshotPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'FxSnapshot';
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        baseCurrency: $Enums.Currency;
        quoteCurrency: $Enums.Currency;
        rate: Prisma.Decimal;
        timestamp: Date;
        provider: $Enums.FxProvider;
        transactionId: string;
      },
      ExtArgs['result']['fxSnapshot']
    >;
    composites: {};
  };

  type FxSnapshotGetPayload<
    S extends boolean | null | undefined | FxSnapshotDefaultArgs,
  > = $Result.GetResult<Prisma.$FxSnapshotPayload, S>;

  type FxSnapshotCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    FxSnapshotFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FxSnapshotCountAggregateInputType | true;
  };

  export interface FxSnapshotDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['FxSnapshot'];
      meta: { name: 'FxSnapshot' };
    };
    /**
     * Find zero or one FxSnapshot that matches the filter.
     * @param {FxSnapshotFindUniqueArgs} args - Arguments to find a FxSnapshot
     * @example
     * // Get one FxSnapshot
     * const fxSnapshot = await prisma.fxSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FxSnapshotFindUniqueArgs>(
      args: SelectSubset<T, FxSnapshotFindUniqueArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one FxSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FxSnapshotFindUniqueOrThrowArgs} args - Arguments to find a FxSnapshot
     * @example
     * // Get one FxSnapshot
     * const fxSnapshot = await prisma.fxSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FxSnapshotFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FxSnapshotFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FxSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotFindFirstArgs} args - Arguments to find a FxSnapshot
     * @example
     * // Get one FxSnapshot
     * const fxSnapshot = await prisma.fxSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FxSnapshotFindFirstArgs>(
      args?: SelectSubset<T, FxSnapshotFindFirstArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FxSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotFindFirstOrThrowArgs} args - Arguments to find a FxSnapshot
     * @example
     * // Get one FxSnapshot
     * const fxSnapshot = await prisma.fxSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FxSnapshotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FxSnapshotFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more FxSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FxSnapshots
     * const fxSnapshots = await prisma.fxSnapshot.findMany()
     *
     * // Get first 10 FxSnapshots
     * const fxSnapshots = await prisma.fxSnapshot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const fxSnapshotWithIdOnly = await prisma.fxSnapshot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FxSnapshotFindManyArgs>(
      args?: SelectSubset<T, FxSnapshotFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a FxSnapshot.
     * @param {FxSnapshotCreateArgs} args - Arguments to create a FxSnapshot.
     * @example
     * // Create one FxSnapshot
     * const FxSnapshot = await prisma.fxSnapshot.create({
     *   data: {
     *     // ... data to create a FxSnapshot
     *   }
     * })
     *
     */
    create<T extends FxSnapshotCreateArgs>(
      args: SelectSubset<T, FxSnapshotCreateArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many FxSnapshots.
     * @param {FxSnapshotCreateManyArgs} args - Arguments to create many FxSnapshots.
     * @example
     * // Create many FxSnapshots
     * const fxSnapshot = await prisma.fxSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FxSnapshotCreateManyArgs>(
      args?: SelectSubset<T, FxSnapshotCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many FxSnapshots and returns the data saved in the database.
     * @param {FxSnapshotCreateManyAndReturnArgs} args - Arguments to create many FxSnapshots.
     * @example
     * // Create many FxSnapshots
     * const fxSnapshot = await prisma.fxSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FxSnapshots and only return the `id`
     * const fxSnapshotWithIdOnly = await prisma.fxSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FxSnapshotCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FxSnapshotCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a FxSnapshot.
     * @param {FxSnapshotDeleteArgs} args - Arguments to delete one FxSnapshot.
     * @example
     * // Delete one FxSnapshot
     * const FxSnapshot = await prisma.fxSnapshot.delete({
     *   where: {
     *     // ... filter to delete one FxSnapshot
     *   }
     * })
     *
     */
    delete<T extends FxSnapshotDeleteArgs>(
      args: SelectSubset<T, FxSnapshotDeleteArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one FxSnapshot.
     * @param {FxSnapshotUpdateArgs} args - Arguments to update one FxSnapshot.
     * @example
     * // Update one FxSnapshot
     * const fxSnapshot = await prisma.fxSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FxSnapshotUpdateArgs>(
      args: SelectSubset<T, FxSnapshotUpdateArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more FxSnapshots.
     * @param {FxSnapshotDeleteManyArgs} args - Arguments to filter FxSnapshots to delete.
     * @example
     * // Delete a few FxSnapshots
     * const { count } = await prisma.fxSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FxSnapshotDeleteManyArgs>(
      args?: SelectSubset<T, FxSnapshotDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FxSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FxSnapshots
     * const fxSnapshot = await prisma.fxSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FxSnapshotUpdateManyArgs>(
      args: SelectSubset<T, FxSnapshotUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FxSnapshots and returns the data updated in the database.
     * @param {FxSnapshotUpdateManyAndReturnArgs} args - Arguments to update many FxSnapshots.
     * @example
     * // Update many FxSnapshots
     * const fxSnapshot = await prisma.fxSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FxSnapshots and only return the `id`
     * const fxSnapshotWithIdOnly = await prisma.fxSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FxSnapshotUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FxSnapshotUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one FxSnapshot.
     * @param {FxSnapshotUpsertArgs} args - Arguments to update or create a FxSnapshot.
     * @example
     * // Update or create a FxSnapshot
     * const fxSnapshot = await prisma.fxSnapshot.upsert({
     *   create: {
     *     // ... data to create a FxSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FxSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends FxSnapshotUpsertArgs>(
      args: SelectSubset<T, FxSnapshotUpsertArgs<ExtArgs>>,
    ): Prisma__FxSnapshotClient<
      $Result.GetResult<
        Prisma.$FxSnapshotPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of FxSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotCountArgs} args - Arguments to filter FxSnapshots to count.
     * @example
     * // Count the number of FxSnapshots
     * const count = await prisma.fxSnapshot.count({
     *   where: {
     *     // ... the filter for the FxSnapshots we want to count
     *   }
     * })
     **/
    count<T extends FxSnapshotCountArgs>(
      args?: Subset<T, FxSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FxSnapshotCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FxSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FxSnapshotAggregateArgs>(
      args: Subset<T, FxSnapshotAggregateArgs>,
    ): Prisma.PrismaPromise<GetFxSnapshotAggregateType<T>>;

    /**
     * Group by FxSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxSnapshotGroupByArgs} args - Group by arguments.
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
      T extends FxSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FxSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: FxSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FxSnapshotGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFxSnapshotGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FxSnapshot model
     */
    readonly fields: FxSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FxSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FxSnapshotClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionDefaultArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      | $Result.GetResult<
          Prisma.$TransactionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the FxSnapshot model
   */
  interface FxSnapshotFieldRefs {
    readonly id: FieldRef<'FxSnapshot', 'String'>;
    readonly baseCurrency: FieldRef<'FxSnapshot', 'Currency'>;
    readonly quoteCurrency: FieldRef<'FxSnapshot', 'Currency'>;
    readonly rate: FieldRef<'FxSnapshot', 'Decimal'>;
    readonly timestamp: FieldRef<'FxSnapshot', 'DateTime'>;
    readonly provider: FieldRef<'FxSnapshot', 'FxProvider'>;
    readonly transactionId: FieldRef<'FxSnapshot', 'String'>;
  }

  // Custom InputTypes
  /**
   * FxSnapshot findUnique
   */
  export type FxSnapshotFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * Filter, which FxSnapshot to fetch.
     */
    where: FxSnapshotWhereUniqueInput;
  };

  /**
   * FxSnapshot findUniqueOrThrow
   */
  export type FxSnapshotFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * Filter, which FxSnapshot to fetch.
     */
    where: FxSnapshotWhereUniqueInput;
  };

  /**
   * FxSnapshot findFirst
   */
  export type FxSnapshotFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * Filter, which FxSnapshot to fetch.
     */
    where?: FxSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FxSnapshots to fetch.
     */
    orderBy?:
      | FxSnapshotOrderByWithRelationInput
      | FxSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FxSnapshots.
     */
    cursor?: FxSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FxSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FxSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FxSnapshots.
     */
    distinct?: FxSnapshotScalarFieldEnum | FxSnapshotScalarFieldEnum[];
  };

  /**
   * FxSnapshot findFirstOrThrow
   */
  export type FxSnapshotFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * Filter, which FxSnapshot to fetch.
     */
    where?: FxSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FxSnapshots to fetch.
     */
    orderBy?:
      | FxSnapshotOrderByWithRelationInput
      | FxSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FxSnapshots.
     */
    cursor?: FxSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FxSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FxSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FxSnapshots.
     */
    distinct?: FxSnapshotScalarFieldEnum | FxSnapshotScalarFieldEnum[];
  };

  /**
   * FxSnapshot findMany
   */
  export type FxSnapshotFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * Filter, which FxSnapshots to fetch.
     */
    where?: FxSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FxSnapshots to fetch.
     */
    orderBy?:
      | FxSnapshotOrderByWithRelationInput
      | FxSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FxSnapshots.
     */
    cursor?: FxSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FxSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FxSnapshots.
     */
    skip?: number;
    distinct?: FxSnapshotScalarFieldEnum | FxSnapshotScalarFieldEnum[];
  };

  /**
   * FxSnapshot create
   */
  export type FxSnapshotCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * The data needed to create a FxSnapshot.
     */
    data: XOR<FxSnapshotCreateInput, FxSnapshotUncheckedCreateInput>;
  };

  /**
   * FxSnapshot createMany
   */
  export type FxSnapshotCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many FxSnapshots.
     */
    data: FxSnapshotCreateManyInput | FxSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FxSnapshot createManyAndReturn
   */
  export type FxSnapshotCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * The data used to create many FxSnapshots.
     */
    data: FxSnapshotCreateManyInput | FxSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FxSnapshot update
   */
  export type FxSnapshotUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * The data needed to update a FxSnapshot.
     */
    data: XOR<FxSnapshotUpdateInput, FxSnapshotUncheckedUpdateInput>;
    /**
     * Choose, which FxSnapshot to update.
     */
    where: FxSnapshotWhereUniqueInput;
  };

  /**
   * FxSnapshot updateMany
   */
  export type FxSnapshotUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update FxSnapshots.
     */
    data: XOR<
      FxSnapshotUpdateManyMutationInput,
      FxSnapshotUncheckedUpdateManyInput
    >;
    /**
     * Filter which FxSnapshots to update
     */
    where?: FxSnapshotWhereInput;
    /**
     * Limit how many FxSnapshots to update.
     */
    limit?: number;
  };

  /**
   * FxSnapshot updateManyAndReturn
   */
  export type FxSnapshotUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * The data used to update FxSnapshots.
     */
    data: XOR<
      FxSnapshotUpdateManyMutationInput,
      FxSnapshotUncheckedUpdateManyInput
    >;
    /**
     * Filter which FxSnapshots to update
     */
    where?: FxSnapshotWhereInput;
    /**
     * Limit how many FxSnapshots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FxSnapshot upsert
   */
  export type FxSnapshotUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * The filter to search for the FxSnapshot to update in case it exists.
     */
    where: FxSnapshotWhereUniqueInput;
    /**
     * In case the FxSnapshot found by the `where` argument doesn't exist, create a new FxSnapshot with this data.
     */
    create: XOR<FxSnapshotCreateInput, FxSnapshotUncheckedCreateInput>;
    /**
     * In case the FxSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FxSnapshotUpdateInput, FxSnapshotUncheckedUpdateInput>;
  };

  /**
   * FxSnapshot delete
   */
  export type FxSnapshotDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
    /**
     * Filter which FxSnapshot to delete.
     */
    where: FxSnapshotWhereUniqueInput;
  };

  /**
   * FxSnapshot deleteMany
   */
  export type FxSnapshotDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FxSnapshots to delete
     */
    where?: FxSnapshotWhereInput;
    /**
     * Limit how many FxSnapshots to delete.
     */
    limit?: number;
  };

  /**
   * FxSnapshot without action
   */
  export type FxSnapshotDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FxSnapshot
     */
    select?: FxSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FxSnapshot
     */
    omit?: FxSnapshotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxSnapshotInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    name: 'name';
    password: 'password';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const OtpTokenScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    tokenType: 'tokenType';
    tokenHash: 'tokenHash';
    expiresAt: 'expiresAt';
    isUsed: 'isUsed';
  };

  export type OtpTokenScalarFieldEnum =
    (typeof OtpTokenScalarFieldEnum)[keyof typeof OtpTokenScalarFieldEnum];

  export const VirtualAccountScalarFieldEnum: {
    id: 'id';
    name: 'name';
    currency: 'currency';
    balance: 'balance';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
    idempotencyKey: 'idempotencyKey';
  };

  export type VirtualAccountScalarFieldEnum =
    (typeof VirtualAccountScalarFieldEnum)[keyof typeof VirtualAccountScalarFieldEnum];

  export const TransactionScalarFieldEnum: {
    id: 'id';
    type: 'type';
    status: 'status';
    initiatorId: 'initiatorId';
    initiatorType: 'initiatorType';
    idempotencyKey: 'idempotencyKey';
    metadata: 'metadata';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
    executedAt: 'executedAt';
    fxSnapshotId: 'fxSnapshotId';
  };

  export type TransactionScalarFieldEnum =
    (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

  export const LedgerEntryScalarFieldEnum: {
    id: 'id';
    transactionId: 'transactionId';
    accountId: 'accountId';
    currency: 'currency';
    amount: 'amount';
    entryType: 'entryType';
    fxRate: 'fxRate';
    metadata: 'metadata';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type LedgerEntryScalarFieldEnum =
    (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum];

  export const FxSnapshotScalarFieldEnum: {
    id: 'id';
    baseCurrency: 'baseCurrency';
    quoteCurrency: 'quoteCurrency';
    rate: 'rate';
    timestamp: 'timestamp';
    provider: 'provider';
    transactionId: 'transactionId';
  };

  export type FxSnapshotScalarFieldEnum =
    (typeof FxSnapshotScalarFieldEnum)[keyof typeof FxSnapshotScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TokenType'
  >;

  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TokenType[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Currency'
  >;

  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Currency[]'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >;

  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TransactionType'>;

  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TransactionType[]'>;

  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TransactionStatus'>;

  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>;

  /**
   * Reference to a field of type 'InitiatorType'
   */
  export type EnumInitiatorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'InitiatorType'
  >;

  /**
   * Reference to a field of type 'InitiatorType[]'
   */
  export type ListEnumInitiatorTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InitiatorType[]'>;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'EntryType'
   */
  export type EnumEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EntryType'
  >;

  /**
   * Reference to a field of type 'EntryType[]'
   */
  export type ListEnumEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EntryType[]'
  >;

  /**
   * Reference to a field of type 'FxProvider'
   */
  export type EnumFxProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'FxProvider'
  >;

  /**
   * Reference to a field of type 'FxProvider[]'
   */
  export type ListEnumFxProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'FxProvider[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    name?: StringNullableFilter<'User'> | string | null;
    password?: StringFilter<'User'> | string;
    tokens?: OtpTokenListRelationFilter;
    transactions?: TransactionListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    tokens?: OtpTokenOrderByRelationAggregateInput;
    transactions?: TransactionOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<'User'> | string | null;
      password?: StringFilter<'User'> | string;
      tokens?: OtpTokenListRelationFilter;
      transactions?: TransactionListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    password?: StringWithAggregatesFilter<'User'> | string;
  };

  export type OtpTokenWhereInput = {
    AND?: OtpTokenWhereInput | OtpTokenWhereInput[];
    OR?: OtpTokenWhereInput[];
    NOT?: OtpTokenWhereInput | OtpTokenWhereInput[];
    id?: StringFilter<'OtpToken'> | string;
    userId?: StringFilter<'OtpToken'> | string;
    tokenType?: EnumTokenTypeFilter<'OtpToken'> | $Enums.TokenType;
    tokenHash?: StringFilter<'OtpToken'> | string;
    expiresAt?: DateTimeFilter<'OtpToken'> | Date | string;
    isUsed?: BoolFilter<'OtpToken'> | boolean;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type OtpTokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenType?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    isUsed?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type OtpTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OtpTokenWhereInput | OtpTokenWhereInput[];
      OR?: OtpTokenWhereInput[];
      NOT?: OtpTokenWhereInput | OtpTokenWhereInput[];
      userId?: StringFilter<'OtpToken'> | string;
      tokenType?: EnumTokenTypeFilter<'OtpToken'> | $Enums.TokenType;
      tokenHash?: StringFilter<'OtpToken'> | string;
      expiresAt?: DateTimeFilter<'OtpToken'> | Date | string;
      isUsed?: BoolFilter<'OtpToken'> | boolean;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type OtpTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenType?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    isUsed?: SortOrder;
    _count?: OtpTokenCountOrderByAggregateInput;
    _max?: OtpTokenMaxOrderByAggregateInput;
    _min?: OtpTokenMinOrderByAggregateInput;
  };

  export type OtpTokenScalarWhereWithAggregatesInput = {
    AND?:
      | OtpTokenScalarWhereWithAggregatesInput
      | OtpTokenScalarWhereWithAggregatesInput[];
    OR?: OtpTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | OtpTokenScalarWhereWithAggregatesInput
      | OtpTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OtpToken'> | string;
    userId?: StringWithAggregatesFilter<'OtpToken'> | string;
    tokenType?:
      | EnumTokenTypeWithAggregatesFilter<'OtpToken'>
      | $Enums.TokenType;
    tokenHash?: StringWithAggregatesFilter<'OtpToken'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'OtpToken'> | Date | string;
    isUsed?: BoolWithAggregatesFilter<'OtpToken'> | boolean;
  };

  export type VirtualAccountWhereInput = {
    AND?: VirtualAccountWhereInput | VirtualAccountWhereInput[];
    OR?: VirtualAccountWhereInput[];
    NOT?: VirtualAccountWhereInput | VirtualAccountWhereInput[];
    id?: StringFilter<'VirtualAccount'> | string;
    name?: StringFilter<'VirtualAccount'> | string;
    currency?: EnumCurrencyFilter<'VirtualAccount'> | $Enums.Currency;
    balance?:
      | DecimalFilter<'VirtualAccount'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFilter<'VirtualAccount'> | Date | string;
    updatedAt?: DateTimeFilter<'VirtualAccount'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'VirtualAccount'> | Date | string | null;
    idempotencyKey?: StringFilter<'VirtualAccount'> | string;
    ledgerEntries?: LedgerEntryListRelationFilter;
  };

  export type VirtualAccountOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    currency?: SortOrder;
    balance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    idempotencyKey?: SortOrder;
    ledgerEntries?: LedgerEntryOrderByRelationAggregateInput;
  };

  export type VirtualAccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      idempotencyKey?: string;
      AND?: VirtualAccountWhereInput | VirtualAccountWhereInput[];
      OR?: VirtualAccountWhereInput[];
      NOT?: VirtualAccountWhereInput | VirtualAccountWhereInput[];
      name?: StringFilter<'VirtualAccount'> | string;
      currency?: EnumCurrencyFilter<'VirtualAccount'> | $Enums.Currency;
      balance?:
        | DecimalFilter<'VirtualAccount'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      createdAt?: DateTimeFilter<'VirtualAccount'> | Date | string;
      updatedAt?: DateTimeFilter<'VirtualAccount'> | Date | string;
      deletedAt?:
        | DateTimeNullableFilter<'VirtualAccount'>
        | Date
        | string
        | null;
      ledgerEntries?: LedgerEntryListRelationFilter;
    },
    'id' | 'idempotencyKey'
  >;

  export type VirtualAccountOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    currency?: SortOrder;
    balance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    idempotencyKey?: SortOrder;
    _count?: VirtualAccountCountOrderByAggregateInput;
    _avg?: VirtualAccountAvgOrderByAggregateInput;
    _max?: VirtualAccountMaxOrderByAggregateInput;
    _min?: VirtualAccountMinOrderByAggregateInput;
    _sum?: VirtualAccountSumOrderByAggregateInput;
  };

  export type VirtualAccountScalarWhereWithAggregatesInput = {
    AND?:
      | VirtualAccountScalarWhereWithAggregatesInput
      | VirtualAccountScalarWhereWithAggregatesInput[];
    OR?: VirtualAccountScalarWhereWithAggregatesInput[];
    NOT?:
      | VirtualAccountScalarWhereWithAggregatesInput
      | VirtualAccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'VirtualAccount'> | string;
    name?: StringWithAggregatesFilter<'VirtualAccount'> | string;
    currency?:
      | EnumCurrencyWithAggregatesFilter<'VirtualAccount'>
      | $Enums.Currency;
    balance?:
      | DecimalWithAggregatesFilter<'VirtualAccount'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeWithAggregatesFilter<'VirtualAccount'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'VirtualAccount'> | Date | string;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'VirtualAccount'>
      | Date
      | string
      | null;
    idempotencyKey?: StringWithAggregatesFilter<'VirtualAccount'> | string;
  };

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[];
    OR?: TransactionWhereInput[];
    NOT?: TransactionWhereInput | TransactionWhereInput[];
    id?: StringFilter<'Transaction'> | string;
    type?: EnumTransactionTypeFilter<'Transaction'> | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFilter<'Transaction'>
      | $Enums.TransactionStatus;
    initiatorId?: StringNullableFilter<'Transaction'> | string | null;
    initiatorType?:
      | EnumInitiatorTypeNullableFilter<'Transaction'>
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: StringNullableFilter<'Transaction'> | string | null;
    metadata?: JsonFilter<'Transaction'>;
    createdAt?: DateTimeFilter<'Transaction'> | Date | string;
    updatedAt?: DateTimeFilter<'Transaction'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    executedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    fxSnapshotId?: StringNullableFilter<'Transaction'> | string | null;
    initiator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    ledgerEntries?: LedgerEntryListRelationFilter;
    fxSnapshot?: XOR<
      FxSnapshotNullableScalarRelationFilter,
      FxSnapshotWhereInput
    > | null;
  };

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    initiatorId?: SortOrderInput | SortOrder;
    initiatorType?: SortOrderInput | SortOrder;
    idempotencyKey?: SortOrderInput | SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    executedAt?: SortOrderInput | SortOrder;
    fxSnapshotId?: SortOrderInput | SortOrder;
    initiator?: UserOrderByWithRelationInput;
    ledgerEntries?: LedgerEntryOrderByRelationAggregateInput;
    fxSnapshot?: FxSnapshotOrderByWithRelationInput;
  };

  export type TransactionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      idempotencyKey?: string;
      fxSnapshotId?: string;
      AND?: TransactionWhereInput | TransactionWhereInput[];
      OR?: TransactionWhereInput[];
      NOT?: TransactionWhereInput | TransactionWhereInput[];
      type?: EnumTransactionTypeFilter<'Transaction'> | $Enums.TransactionType;
      status?:
        | EnumTransactionStatusFilter<'Transaction'>
        | $Enums.TransactionStatus;
      initiatorId?: StringNullableFilter<'Transaction'> | string | null;
      initiatorType?:
        | EnumInitiatorTypeNullableFilter<'Transaction'>
        | $Enums.InitiatorType
        | null;
      metadata?: JsonFilter<'Transaction'>;
      createdAt?: DateTimeFilter<'Transaction'> | Date | string;
      updatedAt?: DateTimeFilter<'Transaction'> | Date | string;
      deletedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
      executedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
      initiator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
      ledgerEntries?: LedgerEntryListRelationFilter;
      fxSnapshot?: XOR<
        FxSnapshotNullableScalarRelationFilter,
        FxSnapshotWhereInput
      > | null;
    },
    'id' | 'idempotencyKey' | 'fxSnapshotId'
  >;

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    initiatorId?: SortOrderInput | SortOrder;
    initiatorType?: SortOrderInput | SortOrder;
    idempotencyKey?: SortOrderInput | SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    executedAt?: SortOrderInput | SortOrder;
    fxSnapshotId?: SortOrderInput | SortOrder;
    _count?: TransactionCountOrderByAggregateInput;
    _max?: TransactionMaxOrderByAggregateInput;
    _min?: TransactionMinOrderByAggregateInput;
  };

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionScalarWhereWithAggregatesInput
      | TransactionScalarWhereWithAggregatesInput[];
    OR?: TransactionScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionScalarWhereWithAggregatesInput
      | TransactionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Transaction'> | string;
    type?:
      | EnumTransactionTypeWithAggregatesFilter<'Transaction'>
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusWithAggregatesFilter<'Transaction'>
      | $Enums.TransactionStatus;
    initiatorId?:
      | StringNullableWithAggregatesFilter<'Transaction'>
      | string
      | null;
    initiatorType?:
      | EnumInitiatorTypeNullableWithAggregatesFilter<'Transaction'>
      | $Enums.InitiatorType
      | null;
    idempotencyKey?:
      | StringNullableWithAggregatesFilter<'Transaction'>
      | string
      | null;
    metadata?: JsonWithAggregatesFilter<'Transaction'>;
    createdAt?: DateTimeWithAggregatesFilter<'Transaction'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Transaction'> | Date | string;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Transaction'>
      | Date
      | string
      | null;
    executedAt?:
      | DateTimeNullableWithAggregatesFilter<'Transaction'>
      | Date
      | string
      | null;
    fxSnapshotId?:
      | StringNullableWithAggregatesFilter<'Transaction'>
      | string
      | null;
  };

  export type LedgerEntryWhereInput = {
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[];
    OR?: LedgerEntryWhereInput[];
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[];
    id?: StringFilter<'LedgerEntry'> | string;
    transactionId?: StringFilter<'LedgerEntry'> | string;
    accountId?: StringFilter<'LedgerEntry'> | string;
    currency?: EnumCurrencyFilter<'LedgerEntry'> | $Enums.Currency;
    amount?:
      | DecimalFilter<'LedgerEntry'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFilter<'LedgerEntry'> | $Enums.EntryType;
    fxRate?:
      | DecimalNullableFilter<'LedgerEntry'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonFilter<'LedgerEntry'>;
    createdAt?: DateTimeFilter<'LedgerEntry'> | Date | string;
    updatedAt?: DateTimeFilter<'LedgerEntry'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'LedgerEntry'> | Date | string | null;
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
    account?: XOR<VirtualAccountScalarRelationFilter, VirtualAccountWhereInput>;
  };

  export type LedgerEntryOrderByWithRelationInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    accountId?: SortOrder;
    currency?: SortOrder;
    amount?: SortOrder;
    entryType?: SortOrder;
    fxRate?: SortOrderInput | SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    transaction?: TransactionOrderByWithRelationInput;
    account?: VirtualAccountOrderByWithRelationInput;
  };

  export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[];
      OR?: LedgerEntryWhereInput[];
      NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[];
      transactionId?: StringFilter<'LedgerEntry'> | string;
      accountId?: StringFilter<'LedgerEntry'> | string;
      currency?: EnumCurrencyFilter<'LedgerEntry'> | $Enums.Currency;
      amount?:
        | DecimalFilter<'LedgerEntry'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      entryType?: EnumEntryTypeFilter<'LedgerEntry'> | $Enums.EntryType;
      fxRate?:
        | DecimalNullableFilter<'LedgerEntry'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      metadata?: JsonFilter<'LedgerEntry'>;
      createdAt?: DateTimeFilter<'LedgerEntry'> | Date | string;
      updatedAt?: DateTimeFilter<'LedgerEntry'> | Date | string;
      deletedAt?: DateTimeNullableFilter<'LedgerEntry'> | Date | string | null;
      transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
      account?: XOR<
        VirtualAccountScalarRelationFilter,
        VirtualAccountWhereInput
      >;
    },
    'id'
  >;

  export type LedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    accountId?: SortOrder;
    currency?: SortOrder;
    amount?: SortOrder;
    entryType?: SortOrder;
    fxRate?: SortOrderInput | SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: LedgerEntryCountOrderByAggregateInput;
    _avg?: LedgerEntryAvgOrderByAggregateInput;
    _max?: LedgerEntryMaxOrderByAggregateInput;
    _min?: LedgerEntryMinOrderByAggregateInput;
    _sum?: LedgerEntrySumOrderByAggregateInput;
  };

  export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?:
      | LedgerEntryScalarWhereWithAggregatesInput
      | LedgerEntryScalarWhereWithAggregatesInput[];
    OR?: LedgerEntryScalarWhereWithAggregatesInput[];
    NOT?:
      | LedgerEntryScalarWhereWithAggregatesInput
      | LedgerEntryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'LedgerEntry'> | string;
    transactionId?: StringWithAggregatesFilter<'LedgerEntry'> | string;
    accountId?: StringWithAggregatesFilter<'LedgerEntry'> | string;
    currency?:
      | EnumCurrencyWithAggregatesFilter<'LedgerEntry'>
      | $Enums.Currency;
    amount?:
      | DecimalWithAggregatesFilter<'LedgerEntry'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?:
      | EnumEntryTypeWithAggregatesFilter<'LedgerEntry'>
      | $Enums.EntryType;
    fxRate?:
      | DecimalNullableWithAggregatesFilter<'LedgerEntry'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonWithAggregatesFilter<'LedgerEntry'>;
    createdAt?: DateTimeWithAggregatesFilter<'LedgerEntry'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'LedgerEntry'> | Date | string;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'LedgerEntry'>
      | Date
      | string
      | null;
  };

  export type FxSnapshotWhereInput = {
    AND?: FxSnapshotWhereInput | FxSnapshotWhereInput[];
    OR?: FxSnapshotWhereInput[];
    NOT?: FxSnapshotWhereInput | FxSnapshotWhereInput[];
    id?: StringFilter<'FxSnapshot'> | string;
    baseCurrency?: EnumCurrencyFilter<'FxSnapshot'> | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFilter<'FxSnapshot'> | $Enums.Currency;
    rate?:
      | DecimalFilter<'FxSnapshot'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFilter<'FxSnapshot'> | Date | string;
    provider?: EnumFxProviderFilter<'FxSnapshot'> | $Enums.FxProvider;
    transactionId?: StringFilter<'FxSnapshot'> | string;
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
  };

  export type FxSnapshotOrderByWithRelationInput = {
    id?: SortOrder;
    baseCurrency?: SortOrder;
    quoteCurrency?: SortOrder;
    rate?: SortOrder;
    timestamp?: SortOrder;
    provider?: SortOrder;
    transactionId?: SortOrder;
    transaction?: TransactionOrderByWithRelationInput;
  };

  export type FxSnapshotWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      transactionId?: string;
      AND?: FxSnapshotWhereInput | FxSnapshotWhereInput[];
      OR?: FxSnapshotWhereInput[];
      NOT?: FxSnapshotWhereInput | FxSnapshotWhereInput[];
      baseCurrency?: EnumCurrencyFilter<'FxSnapshot'> | $Enums.Currency;
      quoteCurrency?: EnumCurrencyFilter<'FxSnapshot'> | $Enums.Currency;
      rate?:
        | DecimalFilter<'FxSnapshot'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      timestamp?: DateTimeFilter<'FxSnapshot'> | Date | string;
      provider?: EnumFxProviderFilter<'FxSnapshot'> | $Enums.FxProvider;
      transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
    },
    'id' | 'transactionId'
  >;

  export type FxSnapshotOrderByWithAggregationInput = {
    id?: SortOrder;
    baseCurrency?: SortOrder;
    quoteCurrency?: SortOrder;
    rate?: SortOrder;
    timestamp?: SortOrder;
    provider?: SortOrder;
    transactionId?: SortOrder;
    _count?: FxSnapshotCountOrderByAggregateInput;
    _avg?: FxSnapshotAvgOrderByAggregateInput;
    _max?: FxSnapshotMaxOrderByAggregateInput;
    _min?: FxSnapshotMinOrderByAggregateInput;
    _sum?: FxSnapshotSumOrderByAggregateInput;
  };

  export type FxSnapshotScalarWhereWithAggregatesInput = {
    AND?:
      | FxSnapshotScalarWhereWithAggregatesInput
      | FxSnapshotScalarWhereWithAggregatesInput[];
    OR?: FxSnapshotScalarWhereWithAggregatesInput[];
    NOT?:
      | FxSnapshotScalarWhereWithAggregatesInput
      | FxSnapshotScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'FxSnapshot'> | string;
    baseCurrency?:
      | EnumCurrencyWithAggregatesFilter<'FxSnapshot'>
      | $Enums.Currency;
    quoteCurrency?:
      | EnumCurrencyWithAggregatesFilter<'FxSnapshot'>
      | $Enums.Currency;
    rate?:
      | DecimalWithAggregatesFilter<'FxSnapshot'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeWithAggregatesFilter<'FxSnapshot'> | Date | string;
    provider?:
      | EnumFxProviderWithAggregatesFilter<'FxSnapshot'>
      | $Enums.FxProvider;
    transactionId?: StringWithAggregatesFilter<'FxSnapshot'> | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    tokens?: OtpTokenCreateNestedManyWithoutUserInput;
    transactions?: TransactionCreateNestedManyWithoutInitiatorInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    tokens?: OtpTokenUncheckedCreateNestedManyWithoutUserInput;
    transactions?: TransactionUncheckedCreateNestedManyWithoutInitiatorInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    tokens?: OtpTokenUpdateManyWithoutUserNestedInput;
    transactions?: TransactionUpdateManyWithoutInitiatorNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    tokens?: OtpTokenUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: TransactionUncheckedUpdateManyWithoutInitiatorNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type OtpTokenCreateInput = {
    id?: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date | string;
    isUsed?: boolean;
    user: UserCreateNestedOneWithoutTokensInput;
  };

  export type OtpTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date | string;
    isUsed?: boolean;
  };

  export type OtpTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutTokensNestedInput;
  };

  export type OtpTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OtpTokenCreateManyInput = {
    id?: string;
    userId: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date | string;
    isUsed?: boolean;
  };

  export type OtpTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OtpTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type VirtualAccountCreateInput = {
    id?: string;
    name: string;
    currency: $Enums.Currency;
    balance?: Decimal | DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    idempotencyKey: string;
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutAccountInput;
  };

  export type VirtualAccountUncheckedCreateInput = {
    id?: string;
    name: string;
    currency: $Enums.Currency;
    balance?: Decimal | DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    idempotencyKey: string;
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutAccountInput;
  };

  export type VirtualAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    idempotencyKey?: StringFieldUpdateOperationsInput | string;
    ledgerEntries?: LedgerEntryUpdateManyWithoutAccountNestedInput;
  };

  export type VirtualAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    idempotencyKey?: StringFieldUpdateOperationsInput | string;
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput;
  };

  export type VirtualAccountCreateManyInput = {
    id?: string;
    name: string;
    currency: $Enums.Currency;
    balance?: Decimal | DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    idempotencyKey: string;
  };

  export type VirtualAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    idempotencyKey?: StringFieldUpdateOperationsInput | string;
  };

  export type VirtualAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    idempotencyKey?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionCreateInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    initiator?: UserCreateNestedOneWithoutTransactionsInput;
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput;
    fxSnapshot?: FxSnapshotCreateNestedOneWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorId?: string | null;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput;
    fxSnapshot?: FxSnapshotUncheckedCreateNestedOneWithoutTransactionInput;
  };

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiator?: UserUpdateOneWithoutTransactionsNestedInput;
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput;
    fxSnapshot?: FxSnapshotUpdateOneWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput;
    fxSnapshot?: FxSnapshotUncheckedUpdateOneWithoutTransactionNestedInput;
  };

  export type TransactionCreateManyInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorId?: string | null;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
  };

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type LedgerEntryCreateInput = {
    id?: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    transaction: TransactionCreateNestedOneWithoutLedgerEntriesInput;
    account: VirtualAccountCreateNestedOneWithoutLedgerEntriesInput;
  };

  export type LedgerEntryUncheckedCreateInput = {
    id?: string;
    transactionId: string;
    accountId: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
  };

  export type LedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transaction?: TransactionUpdateOneRequiredWithoutLedgerEntriesNestedInput;
    account?: VirtualAccountUpdateOneRequiredWithoutLedgerEntriesNestedInput;
  };

  export type LedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type LedgerEntryCreateManyInput = {
    id?: string;
    transactionId: string;
    accountId: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
  };

  export type LedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type LedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type FxSnapshotCreateInput = {
    id?: string;
    baseCurrency: $Enums.Currency;
    quoteCurrency: $Enums.Currency;
    rate: Decimal | DecimalJsLike | number | string;
    timestamp?: Date | string;
    provider: $Enums.FxProvider;
    transaction: TransactionCreateNestedOneWithoutFxSnapshotInput;
  };

  export type FxSnapshotUncheckedCreateInput = {
    id?: string;
    baseCurrency: $Enums.Currency;
    quoteCurrency: $Enums.Currency;
    rate: Decimal | DecimalJsLike | number | string;
    timestamp?: Date | string;
    provider: $Enums.FxProvider;
    transactionId: string;
  };

  export type FxSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    baseCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    rate?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: EnumFxProviderFieldUpdateOperationsInput | $Enums.FxProvider;
    transaction?: TransactionUpdateOneRequiredWithoutFxSnapshotNestedInput;
  };

  export type FxSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    baseCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    rate?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: EnumFxProviderFieldUpdateOperationsInput | $Enums.FxProvider;
    transactionId?: StringFieldUpdateOperationsInput | string;
  };

  export type FxSnapshotCreateManyInput = {
    id?: string;
    baseCurrency: $Enums.Currency;
    quoteCurrency: $Enums.Currency;
    rate: Decimal | DecimalJsLike | number | string;
    timestamp?: Date | string;
    provider: $Enums.FxProvider;
    transactionId: string;
  };

  export type FxSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    baseCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    rate?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: EnumFxProviderFieldUpdateOperationsInput | $Enums.FxProvider;
  };

  export type FxSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    baseCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    rate?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: EnumFxProviderFieldUpdateOperationsInput | $Enums.FxProvider;
    transactionId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type OtpTokenListRelationFilter = {
    every?: OtpTokenWhereInput;
    some?: OtpTokenWhereInput;
    none?: OtpTokenWhereInput;
  };

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput;
    some?: TransactionWhereInput;
    none?: TransactionWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type OtpTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type OtpTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenType?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    isUsed?: SortOrder;
  };

  export type OtpTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenType?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    isUsed?: SortOrder;
  };

  export type OtpTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenType?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    isUsed?: SortOrder;
  };

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TokenType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>;
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type LedgerEntryListRelationFilter = {
    every?: LedgerEntryWhereInput;
    some?: LedgerEntryWhereInput;
    none?: LedgerEntryWhereInput;
  };

  export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type VirtualAccountCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    currency?: SortOrder;
    balance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    idempotencyKey?: SortOrder;
  };

  export type VirtualAccountAvgOrderByAggregateInput = {
    balance?: SortOrder;
  };

  export type VirtualAccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    currency?: SortOrder;
    balance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    idempotencyKey?: SortOrder;
  };

  export type VirtualAccountMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    currency?: SortOrder;
    balance?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    idempotencyKey?: SortOrder;
  };

  export type VirtualAccountSumOrderByAggregateInput = {
    balance?: SortOrder;
  };

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCurrencyWithAggregatesFilter<$PrismaModel>
      | $Enums.Currency;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCurrencyFilter<$PrismaModel>;
    _max?: NestedEnumCurrencyFilter<$PrismaModel>;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeFilter<$PrismaModel>
      | $Enums.TransactionType;
  };

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionStatus
      | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionStatusFilter<$PrismaModel>
      | $Enums.TransactionStatus;
  };

  export type EnumInitiatorTypeNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InitiatorType
      | EnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumInitiatorTypeNullableFilter<$PrismaModel>
      | $Enums.InitiatorType
      | null;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type FxSnapshotNullableScalarRelationFilter = {
    is?: FxSnapshotWhereInput | null;
    isNot?: FxSnapshotWhereInput | null;
  };

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    initiatorId?: SortOrder;
    initiatorType?: SortOrder;
    idempotencyKey?: SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    executedAt?: SortOrder;
    fxSnapshotId?: SortOrder;
  };

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    initiatorId?: SortOrder;
    initiatorType?: SortOrder;
    idempotencyKey?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    executedAt?: SortOrder;
    fxSnapshotId?: SortOrder;
  };

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    initiatorId?: SortOrder;
    initiatorType?: SortOrder;
    idempotencyKey?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    executedAt?: SortOrder;
    fxSnapshotId?: SortOrder;
  };

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
  };

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.TransactionStatus
        | EnumTransactionStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.TransactionStatus[]
        | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.TransactionStatus[]
        | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.TransactionStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
      _max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
    };

  export type EnumInitiatorTypeNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InitiatorType
      | EnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumInitiatorTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.InitiatorType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumInitiatorTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumInitiatorTypeNullableFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type EnumEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEntryTypeFilter<$PrismaModel> | $Enums.EntryType;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput;
    isNot?: TransactionWhereInput;
  };

  export type VirtualAccountScalarRelationFilter = {
    is?: VirtualAccountWhereInput;
    isNot?: VirtualAccountWhereInput;
  };

  export type LedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    accountId?: SortOrder;
    currency?: SortOrder;
    amount?: SortOrder;
    entryType?: SortOrder;
    fxRate?: SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type LedgerEntryAvgOrderByAggregateInput = {
    amount?: SortOrder;
    fxRate?: SortOrder;
  };

  export type LedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    accountId?: SortOrder;
    currency?: SortOrder;
    amount?: SortOrder;
    entryType?: SortOrder;
    fxRate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type LedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    accountId?: SortOrder;
    currency?: SortOrder;
    amount?: SortOrder;
    entryType?: SortOrder;
    fxRate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type LedgerEntrySumOrderByAggregateInput = {
    amount?: SortOrder;
    fxRate?: SortOrder;
  };

  export type EnumEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EntryType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEntryTypeFilter<$PrismaModel>;
    _max?: NestedEnumEntryTypeFilter<$PrismaModel>;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type EnumFxProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.FxProvider | EnumFxProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    not?: NestedEnumFxProviderFilter<$PrismaModel> | $Enums.FxProvider;
  };

  export type FxSnapshotCountOrderByAggregateInput = {
    id?: SortOrder;
    baseCurrency?: SortOrder;
    quoteCurrency?: SortOrder;
    rate?: SortOrder;
    timestamp?: SortOrder;
    provider?: SortOrder;
    transactionId?: SortOrder;
  };

  export type FxSnapshotAvgOrderByAggregateInput = {
    rate?: SortOrder;
  };

  export type FxSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder;
    baseCurrency?: SortOrder;
    quoteCurrency?: SortOrder;
    rate?: SortOrder;
    timestamp?: SortOrder;
    provider?: SortOrder;
    transactionId?: SortOrder;
  };

  export type FxSnapshotMinOrderByAggregateInput = {
    id?: SortOrder;
    baseCurrency?: SortOrder;
    quoteCurrency?: SortOrder;
    rate?: SortOrder;
    timestamp?: SortOrder;
    provider?: SortOrder;
    transactionId?: SortOrder;
  };

  export type FxSnapshotSumOrderByAggregateInput = {
    rate?: SortOrder;
  };

  export type EnumFxProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FxProvider | EnumFxProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumFxProviderWithAggregatesFilter<$PrismaModel>
      | $Enums.FxProvider;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumFxProviderFilter<$PrismaModel>;
    _max?: NestedEnumFxProviderFilter<$PrismaModel>;
  };

  export type OtpTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          OtpTokenCreateWithoutUserInput,
          OtpTokenUncheckedCreateWithoutUserInput
        >
      | OtpTokenCreateWithoutUserInput[]
      | OtpTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpTokenCreateOrConnectWithoutUserInput
      | OtpTokenCreateOrConnectWithoutUserInput[];
    createMany?: OtpTokenCreateManyUserInputEnvelope;
    connect?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
  };

  export type TransactionCreateNestedManyWithoutInitiatorInput = {
    create?:
      | XOR<
          TransactionCreateWithoutInitiatorInput,
          TransactionUncheckedCreateWithoutInitiatorInput
        >
      | TransactionCreateWithoutInitiatorInput[]
      | TransactionUncheckedCreateWithoutInitiatorInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutInitiatorInput
      | TransactionCreateOrConnectWithoutInitiatorInput[];
    createMany?: TransactionCreateManyInitiatorInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type OtpTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          OtpTokenCreateWithoutUserInput,
          OtpTokenUncheckedCreateWithoutUserInput
        >
      | OtpTokenCreateWithoutUserInput[]
      | OtpTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpTokenCreateOrConnectWithoutUserInput
      | OtpTokenCreateOrConnectWithoutUserInput[];
    createMany?: OtpTokenCreateManyUserInputEnvelope;
    connect?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
  };

  export type TransactionUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?:
      | XOR<
          TransactionCreateWithoutInitiatorInput,
          TransactionUncheckedCreateWithoutInitiatorInput
        >
      | TransactionCreateWithoutInitiatorInput[]
      | TransactionUncheckedCreateWithoutInitiatorInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutInitiatorInput
      | TransactionCreateOrConnectWithoutInitiatorInput[];
    createMany?: TransactionCreateManyInitiatorInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type OtpTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          OtpTokenCreateWithoutUserInput,
          OtpTokenUncheckedCreateWithoutUserInput
        >
      | OtpTokenCreateWithoutUserInput[]
      | OtpTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpTokenCreateOrConnectWithoutUserInput
      | OtpTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | OtpTokenUpsertWithWhereUniqueWithoutUserInput
      | OtpTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OtpTokenCreateManyUserInputEnvelope;
    set?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    disconnect?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    delete?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    connect?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    update?:
      | OtpTokenUpdateWithWhereUniqueWithoutUserInput
      | OtpTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OtpTokenUpdateManyWithWhereWithoutUserInput
      | OtpTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OtpTokenScalarWhereInput | OtpTokenScalarWhereInput[];
  };

  export type TransactionUpdateManyWithoutInitiatorNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutInitiatorInput,
          TransactionUncheckedCreateWithoutInitiatorInput
        >
      | TransactionCreateWithoutInitiatorInput[]
      | TransactionUncheckedCreateWithoutInitiatorInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutInitiatorInput
      | TransactionCreateOrConnectWithoutInitiatorInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutInitiatorInput
      | TransactionUpsertWithWhereUniqueWithoutInitiatorInput[];
    createMany?: TransactionCreateManyInitiatorInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutInitiatorInput
      | TransactionUpdateWithWhereUniqueWithoutInitiatorInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutInitiatorInput
      | TransactionUpdateManyWithWhereWithoutInitiatorInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type OtpTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          OtpTokenCreateWithoutUserInput,
          OtpTokenUncheckedCreateWithoutUserInput
        >
      | OtpTokenCreateWithoutUserInput[]
      | OtpTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpTokenCreateOrConnectWithoutUserInput
      | OtpTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | OtpTokenUpsertWithWhereUniqueWithoutUserInput
      | OtpTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OtpTokenCreateManyUserInputEnvelope;
    set?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    disconnect?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    delete?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    connect?: OtpTokenWhereUniqueInput | OtpTokenWhereUniqueInput[];
    update?:
      | OtpTokenUpdateWithWhereUniqueWithoutUserInput
      | OtpTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OtpTokenUpdateManyWithWhereWithoutUserInput
      | OtpTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OtpTokenScalarWhereInput | OtpTokenScalarWhereInput[];
  };

  export type TransactionUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutInitiatorInput,
          TransactionUncheckedCreateWithoutInitiatorInput
        >
      | TransactionCreateWithoutInitiatorInput[]
      | TransactionUncheckedCreateWithoutInitiatorInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutInitiatorInput
      | TransactionCreateOrConnectWithoutInitiatorInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutInitiatorInput
      | TransactionUpsertWithWhereUniqueWithoutInitiatorInput[];
    createMany?: TransactionCreateManyInitiatorInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutInitiatorInput
      | TransactionUpdateWithWhereUniqueWithoutInitiatorInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutInitiatorInput
      | TransactionUpdateManyWithWhereWithoutInitiatorInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;
    upsert?: UserUpsertWithoutTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTokensInput,
        UserUpdateWithoutTokensInput
      >,
      UserUncheckedUpdateWithoutTokensInput
    >;
  };

  export type LedgerEntryCreateNestedManyWithoutAccountInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutAccountInput,
          LedgerEntryUncheckedCreateWithoutAccountInput
        >
      | LedgerEntryCreateWithoutAccountInput[]
      | LedgerEntryUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutAccountInput
      | LedgerEntryCreateOrConnectWithoutAccountInput[];
    createMany?: LedgerEntryCreateManyAccountInputEnvelope;
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
  };

  export type LedgerEntryUncheckedCreateNestedManyWithoutAccountInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutAccountInput,
          LedgerEntryUncheckedCreateWithoutAccountInput
        >
      | LedgerEntryCreateWithoutAccountInput[]
      | LedgerEntryUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutAccountInput
      | LedgerEntryCreateOrConnectWithoutAccountInput[];
    createMany?: LedgerEntryCreateManyAccountInputEnvelope;
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
  };

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency;
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type LedgerEntryUpdateManyWithoutAccountNestedInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutAccountInput,
          LedgerEntryUncheckedCreateWithoutAccountInput
        >
      | LedgerEntryCreateWithoutAccountInput[]
      | LedgerEntryUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutAccountInput
      | LedgerEntryCreateOrConnectWithoutAccountInput[];
    upsert?:
      | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput
      | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: LedgerEntryCreateManyAccountInputEnvelope;
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    update?:
      | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput
      | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?:
      | LedgerEntryUpdateManyWithWhereWithoutAccountInput
      | LedgerEntryUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[];
  };

  export type LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutAccountInput,
          LedgerEntryUncheckedCreateWithoutAccountInput
        >
      | LedgerEntryCreateWithoutAccountInput[]
      | LedgerEntryUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutAccountInput
      | LedgerEntryCreateOrConnectWithoutAccountInput[];
    upsert?:
      | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput
      | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: LedgerEntryCreateManyAccountInputEnvelope;
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    update?:
      | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput
      | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?:
      | LedgerEntryUpdateManyWithWhereWithoutAccountInput
      | LedgerEntryUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      UserCreateWithoutTransactionsInput,
      UserUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type LedgerEntryCreateNestedManyWithoutTransactionInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutTransactionInput,
          LedgerEntryUncheckedCreateWithoutTransactionInput
        >
      | LedgerEntryCreateWithoutTransactionInput[]
      | LedgerEntryUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutTransactionInput
      | LedgerEntryCreateOrConnectWithoutTransactionInput[];
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope;
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
  };

  export type FxSnapshotCreateNestedOneWithoutTransactionInput = {
    create?: XOR<
      FxSnapshotCreateWithoutTransactionInput,
      FxSnapshotUncheckedCreateWithoutTransactionInput
    >;
    connectOrCreate?: FxSnapshotCreateOrConnectWithoutTransactionInput;
    connect?: FxSnapshotWhereUniqueInput;
  };

  export type LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutTransactionInput,
          LedgerEntryUncheckedCreateWithoutTransactionInput
        >
      | LedgerEntryCreateWithoutTransactionInput[]
      | LedgerEntryUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutTransactionInput
      | LedgerEntryCreateOrConnectWithoutTransactionInput[];
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope;
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
  };

  export type FxSnapshotUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<
      FxSnapshotCreateWithoutTransactionInput,
      FxSnapshotUncheckedCreateWithoutTransactionInput
    >;
    connectOrCreate?: FxSnapshotCreateOrConnectWithoutTransactionInput;
    connect?: FxSnapshotWhereUniqueInput;
  };

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
  };

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
  };

  export type NullableEnumInitiatorTypeFieldUpdateOperationsInput = {
    set?: $Enums.InitiatorType | null;
  };

  export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      UserCreateWithoutTransactionsInput,
      UserUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;
    upsert?: UserUpsertWithoutTransactionsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTransactionsInput,
        UserUpdateWithoutTransactionsInput
      >,
      UserUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type LedgerEntryUpdateManyWithoutTransactionNestedInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutTransactionInput,
          LedgerEntryUncheckedCreateWithoutTransactionInput
        >
      | LedgerEntryCreateWithoutTransactionInput[]
      | LedgerEntryUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutTransactionInput
      | LedgerEntryCreateOrConnectWithoutTransactionInput[];
    upsert?:
      | LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput
      | LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope;
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    update?:
      | LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput
      | LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?:
      | LedgerEntryUpdateManyWithWhereWithoutTransactionInput
      | LedgerEntryUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[];
  };

  export type FxSnapshotUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<
      FxSnapshotCreateWithoutTransactionInput,
      FxSnapshotUncheckedCreateWithoutTransactionInput
    >;
    connectOrCreate?: FxSnapshotCreateOrConnectWithoutTransactionInput;
    upsert?: FxSnapshotUpsertWithoutTransactionInput;
    disconnect?: FxSnapshotWhereInput | boolean;
    delete?: FxSnapshotWhereInput | boolean;
    connect?: FxSnapshotWhereUniqueInput;
    update?: XOR<
      XOR<
        FxSnapshotUpdateToOneWithWhereWithoutTransactionInput,
        FxSnapshotUpdateWithoutTransactionInput
      >,
      FxSnapshotUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?:
      | XOR<
          LedgerEntryCreateWithoutTransactionInput,
          LedgerEntryUncheckedCreateWithoutTransactionInput
        >
      | LedgerEntryCreateWithoutTransactionInput[]
      | LedgerEntryUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | LedgerEntryCreateOrConnectWithoutTransactionInput
      | LedgerEntryCreateOrConnectWithoutTransactionInput[];
    upsert?:
      | LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput
      | LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope;
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[];
    update?:
      | LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput
      | LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?:
      | LedgerEntryUpdateManyWithWhereWithoutTransactionInput
      | LedgerEntryUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[];
  };

  export type FxSnapshotUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<
      FxSnapshotCreateWithoutTransactionInput,
      FxSnapshotUncheckedCreateWithoutTransactionInput
    >;
    connectOrCreate?: FxSnapshotCreateOrConnectWithoutTransactionInput;
    upsert?: FxSnapshotUpsertWithoutTransactionInput;
    disconnect?: FxSnapshotWhereInput | boolean;
    delete?: FxSnapshotWhereInput | boolean;
    connect?: FxSnapshotWhereUniqueInput;
    update?: XOR<
      XOR<
        FxSnapshotUpdateToOneWithWhereWithoutTransactionInput,
        FxSnapshotUpdateWithoutTransactionInput
      >,
      FxSnapshotUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type TransactionCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<
      TransactionCreateWithoutLedgerEntriesInput,
      TransactionUncheckedCreateWithoutLedgerEntriesInput
    >;
    connectOrCreate?: TransactionCreateOrConnectWithoutLedgerEntriesInput;
    connect?: TransactionWhereUniqueInput;
  };

  export type VirtualAccountCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<
      VirtualAccountCreateWithoutLedgerEntriesInput,
      VirtualAccountUncheckedCreateWithoutLedgerEntriesInput
    >;
    connectOrCreate?: VirtualAccountCreateOrConnectWithoutLedgerEntriesInput;
    connect?: VirtualAccountWhereUniqueInput;
  };

  export type EnumEntryTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntryType;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type TransactionUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<
      TransactionCreateWithoutLedgerEntriesInput,
      TransactionUncheckedCreateWithoutLedgerEntriesInput
    >;
    connectOrCreate?: TransactionCreateOrConnectWithoutLedgerEntriesInput;
    upsert?: TransactionUpsertWithoutLedgerEntriesInput;
    connect?: TransactionWhereUniqueInput;
    update?: XOR<
      XOR<
        TransactionUpdateToOneWithWhereWithoutLedgerEntriesInput,
        TransactionUpdateWithoutLedgerEntriesInput
      >,
      TransactionUncheckedUpdateWithoutLedgerEntriesInput
    >;
  };

  export type VirtualAccountUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<
      VirtualAccountCreateWithoutLedgerEntriesInput,
      VirtualAccountUncheckedCreateWithoutLedgerEntriesInput
    >;
    connectOrCreate?: VirtualAccountCreateOrConnectWithoutLedgerEntriesInput;
    upsert?: VirtualAccountUpsertWithoutLedgerEntriesInput;
    connect?: VirtualAccountWhereUniqueInput;
    update?: XOR<
      XOR<
        VirtualAccountUpdateToOneWithWhereWithoutLedgerEntriesInput,
        VirtualAccountUpdateWithoutLedgerEntriesInput
      >,
      VirtualAccountUncheckedUpdateWithoutLedgerEntriesInput
    >;
  };

  export type TransactionCreateNestedOneWithoutFxSnapshotInput = {
    create?: XOR<
      TransactionCreateWithoutFxSnapshotInput,
      TransactionUncheckedCreateWithoutFxSnapshotInput
    >;
    connectOrCreate?: TransactionCreateOrConnectWithoutFxSnapshotInput;
    connect?: TransactionWhereUniqueInput;
  };

  export type EnumFxProviderFieldUpdateOperationsInput = {
    set?: $Enums.FxProvider;
  };

  export type TransactionUpdateOneRequiredWithoutFxSnapshotNestedInput = {
    create?: XOR<
      TransactionCreateWithoutFxSnapshotInput,
      TransactionUncheckedCreateWithoutFxSnapshotInput
    >;
    connectOrCreate?: TransactionCreateOrConnectWithoutFxSnapshotInput;
    upsert?: TransactionUpsertWithoutFxSnapshotInput;
    connect?: TransactionWhereUniqueInput;
    update?: XOR<
      XOR<
        TransactionUpdateToOneWithWhereWithoutFxSnapshotInput,
        TransactionUpdateWithoutFxSnapshotInput
      >,
      TransactionUncheckedUpdateWithoutFxSnapshotInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TokenType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>;
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCurrencyWithAggregatesFilter<$PrismaModel>
      | $Enums.Currency;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCurrencyFilter<$PrismaModel>;
    _max?: NestedEnumCurrencyFilter<$PrismaModel>;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeFilter<$PrismaModel>
      | $Enums.TransactionType;
  };

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionStatus
      | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionStatusFilter<$PrismaModel>
      | $Enums.TransactionStatus;
  };

  export type NestedEnumInitiatorTypeNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InitiatorType
      | EnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumInitiatorTypeNullableFilter<$PrismaModel>
      | $Enums.InitiatorType
      | null;
  };

  export type NestedEnumTransactionTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
  };

  export type NestedEnumTransactionStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TransactionStatus
      | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionStatus[]
      | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
  };

  export type NestedEnumInitiatorTypeNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InitiatorType
      | EnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.InitiatorType[]
      | ListEnumInitiatorTypeFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumInitiatorTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.InitiatorType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumInitiatorTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumInitiatorTypeNullableFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedEnumEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEntryTypeFilter<$PrismaModel> | $Enums.EntryType;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntryType[] | ListEnumEntryTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EntryType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEntryTypeFilter<$PrismaModel>;
    _max?: NestedEnumEntryTypeFilter<$PrismaModel>;
  };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null;
      in?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      notIn?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedDecimalNullableFilter<$PrismaModel>;
      _sum?: NestedDecimalNullableFilter<$PrismaModel>;
      _min?: NestedDecimalNullableFilter<$PrismaModel>;
      _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };

  export type NestedEnumFxProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.FxProvider | EnumFxProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    not?: NestedEnumFxProviderFilter<$PrismaModel> | $Enums.FxProvider;
  };

  export type NestedEnumFxProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FxProvider | EnumFxProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FxProvider[] | ListEnumFxProviderFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumFxProviderWithAggregatesFilter<$PrismaModel>
      | $Enums.FxProvider;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumFxProviderFilter<$PrismaModel>;
    _max?: NestedEnumFxProviderFilter<$PrismaModel>;
  };

  export type OtpTokenCreateWithoutUserInput = {
    id?: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date | string;
    isUsed?: boolean;
  };

  export type OtpTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date | string;
    isUsed?: boolean;
  };

  export type OtpTokenCreateOrConnectWithoutUserInput = {
    where: OtpTokenWhereUniqueInput;
    create: XOR<
      OtpTokenCreateWithoutUserInput,
      OtpTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type OtpTokenCreateManyUserInputEnvelope = {
    data: OtpTokenCreateManyUserInput | OtpTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionCreateWithoutInitiatorInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput;
    fxSnapshot?: FxSnapshotCreateNestedOneWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateWithoutInitiatorInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput;
    fxSnapshot?: FxSnapshotUncheckedCreateNestedOneWithoutTransactionInput;
  };

  export type TransactionCreateOrConnectWithoutInitiatorInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<
      TransactionCreateWithoutInitiatorInput,
      TransactionUncheckedCreateWithoutInitiatorInput
    >;
  };

  export type TransactionCreateManyInitiatorInputEnvelope = {
    data:
      | TransactionCreateManyInitiatorInput
      | TransactionCreateManyInitiatorInput[];
    skipDuplicates?: boolean;
  };

  export type OtpTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpTokenWhereUniqueInput;
    update: XOR<
      OtpTokenUpdateWithoutUserInput,
      OtpTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      OtpTokenCreateWithoutUserInput,
      OtpTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type OtpTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpTokenWhereUniqueInput;
    data: XOR<
      OtpTokenUpdateWithoutUserInput,
      OtpTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type OtpTokenUpdateManyWithWhereWithoutUserInput = {
    where: OtpTokenScalarWhereInput;
    data: XOR<
      OtpTokenUpdateManyMutationInput,
      OtpTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type OtpTokenScalarWhereInput = {
    AND?: OtpTokenScalarWhereInput | OtpTokenScalarWhereInput[];
    OR?: OtpTokenScalarWhereInput[];
    NOT?: OtpTokenScalarWhereInput | OtpTokenScalarWhereInput[];
    id?: StringFilter<'OtpToken'> | string;
    userId?: StringFilter<'OtpToken'> | string;
    tokenType?: EnumTokenTypeFilter<'OtpToken'> | $Enums.TokenType;
    tokenHash?: StringFilter<'OtpToken'> | string;
    expiresAt?: DateTimeFilter<'OtpToken'> | Date | string;
    isUsed?: BoolFilter<'OtpToken'> | boolean;
  };

  export type TransactionUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: TransactionWhereUniqueInput;
    update: XOR<
      TransactionUpdateWithoutInitiatorInput,
      TransactionUncheckedUpdateWithoutInitiatorInput
    >;
    create: XOR<
      TransactionCreateWithoutInitiatorInput,
      TransactionUncheckedCreateWithoutInitiatorInput
    >;
  };

  export type TransactionUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: TransactionWhereUniqueInput;
    data: XOR<
      TransactionUpdateWithoutInitiatorInput,
      TransactionUncheckedUpdateWithoutInitiatorInput
    >;
  };

  export type TransactionUpdateManyWithWhereWithoutInitiatorInput = {
    where: TransactionScalarWhereInput;
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyWithoutInitiatorInput
    >;
  };

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    OR?: TransactionScalarWhereInput[];
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    id?: StringFilter<'Transaction'> | string;
    type?: EnumTransactionTypeFilter<'Transaction'> | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFilter<'Transaction'>
      | $Enums.TransactionStatus;
    initiatorId?: StringNullableFilter<'Transaction'> | string | null;
    initiatorType?:
      | EnumInitiatorTypeNullableFilter<'Transaction'>
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: StringNullableFilter<'Transaction'> | string | null;
    metadata?: JsonFilter<'Transaction'>;
    createdAt?: DateTimeFilter<'Transaction'> | Date | string;
    updatedAt?: DateTimeFilter<'Transaction'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    executedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    fxSnapshotId?: StringNullableFilter<'Transaction'> | string | null;
  };

  export type UserCreateWithoutTokensInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    transactions?: TransactionCreateNestedManyWithoutInitiatorInput;
  };

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    transactions?: TransactionUncheckedCreateNestedManyWithoutInitiatorInput;
  };

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
  };

  export type UserUpsertWithoutTokensInput = {
    update: XOR<
      UserUpdateWithoutTokensInput,
      UserUncheckedUpdateWithoutTokensInput
    >;
    create: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTokensInput,
      UserUncheckedUpdateWithoutTokensInput
    >;
  };

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    transactions?: TransactionUpdateManyWithoutInitiatorNestedInput;
  };

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    transactions?: TransactionUncheckedUpdateManyWithoutInitiatorNestedInput;
  };

  export type LedgerEntryCreateWithoutAccountInput = {
    id?: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    transaction: TransactionCreateNestedOneWithoutLedgerEntriesInput;
  };

  export type LedgerEntryUncheckedCreateWithoutAccountInput = {
    id?: string;
    transactionId: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
  };

  export type LedgerEntryCreateOrConnectWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput;
    create: XOR<
      LedgerEntryCreateWithoutAccountInput,
      LedgerEntryUncheckedCreateWithoutAccountInput
    >;
  };

  export type LedgerEntryCreateManyAccountInputEnvelope = {
    data:
      | LedgerEntryCreateManyAccountInput
      | LedgerEntryCreateManyAccountInput[];
    skipDuplicates?: boolean;
  };

  export type LedgerEntryUpsertWithWhereUniqueWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput;
    update: XOR<
      LedgerEntryUpdateWithoutAccountInput,
      LedgerEntryUncheckedUpdateWithoutAccountInput
    >;
    create: XOR<
      LedgerEntryCreateWithoutAccountInput,
      LedgerEntryUncheckedCreateWithoutAccountInput
    >;
  };

  export type LedgerEntryUpdateWithWhereUniqueWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput;
    data: XOR<
      LedgerEntryUpdateWithoutAccountInput,
      LedgerEntryUncheckedUpdateWithoutAccountInput
    >;
  };

  export type LedgerEntryUpdateManyWithWhereWithoutAccountInput = {
    where: LedgerEntryScalarWhereInput;
    data: XOR<
      LedgerEntryUpdateManyMutationInput,
      LedgerEntryUncheckedUpdateManyWithoutAccountInput
    >;
  };

  export type LedgerEntryScalarWhereInput = {
    AND?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[];
    OR?: LedgerEntryScalarWhereInput[];
    NOT?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[];
    id?: StringFilter<'LedgerEntry'> | string;
    transactionId?: StringFilter<'LedgerEntry'> | string;
    accountId?: StringFilter<'LedgerEntry'> | string;
    currency?: EnumCurrencyFilter<'LedgerEntry'> | $Enums.Currency;
    amount?:
      | DecimalFilter<'LedgerEntry'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFilter<'LedgerEntry'> | $Enums.EntryType;
    fxRate?:
      | DecimalNullableFilter<'LedgerEntry'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonFilter<'LedgerEntry'>;
    createdAt?: DateTimeFilter<'LedgerEntry'> | Date | string;
    updatedAt?: DateTimeFilter<'LedgerEntry'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'LedgerEntry'> | Date | string | null;
  };

  export type UserCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    tokens?: OtpTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    tokens?: OtpTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTransactionsInput,
      UserUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type LedgerEntryCreateWithoutTransactionInput = {
    id?: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    account: VirtualAccountCreateNestedOneWithoutLedgerEntriesInput;
  };

  export type LedgerEntryUncheckedCreateWithoutTransactionInput = {
    id?: string;
    accountId: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
  };

  export type LedgerEntryCreateOrConnectWithoutTransactionInput = {
    where: LedgerEntryWhereUniqueInput;
    create: XOR<
      LedgerEntryCreateWithoutTransactionInput,
      LedgerEntryUncheckedCreateWithoutTransactionInput
    >;
  };

  export type LedgerEntryCreateManyTransactionInputEnvelope = {
    data:
      | LedgerEntryCreateManyTransactionInput
      | LedgerEntryCreateManyTransactionInput[];
    skipDuplicates?: boolean;
  };

  export type FxSnapshotCreateWithoutTransactionInput = {
    id?: string;
    baseCurrency: $Enums.Currency;
    quoteCurrency: $Enums.Currency;
    rate: Decimal | DecimalJsLike | number | string;
    timestamp?: Date | string;
    provider: $Enums.FxProvider;
  };

  export type FxSnapshotUncheckedCreateWithoutTransactionInput = {
    id?: string;
    baseCurrency: $Enums.Currency;
    quoteCurrency: $Enums.Currency;
    rate: Decimal | DecimalJsLike | number | string;
    timestamp?: Date | string;
    provider: $Enums.FxProvider;
  };

  export type FxSnapshotCreateOrConnectWithoutTransactionInput = {
    where: FxSnapshotWhereUniqueInput;
    create: XOR<
      FxSnapshotCreateWithoutTransactionInput,
      FxSnapshotUncheckedCreateWithoutTransactionInput
    >;
  };

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<
      UserUpdateWithoutTransactionsInput,
      UserUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      UserCreateWithoutTransactionsInput,
      UserUncheckedCreateWithoutTransactionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTransactionsInput,
      UserUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    tokens?: OtpTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    tokens?: OtpTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput = {
    where: LedgerEntryWhereUniqueInput;
    update: XOR<
      LedgerEntryUpdateWithoutTransactionInput,
      LedgerEntryUncheckedUpdateWithoutTransactionInput
    >;
    create: XOR<
      LedgerEntryCreateWithoutTransactionInput,
      LedgerEntryUncheckedCreateWithoutTransactionInput
    >;
  };

  export type LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput = {
    where: LedgerEntryWhereUniqueInput;
    data: XOR<
      LedgerEntryUpdateWithoutTransactionInput,
      LedgerEntryUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type LedgerEntryUpdateManyWithWhereWithoutTransactionInput = {
    where: LedgerEntryScalarWhereInput;
    data: XOR<
      LedgerEntryUpdateManyMutationInput,
      LedgerEntryUncheckedUpdateManyWithoutTransactionInput
    >;
  };

  export type FxSnapshotUpsertWithoutTransactionInput = {
    update: XOR<
      FxSnapshotUpdateWithoutTransactionInput,
      FxSnapshotUncheckedUpdateWithoutTransactionInput
    >;
    create: XOR<
      FxSnapshotCreateWithoutTransactionInput,
      FxSnapshotUncheckedCreateWithoutTransactionInput
    >;
    where?: FxSnapshotWhereInput;
  };

  export type FxSnapshotUpdateToOneWithWhereWithoutTransactionInput = {
    where?: FxSnapshotWhereInput;
    data: XOR<
      FxSnapshotUpdateWithoutTransactionInput,
      FxSnapshotUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type FxSnapshotUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    baseCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    rate?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: EnumFxProviderFieldUpdateOperationsInput | $Enums.FxProvider;
  };

  export type FxSnapshotUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    baseCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    quoteCurrency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    rate?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: EnumFxProviderFieldUpdateOperationsInput | $Enums.FxProvider;
  };

  export type TransactionCreateWithoutLedgerEntriesInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    initiator?: UserCreateNestedOneWithoutTransactionsInput;
    fxSnapshot?: FxSnapshotCreateNestedOneWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorId?: string | null;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    fxSnapshot?: FxSnapshotUncheckedCreateNestedOneWithoutTransactionInput;
  };

  export type TransactionCreateOrConnectWithoutLedgerEntriesInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<
      TransactionCreateWithoutLedgerEntriesInput,
      TransactionUncheckedCreateWithoutLedgerEntriesInput
    >;
  };

  export type VirtualAccountCreateWithoutLedgerEntriesInput = {
    id?: string;
    name: string;
    currency: $Enums.Currency;
    balance?: Decimal | DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    idempotencyKey: string;
  };

  export type VirtualAccountUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string;
    name: string;
    currency: $Enums.Currency;
    balance?: Decimal | DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    idempotencyKey: string;
  };

  export type VirtualAccountCreateOrConnectWithoutLedgerEntriesInput = {
    where: VirtualAccountWhereUniqueInput;
    create: XOR<
      VirtualAccountCreateWithoutLedgerEntriesInput,
      VirtualAccountUncheckedCreateWithoutLedgerEntriesInput
    >;
  };

  export type TransactionUpsertWithoutLedgerEntriesInput = {
    update: XOR<
      TransactionUpdateWithoutLedgerEntriesInput,
      TransactionUncheckedUpdateWithoutLedgerEntriesInput
    >;
    create: XOR<
      TransactionCreateWithoutLedgerEntriesInput,
      TransactionUncheckedCreateWithoutLedgerEntriesInput
    >;
    where?: TransactionWhereInput;
  };

  export type TransactionUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: TransactionWhereInput;
    data: XOR<
      TransactionUpdateWithoutLedgerEntriesInput,
      TransactionUncheckedUpdateWithoutLedgerEntriesInput
    >;
  };

  export type TransactionUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiator?: UserUpdateOneWithoutTransactionsNestedInput;
    fxSnapshot?: FxSnapshotUpdateOneWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    fxSnapshot?: FxSnapshotUncheckedUpdateOneWithoutTransactionNestedInput;
  };

  export type VirtualAccountUpsertWithoutLedgerEntriesInput = {
    update: XOR<
      VirtualAccountUpdateWithoutLedgerEntriesInput,
      VirtualAccountUncheckedUpdateWithoutLedgerEntriesInput
    >;
    create: XOR<
      VirtualAccountCreateWithoutLedgerEntriesInput,
      VirtualAccountUncheckedCreateWithoutLedgerEntriesInput
    >;
    where?: VirtualAccountWhereInput;
  };

  export type VirtualAccountUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: VirtualAccountWhereInput;
    data: XOR<
      VirtualAccountUpdateWithoutLedgerEntriesInput,
      VirtualAccountUncheckedUpdateWithoutLedgerEntriesInput
    >;
  };

  export type VirtualAccountUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    idempotencyKey?: StringFieldUpdateOperationsInput | string;
  };

  export type VirtualAccountUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    idempotencyKey?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionCreateWithoutFxSnapshotInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    initiator?: UserCreateNestedOneWithoutTransactionsInput;
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateWithoutFxSnapshotInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorId?: string | null;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionCreateOrConnectWithoutFxSnapshotInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<
      TransactionCreateWithoutFxSnapshotInput,
      TransactionUncheckedCreateWithoutFxSnapshotInput
    >;
  };

  export type TransactionUpsertWithoutFxSnapshotInput = {
    update: XOR<
      TransactionUpdateWithoutFxSnapshotInput,
      TransactionUncheckedUpdateWithoutFxSnapshotInput
    >;
    create: XOR<
      TransactionCreateWithoutFxSnapshotInput,
      TransactionUncheckedCreateWithoutFxSnapshotInput
    >;
    where?: TransactionWhereInput;
  };

  export type TransactionUpdateToOneWithWhereWithoutFxSnapshotInput = {
    where?: TransactionWhereInput;
    data: XOR<
      TransactionUpdateWithoutFxSnapshotInput,
      TransactionUncheckedUpdateWithoutFxSnapshotInput
    >;
  };

  export type TransactionUpdateWithoutFxSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiator?: UserUpdateOneWithoutTransactionsNestedInput;
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutFxSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorId?: NullableStringFieldUpdateOperationsInput | string | null;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput;
  };

  export type OtpTokenCreateManyUserInput = {
    id?: string;
    tokenType: $Enums.TokenType;
    tokenHash: string;
    expiresAt: Date | string;
    isUsed?: boolean;
  };

  export type TransactionCreateManyInitiatorInput = {
    id?: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    initiatorType?: $Enums.InitiatorType | null;
    idempotencyKey?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    executedAt?: Date | string | null;
    fxSnapshotId?: string | null;
  };

  export type OtpTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OtpTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OtpTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isUsed?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type TransactionUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput;
    fxSnapshot?: FxSnapshotUpdateOneWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput;
    fxSnapshot?: FxSnapshotUncheckedUpdateOneWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateManyWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    status?:
      | EnumTransactionStatusFieldUpdateOperationsInput
      | $Enums.TransactionStatus;
    initiatorType?:
      | NullableEnumInitiatorTypeFieldUpdateOperationsInput
      | $Enums.InitiatorType
      | null;
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    executedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fxSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type LedgerEntryCreateManyAccountInput = {
    id?: string;
    transactionId: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
  };

  export type LedgerEntryUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transaction?: TransactionUpdateOneRequiredWithoutLedgerEntriesNestedInput;
  };

  export type LedgerEntryUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type LedgerEntryUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type LedgerEntryCreateManyTransactionInput = {
    id?: string;
    accountId: string;
    currency: $Enums.Currency;
    amount: Decimal | DecimalJsLike | number | string;
    entryType: $Enums.EntryType;
    fxRate?: Decimal | DecimalJsLike | number | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
  };

  export type LedgerEntryUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    account?: VirtualAccountUpdateOneRequiredWithoutLedgerEntriesNestedInput;
  };

  export type LedgerEntryUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type LedgerEntryUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    entryType?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType;
    fxRate?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
