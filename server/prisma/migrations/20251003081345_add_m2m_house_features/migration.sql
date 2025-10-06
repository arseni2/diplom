/*
  Warnings:

  - You are about to drop the column `houseId` on the `Feature` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_HouseFeatures" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_HouseFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "Feature" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HouseFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "House" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL
);
INSERT INTO "new_Feature" ("id", "title", "value") SELECT "id", "title", "value" FROM "Feature";
DROP TABLE "Feature";
ALTER TABLE "new_Feature" RENAME TO "Feature";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_HouseFeatures_AB_unique" ON "_HouseFeatures"("A", "B");

-- CreateIndex
CREATE INDEX "_HouseFeatures_B_index" ON "_HouseFeatures"("B");
