import { Module } from '@nestjs/common';
import { CommitService } from './commit.service';
import { CommitController } from './commit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommitEntity } from './commit.entity';

@Module({
  controllers: [CommitController],
  providers: [CommitService],
  imports: [TypeOrmModule.forFeature([CommitEntity])]
})
export class CommitModule {}
