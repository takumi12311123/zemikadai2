/*
  Warnings:

  - You are about to drop the column `detail` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Follow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Follow` DROP COLUMN `detail`,
    DROP COLUMN `title`;

-- CreateTable
CREATE TABLE `_follow` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_follow_AB_unique`(`A`, `B`),
    INDEX `_follow_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_follow` ADD CONSTRAINT `_follow_A_fkey` FOREIGN KEY (`A`) REFERENCES `Follow`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_follow` ADD CONSTRAINT `_follow_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
