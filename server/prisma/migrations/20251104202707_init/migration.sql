-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "middlename" TEXT,
    "password" TEXT NOT NULL,
    "telephone" TEXT,
    "tg" TEXT,
    "roleId" INTEGER DEFAULT 1,
    "avatarId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."File" (
    "id" SERIAL NOT NULL,
    "file" TEXT NOT NULL,
    "name" TEXT,
    "size" INTEGER,
    "houseId" INTEGER,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Feature" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."House" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Appeals" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Новая',
    "comment" TEXT NOT NULL,
    "houseId" INTEGER,
    "clientId" INTEGER,
    "realtorId" INTEGER,

    CONSTRAINT "Appeals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_HouseFeatures" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HouseFeatures_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_title_key" ON "public"."Role"("title");

-- CreateIndex
CREATE INDEX "Role_title_idx" ON "public"."Role"("title");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_avatarId_key" ON "public"."User"("avatarId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_roleId_idx" ON "public"."User"("roleId");

-- CreateIndex
CREATE INDEX "File_houseId_idx" ON "public"."File"("houseId");

-- CreateIndex
CREATE INDEX "House_realtorId_idx" ON "public"."House"("realtorId");

-- CreateIndex
CREATE INDEX "House_isRent_idx" ON "public"."House"("isRent");

-- CreateIndex
CREATE INDEX "House_isSell_idx" ON "public"."House"("isSell");

-- CreateIndex
CREATE INDEX "House_createdAt_idx" ON "public"."House"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Appeals_houseId_key" ON "public"."Appeals"("houseId");

-- CreateIndex
CREATE UNIQUE INDEX "Appeals_clientId_key" ON "public"."Appeals"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Appeals_realtorId_key" ON "public"."Appeals"("realtorId");

-- CreateIndex
CREATE INDEX "Appeals_houseId_idx" ON "public"."Appeals"("houseId");

-- CreateIndex
CREATE INDEX "Appeals_clientId_idx" ON "public"."Appeals"("clientId");

-- CreateIndex
CREATE INDEX "Appeals_realtorId_idx" ON "public"."Appeals"("realtorId");

-- CreateIndex
CREATE INDEX "_HouseFeatures_B_index" ON "public"."_HouseFeatures"("B");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "public"."File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."File" ADD CONSTRAINT "File_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "public"."House"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."House" ADD CONSTRAINT "House_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appeals" ADD CONSTRAINT "Appeals_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "public"."House"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appeals" ADD CONSTRAINT "Appeals_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appeals" ADD CONSTRAINT "Appeals_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_HouseFeatures" ADD CONSTRAINT "_HouseFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_HouseFeatures" ADD CONSTRAINT "_HouseFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."House"("id") ON DELETE CASCADE ON UPDATE CASCADE;
