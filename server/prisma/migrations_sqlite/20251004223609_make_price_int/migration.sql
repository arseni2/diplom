/*
  Warnings:

  - You are about to alter the column `price` on the `House` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_House" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "square" TEXT NOT NULL,
    "remont" TEXT NOT NULL,
    "floor" TEXT,
    "rooms" TEXT,
    "bio" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "isRent" BOOLEAN NOT NULL DEFAULT true,
    "isSell" BOOLEAN NOT NULL DEFAULT true,
    "realtorId" INTEGER NOT NULL,
    CONSTRAINT "House_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_House" ("address", "bio", "createdAt", "description", "floor", "id", "isRent", "isSell", "price", "realtorId", "remont", "rooms", "square", "title") SELECT "address", "bio", "createdAt", "description", "floor", "id", "isRent", "isSell", "price", "realtorId", "remont", "rooms", "square", "title" FROM "House";
DROP TABLE "House";
ALTER TABLE "new_House" RENAME TO "House";
CREATE INDEX "House_realtorId_idx" ON "House"("realtorId");
CREATE INDEX "House_isRent_idx" ON "House"("isRent");
CREATE INDEX "House_isSell_idx" ON "House"("isSell");
CREATE INDEX "House_createdAt_idx" ON "House"("createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
