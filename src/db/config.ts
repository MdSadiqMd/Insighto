import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Pool } from '@neondatabase/serverless';

let prisma: PrismaClient | null = null;

export const getPrismaClient = (): PrismaClient => {
    if (!prisma) {
        const neon = new Pool({ connectionString: process.env.DATABASE_URL });
        const adapter = new PrismaNeon(neon);
        prisma = new PrismaClient({ adapter });
    }
    return prisma;
};