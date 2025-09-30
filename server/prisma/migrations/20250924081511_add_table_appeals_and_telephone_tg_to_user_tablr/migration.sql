-- AlterTable
ALTER TABLE "User" ADD COLUMN "telephone" TEXT;
ALTER TABLE "User" ADD COLUMN "tg" TEXT;

-- CreateTable
CREATE TABLE "Appeals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Новая',
    "comment" TEXT NOT NULL,
    "houseId" INTEGER,
    "clientId" INTEGER,
    "realtorId" INTEGER,
    CONSTRAINT "Appeals_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Appeals_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Appeals_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Appeals_houseId_key" ON "Appeals"("houseId");

-- CreateIndex
CREATE UNIQUE INDEX "Appeals_clientId_key" ON "Appeals"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Appeals_realtorId_key" ON "Appeals"("realtorId");

-- CreateIndex
CREATE INDEX "Appeals_houseId_idx" ON "Appeals"("houseId");

-- CreateIndex
CREATE INDEX "Appeals_clientId_idx" ON "Appeals"("clientId");

-- CreateIndex
CREATE INDEX "Appeals_realtorId_idx" ON "Appeals"("realtorId");
