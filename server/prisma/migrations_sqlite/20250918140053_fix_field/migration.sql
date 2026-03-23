-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "houseId" INTEGER,
    CONSTRAINT "Feature_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Feature" ("houseId", "id", "title", "value") SELECT "houseId", "id", "title", "value" FROM "Feature";
DROP TABLE "Feature";
ALTER TABLE "new_Feature" RENAME TO "Feature";
CREATE INDEX "Feature_houseId_idx" ON "Feature"("houseId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
