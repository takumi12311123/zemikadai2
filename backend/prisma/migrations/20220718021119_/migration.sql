/*
  Warnings:

  - You are about to drop the `_follow` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Follow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_follow` DROP FOREIGN KEY `_follow_A_fkey`;

-- DropForeignKey
ALTER TABLE `_follow` DROP FOREIGN KEY `_follow_B_fkey`;

-- AlterTable
ALTER TABLE `Follow` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_follow`;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
