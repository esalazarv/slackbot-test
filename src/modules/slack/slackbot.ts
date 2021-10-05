import { App } from '@slack/bolt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class SlackBot extends App {
  constructor(private configService: ConfigService) {
    super({
      token: configService.get('slack.token'),
      signingSecret: configService.get('slack.signingSecret'),
      socketMode: true,
      appToken: configService.get('slack.appToken'),
    });
  }
}
