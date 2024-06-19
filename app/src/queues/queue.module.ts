// src/queues/queue.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueProcessor } from './queue.processor';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'test-queue',
    }),
  ],
  providers: [QueueProcessor],
  exports: [BullModule],
})
export class QueueModule { }
