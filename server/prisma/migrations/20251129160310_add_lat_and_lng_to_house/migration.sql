-- AlterTable
ALTER TABLE "public"."House" ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "lng" DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "House_lat_lng_idx" ON "public"."House"("lat", "lng");
