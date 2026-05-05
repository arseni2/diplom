-- This migration removes unique constraints to allow one-to-many relationships
-- for appeals: one house can have many appeals, one realtor can handle many appeals

-- DropIndex
DROP INDEX IF EXISTS "public"."Appeals_houseId_key";

-- DropIndex
DROP INDEX IF EXISTS "public"."Appeals_realtorId_key";
