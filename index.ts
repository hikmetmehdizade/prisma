import { PrismaClient } from "./prisma/generated";

const prisma = new PrismaClient();

export * from "./prisma/generated";
export default prisma;
