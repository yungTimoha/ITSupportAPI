-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('User', 'Admin', 'Analyst', 'Pm');

-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('New', 'Processing', 'Resolved', 'Canceled');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('Low', 'Mid', 'High');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('Technical', 'Finance', 'Quality');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('WebsiteError', 'ApplicationError', 'Analytic', 'WebsiteQuestion', 'ApplicationQuestion', 'NewFeature', 'Other');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('image', 'video');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "age" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'User',
    "secret" TEXT NOT NULL,
    "department_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inquiry" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" "InquiryStatus" NOT NULL DEFAULT 'New',
    "priority" "Priority" NOT NULL DEFAULT 'Mid',
    "department" "Department" NOT NULL DEFAULT 'Quality',
    "category" "Category" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inquiryStatusTId" TEXT,
    "priorityTId" TEXT,
    "departmentTId" TEXT,
    "categoryTId" TEXT,

    CONSTRAINT "inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solution" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "inquiry_id" TEXT NOT NULL,
    "video_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inquiry_status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inquiry_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "priority" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "inquiry_status_name_key" ON "inquiry_status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "priority_name_key" ON "priority"("name");

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_inquiryStatusTId_fkey" FOREIGN KEY ("inquiryStatusTId") REFERENCES "inquiry_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_priorityTId_fkey" FOREIGN KEY ("priorityTId") REFERENCES "priority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_departmentTId_fkey" FOREIGN KEY ("departmentTId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_categoryTId_fkey" FOREIGN KEY ("categoryTId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution" ADD CONSTRAINT "solution_inquiry_id_fkey" FOREIGN KEY ("inquiry_id") REFERENCES "inquiry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
