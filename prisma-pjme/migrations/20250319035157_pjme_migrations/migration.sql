-- CreateEnum
CREATE TYPE "CurrencyCode" AS ENUM ('IDR', 'USD');

-- CreateEnum
CREATE TYPE "PriceType" AS ENUM ('paid', 'free');

-- CreateTable
CREATE TABLE "admins" (
    "id" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "picture" VARCHAR(255),

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_links" (
    "id" SERIAL NOT NULL,
    "admin_id" VARCHAR(255) NOT NULL,
    "currency_code" "CurrencyCode" NOT NULL,
    "link" VARCHAR(100) NOT NULL,

    CONSTRAINT "donation_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owners" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "sm_username" VARCHAR(100) NOT NULL,
    "picture" VARCHAR(255) NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100),
    "phone_number" VARCHAR(20) NOT NULL,
    "picture" VARCHAR(255),
    "last_active" BIGINT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "licenses" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "updated_at" BIGINT NOT NULL,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "category_id" INTEGER NOT NULL,
    "admin_id" VARCHAR(255) NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "license_id" INTEGER NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "changelog" TEXT,
    "price_type" "PriceType" NOT NULL,
    "download_link" VARCHAR(255),
    "released_at" BIGINT NOT NULL,
    "updated_at" BIGINT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_discounts" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "discount" VARCHAR(4) NOT NULL,
    "expired_at" BIGINT NOT NULL,

    CONSTRAINT "product_discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_coupons" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "code" VARCHAR(150) NOT NULL,
    "discount" VARCHAR(4) NOT NULL,
    "expired_at" BIGINT NOT NULL,

    CONSTRAINT "product_coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_images" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "is_thumbnail" BOOLEAN NOT NULL,
    "width" SMALLINT NOT NULL,
    "height" SMALLINT NOT NULL,

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_variants" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "download_link" VARCHAR(255),

    CONSTRAINT "product_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_prices" (
    "id" UUID NOT NULL,
    "variant_id" UUID NOT NULL,
    "currency_code" "CurrencyCode" NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "product_prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about_us" (
    "id" SMALLSERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "about_us_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "privacy_policy" (
    "id" SMALLSERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "updated_at" BIGINT NOT NULL,

    CONSTRAINT "privacy_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terms_and_conditions" (
    "id" SMALLSERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "updated_at" BIGINT NOT NULL,

    CONSTRAINT "terms_and_conditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faq" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_discounts_product_id_key" ON "product_discounts"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_coupons_product_id_key" ON "product_coupons"("product_id");

-- AddForeignKey
ALTER TABLE "donation_links" ADD CONSTRAINT "donation_links_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_license_id_fkey" FOREIGN KEY ("license_id") REFERENCES "licenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_discounts" ADD CONSTRAINT "product_discounts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_coupons" ADD CONSTRAINT "product_coupons_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_prices" ADD CONSTRAINT "product_prices_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "product_variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
