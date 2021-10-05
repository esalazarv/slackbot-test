import { SetMetadata } from '@nestjs/common';
import { SlackEventMiddlewareArgs } from '@slack/bolt';

export const SLACK_EVENT_HANDLER = 'slack:event.handler';
export interface SlackEventMetadata {
  name: string;
}

export interface ISlackEventListener {
  handler: (args: SlackEventMiddlewareArgs) => Promise<void>;
}

export const OnSlackEvent = (name: string) => {
  return (
    target: ISlackEventListener,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    SetMetadata<string, SlackEventMetadata>(SLACK_EVENT_HANDLER, {
      name,
    })(target, propertyKey, descriptor);
  };
};
