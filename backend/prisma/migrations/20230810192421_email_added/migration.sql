-- CreateTable
CREATE TABLE "registration" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "profession" VARCHAR(100) NOT NULL,
    "salary" INTEGER NOT NULL,
    "createdat" VARCHAR NOT NULL,

    CONSTRAINT "registration_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registration_email_key" ON "registration"("email");
