import { Test, TestingModule } from '@nestjs/testing';
import { SlackKnowledgeCommand } from './slack-knowledge.command.';

describe('SlackKnowledgeCommand', () => {
  let controller: SlackKnowledgeCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlackKnowledgeCommand],
    }).compile();

    controller = module.get<SlackKnowledgeCommand>(SlackKnowledgeCommand);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
