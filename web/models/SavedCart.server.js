
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export async function getCart(id, graphql) {
    const qrCode = await db.qRCode.findFirst({ where: { id } });

    if (!qrCode) {
        return null;
    }

    return supplementQRCode(qrCode, graphql);
}