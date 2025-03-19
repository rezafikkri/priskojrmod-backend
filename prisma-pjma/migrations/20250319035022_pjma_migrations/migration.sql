-- CreateTable
CREATE TABLE "secret_key_license" (
    "id" BIGSERIAL NOT NULL,
    "key" VARCHAR(100) NOT NULL,
    "created_at" BIGINT NOT NULL,
    "version" VARCHAR(20) NOT NULL,

    CONSTRAINT "secret_key_license_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_key" (
    "id" UUID NOT NULL,
    "secret_key_id" BIGINT NOT NULL,
    "key" TEXT NOT NULL,
    "used_for_activate" BOOLEAN NOT NULL,
    "used_for_download" BOOLEAN NOT NULL,

    CONSTRAINT "license_key_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "license_key" ADD CONSTRAINT "license_key_secret_key_id_fkey" FOREIGN KEY ("secret_key_id") REFERENCES "secret_key_license"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
