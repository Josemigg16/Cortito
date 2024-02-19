-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "noUserId" INTEGER;

-- CreateTable
CREATE TABLE "NoUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NoUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_noUserId_fkey" FOREIGN KEY ("noUserId") REFERENCES "NoUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
