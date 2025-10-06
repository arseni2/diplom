-- 1. Переименовать старую таблицу
ALTER TABLE "House" RENAME TO "House_old";

-- 2. Создать новую таблицу с COLLATE NOCASE для address
CREATE TABLE "House" (
                         "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                         "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         "title" TEXT NOT NULL,
                         "description" TEXT NOT NULL,
                         "address" TEXT NOT NULL COLLATE NOCASE,
                         "square" TEXT NOT NULL,
                         "remont" TEXT NOT NULL,
                         "floor" TEXT,
                         "rooms" TEXT,
                         "bio" TEXT NOT NULL,
                         "price" INTEGER NOT NULL,
                         "isRent" BOOLEAN NOT NULL DEFAULT true,
                         "isSell" BOOLEAN NOT NULL DEFAULT true,
                         "realtorId" INTEGER NOT NULL,
                         FOREIGN KEY ("realtorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- 3. Скопировать данные
INSERT INTO "House" (
    "id", "createdAt", "title", "description", "address", "square", "remont",
    "floor", "rooms", "bio", "price", "isRent", "isSell", "realtorId"
)
SELECT
    "id", "createdAt", "title", "description", "address", "square", "remont",
    "floor", "rooms", "bio", "price", "isRent", "isSell", "realtorId"
FROM "House_old";

-- 4. Удалить старую таблицу
DROP TABLE "House_old";

-- 5. Восстановить индексы
CREATE INDEX "House_realtorId_idx" ON "House"("realtorId");
CREATE INDEX "House_isRent_idx" ON "House"("isRent");
CREATE INDEX "House_isSell_idx" ON "House"("isSell");
CREATE INDEX "House_createdAt_idx" ON "House"("createdAt");