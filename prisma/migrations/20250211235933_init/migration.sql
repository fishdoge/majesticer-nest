-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_apiKey_key" ON "api_keys"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_walletAddress_key" ON "api_keys"("walletAddress");
