import { Controller } from '@nestjs/common';
import { CommitService } from './commit.service';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}
}
