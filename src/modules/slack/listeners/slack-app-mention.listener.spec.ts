import { Test, TestingModule } from '@nestjs/testing';
import { SlackAppMentionListener } from './slack-app-mention.listener';

describe('SlackAppMentionListener', () => {
  let controller: SlackAppMentionListener;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlackAppMentionListener],
    }).compile();

    controller = module.get<SlackAppMentionListener>(SlackAppMentionListener);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
