/*
  Warnings:

  - Made the column `oldLink` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `newLink` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "oldLink" SET NOT NULL,
ALTER COLUMN "newLink" SET NOT NULL;
