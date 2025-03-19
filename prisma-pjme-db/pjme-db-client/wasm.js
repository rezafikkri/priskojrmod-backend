
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phoneNumber: 'phoneNumber',
  picture: 'picture'
};

exports.Prisma.DonationLinkScalarFieldEnum = {
  id: 'id',
  admin_id: 'admin_id',
  currency_code: 'currency_code',
  link: 'link'
};

exports.Prisma.OwnerScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  sm_username: 'sm_username',
  picture: 'picture'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  password: 'password',
  phone_number: 'phone_number',
  picture: 'picture',
  last_active: 'last_active'
};

exports.Prisma.LicenseScalarFieldEnum = {
  id: 'id',
  content: 'content',
  updated_at: 'updated_at'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.ProductDiscountScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  discount: 'discount',
  expired_at: 'expired_at'
};

exports.Prisma.ProductCouponScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  code: 'code',
  discount: 'discount',
  expired_at: 'expired_at'
};

exports.Prisma.ProductImageScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  url: 'url',
  is_thumbnail: 'is_thumbnail',
  width: 'width',
  height: 'height'
};

exports.Prisma.ProductVariantScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  name: 'name',
  download_link: 'download_link'
};

exports.Prisma.ProductPriceScalarFieldEnum = {
  id: 'id',
  variant_id: 'variant_id',
  currency_code: 'currency_code',
  price: 'price'
};

exports.Prisma.AboutUsScalarFieldEnum = {
  id: 'id',
  content: 'content'
};

exports.Prisma.PrivacyPolicyScalarFieldEnum = {
  id: 'id',
  content: 'content',
  updated_at: 'updated_at'
};

exports.Prisma.TermsandConditionsScalarFieldEnum = {
  id: 'id',
  content: 'content',
  updated_at: 'updated_at'
};

exports.Prisma.FAQScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.CurrencyCode = exports.$Enums.CurrencyCode = {
  IDR: 'IDR',
  USD: 'USD'
};

exports.PriceType = exports.$Enums.PriceType = {
  paid: 'paid',
  free: 'free'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
