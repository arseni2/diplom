-- CreateTable
CREATE TABLE "File" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "file" TEXT NOT NULL,
    "name" TEXT,
    "size" INTEGER,
    "houseId" INTEGER,
    CONSTRAINT "File_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "houseId" INTEGER NOT NULL,
    CONSTRAINT "Feature_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "House" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "square" TEXT NOT NULL,
    "remont" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "isRent" BOOLEAN NOT NULL DEFAULT true,
    "isSell" BOOLEAN NOT NULL DEFAULT true,
    "realtorId" INTEGER NOT NULL,
    CONSTRAINT "House_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "File_houseId_idx" ON "File"("houseId");

-- CreateIndex
CREATE INDEX "Feature_houseId_idx" ON "Feature"("houseId");

-- CreateIndex
CREATE INDEX "House_realtorId_idx" ON "House"("realtorId");

-- CreateIndex
CREATE INDEX "House_isRent_idx" ON "House"("isRent");

-- CreateIndex
CREATE INDEX "House_isSell_idx" ON "House"("isSell");

-- CreateIndex
CREATE INDEX "House_createdAt_idx" ON "House"("createdAt");

-- CreateIndex
CREATE INDEX "Role_title_idx" ON "Role"("title");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_roleId_idx" ON "User"("roleId");
