-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sms_messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT
);
INSERT INTO "new_sms_messages" ("id", "message", "phone", "status") SELECT "id", "message", "phone", "status" FROM "sms_messages";
DROP TABLE "sms_messages";
ALTER TABLE "new_sms_messages" RENAME TO "sms_messages";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
