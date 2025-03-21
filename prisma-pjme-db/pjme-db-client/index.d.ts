
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model DonationLink
 * 
 */
export type DonationLink = $Result.DefaultSelection<Prisma.$DonationLinkPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductDiscount
 * 
 */
export type ProductDiscount = $Result.DefaultSelection<Prisma.$ProductDiscountPayload>
/**
 * Model ProductCoupon
 * 
 */
export type ProductCoupon = $Result.DefaultSelection<Prisma.$ProductCouponPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model ProductPrice
 * 
 */
export type ProductPrice = $Result.DefaultSelection<Prisma.$ProductPricePayload>
/**
 * Model AboutUs
 * 
 */
export type AboutUs = $Result.DefaultSelection<Prisma.$AboutUsPayload>
/**
 * Model PrivacyPolicy
 * 
 */
export type PrivacyPolicy = $Result.DefaultSelection<Prisma.$PrivacyPolicyPayload>
/**
 * Model TermsandConditions
 * 
 */
export type TermsandConditions = $Result.DefaultSelection<Prisma.$TermsandConditionsPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CurrencyCode: {
  IDR: 'IDR',
  USD: 'USD'
};

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode]


export const PriceType: {
  paid: 'paid',
  free: 'free'
};

export type PriceType = (typeof PriceType)[keyof typeof PriceType]

}

export type CurrencyCode = $Enums.CurrencyCode

export const CurrencyCode: typeof $Enums.CurrencyCode

export type PriceType = $Enums.PriceType

export const PriceType: typeof $Enums.PriceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationLink`: Exposes CRUD operations for the **DonationLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationLinks
    * const donationLinks = await prisma.donationLink.findMany()
    * ```
    */
  get donationLink(): Prisma.DonationLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productDiscount`: Exposes CRUD operations for the **ProductDiscount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDiscounts
    * const productDiscounts = await prisma.productDiscount.findMany()
    * ```
    */
  get productDiscount(): Prisma.ProductDiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCoupon`: Exposes CRUD operations for the **ProductCoupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCoupons
    * const productCoupons = await prisma.productCoupon.findMany()
    * ```
    */
  get productCoupon(): Prisma.ProductCouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPrice`: Exposes CRUD operations for the **ProductPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPrices
    * const productPrices = await prisma.productPrice.findMany()
    * ```
    */
  get productPrice(): Prisma.ProductPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutUs`: Exposes CRUD operations for the **AboutUs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aboutuses
    * const aboutuses = await prisma.aboutUs.findMany()
    * ```
    */
  get aboutUs(): Prisma.AboutUsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privacyPolicy`: Exposes CRUD operations for the **PrivacyPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivacyPolicies
    * const privacyPolicies = await prisma.privacyPolicy.findMany()
    * ```
    */
  get privacyPolicy(): Prisma.PrivacyPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.termsandConditions`: Exposes CRUD operations for the **TermsandConditions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsandConditions
    * const termsandConditions = await prisma.termsandConditions.findMany()
    * ```
    */
  get termsandConditions(): Prisma.TermsandConditionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    DonationLink: 'DonationLink',
    Owner: 'Owner',
    Customer: 'Customer',
    License: 'License',
    Category: 'Category',
    Product: 'Product',
    ProductDiscount: 'ProductDiscount',
    ProductCoupon: 'ProductCoupon',
    ProductImage: 'ProductImage',
    ProductVariant: 'ProductVariant',
    ProductPrice: 'ProductPrice',
    AboutUs: 'AboutUs',
    PrivacyPolicy: 'PrivacyPolicy',
    TermsandConditions: 'TermsandConditions',
    FAQ: 'FAQ'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "donationLink" | "owner" | "customer" | "license" | "category" | "product" | "productDiscount" | "productCoupon" | "productImage" | "productVariant" | "productPrice" | "aboutUs" | "privacyPolicy" | "termsandConditions" | "fAQ"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      DonationLink: {
        payload: Prisma.$DonationLinkPayload<ExtArgs>
        fields: Prisma.DonationLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>
          }
          findFirst: {
            args: Prisma.DonationLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>
          }
          findMany: {
            args: Prisma.DonationLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>[]
          }
          create: {
            args: Prisma.DonationLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>
          }
          createMany: {
            args: Prisma.DonationLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>[]
          }
          delete: {
            args: Prisma.DonationLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>
          }
          update: {
            args: Prisma.DonationLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>
          }
          deleteMany: {
            args: Prisma.DonationLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>[]
          }
          upsert: {
            args: Prisma.DonationLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationLinkPayload>
          }
          aggregate: {
            args: Prisma.DonationLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationLink>
          }
          groupBy: {
            args: Prisma.DonationLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationLinkCountArgs<ExtArgs>
            result: $Utils.Optional<DonationLinkCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductDiscount: {
        payload: Prisma.$ProductDiscountPayload<ExtArgs>
        fields: Prisma.ProductDiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>
          }
          findFirst: {
            args: Prisma.ProductDiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>
          }
          findMany: {
            args: Prisma.ProductDiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>[]
          }
          create: {
            args: Prisma.ProductDiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>
          }
          createMany: {
            args: Prisma.ProductDiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductDiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>[]
          }
          delete: {
            args: Prisma.ProductDiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>
          }
          update: {
            args: Prisma.ProductDiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>
          }
          deleteMany: {
            args: Prisma.ProductDiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductDiscountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>[]
          }
          upsert: {
            args: Prisma.ProductDiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDiscountPayload>
          }
          aggregate: {
            args: Prisma.ProductDiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductDiscount>
          }
          groupBy: {
            args: Prisma.ProductDiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductDiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDiscountCountArgs<ExtArgs>
            result: $Utils.Optional<ProductDiscountCountAggregateOutputType> | number
          }
        }
      }
      ProductCoupon: {
        payload: Prisma.$ProductCouponPayload<ExtArgs>
        fields: Prisma.ProductCouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>
          }
          findFirst: {
            args: Prisma.ProductCouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>
          }
          findMany: {
            args: Prisma.ProductCouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>[]
          }
          create: {
            args: Prisma.ProductCouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>
          }
          createMany: {
            args: Prisma.ProductCouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>[]
          }
          delete: {
            args: Prisma.ProductCouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>
          }
          update: {
            args: Prisma.ProductCouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>
          }
          deleteMany: {
            args: Prisma.ProductCouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCouponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>[]
          }
          upsert: {
            args: Prisma.ProductCouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCouponPayload>
          }
          aggregate: {
            args: Prisma.ProductCouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCoupon>
          }
          groupBy: {
            args: Prisma.ProductCouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCouponCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCouponCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      ProductPrice: {
        payload: Prisma.$ProductPricePayload<ExtArgs>
        fields: Prisma.ProductPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findFirst: {
            args: Prisma.ProductPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findMany: {
            args: Prisma.ProductPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          create: {
            args: Prisma.ProductPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          createMany: {
            args: Prisma.ProductPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          delete: {
            args: Prisma.ProductPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          update: {
            args: Prisma.ProductPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          upsert: {
            args: Prisma.ProductPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          aggregate: {
            args: Prisma.ProductPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPrice>
          }
          groupBy: {
            args: Prisma.ProductPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceCountAggregateOutputType> | number
          }
        }
      }
      AboutUs: {
        payload: Prisma.$AboutUsPayload<ExtArgs>
        fields: Prisma.AboutUsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutUsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutUsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          findFirst: {
            args: Prisma.AboutUsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutUsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          findMany: {
            args: Prisma.AboutUsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>[]
          }
          create: {
            args: Prisma.AboutUsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          createMany: {
            args: Prisma.AboutUsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutUsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>[]
          }
          delete: {
            args: Prisma.AboutUsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          update: {
            args: Prisma.AboutUsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          deleteMany: {
            args: Prisma.AboutUsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutUsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutUsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>[]
          }
          upsert: {
            args: Prisma.AboutUsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          aggregate: {
            args: Prisma.AboutUsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutUs>
          }
          groupBy: {
            args: Prisma.AboutUsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutUsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutUsCountArgs<ExtArgs>
            result: $Utils.Optional<AboutUsCountAggregateOutputType> | number
          }
        }
      }
      PrivacyPolicy: {
        payload: Prisma.$PrivacyPolicyPayload<ExtArgs>
        fields: Prisma.PrivacyPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivacyPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivacyPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          findFirst: {
            args: Prisma.PrivacyPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivacyPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          findMany: {
            args: Prisma.PrivacyPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>[]
          }
          create: {
            args: Prisma.PrivacyPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          createMany: {
            args: Prisma.PrivacyPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivacyPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>[]
          }
          delete: {
            args: Prisma.PrivacyPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          update: {
            args: Prisma.PrivacyPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          deleteMany: {
            args: Prisma.PrivacyPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivacyPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivacyPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>[]
          }
          upsert: {
            args: Prisma.PrivacyPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          aggregate: {
            args: Prisma.PrivacyPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivacyPolicy>
          }
          groupBy: {
            args: Prisma.PrivacyPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivacyPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivacyPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PrivacyPolicyCountAggregateOutputType> | number
          }
        }
      }
      TermsandConditions: {
        payload: Prisma.$TermsandConditionsPayload<ExtArgs>
        fields: Prisma.TermsandConditionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermsandConditionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermsandConditionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>
          }
          findFirst: {
            args: Prisma.TermsandConditionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermsandConditionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>
          }
          findMany: {
            args: Prisma.TermsandConditionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>[]
          }
          create: {
            args: Prisma.TermsandConditionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>
          }
          createMany: {
            args: Prisma.TermsandConditionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermsandConditionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>[]
          }
          delete: {
            args: Prisma.TermsandConditionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>
          }
          update: {
            args: Prisma.TermsandConditionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>
          }
          deleteMany: {
            args: Prisma.TermsandConditionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermsandConditionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermsandConditionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>[]
          }
          upsert: {
            args: Prisma.TermsandConditionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsandConditionsPayload>
          }
          aggregate: {
            args: Prisma.TermsandConditionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermsandConditions>
          }
          groupBy: {
            args: Prisma.TermsandConditionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermsandConditionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermsandConditionsCountArgs<ExtArgs>
            result: $Utils.Optional<TermsandConditionsCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    donationLink?: DonationLinkOmit
    owner?: OwnerOmit
    customer?: CustomerOmit
    license?: LicenseOmit
    category?: CategoryOmit
    product?: ProductOmit
    productDiscount?: ProductDiscountOmit
    productCoupon?: ProductCouponOmit
    productImage?: ProductImageOmit
    productVariant?: ProductVariantOmit
    productPrice?: ProductPriceOmit
    aboutUs?: AboutUsOmit
    privacyPolicy?: PrivacyPolicyOmit
    termsandConditions?: TermsandConditionsOmit
    fAQ?: FAQOmit
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    donation_links: number
    products: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation_links?: boolean | AdminCountOutputTypeCountDonation_linksArgs
    products?: boolean | AdminCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountDonation_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationLinkWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    products: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OwnerCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    products: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | LicenseCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    product_images: number
    product_variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_images?: boolean | ProductCountOutputTypeCountProduct_imagesArgs
    product_variants?: boolean | ProductCountOutputTypeCountProduct_variantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    product_prices: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_prices?: boolean | ProductVariantCountOutputTypeCountProduct_pricesArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountProduct_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone_number: string | null
    picture: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone_number: string | null
    picture: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    phone_number: number
    picture: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone_number?: true
    picture?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone_number?: true
    picture?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone_number?: true
    picture?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number: string | null
    picture: string | null
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    picture?: boolean
    donation_links?: boolean | Admin$donation_linksArgs<ExtArgs>
    products?: boolean | Admin$productsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    picture?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    picture?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    picture?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "phone_number" | "picture", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation_links?: boolean | Admin$donation_linksArgs<ExtArgs>
    products?: boolean | Admin$productsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      donation_links: Prisma.$DonationLinkPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      email: string
      phone_number: string | null
      picture: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donation_links<T extends Admin$donation_linksArgs<ExtArgs> = {}>(args?: Subset<T, Admin$donation_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Admin$productsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly first_name: FieldRef<"Admin", 'String'>
    readonly last_name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly phone_number: FieldRef<"Admin", 'String'>
    readonly picture: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.donation_links
   */
  export type Admin$donation_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    where?: DonationLinkWhereInput
    orderBy?: DonationLinkOrderByWithRelationInput | DonationLinkOrderByWithRelationInput[]
    cursor?: DonationLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationLinkScalarFieldEnum | DonationLinkScalarFieldEnum[]
  }

  /**
   * Admin.products
   */
  export type Admin$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model DonationLink
   */

  export type AggregateDonationLink = {
    _count: DonationLinkCountAggregateOutputType | null
    _avg: DonationLinkAvgAggregateOutputType | null
    _sum: DonationLinkSumAggregateOutputType | null
    _min: DonationLinkMinAggregateOutputType | null
    _max: DonationLinkMaxAggregateOutputType | null
  }

  export type DonationLinkAvgAggregateOutputType = {
    id: number | null
  }

  export type DonationLinkSumAggregateOutputType = {
    id: number | null
  }

  export type DonationLinkMinAggregateOutputType = {
    id: number | null
    admin_id: string | null
    currency_code: $Enums.CurrencyCode | null
    link: string | null
  }

  export type DonationLinkMaxAggregateOutputType = {
    id: number | null
    admin_id: string | null
    currency_code: $Enums.CurrencyCode | null
    link: string | null
  }

  export type DonationLinkCountAggregateOutputType = {
    id: number
    admin_id: number
    currency_code: number
    link: number
    _all: number
  }


  export type DonationLinkAvgAggregateInputType = {
    id?: true
  }

  export type DonationLinkSumAggregateInputType = {
    id?: true
  }

  export type DonationLinkMinAggregateInputType = {
    id?: true
    admin_id?: true
    currency_code?: true
    link?: true
  }

  export type DonationLinkMaxAggregateInputType = {
    id?: true
    admin_id?: true
    currency_code?: true
    link?: true
  }

  export type DonationLinkCountAggregateInputType = {
    id?: true
    admin_id?: true
    currency_code?: true
    link?: true
    _all?: true
  }

  export type DonationLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationLink to aggregate.
     */
    where?: DonationLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationLinks to fetch.
     */
    orderBy?: DonationLinkOrderByWithRelationInput | DonationLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationLinks
    **/
    _count?: true | DonationLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationLinkMaxAggregateInputType
  }

  export type GetDonationLinkAggregateType<T extends DonationLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationLink[P]>
      : GetScalarType<T[P], AggregateDonationLink[P]>
  }




  export type DonationLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationLinkWhereInput
    orderBy?: DonationLinkOrderByWithAggregationInput | DonationLinkOrderByWithAggregationInput[]
    by: DonationLinkScalarFieldEnum[] | DonationLinkScalarFieldEnum
    having?: DonationLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationLinkCountAggregateInputType | true
    _avg?: DonationLinkAvgAggregateInputType
    _sum?: DonationLinkSumAggregateInputType
    _min?: DonationLinkMinAggregateInputType
    _max?: DonationLinkMaxAggregateInputType
  }

  export type DonationLinkGroupByOutputType = {
    id: number
    admin_id: string
    currency_code: $Enums.CurrencyCode
    link: string
    _count: DonationLinkCountAggregateOutputType | null
    _avg: DonationLinkAvgAggregateOutputType | null
    _sum: DonationLinkSumAggregateOutputType | null
    _min: DonationLinkMinAggregateOutputType | null
    _max: DonationLinkMaxAggregateOutputType | null
  }

  type GetDonationLinkGroupByPayload<T extends DonationLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationLinkGroupByOutputType[P]>
            : GetScalarType<T[P], DonationLinkGroupByOutputType[P]>
        }
      >
    >


  export type DonationLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    currency_code?: boolean
    link?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationLink"]>

  export type DonationLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    currency_code?: boolean
    link?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationLink"]>

  export type DonationLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    currency_code?: boolean
    link?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationLink"]>

  export type DonationLinkSelectScalar = {
    id?: boolean
    admin_id?: boolean
    currency_code?: boolean
    link?: boolean
  }

  export type DonationLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_id" | "currency_code" | "link", ExtArgs["result"]["donationLink"]>
  export type DonationLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type DonationLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type DonationLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $DonationLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationLink"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      admin_id: string
      currency_code: $Enums.CurrencyCode
      link: string
    }, ExtArgs["result"]["donationLink"]>
    composites: {}
  }

  type DonationLinkGetPayload<S extends boolean | null | undefined | DonationLinkDefaultArgs> = $Result.GetResult<Prisma.$DonationLinkPayload, S>

  type DonationLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationLinkCountAggregateInputType | true
    }

  export interface DonationLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationLink'], meta: { name: 'DonationLink' } }
    /**
     * Find zero or one DonationLink that matches the filter.
     * @param {DonationLinkFindUniqueArgs} args - Arguments to find a DonationLink
     * @example
     * // Get one DonationLink
     * const donationLink = await prisma.donationLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationLinkFindUniqueArgs>(args: SelectSubset<T, DonationLinkFindUniqueArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationLinkFindUniqueOrThrowArgs} args - Arguments to find a DonationLink
     * @example
     * // Get one DonationLink
     * const donationLink = await prisma.donationLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkFindFirstArgs} args - Arguments to find a DonationLink
     * @example
     * // Get one DonationLink
     * const donationLink = await prisma.donationLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationLinkFindFirstArgs>(args?: SelectSubset<T, DonationLinkFindFirstArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkFindFirstOrThrowArgs} args - Arguments to find a DonationLink
     * @example
     * // Get one DonationLink
     * const donationLink = await prisma.donationLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationLinks
     * const donationLinks = await prisma.donationLink.findMany()
     * 
     * // Get first 10 DonationLinks
     * const donationLinks = await prisma.donationLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationLinkWithIdOnly = await prisma.donationLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationLinkFindManyArgs>(args?: SelectSubset<T, DonationLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationLink.
     * @param {DonationLinkCreateArgs} args - Arguments to create a DonationLink.
     * @example
     * // Create one DonationLink
     * const DonationLink = await prisma.donationLink.create({
     *   data: {
     *     // ... data to create a DonationLink
     *   }
     * })
     * 
     */
    create<T extends DonationLinkCreateArgs>(args: SelectSubset<T, DonationLinkCreateArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationLinks.
     * @param {DonationLinkCreateManyArgs} args - Arguments to create many DonationLinks.
     * @example
     * // Create many DonationLinks
     * const donationLink = await prisma.donationLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationLinkCreateManyArgs>(args?: SelectSubset<T, DonationLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationLinks and returns the data saved in the database.
     * @param {DonationLinkCreateManyAndReturnArgs} args - Arguments to create many DonationLinks.
     * @example
     * // Create many DonationLinks
     * const donationLink = await prisma.donationLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationLinks and only return the `id`
     * const donationLinkWithIdOnly = await prisma.donationLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationLink.
     * @param {DonationLinkDeleteArgs} args - Arguments to delete one DonationLink.
     * @example
     * // Delete one DonationLink
     * const DonationLink = await prisma.donationLink.delete({
     *   where: {
     *     // ... filter to delete one DonationLink
     *   }
     * })
     * 
     */
    delete<T extends DonationLinkDeleteArgs>(args: SelectSubset<T, DonationLinkDeleteArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationLink.
     * @param {DonationLinkUpdateArgs} args - Arguments to update one DonationLink.
     * @example
     * // Update one DonationLink
     * const donationLink = await prisma.donationLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationLinkUpdateArgs>(args: SelectSubset<T, DonationLinkUpdateArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationLinks.
     * @param {DonationLinkDeleteManyArgs} args - Arguments to filter DonationLinks to delete.
     * @example
     * // Delete a few DonationLinks
     * const { count } = await prisma.donationLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationLinkDeleteManyArgs>(args?: SelectSubset<T, DonationLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationLinks
     * const donationLink = await prisma.donationLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationLinkUpdateManyArgs>(args: SelectSubset<T, DonationLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationLinks and returns the data updated in the database.
     * @param {DonationLinkUpdateManyAndReturnArgs} args - Arguments to update many DonationLinks.
     * @example
     * // Update many DonationLinks
     * const donationLink = await prisma.donationLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationLinks and only return the `id`
     * const donationLinkWithIdOnly = await prisma.donationLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonationLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationLink.
     * @param {DonationLinkUpsertArgs} args - Arguments to update or create a DonationLink.
     * @example
     * // Update or create a DonationLink
     * const donationLink = await prisma.donationLink.upsert({
     *   create: {
     *     // ... data to create a DonationLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationLink we want to update
     *   }
     * })
     */
    upsert<T extends DonationLinkUpsertArgs>(args: SelectSubset<T, DonationLinkUpsertArgs<ExtArgs>>): Prisma__DonationLinkClient<$Result.GetResult<Prisma.$DonationLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkCountArgs} args - Arguments to filter DonationLinks to count.
     * @example
     * // Count the number of DonationLinks
     * const count = await prisma.donationLink.count({
     *   where: {
     *     // ... the filter for the DonationLinks we want to count
     *   }
     * })
    **/
    count<T extends DonationLinkCountArgs>(
      args?: Subset<T, DonationLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationLinkAggregateArgs>(args: Subset<T, DonationLinkAggregateArgs>): Prisma.PrismaPromise<GetDonationLinkAggregateType<T>>

    /**
     * Group by DonationLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationLinkGroupByArgs} args - Group by arguments.
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
      T extends DonationLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationLinkGroupByArgs['orderBy'] }
        : { orderBy?: DonationLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, DonationLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationLink model
   */
  readonly fields: DonationLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationLink model
   */ 
  interface DonationLinkFieldRefs {
    readonly id: FieldRef<"DonationLink", 'Int'>
    readonly admin_id: FieldRef<"DonationLink", 'String'>
    readonly currency_code: FieldRef<"DonationLink", 'CurrencyCode'>
    readonly link: FieldRef<"DonationLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonationLink findUnique
   */
  export type DonationLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * Filter, which DonationLink to fetch.
     */
    where: DonationLinkWhereUniqueInput
  }

  /**
   * DonationLink findUniqueOrThrow
   */
  export type DonationLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * Filter, which DonationLink to fetch.
     */
    where: DonationLinkWhereUniqueInput
  }

  /**
   * DonationLink findFirst
   */
  export type DonationLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * Filter, which DonationLink to fetch.
     */
    where?: DonationLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationLinks to fetch.
     */
    orderBy?: DonationLinkOrderByWithRelationInput | DonationLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationLinks.
     */
    cursor?: DonationLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationLinks.
     */
    distinct?: DonationLinkScalarFieldEnum | DonationLinkScalarFieldEnum[]
  }

  /**
   * DonationLink findFirstOrThrow
   */
  export type DonationLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * Filter, which DonationLink to fetch.
     */
    where?: DonationLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationLinks to fetch.
     */
    orderBy?: DonationLinkOrderByWithRelationInput | DonationLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationLinks.
     */
    cursor?: DonationLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationLinks.
     */
    distinct?: DonationLinkScalarFieldEnum | DonationLinkScalarFieldEnum[]
  }

  /**
   * DonationLink findMany
   */
  export type DonationLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * Filter, which DonationLinks to fetch.
     */
    where?: DonationLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationLinks to fetch.
     */
    orderBy?: DonationLinkOrderByWithRelationInput | DonationLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationLinks.
     */
    cursor?: DonationLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationLinks.
     */
    skip?: number
    distinct?: DonationLinkScalarFieldEnum | DonationLinkScalarFieldEnum[]
  }

  /**
   * DonationLink create
   */
  export type DonationLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationLink.
     */
    data: XOR<DonationLinkCreateInput, DonationLinkUncheckedCreateInput>
  }

  /**
   * DonationLink createMany
   */
  export type DonationLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationLinks.
     */
    data: DonationLinkCreateManyInput | DonationLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationLink createManyAndReturn
   */
  export type DonationLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * The data used to create many DonationLinks.
     */
    data: DonationLinkCreateManyInput | DonationLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationLink update
   */
  export type DonationLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationLink.
     */
    data: XOR<DonationLinkUpdateInput, DonationLinkUncheckedUpdateInput>
    /**
     * Choose, which DonationLink to update.
     */
    where: DonationLinkWhereUniqueInput
  }

  /**
   * DonationLink updateMany
   */
  export type DonationLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationLinks.
     */
    data: XOR<DonationLinkUpdateManyMutationInput, DonationLinkUncheckedUpdateManyInput>
    /**
     * Filter which DonationLinks to update
     */
    where?: DonationLinkWhereInput
    /**
     * Limit how many DonationLinks to update.
     */
    limit?: number
  }

  /**
   * DonationLink updateManyAndReturn
   */
  export type DonationLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * The data used to update DonationLinks.
     */
    data: XOR<DonationLinkUpdateManyMutationInput, DonationLinkUncheckedUpdateManyInput>
    /**
     * Filter which DonationLinks to update
     */
    where?: DonationLinkWhereInput
    /**
     * Limit how many DonationLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationLink upsert
   */
  export type DonationLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationLink to update in case it exists.
     */
    where: DonationLinkWhereUniqueInput
    /**
     * In case the DonationLink found by the `where` argument doesn't exist, create a new DonationLink with this data.
     */
    create: XOR<DonationLinkCreateInput, DonationLinkUncheckedCreateInput>
    /**
     * In case the DonationLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationLinkUpdateInput, DonationLinkUncheckedUpdateInput>
  }

  /**
   * DonationLink delete
   */
  export type DonationLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
    /**
     * Filter which DonationLink to delete.
     */
    where: DonationLinkWhereUniqueInput
  }

  /**
   * DonationLink deleteMany
   */
  export type DonationLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationLinks to delete
     */
    where?: DonationLinkWhereInput
    /**
     * Limit how many DonationLinks to delete.
     */
    limit?: number
  }

  /**
   * DonationLink without action
   */
  export type DonationLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationLink
     */
    select?: DonationLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationLink
     */
    omit?: DonationLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationLinkInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    id: number | null
  }

  export type OwnerSumAggregateOutputType = {
    id: number | null
  }

  export type OwnerMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    sm_username: string | null
    picture: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    sm_username: string | null
    picture: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    sm_username: number
    picture: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    id?: true
  }

  export type OwnerSumAggregateInputType = {
    id?: true
  }

  export type OwnerMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    sm_username?: true
    picture?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    sm_username?: true
    picture?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    sm_username?: true
    picture?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    sm_username: string
    picture: string
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    sm_username?: boolean
    picture?: boolean
    products?: boolean | Owner$productsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    sm_username?: boolean
    picture?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    sm_username?: boolean
    picture?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    sm_username?: boolean
    picture?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "sm_username" | "picture", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Owner$productsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      sm_username: string
      picture: string
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Owner$productsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */ 
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'Int'>
    readonly first_name: FieldRef<"Owner", 'String'>
    readonly last_name: FieldRef<"Owner", 'String'>
    readonly sm_username: FieldRef<"Owner", 'String'>
    readonly picture: FieldRef<"Owner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.products
   */
  export type Owner$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    last_active: number | null
  }

  export type CustomerSumAggregateOutputType = {
    last_active: bigint | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    picture: string | null
    last_active: bigint | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    picture: string | null
    last_active: bigint | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone_number: number
    picture: number
    last_active: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    last_active?: true
  }

  export type CustomerSumAggregateInputType = {
    last_active?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    picture?: true
    last_active?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    picture?: true
    last_active?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    picture?: true
    last_active?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    password: string | null
    phone_number: string | null
    picture: string | null
    last_active: bigint
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    picture?: boolean
    last_active?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    picture?: boolean
    last_active?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    picture?: boolean
    last_active?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    picture?: boolean
    last_active?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password" | "phone_number" | "picture" | "last_active", ExtArgs["result"]["customer"]>

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      email: string
      password: string | null
      phone_number: string | null
      picture: string | null
      last_active: bigint
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly first_name: FieldRef<"Customer", 'String'>
    readonly last_name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly phone_number: FieldRef<"Customer", 'String'>
    readonly picture: FieldRef<"Customer", 'String'>
    readonly last_active: FieldRef<"Customer", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseAvgAggregateOutputType = {
    id: number | null
    updated_at: number | null
  }

  export type LicenseSumAggregateOutputType = {
    id: number | null
    updated_at: bigint | null
  }

  export type LicenseMinAggregateOutputType = {
    id: number | null
    content: string | null
    updated_at: bigint | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: number | null
    content: string | null
    updated_at: bigint | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    content: number
    updated_at: number
    _all: number
  }


  export type LicenseAvgAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type LicenseSumAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type LicenseMinAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _avg?: LicenseAvgAggregateInputType
    _sum?: LicenseSumAggregateInputType
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: number
    content: string
    updated_at: bigint
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
    products?: boolean | License$productsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "updated_at", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | License$productsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      updated_at: bigint
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.updateManyAndReturn({
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
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
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
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends License$productsArgs<ExtArgs> = {}>(args?: Subset<T, License$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the License model
   */ 
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'Int'>
    readonly content: FieldRef<"License", 'String'>
    readonly updated_at: FieldRef<"License", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License.products
   */
  export type License$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    category_id: number | null
    owner_id: number | null
    license_id: number | null
    released_at: number | null
    updated_at: number | null
  }

  export type ProductSumAggregateOutputType = {
    category_id: number | null
    owner_id: number | null
    license_id: number | null
    released_at: bigint | null
    updated_at: bigint | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    category_id: number | null
    admin_id: string | null
    owner_id: number | null
    license_id: number | null
    name: string | null
    slug: string | null
    description: string | null
    changelog: string | null
    price_type: $Enums.PriceType | null
    download_link: string | null
    released_at: bigint | null
    updated_at: bigint | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    category_id: number | null
    admin_id: string | null
    owner_id: number | null
    license_id: number | null
    name: string | null
    slug: string | null
    description: string | null
    changelog: string | null
    price_type: $Enums.PriceType | null
    download_link: string | null
    released_at: bigint | null
    updated_at: bigint | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    category_id: number
    admin_id: number
    owner_id: number
    license_id: number
    name: number
    slug: number
    description: number
    changelog: number
    price_type: number
    download_link: number
    released_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    category_id?: true
    owner_id?: true
    license_id?: true
    released_at?: true
    updated_at?: true
  }

  export type ProductSumAggregateInputType = {
    category_id?: true
    owner_id?: true
    license_id?: true
    released_at?: true
    updated_at?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    category_id?: true
    admin_id?: true
    owner_id?: true
    license_id?: true
    name?: true
    slug?: true
    description?: true
    changelog?: true
    price_type?: true
    download_link?: true
    released_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    category_id?: true
    admin_id?: true
    owner_id?: true
    license_id?: true
    name?: true
    slug?: true
    description?: true
    changelog?: true
    price_type?: true
    download_link?: true
    released_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    category_id?: true
    admin_id?: true
    owner_id?: true
    license_id?: true
    name?: true
    slug?: true
    description?: true
    changelog?: true
    price_type?: true
    download_link?: true
    released_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog: string | null
    price_type: $Enums.PriceType
    download_link: string | null
    released_at: bigint
    updated_at: bigint
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    admin_id?: boolean
    owner_id?: boolean
    license_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    changelog?: boolean
    price_type?: boolean
    download_link?: boolean
    released_at?: boolean
    updated_at?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    product_discounts?: boolean | Product$product_discountsArgs<ExtArgs>
    product_coupons?: boolean | Product$product_couponsArgs<ExtArgs>
    product_images?: boolean | Product$product_imagesArgs<ExtArgs>
    product_variants?: boolean | Product$product_variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    admin_id?: boolean
    owner_id?: boolean
    license_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    changelog?: boolean
    price_type?: boolean
    download_link?: boolean
    released_at?: boolean
    updated_at?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    admin_id?: boolean
    owner_id?: boolean
    license_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    changelog?: boolean
    price_type?: boolean
    download_link?: boolean
    released_at?: boolean
    updated_at?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    category_id?: boolean
    admin_id?: boolean
    owner_id?: boolean
    license_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    changelog?: boolean
    price_type?: boolean
    download_link?: boolean
    released_at?: boolean
    updated_at?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "admin_id" | "owner_id" | "license_id" | "name" | "slug" | "description" | "changelog" | "price_type" | "download_link" | "released_at" | "updated_at", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    product_discounts?: boolean | Product$product_discountsArgs<ExtArgs>
    product_coupons?: boolean | Product$product_couponsArgs<ExtArgs>
    product_images?: boolean | Product$product_imagesArgs<ExtArgs>
    product_variants?: boolean | Product$product_variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      owner: Prisma.$OwnerPayload<ExtArgs>
      license: Prisma.$LicensePayload<ExtArgs>
      product_discounts: Prisma.$ProductDiscountPayload<ExtArgs> | null
      product_coupons: Prisma.$ProductCouponPayload<ExtArgs> | null
      product_images: Prisma.$ProductImagePayload<ExtArgs>[]
      product_variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: number
      admin_id: string
      owner_id: number
      license_id: number
      name: string
      slug: string
      description: string
      changelog: string | null
      price_type: $Enums.PriceType
      download_link: string | null
      released_at: bigint
      updated_at: bigint
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product_discounts<T extends Product$product_discountsArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_discountsArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product_coupons<T extends Product$product_couponsArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_couponsArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product_images<T extends Product$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_variants<T extends Product$product_variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly category_id: FieldRef<"Product", 'Int'>
    readonly admin_id: FieldRef<"Product", 'String'>
    readonly owner_id: FieldRef<"Product", 'Int'>
    readonly license_id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly changelog: FieldRef<"Product", 'String'>
    readonly price_type: FieldRef<"Product", 'PriceType'>
    readonly download_link: FieldRef<"Product", 'String'>
    readonly released_at: FieldRef<"Product", 'BigInt'>
    readonly updated_at: FieldRef<"Product", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.product_discounts
   */
  export type Product$product_discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    where?: ProductDiscountWhereInput
  }

  /**
   * Product.product_coupons
   */
  export type Product$product_couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    where?: ProductCouponWhereInput
  }

  /**
   * Product.product_images
   */
  export type Product$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.product_variants
   */
  export type Product$product_variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductDiscount
   */

  export type AggregateProductDiscount = {
    _count: ProductDiscountCountAggregateOutputType | null
    _avg: ProductDiscountAvgAggregateOutputType | null
    _sum: ProductDiscountSumAggregateOutputType | null
    _min: ProductDiscountMinAggregateOutputType | null
    _max: ProductDiscountMaxAggregateOutputType | null
  }

  export type ProductDiscountAvgAggregateOutputType = {
    expired_at: number | null
  }

  export type ProductDiscountSumAggregateOutputType = {
    expired_at: bigint | null
  }

  export type ProductDiscountMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    discount: string | null
    expired_at: bigint | null
  }

  export type ProductDiscountMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    discount: string | null
    expired_at: bigint | null
  }

  export type ProductDiscountCountAggregateOutputType = {
    id: number
    product_id: number
    discount: number
    expired_at: number
    _all: number
  }


  export type ProductDiscountAvgAggregateInputType = {
    expired_at?: true
  }

  export type ProductDiscountSumAggregateInputType = {
    expired_at?: true
  }

  export type ProductDiscountMinAggregateInputType = {
    id?: true
    product_id?: true
    discount?: true
    expired_at?: true
  }

  export type ProductDiscountMaxAggregateInputType = {
    id?: true
    product_id?: true
    discount?: true
    expired_at?: true
  }

  export type ProductDiscountCountAggregateInputType = {
    id?: true
    product_id?: true
    discount?: true
    expired_at?: true
    _all?: true
  }

  export type ProductDiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDiscount to aggregate.
     */
    where?: ProductDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDiscounts to fetch.
     */
    orderBy?: ProductDiscountOrderByWithRelationInput | ProductDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDiscounts
    **/
    _count?: true | ProductDiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductDiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductDiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDiscountMaxAggregateInputType
  }

  export type GetProductDiscountAggregateType<T extends ProductDiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDiscount[P]>
      : GetScalarType<T[P], AggregateProductDiscount[P]>
  }




  export type ProductDiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDiscountWhereInput
    orderBy?: ProductDiscountOrderByWithAggregationInput | ProductDiscountOrderByWithAggregationInput[]
    by: ProductDiscountScalarFieldEnum[] | ProductDiscountScalarFieldEnum
    having?: ProductDiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDiscountCountAggregateInputType | true
    _avg?: ProductDiscountAvgAggregateInputType
    _sum?: ProductDiscountSumAggregateInputType
    _min?: ProductDiscountMinAggregateInputType
    _max?: ProductDiscountMaxAggregateInputType
  }

  export type ProductDiscountGroupByOutputType = {
    id: string
    product_id: string
    discount: string
    expired_at: bigint
    _count: ProductDiscountCountAggregateOutputType | null
    _avg: ProductDiscountAvgAggregateOutputType | null
    _sum: ProductDiscountSumAggregateOutputType | null
    _min: ProductDiscountMinAggregateOutputType | null
    _max: ProductDiscountMaxAggregateOutputType | null
  }

  type GetProductDiscountGroupByPayload<T extends ProductDiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDiscountGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDiscountGroupByOutputType[P]>
        }
      >
    >


  export type ProductDiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    discount?: boolean
    expired_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDiscount"]>

  export type ProductDiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    discount?: boolean
    expired_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDiscount"]>

  export type ProductDiscountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    discount?: boolean
    expired_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDiscount"]>

  export type ProductDiscountSelectScalar = {
    id?: boolean
    product_id?: boolean
    discount?: boolean
    expired_at?: boolean
  }

  export type ProductDiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "discount" | "expired_at", ExtArgs["result"]["productDiscount"]>
  export type ProductDiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductDiscountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductDiscountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductDiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDiscount"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      discount: string
      expired_at: bigint
    }, ExtArgs["result"]["productDiscount"]>
    composites: {}
  }

  type ProductDiscountGetPayload<S extends boolean | null | undefined | ProductDiscountDefaultArgs> = $Result.GetResult<Prisma.$ProductDiscountPayload, S>

  type ProductDiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductDiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductDiscountCountAggregateInputType | true
    }

  export interface ProductDiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDiscount'], meta: { name: 'ProductDiscount' } }
    /**
     * Find zero or one ProductDiscount that matches the filter.
     * @param {ProductDiscountFindUniqueArgs} args - Arguments to find a ProductDiscount
     * @example
     * // Get one ProductDiscount
     * const productDiscount = await prisma.productDiscount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductDiscountFindUniqueArgs>(args: SelectSubset<T, ProductDiscountFindUniqueArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductDiscount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductDiscountFindUniqueOrThrowArgs} args - Arguments to find a ProductDiscount
     * @example
     * // Get one ProductDiscount
     * const productDiscount = await prisma.productDiscount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductDiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductDiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDiscount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountFindFirstArgs} args - Arguments to find a ProductDiscount
     * @example
     * // Get one ProductDiscount
     * const productDiscount = await prisma.productDiscount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductDiscountFindFirstArgs>(args?: SelectSubset<T, ProductDiscountFindFirstArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDiscount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountFindFirstOrThrowArgs} args - Arguments to find a ProductDiscount
     * @example
     * // Get one ProductDiscount
     * const productDiscount = await prisma.productDiscount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductDiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductDiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductDiscounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDiscounts
     * const productDiscounts = await prisma.productDiscount.findMany()
     * 
     * // Get first 10 ProductDiscounts
     * const productDiscounts = await prisma.productDiscount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDiscountWithIdOnly = await prisma.productDiscount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductDiscountFindManyArgs>(args?: SelectSubset<T, ProductDiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductDiscount.
     * @param {ProductDiscountCreateArgs} args - Arguments to create a ProductDiscount.
     * @example
     * // Create one ProductDiscount
     * const ProductDiscount = await prisma.productDiscount.create({
     *   data: {
     *     // ... data to create a ProductDiscount
     *   }
     * })
     * 
     */
    create<T extends ProductDiscountCreateArgs>(args: SelectSubset<T, ProductDiscountCreateArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductDiscounts.
     * @param {ProductDiscountCreateManyArgs} args - Arguments to create many ProductDiscounts.
     * @example
     * // Create many ProductDiscounts
     * const productDiscount = await prisma.productDiscount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductDiscountCreateManyArgs>(args?: SelectSubset<T, ProductDiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductDiscounts and returns the data saved in the database.
     * @param {ProductDiscountCreateManyAndReturnArgs} args - Arguments to create many ProductDiscounts.
     * @example
     * // Create many ProductDiscounts
     * const productDiscount = await prisma.productDiscount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductDiscounts and only return the `id`
     * const productDiscountWithIdOnly = await prisma.productDiscount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductDiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductDiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductDiscount.
     * @param {ProductDiscountDeleteArgs} args - Arguments to delete one ProductDiscount.
     * @example
     * // Delete one ProductDiscount
     * const ProductDiscount = await prisma.productDiscount.delete({
     *   where: {
     *     // ... filter to delete one ProductDiscount
     *   }
     * })
     * 
     */
    delete<T extends ProductDiscountDeleteArgs>(args: SelectSubset<T, ProductDiscountDeleteArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductDiscount.
     * @param {ProductDiscountUpdateArgs} args - Arguments to update one ProductDiscount.
     * @example
     * // Update one ProductDiscount
     * const productDiscount = await prisma.productDiscount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductDiscountUpdateArgs>(args: SelectSubset<T, ProductDiscountUpdateArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductDiscounts.
     * @param {ProductDiscountDeleteManyArgs} args - Arguments to filter ProductDiscounts to delete.
     * @example
     * // Delete a few ProductDiscounts
     * const { count } = await prisma.productDiscount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDiscountDeleteManyArgs>(args?: SelectSubset<T, ProductDiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDiscounts
     * const productDiscount = await prisma.productDiscount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductDiscountUpdateManyArgs>(args: SelectSubset<T, ProductDiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDiscounts and returns the data updated in the database.
     * @param {ProductDiscountUpdateManyAndReturnArgs} args - Arguments to update many ProductDiscounts.
     * @example
     * // Update many ProductDiscounts
     * const productDiscount = await prisma.productDiscount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductDiscounts and only return the `id`
     * const productDiscountWithIdOnly = await prisma.productDiscount.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductDiscountUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductDiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductDiscount.
     * @param {ProductDiscountUpsertArgs} args - Arguments to update or create a ProductDiscount.
     * @example
     * // Update or create a ProductDiscount
     * const productDiscount = await prisma.productDiscount.upsert({
     *   create: {
     *     // ... data to create a ProductDiscount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDiscount we want to update
     *   }
     * })
     */
    upsert<T extends ProductDiscountUpsertArgs>(args: SelectSubset<T, ProductDiscountUpsertArgs<ExtArgs>>): Prisma__ProductDiscountClient<$Result.GetResult<Prisma.$ProductDiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountCountArgs} args - Arguments to filter ProductDiscounts to count.
     * @example
     * // Count the number of ProductDiscounts
     * const count = await prisma.productDiscount.count({
     *   where: {
     *     // ... the filter for the ProductDiscounts we want to count
     *   }
     * })
    **/
    count<T extends ProductDiscountCountArgs>(
      args?: Subset<T, ProductDiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductDiscountAggregateArgs>(args: Subset<T, ProductDiscountAggregateArgs>): Prisma.PrismaPromise<GetProductDiscountAggregateType<T>>

    /**
     * Group by ProductDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDiscountGroupByArgs} args - Group by arguments.
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
      T extends ProductDiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDiscountGroupByArgs['orderBy'] }
        : { orderBy?: ProductDiscountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDiscount model
   */
  readonly fields: ProductDiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDiscount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductDiscount model
   */ 
  interface ProductDiscountFieldRefs {
    readonly id: FieldRef<"ProductDiscount", 'String'>
    readonly product_id: FieldRef<"ProductDiscount", 'String'>
    readonly discount: FieldRef<"ProductDiscount", 'String'>
    readonly expired_at: FieldRef<"ProductDiscount", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ProductDiscount findUnique
   */
  export type ProductDiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * Filter, which ProductDiscount to fetch.
     */
    where: ProductDiscountWhereUniqueInput
  }

  /**
   * ProductDiscount findUniqueOrThrow
   */
  export type ProductDiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * Filter, which ProductDiscount to fetch.
     */
    where: ProductDiscountWhereUniqueInput
  }

  /**
   * ProductDiscount findFirst
   */
  export type ProductDiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * Filter, which ProductDiscount to fetch.
     */
    where?: ProductDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDiscounts to fetch.
     */
    orderBy?: ProductDiscountOrderByWithRelationInput | ProductDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDiscounts.
     */
    cursor?: ProductDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDiscounts.
     */
    distinct?: ProductDiscountScalarFieldEnum | ProductDiscountScalarFieldEnum[]
  }

  /**
   * ProductDiscount findFirstOrThrow
   */
  export type ProductDiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * Filter, which ProductDiscount to fetch.
     */
    where?: ProductDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDiscounts to fetch.
     */
    orderBy?: ProductDiscountOrderByWithRelationInput | ProductDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDiscounts.
     */
    cursor?: ProductDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDiscounts.
     */
    distinct?: ProductDiscountScalarFieldEnum | ProductDiscountScalarFieldEnum[]
  }

  /**
   * ProductDiscount findMany
   */
  export type ProductDiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * Filter, which ProductDiscounts to fetch.
     */
    where?: ProductDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDiscounts to fetch.
     */
    orderBy?: ProductDiscountOrderByWithRelationInput | ProductDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDiscounts.
     */
    cursor?: ProductDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDiscounts.
     */
    skip?: number
    distinct?: ProductDiscountScalarFieldEnum | ProductDiscountScalarFieldEnum[]
  }

  /**
   * ProductDiscount create
   */
  export type ProductDiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDiscount.
     */
    data: XOR<ProductDiscountCreateInput, ProductDiscountUncheckedCreateInput>
  }

  /**
   * ProductDiscount createMany
   */
  export type ProductDiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDiscounts.
     */
    data: ProductDiscountCreateManyInput | ProductDiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductDiscount createManyAndReturn
   */
  export type ProductDiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * The data used to create many ProductDiscounts.
     */
    data: ProductDiscountCreateManyInput | ProductDiscountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDiscount update
   */
  export type ProductDiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDiscount.
     */
    data: XOR<ProductDiscountUpdateInput, ProductDiscountUncheckedUpdateInput>
    /**
     * Choose, which ProductDiscount to update.
     */
    where: ProductDiscountWhereUniqueInput
  }

  /**
   * ProductDiscount updateMany
   */
  export type ProductDiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDiscounts.
     */
    data: XOR<ProductDiscountUpdateManyMutationInput, ProductDiscountUncheckedUpdateManyInput>
    /**
     * Filter which ProductDiscounts to update
     */
    where?: ProductDiscountWhereInput
    /**
     * Limit how many ProductDiscounts to update.
     */
    limit?: number
  }

  /**
   * ProductDiscount updateManyAndReturn
   */
  export type ProductDiscountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * The data used to update ProductDiscounts.
     */
    data: XOR<ProductDiscountUpdateManyMutationInput, ProductDiscountUncheckedUpdateManyInput>
    /**
     * Filter which ProductDiscounts to update
     */
    where?: ProductDiscountWhereInput
    /**
     * Limit how many ProductDiscounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDiscount upsert
   */
  export type ProductDiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDiscount to update in case it exists.
     */
    where: ProductDiscountWhereUniqueInput
    /**
     * In case the ProductDiscount found by the `where` argument doesn't exist, create a new ProductDiscount with this data.
     */
    create: XOR<ProductDiscountCreateInput, ProductDiscountUncheckedCreateInput>
    /**
     * In case the ProductDiscount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDiscountUpdateInput, ProductDiscountUncheckedUpdateInput>
  }

  /**
   * ProductDiscount delete
   */
  export type ProductDiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
    /**
     * Filter which ProductDiscount to delete.
     */
    where: ProductDiscountWhereUniqueInput
  }

  /**
   * ProductDiscount deleteMany
   */
  export type ProductDiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDiscounts to delete
     */
    where?: ProductDiscountWhereInput
    /**
     * Limit how many ProductDiscounts to delete.
     */
    limit?: number
  }

  /**
   * ProductDiscount without action
   */
  export type ProductDiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDiscount
     */
    select?: ProductDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDiscount
     */
    omit?: ProductDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDiscountInclude<ExtArgs> | null
  }


  /**
   * Model ProductCoupon
   */

  export type AggregateProductCoupon = {
    _count: ProductCouponCountAggregateOutputType | null
    _avg: ProductCouponAvgAggregateOutputType | null
    _sum: ProductCouponSumAggregateOutputType | null
    _min: ProductCouponMinAggregateOutputType | null
    _max: ProductCouponMaxAggregateOutputType | null
  }

  export type ProductCouponAvgAggregateOutputType = {
    expired_at: number | null
  }

  export type ProductCouponSumAggregateOutputType = {
    expired_at: bigint | null
  }

  export type ProductCouponMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    code: string | null
    discount: string | null
    expired_at: bigint | null
  }

  export type ProductCouponMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    code: string | null
    discount: string | null
    expired_at: bigint | null
  }

  export type ProductCouponCountAggregateOutputType = {
    id: number
    product_id: number
    code: number
    discount: number
    expired_at: number
    _all: number
  }


  export type ProductCouponAvgAggregateInputType = {
    expired_at?: true
  }

  export type ProductCouponSumAggregateInputType = {
    expired_at?: true
  }

  export type ProductCouponMinAggregateInputType = {
    id?: true
    product_id?: true
    code?: true
    discount?: true
    expired_at?: true
  }

  export type ProductCouponMaxAggregateInputType = {
    id?: true
    product_id?: true
    code?: true
    discount?: true
    expired_at?: true
  }

  export type ProductCouponCountAggregateInputType = {
    id?: true
    product_id?: true
    code?: true
    discount?: true
    expired_at?: true
    _all?: true
  }

  export type ProductCouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCoupon to aggregate.
     */
    where?: ProductCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCoupons to fetch.
     */
    orderBy?: ProductCouponOrderByWithRelationInput | ProductCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCoupons
    **/
    _count?: true | ProductCouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCouponMaxAggregateInputType
  }

  export type GetProductCouponAggregateType<T extends ProductCouponAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCoupon[P]>
      : GetScalarType<T[P], AggregateProductCoupon[P]>
  }




  export type ProductCouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCouponWhereInput
    orderBy?: ProductCouponOrderByWithAggregationInput | ProductCouponOrderByWithAggregationInput[]
    by: ProductCouponScalarFieldEnum[] | ProductCouponScalarFieldEnum
    having?: ProductCouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCouponCountAggregateInputType | true
    _avg?: ProductCouponAvgAggregateInputType
    _sum?: ProductCouponSumAggregateInputType
    _min?: ProductCouponMinAggregateInputType
    _max?: ProductCouponMaxAggregateInputType
  }

  export type ProductCouponGroupByOutputType = {
    id: string
    product_id: string
    code: string
    discount: string
    expired_at: bigint
    _count: ProductCouponCountAggregateOutputType | null
    _avg: ProductCouponAvgAggregateOutputType | null
    _sum: ProductCouponSumAggregateOutputType | null
    _min: ProductCouponMinAggregateOutputType | null
    _max: ProductCouponMaxAggregateOutputType | null
  }

  type GetProductCouponGroupByPayload<T extends ProductCouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCouponGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCouponGroupByOutputType[P]>
        }
      >
    >


  export type ProductCouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    code?: boolean
    discount?: boolean
    expired_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCoupon"]>

  export type ProductCouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    code?: boolean
    discount?: boolean
    expired_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCoupon"]>

  export type ProductCouponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    code?: boolean
    discount?: boolean
    expired_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCoupon"]>

  export type ProductCouponSelectScalar = {
    id?: boolean
    product_id?: boolean
    code?: boolean
    discount?: boolean
    expired_at?: boolean
  }

  export type ProductCouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "code" | "discount" | "expired_at", ExtArgs["result"]["productCoupon"]>
  export type ProductCouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductCouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductCouponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductCouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCoupon"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      code: string
      discount: string
      expired_at: bigint
    }, ExtArgs["result"]["productCoupon"]>
    composites: {}
  }

  type ProductCouponGetPayload<S extends boolean | null | undefined | ProductCouponDefaultArgs> = $Result.GetResult<Prisma.$ProductCouponPayload, S>

  type ProductCouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCouponCountAggregateInputType | true
    }

  export interface ProductCouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCoupon'], meta: { name: 'ProductCoupon' } }
    /**
     * Find zero or one ProductCoupon that matches the filter.
     * @param {ProductCouponFindUniqueArgs} args - Arguments to find a ProductCoupon
     * @example
     * // Get one ProductCoupon
     * const productCoupon = await prisma.productCoupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCouponFindUniqueArgs>(args: SelectSubset<T, ProductCouponFindUniqueArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCoupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCouponFindUniqueOrThrowArgs} args - Arguments to find a ProductCoupon
     * @example
     * // Get one ProductCoupon
     * const productCoupon = await prisma.productCoupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCouponFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCoupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponFindFirstArgs} args - Arguments to find a ProductCoupon
     * @example
     * // Get one ProductCoupon
     * const productCoupon = await prisma.productCoupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCouponFindFirstArgs>(args?: SelectSubset<T, ProductCouponFindFirstArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCoupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponFindFirstOrThrowArgs} args - Arguments to find a ProductCoupon
     * @example
     * // Get one ProductCoupon
     * const productCoupon = await prisma.productCoupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCouponFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCoupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCoupons
     * const productCoupons = await prisma.productCoupon.findMany()
     * 
     * // Get first 10 ProductCoupons
     * const productCoupons = await prisma.productCoupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCouponWithIdOnly = await prisma.productCoupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCouponFindManyArgs>(args?: SelectSubset<T, ProductCouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCoupon.
     * @param {ProductCouponCreateArgs} args - Arguments to create a ProductCoupon.
     * @example
     * // Create one ProductCoupon
     * const ProductCoupon = await prisma.productCoupon.create({
     *   data: {
     *     // ... data to create a ProductCoupon
     *   }
     * })
     * 
     */
    create<T extends ProductCouponCreateArgs>(args: SelectSubset<T, ProductCouponCreateArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCoupons.
     * @param {ProductCouponCreateManyArgs} args - Arguments to create many ProductCoupons.
     * @example
     * // Create many ProductCoupons
     * const productCoupon = await prisma.productCoupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCouponCreateManyArgs>(args?: SelectSubset<T, ProductCouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCoupons and returns the data saved in the database.
     * @param {ProductCouponCreateManyAndReturnArgs} args - Arguments to create many ProductCoupons.
     * @example
     * // Create many ProductCoupons
     * const productCoupon = await prisma.productCoupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCoupons and only return the `id`
     * const productCouponWithIdOnly = await prisma.productCoupon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCouponCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCoupon.
     * @param {ProductCouponDeleteArgs} args - Arguments to delete one ProductCoupon.
     * @example
     * // Delete one ProductCoupon
     * const ProductCoupon = await prisma.productCoupon.delete({
     *   where: {
     *     // ... filter to delete one ProductCoupon
     *   }
     * })
     * 
     */
    delete<T extends ProductCouponDeleteArgs>(args: SelectSubset<T, ProductCouponDeleteArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCoupon.
     * @param {ProductCouponUpdateArgs} args - Arguments to update one ProductCoupon.
     * @example
     * // Update one ProductCoupon
     * const productCoupon = await prisma.productCoupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCouponUpdateArgs>(args: SelectSubset<T, ProductCouponUpdateArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCoupons.
     * @param {ProductCouponDeleteManyArgs} args - Arguments to filter ProductCoupons to delete.
     * @example
     * // Delete a few ProductCoupons
     * const { count } = await prisma.productCoupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCouponDeleteManyArgs>(args?: SelectSubset<T, ProductCouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCoupons
     * const productCoupon = await prisma.productCoupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCouponUpdateManyArgs>(args: SelectSubset<T, ProductCouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCoupons and returns the data updated in the database.
     * @param {ProductCouponUpdateManyAndReturnArgs} args - Arguments to update many ProductCoupons.
     * @example
     * // Update many ProductCoupons
     * const productCoupon = await prisma.productCoupon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCoupons and only return the `id`
     * const productCouponWithIdOnly = await prisma.productCoupon.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductCouponUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCoupon.
     * @param {ProductCouponUpsertArgs} args - Arguments to update or create a ProductCoupon.
     * @example
     * // Update or create a ProductCoupon
     * const productCoupon = await prisma.productCoupon.upsert({
     *   create: {
     *     // ... data to create a ProductCoupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCoupon we want to update
     *   }
     * })
     */
    upsert<T extends ProductCouponUpsertArgs>(args: SelectSubset<T, ProductCouponUpsertArgs<ExtArgs>>): Prisma__ProductCouponClient<$Result.GetResult<Prisma.$ProductCouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponCountArgs} args - Arguments to filter ProductCoupons to count.
     * @example
     * // Count the number of ProductCoupons
     * const count = await prisma.productCoupon.count({
     *   where: {
     *     // ... the filter for the ProductCoupons we want to count
     *   }
     * })
    **/
    count<T extends ProductCouponCountArgs>(
      args?: Subset<T, ProductCouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCouponAggregateArgs>(args: Subset<T, ProductCouponAggregateArgs>): Prisma.PrismaPromise<GetProductCouponAggregateType<T>>

    /**
     * Group by ProductCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCouponGroupByArgs} args - Group by arguments.
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
      T extends ProductCouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCouponGroupByArgs['orderBy'] }
        : { orderBy?: ProductCouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductCouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCoupon model
   */
  readonly fields: ProductCouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCoupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCoupon model
   */ 
  interface ProductCouponFieldRefs {
    readonly id: FieldRef<"ProductCoupon", 'String'>
    readonly product_id: FieldRef<"ProductCoupon", 'String'>
    readonly code: FieldRef<"ProductCoupon", 'String'>
    readonly discount: FieldRef<"ProductCoupon", 'String'>
    readonly expired_at: FieldRef<"ProductCoupon", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ProductCoupon findUnique
   */
  export type ProductCouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * Filter, which ProductCoupon to fetch.
     */
    where: ProductCouponWhereUniqueInput
  }

  /**
   * ProductCoupon findUniqueOrThrow
   */
  export type ProductCouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * Filter, which ProductCoupon to fetch.
     */
    where: ProductCouponWhereUniqueInput
  }

  /**
   * ProductCoupon findFirst
   */
  export type ProductCouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * Filter, which ProductCoupon to fetch.
     */
    where?: ProductCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCoupons to fetch.
     */
    orderBy?: ProductCouponOrderByWithRelationInput | ProductCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCoupons.
     */
    cursor?: ProductCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCoupons.
     */
    distinct?: ProductCouponScalarFieldEnum | ProductCouponScalarFieldEnum[]
  }

  /**
   * ProductCoupon findFirstOrThrow
   */
  export type ProductCouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * Filter, which ProductCoupon to fetch.
     */
    where?: ProductCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCoupons to fetch.
     */
    orderBy?: ProductCouponOrderByWithRelationInput | ProductCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCoupons.
     */
    cursor?: ProductCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCoupons.
     */
    distinct?: ProductCouponScalarFieldEnum | ProductCouponScalarFieldEnum[]
  }

  /**
   * ProductCoupon findMany
   */
  export type ProductCouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * Filter, which ProductCoupons to fetch.
     */
    where?: ProductCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCoupons to fetch.
     */
    orderBy?: ProductCouponOrderByWithRelationInput | ProductCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCoupons.
     */
    cursor?: ProductCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCoupons.
     */
    skip?: number
    distinct?: ProductCouponScalarFieldEnum | ProductCouponScalarFieldEnum[]
  }

  /**
   * ProductCoupon create
   */
  export type ProductCouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCoupon.
     */
    data: XOR<ProductCouponCreateInput, ProductCouponUncheckedCreateInput>
  }

  /**
   * ProductCoupon createMany
   */
  export type ProductCouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCoupons.
     */
    data: ProductCouponCreateManyInput | ProductCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCoupon createManyAndReturn
   */
  export type ProductCouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCoupons.
     */
    data: ProductCouponCreateManyInput | ProductCouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCoupon update
   */
  export type ProductCouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCoupon.
     */
    data: XOR<ProductCouponUpdateInput, ProductCouponUncheckedUpdateInput>
    /**
     * Choose, which ProductCoupon to update.
     */
    where: ProductCouponWhereUniqueInput
  }

  /**
   * ProductCoupon updateMany
   */
  export type ProductCouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCoupons.
     */
    data: XOR<ProductCouponUpdateManyMutationInput, ProductCouponUncheckedUpdateManyInput>
    /**
     * Filter which ProductCoupons to update
     */
    where?: ProductCouponWhereInput
    /**
     * Limit how many ProductCoupons to update.
     */
    limit?: number
  }

  /**
   * ProductCoupon updateManyAndReturn
   */
  export type ProductCouponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * The data used to update ProductCoupons.
     */
    data: XOR<ProductCouponUpdateManyMutationInput, ProductCouponUncheckedUpdateManyInput>
    /**
     * Filter which ProductCoupons to update
     */
    where?: ProductCouponWhereInput
    /**
     * Limit how many ProductCoupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCoupon upsert
   */
  export type ProductCouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCoupon to update in case it exists.
     */
    where: ProductCouponWhereUniqueInput
    /**
     * In case the ProductCoupon found by the `where` argument doesn't exist, create a new ProductCoupon with this data.
     */
    create: XOR<ProductCouponCreateInput, ProductCouponUncheckedCreateInput>
    /**
     * In case the ProductCoupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCouponUpdateInput, ProductCouponUncheckedUpdateInput>
  }

  /**
   * ProductCoupon delete
   */
  export type ProductCouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
    /**
     * Filter which ProductCoupon to delete.
     */
    where: ProductCouponWhereUniqueInput
  }

  /**
   * ProductCoupon deleteMany
   */
  export type ProductCouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCoupons to delete
     */
    where?: ProductCouponWhereInput
    /**
     * Limit how many ProductCoupons to delete.
     */
    limit?: number
  }

  /**
   * ProductCoupon without action
   */
  export type ProductCouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCoupon
     */
    select?: ProductCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCoupon
     */
    omit?: ProductCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCouponInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    url: string | null
    is_thumbnail: boolean | null
    width: number | null
    height: number | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    url: string | null
    is_thumbnail: boolean | null
    width: number | null
    height: number | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    product_id: number
    url: number
    is_thumbnail: number
    width: number
    height: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type ProductImageSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    is_thumbnail?: true
    width?: true
    height?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    is_thumbnail?: true
    width?: true
    height?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    is_thumbnail?: true
    width?: true
    height?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    product_id: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_thumbnail?: boolean
    width?: boolean
    height?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_thumbnail?: boolean
    width?: boolean
    height?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_thumbnail?: boolean
    width?: boolean
    height?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_thumbnail?: boolean
    width?: boolean
    height?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "url" | "is_thumbnail" | "width" | "height", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      url: string
      is_thumbnail: boolean
      width: number
      height: number
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */ 
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly product_id: FieldRef<"ProductImage", 'String'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly is_thumbnail: FieldRef<"ProductImage", 'Boolean'>
    readonly width: FieldRef<"ProductImage", 'Int'>
    readonly height: FieldRef<"ProductImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    name: string | null
    download_link: string | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    name: string | null
    download_link: string | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    download_link: number
    _all: number
  }


  export type ProductVariantMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    download_link?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    download_link?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    download_link?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    product_id: string
    name: string
    download_link: string | null
    _count: ProductVariantCountAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    download_link?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    product_prices?: boolean | ProductVariant$product_pricesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    download_link?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    download_link?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    download_link?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "name" | "download_link", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    product_prices?: boolean | ProductVariant$product_pricesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      product_prices: Prisma.$ProductPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      name: string
      download_link: string | null
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product_prices<T extends ProductVariant$product_pricesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$product_pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariant model
   */ 
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly product_id: FieldRef<"ProductVariant", 'String'>
    readonly name: FieldRef<"ProductVariant", 'String'>
    readonly download_link: FieldRef<"ProductVariant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.product_prices
   */
  export type ProductVariant$product_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    cursor?: ProductPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model ProductPrice
   */

  export type AggregateProductPrice = {
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  export type ProductPriceAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductPriceSumAggregateOutputType = {
    price: number | null
  }

  export type ProductPriceMinAggregateOutputType = {
    id: string | null
    variant_id: string | null
    currency_code: $Enums.CurrencyCode | null
    price: number | null
  }

  export type ProductPriceMaxAggregateOutputType = {
    id: string | null
    variant_id: string | null
    currency_code: $Enums.CurrencyCode | null
    price: number | null
  }

  export type ProductPriceCountAggregateOutputType = {
    id: number
    variant_id: number
    currency_code: number
    price: number
    _all: number
  }


  export type ProductPriceAvgAggregateInputType = {
    price?: true
  }

  export type ProductPriceSumAggregateInputType = {
    price?: true
  }

  export type ProductPriceMinAggregateInputType = {
    id?: true
    variant_id?: true
    currency_code?: true
    price?: true
  }

  export type ProductPriceMaxAggregateInputType = {
    id?: true
    variant_id?: true
    currency_code?: true
    price?: true
  }

  export type ProductPriceCountAggregateInputType = {
    id?: true
    variant_id?: true
    currency_code?: true
    price?: true
    _all?: true
  }

  export type ProductPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrice to aggregate.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPrices
    **/
    _count?: true | ProductPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceMaxAggregateInputType
  }

  export type GetProductPriceAggregateType<T extends ProductPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPrice[P]>
      : GetScalarType<T[P], AggregateProductPrice[P]>
  }




  export type ProductPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithAggregationInput | ProductPriceOrderByWithAggregationInput[]
    by: ProductPriceScalarFieldEnum[] | ProductPriceScalarFieldEnum
    having?: ProductPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceCountAggregateInputType | true
    _avg?: ProductPriceAvgAggregateInputType
    _sum?: ProductPriceSumAggregateInputType
    _min?: ProductPriceMinAggregateInputType
    _max?: ProductPriceMaxAggregateInputType
  }

  export type ProductPriceGroupByOutputType = {
    id: string
    variant_id: string
    currency_code: $Enums.CurrencyCode
    price: number
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  type GetProductPriceGroupByPayload<T extends ProductPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variant_id?: boolean
    currency_code?: boolean
    price?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variant_id?: boolean
    currency_code?: boolean
    price?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variant_id?: boolean
    currency_code?: boolean
    price?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectScalar = {
    id?: boolean
    variant_id?: boolean
    currency_code?: boolean
    price?: boolean
  }

  export type ProductPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variant_id" | "currency_code" | "price", ExtArgs["result"]["productPrice"]>
  export type ProductPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type ProductPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type ProductPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $ProductPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPrice"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variant_id: string
      currency_code: $Enums.CurrencyCode
      price: number
    }, ExtArgs["result"]["productPrice"]>
    composites: {}
  }

  type ProductPriceGetPayload<S extends boolean | null | undefined | ProductPriceDefaultArgs> = $Result.GetResult<Prisma.$ProductPricePayload, S>

  type ProductPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPriceCountAggregateInputType | true
    }

  export interface ProductPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPrice'], meta: { name: 'ProductPrice' } }
    /**
     * Find zero or one ProductPrice that matches the filter.
     * @param {ProductPriceFindUniqueArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceFindUniqueArgs>(args: SelectSubset<T, ProductPriceFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPriceFindUniqueOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceFindFirstArgs>(args?: SelectSubset<T, ProductPriceFindFirstArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPrices
     * const productPrices = await prisma.productPrice.findMany()
     * 
     * // Get first 10 ProductPrices
     * const productPrices = await prisma.productPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceFindManyArgs>(args?: SelectSubset<T, ProductPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPrice.
     * @param {ProductPriceCreateArgs} args - Arguments to create a ProductPrice.
     * @example
     * // Create one ProductPrice
     * const ProductPrice = await prisma.productPrice.create({
     *   data: {
     *     // ... data to create a ProductPrice
     *   }
     * })
     * 
     */
    create<T extends ProductPriceCreateArgs>(args: SelectSubset<T, ProductPriceCreateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPrices.
     * @param {ProductPriceCreateManyArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceCreateManyArgs>(args?: SelectSubset<T, ProductPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPrices and returns the data saved in the database.
     * @param {ProductPriceCreateManyAndReturnArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPrice.
     * @param {ProductPriceDeleteArgs} args - Arguments to delete one ProductPrice.
     * @example
     * // Delete one ProductPrice
     * const ProductPrice = await prisma.productPrice.delete({
     *   where: {
     *     // ... filter to delete one ProductPrice
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceDeleteArgs>(args: SelectSubset<T, ProductPriceDeleteArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPrice.
     * @param {ProductPriceUpdateArgs} args - Arguments to update one ProductPrice.
     * @example
     * // Update one ProductPrice
     * const productPrice = await prisma.productPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceUpdateArgs>(args: SelectSubset<T, ProductPriceUpdateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPrices.
     * @param {ProductPriceDeleteManyArgs} args - Arguments to filter ProductPrices to delete.
     * @example
     * // Delete a few ProductPrices
     * const { count } = await prisma.productPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceDeleteManyArgs>(args?: SelectSubset<T, ProductPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceUpdateManyArgs>(args: SelectSubset<T, ProductPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices and returns the data updated in the database.
     * @param {ProductPriceUpdateManyAndReturnArgs} args - Arguments to update many ProductPrices.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPrice.
     * @param {ProductPriceUpsertArgs} args - Arguments to update or create a ProductPrice.
     * @example
     * // Update or create a ProductPrice
     * const productPrice = await prisma.productPrice.upsert({
     *   create: {
     *     // ... data to create a ProductPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPrice we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceUpsertArgs>(args: SelectSubset<T, ProductPriceUpsertArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceCountArgs} args - Arguments to filter ProductPrices to count.
     * @example
     * // Count the number of ProductPrices
     * const count = await prisma.productPrice.count({
     *   where: {
     *     // ... the filter for the ProductPrices we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceCountArgs>(
      args?: Subset<T, ProductPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPriceAggregateArgs>(args: Subset<T, ProductPriceAggregateArgs>): Prisma.PrismaPromise<GetProductPriceAggregateType<T>>

    /**
     * Group by ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceGroupByArgs} args - Group by arguments.
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
      T extends ProductPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPrice model
   */
  readonly fields: ProductPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPrice model
   */ 
  interface ProductPriceFieldRefs {
    readonly id: FieldRef<"ProductPrice", 'String'>
    readonly variant_id: FieldRef<"ProductPrice", 'String'>
    readonly currency_code: FieldRef<"ProductPrice", 'CurrencyCode'>
    readonly price: FieldRef<"ProductPrice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductPrice findUnique
   */
  export type ProductPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findUniqueOrThrow
   */
  export type ProductPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findFirst
   */
  export type ProductPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findFirstOrThrow
   */
  export type ProductPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findMany
   */
  export type ProductPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrices to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice create
   */
  export type ProductPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPrice.
     */
    data: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
  }

  /**
   * ProductPrice createMany
   */
  export type ProductPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPrice createManyAndReturn
   */
  export type ProductPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice update
   */
  export type ProductPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPrice.
     */
    data: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
    /**
     * Choose, which ProductPrice to update.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice updateMany
   */
  export type ProductPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to update.
     */
    limit?: number
  }

  /**
   * ProductPrice updateManyAndReturn
   */
  export type ProductPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice upsert
   */
  export type ProductPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPrice to update in case it exists.
     */
    where: ProductPriceWhereUniqueInput
    /**
     * In case the ProductPrice found by the `where` argument doesn't exist, create a new ProductPrice with this data.
     */
    create: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
    /**
     * In case the ProductPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
  }

  /**
   * ProductPrice delete
   */
  export type ProductPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter which ProductPrice to delete.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice deleteMany
   */
  export type ProductPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrices to delete
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to delete.
     */
    limit?: number
  }

  /**
   * ProductPrice without action
   */
  export type ProductPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
  }


  /**
   * Model AboutUs
   */

  export type AggregateAboutUs = {
    _count: AboutUsCountAggregateOutputType | null
    _avg: AboutUsAvgAggregateOutputType | null
    _sum: AboutUsSumAggregateOutputType | null
    _min: AboutUsMinAggregateOutputType | null
    _max: AboutUsMaxAggregateOutputType | null
  }

  export type AboutUsAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutUsSumAggregateOutputType = {
    id: number | null
  }

  export type AboutUsMinAggregateOutputType = {
    id: number | null
    content: string | null
  }

  export type AboutUsMaxAggregateOutputType = {
    id: number | null
    content: string | null
  }

  export type AboutUsCountAggregateOutputType = {
    id: number
    content: number
    _all: number
  }


  export type AboutUsAvgAggregateInputType = {
    id?: true
  }

  export type AboutUsSumAggregateInputType = {
    id?: true
  }

  export type AboutUsMinAggregateInputType = {
    id?: true
    content?: true
  }

  export type AboutUsMaxAggregateInputType = {
    id?: true
    content?: true
  }

  export type AboutUsCountAggregateInputType = {
    id?: true
    content?: true
    _all?: true
  }

  export type AboutUsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutUs to aggregate.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aboutuses
    **/
    _count?: true | AboutUsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutUsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutUsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutUsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutUsMaxAggregateInputType
  }

  export type GetAboutUsAggregateType<T extends AboutUsAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutUs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutUs[P]>
      : GetScalarType<T[P], AggregateAboutUs[P]>
  }




  export type AboutUsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutUsWhereInput
    orderBy?: AboutUsOrderByWithAggregationInput | AboutUsOrderByWithAggregationInput[]
    by: AboutUsScalarFieldEnum[] | AboutUsScalarFieldEnum
    having?: AboutUsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutUsCountAggregateInputType | true
    _avg?: AboutUsAvgAggregateInputType
    _sum?: AboutUsSumAggregateInputType
    _min?: AboutUsMinAggregateInputType
    _max?: AboutUsMaxAggregateInputType
  }

  export type AboutUsGroupByOutputType = {
    id: number
    content: string
    _count: AboutUsCountAggregateOutputType | null
    _avg: AboutUsAvgAggregateOutputType | null
    _sum: AboutUsSumAggregateOutputType | null
    _min: AboutUsMinAggregateOutputType | null
    _max: AboutUsMaxAggregateOutputType | null
  }

  type GetAboutUsGroupByPayload<T extends AboutUsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutUsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutUsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutUsGroupByOutputType[P]>
            : GetScalarType<T[P], AboutUsGroupByOutputType[P]>
        }
      >
    >


  export type AboutUsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["aboutUs"]>

  export type AboutUsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["aboutUs"]>

  export type AboutUsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["aboutUs"]>

  export type AboutUsSelectScalar = {
    id?: boolean
    content?: boolean
  }

  export type AboutUsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content", ExtArgs["result"]["aboutUs"]>

  export type $AboutUsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutUs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
    }, ExtArgs["result"]["aboutUs"]>
    composites: {}
  }

  type AboutUsGetPayload<S extends boolean | null | undefined | AboutUsDefaultArgs> = $Result.GetResult<Prisma.$AboutUsPayload, S>

  type AboutUsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutUsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutUsCountAggregateInputType | true
    }

  export interface AboutUsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutUs'], meta: { name: 'AboutUs' } }
    /**
     * Find zero or one AboutUs that matches the filter.
     * @param {AboutUsFindUniqueArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutUsFindUniqueArgs>(args: SelectSubset<T, AboutUsFindUniqueArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutUs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutUsFindUniqueOrThrowArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutUsFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutUsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutUs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsFindFirstArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutUsFindFirstArgs>(args?: SelectSubset<T, AboutUsFindFirstArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutUs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsFindFirstOrThrowArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutUsFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutUsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aboutuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aboutuses
     * const aboutuses = await prisma.aboutUs.findMany()
     * 
     * // Get first 10 Aboutuses
     * const aboutuses = await prisma.aboutUs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutUsWithIdOnly = await prisma.aboutUs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutUsFindManyArgs>(args?: SelectSubset<T, AboutUsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutUs.
     * @param {AboutUsCreateArgs} args - Arguments to create a AboutUs.
     * @example
     * // Create one AboutUs
     * const AboutUs = await prisma.aboutUs.create({
     *   data: {
     *     // ... data to create a AboutUs
     *   }
     * })
     * 
     */
    create<T extends AboutUsCreateArgs>(args: SelectSubset<T, AboutUsCreateArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aboutuses.
     * @param {AboutUsCreateManyArgs} args - Arguments to create many Aboutuses.
     * @example
     * // Create many Aboutuses
     * const aboutUs = await prisma.aboutUs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutUsCreateManyArgs>(args?: SelectSubset<T, AboutUsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aboutuses and returns the data saved in the database.
     * @param {AboutUsCreateManyAndReturnArgs} args - Arguments to create many Aboutuses.
     * @example
     * // Create many Aboutuses
     * const aboutUs = await prisma.aboutUs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aboutuses and only return the `id`
     * const aboutUsWithIdOnly = await prisma.aboutUs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutUsCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutUsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutUs.
     * @param {AboutUsDeleteArgs} args - Arguments to delete one AboutUs.
     * @example
     * // Delete one AboutUs
     * const AboutUs = await prisma.aboutUs.delete({
     *   where: {
     *     // ... filter to delete one AboutUs
     *   }
     * })
     * 
     */
    delete<T extends AboutUsDeleteArgs>(args: SelectSubset<T, AboutUsDeleteArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutUs.
     * @param {AboutUsUpdateArgs} args - Arguments to update one AboutUs.
     * @example
     * // Update one AboutUs
     * const aboutUs = await prisma.aboutUs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutUsUpdateArgs>(args: SelectSubset<T, AboutUsUpdateArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aboutuses.
     * @param {AboutUsDeleteManyArgs} args - Arguments to filter Aboutuses to delete.
     * @example
     * // Delete a few Aboutuses
     * const { count } = await prisma.aboutUs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutUsDeleteManyArgs>(args?: SelectSubset<T, AboutUsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aboutuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aboutuses
     * const aboutUs = await prisma.aboutUs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutUsUpdateManyArgs>(args: SelectSubset<T, AboutUsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aboutuses and returns the data updated in the database.
     * @param {AboutUsUpdateManyAndReturnArgs} args - Arguments to update many Aboutuses.
     * @example
     * // Update many Aboutuses
     * const aboutUs = await prisma.aboutUs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aboutuses and only return the `id`
     * const aboutUsWithIdOnly = await prisma.aboutUs.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutUsUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutUsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutUs.
     * @param {AboutUsUpsertArgs} args - Arguments to update or create a AboutUs.
     * @example
     * // Update or create a AboutUs
     * const aboutUs = await prisma.aboutUs.upsert({
     *   create: {
     *     // ... data to create a AboutUs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutUs we want to update
     *   }
     * })
     */
    upsert<T extends AboutUsUpsertArgs>(args: SelectSubset<T, AboutUsUpsertArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aboutuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsCountArgs} args - Arguments to filter Aboutuses to count.
     * @example
     * // Count the number of Aboutuses
     * const count = await prisma.aboutUs.count({
     *   where: {
     *     // ... the filter for the Aboutuses we want to count
     *   }
     * })
    **/
    count<T extends AboutUsCountArgs>(
      args?: Subset<T, AboutUsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutUsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutUsAggregateArgs>(args: Subset<T, AboutUsAggregateArgs>): Prisma.PrismaPromise<GetAboutUsAggregateType<T>>

    /**
     * Group by AboutUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsGroupByArgs} args - Group by arguments.
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
      T extends AboutUsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutUsGroupByArgs['orderBy'] }
        : { orderBy?: AboutUsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, AboutUsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutUsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutUs model
   */
  readonly fields: AboutUsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutUs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutUsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutUs model
   */ 
  interface AboutUsFieldRefs {
    readonly id: FieldRef<"AboutUs", 'Int'>
    readonly content: FieldRef<"AboutUs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AboutUs findUnique
   */
  export type AboutUsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs findUniqueOrThrow
   */
  export type AboutUsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs findFirst
   */
  export type AboutUsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aboutuses.
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aboutuses.
     */
    distinct?: AboutUsScalarFieldEnum | AboutUsScalarFieldEnum[]
  }

  /**
   * AboutUs findFirstOrThrow
   */
  export type AboutUsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aboutuses.
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aboutuses.
     */
    distinct?: AboutUsScalarFieldEnum | AboutUsScalarFieldEnum[]
  }

  /**
   * AboutUs findMany
   */
  export type AboutUsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which Aboutuses to fetch.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aboutuses.
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    distinct?: AboutUsScalarFieldEnum | AboutUsScalarFieldEnum[]
  }

  /**
   * AboutUs create
   */
  export type AboutUsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutUs.
     */
    data: XOR<AboutUsCreateInput, AboutUsUncheckedCreateInput>
  }

  /**
   * AboutUs createMany
   */
  export type AboutUsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aboutuses.
     */
    data: AboutUsCreateManyInput | AboutUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutUs createManyAndReturn
   */
  export type AboutUsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data used to create many Aboutuses.
     */
    data: AboutUsCreateManyInput | AboutUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutUs update
   */
  export type AboutUsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutUs.
     */
    data: XOR<AboutUsUpdateInput, AboutUsUncheckedUpdateInput>
    /**
     * Choose, which AboutUs to update.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs updateMany
   */
  export type AboutUsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aboutuses.
     */
    data: XOR<AboutUsUpdateManyMutationInput, AboutUsUncheckedUpdateManyInput>
    /**
     * Filter which Aboutuses to update
     */
    where?: AboutUsWhereInput
    /**
     * Limit how many Aboutuses to update.
     */
    limit?: number
  }

  /**
   * AboutUs updateManyAndReturn
   */
  export type AboutUsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data used to update Aboutuses.
     */
    data: XOR<AboutUsUpdateManyMutationInput, AboutUsUncheckedUpdateManyInput>
    /**
     * Filter which Aboutuses to update
     */
    where?: AboutUsWhereInput
    /**
     * Limit how many Aboutuses to update.
     */
    limit?: number
  }

  /**
   * AboutUs upsert
   */
  export type AboutUsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutUs to update in case it exists.
     */
    where: AboutUsWhereUniqueInput
    /**
     * In case the AboutUs found by the `where` argument doesn't exist, create a new AboutUs with this data.
     */
    create: XOR<AboutUsCreateInput, AboutUsUncheckedCreateInput>
    /**
     * In case the AboutUs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutUsUpdateInput, AboutUsUncheckedUpdateInput>
  }

  /**
   * AboutUs delete
   */
  export type AboutUsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter which AboutUs to delete.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs deleteMany
   */
  export type AboutUsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aboutuses to delete
     */
    where?: AboutUsWhereInput
    /**
     * Limit how many Aboutuses to delete.
     */
    limit?: number
  }

  /**
   * AboutUs without action
   */
  export type AboutUsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
  }


  /**
   * Model PrivacyPolicy
   */

  export type AggregatePrivacyPolicy = {
    _count: PrivacyPolicyCountAggregateOutputType | null
    _avg: PrivacyPolicyAvgAggregateOutputType | null
    _sum: PrivacyPolicySumAggregateOutputType | null
    _min: PrivacyPolicyMinAggregateOutputType | null
    _max: PrivacyPolicyMaxAggregateOutputType | null
  }

  export type PrivacyPolicyAvgAggregateOutputType = {
    id: number | null
    updated_at: number | null
  }

  export type PrivacyPolicySumAggregateOutputType = {
    id: number | null
    updated_at: bigint | null
  }

  export type PrivacyPolicyMinAggregateOutputType = {
    id: number | null
    content: string | null
    updated_at: bigint | null
  }

  export type PrivacyPolicyMaxAggregateOutputType = {
    id: number | null
    content: string | null
    updated_at: bigint | null
  }

  export type PrivacyPolicyCountAggregateOutputType = {
    id: number
    content: number
    updated_at: number
    _all: number
  }


  export type PrivacyPolicyAvgAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type PrivacyPolicySumAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type PrivacyPolicyMinAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
  }

  export type PrivacyPolicyMaxAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
  }

  export type PrivacyPolicyCountAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
    _all?: true
  }

  export type PrivacyPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivacyPolicy to aggregate.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivacyPolicies
    **/
    _count?: true | PrivacyPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivacyPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivacyPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivacyPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivacyPolicyMaxAggregateInputType
  }

  export type GetPrivacyPolicyAggregateType<T extends PrivacyPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivacyPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivacyPolicy[P]>
      : GetScalarType<T[P], AggregatePrivacyPolicy[P]>
  }




  export type PrivacyPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivacyPolicyWhereInput
    orderBy?: PrivacyPolicyOrderByWithAggregationInput | PrivacyPolicyOrderByWithAggregationInput[]
    by: PrivacyPolicyScalarFieldEnum[] | PrivacyPolicyScalarFieldEnum
    having?: PrivacyPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivacyPolicyCountAggregateInputType | true
    _avg?: PrivacyPolicyAvgAggregateInputType
    _sum?: PrivacyPolicySumAggregateInputType
    _min?: PrivacyPolicyMinAggregateInputType
    _max?: PrivacyPolicyMaxAggregateInputType
  }

  export type PrivacyPolicyGroupByOutputType = {
    id: number
    content: string
    updated_at: bigint
    _count: PrivacyPolicyCountAggregateOutputType | null
    _avg: PrivacyPolicyAvgAggregateOutputType | null
    _sum: PrivacyPolicySumAggregateOutputType | null
    _min: PrivacyPolicyMinAggregateOutputType | null
    _max: PrivacyPolicyMaxAggregateOutputType | null
  }

  type GetPrivacyPolicyGroupByPayload<T extends PrivacyPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivacyPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivacyPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivacyPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PrivacyPolicyGroupByOutputType[P]>
        }
      >
    >


  export type PrivacyPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["privacyPolicy"]>

  export type PrivacyPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["privacyPolicy"]>

  export type PrivacyPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["privacyPolicy"]>

  export type PrivacyPolicySelectScalar = {
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }

  export type PrivacyPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "updated_at", ExtArgs["result"]["privacyPolicy"]>

  export type $PrivacyPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivacyPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      updated_at: bigint
    }, ExtArgs["result"]["privacyPolicy"]>
    composites: {}
  }

  type PrivacyPolicyGetPayload<S extends boolean | null | undefined | PrivacyPolicyDefaultArgs> = $Result.GetResult<Prisma.$PrivacyPolicyPayload, S>

  type PrivacyPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivacyPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivacyPolicyCountAggregateInputType | true
    }

  export interface PrivacyPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivacyPolicy'], meta: { name: 'PrivacyPolicy' } }
    /**
     * Find zero or one PrivacyPolicy that matches the filter.
     * @param {PrivacyPolicyFindUniqueArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivacyPolicyFindUniqueArgs>(args: SelectSubset<T, PrivacyPolicyFindUniqueArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivacyPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivacyPolicyFindUniqueOrThrowArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivacyPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivacyPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivacyPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyFindFirstArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivacyPolicyFindFirstArgs>(args?: SelectSubset<T, PrivacyPolicyFindFirstArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivacyPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyFindFirstOrThrowArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivacyPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivacyPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivacyPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivacyPolicies
     * const privacyPolicies = await prisma.privacyPolicy.findMany()
     * 
     * // Get first 10 PrivacyPolicies
     * const privacyPolicies = await prisma.privacyPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privacyPolicyWithIdOnly = await prisma.privacyPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivacyPolicyFindManyArgs>(args?: SelectSubset<T, PrivacyPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivacyPolicy.
     * @param {PrivacyPolicyCreateArgs} args - Arguments to create a PrivacyPolicy.
     * @example
     * // Create one PrivacyPolicy
     * const PrivacyPolicy = await prisma.privacyPolicy.create({
     *   data: {
     *     // ... data to create a PrivacyPolicy
     *   }
     * })
     * 
     */
    create<T extends PrivacyPolicyCreateArgs>(args: SelectSubset<T, PrivacyPolicyCreateArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivacyPolicies.
     * @param {PrivacyPolicyCreateManyArgs} args - Arguments to create many PrivacyPolicies.
     * @example
     * // Create many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivacyPolicyCreateManyArgs>(args?: SelectSubset<T, PrivacyPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivacyPolicies and returns the data saved in the database.
     * @param {PrivacyPolicyCreateManyAndReturnArgs} args - Arguments to create many PrivacyPolicies.
     * @example
     * // Create many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivacyPolicies and only return the `id`
     * const privacyPolicyWithIdOnly = await prisma.privacyPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivacyPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivacyPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivacyPolicy.
     * @param {PrivacyPolicyDeleteArgs} args - Arguments to delete one PrivacyPolicy.
     * @example
     * // Delete one PrivacyPolicy
     * const PrivacyPolicy = await prisma.privacyPolicy.delete({
     *   where: {
     *     // ... filter to delete one PrivacyPolicy
     *   }
     * })
     * 
     */
    delete<T extends PrivacyPolicyDeleteArgs>(args: SelectSubset<T, PrivacyPolicyDeleteArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivacyPolicy.
     * @param {PrivacyPolicyUpdateArgs} args - Arguments to update one PrivacyPolicy.
     * @example
     * // Update one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivacyPolicyUpdateArgs>(args: SelectSubset<T, PrivacyPolicyUpdateArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivacyPolicies.
     * @param {PrivacyPolicyDeleteManyArgs} args - Arguments to filter PrivacyPolicies to delete.
     * @example
     * // Delete a few PrivacyPolicies
     * const { count } = await prisma.privacyPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivacyPolicyDeleteManyArgs>(args?: SelectSubset<T, PrivacyPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivacyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivacyPolicyUpdateManyArgs>(args: SelectSubset<T, PrivacyPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivacyPolicies and returns the data updated in the database.
     * @param {PrivacyPolicyUpdateManyAndReturnArgs} args - Arguments to update many PrivacyPolicies.
     * @example
     * // Update many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivacyPolicies and only return the `id`
     * const privacyPolicyWithIdOnly = await prisma.privacyPolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivacyPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivacyPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivacyPolicy.
     * @param {PrivacyPolicyUpsertArgs} args - Arguments to update or create a PrivacyPolicy.
     * @example
     * // Update or create a PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.upsert({
     *   create: {
     *     // ... data to create a PrivacyPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivacyPolicy we want to update
     *   }
     * })
     */
    upsert<T extends PrivacyPolicyUpsertArgs>(args: SelectSubset<T, PrivacyPolicyUpsertArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivacyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyCountArgs} args - Arguments to filter PrivacyPolicies to count.
     * @example
     * // Count the number of PrivacyPolicies
     * const count = await prisma.privacyPolicy.count({
     *   where: {
     *     // ... the filter for the PrivacyPolicies we want to count
     *   }
     * })
    **/
    count<T extends PrivacyPolicyCountArgs>(
      args?: Subset<T, PrivacyPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivacyPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivacyPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivacyPolicyAggregateArgs>(args: Subset<T, PrivacyPolicyAggregateArgs>): Prisma.PrismaPromise<GetPrivacyPolicyAggregateType<T>>

    /**
     * Group by PrivacyPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyGroupByArgs} args - Group by arguments.
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
      T extends PrivacyPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivacyPolicyGroupByArgs['orderBy'] }
        : { orderBy?: PrivacyPolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, PrivacyPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivacyPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivacyPolicy model
   */
  readonly fields: PrivacyPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivacyPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivacyPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivacyPolicy model
   */ 
  interface PrivacyPolicyFieldRefs {
    readonly id: FieldRef<"PrivacyPolicy", 'Int'>
    readonly content: FieldRef<"PrivacyPolicy", 'String'>
    readonly updated_at: FieldRef<"PrivacyPolicy", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * PrivacyPolicy findUnique
   */
  export type PrivacyPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy findUniqueOrThrow
   */
  export type PrivacyPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy findFirst
   */
  export type PrivacyPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivacyPolicies.
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivacyPolicies.
     */
    distinct?: PrivacyPolicyScalarFieldEnum | PrivacyPolicyScalarFieldEnum[]
  }

  /**
   * PrivacyPolicy findFirstOrThrow
   */
  export type PrivacyPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivacyPolicies.
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivacyPolicies.
     */
    distinct?: PrivacyPolicyScalarFieldEnum | PrivacyPolicyScalarFieldEnum[]
  }

  /**
   * PrivacyPolicy findMany
   */
  export type PrivacyPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicies to fetch.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivacyPolicies.
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    distinct?: PrivacyPolicyScalarFieldEnum | PrivacyPolicyScalarFieldEnum[]
  }

  /**
   * PrivacyPolicy create
   */
  export type PrivacyPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a PrivacyPolicy.
     */
    data: XOR<PrivacyPolicyCreateInput, PrivacyPolicyUncheckedCreateInput>
  }

  /**
   * PrivacyPolicy createMany
   */
  export type PrivacyPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivacyPolicies.
     */
    data: PrivacyPolicyCreateManyInput | PrivacyPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivacyPolicy createManyAndReturn
   */
  export type PrivacyPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many PrivacyPolicies.
     */
    data: PrivacyPolicyCreateManyInput | PrivacyPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivacyPolicy update
   */
  export type PrivacyPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a PrivacyPolicy.
     */
    data: XOR<PrivacyPolicyUpdateInput, PrivacyPolicyUncheckedUpdateInput>
    /**
     * Choose, which PrivacyPolicy to update.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy updateMany
   */
  export type PrivacyPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivacyPolicies.
     */
    data: XOR<PrivacyPolicyUpdateManyMutationInput, PrivacyPolicyUncheckedUpdateManyInput>
    /**
     * Filter which PrivacyPolicies to update
     */
    where?: PrivacyPolicyWhereInput
    /**
     * Limit how many PrivacyPolicies to update.
     */
    limit?: number
  }

  /**
   * PrivacyPolicy updateManyAndReturn
   */
  export type PrivacyPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data used to update PrivacyPolicies.
     */
    data: XOR<PrivacyPolicyUpdateManyMutationInput, PrivacyPolicyUncheckedUpdateManyInput>
    /**
     * Filter which PrivacyPolicies to update
     */
    where?: PrivacyPolicyWhereInput
    /**
     * Limit how many PrivacyPolicies to update.
     */
    limit?: number
  }

  /**
   * PrivacyPolicy upsert
   */
  export type PrivacyPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the PrivacyPolicy to update in case it exists.
     */
    where: PrivacyPolicyWhereUniqueInput
    /**
     * In case the PrivacyPolicy found by the `where` argument doesn't exist, create a new PrivacyPolicy with this data.
     */
    create: XOR<PrivacyPolicyCreateInput, PrivacyPolicyUncheckedCreateInput>
    /**
     * In case the PrivacyPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivacyPolicyUpdateInput, PrivacyPolicyUncheckedUpdateInput>
  }

  /**
   * PrivacyPolicy delete
   */
  export type PrivacyPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter which PrivacyPolicy to delete.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy deleteMany
   */
  export type PrivacyPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivacyPolicies to delete
     */
    where?: PrivacyPolicyWhereInput
    /**
     * Limit how many PrivacyPolicies to delete.
     */
    limit?: number
  }

  /**
   * PrivacyPolicy without action
   */
  export type PrivacyPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
  }


  /**
   * Model TermsandConditions
   */

  export type AggregateTermsandConditions = {
    _count: TermsandConditionsCountAggregateOutputType | null
    _avg: TermsandConditionsAvgAggregateOutputType | null
    _sum: TermsandConditionsSumAggregateOutputType | null
    _min: TermsandConditionsMinAggregateOutputType | null
    _max: TermsandConditionsMaxAggregateOutputType | null
  }

  export type TermsandConditionsAvgAggregateOutputType = {
    id: number | null
    updated_at: number | null
  }

  export type TermsandConditionsSumAggregateOutputType = {
    id: number | null
    updated_at: bigint | null
  }

  export type TermsandConditionsMinAggregateOutputType = {
    id: number | null
    content: string | null
    updated_at: bigint | null
  }

  export type TermsandConditionsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    updated_at: bigint | null
  }

  export type TermsandConditionsCountAggregateOutputType = {
    id: number
    content: number
    updated_at: number
    _all: number
  }


  export type TermsandConditionsAvgAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type TermsandConditionsSumAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type TermsandConditionsMinAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
  }

  export type TermsandConditionsMaxAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
  }

  export type TermsandConditionsCountAggregateInputType = {
    id?: true
    content?: true
    updated_at?: true
    _all?: true
  }

  export type TermsandConditionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsandConditions to aggregate.
     */
    where?: TermsandConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsandConditions to fetch.
     */
    orderBy?: TermsandConditionsOrderByWithRelationInput | TermsandConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsandConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsandConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsandConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermsandConditions
    **/
    _count?: true | TermsandConditionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermsandConditionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermsandConditionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsandConditionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsandConditionsMaxAggregateInputType
  }

  export type GetTermsandConditionsAggregateType<T extends TermsandConditionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsandConditions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsandConditions[P]>
      : GetScalarType<T[P], AggregateTermsandConditions[P]>
  }




  export type TermsandConditionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermsandConditionsWhereInput
    orderBy?: TermsandConditionsOrderByWithAggregationInput | TermsandConditionsOrderByWithAggregationInput[]
    by: TermsandConditionsScalarFieldEnum[] | TermsandConditionsScalarFieldEnum
    having?: TermsandConditionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsandConditionsCountAggregateInputType | true
    _avg?: TermsandConditionsAvgAggregateInputType
    _sum?: TermsandConditionsSumAggregateInputType
    _min?: TermsandConditionsMinAggregateInputType
    _max?: TermsandConditionsMaxAggregateInputType
  }

  export type TermsandConditionsGroupByOutputType = {
    id: number
    content: string
    updated_at: bigint
    _count: TermsandConditionsCountAggregateOutputType | null
    _avg: TermsandConditionsAvgAggregateOutputType | null
    _sum: TermsandConditionsSumAggregateOutputType | null
    _min: TermsandConditionsMinAggregateOutputType | null
    _max: TermsandConditionsMaxAggregateOutputType | null
  }

  type GetTermsandConditionsGroupByPayload<T extends TermsandConditionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsandConditionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsandConditionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsandConditionsGroupByOutputType[P]>
            : GetScalarType<T[P], TermsandConditionsGroupByOutputType[P]>
        }
      >
    >


  export type TermsandConditionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["termsandConditions"]>

  export type TermsandConditionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["termsandConditions"]>

  export type TermsandConditionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["termsandConditions"]>

  export type TermsandConditionsSelectScalar = {
    id?: boolean
    content?: boolean
    updated_at?: boolean
  }

  export type TermsandConditionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "updated_at", ExtArgs["result"]["termsandConditions"]>

  export type $TermsandConditionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TermsandConditions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      updated_at: bigint
    }, ExtArgs["result"]["termsandConditions"]>
    composites: {}
  }

  type TermsandConditionsGetPayload<S extends boolean | null | undefined | TermsandConditionsDefaultArgs> = $Result.GetResult<Prisma.$TermsandConditionsPayload, S>

  type TermsandConditionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermsandConditionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermsandConditionsCountAggregateInputType | true
    }

  export interface TermsandConditionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermsandConditions'], meta: { name: 'TermsandConditions' } }
    /**
     * Find zero or one TermsandConditions that matches the filter.
     * @param {TermsandConditionsFindUniqueArgs} args - Arguments to find a TermsandConditions
     * @example
     * // Get one TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermsandConditionsFindUniqueArgs>(args: SelectSubset<T, TermsandConditionsFindUniqueArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermsandConditions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermsandConditionsFindUniqueOrThrowArgs} args - Arguments to find a TermsandConditions
     * @example
     * // Get one TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermsandConditionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TermsandConditionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsandConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsFindFirstArgs} args - Arguments to find a TermsandConditions
     * @example
     * // Get one TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermsandConditionsFindFirstArgs>(args?: SelectSubset<T, TermsandConditionsFindFirstArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsandConditions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsFindFirstOrThrowArgs} args - Arguments to find a TermsandConditions
     * @example
     * // Get one TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermsandConditionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TermsandConditionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermsandConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.findMany()
     * 
     * // Get first 10 TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsandConditionsWithIdOnly = await prisma.termsandConditions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermsandConditionsFindManyArgs>(args?: SelectSubset<T, TermsandConditionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermsandConditions.
     * @param {TermsandConditionsCreateArgs} args - Arguments to create a TermsandConditions.
     * @example
     * // Create one TermsandConditions
     * const TermsandConditions = await prisma.termsandConditions.create({
     *   data: {
     *     // ... data to create a TermsandConditions
     *   }
     * })
     * 
     */
    create<T extends TermsandConditionsCreateArgs>(args: SelectSubset<T, TermsandConditionsCreateArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermsandConditions.
     * @param {TermsandConditionsCreateManyArgs} args - Arguments to create many TermsandConditions.
     * @example
     * // Create many TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermsandConditionsCreateManyArgs>(args?: SelectSubset<T, TermsandConditionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermsandConditions and returns the data saved in the database.
     * @param {TermsandConditionsCreateManyAndReturnArgs} args - Arguments to create many TermsandConditions.
     * @example
     * // Create many TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermsandConditions and only return the `id`
     * const termsandConditionsWithIdOnly = await prisma.termsandConditions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermsandConditionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TermsandConditionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermsandConditions.
     * @param {TermsandConditionsDeleteArgs} args - Arguments to delete one TermsandConditions.
     * @example
     * // Delete one TermsandConditions
     * const TermsandConditions = await prisma.termsandConditions.delete({
     *   where: {
     *     // ... filter to delete one TermsandConditions
     *   }
     * })
     * 
     */
    delete<T extends TermsandConditionsDeleteArgs>(args: SelectSubset<T, TermsandConditionsDeleteArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermsandConditions.
     * @param {TermsandConditionsUpdateArgs} args - Arguments to update one TermsandConditions.
     * @example
     * // Update one TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermsandConditionsUpdateArgs>(args: SelectSubset<T, TermsandConditionsUpdateArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermsandConditions.
     * @param {TermsandConditionsDeleteManyArgs} args - Arguments to filter TermsandConditions to delete.
     * @example
     * // Delete a few TermsandConditions
     * const { count } = await prisma.termsandConditions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermsandConditionsDeleteManyArgs>(args?: SelectSubset<T, TermsandConditionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsandConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermsandConditionsUpdateManyArgs>(args: SelectSubset<T, TermsandConditionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsandConditions and returns the data updated in the database.
     * @param {TermsandConditionsUpdateManyAndReturnArgs} args - Arguments to update many TermsandConditions.
     * @example
     * // Update many TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermsandConditions and only return the `id`
     * const termsandConditionsWithIdOnly = await prisma.termsandConditions.updateManyAndReturn({
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
    updateManyAndReturn<T extends TermsandConditionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TermsandConditionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermsandConditions.
     * @param {TermsandConditionsUpsertArgs} args - Arguments to update or create a TermsandConditions.
     * @example
     * // Update or create a TermsandConditions
     * const termsandConditions = await prisma.termsandConditions.upsert({
     *   create: {
     *     // ... data to create a TermsandConditions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsandConditions we want to update
     *   }
     * })
     */
    upsert<T extends TermsandConditionsUpsertArgs>(args: SelectSubset<T, TermsandConditionsUpsertArgs<ExtArgs>>): Prisma__TermsandConditionsClient<$Result.GetResult<Prisma.$TermsandConditionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermsandConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsCountArgs} args - Arguments to filter TermsandConditions to count.
     * @example
     * // Count the number of TermsandConditions
     * const count = await prisma.termsandConditions.count({
     *   where: {
     *     // ... the filter for the TermsandConditions we want to count
     *   }
     * })
    **/
    count<T extends TermsandConditionsCountArgs>(
      args?: Subset<T, TermsandConditionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsandConditionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsandConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermsandConditionsAggregateArgs>(args: Subset<T, TermsandConditionsAggregateArgs>): Prisma.PrismaPromise<GetTermsandConditionsAggregateType<T>>

    /**
     * Group by TermsandConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsandConditionsGroupByArgs} args - Group by arguments.
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
      T extends TermsandConditionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsandConditionsGroupByArgs['orderBy'] }
        : { orderBy?: TermsandConditionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, TermsandConditionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsandConditionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermsandConditions model
   */
  readonly fields: TermsandConditionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermsandConditions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermsandConditionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TermsandConditions model
   */ 
  interface TermsandConditionsFieldRefs {
    readonly id: FieldRef<"TermsandConditions", 'Int'>
    readonly content: FieldRef<"TermsandConditions", 'String'>
    readonly updated_at: FieldRef<"TermsandConditions", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * TermsandConditions findUnique
   */
  export type TermsandConditionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * Filter, which TermsandConditions to fetch.
     */
    where: TermsandConditionsWhereUniqueInput
  }

  /**
   * TermsandConditions findUniqueOrThrow
   */
  export type TermsandConditionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * Filter, which TermsandConditions to fetch.
     */
    where: TermsandConditionsWhereUniqueInput
  }

  /**
   * TermsandConditions findFirst
   */
  export type TermsandConditionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * Filter, which TermsandConditions to fetch.
     */
    where?: TermsandConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsandConditions to fetch.
     */
    orderBy?: TermsandConditionsOrderByWithRelationInput | TermsandConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsandConditions.
     */
    cursor?: TermsandConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsandConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsandConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsandConditions.
     */
    distinct?: TermsandConditionsScalarFieldEnum | TermsandConditionsScalarFieldEnum[]
  }

  /**
   * TermsandConditions findFirstOrThrow
   */
  export type TermsandConditionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * Filter, which TermsandConditions to fetch.
     */
    where?: TermsandConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsandConditions to fetch.
     */
    orderBy?: TermsandConditionsOrderByWithRelationInput | TermsandConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsandConditions.
     */
    cursor?: TermsandConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsandConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsandConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsandConditions.
     */
    distinct?: TermsandConditionsScalarFieldEnum | TermsandConditionsScalarFieldEnum[]
  }

  /**
   * TermsandConditions findMany
   */
  export type TermsandConditionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * Filter, which TermsandConditions to fetch.
     */
    where?: TermsandConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsandConditions to fetch.
     */
    orderBy?: TermsandConditionsOrderByWithRelationInput | TermsandConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermsandConditions.
     */
    cursor?: TermsandConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsandConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsandConditions.
     */
    skip?: number
    distinct?: TermsandConditionsScalarFieldEnum | TermsandConditionsScalarFieldEnum[]
  }

  /**
   * TermsandConditions create
   */
  export type TermsandConditionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * The data needed to create a TermsandConditions.
     */
    data: XOR<TermsandConditionsCreateInput, TermsandConditionsUncheckedCreateInput>
  }

  /**
   * TermsandConditions createMany
   */
  export type TermsandConditionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermsandConditions.
     */
    data: TermsandConditionsCreateManyInput | TermsandConditionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermsandConditions createManyAndReturn
   */
  export type TermsandConditionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * The data used to create many TermsandConditions.
     */
    data: TermsandConditionsCreateManyInput | TermsandConditionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermsandConditions update
   */
  export type TermsandConditionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * The data needed to update a TermsandConditions.
     */
    data: XOR<TermsandConditionsUpdateInput, TermsandConditionsUncheckedUpdateInput>
    /**
     * Choose, which TermsandConditions to update.
     */
    where: TermsandConditionsWhereUniqueInput
  }

  /**
   * TermsandConditions updateMany
   */
  export type TermsandConditionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermsandConditions.
     */
    data: XOR<TermsandConditionsUpdateManyMutationInput, TermsandConditionsUncheckedUpdateManyInput>
    /**
     * Filter which TermsandConditions to update
     */
    where?: TermsandConditionsWhereInput
    /**
     * Limit how many TermsandConditions to update.
     */
    limit?: number
  }

  /**
   * TermsandConditions updateManyAndReturn
   */
  export type TermsandConditionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * The data used to update TermsandConditions.
     */
    data: XOR<TermsandConditionsUpdateManyMutationInput, TermsandConditionsUncheckedUpdateManyInput>
    /**
     * Filter which TermsandConditions to update
     */
    where?: TermsandConditionsWhereInput
    /**
     * Limit how many TermsandConditions to update.
     */
    limit?: number
  }

  /**
   * TermsandConditions upsert
   */
  export type TermsandConditionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * The filter to search for the TermsandConditions to update in case it exists.
     */
    where: TermsandConditionsWhereUniqueInput
    /**
     * In case the TermsandConditions found by the `where` argument doesn't exist, create a new TermsandConditions with this data.
     */
    create: XOR<TermsandConditionsCreateInput, TermsandConditionsUncheckedCreateInput>
    /**
     * In case the TermsandConditions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsandConditionsUpdateInput, TermsandConditionsUncheckedUpdateInput>
  }

  /**
   * TermsandConditions delete
   */
  export type TermsandConditionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
    /**
     * Filter which TermsandConditions to delete.
     */
    where: TermsandConditionsWhereUniqueInput
  }

  /**
   * TermsandConditions deleteMany
   */
  export type TermsandConditionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsandConditions to delete
     */
    where?: TermsandConditionsWhereInput
    /**
     * Limit how many TermsandConditions to delete.
     */
    limit?: number
  }

  /**
   * TermsandConditions without action
   */
  export type TermsandConditionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsandConditions
     */
    select?: TermsandConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsandConditions
     */
    omit?: TermsandConditionsOmit<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    title: number
    content: number
    _all: number
  }


  export type FAQMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    title: string
    content: string
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
  }

  export type FAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content", ExtArgs["result"]["fAQ"]>

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS and returns the data updated in the database.
     * @param {FAQUpdateManyAndReturnArgs} args - Arguments to update many FAQS.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.updateManyAndReturn({
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
    updateManyAndReturn<T extends FAQUpdateManyAndReturnArgs>(args: SelectSubset<T, FAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
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
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FAQ model
   */ 
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly title: FieldRef<"FAQ", 'String'>
    readonly content: FieldRef<"FAQ", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ updateManyAndReturn
   */
  export type FAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to delete.
     */
    limit?: number
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone_number: 'phone_number',
    picture: 'picture'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DonationLinkScalarFieldEnum: {
    id: 'id',
    admin_id: 'admin_id',
    currency_code: 'currency_code',
    link: 'link'
  };

  export type DonationLinkScalarFieldEnum = (typeof DonationLinkScalarFieldEnum)[keyof typeof DonationLinkScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    sm_username: 'sm_username',
    picture: 'picture'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    picture: 'picture',
    last_active: 'last_active'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    content: 'content',
    updated_at: 'updated_at'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    admin_id: 'admin_id',
    owner_id: 'owner_id',
    license_id: 'license_id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    changelog: 'changelog',
    price_type: 'price_type',
    download_link: 'download_link',
    released_at: 'released_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductDiscountScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    discount: 'discount',
    expired_at: 'expired_at'
  };

  export type ProductDiscountScalarFieldEnum = (typeof ProductDiscountScalarFieldEnum)[keyof typeof ProductDiscountScalarFieldEnum]


  export const ProductCouponScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    code: 'code',
    discount: 'discount',
    expired_at: 'expired_at'
  };

  export type ProductCouponScalarFieldEnum = (typeof ProductCouponScalarFieldEnum)[keyof typeof ProductCouponScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    url: 'url',
    is_thumbnail: 'is_thumbnail',
    width: 'width',
    height: 'height'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    name: 'name',
    download_link: 'download_link'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const ProductPriceScalarFieldEnum: {
    id: 'id',
    variant_id: 'variant_id',
    currency_code: 'currency_code',
    price: 'price'
  };

  export type ProductPriceScalarFieldEnum = (typeof ProductPriceScalarFieldEnum)[keyof typeof ProductPriceScalarFieldEnum]


  export const AboutUsScalarFieldEnum: {
    id: 'id',
    content: 'content'
  };

  export type AboutUsScalarFieldEnum = (typeof AboutUsScalarFieldEnum)[keyof typeof AboutUsScalarFieldEnum]


  export const PrivacyPolicyScalarFieldEnum: {
    id: 'id',
    content: 'content',
    updated_at: 'updated_at'
  };

  export type PrivacyPolicyScalarFieldEnum = (typeof PrivacyPolicyScalarFieldEnum)[keyof typeof PrivacyPolicyScalarFieldEnum]


  export const TermsandConditionsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    updated_at: 'updated_at'
  };

  export type TermsandConditionsScalarFieldEnum = (typeof TermsandConditionsScalarFieldEnum)[keyof typeof TermsandConditionsScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CurrencyCode'
   */
  export type EnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode'>
    


  /**
   * Reference to a field of type 'CurrencyCode[]'
   */
  export type ListEnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'PriceType'
   */
  export type EnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType'>
    


  /**
   * Reference to a field of type 'PriceType[]'
   */
  export type ListEnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    first_name?: StringFilter<"Admin"> | string
    last_name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    phone_number?: StringNullableFilter<"Admin"> | string | null
    picture?: StringNullableFilter<"Admin"> | string | null
    donation_links?: DonationLinkListRelationFilter
    products?: ProductListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    donation_links?: DonationLinkOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    first_name?: StringFilter<"Admin"> | string
    last_name?: StringFilter<"Admin"> | string
    phone_number?: StringNullableFilter<"Admin"> | string | null
    picture?: StringNullableFilter<"Admin"> | string | null
    donation_links?: DonationLinkListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    first_name?: StringWithAggregatesFilter<"Admin"> | string
    last_name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    phone_number?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Admin"> | string | null
  }

  export type DonationLinkWhereInput = {
    AND?: DonationLinkWhereInput | DonationLinkWhereInput[]
    OR?: DonationLinkWhereInput[]
    NOT?: DonationLinkWhereInput | DonationLinkWhereInput[]
    id?: IntFilter<"DonationLink"> | number
    admin_id?: StringFilter<"DonationLink"> | string
    currency_code?: EnumCurrencyCodeFilter<"DonationLink"> | $Enums.CurrencyCode
    link?: StringFilter<"DonationLink"> | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type DonationLinkOrderByWithRelationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    currency_code?: SortOrder
    link?: SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type DonationLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationLinkWhereInput | DonationLinkWhereInput[]
    OR?: DonationLinkWhereInput[]
    NOT?: DonationLinkWhereInput | DonationLinkWhereInput[]
    admin_id?: StringFilter<"DonationLink"> | string
    currency_code?: EnumCurrencyCodeFilter<"DonationLink"> | $Enums.CurrencyCode
    link?: StringFilter<"DonationLink"> | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type DonationLinkOrderByWithAggregationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    currency_code?: SortOrder
    link?: SortOrder
    _count?: DonationLinkCountOrderByAggregateInput
    _avg?: DonationLinkAvgOrderByAggregateInput
    _max?: DonationLinkMaxOrderByAggregateInput
    _min?: DonationLinkMinOrderByAggregateInput
    _sum?: DonationLinkSumOrderByAggregateInput
  }

  export type DonationLinkScalarWhereWithAggregatesInput = {
    AND?: DonationLinkScalarWhereWithAggregatesInput | DonationLinkScalarWhereWithAggregatesInput[]
    OR?: DonationLinkScalarWhereWithAggregatesInput[]
    NOT?: DonationLinkScalarWhereWithAggregatesInput | DonationLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DonationLink"> | number
    admin_id?: StringWithAggregatesFilter<"DonationLink"> | string
    currency_code?: EnumCurrencyCodeWithAggregatesFilter<"DonationLink"> | $Enums.CurrencyCode
    link?: StringWithAggregatesFilter<"DonationLink"> | string
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: IntFilter<"Owner"> | number
    first_name?: StringFilter<"Owner"> | string
    last_name?: StringFilter<"Owner"> | string
    sm_username?: StringFilter<"Owner"> | string
    picture?: StringFilter<"Owner"> | string
    products?: ProductListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sm_username?: SortOrder
    picture?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    first_name?: StringFilter<"Owner"> | string
    last_name?: StringFilter<"Owner"> | string
    sm_username?: StringFilter<"Owner"> | string
    picture?: StringFilter<"Owner"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sm_username?: SortOrder
    picture?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Owner"> | number
    first_name?: StringWithAggregatesFilter<"Owner"> | string
    last_name?: StringWithAggregatesFilter<"Owner"> | string
    sm_username?: StringWithAggregatesFilter<"Owner"> | string
    picture?: StringWithAggregatesFilter<"Owner"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    password?: StringNullableFilter<"Customer"> | string | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    picture?: StringNullableFilter<"Customer"> | string | null
    last_active?: BigIntFilter<"Customer"> | bigint | number
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    last_active?: SortOrder
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    password?: StringNullableFilter<"Customer"> | string | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    picture?: StringNullableFilter<"Customer"> | string | null
    last_active?: BigIntFilter<"Customer"> | bigint | number
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    last_active?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    first_name?: StringWithAggregatesFilter<"Customer"> | string
    last_name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    last_active?: BigIntWithAggregatesFilter<"Customer"> | bigint | number
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: IntFilter<"License"> | number
    content?: StringFilter<"License"> | string
    updated_at?: BigIntFilter<"License"> | bigint | number
    products?: ProductListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    content?: StringFilter<"License"> | string
    updated_at?: BigIntFilter<"License"> | bigint | number
    products?: ProductListRelationFilter
  }, "id">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _avg?: LicenseAvgOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
    _sum?: LicenseSumOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"License"> | number
    content?: StringWithAggregatesFilter<"License"> | string
    updated_at?: BigIntWithAggregatesFilter<"License"> | bigint | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    category_id?: IntFilter<"Product"> | number
    admin_id?: StringFilter<"Product"> | string
    owner_id?: IntFilter<"Product"> | number
    license_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    changelog?: StringNullableFilter<"Product"> | string | null
    price_type?: EnumPriceTypeFilter<"Product"> | $Enums.PriceType
    download_link?: StringNullableFilter<"Product"> | string | null
    released_at?: BigIntFilter<"Product"> | bigint | number
    updated_at?: BigIntFilter<"Product"> | bigint | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    product_discounts?: XOR<ProductDiscountNullableScalarRelationFilter, ProductDiscountWhereInput> | null
    product_coupons?: XOR<ProductCouponNullableScalarRelationFilter, ProductCouponWhereInput> | null
    product_images?: ProductImageListRelationFilter
    product_variants?: ProductVariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    admin_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    changelog?: SortOrderInput | SortOrder
    price_type?: SortOrder
    download_link?: SortOrderInput | SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
    admin?: AdminOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    owner?: OwnerOrderByWithRelationInput
    license?: LicenseOrderByWithRelationInput
    product_discounts?: ProductDiscountOrderByWithRelationInput
    product_coupons?: ProductCouponOrderByWithRelationInput
    product_images?: ProductImageOrderByRelationAggregateInput
    product_variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    category_id?: IntFilter<"Product"> | number
    admin_id?: StringFilter<"Product"> | string
    owner_id?: IntFilter<"Product"> | number
    license_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    changelog?: StringNullableFilter<"Product"> | string | null
    price_type?: EnumPriceTypeFilter<"Product"> | $Enums.PriceType
    download_link?: StringNullableFilter<"Product"> | string | null
    released_at?: BigIntFilter<"Product"> | bigint | number
    updated_at?: BigIntFilter<"Product"> | bigint | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    product_discounts?: XOR<ProductDiscountNullableScalarRelationFilter, ProductDiscountWhereInput> | null
    product_coupons?: XOR<ProductCouponNullableScalarRelationFilter, ProductCouponWhereInput> | null
    product_images?: ProductImageListRelationFilter
    product_variants?: ProductVariantListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    admin_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    changelog?: SortOrderInput | SortOrder
    price_type?: SortOrder
    download_link?: SortOrderInput | SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    category_id?: IntWithAggregatesFilter<"Product"> | number
    admin_id?: StringWithAggregatesFilter<"Product"> | string
    owner_id?: IntWithAggregatesFilter<"Product"> | number
    license_id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    changelog?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price_type?: EnumPriceTypeWithAggregatesFilter<"Product"> | $Enums.PriceType
    download_link?: StringNullableWithAggregatesFilter<"Product"> | string | null
    released_at?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    updated_at?: BigIntWithAggregatesFilter<"Product"> | bigint | number
  }

  export type ProductDiscountWhereInput = {
    AND?: ProductDiscountWhereInput | ProductDiscountWhereInput[]
    OR?: ProductDiscountWhereInput[]
    NOT?: ProductDiscountWhereInput | ProductDiscountWhereInput[]
    id?: UuidFilter<"ProductDiscount"> | string
    product_id?: UuidFilter<"ProductDiscount"> | string
    discount?: StringFilter<"ProductDiscount"> | string
    expired_at?: BigIntFilter<"ProductDiscount"> | bigint | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductDiscountOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductDiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    product_id?: string
    AND?: ProductDiscountWhereInput | ProductDiscountWhereInput[]
    OR?: ProductDiscountWhereInput[]
    NOT?: ProductDiscountWhereInput | ProductDiscountWhereInput[]
    discount?: StringFilter<"ProductDiscount"> | string
    expired_at?: BigIntFilter<"ProductDiscount"> | bigint | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "product_id">

  export type ProductDiscountOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
    _count?: ProductDiscountCountOrderByAggregateInput
    _avg?: ProductDiscountAvgOrderByAggregateInput
    _max?: ProductDiscountMaxOrderByAggregateInput
    _min?: ProductDiscountMinOrderByAggregateInput
    _sum?: ProductDiscountSumOrderByAggregateInput
  }

  export type ProductDiscountScalarWhereWithAggregatesInput = {
    AND?: ProductDiscountScalarWhereWithAggregatesInput | ProductDiscountScalarWhereWithAggregatesInput[]
    OR?: ProductDiscountScalarWhereWithAggregatesInput[]
    NOT?: ProductDiscountScalarWhereWithAggregatesInput | ProductDiscountScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductDiscount"> | string
    product_id?: UuidWithAggregatesFilter<"ProductDiscount"> | string
    discount?: StringWithAggregatesFilter<"ProductDiscount"> | string
    expired_at?: BigIntWithAggregatesFilter<"ProductDiscount"> | bigint | number
  }

  export type ProductCouponWhereInput = {
    AND?: ProductCouponWhereInput | ProductCouponWhereInput[]
    OR?: ProductCouponWhereInput[]
    NOT?: ProductCouponWhereInput | ProductCouponWhereInput[]
    id?: UuidFilter<"ProductCoupon"> | string
    product_id?: UuidFilter<"ProductCoupon"> | string
    code?: StringFilter<"ProductCoupon"> | string
    discount?: StringFilter<"ProductCoupon"> | string
    expired_at?: BigIntFilter<"ProductCoupon"> | bigint | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductCouponOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductCouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    product_id?: string
    AND?: ProductCouponWhereInput | ProductCouponWhereInput[]
    OR?: ProductCouponWhereInput[]
    NOT?: ProductCouponWhereInput | ProductCouponWhereInput[]
    code?: StringFilter<"ProductCoupon"> | string
    discount?: StringFilter<"ProductCoupon"> | string
    expired_at?: BigIntFilter<"ProductCoupon"> | bigint | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "product_id">

  export type ProductCouponOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
    _count?: ProductCouponCountOrderByAggregateInput
    _avg?: ProductCouponAvgOrderByAggregateInput
    _max?: ProductCouponMaxOrderByAggregateInput
    _min?: ProductCouponMinOrderByAggregateInput
    _sum?: ProductCouponSumOrderByAggregateInput
  }

  export type ProductCouponScalarWhereWithAggregatesInput = {
    AND?: ProductCouponScalarWhereWithAggregatesInput | ProductCouponScalarWhereWithAggregatesInput[]
    OR?: ProductCouponScalarWhereWithAggregatesInput[]
    NOT?: ProductCouponScalarWhereWithAggregatesInput | ProductCouponScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductCoupon"> | string
    product_id?: UuidWithAggregatesFilter<"ProductCoupon"> | string
    code?: StringWithAggregatesFilter<"ProductCoupon"> | string
    discount?: StringWithAggregatesFilter<"ProductCoupon"> | string
    expired_at?: BigIntWithAggregatesFilter<"ProductCoupon"> | bigint | number
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: UuidFilter<"ProductImage"> | string
    product_id?: UuidFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    is_thumbnail?: BoolFilter<"ProductImage"> | boolean
    width?: IntFilter<"ProductImage"> | number
    height?: IntFilter<"ProductImage"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    product_id?: UuidFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    is_thumbnail?: BoolFilter<"ProductImage"> | boolean
    width?: IntFilter<"ProductImage"> | number
    height?: IntFilter<"ProductImage"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductImage"> | string
    product_id?: UuidWithAggregatesFilter<"ProductImage"> | string
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    is_thumbnail?: BoolWithAggregatesFilter<"ProductImage"> | boolean
    width?: IntWithAggregatesFilter<"ProductImage"> | number
    height?: IntWithAggregatesFilter<"ProductImage"> | number
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: UuidFilter<"ProductVariant"> | string
    product_id?: UuidFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    download_link?: StringNullableFilter<"ProductVariant"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    product_prices?: ProductPriceListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    download_link?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    product_prices?: ProductPriceOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    product_id?: UuidFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    download_link?: StringNullableFilter<"ProductVariant"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    product_prices?: ProductPriceListRelationFilter
  }, "id">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    download_link?: SortOrderInput | SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductVariant"> | string
    product_id?: UuidWithAggregatesFilter<"ProductVariant"> | string
    name?: StringWithAggregatesFilter<"ProductVariant"> | string
    download_link?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
  }

  export type ProductPriceWhereInput = {
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    id?: UuidFilter<"ProductPrice"> | string
    variant_id?: UuidFilter<"ProductPrice"> | string
    currency_code?: EnumCurrencyCodeFilter<"ProductPrice"> | $Enums.CurrencyCode
    price?: IntFilter<"ProductPrice"> | number
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }

  export type ProductPriceOrderByWithRelationInput = {
    id?: SortOrder
    variant_id?: SortOrder
    currency_code?: SortOrder
    price?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type ProductPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    variant_id?: UuidFilter<"ProductPrice"> | string
    currency_code?: EnumCurrencyCodeFilter<"ProductPrice"> | $Enums.CurrencyCode
    price?: IntFilter<"ProductPrice"> | number
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }, "id">

  export type ProductPriceOrderByWithAggregationInput = {
    id?: SortOrder
    variant_id?: SortOrder
    currency_code?: SortOrder
    price?: SortOrder
    _count?: ProductPriceCountOrderByAggregateInput
    _avg?: ProductPriceAvgOrderByAggregateInput
    _max?: ProductPriceMaxOrderByAggregateInput
    _min?: ProductPriceMinOrderByAggregateInput
    _sum?: ProductPriceSumOrderByAggregateInput
  }

  export type ProductPriceScalarWhereWithAggregatesInput = {
    AND?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    OR?: ProductPriceScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductPrice"> | string
    variant_id?: UuidWithAggregatesFilter<"ProductPrice"> | string
    currency_code?: EnumCurrencyCodeWithAggregatesFilter<"ProductPrice"> | $Enums.CurrencyCode
    price?: IntWithAggregatesFilter<"ProductPrice"> | number
  }

  export type AboutUsWhereInput = {
    AND?: AboutUsWhereInput | AboutUsWhereInput[]
    OR?: AboutUsWhereInput[]
    NOT?: AboutUsWhereInput | AboutUsWhereInput[]
    id?: IntFilter<"AboutUs"> | number
    content?: StringFilter<"AboutUs"> | string
  }

  export type AboutUsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type AboutUsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutUsWhereInput | AboutUsWhereInput[]
    OR?: AboutUsWhereInput[]
    NOT?: AboutUsWhereInput | AboutUsWhereInput[]
    content?: StringFilter<"AboutUs"> | string
  }, "id">

  export type AboutUsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    _count?: AboutUsCountOrderByAggregateInput
    _avg?: AboutUsAvgOrderByAggregateInput
    _max?: AboutUsMaxOrderByAggregateInput
    _min?: AboutUsMinOrderByAggregateInput
    _sum?: AboutUsSumOrderByAggregateInput
  }

  export type AboutUsScalarWhereWithAggregatesInput = {
    AND?: AboutUsScalarWhereWithAggregatesInput | AboutUsScalarWhereWithAggregatesInput[]
    OR?: AboutUsScalarWhereWithAggregatesInput[]
    NOT?: AboutUsScalarWhereWithAggregatesInput | AboutUsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutUs"> | number
    content?: StringWithAggregatesFilter<"AboutUs"> | string
  }

  export type PrivacyPolicyWhereInput = {
    AND?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    OR?: PrivacyPolicyWhereInput[]
    NOT?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    id?: IntFilter<"PrivacyPolicy"> | number
    content?: StringFilter<"PrivacyPolicy"> | string
    updated_at?: BigIntFilter<"PrivacyPolicy"> | bigint | number
  }

  export type PrivacyPolicyOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type PrivacyPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    OR?: PrivacyPolicyWhereInput[]
    NOT?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    content?: StringFilter<"PrivacyPolicy"> | string
    updated_at?: BigIntFilter<"PrivacyPolicy"> | bigint | number
  }, "id">

  export type PrivacyPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
    _count?: PrivacyPolicyCountOrderByAggregateInput
    _avg?: PrivacyPolicyAvgOrderByAggregateInput
    _max?: PrivacyPolicyMaxOrderByAggregateInput
    _min?: PrivacyPolicyMinOrderByAggregateInput
    _sum?: PrivacyPolicySumOrderByAggregateInput
  }

  export type PrivacyPolicyScalarWhereWithAggregatesInput = {
    AND?: PrivacyPolicyScalarWhereWithAggregatesInput | PrivacyPolicyScalarWhereWithAggregatesInput[]
    OR?: PrivacyPolicyScalarWhereWithAggregatesInput[]
    NOT?: PrivacyPolicyScalarWhereWithAggregatesInput | PrivacyPolicyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrivacyPolicy"> | number
    content?: StringWithAggregatesFilter<"PrivacyPolicy"> | string
    updated_at?: BigIntWithAggregatesFilter<"PrivacyPolicy"> | bigint | number
  }

  export type TermsandConditionsWhereInput = {
    AND?: TermsandConditionsWhereInput | TermsandConditionsWhereInput[]
    OR?: TermsandConditionsWhereInput[]
    NOT?: TermsandConditionsWhereInput | TermsandConditionsWhereInput[]
    id?: IntFilter<"TermsandConditions"> | number
    content?: StringFilter<"TermsandConditions"> | string
    updated_at?: BigIntFilter<"TermsandConditions"> | bigint | number
  }

  export type TermsandConditionsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type TermsandConditionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TermsandConditionsWhereInput | TermsandConditionsWhereInput[]
    OR?: TermsandConditionsWhereInput[]
    NOT?: TermsandConditionsWhereInput | TermsandConditionsWhereInput[]
    content?: StringFilter<"TermsandConditions"> | string
    updated_at?: BigIntFilter<"TermsandConditions"> | bigint | number
  }, "id">

  export type TermsandConditionsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
    _count?: TermsandConditionsCountOrderByAggregateInput
    _avg?: TermsandConditionsAvgOrderByAggregateInput
    _max?: TermsandConditionsMaxOrderByAggregateInput
    _min?: TermsandConditionsMinOrderByAggregateInput
    _sum?: TermsandConditionsSumOrderByAggregateInput
  }

  export type TermsandConditionsScalarWhereWithAggregatesInput = {
    AND?: TermsandConditionsScalarWhereWithAggregatesInput | TermsandConditionsScalarWhereWithAggregatesInput[]
    OR?: TermsandConditionsScalarWhereWithAggregatesInput[]
    NOT?: TermsandConditionsScalarWhereWithAggregatesInput | TermsandConditionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TermsandConditions"> | number
    content?: StringWithAggregatesFilter<"TermsandConditions"> | string
    updated_at?: BigIntWithAggregatesFilter<"TermsandConditions"> | bigint | number
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: UuidFilter<"FAQ"> | string
    title?: StringFilter<"FAQ"> | string
    content?: StringFilter<"FAQ"> | string
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    title?: StringFilter<"FAQ"> | string
    content?: StringFilter<"FAQ"> | string
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FAQ"> | string
    title?: StringWithAggregatesFilter<"FAQ"> | string
    content?: StringWithAggregatesFilter<"FAQ"> | string
  }

  export type AdminCreateInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
    donation_links?: DonationLinkCreateNestedManyWithoutAdminInput
    products?: ProductCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
    donation_links?: DonationLinkUncheckedCreateNestedManyWithoutAdminInput
    products?: ProductUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    donation_links?: DonationLinkUpdateManyWithoutAdminNestedInput
    products?: ProductUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    donation_links?: DonationLinkUncheckedUpdateManyWithoutAdminNestedInput
    products?: ProductUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationLinkCreateInput = {
    currency_code: $Enums.CurrencyCode
    link: string
    admin: AdminCreateNestedOneWithoutDonation_linksInput
  }

  export type DonationLinkUncheckedCreateInput = {
    id?: number
    admin_id: string
    currency_code: $Enums.CurrencyCode
    link: string
  }

  export type DonationLinkUpdateInput = {
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDonation_linksNestedInput
  }

  export type DonationLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
  }

  export type DonationLinkCreateManyInput = {
    id?: number
    admin_id: string
    currency_code: $Enums.CurrencyCode
    link: string
  }

  export type DonationLinkUpdateManyMutationInput = {
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
  }

  export type DonationLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerCreateInput = {
    first_name: string
    last_name: string
    sm_username: string
    picture: string
    products?: ProductCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    sm_username: string
    picture: string
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sm_username?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sm_username?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    sm_username: string
    picture: string
  }

  export type OwnerUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sm_username?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sm_username?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    password?: string | null
    phone_number?: string | null
    picture?: string | null
    last_active: bigint | number
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    password?: string | null
    phone_number?: string | null
    picture?: string | null
    last_active: bigint | number
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CustomerCreateManyInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    password?: string | null
    phone_number?: string | null
    picture?: string | null
    last_active: bigint | number
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LicenseCreateInput = {
    content: string
    updated_at: bigint | number
    products?: ProductCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: number
    content: string
    updated_at: bigint | number
    products?: ProductUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    products?: ProductUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    products?: ProductUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyInput = {
    id?: number
    content: string
    updated_at: bigint | number
  }

  export type LicenseUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductDiscountCreateInput = {
    id?: string
    discount: string
    expired_at: bigint | number
    product: ProductCreateNestedOneWithoutProduct_discountsInput
  }

  export type ProductDiscountUncheckedCreateInput = {
    id?: string
    product_id: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductDiscountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product?: ProductUpdateOneRequiredWithoutProduct_discountsNestedInput
  }

  export type ProductDiscountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductDiscountCreateManyInput = {
    id?: string
    product_id: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductDiscountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductDiscountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCouponCreateInput = {
    id?: string
    code: string
    discount: string
    expired_at: bigint | number
    product: ProductCreateNestedOneWithoutProduct_couponsInput
  }

  export type ProductCouponUncheckedCreateInput = {
    id?: string
    product_id: string
    code: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductCouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product?: ProductUpdateOneRequiredWithoutProduct_couponsNestedInput
  }

  export type ProductCouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCouponCreateManyInput = {
    id?: string
    product_id: string
    code: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductCouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductImageCreateInput = {
    id?: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
    product: ProductCreateNestedOneWithoutProduct_imagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    product_id: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
  }

  export type ProductImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutProduct_imagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageCreateManyInput = {
    id?: string
    product_id: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
  }

  export type ProductImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type ProductVariantCreateInput = {
    id?: string
    name: string
    download_link?: string | null
    product: ProductCreateNestedOneWithoutProduct_variantsInput
    product_prices?: ProductPriceCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    product_id: string
    name: string
    download_link?: string | null
    product_prices?: ProductPriceUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutProduct_variantsNestedInput
    product_prices?: ProductPriceUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: ProductPriceUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    product_id: string
    name: string
    download_link?: string | null
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceCreateInput = {
    id?: string
    currency_code: $Enums.CurrencyCode
    price: number
    variant: ProductVariantCreateNestedOneWithoutProduct_pricesInput
  }

  export type ProductPriceUncheckedCreateInput = {
    id?: string
    variant_id: string
    currency_code: $Enums.CurrencyCode
    price: number
  }

  export type ProductPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
    variant?: ProductVariantUpdateOneRequiredWithoutProduct_pricesNestedInput
  }

  export type ProductPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variant_id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPriceCreateManyInput = {
    id?: string
    variant_id: string
    currency_code: $Enums.CurrencyCode
    price: number
  }

  export type ProductPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variant_id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
  }

  export type AboutUsCreateInput = {
    content: string
  }

  export type AboutUsUncheckedCreateInput = {
    id?: number
    content: string
  }

  export type AboutUsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUsCreateManyInput = {
    id?: number
    content: string
  }

  export type AboutUsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PrivacyPolicyCreateInput = {
    content: string
    updated_at: bigint | number
  }

  export type PrivacyPolicyUncheckedCreateInput = {
    id?: number
    content: string
    updated_at: bigint | number
  }

  export type PrivacyPolicyUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PrivacyPolicyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PrivacyPolicyCreateManyInput = {
    id?: number
    content: string
    updated_at: bigint | number
  }

  export type PrivacyPolicyUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PrivacyPolicyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TermsandConditionsCreateInput = {
    content: string
    updated_at: bigint | number
  }

  export type TermsandConditionsUncheckedCreateInput = {
    id?: number
    content: string
    updated_at: bigint | number
  }

  export type TermsandConditionsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TermsandConditionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TermsandConditionsCreateManyInput = {
    id?: number
    content: string
    updated_at: bigint | number
  }

  export type TermsandConditionsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TermsandConditionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FAQCreateInput = {
    id?: string
    title: string
    content: string
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    title: string
    content: string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FAQCreateManyInput = {
    id?: string
    title: string
    content: string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DonationLinkListRelationFilter = {
    every?: DonationLinkWhereInput
    some?: DonationLinkWhereInput
    none?: DonationLinkWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonationLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    picture?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    picture?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    picture?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type DonationLinkCountOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    currency_code?: SortOrder
    link?: SortOrder
  }

  export type DonationLinkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DonationLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    currency_code?: SortOrder
    link?: SortOrder
  }

  export type DonationLinkMinOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    currency_code?: SortOrder
    link?: SortOrder
  }

  export type DonationLinkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sm_username?: SortOrder
    picture?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sm_username?: SortOrder
    picture?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sm_username?: SortOrder
    picture?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    picture?: SortOrder
    last_active?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    last_active?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    picture?: SortOrder
    last_active?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    picture?: SortOrder
    last_active?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    last_active?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type LicenseAvgOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type LicenseSumOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type LicenseScalarRelationFilter = {
    is?: LicenseWhereInput
    isNot?: LicenseWhereInput
  }

  export type ProductDiscountNullableScalarRelationFilter = {
    is?: ProductDiscountWhereInput | null
    isNot?: ProductDiscountWhereInput | null
  }

  export type ProductCouponNullableScalarRelationFilter = {
    is?: ProductCouponWhereInput | null
    isNot?: ProductCouponWhereInput | null
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    admin_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    changelog?: SortOrder
    price_type?: SortOrder
    download_link?: SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    category_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    admin_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    changelog?: SortOrder
    price_type?: SortOrder
    download_link?: SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    admin_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    changelog?: SortOrder
    price_type?: SortOrder
    download_link?: SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    category_id?: SortOrder
    owner_id?: SortOrder
    license_id?: SortOrder
    released_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductDiscountCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
  }

  export type ProductDiscountAvgOrderByAggregateInput = {
    expired_at?: SortOrder
  }

  export type ProductDiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
  }

  export type ProductDiscountMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
  }

  export type ProductDiscountSumOrderByAggregateInput = {
    expired_at?: SortOrder
  }

  export type ProductCouponCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
  }

  export type ProductCouponAvgOrderByAggregateInput = {
    expired_at?: SortOrder
  }

  export type ProductCouponMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
  }

  export type ProductCouponMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expired_at?: SortOrder
  }

  export type ProductCouponSumOrderByAggregateInput = {
    expired_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductPriceListRelationFilter = {
    every?: ProductPriceWhereInput
    some?: ProductPriceWhereInput
    none?: ProductPriceWhereInput
  }

  export type ProductPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    download_link?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    download_link?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    download_link?: SortOrder
  }

  export type ProductVariantScalarRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type ProductPriceCountOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    currency_code?: SortOrder
    price?: SortOrder
  }

  export type ProductPriceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    currency_code?: SortOrder
    price?: SortOrder
  }

  export type ProductPriceMinOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    currency_code?: SortOrder
    price?: SortOrder
  }

  export type ProductPriceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AboutUsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type AboutUsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutUsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type AboutUsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type AboutUsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrivacyPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type PrivacyPolicyAvgOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type PrivacyPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type PrivacyPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type PrivacyPolicySumOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type TermsandConditionsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type TermsandConditionsAvgOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type TermsandConditionsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type TermsandConditionsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type TermsandConditionsSumOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type DonationLinkCreateNestedManyWithoutAdminInput = {
    create?: XOR<DonationLinkCreateWithoutAdminInput, DonationLinkUncheckedCreateWithoutAdminInput> | DonationLinkCreateWithoutAdminInput[] | DonationLinkUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DonationLinkCreateOrConnectWithoutAdminInput | DonationLinkCreateOrConnectWithoutAdminInput[]
    createMany?: DonationLinkCreateManyAdminInputEnvelope
    connect?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DonationLinkUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<DonationLinkCreateWithoutAdminInput, DonationLinkUncheckedCreateWithoutAdminInput> | DonationLinkCreateWithoutAdminInput[] | DonationLinkUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DonationLinkCreateOrConnectWithoutAdminInput | DonationLinkCreateOrConnectWithoutAdminInput[]
    createMany?: DonationLinkCreateManyAdminInputEnvelope
    connect?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DonationLinkUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DonationLinkCreateWithoutAdminInput, DonationLinkUncheckedCreateWithoutAdminInput> | DonationLinkCreateWithoutAdminInput[] | DonationLinkUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DonationLinkCreateOrConnectWithoutAdminInput | DonationLinkCreateOrConnectWithoutAdminInput[]
    upsert?: DonationLinkUpsertWithWhereUniqueWithoutAdminInput | DonationLinkUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DonationLinkCreateManyAdminInputEnvelope
    set?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    disconnect?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    delete?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    connect?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    update?: DonationLinkUpdateWithWhereUniqueWithoutAdminInput | DonationLinkUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DonationLinkUpdateManyWithWhereWithoutAdminInput | DonationLinkUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DonationLinkScalarWhereInput | DonationLinkScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutAdminInput | ProductUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutAdminInput | ProductUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutAdminInput | ProductUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DonationLinkUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DonationLinkCreateWithoutAdminInput, DonationLinkUncheckedCreateWithoutAdminInput> | DonationLinkCreateWithoutAdminInput[] | DonationLinkUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DonationLinkCreateOrConnectWithoutAdminInput | DonationLinkCreateOrConnectWithoutAdminInput[]
    upsert?: DonationLinkUpsertWithWhereUniqueWithoutAdminInput | DonationLinkUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DonationLinkCreateManyAdminInputEnvelope
    set?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    disconnect?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    delete?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    connect?: DonationLinkWhereUniqueInput | DonationLinkWhereUniqueInput[]
    update?: DonationLinkUpdateWithWhereUniqueWithoutAdminInput | DonationLinkUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DonationLinkUpdateManyWithWhereWithoutAdminInput | DonationLinkUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DonationLinkScalarWhereInput | DonationLinkScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutAdminInput | ProductUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutAdminInput | ProductUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutAdminInput | ProductUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutDonation_linksInput = {
    create?: XOR<AdminCreateWithoutDonation_linksInput, AdminUncheckedCreateWithoutDonation_linksInput>
    connectOrCreate?: AdminCreateOrConnectWithoutDonation_linksInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumCurrencyCodeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyCode
  }

  export type AdminUpdateOneRequiredWithoutDonation_linksNestedInput = {
    create?: XOR<AdminCreateWithoutDonation_linksInput, AdminUncheckedCreateWithoutDonation_linksInput>
    connectOrCreate?: AdminCreateOrConnectWithoutDonation_linksInput
    upsert?: AdminUpsertWithoutDonation_linksInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutDonation_linksInput, AdminUpdateWithoutDonation_linksInput>, AdminUncheckedUpdateWithoutDonation_linksInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput | ProductUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutOwnerInput | ProductUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput | ProductUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput | ProductUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutOwnerInput | ProductUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput | ProductUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProductCreateNestedManyWithoutLicenseInput = {
    create?: XOR<ProductCreateWithoutLicenseInput, ProductUncheckedCreateWithoutLicenseInput> | ProductCreateWithoutLicenseInput[] | ProductUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutLicenseInput | ProductCreateOrConnectWithoutLicenseInput[]
    createMany?: ProductCreateManyLicenseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<ProductCreateWithoutLicenseInput, ProductUncheckedCreateWithoutLicenseInput> | ProductCreateWithoutLicenseInput[] | ProductUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutLicenseInput | ProductCreateOrConnectWithoutLicenseInput[]
    createMany?: ProductCreateManyLicenseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<ProductCreateWithoutLicenseInput, ProductUncheckedCreateWithoutLicenseInput> | ProductCreateWithoutLicenseInput[] | ProductUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutLicenseInput | ProductCreateOrConnectWithoutLicenseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutLicenseInput | ProductUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: ProductCreateManyLicenseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutLicenseInput | ProductUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutLicenseInput | ProductUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<ProductCreateWithoutLicenseInput, ProductUncheckedCreateWithoutLicenseInput> | ProductCreateWithoutLicenseInput[] | ProductUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutLicenseInput | ProductCreateOrConnectWithoutLicenseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutLicenseInput | ProductUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: ProductCreateManyLicenseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutLicenseInput | ProductUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutLicenseInput | ProductUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutProductsInput = {
    create?: XOR<AdminCreateWithoutProductsInput, AdminUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProductsInput
    connect?: AdminWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OwnerCreateNestedOneWithoutProductsInput = {
    create?: XOR<OwnerCreateWithoutProductsInput, OwnerUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutProductsInput
    connect?: OwnerWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutProductsInput = {
    create?: XOR<LicenseCreateWithoutProductsInput, LicenseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutProductsInput
    connect?: LicenseWhereUniqueInput
  }

  export type ProductDiscountCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductDiscountCreateWithoutProductInput, ProductDiscountUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductDiscountCreateOrConnectWithoutProductInput
    connect?: ProductDiscountWhereUniqueInput
  }

  export type ProductCouponCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductCouponCreateWithoutProductInput, ProductCouponUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCouponCreateOrConnectWithoutProductInput
    connect?: ProductCouponWhereUniqueInput
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductDiscountUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductDiscountCreateWithoutProductInput, ProductDiscountUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductDiscountCreateOrConnectWithoutProductInput
    connect?: ProductDiscountWhereUniqueInput
  }

  export type ProductCouponUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductCouponCreateWithoutProductInput, ProductCouponUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCouponCreateOrConnectWithoutProductInput
    connect?: ProductCouponWhereUniqueInput
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type EnumPriceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriceType
  }

  export type AdminUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<AdminCreateWithoutProductsInput, AdminUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProductsInput
    upsert?: AdminUpsertWithoutProductsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutProductsInput, AdminUpdateWithoutProductsInput>, AdminUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type OwnerUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OwnerCreateWithoutProductsInput, OwnerUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutProductsInput
    upsert?: OwnerUpsertWithoutProductsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutProductsInput, OwnerUpdateWithoutProductsInput>, OwnerUncheckedUpdateWithoutProductsInput>
  }

  export type LicenseUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<LicenseCreateWithoutProductsInput, LicenseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutProductsInput
    upsert?: LicenseUpsertWithoutProductsInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutProductsInput, LicenseUpdateWithoutProductsInput>, LicenseUncheckedUpdateWithoutProductsInput>
  }

  export type ProductDiscountUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductDiscountCreateWithoutProductInput, ProductDiscountUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductDiscountCreateOrConnectWithoutProductInput
    upsert?: ProductDiscountUpsertWithoutProductInput
    disconnect?: ProductDiscountWhereInput | boolean
    delete?: ProductDiscountWhereInput | boolean
    connect?: ProductDiscountWhereUniqueInput
    update?: XOR<XOR<ProductDiscountUpdateToOneWithWhereWithoutProductInput, ProductDiscountUpdateWithoutProductInput>, ProductDiscountUncheckedUpdateWithoutProductInput>
  }

  export type ProductCouponUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductCouponCreateWithoutProductInput, ProductCouponUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCouponCreateOrConnectWithoutProductInput
    upsert?: ProductCouponUpsertWithoutProductInput
    disconnect?: ProductCouponWhereInput | boolean
    delete?: ProductCouponWhereInput | boolean
    connect?: ProductCouponWhereUniqueInput
    update?: XOR<XOR<ProductCouponUpdateToOneWithWhereWithoutProductInput, ProductCouponUpdateWithoutProductInput>, ProductCouponUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductDiscountUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductDiscountCreateWithoutProductInput, ProductDiscountUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductDiscountCreateOrConnectWithoutProductInput
    upsert?: ProductDiscountUpsertWithoutProductInput
    disconnect?: ProductDiscountWhereInput | boolean
    delete?: ProductDiscountWhereInput | boolean
    connect?: ProductDiscountWhereUniqueInput
    update?: XOR<XOR<ProductDiscountUpdateToOneWithWhereWithoutProductInput, ProductDiscountUpdateWithoutProductInput>, ProductDiscountUncheckedUpdateWithoutProductInput>
  }

  export type ProductCouponUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductCouponCreateWithoutProductInput, ProductCouponUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCouponCreateOrConnectWithoutProductInput
    upsert?: ProductCouponUpsertWithoutProductInput
    disconnect?: ProductCouponWhereInput | boolean
    delete?: ProductCouponWhereInput | boolean
    connect?: ProductCouponWhereUniqueInput
    update?: XOR<XOR<ProductCouponUpdateToOneWithWhereWithoutProductInput, ProductCouponUpdateWithoutProductInput>, ProductCouponUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProduct_discountsInput = {
    create?: XOR<ProductCreateWithoutProduct_discountsInput, ProductUncheckedCreateWithoutProduct_discountsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_discountsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProduct_discountsNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_discountsInput, ProductUncheckedCreateWithoutProduct_discountsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_discountsInput
    upsert?: ProductUpsertWithoutProduct_discountsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_discountsInput, ProductUpdateWithoutProduct_discountsInput>, ProductUncheckedUpdateWithoutProduct_discountsInput>
  }

  export type ProductCreateNestedOneWithoutProduct_couponsInput = {
    create?: XOR<ProductCreateWithoutProduct_couponsInput, ProductUncheckedCreateWithoutProduct_couponsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_couponsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProduct_couponsNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_couponsInput, ProductUncheckedCreateWithoutProduct_couponsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_couponsInput
    upsert?: ProductUpsertWithoutProduct_couponsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_couponsInput, ProductUpdateWithoutProduct_couponsInput>, ProductUncheckedUpdateWithoutProduct_couponsInput>
  }

  export type ProductCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_imagesInput
    connect?: ProductWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateOneRequiredWithoutProduct_imagesNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_imagesInput
    upsert?: ProductUpsertWithoutProduct_imagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_imagesInput, ProductUpdateWithoutProduct_imagesInput>, ProductUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type ProductCreateNestedOneWithoutProduct_variantsInput = {
    create?: XOR<ProductCreateWithoutProduct_variantsInput, ProductUncheckedCreateWithoutProduct_variantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_variantsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductPriceCreateNestedManyWithoutVariantInput = {
    create?: XOR<ProductPriceCreateWithoutVariantInput, ProductPriceUncheckedCreateWithoutVariantInput> | ProductPriceCreateWithoutVariantInput[] | ProductPriceUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutVariantInput | ProductPriceCreateOrConnectWithoutVariantInput[]
    createMany?: ProductPriceCreateManyVariantInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type ProductPriceUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<ProductPriceCreateWithoutVariantInput, ProductPriceUncheckedCreateWithoutVariantInput> | ProductPriceCreateWithoutVariantInput[] | ProductPriceUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutVariantInput | ProductPriceCreateOrConnectWithoutVariantInput[]
    createMany?: ProductPriceCreateManyVariantInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutProduct_variantsNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_variantsInput, ProductUncheckedCreateWithoutProduct_variantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_variantsInput
    upsert?: ProductUpsertWithoutProduct_variantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_variantsInput, ProductUpdateWithoutProduct_variantsInput>, ProductUncheckedUpdateWithoutProduct_variantsInput>
  }

  export type ProductPriceUpdateManyWithoutVariantNestedInput = {
    create?: XOR<ProductPriceCreateWithoutVariantInput, ProductPriceUncheckedCreateWithoutVariantInput> | ProductPriceCreateWithoutVariantInput[] | ProductPriceUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutVariantInput | ProductPriceCreateOrConnectWithoutVariantInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutVariantInput | ProductPriceUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: ProductPriceCreateManyVariantInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutVariantInput | ProductPriceUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutVariantInput | ProductPriceUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type ProductPriceUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<ProductPriceCreateWithoutVariantInput, ProductPriceUncheckedCreateWithoutVariantInput> | ProductPriceCreateWithoutVariantInput[] | ProductPriceUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutVariantInput | ProductPriceCreateOrConnectWithoutVariantInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutVariantInput | ProductPriceUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: ProductPriceCreateManyVariantInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutVariantInput | ProductPriceUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutVariantInput | ProductPriceUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutProduct_pricesInput = {
    create?: XOR<ProductVariantCreateWithoutProduct_pricesInput, ProductVariantUncheckedCreateWithoutProduct_pricesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProduct_pricesInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutProduct_pricesNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProduct_pricesInput, ProductVariantUncheckedCreateWithoutProduct_pricesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProduct_pricesInput
    upsert?: ProductVariantUpsertWithoutProduct_pricesInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutProduct_pricesInput, ProductVariantUpdateWithoutProduct_pricesInput>, ProductVariantUncheckedUpdateWithoutProduct_pricesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DonationLinkCreateWithoutAdminInput = {
    currency_code: $Enums.CurrencyCode
    link: string
  }

  export type DonationLinkUncheckedCreateWithoutAdminInput = {
    id?: number
    currency_code: $Enums.CurrencyCode
    link: string
  }

  export type DonationLinkCreateOrConnectWithoutAdminInput = {
    where: DonationLinkWhereUniqueInput
    create: XOR<DonationLinkCreateWithoutAdminInput, DonationLinkUncheckedCreateWithoutAdminInput>
  }

  export type DonationLinkCreateManyAdminInputEnvelope = {
    data: DonationLinkCreateManyAdminInput | DonationLinkCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutAdminInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAdminInput = {
    id?: string
    category_id: number
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAdminInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput>
  }

  export type ProductCreateManyAdminInputEnvelope = {
    data: ProductCreateManyAdminInput | ProductCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type DonationLinkUpsertWithWhereUniqueWithoutAdminInput = {
    where: DonationLinkWhereUniqueInput
    update: XOR<DonationLinkUpdateWithoutAdminInput, DonationLinkUncheckedUpdateWithoutAdminInput>
    create: XOR<DonationLinkCreateWithoutAdminInput, DonationLinkUncheckedCreateWithoutAdminInput>
  }

  export type DonationLinkUpdateWithWhereUniqueWithoutAdminInput = {
    where: DonationLinkWhereUniqueInput
    data: XOR<DonationLinkUpdateWithoutAdminInput, DonationLinkUncheckedUpdateWithoutAdminInput>
  }

  export type DonationLinkUpdateManyWithWhereWithoutAdminInput = {
    where: DonationLinkScalarWhereInput
    data: XOR<DonationLinkUpdateManyMutationInput, DonationLinkUncheckedUpdateManyWithoutAdminInput>
  }

  export type DonationLinkScalarWhereInput = {
    AND?: DonationLinkScalarWhereInput | DonationLinkScalarWhereInput[]
    OR?: DonationLinkScalarWhereInput[]
    NOT?: DonationLinkScalarWhereInput | DonationLinkScalarWhereInput[]
    id?: IntFilter<"DonationLink"> | number
    admin_id?: StringFilter<"DonationLink"> | string
    currency_code?: EnumCurrencyCodeFilter<"DonationLink"> | $Enums.CurrencyCode
    link?: StringFilter<"DonationLink"> | string
  }

  export type ProductUpsertWithWhereUniqueWithoutAdminInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutAdminInput, ProductUncheckedUpdateWithoutAdminInput>
    create: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutAdminInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutAdminInput, ProductUncheckedUpdateWithoutAdminInput>
  }

  export type ProductUpdateManyWithWhereWithoutAdminInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutAdminInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: UuidFilter<"Product"> | string
    category_id?: IntFilter<"Product"> | number
    admin_id?: StringFilter<"Product"> | string
    owner_id?: IntFilter<"Product"> | number
    license_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    changelog?: StringNullableFilter<"Product"> | string | null
    price_type?: EnumPriceTypeFilter<"Product"> | $Enums.PriceType
    download_link?: StringNullableFilter<"Product"> | string | null
    released_at?: BigIntFilter<"Product"> | bigint | number
    updated_at?: BigIntFilter<"Product"> | bigint | number
  }

  export type AdminCreateWithoutDonation_linksInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
    products?: ProductCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutDonation_linksInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutDonation_linksInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutDonation_linksInput, AdminUncheckedCreateWithoutDonation_linksInput>
  }

  export type AdminUpsertWithoutDonation_linksInput = {
    update: XOR<AdminUpdateWithoutDonation_linksInput, AdminUncheckedUpdateWithoutDonation_linksInput>
    create: XOR<AdminCreateWithoutDonation_linksInput, AdminUncheckedCreateWithoutDonation_linksInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutDonation_linksInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutDonation_linksInput, AdminUncheckedUpdateWithoutDonation_linksInput>
  }

  export type AdminUpdateWithoutDonation_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutDonation_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProductCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOwnerInput = {
    id?: string
    category_id: number
    admin_id: string
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput>
  }

  export type ProductCreateManyOwnerInputEnvelope = {
    data: ProductCreateManyOwnerInput | ProductCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutOwnerInput, ProductUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutOwnerInput, ProductUncheckedUpdateWithoutOwnerInput>
  }

  export type ProductUpdateManyWithWhereWithoutOwnerInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProductCreateWithoutLicenseInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutLicenseInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutLicenseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLicenseInput, ProductUncheckedCreateWithoutLicenseInput>
  }

  export type ProductCreateManyLicenseInputEnvelope = {
    data: ProductCreateManyLicenseInput | ProductCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutLicenseInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutLicenseInput, ProductUncheckedUpdateWithoutLicenseInput>
    create: XOR<ProductCreateWithoutLicenseInput, ProductUncheckedCreateWithoutLicenseInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutLicenseInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutLicenseInput, ProductUncheckedUpdateWithoutLicenseInput>
  }

  export type ProductUpdateManyWithWhereWithoutLicenseInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutLicenseInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AdminCreateWithoutProductsInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
    donation_links?: DonationLinkCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutProductsInput = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number?: string | null
    picture?: string | null
    donation_links?: DonationLinkUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutProductsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutProductsInput, AdminUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    slug: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type OwnerCreateWithoutProductsInput = {
    first_name: string
    last_name: string
    sm_username: string
    picture: string
  }

  export type OwnerUncheckedCreateWithoutProductsInput = {
    id?: number
    first_name: string
    last_name: string
    sm_username: string
    picture: string
  }

  export type OwnerCreateOrConnectWithoutProductsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutProductsInput, OwnerUncheckedCreateWithoutProductsInput>
  }

  export type LicenseCreateWithoutProductsInput = {
    content: string
    updated_at: bigint | number
  }

  export type LicenseUncheckedCreateWithoutProductsInput = {
    id?: number
    content: string
    updated_at: bigint | number
  }

  export type LicenseCreateOrConnectWithoutProductsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutProductsInput, LicenseUncheckedCreateWithoutProductsInput>
  }

  export type ProductDiscountCreateWithoutProductInput = {
    id?: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductDiscountUncheckedCreateWithoutProductInput = {
    id?: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductDiscountCreateOrConnectWithoutProductInput = {
    where: ProductDiscountWhereUniqueInput
    create: XOR<ProductDiscountCreateWithoutProductInput, ProductDiscountUncheckedCreateWithoutProductInput>
  }

  export type ProductCouponCreateWithoutProductInput = {
    id?: string
    code: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductCouponUncheckedCreateWithoutProductInput = {
    id?: string
    code: string
    discount: string
    expired_at: bigint | number
  }

  export type ProductCouponCreateOrConnectWithoutProductInput = {
    where: ProductCouponWhereUniqueInput
    create: XOR<ProductCouponCreateWithoutProductInput, ProductCouponUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateWithoutProductInput = {
    id?: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantCreateWithoutProductInput = {
    id?: string
    name: string
    download_link?: string | null
    product_prices?: ProductPriceCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    download_link?: string | null
    product_prices?: ProductPriceUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutProductsInput = {
    update: XOR<AdminUpdateWithoutProductsInput, AdminUncheckedUpdateWithoutProductsInput>
    create: XOR<AdminCreateWithoutProductsInput, AdminUncheckedCreateWithoutProductsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutProductsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutProductsInput, AdminUncheckedUpdateWithoutProductsInput>
  }

  export type AdminUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    donation_links?: DonationLinkUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    donation_links?: DonationLinkUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUpsertWithoutProductsInput = {
    update: XOR<OwnerUpdateWithoutProductsInput, OwnerUncheckedUpdateWithoutProductsInput>
    create: XOR<OwnerCreateWithoutProductsInput, OwnerUncheckedCreateWithoutProductsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutProductsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutProductsInput, OwnerUncheckedUpdateWithoutProductsInput>
  }

  export type OwnerUpdateWithoutProductsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sm_username?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sm_username?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseUpsertWithoutProductsInput = {
    update: XOR<LicenseUpdateWithoutProductsInput, LicenseUncheckedUpdateWithoutProductsInput>
    create: XOR<LicenseCreateWithoutProductsInput, LicenseUncheckedCreateWithoutProductsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutProductsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutProductsInput, LicenseUncheckedUpdateWithoutProductsInput>
  }

  export type LicenseUpdateWithoutProductsInput = {
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LicenseUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductDiscountUpsertWithoutProductInput = {
    update: XOR<ProductDiscountUpdateWithoutProductInput, ProductDiscountUncheckedUpdateWithoutProductInput>
    create: XOR<ProductDiscountCreateWithoutProductInput, ProductDiscountUncheckedCreateWithoutProductInput>
    where?: ProductDiscountWhereInput
  }

  export type ProductDiscountUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductDiscountWhereInput
    data: XOR<ProductDiscountUpdateWithoutProductInput, ProductDiscountUncheckedUpdateWithoutProductInput>
  }

  export type ProductDiscountUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductDiscountUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCouponUpsertWithoutProductInput = {
    update: XOR<ProductCouponUpdateWithoutProductInput, ProductCouponUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCouponCreateWithoutProductInput, ProductCouponUncheckedCreateWithoutProductInput>
    where?: ProductCouponWhereInput
  }

  export type ProductCouponUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductCouponWhereInput
    data: XOR<ProductCouponUpdateWithoutProductInput, ProductCouponUncheckedUpdateWithoutProductInput>
  }

  export type ProductCouponUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCouponUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    expired_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: UuidFilter<"ProductImage"> | string
    product_id?: UuidFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    is_thumbnail?: BoolFilter<"ProductImage"> | boolean
    width?: IntFilter<"ProductImage"> | number
    height?: IntFilter<"ProductImage"> | number
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: UuidFilter<"ProductVariant"> | string
    product_id?: UuidFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    download_link?: StringNullableFilter<"ProductVariant"> | string | null
  }

  export type ProductCreateWithoutProduct_discountsInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_discountsInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_discountsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_discountsInput, ProductUncheckedCreateWithoutProduct_discountsInput>
  }

  export type ProductUpsertWithoutProduct_discountsInput = {
    update: XOR<ProductUpdateWithoutProduct_discountsInput, ProductUncheckedUpdateWithoutProduct_discountsInput>
    create: XOR<ProductCreateWithoutProduct_discountsInput, ProductUncheckedCreateWithoutProduct_discountsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_discountsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_discountsInput, ProductUncheckedUpdateWithoutProduct_discountsInput>
  }

  export type ProductUpdateWithoutProduct_discountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_discountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProduct_couponsInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_couponsInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_couponsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_couponsInput, ProductUncheckedCreateWithoutProduct_couponsInput>
  }

  export type ProductUpsertWithoutProduct_couponsInput = {
    update: XOR<ProductUpdateWithoutProduct_couponsInput, ProductUncheckedUpdateWithoutProduct_couponsInput>
    create: XOR<ProductCreateWithoutProduct_couponsInput, ProductUncheckedCreateWithoutProduct_couponsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_couponsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_couponsInput, ProductUncheckedUpdateWithoutProduct_couponsInput>
  }

  export type ProductUpdateWithoutProduct_couponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_couponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProduct_imagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_imagesInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_imagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
  }

  export type ProductUpsertWithoutProduct_imagesInput = {
    update: XOR<ProductUpdateWithoutProduct_imagesInput, ProductUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_imagesInput, ProductUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type ProductUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProduct_variantsInput = {
    id?: string
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    admin: AdminCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    owner: OwnerCreateNestedOneWithoutProductsInput
    license: LicenseCreateNestedOneWithoutProductsInput
    product_discounts?: ProductDiscountCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponCreateNestedOneWithoutProductInput
    product_images?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_variantsInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
    product_discounts?: ProductDiscountUncheckedCreateNestedOneWithoutProductInput
    product_coupons?: ProductCouponUncheckedCreateNestedOneWithoutProductInput
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_variantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_variantsInput, ProductUncheckedCreateWithoutProduct_variantsInput>
  }

  export type ProductPriceCreateWithoutVariantInput = {
    id?: string
    currency_code: $Enums.CurrencyCode
    price: number
  }

  export type ProductPriceUncheckedCreateWithoutVariantInput = {
    id?: string
    currency_code: $Enums.CurrencyCode
    price: number
  }

  export type ProductPriceCreateOrConnectWithoutVariantInput = {
    where: ProductPriceWhereUniqueInput
    create: XOR<ProductPriceCreateWithoutVariantInput, ProductPriceUncheckedCreateWithoutVariantInput>
  }

  export type ProductPriceCreateManyVariantInputEnvelope = {
    data: ProductPriceCreateManyVariantInput | ProductPriceCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProduct_variantsInput = {
    update: XOR<ProductUpdateWithoutProduct_variantsInput, ProductUncheckedUpdateWithoutProduct_variantsInput>
    create: XOR<ProductCreateWithoutProduct_variantsInput, ProductUncheckedCreateWithoutProduct_variantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_variantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_variantsInput, ProductUncheckedUpdateWithoutProduct_variantsInput>
  }

  export type ProductUpdateWithoutProduct_variantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_variantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductPriceUpsertWithWhereUniqueWithoutVariantInput = {
    where: ProductPriceWhereUniqueInput
    update: XOR<ProductPriceUpdateWithoutVariantInput, ProductPriceUncheckedUpdateWithoutVariantInput>
    create: XOR<ProductPriceCreateWithoutVariantInput, ProductPriceUncheckedCreateWithoutVariantInput>
  }

  export type ProductPriceUpdateWithWhereUniqueWithoutVariantInput = {
    where: ProductPriceWhereUniqueInput
    data: XOR<ProductPriceUpdateWithoutVariantInput, ProductPriceUncheckedUpdateWithoutVariantInput>
  }

  export type ProductPriceUpdateManyWithWhereWithoutVariantInput = {
    where: ProductPriceScalarWhereInput
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyWithoutVariantInput>
  }

  export type ProductPriceScalarWhereInput = {
    AND?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    OR?: ProductPriceScalarWhereInput[]
    NOT?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    id?: UuidFilter<"ProductPrice"> | string
    variant_id?: UuidFilter<"ProductPrice"> | string
    currency_code?: EnumCurrencyCodeFilter<"ProductPrice"> | $Enums.CurrencyCode
    price?: IntFilter<"ProductPrice"> | number
  }

  export type ProductVariantCreateWithoutProduct_pricesInput = {
    id?: string
    name: string
    download_link?: string | null
    product: ProductCreateNestedOneWithoutProduct_variantsInput
  }

  export type ProductVariantUncheckedCreateWithoutProduct_pricesInput = {
    id?: string
    product_id: string
    name: string
    download_link?: string | null
  }

  export type ProductVariantCreateOrConnectWithoutProduct_pricesInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProduct_pricesInput, ProductVariantUncheckedCreateWithoutProduct_pricesInput>
  }

  export type ProductVariantUpsertWithoutProduct_pricesInput = {
    update: XOR<ProductVariantUpdateWithoutProduct_pricesInput, ProductVariantUncheckedUpdateWithoutProduct_pricesInput>
    create: XOR<ProductVariantCreateWithoutProduct_pricesInput, ProductVariantUncheckedCreateWithoutProduct_pricesInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutProduct_pricesInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutProduct_pricesInput, ProductVariantUncheckedUpdateWithoutProduct_pricesInput>
  }

  export type ProductVariantUpdateWithoutProduct_pricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutProduct_variantsNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProduct_pricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationLinkCreateManyAdminInput = {
    id?: number
    currency_code: $Enums.CurrencyCode
    link: string
  }

  export type ProductCreateManyAdminInput = {
    id?: string
    category_id: number
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
  }

  export type DonationLinkUpdateWithoutAdminInput = {
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
  }

  export type DonationLinkUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
  }

  export type DonationLinkUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCreateManyOwnerInput = {
    id?: string
    category_id: number
    admin_id: string
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
  }

  export type ProductUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCreateManyLicenseInput = {
    id?: string
    category_id: number
    admin_id: string
    owner_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
  }

  export type ProductUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    admin_id: string
    owner_id: number
    license_id: number
    name: string
    slug: string
    description: string
    changelog?: string | null
    price_type: $Enums.PriceType
    download_link?: string | null
    released_at: bigint | number
    updated_at: bigint | number
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: AdminUpdateOneRequiredWithoutProductsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutProductsNestedInput
    license?: LicenseUpdateOneRequiredWithoutProductsNestedInput
    product_discounts?: ProductDiscountUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
    product_discounts?: ProductDiscountUncheckedUpdateOneWithoutProductNestedInput
    product_coupons?: ProductCouponUncheckedUpdateOneWithoutProductNestedInput
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    product_variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    license_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    price_type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    released_at?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProductImageCreateManyProductInput = {
    id?: string
    url: string
    is_thumbnail: boolean
    width: number
    height: number
  }

  export type ProductVariantCreateManyProductInput = {
    id?: string
    name: string
    download_link?: string | null
  }

  export type ProductImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type ProductVariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: ProductPriceUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
    product_prices?: ProductPriceUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    download_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceCreateManyVariantInput = {
    id?: string
    currency_code: $Enums.CurrencyCode
    price: number
  }

  export type ProductPriceUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPriceUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPriceUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    price?: IntFieldUpdateOperationsInput | number
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