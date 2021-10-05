import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SlackBot from './modules/slack/slackbot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const slackbot = app.get(SlackBot);
  await slackbot.start();
  await app.listen(5000);
}
bootstrap();
