-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appeals" (
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
INSERT INTO "new_Appeals" ("clientId", "comment", "createdAt", "houseId", "id", "realtorId", "status") SELECT "clientId", "comment", "createdAt", "houseId", "id", "realtorId", "status" FROM "Appeals";
DROP TABLE "Appeals";
ALTER TABLE "new_Appeals" RENAME TO "Appeals";
CREATE UNIQUE INDEX "Appeals_houseId_key" ON "Appeals"("houseId");
CREATE UNIQUE INDEX "Appeals_clientId_key" ON "Appeals"("clientId");
CREATE UNIQUE INDEX "Appeals_realtorId_key" ON "Appeals"("realtorId");
CREATE INDEX "Appeals_houseId_idx" ON "Appeals"("houseId");
CREATE INDEX "Appeals_clientId_idx" ON "Appeals"("clientId");
CREATE INDEX "Appeals_realtorId_idx" ON "Appeals"("realtorId");
CREATE TABLE "new_File" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "file" TEXT NOT NULL,
    "name" TEXT,
    "size" INTEGER,
    "houseId" INTEGER,
    CONSTRAINT "File_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_File" ("file", "houseId", "id", "name", "size") SELECT "file", "houseId", "id", "name", "size" FROM "File";
DROP TABLE "File";
ALTER TABLE "new_File" RENAME TO "File";
CREATE INDEX "File_houseId_idx" ON "File"("houseId");
CREATE TABLE "new__HouseFeatures" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_HouseFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "Feature" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HouseFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "House" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__HouseFeatures" ("A", "B") SELECT "A", "B" FROM "_HouseFeatures";
DROP TABLE "_HouseFeatures";
ALTER TABLE "new__HouseFeatures" RENAME TO "_HouseFeatures";
CREATE UNIQUE INDEX "_HouseFeatures_AB_unique" ON "_HouseFeatures"("A", "B");
CREATE INDEX "_HouseFeatures_B_index" ON "_HouseFeatures"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
