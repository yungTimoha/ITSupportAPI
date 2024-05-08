import {Injectable, OnModuleInit} from '@nestjs/common';
import {Prisma, PrismaClient} from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query'> implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async startTransaction<T>(context: string, callback: (tx: Prisma.TransactionClient) => Promise<T>) {
        try {
            return await this.$transaction(
                async (tx) => {
                    try {
                        return await callback(tx);
                    } catch (err) {
                        throw err;
                    }
                },
                {
                    maxWait: 9 * 1000,
                    timeout: 9 * 1000,
                    isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
                },
            );
        } catch (err) {
            throw err;
        }
    }

    async continueTransaction<T>(tx: Prisma.TransactionClient, context: string, callback: (tx: Prisma.TransactionClient) => Promise<T>) {
        if (tx) return callback(tx);
        return this.startTransaction(context, callback);
    }
}
