/*
  Warnings:

  - You are about to drop the column `followedId` on the `Follow` table. All the data in the column will be lost.
  - Added the required column `followeeId` to the `Follow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerId` to the `Follow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Follow` DROP FOREIGN KEY `Follow_followedId_fkey`;

-- AlterTable
ALTER TABLE `Follow` DROP COLUMN `followedId`,
    ADD COLUMN `followeeId` VARCHAR(191) NOT NULL,
    ADD COLUMN `followerId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followerId_fkey` FOREIGN KEY (`followerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followeeId_fkey` FOREIGN KEY (`followeeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
