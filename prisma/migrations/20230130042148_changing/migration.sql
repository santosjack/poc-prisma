/*
  Warnings:

  - You are about to drop the `phone_numbers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "phone_numbers" DROP CONSTRAINT "phone_numbers_contactId_fkey";

-- DropTable
DROP TABLE "phone_numbers";

-- CreateTable
CREATE TABLE "phoneNumbers" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "phoneNumbers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "phoneNumbers" ADD CONSTRAINT "phoneNumbers_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
