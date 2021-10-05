import { Injectable } from '@nestjs/common';
import { OnSlackCommand } from '../decorators/command.decorator';
import { SlackCommandMiddlewareArgs } from '@slack/bolt';

@Injectable()
export class SlackKnowledgeCommand {
  @OnSlackCommand('/knowledge')
  async exec({ ack, say }: SlackCommandMiddlewareArgs): Promise<void> {
    try {
      await ack();
      await say('Response command from controller using decorators');
    } catch (error) {
      console.error('Err:', error);
    }
  }
}
