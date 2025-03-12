/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `sms_messages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sms_messages_id_key" ON "sms_messages"("id");
