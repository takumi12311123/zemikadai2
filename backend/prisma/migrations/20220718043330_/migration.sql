/*
  Warnings:

  - You are about to drop the column `userId` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the `_follower` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `followedId` to the `Follow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Follow` DROP FOREIGN KEY `Follow_userId_fkey`;

-- DropForeignKey
ALTER TABLE `_follower` DROP FOREIGN KEY `_follower_A_fkey`;

-- DropForeignKey
ALTER TABLE `_follower` DROP FOREIGN KEY `_follower_B_fkey`;

-- AlterTable
ALTER TABLE `Follow` DROP COLUMN `userId`,
    ADD COLUMN `followedId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_follower`;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followedId_fkey` FOREIGN KEY (`followedId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
