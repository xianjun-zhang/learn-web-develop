import { PrismaClient } from "@prisma/client";

// Singleton pattern for PrismaClient to prevent connection exhaustion
// during development hot reloads.
//
// Next.js Fast Refresh can cause module re-evaluation, potentially creating
// multiple PrismaClient instances. This approach ensures a single, reusable instance.

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// In non-production environments, store the PrismaClient instance globally.
// This ensures consistent database access across hot reloads.
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// Benefits of this approach:
// 1. Prevents creation of multiple PrismaClient instances during hot reloads in development mode.
// 2. Avoids database connection pool exhaustion.
// 3. Ensures consistent behavior across connections.
// 4. Mitigates issues specific to development; less critical in production
//    where server restarts are less frequent.
