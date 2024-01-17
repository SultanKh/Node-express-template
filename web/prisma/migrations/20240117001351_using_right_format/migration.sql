/*
  Warnings:

  - You are about to drop the column `productId` on the `savedcart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `savedcart` DROP COLUMN `productId`,
    ADD COLUMN `ProductVariants` JSON NULL;
