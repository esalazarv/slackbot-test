import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DiscoveryModule, DiscoveryService } from '@nestjs-plus/discovery';
import SlackBot from './slackbot';
import {
  SLACK_COMMAND,
  SlackCommandMetadata,
} from './decorators/command.decorator';
import {
  SLACK_EVENT_HANDLER,
  SlackEventMetadata,
} from './decorators/event.decorator';
import { SlackAppMentionListener } from './listeners/slack-app-mention.listener';
import { SlackKnowledgeCommand } from './commands/slack-knowledge.command.';

@Module({
  imports: [ConfigModule, DiscoveryModule],
  providers: [SlackBot, SlackKnowledgeCommand, SlackAppMentionListener],
  exports: [SlackBot],
  controllers: [],
})
export class SlackModule implements OnModuleInit {
  constructor(
    private readonly discover: DiscoveryService,
    private readonly slackBot: SlackBot,
  ) {}
  async onModuleInit() {
    await this.registerCommandHandlers();
    await this.registerEventHandlers();
  }

  async registerCommandHandlers() {
    const commandHandlers =
      await this.discover.providerMethodsWithMetaAtKey<SlackCommandMetadata>(
        SLACK_COMMAND,
      );

    for (const handler of commandHandlers) {
      await this.slackBot.command(
        handler.meta.command,
        handler.discoveredMethod.handler,
      );
    }
  }

  async registerEventHandlers() {
    const eventListeners =
      await this.discover.providerMethodsWithMetaAtKey<SlackEventMetadata>(
        SLACK_EVENT_HANDLER,
      );

    for (const listener of eventListeners) {
      await this.slackBot.event(
        listener.meta.name,
        listener.discoveredMethod.handler,
      );
    }
  }
}
