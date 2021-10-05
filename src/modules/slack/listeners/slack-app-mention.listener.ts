import { SlackEventMiddlewareArgs } from '@slack/bolt';
import { Injectable } from '@nestjs/common';
import { OnSlackEvent } from '../decorators/event.decorator';

@Injectable()
export class SlackAppMentionListener {
  @OnSlackEvent('app_mention')
  async handler({ payload, body, say }: SlackEventMiddlewareArgs) {
    try {
      console.log(payload, body);
      await say('response mention from controller using decorators');
    } catch (error) {
      console.error('ERR:', error);
    }
  }
}
