-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "price_card" TEXT NOT NULL,
    "price_desk" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);
